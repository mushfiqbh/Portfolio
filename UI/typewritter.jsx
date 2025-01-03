"use client";
import { useState, useEffect } from "react";

export default function Typewriter() {
  const texts = ["FullStack Developer", "Web Designer", "Software Engineer"];
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const pauseTime = 1000;

  useEffect(() => {
    let timer;

    const handleTyping = () => {
      const fullText = texts[textIndex];

      if (isDeleting) {
        setCurrentText((prev) => prev.slice(0, -1));
        setTypingSpeed(50);
      } else {
        setCurrentText((prev) => fullText.slice(0, prev.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, textIndex, texts, typingSpeed]);

  return (
    <h1 className="text-3xl lg:text-5xl font-bold mt-2">
      {currentText}
      <span className="text-[--pink]">|</span>
    </h1>
  );
}
