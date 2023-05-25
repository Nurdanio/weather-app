import { Flex, Stack, Text } from '@mantine/core'
import { ReactNode } from 'react'
import { ReactComponent as SunCloudIcon } from 'shared/img/if-weather-2-2682849_90781.svg'
import { useNextForeCastElementStyles } from 'shared/ui/nextForecastElement/NextForeCastElement.styles'

interface NextForecastElementProps {
  day: number
  weekDay: number
  month: number
  temperature: number
  icon?: ReactNode
}
export const NextForecastElement = ({
  temperature,
  day,
  weekDay,
  month,
  icon = <SunCloudIcon />,
}: NextForecastElementProps) => {
  const { classes } = useNextForeCastElementStyles()

  const getWeekDay = () => {
    const weekDays = [
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

  const getMonth = () => {
    const months = [
      '',
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    return months[month]
  }

  return (
    <Flex className={classes.flex}>
      <Stack className={classes.stack}>
        <Text className={classes.day}>{getWeekDay()}</Text>
        <Text className={classes.date}>
          {getMonth()} {day}
        </Text>
      </Stack>
      <Text className={classes.icon}>{icon}</Text>
      <Flex gap={10}>
        <Text className={classes.dayTemperature}>{`${temperature}°C`}</Text>
        <Text className={classes.nightTemperature}>{`${
          temperature - 5
        }°C`}</Text>
      </Flex>
    </Flex>
  )
}
