"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ElementType, type RefObject } from "react";
import { cn } from "@/lib/utils";

type Variants = {
  visible: (i: number) => object;
  hidden: object;
};

interface TimelineContentProps {
  as?: ElementType;
  animationNum?: number;
  timelineRef?: RefObject<HTMLElement | null>;
  customVariants?: Variants;
  className?: string;
  children: React.ReactNode;
}

const motionComponents: Record<string, React.ElementType> = {
  div: motion.div,
  p: motion.p,
  span: motion.span,
  section: motion.section,
  article: motion.article,
  ul: motion.ul,
  li: motion.li,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
};

export function TimelineContent({
  as = "div",
  animationNum = 0,
  timelineRef,
  customVariants,
  className,
  children,
}: TimelineContentProps) {
  const ownRef = useRef<HTMLElement>(null);

  // Trigger when the parent timelineRef enters view (falls back to own ref)
  const isInView = useInView(
    (timelineRef as RefObject<HTMLElement>) ?? ownRef,
    { once: true, margin: "-80px" }
  );

  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: -20, filter: "blur(10px)" },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { delay: i * 0.15, duration: 0.5 },
    }),
  };

  const variants = customVariants ?? defaultVariants;

  const tag = typeof as === "string" ? as : "div";
  const MotionTag = motionComponents[tag] ?? motion.div;

  return (
    <MotionTag
      ref={ownRef}
      className={cn(className)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={animationNum}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}
