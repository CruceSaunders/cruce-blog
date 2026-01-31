import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Cruce Saunders - Building Ippo';
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
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #FAFAFA 0%, #F3F4F6 100%)',
          fontFamily: 'system-ui',
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 8,
            background: 'linear-gradient(90deg, #0EA5E9 0%, #06B6D4 100%)',
          }}
        />
        
        {/* Logo */}
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: 24,
            background: 'linear-gradient(135deg, #0EA5E9 0%, #06B6D4 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          }}
        >
          <span style={{ fontSize: 56, fontWeight: 700, color: 'white' }}>CS</span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: '#111827',
            marginBottom: 16,
          }}
        >
          Cruce Saunders
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 32,
            color: '#6B7280',
            marginBottom: 40,
          }}
        >
          17 · Building Ippo · Documenting the journey
        </div>

        {/* URL */}
        <div
          style={{
            fontSize: 24,
            color: '#0EA5E9',
            fontWeight: 500,
          }}
        >
          cruce-blog.vercel.app
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
