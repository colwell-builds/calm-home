import { NextRequest, NextResponse } from 'next/server'
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'
import { Resend } from 'resend'

const DATA_FILE = join(process.cwd(), 'data', 'waitlist.json')

export async function POST(req: NextRequest) {
  try {
    const { email, name } = await req.json()
    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    // Read existing waitlist
    let waitlist: { email: string; name?: string; joinedAt: string }[] = []
    if (existsSync(DATA_FILE)) {
      waitlist = JSON.parse(readFileSync(DATA_FILE, 'utf8'))
    } else {
      mkdirSync(join(process.cwd(), 'data'), { recursive: true })
    }

    // Check for duplicate
    if (waitlist.find(e => e.email === email)) {
      return NextResponse.json({ message: 'Already on the list!' })
    }

    // Add new entry
    waitlist.push({ email, name, joinedAt: new Date().toISOString() })
    writeFileSync(DATA_FILE, JSON.stringify(waitlist, null, 2))

    // Send confirmation email (non-blocking)
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY)
        await resend.emails.send({
          from: 'Calm Home <onboarding@resend.dev>',
          to: email,
          subject: "You're on the list — Calm Home",
          html: `<div style="font-family: sans-serif; max-width: 500px; margin: 0 auto; padding: 24px; color: #1e293b;">
  <h2 style="color: #1e293b; margin-bottom: 8px;">You're on the list. 🏠</h2>
  <p style="color: #475569; line-height: 1.6;">Thanks for joining the Calm Home waitlist. We're putting the finishing touches on something we think you'll love — smart home bundles built around the <em>feeling</em> of a calm, well-run home, not just the gadgets.</p>
  <p style="color: #475569; line-height: 1.6;">We'll be in touch when we launch. In the meantime, feel free to reply if you have any questions.</p>
  <p style="color: #475569; line-height: 1.6;">— The Calm Home team</p>
</div>`,
        })
      } catch (emailErr) {
        console.error('Resend error:', emailErr)
      }
    }

    return NextResponse.json({ message: "You're on the list!" })
  } catch (err) {
    console.error('Waitlist error:', err)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
