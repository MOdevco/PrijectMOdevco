import { EmailIcon, InfoIcon, PhoneIcon } from "@chakra-ui/icons"
import { Box, Button, Heading, Image, Input, Text, useToast } from "@chakra-ui/react"
import axios from "axios";
import { useState } from "react";
import { logo } from "../../assets"

const Footer = () => {

    const TOKENN = '6247126483:AAGFeZ8aLFQXjKw7u9wOvHc2KVSLt8qbxSE';
    const CHAT_ID = '-1001913731954'
    const [val , setVal] = useState('')
    const toast = useToast({
        position: 'top',
        title: 'Sizning emailigiz hato',
        containerStyle: {
          width: '800px',
          maxWidth: '100%',
        },
      })

    const handleSubmit = () => {

        let mess = `Yangi email\n\n`
        mess += `email: ${val}\n`

        if(val.includes('@gmail.com')) {
            axios.post('https://api.telegram.org/bot' + TOKENN + '/sendMessage' , {
                chat_id: CHAT_ID,
                parce_mode: 'html',
                text: mess
            })
        } else {
            toast({})
        }
        setVal('')

    }
   


  return (
    <Box  background={'#379'} height={'100%'} p={'30px'}>

        <Box display={'flex'} justifyContent={'space-between'} flexDirection={{base: 'column' , md: 'row'}}>
            <Box display={'flex'} flexDirection={'column'} gap={5} color={'white'} borderRight={'2px'} pr={'50px'}>
                <Heading fontSize={'30px'}>
                    Bizning homiylarimiz!
                </Heading>
                <ul style={{display: 'flex' , flexDirection: 'column' , gap: '10px'}}>
                    <li className="list"><a href="#">PEPSI</a></li>
                    <li className="list"><a href="#">FANTA</a></li>
                    <li className="list"><a href="#">COCA-COLA</a></li>
                    <li className="list"><a href="#">SILVER</a></li>
                    <li className="list"><a href="#">FAMILY</a></li>
                    <li className="list"><a href="#">NESTLE</a></li>
                    <li className="list"><a href="#">FLESH</a></li>
                    <li className="list"><a href="#">UCHUM MARKET</a></li>
                </ul>
            </Box>
            <Box display={'flex'} mt={{base: '100px', md: '0'}} flexDirection={'column'} justifyContent={'flex-start'} alignItems={{base: 'flex-start' , md: 'center'}} gap={4} color={'white'} borderRight={'2px'} pr={'50px'}>
               <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                    <Image w={'70px'} src={logo}></Image>
                    <Heading color={'white'}><span style={{color: 'red'}}>MO</span>devco</Heading>
               </Box>
                <Text>BIZNI TANLAGANIZDAN AFSUSLANMAYSZ</Text>
                <Text textAlign={{base: 'start' , md: 'center'}} maxWidth={'400px'}>MOdevco asoschisi Muhammadali Anvarov u juda qizqa mudatda bunday fullsrack loihani qurib bitqazdi va novel mukofotini oldi biz undan fahirlanamiz loiha uchun fikirlaringiz bo'lsa marhamat qoldiring!</Text>
            </Box>

            <Box color={'white'} display={'flex'} flexDirection={'column'} gap={5} mt={{base: '100px', md: '0'}}  borderRight={'2px'} pr={'50px'}>
                <Heading fontSize={'30px'}>BIZ BILAN A'LOQA!</Heading>
                <Box display={'flex'} flexDirection={{base: 'column' , md: 'row'}} alignItems={{base: 'flex-start' , md: 'center'}}  gap={'20px'}>
                    <Button><PhoneIcon /></Button>
                    <Button width={{base: '100%' , md: '300px'}}><Text>+99891 - 659 - 55 - 82</Text></Button>
                </Box>
                <Box display={'flex'} flexDirection={{base: 'column' , md: 'row'}} alignItems={{base: 'flex-start' , md: 'center'}}  gap={'20px'}>
                    <Button><EmailIcon /></Button>
                    <Button width={{base: '100%' , md: '300px'}}><Text>modevco05@gmail.com</Text></Button>
                </Box>
                <Box display={'flex'} flexDirection={{base: 'column' , md: 'row'}} alignItems={{base: 'flex-start' , md: 'center'}}  gap={'20px'}>
                    <Button><InfoIcon /></Button>
                    <Button width={{base: '100%' , md: '300px'}}><Text>Barcha huquqga ega</Text></Button>
                </Box>
                <Box display={'flex'} bg={'white'} alignItems={'center'} gap={4} border={'1px'} rounded={'10px'}  paddingX={'10px'} py={'5px'}>
                    <Input value={val} onChange={(e) => setVal(e.target.value)} color={'black'}  border={'none'} outline={'none'} cursor={'pointer'} placeholder="email..."></Input>
                    <Button onClick={handleSubmit}>Jo'natish</Button>
                </Box>
            </Box>
            <Box>
            </Box>
            <Box>

            </Box>
        </Box>

    </Box>
  )
}

export default Footer