import { NextResponse } from 'next/server'

// Notifies Andrew of each sign-up. There is no list storage yet — see the
// content verification register for the mailing-list platform decision.
export async function POST(request: Request) {
  let body: { email?: unknown; interest?: unknown; website?: unknown }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, message: 'Invalid request payload' }, { status: 400 })
  }

  // Honeypot filled: pretend success so bots don't retry
  if (body.website) {
    return NextResponse.json({ ok: true })
  }

  const email = typeof body.email === 'string' ? body.email.trim() : ''
  const interest = typeof body.interest === 'string' && body.interest ? body.interest : 'General updates'

  if (!email || !email.includes('@')) {
    return NextResponse.json({ ok: false, message: 'Invalid email' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json({ ok: false, message: 'Email is not configured' }, { status: 500 })
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'noreply@andrewtugume.com',
      to: 'andrewtugume2@gmail.com',
      reply_to: email,
      subject: `New sign-up: ${interest}`,
      text: `Email: ${email}\nList: ${interest}\nSubmitted: ${new Date().toISOString()}`,
    }),
  })

  if (!response.ok) {
    return NextResponse.json({ ok: false, message: 'Unable to subscribe' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
