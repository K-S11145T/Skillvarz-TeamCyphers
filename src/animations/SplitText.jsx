import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const SplitText = ({
  text = '',
  className = '',
  delay = 100,
  duration = 0.5,
  animationFrom = { opacity: 0, y: 30 },
  animationTo = { opacity: 1, y: 0 },
  easing = 'power3.out',
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  onLetterAnimationComplete,
  resetOnChange = false,
  resetOnView = false,
}) => {
  const containerRef = useRef(null);
  const wordRefs = useRef([]);
  const [inView, setInView] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const hasAnimated = useRef(false);
  const observerRef = useRef(null);

  // Clear word refs when text changes
  useEffect(() => {
    wordRefs.current = [];
  }, [text]);

  // Observer for onView
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (resetOnView || !hasAnimated.current) {
              setAnimKey((prev) => prev + 1);
              hasAnimated.current = true;
            }
          } else if (resetOnView) {
            setInView(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentContainer = containerRef.current;
    if (currentContainer) {
      observerRef.current.observe(currentContainer);
    }

    return () => {
      if (observerRef.current && currentContainer) {
        observerRef.current.unobserve(currentContainer);
      }
    };
  }, [threshold, rootMargin, resetOnView]);

  // Force re-observe when content changes
  useEffect(() => {
    if (containerRef.current && observerRef.current) {
      observerRef.current.unobserve(containerRef.current);
      observerRef.current.observe(containerRef.current);
    }
  }, [text, animKey]);

  // Animation trigger
  useEffect(() => {
    if (inView && wordRefs.current.length > 0) {
      // Kill any existing animations
      gsap.killTweensOf(wordRefs.current);
      
      gsap.set(wordRefs.current, animationFrom);
      const tl = gsap.to(wordRefs.current, {
        ...animationTo,
        duration,
        ease: easing,
        stagger: delay / 1000,
        onComplete: () => {
          if (onLetterAnimationComplete) onLetterAnimationComplete();
        },
      });

      return () => tl.kill();
    }
  }, [inView, animKey, animationFrom, animationTo, duration, easing, delay, onLetterAnimationComplete]);

  // Reset on text/content change
  useEffect(() => {
    if (resetOnChange) {
      setInView(false);
      setAnimKey((prev) => prev + 1);
      hasAnimated.current = false;
    }
  }, [text, resetOnChange]);

  const words = text.split(' ');

  return (
    <p
      ref={containerRef}
      className={`split-text ${className}`}
      style={{
        display: 'inline-block',
        textAlign,
        overflow: 'hidden',
        wordWrap: 'break-word',
      }}
    >
      {words.map((word, i) => (
        <span
          key={`${animKey}-${i}-${word}`}
          ref={(el) => {
            if (el) wordRefs.current[i] = el;
          }}
          style={{ 
            display: 'inline-block', 
            marginRight: '0.4em',
            opacity: animationFrom.opacity,
            transform: `translateY(${animationFrom.y}px)`
          }}
        >
          {word}
        </span>
      ))}
    </p>
  );
};

export default SplitText;