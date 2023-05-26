import { Flex, Stack, Text } from '@mantine/core'
import { TbCalendarEvent as CalendarIcon } from 'react-icons/tb'
import { useNextForeCastStyles } from 'widgets/nextForecast/NextForeCast.styles'
import { NextForecastElement } from 'shared/ui/nextForecastElement'

interface NextForecastProps {
  temperature: number
  date: Date
}

export const NextForecast = ({ date, temperature }: NextForecastProps) => {
  const { classes } = useNextForeCastStyles()
  const updatedDate = new Date(date)

  const forecastElement = Array(10)
    .fill(null)
    .map(() => {
      updatedDate.setDate(updatedDate.getDate() + 1)

      return (
        <NextForecastElement
          day={updatedDate.getDate()}
          weekDay={updatedDate.getDay()}
          month={updatedDate.getMonth()}
          temperature={temperature}
        />
      )
    })

  return (
    <Stack className={classes.stack}>
      <Flex className={classes.flex}>
        <Text>Next Forecast</Text>
        <CalendarIcon style={{ width: '20px', height: '20px' }} />
      </Flex>
      {forecastElement}
    </Stack>
  )
}
