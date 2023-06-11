import { Alert, AlertIcon, Box, Button, Input, Text, useToast, WrapItem } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AdminShirinlik from '../../components/adminShirinlik/adminShirinlik'

const Shirinlik = () => {
    const API = 'http://localhost:3000/shirinlilar'
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
      })
    }
    return (
        <Box overflowY={'scroll'} height={'100vh'}>
            <Box display={'flex'} flexDirection={'column'} gap={'50px'}>
                <Box>
                  <Text fontSize={'25px'} fontWeight={'bold'}>SHIRINLIKLAR QO'SHISH</Text>
                </Box>

                <Box display={'flex'} flexDirection={{base: 'column' , md: 'row'}} gap={'100px'}>
                  <Box display={'flex'} flexDirection={'column'}>
                    <span style={{fontSize: '20px' , fontWeight: '600'}}>Shirinlik nomi</span>
                    <Input width={{base: '100%' , md: '400px'}} onChange={(e) => setData({...data , name: e.target.value})} border={'2px'} borderColor={'#379'} placeholder='name' />
                  </Box>
                  <Box display={'flex'} flexDirection={'column'}>
                    <span style={{fontSize: '20px' , fontWeight: '600'}}>Shirinlik rasmi</span>
                    <Input width={{base: '100%' , md: '400px'}} onChange={(e) => setData({...data , url: e.target.value})} border={'2px'} borderColor={'#379'} placeholder='url' />
                  </Box>
                </Box>

                <Box display={'flex'} flexDirection={{base: 'column' , md: 'row'}} gap={'100px'}>
                  <Box display={'flex'} flexDirection={'column'}>
                    <span style={{fontSize: '20px' , fontWeight: '600'}}>Shirinlik haqida</span>
                    <Input width={{base: '100%' , md: '400px'}} onChange={(e) => setData({...data , title: e.target.value})} border={'2px'} borderColor={'#379'} placeholder='desc' />
                  </Box>
                  <Box display={'flex'} flexDirection={'column'}>
                    <span style={{fontSize: '20px' , fontWeight: '600'}}>Shirinlik narxi</span>
                    <Input width={{base: '100%' , md: '400px'}} onChange={(e) => setData({...data , price: e.target.value})} border={'2px'} borderColor={'#379'} placeholder='price' />
                  </Box>
                </Box>

                <Box>
                  {onLoader ? <Button onClick={handleAdd} colorScheme='blue'>Qo'shish</Button> :
                  <Button isLoading colorScheme='blue' variant='solid'> qo'shilmoqda... </Button>}
                </Box>    

                <Box>
                    <AdminShirinlik />
                </Box>


            </Box>
        </Box>
    )
}

export default Shirinlik