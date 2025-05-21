"use client";

import { useEffect, useRef, RefObject } from "react";
import { gsap } from "gsap";

interface AnimationOptions {
  from?: gsap.TweenVars;
  to: gsap.TweenVars;
  delay?: number;
  duration?: number;
  ease?: string;
}

type ElementRef<T = Element> = RefObject<T | null>;

export const useGsapAnimations = () => {
  const contextRef = useRef<gsap.Context | null>(null);

  // Cleanup function for when component unmounts
  useEffect(() => {
    return () => {
      if (contextRef.current) {
        contextRef.current.revert();
      }
    };
  }, []);

  /**
   * Creates a GSAP animation context
   * @param scope - The DOM element to scope animations to
   * @returns The GSAP context
   */
  const createContext = <T extends Element>(scope: ElementRef<T>) => {
    if (!scope.current) return null;
    
    const ctx = gsap.context(() => {}, scope);
    contextRef.current = ctx;
    return ctx;
  };

  /**
   * Fade in animation
   * @param element - Element to animate
   * @param options - Animation options
   */
  const fadeIn = <T extends Element>(
    element: ElementRef<T>,
    options: Partial<AnimationOptions> = {}
  ) => {
    if (!element.current) return;
    
    gsap.fromTo(
      element.current,
      { opacity: 0, y: 20, ...options.from },
      { 
        opacity: 1, 
        y: 0, 
        duration: options.duration || 0.8, 
        delay: options.delay || 0, 
        ease: options.ease || "power2.out",
        ...options.to 
      }
    );
  };

  /**
   * Creates a floating animation
   * @param element - Element to animate
   * @param amplitude - Amount to float (y-axis)
   * @param duration - Duration of one cycle
   */
  const floatingAnimation = <T extends Element>(
    element: ElementRef<T>,
    amplitude: number = 10,
    duration: number = 2
  ) => {
    if (!element.current) return;
    
    gsap.to(element.current, {
      y: amplitude,
      duration: duration,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  };

  /**
   * Creates a staggered animation for a group of elements
   * @param elements - Elements to animate
   * @param options - Animation options
   * @param staggerTime - Time between each element animation
   */
  const staggerAnimation = (
    elements: Element[] | NodeListOf<Element>,
    options: Partial<AnimationOptions> = {},
    staggerTime: number = 0.1
  ) => {
    if (elements.length === 0) return;
    
    gsap.fromTo(
      elements,
      { opacity: 0, y: 20, ...options.from },
      { 
        opacity: 1, 
        y: 0, 
        duration: options.duration || 0.8, 
        stagger: staggerTime,
        delay: options.delay || 0, 
        ease: options.ease || "power2.out",
        ...options.to 
      }
    );
  };

  return {
    createContext,
    fadeIn,
    floatingAnimation,
    staggerAnimation
  };
};

export default useGsapAnimations; 