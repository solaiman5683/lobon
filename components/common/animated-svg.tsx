"use client";
import { motion, useInView } from "framer-motion";
import React, { ReactElement, useRef } from "react";

// Define props type for the component
interface AnimatedSVGProps
{
  children: ReactElement<React.SVGProps<SVGSVGElement>>;
  className?: string;
  duration?: number;
}

const AnimatedSVG: React.FC<AnimatedSVGProps> = ({ children, className, duration = 2 }) =>
{
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true }); // Animate only once when in view

  // Function to animate paths dynamically with proper typing
  const animatePaths = (svg: ReactElement<React.SVGProps<SVGSVGElement>>) =>
  {
    if (svg.type !== "svg") return svg;

    return React.cloneElement(svg, {
      ...svg.props,
      children: React.Children.map(svg.props.children, (grandchild) =>
      {
        // Ensure grandchild is a React element with SVG props
        if (!React.isValidElement<React.SVGProps<SVGGElement>>(grandchild)) return grandchild;

        if (grandchild.type === "g") {
          return React.cloneElement(grandchild, {
            ...grandchild.props,
            children: React.Children.map(grandchild.props.children, (path) =>
            {
              // Ensure path is a React element with SVGPath props
              if (!React.isValidElement<React.SVGProps<SVGPathElement>>(path)) return path;

              if (path.type === "path") {
                const pathProps = path.props as React.SVGProps<SVGPathElement>;
                // Extract SVG-specific props to avoid event handler type conflicts
                const {
                  d,
                  fill,
                  stroke,
                  strokeWidth,
                  className,
                  style,
                  transform,
                  // Exclude event handlers and React props
                  onClick,
                  onAnimationStart,
                  onDragStart,
                  onDrag,
                  onDragEnd,
                  onDragEnter,
                  onDragExit,
                  onDragLeave,
                  onDragOver,
                  ...restPathProps
                } = pathProps;

                return (
                  <motion.path
                    d={d}
                    className={className}
                    style={style}
                    transform={transform}
                    {...restPathProps}
                    fill={fill || "none"}
                    fillOpacity={0}
                    stroke={stroke || fill || "#000000"}
                    strokeWidth={strokeWidth || "2"}
                    initial={{ pathLength: 0, fillOpacity: 0 }}
                    animate={
                      isInView
                        ? { pathLength: 1, fillOpacity: 1 }
                        : { pathLength: 0, fillOpacity: 0 }
                    }
                    transition={{
                      pathLength: { duration: duration, ease: "easeInOut" },
                      fillOpacity: { duration: duration * 0.25, delay: duration * 0.25, ease: "easeIn" },
                    }}
                  />
                );
              }
              return path; // Return other elements unchanged
            }),
          });
        }
        return grandchild; // Return non-<g> elements unchanged
      }),
    });
  };

  return <div ref={ref} className={className}>{animatePaths(children)}</div>;
};

export default AnimatedSVG;