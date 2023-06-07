import { DAY, MONTH } from "@/constant/dateWords";

export const getDate = () => {
  const date = new Date();
  return `${DAY[`${date.getDay()}`]}, ${date.getDate()} ${MONTH[`${date.getMonth()}`]}`
}