import { useEffect, useState } from "react";

type TypewriterOptions = {
  typeSpeed?: number;
  backSpeed?: number;
  backDelay?: number;
};

export function useTypewriter(words: string[], options: TypewriterOptions = {}) {
  const { typeSpeed = 100, backSpeed = 70, backDelay = 1200 } = options;
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) {
      return undefined;
    }

    const currentWord = words[wordIndex] ?? "";
    const isWordComplete = !isDeleting && letterIndex === currentWord.length;
    const isWordDeleted = isDeleting && letterIndex === 0;
    const delay = isWordComplete ? backDelay : isDeleting ? backSpeed : typeSpeed;

    const timeout = window.setTimeout(() => {
      if (isWordComplete) {
        setIsDeleting(true);
        return;
      }

      if (isWordDeleted) {
        setIsDeleting(false);
        setWordIndex((current) => (current + 1) % words.length);
        return;
      }

      setLetterIndex((current) => current + (isDeleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [backDelay, backSpeed, isDeleting, letterIndex, typeSpeed, wordIndex, words]);

  return words[wordIndex]?.slice(0, letterIndex) ?? "";
}
