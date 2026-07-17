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
        setIsDeleting(false);
        setSequenceIndex((prev) => (prev + 1) % sequence.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, sequenceIndex, sequence, speed, deletionSpeed, delay]);

  return (
    <div className={className}>
      <span>{staticText} </span>
      <span className="font-semibold">
        <span className="bg-linear-to-r from-sky-400 via-violet-400 to-pink-500 bg-clip-text text-transparent dark:from-sky-300 dark:via-violet-300 dark:to-pink-400">
          {currentText}
        </span>
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
          className="inline-block ml-0.5 text-sky-400 font-bold"
        >
          |
        </motion.span>
      </span>
    </div>
  );
}
