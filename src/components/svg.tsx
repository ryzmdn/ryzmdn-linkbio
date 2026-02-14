import { cn } from "@/lib/utils";
import { forwardRef, type SVGAttributes } from "react";

export type SvgVariant = "solid" | "outline" | "custom";

export interface SvgProps extends SVGAttributes<SVGSVGElement> {
  variant?: SvgVariant;
  draw?: string[];
  size?: number | string;
  viewBox?: string;
}

export const Svg = forwardRef<SVGSVGElement, SvgProps>(
  (
    {
      variant = "solid",
      draw = [],
      viewBox = "0 0 24 24",
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const isOutline = variant === "outline";
    const isSolid = variant === "solid";
    const isCustom = variant === "custom";

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={isCustom ? viewBox : "0 0 24 24"}
        aria-hidden="true"
        className={cn(
          "pointer-events-none shrink-0",
          isSolid && "fill-current",
          isOutline && "stroke-current fill-none",
          className,
        )}
        {...props}
      >
        {isCustom
          ? children
          : draw.map((d, i) => (
              <path
                key={i}
                d={d}
                strokeWidth={isOutline ? 1.5 : undefined}
                strokeLinecap={isOutline ? "round" : undefined}
                strokeLinejoin={isOutline ? "round" : undefined}
                fillRule={isSolid ? "evenodd" : undefined}
                clipRule={isSolid ? "evenodd" : undefined}
              />
            ))}
      </svg>
    );
  },
);

Svg.displayName = "Svg";
