import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Calm Home — Home automation bundles that actually work'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0f172a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Soft glow behind house */}
        <div
          style={{
            position: 'absolute',
            width: 320,
            height: 320,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(251,191,36,0.15) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* House SVG */}
        <svg width="120" height="110" viewBox="0 0 120 110" fill="none">
          {/* Roof */}
          <polygon points="60,8 108,52 12,52" fill="#fbbf24" />
          {/* Chimney */}
          <rect x="78" y="20" width="12" height="22" fill="#f59e0b" />
          {/* House body */}
          <rect x="18" y="52" width="84" height="52" rx="2" fill="#1e293b" />
          {/* Door */}
          <rect x="48" y="72" width="24" height="32" rx="3" fill="#fbbf24" />
          {/* Door knob */}
          <circle cx="68" cy="90" r="2.5" fill="#0f172a" />
          {/* Left window */}
          <rect x="26" y="62" width="18" height="16" rx="2" fill="#fbbf24" opacity="0.6" />
          {/* Right window */}
          <rect x="76" y="62" width="18" height="16" rx="2" fill="#fbbf24" opacity="0.6" />
          {/* Window pane lines */}
          <line x1="35" y1="62" x2="35" y2="78" stroke="#0f172a" strokeWidth="1.5" />
          <line x1="26" y1="70" x2="44" y2="70" stroke="#0f172a" strokeWidth="1.5" />
          <line x1="85" y1="62" x2="85" y2="78" stroke="#0f172a" strokeWidth="1.5" />
          <line x1="76" y1="70" x2="94" y2="70" stroke="#0f172a" strokeWidth="1.5" />
        </svg>

        {/* Brand name */}
        <div
          style={{
            color: '#ffffff',
            fontSize: 64,
            fontWeight: 700,
            letterSpacing: '-2px',
            marginTop: 28,
            display: 'flex',
          }}
        >
          Calm Home
        </div>

        {/* Tagline */}
        <div
          style={{
            color: '#94a3b8',
            fontSize: 26,
            marginTop: 14,
            letterSpacing: '0.5px',
            display: 'flex',
          }}
        >
          Home automation bundles that actually work.
        </div>

        {/* Domain */}
        <div
          style={{
            color: '#fbbf24',
            fontSize: 20,
            marginTop: 20,
            display: 'flex',
          }}
        >
          calmhome.io
        </div>
      </div>
    ),
    { ...size }
  )
}
