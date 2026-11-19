import { NextResponse } from 'next/server'

type ContactPayload = {
  name?: string
  email?: string
  organisation?: string
  subject?: string
  preferredContact?: string
  phone?: string
  message?: string
  source?: string
  website?: string
}

export async function POST(request: Request) {
  let body: ContactPayload
  try {
    body = (await request.json()) as ContactPayload
  } catch {
    return NextResponse.json({ ok: false, message: 'Invalid request payload' }, { status: 400 })
  }

  // Honeypot filled: pretend success so bots don't retry
  if (body.website) {
    return NextResponse.json({ ok: true })
  }

  if (!body.name || !body.email || !body.subject) {
    return NextResponse.json({ ok: false, message: 'Missing required fields' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json({ ok: false, message: 'Email is not configured' }, { status: 500 })
  }

  const details = [
    `Name: ${body.name}`,
    `Email: ${body.email}`,
    body.organisation && `Organisation: ${body.organisation}`,
    `Interest / subject: ${body.subject}`,
    `Preferred contact: ${body.preferredContact || 'Email'}`,
    body.phone && `Phone / WhatsApp: ${body.phone}`,
    body.source && `Source: ${body.source}`,
  ].filter(Boolean).join('\n')

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'noreply@andrewtugume.com',
      to: 'andrewtugume2@gmail.com',
      reply_to: body.email,
      subject: `Enquiry: ${body.subject} — ${body.name}`,
      text: `${details}\n\n${body.message || '(no message)'}\n\nSubmitted: ${new Date().toISOString()}`,
    }),
  })

  if (!response.ok) {
    return NextResponse.json({ ok: false, message: 'Unable to send message' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
