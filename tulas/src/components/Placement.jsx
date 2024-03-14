import { Avatar, Box, Flex, Heading, Image, SimpleGrid, Text, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import { logos } from './logo'
import AnimatedNumbers from "react-animated-numbers";
const Placement = () => {
  return (
     <Box w='100%' >
         <Box bg='teal' p='20px 50px' color='white' w={['300px','400px','500px','500px']} borderRadius={'10px'} m='auto' mb='40px'>

                <Text className='glow' fontSize={'20px'}>Tulas</Text>
              <Heading className='glow'>
                PLACEMENTS
               </Heading>
         </Box>


         <Box
      h="300px"
      backgroundImage="url('https://iili.io/JWEPKLN.md.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      borderRadius="md"
      position="relative"
      boxShadow="md"
    >
      <Flex
        w="100%"
        h="100%"
        position="absolute"
        bg="rgba(0, 0, 0, 0.5)"
        borderRadius="md"
        m='auto'
        alignItems={'center'}
        justifyContent={'center'}
        p='20px'
      >
       <center>
       <Wrap spacing={'30px'} w={'100%'} m='auto'>
          {
            logos.map((ele)=>{
      return <WrapItem key={ele.company}>
        <Avatar  size={['sm','sm','md','md']} src={ele.logo_url} />
      </WrapItem>
            })
          }
       </Wrap>
       </center>
         
      </Flex>
      </Box>

     <Box className='glow' borderRadius={'5px'} color='white' textAlign={'center'} p='20px' w={['300px','400px','500px','700px']} m='auto' bg='#E69706' mt='-50px' position={'relative'} fontWeight={'600'}>
        ASSOCIATE WITH 750+ COMPANIES
     </Box>
     <Box className='glow' color='white' textAlign={'center'} p='20px' w={['300px','400px','500px','500px']} m='auto' bg='teal' position={'relative'} fontWeight={'600'}>
     “Education is not only a way of learning new things but also looking at the world differently.
      My 35 Years of Experience in Business, Social & Public space has
     </Box>
      <Flex
       h={['160px','200px','200px','283px']} w={['97%','95%','90%','85%']} m='auto' borderRadius={'20px'} backgroundImage='url(https://i.ibb.co/H4GVjJM/pexels-oleksandr-tiupa-192136.jpg)'
       alignItems={'center'} justifyContent={'space-around'}
       flexWrap={'wrap'}

      >
        <Flex  fontStyle={'Bebas Neue'} flexDir={'column'} gap='30px' alignItems={'center'} justifyContent={'center'}>
          <Heading className='glow' color='#E69706' fontSize={['20px','20px','30px','40px']}>
          <AnimatedNumbers
        includeComma
        transitions={(index) => ({
          type: "spring",
          duration: index+0.3,
        })}
        animateToNumber={'36.5'}
      />
          </Heading>
          <Heading className='glow' color='white' fontStyle={'TT Chocolates Trl'} fontSize={['10px','13px','15px','20px']}>Highest Package - INR</Heading>
        </Flex>
        <Flex  fontStyle={'Bebas Neue'} flexDir={'column'} gap='30px' alignItems={'center'} justifyContent={'center'}>
          <Heading className='glow' color='#E69706' fontSize={['20px','20px','30px','40px']}>
          <AnimatedNumbers
        includeComma
        transitions={(index) => ({
          type: "spring",
          duration: index+0.3,
        })}
        animateToNumber={'5.6'}
      />

          </Heading>
          <Heading className='glow' color='white' fontStyle={'TT Chocolates Trl'} fontSize={['10px','13px','15px','20px']}>Average Package - INR</Heading>
        </Flex>
        <Flex  fontStyle={'Bebas Neue'} flexDir={'column'} gap='30px' alignItems={'center'} justifyContent={'center'}>
          <Heading className='glow' color='#E69706' fontSize={['20px','20px','30px','40px']}>
          <AnimatedNumbers
        includeComma
        transitions={(index) => ({
          type: "spring",
          duration: index+0.3,
        })}
        animateToNumber={'750'}
      />
          </Heading>
          <Heading className='glow' color='white' fontStyle={'TT Chocolates Trl'} fontSize={['10px','13px','15px','20px']}>Companies For Placement</Heading>
        </Flex>
      </Flex>
     </Box>
  )
}

export default Placement
