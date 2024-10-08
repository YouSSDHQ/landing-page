import { useEffect, useRef, useState } from 'react';

type ScrollAnimationWrapperProps = {
  children: React.ReactNode;
  prefersReducedMotion: boolean;
  className?: string;
};

const ScrollAnimationWrapper: React.FC<ScrollAnimationWrapperProps> = ({
  children,
  prefersReducedMotion,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    const currentRef = ref.current;
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const animationClass = prefersReducedMotion
    ? ''
    : isVisible
    ? 'animate-fadeIn'
    : 'opacity-0 translate-y-10';

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${animationClass} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimationWrapper;
