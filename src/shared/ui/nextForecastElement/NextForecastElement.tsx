import { Flex, Stack, Text } from '@mantine/core'
import { ReactNode } from 'react'
import { ReactComponent as SunCloudIcon } from 'shared/img/if-weather-2-2682849_90781.svg'
import { getMonth } from 'shared/lib/getMonth/getMonth'
import { getWeekDay } from 'shared/lib/getWeekDay/getWeekDay'
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

  return (
    <Flex className={classes.flex}>
      <Stack className={classes.stack}>
        <Text className={classes.day}>{getWeekDay(weekDay)}</Text>
        <Text className={classes.date}>
          {getMonth(month)} {day}
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
