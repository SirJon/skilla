export const getTimeString = (date) => {
  return `${new Date(date).getHours().toString().padStart(2, '0')}:${new Date(date).getMinutes().toString().padStart(2, '0')}`
}