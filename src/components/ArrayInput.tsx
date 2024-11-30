import React, { useState } from 'react';

interface ArrayInputProps {
  onArraySubmit: (arr: number[]) => void;
}

const ArrayInput: React.FC<ArrayInputProps> = ({ onArraySubmit }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleSubmit = () => {
    const numbers = inputValue
      .split(',')
      .map(num => parseInt(num.trim()))
      .filter(num => !isNaN(num))
      .sort((a, b) => a - b);

    if (numbers.length > 0) {
      onArraySubmit(numbers);
      setInputValue('');
    }
  };

  return (
    <div className="flex flex-col gap-2 mb-4">
      <label className="text-sm text-gray-600">
        Enter comma-separated numbers (e.g., 1,5,8,12,15):
      </label>
      <div className="flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-md"
          placeholder="1,2,3,4,5"
        />
        <button
          onClick={handleSubmit}
          className="bg-indigo-500 text-white px-6 py-2 rounded-md hover:bg-indigo-600 transition-colors"
        >
          Set Array
        </button>
      </div>
    </div>
  );
};

export default ArrayInput;