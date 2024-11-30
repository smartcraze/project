import React from 'react';
import { ChevronRight, ChevronLeft, Play, Pause } from 'lucide-react';

interface PlaybackControlsProps {
  onPrev: () => void;
  onNext: () => void;
  onPlayPause: () => void;
  isPlaying: boolean;
  canGoPrev: boolean;
  canGoNext: boolean;
}

const PlaybackControls: React.FC<PlaybackControlsProps> = ({
  onPrev,
  onNext,
  onPlayPause,
  isPlaying,
  canGoPrev,
  canGoNext,
}) => {
  return (
    <div className="flex justify-center gap-4 mt-6">
      <button
        onClick={onPrev}
        disabled={!canGoPrev}
        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={onPlayPause}
        className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600"
      >
        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
      </button>
      <button
        onClick={onNext}
        disabled={!canGoNext}
        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default PlaybackControls;