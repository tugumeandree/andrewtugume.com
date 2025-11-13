import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    // In a real app, persist to a DB or newsletter provider
    console.log('subscribe', body)
    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json({ ok: false, message: 'invalid' }, { status: 400 })
  }
}
