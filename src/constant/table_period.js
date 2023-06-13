export const TABLE_PERIOD = {
  THREE_DAY: {
    title: "THREE_DAY",
    text: "3 дня",
    start: new Date(new Date().setDate(new Date(new Date().setHours(0, 0, 0, 0)).getDate() - 2)).setHours(0, 0, 0, 0),
    end: new Date(new Date().setDate(new Date(new Date().setHours(0, 0, 0, 0)).getDate() + 1)).setHours(0, 0, 0, -1),
  },
  WEEK: {
    title: "WEEK",
    text: "Неделя",
    start: new Date(new Date().setDate(new Date(new Date().setHours(0, 0, 0, 0)).getDate() - 6)).setHours(0, 0, 0, 0),
    end: new Date(new Date().setDate(new Date(new Date().setHours(0, 0, 0, 0)).getDate() + 1)).setHours(0, 0, 0, -1),
  },
  MONTH: {
    title: "MONTH",
    text: "Месяц",
    start: new Date(new Date().setMonth(new Date(new Date().setHours(0, 0, 0, 0)).getMonth() - 1)).setHours(0, 0, 0, 0),
    end: new Date(new Date().setDate(new Date(new Date().setHours(0, 0, 0, 0)).getDate() + 1)).setHours(0, 0, 0, -1),
  },
  YEAR: {
    title: "YEAR",
    text: "Год",
    start: new Date(new Date().setFullYear(new Date(new Date().setHours(0, 0, 0, 0)).getFullYear() - 1)).setHours(0, 0, 0, 0),
    end: new Date(new Date().setDate(new Date(new Date().setHours(0, 0, 0, 0)).getDate() + 1)).setHours(0, 0, 0, -1),
  },
};