'use client'

import { useState } from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import { PACKAGES } from '@/lib/packages'

// ── Types ──────────────────────────────────────────────────────────────────

type Answer = {
  label: string
  emoji: string
  value: string
}

type Question = {
  id: number
  question: string
  answers: Answer[]
}

type QuizState = {
  q1: string // frustration
  q2: string // own/rent
  q3: string // tech comfort
  q4: string // budget
}

// ── Quiz content ───────────────────────────────────────────────────────────

const questions: Question[] = [
  {
    id: 1,
    question: "What's your biggest frustration right now?",
    answers: [
      { label: "I worry about who's coming and going", emoji: '🚪', value: 'security' },
      { label: "I want to keep an eye on the kids at home", emoji: '👧', value: 'kids' },
      { label: "My mornings feel chaotic", emoji: '☀️', value: 'mornings' },
      { label: "I want to automate everything", emoji: '🏡', value: 'automate' },
    ],
  },
  {
    id: 2,
    question: 'Do you own or rent your home?',
    answers: [
      { label: 'I own my home', emoji: '🏠', value: 'own' },
      { label: 'I rent', emoji: '🔑', value: 'rent' },
    ],
  },
  {
    id: 3,
    question: 'How comfortable are you with tech?',
    answers: [
      { label: 'Not very — I just want it to work', emoji: '😌', value: 'low' },
      { label: 'Somewhat — I can follow instructions', emoji: '🙂', value: 'medium' },
      { label: 'Pretty comfortable — I like tinkering', emoji: '🛠', value: 'high' },
    ],
  },
  {
    id: 4,
    question: "What's your budget?",
    answers: [
      { label: 'Under $100', emoji: '💰', value: 'under100' },
      { label: '$100 – $300', emoji: '💳', value: '100to300' },
      { label: '$300 – $500', emoji: '💵', value: '300to500' },
      { label: '$500+', emoji: '🏆', value: '500plus' },
    ],
  },
]

// ── Recommendation logic ───────────────────────────────────────────────────

const FALLBACK_UNDER_100: Record<string, string> = {
  'good-neighbor': 'never-leave-worried',
  'safe-kids': 'pet-parent',
  'easy-mornings': 'welcome-home',
  'full-calm': 'never-leave-worried',
}

const FALLBACK_100_300: Record<string, string> = {
  'good-neighbor': 'easy-mornings',
  'full-calm': 'safe-kids',
}

const FALLBACK_300_500: Record<string, string> = {
  'full-calm': 'good-neighbor',
}

function getSlugFromQ1(q1: string): string {
  switch (q1) {
    case 'security': return 'good-neighbor'
    case 'kids': return 'safe-kids'
    case 'mornings': return 'easy-mornings'
    case 'automate': return 'full-calm'
    default: return 'good-neighbor'
  }
}

function getRecommendedSlug(state: QuizState): string {
  const primary = getSlugFromQ1(state.q1)
  const pkg = PACKAGES.find(p => p.slug === primary)!

  if (state.q4 === 'under100') {
    if (pkg.price > 100) return FALLBACK_UNDER_100[primary] ?? 'welcome-home'
    return primary
  }
  if (state.q4 === '100to300') {
    if (pkg.price > 300) return FALLBACK_100_300[primary] ?? primary
    return primary
  }
  if (state.q4 === '300to500') {
    if (pkg.price > 500) return FALLBACK_300_500[primary] ?? primary
    return primary
  }
  // 500plus — return primary (full-calm fits)
  return primary
}

function getAlternatives(recommended: string, q1: string): string[] {
  // 2 alternatives that aren't the recommended package
  const alternatives: Record<string, string[]> = {
    'good-neighbor': ['never-leave-worried', 'weekend-away'],
    'safe-kids': ['welcome-home', 'pet-parent'],
    'easy-mornings': ['work-from-home', 'welcome-home'],
    'full-calm': ['good-neighbor', 'easy-mornings'],
    'welcome-home': ['easy-mornings', 'work-from-home'],
    'never-leave-worried': ['good-neighbor', 'weekend-away'],
    'weekend-away': ['good-neighbor', 'never-leave-worried'],
    'work-from-home': ['easy-mornings', 'welcome-home'],
    'pet-parent': ['safe-kids', 'weekend-away'],
  }
  return alternatives[recommended] ?? ['good-neighbor', 'easy-mornings']
}

function getWhyItFits(recommended: string, state: QuizState): string {
  const ownerNote = state.q2 === 'rent' ? 'This package is fully renter-friendly — no permanent installation required.' : null
  const techNote = state.q3 === 'low' ? 'Our step-by-step guide makes setup simple, no experience needed.' : null

  const explanations: Record<string, string> = {
    'good-neighbor': "Based on your answers, controlling who can access your home is your top priority — Good Neighbor gives you a smart lock, video doorbell, and porch light automation in one cohesive kit.",
    'safe-kids': "You want eyes on your home and family — Safe Kids gives you three cameras, door sensors, and motion alerts so you always know what's happening.",
    'easy-mornings': "Your mornings need a system, not a miracle — Easy Mornings automates your thermostat, lighting, and plugs so the house is ready before you are.",
    'full-calm': "You want the whole picture — Full Calm bundles entry security, family safety, and morning automation into one unified smart home system.",
    'welcome-home': "Welcome Home is a great fit for your budget and goals — motion-triggered lights and smart plugs mean your home is ready the moment you walk in.",
    'never-leave-worried': "For your budget, Never Leave Worried gives you real peace of mind — smart plugs that auto-shut off appliances and door sensors you can check from anywhere.",
    'weekend-away': "Weekend Away is built for exactly this — a camera, door sensors, and random-timer plugs that make your home look occupied when you're not there.",
    'work-from-home': "Work From Home transforms your setup with smart lighting tuned for video calls and plugs that enforce a work schedule automatically.",
    'pet-parent': "Pet Parent is our most focused package for watching over a furry family member — a pan/tilt camera, motion sensor, and smart plug for the feeder.",
  }

  const base = explanations[recommended] ?? "This package is a great match for your answers."
  const extras = [ownerNote, techNote].filter(Boolean).join(' ')
  return extras ? `${base} ${extras}` : base
}

// ── Result renderer ─────────────────────────────────────────────────────────

function ResultPage({ state, onRetake }: { state: QuizState; onRetake: () => void }) {
  const slug = getRecommendedSlug(state)
  const pkg = PACKAGES.find(p => p.slug === slug)!
  const altSlugs = getAlternatives(slug, state.q1)
  const alts = altSlugs.map(s => PACKAGES.find(p => p.slug === s)!).filter(Boolean)
  const whyItFits = getWhyItFits(slug, state)
  const isRenter = state.q2 === 'rent'
  const renterNote = isRenter && ['good-neighbor'].includes(slug) ? null : isRenter

  return (
    <div className="animate-fade-in">
      {/* Result header */}
      <div className="text-center mb-10">
        <p className="text-amber-400 text-sm font-medium tracking-wide uppercase mb-3">Your recommendation</p>
        <h2 className="text-3xl font-bold text-white mb-2">We found your match.</h2>
        <p className="text-slate-400">Based on your answers, here's the package built for you.</p>
      </div>

      {/* Main recommendation card */}
      <div className="bg-slate-900 border-2 border-amber-400/40 rounded-2xl p-8 mb-6">
        <div className="flex items-start gap-5 mb-6">
          <div className="text-5xl">{pkg.icon}</div>
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <h3 className="text-2xl font-bold text-white">{pkg.name}</h3>
              {pkg.badge && (
                <span className="text-xs bg-amber-400 text-slate-900 font-bold px-2 py-0.5 rounded-full">{pkg.badge}</span>
              )}
            </div>
            <p className="text-amber-300 text-sm mb-2">{pkg.tagline}</p>
            <p className="text-3xl font-bold text-white">{pkg.priceLabel}</p>
          </div>
        </div>

        {/* Why it fits */}
        <div className="bg-slate-800/60 rounded-xl p-5 mb-6">
          <p className="text-sm font-semibold text-amber-400 mb-2">Why this fits you</p>
          <p className="text-slate-300 text-sm leading-relaxed">{whyItFits}</p>
        </div>

        {/* Renter note */}
        {isRenter && (
          <div className="bg-green-900/20 border border-green-700/40 rounded-xl p-4 mb-6">
            <p className="text-green-300 text-sm">
              ✅ <strong>Good news</strong> — this package is fully renter-friendly. No permanent installation required.
            </p>
          </div>
        )}

        {/* Renter warning for Schlage lock */}
        {isRenter && slug === 'good-neighbor' && (
          <div className="bg-amber-400/10 border border-amber-400/30 rounded-xl p-4 mb-6">
            <p className="text-amber-200 text-sm">
              💡 <strong>One note:</strong> The Schlage smart lock requires replacing your deadbolt. Most landlords allow this, but check your lease first. The rest of the package installs without any permanent changes.
            </p>
          </div>
        )}

        <Link
          href={`/packages/${pkg.slug}`}
          className="w-full flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-semibold px-6 py-4 rounded-xl transition-colors text-lg"
        >
          View the {pkg.name} Package →
        </Link>
      </div>

      {/* Guide link if available */}
      {['good-neighbor', 'easy-mornings', 'full-calm', 'safe-kids', 'welcome-home', 'never-leave-worried', 'weekend-away', 'work-from-home', 'pet-parent'].includes(slug) && (
        <div className="text-center mb-8">
          <Link
            href={`/guides/${slug}`}
            className="text-amber-400 hover:text-amber-300 text-sm transition-colors"
          >
            See the step-by-step setup guide →
          </Link>
        </div>
      )}

      {/* You might also like */}
      {alts.length > 0 && (
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-white mb-4">You might also like</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {alts.map(alt => (
              <Link
                key={alt.slug}
                href={`/packages/${alt.slug}`}
                className="bg-slate-900 border border-slate-800 hover:border-amber-500/30 rounded-xl p-5 transition-all hover:-translate-y-0.5 group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{alt.icon}</span>
                  <div>
                    <p className="font-semibold text-white text-sm group-hover:text-amber-300 transition-colors">{alt.name}</p>
                    <p className="text-amber-400 text-sm font-bold">{alt.priceLabel}</p>
                  </div>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">{alt.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Retake */}
      <div className="text-center">
        <button
          onClick={onRetake}
          className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
        >
          ← Retake the quiz
        </button>
      </div>
    </div>
  )
}

// ── Main Quiz component ────────────────────────────────────────────────────

export default function QuizPage() {
  const [step, setStep] = useState(0) // 0 = not started, 1–4 = questions, 5 = result
  const [answers, setAnswers] = useState<Partial<QuizState>>({})
  const [animating, setAnimating] = useState(false)

  const totalSteps = 4

  function start() {
    setAnswers({})
    setStep(1)
  }

  function handleAnswer(value: string) {
    if (animating) return

    const keys: (keyof QuizState)[] = ['q1', 'q2', 'q3', 'q4']
    const key = keys[step - 1]
    const next = { ...answers, [key]: value } as Partial<QuizState>
    setAnswers(next)

    setAnimating(true)
    setTimeout(() => {
      if (step < totalSteps) {
        setStep(step + 1)
      } else {
        setStep(5)
      }
      setAnimating(false)
    }, 300)
  }

  function retake() {
    setAnswers({})
    setStep(0)
  }

  const currentQuestion = step >= 1 && step <= 4 ? questions[step - 1] : null
  const progress = step <= 4 ? (step - 1) / totalSteps * 100 : 100

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Nav />
      <main className="max-w-2xl mx-auto px-6 py-24">

        {/* ── Landing / intro ── */}
        {step === 0 && (
          <div className="text-center animate-fade-in">
            <div className="text-6xl mb-6">🏡</div>
            <p className="text-amber-400 text-sm font-medium tracking-wide uppercase mb-3">Not sure where to start?</p>
            <h1 className="text-4xl font-bold text-white mb-4">Find your perfect package</h1>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Answer 4 quick questions and we'll recommend the Calm Home package that fits your home, your budget, and your life.
            </p>
            <button
              onClick={start}
              className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-semibold px-10 py-4 rounded-full transition-colors text-lg"
            >
              Take the quiz →
            </button>
            <p className="text-slate-600 text-sm mt-4">Takes about 60 seconds</p>
          </div>
        )}

        {/* ── Questions ── */}
        {step >= 1 && step <= 4 && currentQuestion && (
          <div className={`transition-opacity duration-300 ${animating ? 'opacity-0' : 'opacity-100'}`}>
            {/* Progress bar */}
            <div className="mb-10">
              <div className="flex items-center justify-between text-sm text-slate-500 mb-3">
                <span>Question {step} of {totalSteps}</span>
                <span>{Math.round((step - 1) / totalSteps * 100)}% done</span>
              </div>
              <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-400 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              {currentQuestion.question}
            </h2>

            {/* Answer cards */}
            <div className="space-y-3">
              {currentQuestion.answers.map((answer) => (
                <button
                  key={answer.value}
                  onClick={() => handleAnswer(answer.value)}
                  className="w-full flex items-center gap-5 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-amber-400/50 rounded-2xl px-6 py-5 text-left transition-all group"
                >
                  <span className="text-3xl group-hover:scale-110 transition-transform">{answer.emoji}</span>
                  <span className="text-white font-medium text-lg">{answer.label}</span>
                </button>
              ))}
            </div>

            {/* Back */}
            {step > 1 && (
              <div className="mt-8 text-center">
                <button
                  onClick={() => setStep(step - 1)}
                  className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
                >
                  ← Go back
                </button>
              </div>
            )}
          </div>
        )}

        {/* ── Result ── */}
        {step === 5 && (
          <ResultPage state={answers as QuizState} onRetake={retake} />
        )}

      </main>
    </div>
  )
}
