'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Template({ children }) {
  const container = useRef();

  useGSAP(() => {
    // A smooth minimal entrance animation that plays every time a route changes
    gsap.fromTo(container.current, 
      { opacity: 0, y: 12 }, 
      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', clearProps: 'all' }
    );
  }, { scope: container });

  return <div ref={container}>{children}</div>;
}
