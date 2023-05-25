import { Flex, Stack, Text } from '@mantine/core'
import { useWeatherHourlyStyles } from 'widgets/weatherHourly/WeatherHourly.styles'
import { HourlyElement } from 'shared/ui'
interface WeatherTodayProps {
  time: number
  date: string
  temperature: number
}

type WeatherProps = Required<Omit<WeatherTodayProps, 'date'>>

const someFunction = (time: number, temperature: number) => {
  const weather: WeatherProps[] = [] as WeatherProps[]

  for (let newTime = time; newTime < time + 10; newTime++) {
    if (newTime >= 24) weather.push({ time: newTime - 24, temperature })
    else weather.push({ time: newTime, temperature })
  }

  return weather
}

export const WeatherHourly = ({
  date,
  time,
  temperature,
}: WeatherTodayProps) => {
  const { classes } = useWeatherHourlyStyles()

  const weather = someFunction(time, temperature)

  return (
    <Stack className={classes.stack}>
      <Flex className={classes.date}>
        <Text>Today</Text>
        <Text>{date}</Text>
      </Flex>

      <Flex className={classes.time}>
        {weather.map(({ time, temperature }) => (
          <HourlyElement temperature={temperature ?? 0} time={`${time}.00`} />
        ))}
      </Flex>
    </Stack>
  )
}
