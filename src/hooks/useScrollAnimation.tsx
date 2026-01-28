import { useEffect, useRef, useState } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
};

// Component wrapper for scroll animations
interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale" | "rotate";
  delay?: number;
  duration?: number;
  className?: string;
}

export const ScrollAnimation = ({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 600,
  className = "",
}: ScrollAnimationProps) => {
  const { ref, isVisible } = useScrollAnimation();

  const getAnimationStyles = () => {
    const baseStyles = {
      transition: `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    };

    if (!isVisible) {
      switch (animation) {
        case "fade-up":
          return { ...baseStyles, opacity: 0, transform: "translateY(40px)" };
        case "fade-down":
          return { ...baseStyles, opacity: 0, transform: "translateY(-40px)" };
        case "fade-left":
          return { ...baseStyles, opacity: 0, transform: "translateX(40px)" };
        case "fade-right":
          return { ...baseStyles, opacity: 0, transform: "translateX(-40px)" };
        case "scale":
          return { ...baseStyles, opacity: 0, transform: "scale(0.9)" };
        case "rotate":
          return { ...baseStyles, opacity: 0, transform: "rotate(-5deg) scale(0.95)" };
        default:
          return { ...baseStyles, opacity: 0 };
      }
    }

    return { ...baseStyles, opacity: 1, transform: "none" };
  };

  return (
    <div ref={ref} style={getAnimationStyles()} className={className}>
      {children}
    </div>
  );
};

export default useScrollAnimation;
