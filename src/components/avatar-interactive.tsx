"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from "motion/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AvatarInteractiveProps {
  avatarUrl: string;
  name: string;
  initials: string;
}

export function AvatarInteractive({ avatarUrl, name, initials }: AvatarInteractiveProps) {
  const ref = useRef<HTMLDivElement>(null);

  // 1. Motion values for normalized mouse positions (range is [-0.5, 0.5])
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring configuration
  const springConfig = { stiffness: 60, damping: 25, mass: 1.2 };

  // 3D Motion calculations (เหมือนเดิม)
  const translateX = useSpring(useTransform(x, [-0.5, 0.5], [15, -15]), springConfig);
  const translateY = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [-15, 15]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [15, -15]), springConfig);
  const scale = useSpring(1, springConfig);

  // 2. [NEW] Transform normalized mouse positions to percentage values (0% to 100%)
  // We use "linear" ease here to make the shine follow the cursor exactly.
  // We apply useSpring to these values too, so the shine doesn't jump.
  const shineXPercentage = useSpring(useTransform(x, [-0.5, 0.5], [0, 100]), springConfig);
  const shineYPercentage = useSpring(useTransform(y, [-0.5, 0.5], [0, 100]), springConfig);

  // 3. [NEW] Combine the x and y percentages into a single, smooth CSS value.
  // We use the useTransform overload that takes an array of MotionValues.
  // Note: we can't apply useSpring directly to a string value like "0% 0%",
  // so we apply the spring *before* creating the final string.
  const shineBackground = useTransform(
    [shineXPercentage, shineYPercentage],
    ([x, y]) => `radial-gradient(circle at ${x}% ${y}%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 60%)`
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    // Normalized position relative to center: range is [-0.5, 0.5]
    const relativeX = (e.clientX - rect.left) / rect.width - 0.5;
    const relativeY = (e.clientY - rect.top) / rect.height - 0.5;

    x.set(relativeX);
    y.set(relativeY);
    scale.set(1.2); 
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    scale.set(1);
  };

  return (
    <div 
      className="relative flex items-center justify-center p-8"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileTap={{ scale: 0.95 }}
        style={{
          rotateX,
          rotateY,
          x: translateX,
          y: translateY,
          scale,
          transformStyle: "preserve-3d",
        }}
        className="relative size-24 md:size-32 rounded-full cursor-pointer group"
      >
        {/* Glow effect background */}
        <div 
          className="absolute -inset-4 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
          style={{ transform: "translateZ(-20px)" }} 
        />

        {/* The main avatar container */}
        <div 
          className="size-full" 
          style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}
        >
          {/* ปรับแก้ขอบสีขาว: เอา border และ ring ออก */}
          <Avatar className="size-full rounded-full shadow-2xl select-none bg-background overflow-hidden">
            <AvatarImage 
              alt={name} 
              src={avatarUrl} 
              className="size-full object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            <AvatarFallback className="text-xl font-bold bg-muted text-muted-foreground">
              {initials}
            </AvatarFallback>
          </Avatar>

          {/* 4. [NEW] Moving Shine Overlay */}
          {/* We use motion.div here so we can bind the 'background' to our dynamic MotionValue. */}
          <motion.div 
            className="absolute inset-0 rounded-full pointer-events-none mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
            style={{
              background: shineBackground,
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}