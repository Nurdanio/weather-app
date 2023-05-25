import { Select } from '@mantine/core'
import { useLocationStore } from './store'

export const LocationSelector = () => {
  const { location, setLocation } = useLocationStore()

  return (
    <Select
      value={location}
      data={['Moscow', 'Los-Angeles', 'Bishkek', 'Almaty']}
      onChange={setLocation}
    />
  )
}
