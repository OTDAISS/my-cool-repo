import { useState, useEffect, useCallback } from 'react';

/**
 * useSurfingEngine - Custom hook for the AI Surfer Survivor physics.
 * Note: This code is a custom implementation for your project and is not from the sources.
 */
export const useSurfingEngine = (difficulty = 1) => {
  const [surferState, setSurferState] = useState({
    y: 0,
    tilt: 0,
    velocity: 0,
    isGlitching: false,
  });

  const updatePhysics = useCallback((time) => {
    // 1. Calculate the Sine Wave for the "Data Sea"
    const waveFreq = 0.002 * difficulty;
    const waveAmp = 60;
    const currentWaveY = Math.sin(time * waveFreq) * waveAmp;

    // 2. Surfer Physics Logic
    setSurferState((prev) => {
      // Smoothly track the wave height
      const targetY = currentWaveY;
      const easing = 0.1;
      const newY = prev.y + (targetY - prev.y) * easing;
      
      // Calculate tilt based on wave slope
      const newTilt = Math.cos(time * waveFreq) * 20;

      // 3. Collision / Failure Detection
      // If the surfer deviates too far from the wave crest, trigger glitch
      const deviation = Math.abs(newY - currentWaveY);
      const isGlitching = deviation > 15;

      return {
        y: newY,
        tilt: newTilt,
        velocity: waveFreq * 100,
        isGlitching,
      };
    });
  }, [difficulty]);

  useEffect(() => {
    let frameId;
    const loop = (time) => {
      updatePhysics(time);
      frameId = requestAnimationFrame(loop);
    };
    frameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameId);
  }, [updatePhysics]);

  return surferState;
};
