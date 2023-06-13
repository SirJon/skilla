export const day = (date) => {
  const currentData = new Date(date);
  const todayData = new Date();
  currentData.setHours(0, 0, 0, 0);
  todayData.setHours(0, 0, 0, 0);
  switch (todayData.getDate() - currentData.getDay()) {
    case value:

      break;

    default:
      break;
  }
  return `${stringZeroStart(d.getDate())}.${stringZeroStart(d.getMonth())}.${d.getFullYear()}`
};