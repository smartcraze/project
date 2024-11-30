import React, { useState } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { BinarySearchStep } from '../types/binarySearch';
import { getLanguageCode } from '../utils/codeUtils';

interface CodeTabsProps {
  currentStep: BinarySearchStep | undefined;
}

const languages = [
  { name: 'JavaScript', key: 'javascript' },
  { name: 'Python', key: 'python' },
  { name: 'Java', key: 'java' },
  { name: 'C++', key: 'cpp' },
  { name: 'C', key: 'c' },
];

const CodeTabs: React.FC<CodeTabsProps> = ({ currentStep }) => {
  const [activeLanguage, setActiveLanguage] = useState(languages[0]);

  const currentStepComment = currentStep
    ? `\n    // Current step:\n    // left = ${currentStep.left}\n    // right = ${currentStep.right}\n    // mid = ${currentStep.mid}`
    : '';

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      <div className="flex border-b border-gray-700">
        {languages.map((lang) => (
          <button
            key={lang.key}
            onClick={() => setActiveLanguage(lang)}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              activeLanguage.key === lang.key
                ? 'bg-gray-800 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
          >
            {lang.name}
          </button>
        ))}
      </div>
      <div className="p-6">
        <SyntaxHighlighter
          language={activeLanguage.key}
          style={atomOneDark}
          customStyle={{ background: 'transparent', padding: 0 }}
        >
          {getLanguageCode(activeLanguage.key, currentStepComment)}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeTabs;