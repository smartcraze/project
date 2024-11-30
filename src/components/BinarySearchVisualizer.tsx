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
    <div className="min-h-screen bg-gray-900 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Title */}
        <h1 className="text-4xl font-bold text-center mb-8 text-white">
          Binary Search Visualization
        </h1>
        
        {/* Controls Section */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-8 mb-8">
          <ArrayInput onArraySubmit={setArray} />
          
          <div className="flex gap-6 mb-6">
            <input
              type="number"
              value={target}
              onChange={(e) => setTarget(Number(e.target.value))}
              className="px-6 py-3 border border-gray-600 rounded-md text-lg text-white bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter target number"
            />
            <button
              onClick={startSearch}
              className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg hover:bg-blue-500 transition-colors"
            >
              Start Search
            </button>
            <button
              onClick={initializeArray}
              className="flex items-center gap-2 bg-gray-600 text-white px-8 py-3 rounded-md text-lg hover:bg-gray-500 transition-colors"
            >
              <RotateCcw size={18} /> Reset
            </button>
          </div>

          {/* Array Visualization */}
          <ArrayVisualization
            array={array}
            currentStep={steps[currentStep]}
            target={target}
          />

          {/* Step Explanation */}
          {steps[currentStep] && (
            <StepExplanation 
              step={steps[currentStep]}
              target={target}
            />
          )}

          {/* Playback Controls */}
          <PlaybackControls
            onPrev={prevStep}
            onNext={nextStep}
            onPlayPause={() => setIsPlaying(!isPlaying)}
            isPlaying={isPlaying}
            canGoPrev={currentStep > 0}
            canGoNext={currentStep < steps.length - 1}
          />
        </div>

        {/* Complexity Analysis */}
        {steps.length > 0 && (
          <ComplexityAnalysis steps={steps} arrayLength={array.length} />
        )}

        {/* Code Implementation */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Implementation</h2>
          <CodeTabs currentStep={steps[currentStep]} />
        </div>
      </div>
    </div>
  );
};

export default BinarySearchVisualizer;
