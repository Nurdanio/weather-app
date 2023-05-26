export const getRandomTemperature = (temperature: number): number =>
  Math.floor(Math.random() * 11) + (temperature - 5)
