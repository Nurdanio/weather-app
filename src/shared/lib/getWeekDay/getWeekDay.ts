export const getWeekDay = (weekDay: number) => {
  const weekDays = [
    '',
    '',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ]
  return weekDays[weekDay]
}
