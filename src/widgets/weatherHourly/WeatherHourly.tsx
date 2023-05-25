import { Flex, Stack, Text } from '@mantine/core'
import { useWeatherHourlyStyles } from 'widgets/weatherHourly/WeatherHourly.styles'
import { HourlyElement } from 'shared/ui'
interface WeatherTodayProps {
  time?: number
  date: string
  temperature?: number
}

export const WeatherHourly = ({
  date,
  time,
  temperature,
}: WeatherTodayProps) => {
  const { classes } = useWeatherHourlyStyles()

  return (
    <Stack className={classes.stack}>
      <Flex className={classes.date}>
        <Text>Today</Text>
        <Text>{date}</Text>
      </Flex>
      <Flex className={classes.time}>
        <HourlyElement temperature={temperature ?? 0} time={`${time ?? 12}`} />
      </Flex>
    </Stack>
  )
}
