"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

interface DescriptionTypeWriterProps {
  staticText: string;
  sequence: readonly string[] | string[];
  className?: string;
  speed?: number;
  deletionSpeed?: number;
  delay?: number;
}

export function DescriptionTypeWriter({
  staticText,
  sequence,
  className,
  speed = 40,
  deletionSpeed = 20,
  delay = 2500,
}: DescriptionTypeWriterProps) {
  const [currentText, setCurrentText] = useState("");
  const [sequenceIndex, setSequenceIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (sequence.length === 0) return;

    const fullWord = sequence[sequenceIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      // Typing phase
      if (currentText !== fullWord) {
        timer = setTimeout(() => {
          setCurrentText(fullWord.slice(0, currentText.length + 1));
        }, speed);
      } else {
        // Pause at full word
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delay);
      }
    } else {
      // Deleting phase
      if (currentText !== "") {
        timer = setTimeout(() => {
          setCurrentText(fullWord.slice(0, currentText.length - 1));
        }, deletionSpeed);
      } else {
        // Move to next word
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsDeleting(false);
        setSequenceIndex((prev) => (prev + 1) % sequence.length);
      }
    }

    return () => clearTimeout(timer);
  }, [
    currentText,
    isDeleting,
    sequenceIndex,
    sequence,
    speed,
    deletionSpeed,
    delay,
  ]);

  return (
    <div className={className}>
      <span>{staticText} </span>
      <span className="font-semibold">
        <span
          className="
font-semibold
bg-gradient-to-r
from-blue-700
via-blue-500
to-red-500
bg-clip-text
text-transparent

dark:from-blue-400
dark:via-blue-600
dark:to-yellow-400
"
        >
          {currentText}
        </span>

        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block ml-0.5 font-semibold text-blue-600 dark:text-blue-400"
        >
          |
        </motion.span>
      </span>
    </div>
  );
}
