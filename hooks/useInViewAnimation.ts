import { useEffect, useRef, useState } from "react";

export function useInViewAnimation() {

  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return {
    ref: ref as unknown as React.RefObject<any>, // 🔥 UNIVERSAL FIX
    isVisible,
  };
}
