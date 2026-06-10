import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const email = typeof body?.email === 'string' ? body.email.trim() : ''

    if (!email || !email.includes('@')) {
      return NextResponse.json({ ok: false, message: 'Invalid email' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (apiKey) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'noreply@andrewtugume.com',
          to: 'andrewtugume2@gmail.com',
          subject: 'New newsletter subscriber',
          text: `New subscriber: ${email}\nSubmitted: ${new Date().toISOString()}`,
        }),
      })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false, message: 'invalid' }, { status: 400 })
  }
}
