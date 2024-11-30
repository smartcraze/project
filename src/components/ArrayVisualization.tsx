import React from 'react';
import { BinarySearchStep } from '../types/binarySearch';

interface ArrayVisualizationProps {
  array: number[];
  currentStep: BinarySearchStep | undefined;
  target: number;
}

const ArrayVisualization: React.FC<ArrayVisualizationProps> = ({ array, currentStep, target }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-2 flex-wrap justify-center">
        {array.map((num, idx) => {
          let backgroundColor = 'bg-gray-100';
          let textColor = 'text-gray-600';
          let transform = '';

          if (currentStep) {
            if (idx === currentStep.mid) {
              backgroundColor = currentStep.found ? 'bg-green-500' : 'bg-yellow-500';
              textColor = 'text-white';
              transform = 'scale-110';
            } else if (idx >= currentStep.left && idx <= currentStep.right) {
              backgroundColor = 'bg-blue-100';
            } else {
              backgroundColor = 'bg-purple-200 opacity-50';
            }

            if (num === target && !currentStep.found) {
              textColor = 'text-indigo-900 font-bold';
            }
          }

          return (
            <div
              key={idx}
              className={`w-12 h-12 ${backgroundColor} ${textColor} flex items-center justify-center rounded-lg font-semibold transition-all duration-300 transform ${transform}`}
            >
              {num}
            </div>
          );
        })}
      </div>
      
      <div className="text-center mt-4">
        <div className="flex gap-4 justify-center text-white text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-yellow-500 rounded"></div>
            <span>Middle Element</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-100 rounded"></div>
            <span>Current Range</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-purple-200 rounded"></div>
            <span>Eliminated</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded"></div>
            <span>Found</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArrayVisualization;