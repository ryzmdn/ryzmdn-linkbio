import { cn } from "@/lib/utils";
import {
  useEffect,
  useRef,
  type ReactNode,
  type HTMLAttributes,
} from "react";

interface MagnetProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  padding?: number;
  disabled?: boolean;
  magnetStrength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  wrapperClassName?: string;
  innerClassName?: string;
}

export function Magnet({
  children,
  padding = 100,
  disabled = false,
  magnetStrength = 2,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.5s ease-in-out",
  wrapperClassName = "",
  innerClassName = "",
  ...props
}: Readonly<MagnetProps>) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (disabled) {
      if (innerRef.current) {
        innerRef.current.style.transform = "translate3d(0,0,0)";
      }
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!wrapperRef.current || !innerRef.current) return;

      const { left, top, width, height } =
        wrapperRef.current.getBoundingClientRect();

      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distX = Math.abs(centerX - e.clientX);
      const distY = Math.abs(centerY - e.clientY);

      const isInside =
        distX < width / 2 + padding &&
        distY < height / 2 + padding;

      if (isInside) {
        const offsetX = (e.clientX - centerX) / magnetStrength;
        const offsetY = (e.clientY - centerY) / magnetStrength;

        innerRef.current.style.transition = activeTransition;
        innerRef.current.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
      } else {
        innerRef.current.style.transition = inactiveTransition;
        innerRef.current.style.transform = "translate3d(0,0,0)";
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [padding, disabled, magnetStrength, activeTransition, inactiveTransition]);

  return (
    <div
      ref={wrapperRef}
      className={cn(wrapperClassName, "relative inline-block")}
      {...props}
    >
      <div
        ref={innerRef}
        className={cn(innerClassName, "will-change-transform")}
      >
        {children}
      </div>
    </div>
  );
}
