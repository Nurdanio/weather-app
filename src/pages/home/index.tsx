import { Center, Flex, Stack } from '@mantine/core'
import { useEffect, useState } from 'react'
import { RiNotification2Line as NotificationIcon } from 'react-icons/ri'
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
        <Flex w="100%" justify="space-between" align="center">
          <LocationSelector />
          <NotificationIcon style={{ color: 'white', width: 30, height: 30 }} />
        </Flex>
        <WeatherToday
          temperature={Number(weatherData?.current?.temperature ?? 0)}
        />
        <WeatherDescription
          humidity={Number(weatherData?.current?.humidity) ?? 0}
          pressure={Number(weatherData?.current?.pressure) ?? 0}
          windSpeed={Number(weatherData?.current?.wind_speed) ?? 0}
        />
        <WeatherHourly
          date={`${getMonth(date.getMonth())}, ${date.getDate()}`}
          time={date.getHours()}
          temperature={Number(weatherData?.current?.temperature ?? 25)}
        />
        <NextForecast
          temperature={Number(weatherData?.current?.temperature ?? 25)}
          date={date}
        />
      </Stack>
    </Center>
  )
}

export default HomePage
