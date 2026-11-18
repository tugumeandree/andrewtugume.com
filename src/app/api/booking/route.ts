import { NextResponse } from 'next/server'

type BookingPayload = {
  name?: string
  email?: string
  phone?: string
  organization?: string
  role?: string
  engagementType?: string
  eventName?: string
  eventDate?: string
  location?: string
  audienceSize?: string
  budget?: string
  topic?: string
  message?: string
  additional?: string
  kind?: 'speaking' | 'ministry'
  website?: string
}

const fieldLabels: Array<[keyof BookingPayload, string]> = [
  ['name', 'Name'],
  ['email', 'Email'],
  ['phone', 'Phone / WhatsApp'],
  ['organization', 'Organization'],
  ['role', 'Role'],
  ['engagementType', 'Engagement type'],
  ['topic', 'Topic'],
  ['eventName', 'Event / episode'],
  ['eventDate', 'Date / timeframe'],
  ['location', 'Location'],
  ['audienceSize', 'Audience size'],
  ['budget', 'Budget'],
  ['additional', 'Additional information'],
]

export async function POST(request: Request) {
  let body: BookingPayload
  try {
    body = (await request.json()) as BookingPayload
  } catch {
    return NextResponse.json({ ok: false, message: 'Invalid request payload' }, { status: 400 })
  }

  // Honeypot filled: pretend success so bots don't retry
  if (body.website) {
    return NextResponse.json({ ok: true })
  }

  if (!body.name || !body.email || !body.organization || !body.engagementType || !body.message) {
    return NextResponse.json({ ok: false, message: 'Missing required fields' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json({ ok: false, message: 'Email is not configured' }, { status: 500 })
  }

  const details = fieldLabels
    .filter(([key]) => body[key])
    .map(([key, label]) => `${label}: ${body[key]}`)
    .join('\n')

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
      subject: `${body.kind === 'ministry' ? 'Teaching invitation' : 'Booking request'}: ${body.engagementType} — ${body.organization}`,
      text: `${details}\n\n${body.message}\n\nSubmitted: ${new Date().toISOString()}`,
    }),
  })

  if (!response.ok) {
    return NextResponse.json({ ok: false, message: 'Unable to send request' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
