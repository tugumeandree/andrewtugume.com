import { NextResponse } from 'next/server'

type ContactPayload = {
  name?: string
  email?: string
  subject?: string
  message?: string
}

async function sendEmail(to: string, subject: string, text: string) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return

  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'noreply@andrewtugume.com',
      to,
      subject,
      text,
    }),
  })
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload

    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { ok: false, message: 'Missing required fields' },
        { status: 400 }
      )
    }

    await sendEmail(
      'andrewtugume2@gmail.com',
      `Contact: ${body.subject}`,
      `Name: ${body.name}\nEmail: ${body.email}\nSubject: ${body.subject}\n\n${body.message}\n\nSubmitted: ${new Date().toISOString()}`
    )

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json(
      { ok: false, message: 'Invalid request payload' },
      { status: 400 }
    )
  }
}
