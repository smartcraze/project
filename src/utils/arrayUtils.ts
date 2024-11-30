export const generateArray = (size: number, min: number, max: number): number[] => {
  const array: number[] = [];
  for (let i = 0; i < size; i++) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!array.includes(randomNum)) {
      array.push(randomNum);
    } else {
      i--;
    }
  }
  return array;
};