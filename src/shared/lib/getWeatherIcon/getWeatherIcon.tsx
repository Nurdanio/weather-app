import { ReactComponent as CloudyIcon } from 'shared/img/cloudy.svg'
import { ReactComponent as CloudyWithClarificationsIcon } from 'shared/img/cloudyWithClarifications.svg'
import { ReactComponent as LightningWithClarificationsIcon } from 'shared/img/lightningWithClarifications.svg'
import { ReactComponent as RainyIcon } from 'shared/img/rainy.svg'
import { ReactComponent as RainyHailIcon } from 'shared/img/rainyHail.svg'
import { ReactComponent as RainyWithClarificationsIcon } from 'shared/img/rainyWithClarifications.svg'
import { ReactComponent as SunnyIcon } from 'shared/img/sunny.svg'

const weatherIcons = [
  <CloudyIcon />,
  <CloudyWithClarificationsIcon />,
  <LightningWithClarificationsIcon />,
  <RainyIcon />,
  <RainyHailIcon />,
  <RainyWithClarificationsIcon />,
  <SunnyIcon />,
]

export const getWeatherIcon = () => {
  return weatherIcons[Math.floor(Math.random() * weatherIcons.length)]
}
