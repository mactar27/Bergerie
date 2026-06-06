'use client';
import { useState, useEffect, useRef } from 'react';
import Splash from './Splash';

export default function SplashWrapper({ children }: { children: React.ReactNode }) {
  // If splash was already shown this session, skip it immediately
  const [show, setShow] = useState(false);
  const [fading, setFading] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    // Avoid StrictMode double-fire
    if (started.current) return;
    started.current = true;

    const alreadySeen = sessionStorage.getItem('splash_done');
    if (alreadySeen) {
      setShow(false);
      return;
    }

    // Show splash
    setShow(true);

    const t1 = setTimeout(() => setFading(true), 2200);
    const t2 = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem('splash_done', '1');
    }, 3000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <>
      {show && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            opacity: fading ? 0 : 1,
            transition: 'opacity 0.8s ease',
            pointerEvents: fading ? 'none' : 'all',
          }}
        >
          <Splash />
        </div>
      )}
      <div style={{ visibility: show && !fading ? 'hidden' : 'visible' }}>
        {children}
      </div>
    </>
  );
}
