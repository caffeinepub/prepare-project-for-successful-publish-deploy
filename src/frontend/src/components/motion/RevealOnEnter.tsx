import { ReactNode, useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

interface RevealOnEnterProps {
  children: ReactNode;
  delay?: number;
}

export function RevealOnEnter({ children, delay = 0 }: RevealOnEnterProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay * 1000);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-500
        ${isVisible ? 'opacity-100' : 'opacity-0'}
        ${!prefersReducedMotion && !isVisible ? 'translate-y-4' : 'translate-y-0'}
      `}
    >
      {children}
    </div>
  );
}
