'use client'
import { useState } from 'react'

export default function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setStatus('loading')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const d = await res.json()
      setStatus(d.ok ? 'done' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div className="text-center py-4">
        <div className="text-3xl mb-3">✅</div>
        <p className="text-lg font-semibold text-white">You&apos;re on the list.</p>
        <p className="text-slate-400 mt-1 text-sm">We&apos;ll be in touch before launch.</p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email" required value={email} onChange={e => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 outline-none focus:border-amber-500 transition-colors text-sm"
      />
      <button type="submit" disabled={status === 'loading'}
        className="px-6 py-3 bg-amber-500 hover:bg-amber-400 disabled:opacity-60 text-slate-950 font-semibold rounded-lg transition-colors text-sm whitespace-nowrap">
        {status === 'loading' ? 'Joining…' : 'Join Waitlist'}
      </button>
      {status === 'error' && <p className="text-red-400 text-xs mt-1 w-full">Something went wrong — try again.</p>}
    </form>
  )
}
