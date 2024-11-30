import React from 'react';
import { BinarySearchStep } from '../types/binarySearch';

interface ComplexityAnalysisProps {
  steps: BinarySearchStep[];
  arrayLength: number;
}

const ComplexityAnalysis: React.FC<ComplexityAnalysisProps> = ({ steps, arrayLength }) => {
  return (
    <div className="bg-cyan-500 rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Complexity Analysis</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-700">Time Complexity</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-lg font-mono">O(log n)</p>
            <p className="text-gray-600 mt-2">
              Where n is the size of the array ({arrayLength} elements)
            </p>
            <p className="text-gray-600 mt-2">
              Steps taken in this search: {steps.length}
            </p>
            <p className="text-gray-600 mt-2">
              Maximum steps possible: {Math.ceil(Math.log2(arrayLength))}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-700">Space Complexity</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-lg font-mono">O(1)</p>
            <p className="text-gray-600 mt-2">
              Only uses a constant amount of extra space regardless of input size:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>left pointer</li>
              <li>right pointer</li>
              <li>middle index</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplexityAnalysis;