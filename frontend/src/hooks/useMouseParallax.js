import { useEffect } from "react";
import { useMotionValue, useSpring } from "framer-motion";

// Returns spring-smoothed pointer offset in range roughly [-1, 1] from center.
export function useMouseParallax(stiffness = 60, damping = 20) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness, damping, mass: 0.6 });
  const y = useSpring(my, { stiffness, damping, mass: 0.6 });

  useEffect(() => {
    const handle = (e) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      mx.set(nx);
      my.set(ny);
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, [mx, my]);

  return { x, y };
}
