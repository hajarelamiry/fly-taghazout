import { NextRequest, NextResponse } from 'next/server';
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;").replace(/</g, "&lt;")
    .replace(/>/g, "&gt;").replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function e(val: unknown) {
  return escapeHtml(String(val || "").trim());
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:10px 12px;font-weight:600;color:#555;width:160px;border-bottom:1px solid #f0f0f0;">${label}</td>
      <td style="padding:10px 12px;border-bottom:1px solid #f0f0f0;color:#111;">${value}</td>
    </tr>`;
}

function buildHtml(rows: string) {
  return `
    <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;padding:24px;border:1px solid #e5e7eb;border-radius:8px;">
      <div style="background:linear-gradient(135deg,#c2622a,#e8853a);padding:20px 24px;border-radius:6px;margin-bottom:24px;">
        <h2 style="margin:0;color:#fff;font-size:20px;">🪂 Nouvelle réservation — Fly Taghazout</h2>
      </div>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        ${rows}
        ${row("Reçue le", new Date().toLocaleString('fr-FR'))}
      </table>
      <p style="margin-top:20px;font-size:12px;color:#999;">
        Répondez directement à cet email pour contacter le client.
      </p>
    </div>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { recaptchaToken } = body;

    // --- reCAPTCHA ---
    if (!recaptchaToken) {
      return NextResponse.json({ error: "reCAPTCHA manquant" }, { status: 400 });
    }
    const verifyRes = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      { method: "POST" }
    );
    const verifyData = await verifyRes.json();
    if (!verifyData.success || verifyData.score < 0.5) {
      return NextResponse.json({ error: "reCAPTCHA invalide" }, { status: 400 });
    }

    // --- Validation ---
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = e(body.email);
    const name  = e(body.name);
    const phone = e(body.phone);

    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 });
    }
    if (!name) {
      return NextResponse.json({ error: "Nom requis" }, { status: 400 });
    }
    if (!phone) {
      return NextResponse.json({ error: "Téléphone requis" }, { status: 400 });
    }

    // --- Données réservation ---
    const experience = e(body.experience);
    const occasion   = e(body.occasion);
    const date       = body.date
      ? new Date(body.date).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
      : "—";
    const addPhotos  = body.addPhotos ? "Oui" : "Non";
    const addMessage = body.addMessage ? "Oui" : "Non";

   

   
    const html = buildHtml(
      row("Nom",               name) +
      row("Email",             `<a href="mailto:${email}">${email}</a>`) +
      row("Téléphone",         phone) +
      row("Expérience",        experience || "—") +
      row("Occasion",          occasion   || "—") +
      row("Date souhaitée",    date) +
      row("Pack photos/vidéos", addPhotos) +
      row("Message personnalisé", addMessage)
    );

    const { error: sendError } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.RECIPIENT_EMAIL!,
      replyTo: email,
      subject: `🪂 Nouvelle réservation — ${name} · ${experience || "Vol"}`,
      html,
    });

    if (sendError) {
      console.error("Resend error:", sendError);
      return NextResponse.json({ error: "Erreur envoi email" }, { status: 500 });
    }

    

    return NextResponse.json({ ok: true });

  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Erreur interne" }, { status: 500 });
  }
}