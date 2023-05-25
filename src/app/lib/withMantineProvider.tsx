import { MantineProvider } from '@mantine/core'

export const withMantineProvider = (component: () => JSX.Element) => () =>
  (
    <MantineProvider
      theme={{
        globalStyles: () => ({
          body: {
            fontFamily: 'Work Sans, sans-serif',
          },
          '::-webkit-scrollbar': {
            width: '14px',
          },
          '::-webkit-scrollbar-thumb': {
            background: '#134CB5',
            borderRadius: '999px',
            border: '4px solid rgba(0, 0, 0, 0)',
            backgroundClip: 'padding-box',
          },
          '::-webkit-scrollbar-thumb:hover': {
            background: '#D0EBFF',
            border: '4px solid rgba(0, 0, 0, 0)',
            backgroundClip: 'padding-box',
          },
        }),
      }}
    >
      {component()}
    </MantineProvider>
  )
