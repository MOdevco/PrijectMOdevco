import { Alert, AlertIcon, Box, Button, FormControl, FormLabel, Image, Img, InputGroup, InputRightElement, useToast } from "@chakra-ui/react"
import { Input } from '@chakra-ui/react'
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { logo } from "../../assets"
import { useFetch } from "../../useFetch/useFetch"

const Register = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const [send , setSend] = useState(true)
  const toast = useToast()
  
  const url = 'http://localhost:3000/users'
  const [val , setValue] = useState({name:'' , lastName:'' , email:'' , password:'' })
  const navigate = useNavigate()
   const onSubmit = async (e) => {
    setSend(false)
    await axios.post(url , val).then(() => {
      toast({
        title: "Siz Muofaqiyatli ro'yhatdan o'tdingiz",
        description: "Bizni tanlaganligingiz uchun rahmat😊",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      setSend(true)
      navigate('/')
    }).catch(() => { 
      setSend(true)
    })
  }
  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} minHeight={'100vh'} width={'100%'} flexDirection={'column'}>
      

      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} gap={'40px'}>
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} >
          <Box>
            <Image src={logo}></Image>
          </Box>
          <Box fontSize={'30px'}><span style={{color: 'red'}}>MO</span>devco Register</Box>
        </Box>
        {/* <Alert status='success' variant='solid'>
          <AlertIcon />
          Data uploaded to the server. Fire on!
        </Alert> */}
        

          <FormControl display={'flex'} flexDirection={'column'} gap={'10px'} onSubmit={e => e.preventDefault()}>
            <FormLabel>Ismingiz</FormLabel>
            <Input width={{base: '100%' , md: '500px'}} onChange={e => setValue({...val , name: e.target.value})} type={'text'} placeholder='Ismingiz...' />
            <FormLabel>Familiya</FormLabel>
            <Input width={{base: '100%' , md: '500px'}} onChange={e => setValue({...val , lastName: e.target.value})} type={'text'} placeholder='Familiyangiz...' />
            <FormLabel>Email</FormLabel>
            <Input width={{base: '100%' , md: '500px'}} onChange={e => setValue({...val , email: e.target.value})} type={'email'} placeholder='Emaillingiz...' />
            <FormLabel>Kod</FormLabel>
            <InputGroup size='md'>
              <Input width={{base: '100%' , md: '500px'}}
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Kodingiz...'
                onChange={e => setValue({...val , password: e.target.value})}
              />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
            {send && <Button  onClick={onSubmit} colorScheme='blue'>Button</Button>}
            {!send && <Button
              isLoading
              loadingText='Loading'
              colorScheme='teal'
              variant='outline'
              spinnerPlacement='start'
            >
              Submit
            </Button>}
         </FormControl>
        </Box>
      </Box>

  )
}

export default Register