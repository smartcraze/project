import React from 'react';
import { BinarySearchStep } from '../types/binarySearch';

interface StepExplanationProps {
  step: BinarySearchStep;
  target: number;
}

const StepExplanation: React.FC<StepExplanationProps> = ({ step, target }) => {
  const getExplanation = () => {
    if (step.found) {
      return `Target ${target} found at index ${step.mid}! The search is complete.`;
    }

    const comparison = step.currentValue < target ? 'less than' : 'greater than';
    const action = step.currentValue < target 
      ? 'Eliminating left half (smaller values)' 
      : 'Eliminating right half (larger values)';

    return `
1. Current search range: indices ${step.left} to ${step.right}
2. Middle element at index ${step.mid} is ${step.currentValue}
3. ${step.currentValue} is ${comparison} target ${target}
4. ${action}
    `;
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mt-4">
      <h3 className="font-semibold text-lg mb-2 text-gray-800">Step Explanation:</h3>
      <pre className="whitespace-pre-wrap text-sm text-gray-600 font-mono">
        {getExplanation()}
      </pre>
    </div>
  );
};

export default StepExplanation;