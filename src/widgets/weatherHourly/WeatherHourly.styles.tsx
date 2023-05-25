import { createStyles } from '@mantine/core'

export const useWeatherHourlyStyles = createStyles(() => ({
  stack: {
    width: '343px',
    minHeight: '180px',
    padding: 15,
    backgroundColor: 'rgb(0, 16, 38, 0.3)',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    color: '#FFFFFF',
  },
  date: {
    textShadow: '-2px 3px 1px rgba(0, 0, 0, 0.1)',
    justifyContent: 'space-between',
    width: '100%',
    fontWeight: 700,
    fontSize: 18,
  },
  time: {
    gap: 12,
    overflowX: 'auto',
    width: '100%',
  },
}))
