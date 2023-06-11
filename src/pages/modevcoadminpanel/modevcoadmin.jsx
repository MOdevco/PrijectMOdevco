import { Box, Button, Image, Input, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useFetch } from '../../useFetch/useFetch'
import { logo } from '../../assets'
import { Link, Route, Routes } from 'react-router-dom'
import Admin from './admin'
import Ichimliklar from './ichimliklar'
import Shirinlik from './shirinlik'
import Salatlar from './salatlar'

const Modevcoadmin = () => {
  

  const [admin , setAdmin] = useState(true)
  const [ichimlik , setIchimlik] = useState(false)
  const [shirinlik , setShirinlik] = useState(false)
  const [salat , setSalat] = useState(false)
  const [onOpen , setOnOpen] = useState(true)
  const [user , setUser] = useState('')
  const [password , setPassword] = useState('')
  const toast = useToast({
    position: 'top',
    title: 'Malumotingiz hato!',

  })

  
  const handlePass = () => {
    if(user === 'modevco' && password === '0305') {
      setOnOpen(false)
    } else {
      toast({
      })
    }
    
  }



  const handleAdmin = () => {
    setAdmin(true)
    setIchimlik(false)
    setShirinlik(false)
    setSalat(false)
  }
  const handleIchimlik = () => {
    setAdmin(false)
    setIchimlik(true)
    setShirinlik(false)
    setSalat(false)
  }
  const handleShirinlik = () => {
    setAdmin(false)
    setIchimlik(false)
    setShirinlik(true)
    setSalat(false)
  }
  const handleSalat = () => {
    setAdmin(false)
    setIchimlik(false)
    setShirinlik(false)
    setSalat(true)
  }
  
  return (
    <Box >
     {onOpen && <Box position={'fixed'} width={'100%'} height={'100%'} top={'0'} left={'0'} zIndex={'100'} bg={'black'} display={'flex'} flexDirection={'column'} justifyContent={'center'}alignItems={'center'} minHeight={'100vh'}>
        <Box bg={'#378'} w={'500px'} rounded={'30px'} height={'500px'} p={'20px'}>
                   
          <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
            <Image src={logo}></Image>
            <Text color={'white'} fontSize={'30px'}><span style={{color: 'red'}}>MO</span>devco</Text>
          </Box>
          
          <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'flex-start'} gap={'20px'} minHeight={'30vh'}>
            <Input onChange={(e) => setUser(e.target.value)} color={'white'} placeholder='user name' />
            <Input onChange={(e) => setPassword(e.target.value)} color={'white'} type={'number'} placeholder='parol' />
            <Button onClick={handlePass} width={'200px'}>Kirish</Button>
          </Box>
        </Box>
      </Box>}
      <Box display={'flex'} flexDirection={{base: 'column' , md: 'row'}} w={'100%'} maxHeight={'100%'}>
        <Box background={'#379'}  w={{base: '100%' , md: '20%'}} display={'flex'} flexDirection={'column'} p={'30px'} justifyContent={'flex-start'} gap={5}>
          <Box display={'flex'} justifyContent={'center'} alignItems={'center'}><Image src={logo}></Image></Box>
          <Box color={'white'} display={'flex'} fontSize={'40px'} justifyContent={'center'} alignItems={'center'}><span style={{color: 'red'}}>MO</span>devco</Box>
          <Box>
            <Button onClick={handleAdmin} w={'100%'} colorScheme='blue'>Admin</Button>
          </Box>
          <Box>
            <Button onClick={handleIchimlik} w={'100%'} colorScheme='blue'>Ichimlik qo'shish</Button>
          </Box>
          <Box><Button onClick={handleShirinlik} w={'100%'} colorScheme='blue'>Shirinlik qo'shish</Button></Box>
          <Box><Button onClick={handleSalat} w={'100%'} colorScheme='blue'>Salat qo'shish</Button></Box>
        </Box>

        <Box p={20} width={'100%'} overflow={{base: 'scroll' , md: 'visible'}}>
          { admin && <Admin />}
          { ichimlik && <Ichimliklar />}
          { shirinlik && <Shirinlik />}
          { salat && <Salatlar />}
        </Box>

      </Box>
    </Box>
  )
}

export default Modevcoadmin