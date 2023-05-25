import { Flex, Stack, Text } from '@mantine/core'
import { useWeatherTodayStyles } from 'widgets/weatherToday/WeatherToday.styles'
import { ReactComponent as SunIcon } from 'shared/img/Sun cloud angled rain.svg'

interface WeatherTodayProps {
  temperature: number
}

export const WeatherToday = ({ temperature }: WeatherTodayProps) => {
  const { classes } = useWeatherTodayStyles()

  return (
    <Stack className={classes.stack}>
      <SunIcon />
      <Text className={classes.temperature}>{`${temperature}°C`}</Text>
      <Text className={classes.precipitation}>Precipitations</Text>
      <Flex gap={10}>
        <Text className={classes.precipitation}>{`Max.:${
          temperature + 3
        }°`}</Text>
        <Text className={classes.precipitation}>{`Min.:${
          temperature - 3
        }°`}</Text>
      </Flex>
    </Stack>
  )
}
