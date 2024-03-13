import { Box, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import Programs from './Programs'

const Top = () => {
  return (
    <Box>
     <Box className='topbg' w='100%' >
      <Flex   p='20px'  justifyContent={'space-between'} alignItems='center'  >
         <Flex gap='10px' alignItems={'center'}>
         <Image maxW='150px'  src='https://i.ibb.co/2t0CYYY/image-1.png' />
         <Image maxW='100px'  src='https://i.ibb.co/Mk2nSK5/image-33.png' />
         </Flex>
         <Flex alignItems={'center'} gap='20px' color='white' fontFamily={'mono'} fontWeight={'600'}>
            <Box>HOME</Box>
            <Box>ABOUT US</Box>
            <Box>PROGRAMS</Box>
            <Box>INSTRUCTURES</Box>
            <Box>SERVICES</Box>
            <Box>ALUMNI</Box>
            <Box>ADDMISSIONS</Box>
         </Flex>
      </Flex>
      <Box w='100%' borderTop={'2px solid white'}></Box>
      <Box w='1320px' m='auto' h='85vh' backgroundImage='https://i.ibb.co/r7YX6Lk/topbot.png' >
        <Box position={'relative'} top='100px'>
        <Image  maxW={'200px'} m='auto' mb='80px' src='https://i.ibb.co/qJ1LkbH/Add-a-subheading.png'  />
        <Flex  bg='rgb(211,211,211,.7)' w='70%' m='auto' justifyContent={'space-between'} fontWeight={'600'} fontFamily={'mono'} p={'30px'} borderRadius={'20px'}>
             <Flex justifyContent={'space-between'} bg='#40826d' borderRadius={'5px'} color='white' p='10px 0px' gap='30px'>
                <Box>⸺</Box>
                <Box>PAY ONLINE</Box>
                <Box>⸺</Box>
             </Flex>
             <Flex justifyContent={'space-between'} bg='#40826d' borderRadius={'5px'} color='white' p='10px 0px' gap='30px'>
                <Box>⸺</Box>
                <Box>APPLY NOW</Box>
                <Box>⸺</Box>
             </Flex>
             <Flex justifyContent={'space-between'} bg='#40826d' borderRadius={'5px'} color='white' p='10px 0px' gap='30px'>
                <Box>⸺</Box>
                <Box>VIRTUAL TOUR</Box>
                <Box>⸺</Box>
             </Flex>
        </Flex>
        </Box>
      </Box>
      <Box>
      <Flex  borderRadius={'0px 0px 10px 10px'} bg='teal' color='yellow' flexDir={'column'} p='60px 0px 40px 0px' fontSize={'30px'} justifyContent={'center'} alignItems={'center'}>
            <Text>
                WELCOME TO
            </Text>
            <Text fontStyle={'oblique'} color='white'>
                TULAS INSTITUTE
            </Text>
      </Flex>
      </Box>
      <Box bg='white'>
           <Box p='30px' h='200px' w='70%' m='auto' bg='white'>
                 <Text w='600px'>
                 Tula’s Institute is dedicated to serve the community by recognizing the diverse needs of the individuals. We encourage personal and professional development through respect, appreciation and a commitment 
                 to general education, as a foundation for life-long learning. Tula’s Institute is the Ranked as No. 9 College in the North India for:
                 </Text>
                 <Text mt='50px' color='teal' w='500px' >
                 Tula’s Institute believes in providing the best possible facilities to its students. We endeavour to create a congenial atmosphere to nurture talent through the support and guidance of experienced faculty members with access to state of the art infrastructure. The Institute is committed to offer the best possible facilities
                  to ensure quality education for the students. The Institute provides excellent infrastructural and ICT facilities with well-equipped
                 </Text>
           </Box>
      </Box>
    </Box>
      <Box>
        <Image src='https://i.ibb.co/X45qJKN/Screenshot-305.png' />
      </Box>

      <SimpleGrid w='90%' m='auto' mt='50px' columns={'5'} gap='20px' mb='40px'>
        <Programs 
        type='AGRICULTURE'
        url='https://images.pexels.com/photos/1200225/pexels-photo-1200225.jpeg?auto=compress&cs=tinysrgb&w=600'
        />
        <Programs 
        type='ENGINEERING'
        url='https://images.pexels.com/photos/3761508/pexels-photo-3761508.jpeg?auto=compress&cs=tinysrgb&w=600'
        />
        <Programs 
        type='BUSINESS'
        url='https://images.pexels.com/photos/2912583/pexels-photo-2912583.jpeg?auto=compress&cs=tinysrgb&w=600'
        />
        <Programs 
        type='CUMMUNICATION'
        url='https://images.pexels.com/photos/1181329/pexels-photo-1181329.jpeg?auto=compress&cs=tinysrgb&w=600'
        />
        <Programs 
        type='COMPUTER APP'
        url='https://images.pexels.com/photos/92628/pexels-photo-92628.jpeg?auto=compress&cs=tinysrgb&w=600'
        />
        <Programs 
        type='AGRICULTURE'
        url='https://images.pexels.com/photos/1200225/pexels-photo-1200225.jpeg?auto=compress&cs=tinysrgb&w=600'
        />
        <Programs 
        type='ENGINEERING'
        url='https://images.pexels.com/photos/3761508/pexels-photo-3761508.jpeg?auto=compress&cs=tinysrgb&w=600'
        />
        <Programs 
        type='BUSINESS'
        url='https://images.pexels.com/photos/2912583/pexels-photo-2912583.jpeg?auto=compress&cs=tinysrgb&w=600'
        />
        <Programs 
        type='CUMMUNICATION'
        url='https://images.pexels.com/photos/1181329/pexels-photo-1181329.jpeg?auto=compress&cs=tinysrgb&w=600'
        />
        <Programs 
        type='COMPUTER APP'
        url='https://images.pexels.com/photos/92628/pexels-photo-92628.jpeg?auto=compress&cs=tinysrgb&w=600'
        />
        <Programs 
        type='AGRICULTURE'
        url='https://images.pexels.com/photos/1200225/pexels-photo-1200225.jpeg?auto=compress&cs=tinysrgb&w=600'
        />
        <Programs 
        type='ENGINEERING'
        url='https://images.pexels.com/photos/3761508/pexels-photo-3761508.jpeg?auto=compress&cs=tinysrgb&w=600'
        />
        <Programs 
        type='BUSINESS'
        url='https://images.pexels.com/photos/2912583/pexels-photo-2912583.jpeg?auto=compress&cs=tinysrgb&w=600'
        />
        <Programs 
        type='CUMMUNICATION'
        url='https://images.pexels.com/photos/1181329/pexels-photo-1181329.jpeg?auto=compress&cs=tinysrgb&w=600'
        />
        <Programs 
        type='COMPUTER APP'
        url='https://images.pexels.com/photos/92628/pexels-photo-92628.jpeg?auto=compress&cs=tinysrgb&w=600'
        />
      </SimpleGrid>
    </Box>
   
      
  )
}

export default Top
