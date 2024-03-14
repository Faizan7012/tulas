import { Box, Flex, Image, Menu, MenuButton, MenuItem, MenuList, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Programs from './Programs'
import { programsArr } from './logo'
const Top = () => {

  return (
    <Box>
     <Box className='topbg' w='100%' >
      <Flex   p='20px'  justifyContent={'space-between'} alignItems='center'  >
         <Flex gap='10px' alignItems={'center'}>
         <Image maxW={['50px','60px','150px','150px']}  src='https://i.ibb.co/2t0CYYY/image-1.png' />
         <Image maxW={['50px','60px','100px','100px']}  src='https://i.ibb.co/Mk2nSK5/image-33.png' />
         </Flex>
         <Flex display={['none','none','none','flex']} alignItems={'center'} gap='20px' color='white' fontFamily={'mono'} fontWeight={'600'}>
            <Box className='glow'>HOME</Box>
            <Box className='glow'>ABOUT US</Box>
            <Box className='glow'>PROGRAMS</Box>
            <Box className='glow'>INSTRUCTURES</Box>
            <Box className='glow'>SERVICES</Box>
            <Box className='glow'>ALUMNI</Box>
            <Box className='glow'>ADDMISSIONS</Box>
         </Flex>
         <Menu >
  <MenuButton fontWeight={'bold'} display={['block','block','block','none']} >
  ☰
  </MenuButton>
  <MenuList>
            <MenuItem className='glow'>HOME</MenuItem>
            <MenuItem className='glow'>ABOUT US</MenuItem>
            <MenuItem className='glow'>PROGRAMS</MenuItem>
            <MenuItem className='glow'>INSTRUCTURES</MenuItem>
            <MenuItem className='glow'>SERVICES</MenuItem>
            <MenuItem className='glow'>ALUMNI</MenuItem>
            <MenuItem className='glow'>ADDMISSIONS</MenuItem>
  </MenuList>
</Menu>
      </Flex>
      <Box w='100%' borderTop={'2px solid white'}></Box>
      <Box w={['320px','425px','768px','1320px']} m='auto' h='85vh' backgroundImage='https://i.ibb.co/r7YX6Lk/topbot.png' >
        <Box position={'relative'} top={['30px','30px','50px','100px']}>
        <Image className='glow'  maxW={['100px','100px','100px','200px']} m='auto' mb={['20px','30px','30px','80px']} src='https://i.ibb.co/qJ1LkbH/Add-a-subheading.png'  />
        <Flex flexDir={['column','column','column','row']} gap='20px'  bg='rgb(211,211,211,.7)' w={['100%','100%','70%','70%']} m='auto' justifyContent={'space-between'} fontWeight={'600'} fontFamily={'mono'} p={'30px'} borderRadius={'20px'}>
             <Flex className='glow' justifyContent={'space-between'}  bg='#40826d' borderRadius={'5px'} color='white' p='10px 0px' gap='30px'>
                <Box>⸺</Box>
                <Box>PAY ONLINE</Box>
                <Box>⸺</Box>
             </Flex>
             <Flex className='glow' justifyContent={'space-between'} bg='#40826d' borderRadius={'5px'} color='white' p='10px 0px' gap='30px'>
                <Box>⸺</Box>
                <Box>APPLY NOW</Box>
                <Box>⸺</Box>
             </Flex>
             <Flex className='glow' justifyContent={'space-between'} bg='#40826d' borderRadius={'5px'} color='white' p='10px 0px' gap='30px'>
                <Box >⸺</Box>
                <Box>VIRTUAL TOUR</Box>
                <Box>⸺</Box>
             </Flex>
        </Flex>
        </Box>
      </Box>
      <Box>
      <Flex  borderRadius={'0px 0px 10px 10px'} bg='teal' color='yellow' flexDir={'column'} p='60px 0px 40px 0px' fontSize={'30px'} 
      justifyContent={'center'} alignItems={'center'}>
            <Text className='glow'>
                WELCOME TO
            </Text>
            <Text className='glow' fontStyle={'oblique'} color='white'>
                TULAS INSTITUTE
            </Text>
      </Flex>
      </Box>
      <Box bg='white'>
           <Box p='30px' h='200px' w={['100%','100%','90%','70%' ]} m='auto' bg='white'>
                 <Text className='glow' w={['300px','400px','500px','600px']} m='auto'>
                 Tula’s Institute is dedicated to serve the community by recognizing the diverse needs of the individuals. We encourage personal and professional development through respect, appreciation and a commitment 
                 to general education, as a foundation for life-long learning. Tula’s Institute is the Ranked as No. 9 College in the North India for:
                 </Text>
                 <Text className='glow' w={['300px','400px','400px','500px']} m='auto' mt='50px' color='teal' >
                 Tula’s Institute believes in providing the best possible facilities to its students. We endeavour to create a congenial atmosphere to nurture talent through the support and guidance of experienced faculty members with access to state of the art infrastructure. The Institute is committed to offer the best possible facilities
                  to ensure quality education for the students. The Institute provides excellent infrastructural and ICT facilities with well-equipped
                 </Text>
           </Box>
      </Box>
    </Box>
      <Box mt={['500px','500px','500px','300px']}>
        <Image src='https://i.ibb.co/X45qJKN/Screenshot-305.png' />
      </Box>

      <SimpleGrid w='90%' m='auto' mt='50px' columns={['1','2','3','5']} gap='20px' mb='40px'>
        {
          programsArr.map((ele , index)=>{

          return  <Programs key={index} url={ele.url} type={ele.type} />
          })
        }
      </SimpleGrid>
    </Box>
   
      
  )
}

export default Top
