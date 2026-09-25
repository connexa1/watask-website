import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'WaTask - Send one campaign to many WhatsApp groups';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0A0E1A 0%, #1a2332 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Grid pattern background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(0, 255, 148, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 148, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
        
        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: 'flex',
              fontSize: 80,
              fontWeight: 800,
              color: '#F5F7FA',
              letterSpacing: '-0.05em',
              marginBottom: 40,
            }}
          >
            WA<span style={{ color: '#00FF94' }}>TASK</span>
          </div>
          
          {/* Tagline */}
          <div
            style={{
              display: 'flex',
              fontSize: 36,
              color: '#B4BCC8',
              textAlign: 'center',
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            Send one campaign to many WhatsApp groups
          </div>
        </div>
        
        {/* Glow effect */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            right: '10%',
            width: 400,
            height: 400,
            background: 'radial-gradient(circle, rgba(0, 255, 148, 0.15) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
