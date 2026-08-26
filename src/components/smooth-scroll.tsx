import { ReactLenis, type LenisProps } from "lenis/react";
import type { ReactNode } from "react";

interface SmoothScrollProps {
  children: ReactNode;
  options?: LenisProps["options"];
}

export function SmoothScroll({ children, options }: SmoothScrollProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        ...options,
      }}
    >
      {children}
    </ReactLenis>
  );
}

export { useLenis } from "lenis/react";
