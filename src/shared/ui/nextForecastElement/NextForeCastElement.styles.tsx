import { createStyles } from '@mantine/core'

export const useNextForeCastElementStyles = createStyles(() => ({
  flex: {
    width: '100%',
    height: '50px',
    justifyContent: 'space-between',
    color: '#FFFFFF',
    alignItems: 'center',
  },
  stack: {
    gap: 0,
    width: 70,
  },
  icon: {
    width: '35px',
    height: '35px',
  },
  day: {
    fontWeight: 700,
  },
  date: {
    fontSize: 12,
    color: '#ADB5BD',
    fontWeight: 600,
  },
  dayTemperature: {
    fontWeight: 500,
    fontSize: 14,
  },

  nightTemperature: {
    opacity: 0.5,
    fontSize: 12,
  },
}))
