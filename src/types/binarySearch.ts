export interface BinarySearchStep {
  left: number;
  right: number;
  mid: number;
  currentValue: number;
  found: boolean;
}