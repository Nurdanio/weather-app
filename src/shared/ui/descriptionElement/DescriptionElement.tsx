import { Flex } from '@mantine/core'
import { ReactNode } from 'react'

interface DescriptionElementProps {
  icon: ReactNode
  value: string
}

export const DescriptionElement = ({
  icon,
  value,
}: DescriptionElementProps) => {
  return (
    <Flex gap={5} sx={{ color: 'white', alignItems: 'center' }}>
      {icon}
      {value}
    </Flex>
  )
}
