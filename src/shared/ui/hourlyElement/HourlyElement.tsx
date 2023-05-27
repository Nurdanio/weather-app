import { Stack } from '@mantine/core'
import { ReactNode } from 'react'
import { ReactComponent as CloudIcon } from 'shared/img/cloudy.svg'

interface HourlyElementProps {
  temperature: number
  time: string
  icon?: ReactNode
}

export const HourlyElement = ({
  temperature,
  time,
  icon = <CloudIcon style={{ width: '35px', height: '35px' }} />,
}: HourlyElementProps) => {
  return (
    <Stack
      p={15}
      sx={{
        borderRadius: 20,
        gap: '10px',
        background: 'rgba(37, 102, 163, 0.2)',
        // filter: 'blur(1px)',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      {`${temperature}°C`}
      {icon}
      {time}
    </Stack>
  )
}
