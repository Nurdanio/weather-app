import { createStyles } from '@mantine/core'

export const useWeatherTodayStyles = createStyles(() => ({
  stack: {
    alignItems: 'center',
    gap: 0,
    color: '#FFFFFF',
    fontSize: 18,
  },
  temperature: {
    fontWeight: 600,
    fontSize: 64,
    lineHeight: '76px',
  },
  precipitation: {
    lineHeight: '21px',
  },
}))
