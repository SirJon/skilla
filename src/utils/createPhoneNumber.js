export const createPhoneNumber = (numbers) => {
  if (isNaN(numbers[0])) return numbers;
  return `+${numbers.split('').reduce((p, c) => p.replace('*', c), "* (***) ***-****")}`;
}