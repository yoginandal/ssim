/* eslint-disable react/prop-types */
"use client";

import React, { forwardRef, useRef, useMemo, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import {
  MessageCircle,
  Send,
  Zap,
  Aperture,
  FileText,
  Apple,
  Cloud,
  Star,
  Heart,
} from "lucide-react";

const Circle = forwardRef(({ className, children }, ref) => (
  <div
    ref={ref}
    className={cn(
      "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
      className
    )}
  >
    {children}
  </div>
));
Circle.displayName = "Circle";

const AnimatedBeamShowcase = () => {
  const containerRef = useRef(null);
  const centerRef = useRef(null);

  // Create refs using createRef() to avoid hook rule violations
  const iconRefs = useMemo(() => {
    return Array.from({ length: 9 }, () => React.createRef());
  }, []);

  const icons = [
    { Icon: Aperture, angle: 0 },
    { Icon: Send, angle: 40 },
    { Icon: MessageCircle, angle: 80 },
    { Icon: FileText, angle: 120 },
    { Icon: Cloud, angle: 160 },
    { Icon: Star, angle: 200 },
    { Icon: Heart, angle: 240 },
    { Icon: Zap, angle: 280 },
    { Icon: Apple, angle: 320 },
  ];

  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Wait for fonts to load if custom fonts are in use.
    // If not using custom fonts, you can omit this line.
    document.fonts.ready.then(() => {
      // Wait one animation frame to ensure layout is settled
      requestAnimationFrame(() => {
        // Now set ready to true
        setReady(true);
      });
    });
  }, []);

  const radius = 140;

  return (
    <div
      className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl"
      ref={containerRef}
    >
      {/* Center Circle */}
      <Circle ref={centerRef} className="absolute size-16">
        <Zap size={32} />
      </Circle>

      {/* Outer Circles */}
      {icons.map(({ Icon, angle }, index) => {
        const radians = (angle * Math.PI) / 180;
        const x = Math.cos(radians) * radius;
        const y = Math.sin(radians) * radius;

        return (
          <div
            key={index}
            className="absolute"
            style={{
              transform: `translate(${x}px, ${y}px)`,
            }}
          >
            <Circle ref={iconRefs[index]}>
              <Icon size={32} />
            </Circle>
          </div>
        );
      })}

      {/* Beams only render after we are sure layout is stable */}
      {ready &&
        iconRefs.map((ref, index) => (
          <AnimatedBeam
            key={index}
            containerRef={containerRef}
            fromRef={ref}
            toRef={centerRef}
            curvature={0}
            reverse={index % 2 === 0}
          />
        ))}
    </div>
  );
};

export default AnimatedBeamShowcase;
