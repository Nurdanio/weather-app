import { Center, Stack } from '@mantine/core'
import { useEffect, useState } from 'react'
import {
  WeatherToday,
  WeatherHourly,
  NextForecast,
  WeatherDescription,
} from 'widgets'
import { LocationSelector } from 'features/location-selector'
import { useLocationStore } from 'features/location-selector/store'
import { getWeatherByCity } from 'shared/api'
import { getMonth } from 'shared/lib/getMonth/getMonth'
import { useHomePageStyles } from './HomePage.styles'
import { DataType } from './lib'

const HomePage = () => {
  const [weatherData, setWeatherData] = useState<DataType>({} as DataType)
  const { location } = useLocationStore()
  const { classes } = useHomePageStyles()
  const date = new Date()

  // useEffect(() => {
  //   getWeatherByCity(location)
  //     .then((response) => setWeatherData(response?.data))
  //     .catch(() => console.log('Error'))
  // }, [location])

  return (
    <Center h="100vh">
      <Stack className={classes.stack}>
        <LocationSelector />
        <WeatherToday
          temperature={Number(weatherData?.current?.temperature ?? 0)}
        />
        <WeatherDescription
          humidity={Number(weatherData?.current?.humidity) ?? 0}
          pressure={Number(weatherData?.current?.pressure) ?? 0}
          windSpeed={Number(weatherData?.current?.wind_speed) ?? 0}
        />
        <WeatherHourly
          date={`${getMonth(date.getMonth())}, ${date.getDay()}`}
          time={date.getHours()}
        />
        <NextForecast
          temperature={Number(weatherData?.current?.temperature ?? 0)}
          date={date}
        />
      </Stack>
    </Center>
  )
}

export default HomePage
