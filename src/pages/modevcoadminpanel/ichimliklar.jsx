import { Alert, AlertIcon, Box, Button, Image, Input, Spinner, Text, useToast, WrapItem } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { cat } from '../../assets'
import AdminDrink from '../../components/adminDrink/adminDrink'

const Ichimliklar = () => {
  const API = 'http://localhost:3000/ichimliklar'
  const [data , setData] = useState({name: '' , url: '' , title: '' , price: ''})
  const toast = useToast()
  const [onLoader , setOnLoader] = useState(true)

  const handleAdd = async () => {
    setOnLoader(false)
    await axios.post(API , data).then((res) => {  
      toast({
        title: "MAHSULOT QO'SHULDI",
        description: "Tekshirish uchun mahsulot bo'limiga o'ting",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      setOnLoader(true)

    }).catch((err) => {
      console.log(err)
      setOnLoader(true)
    })

  }

  return (
    <Box overflowY={'scroll'} height={'100vh'}>
      
      <Box display={'flex'} flexDirection={'column'} gap={'50px'}>
          <Box>
            <Text fontSize={'25px'} fontWeight={'bold'}>ICHIMLI QO'SHISH</Text>
          </Box>
          
          <Box display={'flex'} flexDirection={{base: 'column' , md: 'row'}} gap={'100px'}>
            <Box display={'flex'} flexDirection={'column'}>
              <span style={{fontSize: '20px' , fontWeight: '600'}}>Ichimlik nomi</span>
              <Input width={{base: '100%' , md: '400px'}} onChange={(e) => setData({...data , name: e.target.value})} border={'2px'} borderColor={'#379'} placeholder='name' />
            </Box>
            <Box display={'flex'} flexDirection={'column'}>
              <span style={{fontSize: '20px' , fontWeight: '600'}}>Ichimlik rasmi</span>
              <Input width={{base: '100%' , md: '400px'}} onChange={(e) => setData({...data , url: e.target.value})} border={'2px'} borderColor={'#379'} placeholder='url' />
            </Box>
          </Box>

          <Box display={'flex'} flexDirection={{base: 'column' , md: 'row'}} gap={'100px'}>
            <Box display={'flex'} flexDirection={'column'}>
              <span style={{fontSize: '20px' , fontWeight: '600'}}>Ichimlik haqida</span>
              <Input width={{base: '100%' , md: '400px'}} onChange={(e) => setData({...data , title: e.target.value})} border={'2px'} borderColor={'#379'} placeholder='desc' />
            </Box>
            <Box display={'flex'} flexDirection={'column'}>
              <span style={{fontSize: '20px' , fontWeight: '600'}}>Ichimlik narxi</span>
              <Input width={{base: '100%' , md: '400px'}} onChange={(e) => setData({...data , price: e.target.value})} border={'2px'} borderColor={'#379'} placeholder='price' />
            </Box>
          </Box>

          <Box>
            {onLoader ? <Button onClick={handleAdd} colorScheme='blue'>Qo'shish</Button> :
            <Button isLoading colorScheme='blue' variant='solid'> qo'shilmoqda... </Button>}
          </Box>    

          <Box>
            <AdminDrink />
          </Box>
      </Box>
    </Box>
  )
}

export default Ichimliklar