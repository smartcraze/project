import React from 'react';
import { RotateCcw } from 'lucide-react';
import { generateArray } from '../utils/arrayUtils';
import { useBinarySearch } from '../hooks/useBinarySearch';
import CodeTabs from './CodeTabs';
import ArrayVisualization from './ArrayVisualization';
import StepExplanation from './StepExplanation';
import ArrayInput from './ArrayInput';
import ComplexityAnalysis from './ComplexityAnalysis';
import PlaybackControls from './controls/PlaybackControls';

const BinarySearchVisualizer: React.FC = () => {
  const {
    array,
    setArray,
    target,
    setTarget,
    steps,
    currentStep,
    isPlaying,
    setIsPlaying,
    startSearch,
    nextStep,
    prevStep,
  } = useBinarySearch();

  const initializeArray = () => {
    const newArray = generateArray(15, 1, 100);
    setArray(newArray.sort((a, b) => a - b));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Binary Search Visualization
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <ArrayInput onArraySubmit={setArray} />
          
          <div className="flex gap-4 mb-6">
            <input
              type="number"
              value={target}
              onChange={(e) => setTarget(Number(e.target.value))}
              className="px-4 py-2 border rounded-md"
              placeholder="Enter target number"
            />
            <button
              onClick={startSearch}
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Start Search
            </button>
            <button
              onClick={initializeArray}
              className="flex items-center gap-2 bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition-colors"
            >
              <RotateCcw size={16} /> Reset
            </button>
          </div>

          <ArrayVisualization
            array={array}
            currentStep={steps[currentStep]}
            target={target}
          />

          {steps[currentStep] && (
            <StepExplanation 
              step={steps[currentStep]}
              target={target}
            />
          )}

          <PlaybackControls
            onPrev={prevStep}
            onNext={nextStep}
            onPlayPause={() => setIsPlaying(!isPlaying)}
            isPlaying={isPlaying}
            canGoPrev={currentStep > 0}
            canGoNext={currentStep < steps.length - 1}
          />
        </div>

        {steps.length > 0 && (
          <ComplexityAnalysis steps={steps} arrayLength={array.length} />
        )}

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Implementation</h2>
          <CodeTabs currentStep={steps[currentStep]} />
        </div>
      </div>
    </div>
  );
};

export default BinarySearchVisualizer;