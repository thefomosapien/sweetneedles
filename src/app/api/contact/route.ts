import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, artist, message } = body;

    // Validate required fields
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    // Supabase integration — only runs when env vars are set
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (supabaseUrl && supabaseKey) {
      const { createClient } = await import("@supabase/supabase-js");
      const supabase = createClient(supabaseUrl, supabaseKey);

      const { error: dbError } = await supabase
        .from("contact_submissions")
        .insert({
          name: name.trim(),
          email: email.trim(),
          phone: phone?.trim() ?? null,
          artist: artist?.trim() ?? null,
          message: message.trim(),
        });

      if (dbError) {
        console.error("Supabase insert error:", dbError);
        return NextResponse.json({ error: "Database error" }, { status: 500 });
      }
    } else {
      // Development fallback — log to console
      console.log("Contact form submission (no Supabase configured):", {
        name, email, phone, artist, message,
      });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
