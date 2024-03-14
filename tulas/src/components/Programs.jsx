import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Programs = ({url , type , index}) => {
  return (
<Box
key={index}
h="400px"
backgroundImage={`url(${url})`}
backgroundSize="cover"
backgroundPosition="center"
borderRadius="md"
position="relative"
boxShadow="md"
>
<Box
  position="absolute"
  bottom="0"
  left="0"
  right="0"
  p="4"
  bg="rgba(0, 0, 0, 0.6)"
  borderBottomRadius="md"
  fontSize={'20px'}
  className='glow'
>
  <Text color="white" >DEPARTMENT OF</Text>
  <Text color="white">{type}</Text>
</Box>
</Box>
  )
}

export default Programs
