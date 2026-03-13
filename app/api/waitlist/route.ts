import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const FILE = path.join(process.cwd(), 'data', 'waitlist.json');

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email || !email.includes('@')) {
      return NextResponse.json({ ok: false, error: 'Invalid email' }, { status: 400 });
    }

    let data: { emails: { email: string; ts: string }[] } = { emails: [] };
    try {
      const raw = await fs.readFile(FILE, 'utf-8');
      data = JSON.parse(raw);
    } catch { /* first entry */ }

    if (!data.emails) data.emails = [];
    if (!data.emails.find(e => e.email === email)) {
      data.emails.push({ email, ts: new Date().toISOString() });
      await fs.writeFile(FILE, JSON.stringify(data, null, 2));
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 });
  }
}
