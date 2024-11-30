import { useState, useEffect } from 'react';
import { BinarySearchStep } from '../types/binarySearch';
import { generateSteps } from '../utils/binarySearchUtils';

export const useBinarySearch = (initialArray: number[] = []) => {
  const [array, setArray] = useState<number[]>(initialArray);
  const [target, setTarget] = useState<number>(0);
  const [steps, setSteps] = useState<BinarySearchStep[]>([]);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const startSearch = () => {
    const newSteps = generateSteps(array, target);
    setSteps(newSteps);
    setCurrentStep(0);
    setIsPlaying(true);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsPlaying(false);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && currentStep < steps.length - 1) {
      timer = setTimeout(nextStep, 1500);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, currentStep, steps.length]);

  return {
    array,
    setArray,
    target,
    setTarget,
    steps,
    setSteps,
    currentStep,
    setCurrentStep,
    isPlaying,
    setIsPlaying,
    startSearch,
    nextStep,
    prevStep,
  };
};