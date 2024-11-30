import { BinarySearchStep } from '../types/binarySearch';

export const generateSteps = (arr: number[], searchTarget: number): BinarySearchStep[] => {
  const steps: BinarySearchStep[] = [];
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    steps.push({
      left,
      right,
      mid,
      currentValue: arr[mid],
      found: arr[mid] === searchTarget,
    });

    if (arr[mid] === searchTarget) break;
    if (arr[mid] < searchTarget) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return steps;
};