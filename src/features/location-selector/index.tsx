import { Select } from '@mantine/core'
import {
  GrLocation as LocationIcon,
  GrFormDown as DownIcon,
} from 'react-icons/gr'
import { useLocationSelectorStyle } from 'features/location-selector/LocationSelector.style'
import { useLocationStore } from './store'

export const LocationSelector = () => {
  const { location, setLocation } = useLocationStore()
  const { classes } = useLocationSelectorStyle()

  return (
    <Select
      className={classes.selector}
      value={location}
      data={['Moscow', 'Los-Angeles', 'Bishkek', 'Almaty']}
      onChange={setLocation}
      icon={
        <LocationIcon style={{ width: 30, height: 30, paddingRight: 12 }} />
      }
      rightSection={
        <DownIcon style={{ width: 25, height: 25, paddingLeft: 12 }} />
      }
    />
  )
}
