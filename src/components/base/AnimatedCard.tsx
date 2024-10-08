import { useRef, useState } from 'react';

type AnimatedCardProps = {
  children: React.ReactNode;
  className?: string;
  prefersReducedMotion: boolean;
};

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  prefersReducedMotion,
  className = '',
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  const animationClass = prefersReducedMotion
    ? ''
    : 'transition-all duration-200 ease-out hover:scale-[1.02]';

  const cardStyle =
    isHovered && !prefersReducedMotion
      ? {
          transform: `
            perspective(1000px)
            rotateX(${
              (mousePosition.y / (cardRef.current?.offsetHeight ?? 1) - 0.5) *
              -10
            }deg)
            rotateY(${
              (mousePosition.x / (cardRef.current?.offsetWidth ?? 1) - 0.5) * 10
            }deg)
          `,
          transition: 'transform 0.2s ease-out',
        }
      : {
          transform: 'none',
          transition: 'transform 0.5s ease-out',
        };

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden rounded-lg ${animationClass} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={cardStyle}
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
        style={
          {
            maskImage:
              'radial-gradient(circle at var(--x) var(--y), black 40%, transparent 70%)',
            WebkitMaskImage:
              'radial-gradient(circle at var(--x) var(--y), black 40%, transparent 70%)',
            '--x': `${mousePosition.x}px`,
            '--y': `${mousePosition.y}px`,
          } as React.CSSProperties
        }
      ></div>
      {children}
    </div>
  );
};

export default AnimatedCard;
