import { NextResponse } from 'next/server'

type ContactPayload = {
  name?: string
  email?: string
  subject?: string
  message?: string
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

    console.log('contact', {
      name: body.name,
      email: body.email,
      subject: body.subject,
      message: body.message,
      source: 'contact-page',
      submittedAt: new Date().toISOString(),
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json(
      { ok: false, message: 'Invalid request payload' },
      { status: 400 }
    )
  }
}