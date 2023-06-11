import { ArrowRightIcon } from '@chakra-ui/icons'
import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../../assets'

const NotFount = () => {
  return (
    <Box display={'flex'} justifyContent="center" alignContent={'center'} minHeight={'60vh'}>
        <Box display={'flex'} flexDirection={'column'} gap={'30px'} alignItems={'center'} justifyContent={'center'}>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                <Heading fontSize={'70px'}>404</Heading>
                <Text fontSize={'30px'} fontWeight={'600'}>PAGE NOT FOUNT</Text>
            </Box>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                <Image src={logo}></Image>
                <Heading><span style={{color:'red'}}>MO</span>devco</Heading>
            </Box>
            <Box>
                <Text maxW={'900px'}>
                    YANA ESLATIB O'TAMIZ MOdevco KOMPANIYASI BARCHA HUQUQLARDAN HIMOYA QILINGA BO'LIB SIZ BU JOYDA BEMALOL O'Z ISHINGIZNI QILISHINGIZ MUMKUN BO'LADI BU KOMPANIYANI ASOSCHISI MUHAMMADALI ANVAROV BO'LIB HOZIRDA UNING YOSHI 18 DA , BU PLATFORMANI U 2 KUNDA QILIB TAMOMLAGAN AGARDA SIZ BU JOYDA ISHLASH YOKI HAMKORLIK QILMOQCHI BOLSANGIZ QUYDAGI MALUMOTLARNI KO'RIB CHIQING.
                </Text>
            </Box>
            <Link to={'/'}>
                <Button display={'flex'} justifyContent={'center'} alignItems={'center'} gap={5}>
                    Asosiy sahifa
                    <ArrowRightIcon />                
                </Button>
            </Link>
        </Box>
    </Box>
  )
}

export default NotFount