'use client';
import Image from 'next/image';

export default function Splash() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#ffffff',
        zIndex: 9999,
      }}
    >
      <Image
        src="/images/logo-bergerie-malia.png"
        alt="Bergerie Malia"
        width={600}
        height={204}
        priority
        style={{
          width: '600px',
          maxWidth: '85vw',
          height: 'auto',
          animation: 'pulse 2s ease-in-out infinite',
        }}
      />
    </div>
  );
}
