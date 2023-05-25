import { Flex } from '@mantine/core'

import {
  WiStrongWind as WindSpeedIcon,
  WiBarometer as PressureIcon,
  WiRaindrop as HumidityIcon,
} from 'react-icons/wi'

import { DescriptionElement } from 'shared/ui'

interface WeatherDescriptionProps {
  humidity: number
  windSpeed: number
  pressure: number
}

export const WeatherDescription = ({
  humidity,
  pressure,
  windSpeed,
}: WeatherDescriptionProps) => {
  return (
    <Flex
      sx={{
        width: '345px',
        padding: '0 15px',
        minHeight: '50px',
        borderRadius: 20,
        backgroundColor: 'rgb(0, 16, 38, 0.3)',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      {<DescriptionElement icon={<HumidityIcon />} value={`${humidity}%`} />}
      {<DescriptionElement icon={<PressureIcon />} value={`${pressure}Pa`} />}
      {
        <DescriptionElement
          icon={<WindSpeedIcon />}
          value={`${windSpeed}km/h`}
        />
      }
    </Flex>
  )
}
