import { createStyles } from '@mantine/core'

export const useHomePageStyles = createStyles((theme) => ({
  stack: {
    maxWidth: '430px',
    height: '850px',
    padding: '40px',
    overflowY: 'auto',
    borderRadius: 40,
    gap: 20,
    alignItems: 'center',
    background: theme.fn.linearGradient(
      167.44,
      '#08244F',
      '#134CB5',
      '#0B42AB'
    ),
  },
}))
