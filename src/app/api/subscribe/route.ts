import { NextResponse } from 'next/server'

const RESEND = 'https://api.resend.com'
const FROM = 'Andrew Tugume <noreply@andrewtugume.com>'

// What each list's welcome email points people to next
const welcomes: Record<string, { subject: string; next: string; link: string }> = {
  'WorkMasters LIVE': {
    subject: 'You’re on the WorkMasters LIVE list',
    next: 'You’ll receive the WorkMasters LIVE dates as soon as they are confirmed. In the meantime, explore WorkMasters:',
    link: 'https://andrewtugume.com/workmasters',
  },
  'Bible Study': {
    subject: 'Welcome to Bible Study with Andrew Tugume',
    next: 'You’ll hear about new teaching, study guides and events. You can watch teaching on YouTube any time:',
    link: 'https://www.youtube.com/@drewbiblemedia',
  },
  Resources: {
    subject: 'Welcome — new resources are on the way',
    next: 'You’ll receive new articles, frameworks and teaching as they are published. Start here:',
    link: 'https://andrewtugume.com/resources',
  },
}

async function resend(path: string, apiKey: string, body: unknown) {
  return fetch(`${RESEND}${path}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
}

export async function POST(request: Request) {
  let body: { email?: unknown; interest?: unknown; source?: unknown; website?: unknown }
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
  const source = typeof body.source === 'string' ? body.source : ''

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, message: 'Invalid email' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json({ ok: false, message: 'Email is not configured' }, { status: 500 })
  }

  // 1. Add to the mailing list (Resend audience), when one is configured
  const audienceId = process.env.RESEND_AUDIENCE_ID
  let listed = false
  if (audienceId) {
    const response = await resend(`/audiences/${audienceId}/contacts`, apiKey, { email, unsubscribed: false })
    listed = response.ok
  }

  // 2. Notify Andrew — this also keeps the sign-up if the list step failed
  const notification = await resend('/emails', apiKey, {
    from: FROM,
    to: 'andrewtugume2@gmail.com',
    reply_to: email,
    subject: `New sign-up: ${interest}`,
    text: [
      `Email: ${email}`,
      `List: ${interest}`,
      `Added to mailing list: ${audienceId ? (listed ? 'yes' : 'NO — add manually') : 'no list configured'}`,
      source && `Source: ${source}`,
      `Submitted: ${new Date().toISOString()}`,
    ].filter(Boolean).join('\n'),
  })

  if (!listed && !notification.ok) {
    return NextResponse.json({ ok: false, message: 'Unable to subscribe' }, { status: 502 })
  }

  // 3. Welcome email — best effort; a failure here never fails the sign-up
  const welcome = welcomes[interest] ?? welcomes.Resources
  await resend('/emails', apiKey, {
    from: FROM,
    to: email,
    reply_to: 'andrewtugume2@gmail.com',
    subject: welcome.subject,
    text: `Hello,\n\nThank you for signing up.\n\n${welcome.next}\n${welcome.link}\n\nAndrew Tugume\nhttps://andrewtugume.com\n\nYou received this because you signed up at andrewtugume.com. Reply to this email if you’d like to be removed.`,
  }).catch(() => undefined)

  return NextResponse.json({ ok: true })
}
