import { stringZeroStart } from '@/utils/stringZeroStart';

export const getTimeString = (date) => {
  return `${stringZeroStart(new Date(date).getHours())}:${stringZeroStart(new Date(date).getMinutes())}`
}