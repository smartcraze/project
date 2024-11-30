import React from 'react';
import { BinarySearchStep } from '../types/binarySearch';

interface CodeBlockProps {
  currentStep: BinarySearchStep | undefined;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ currentStep }) => {
  const code = `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);${currentStep ? `
    // Current step:
    // left = ${currentStep.left}
    // right = ${currentStep.right}
    // mid = ${currentStep.mid}` : ''}

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}`;

  return (
    <div className="bg-gray-900 rounded-lg p-6 text-white font-mono text-sm">
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;