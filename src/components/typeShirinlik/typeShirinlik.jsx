import { Box, Button, ButtonGroup, Divider, Heading, Image,  Spinner,  Text } from "@chakra-ui/react"
import { Card,  CardBody, CardFooter } from '@chakra-ui/react'
import axios from "axios"
import { useEffect, useState } from "react"
import { cat } from "../../assets"

const TypeShirinlik = () => {
    const API = 'http://localhost:3000/shirinlilar'
    const [data , setData] = useState([])
    const [loader , setLoader] = useState(true)
    useEffect(() => {
        setLoader(false)
        axios.get(API).then((res) => {
            setData(res.data)
        }).then(() => {
            setLoader(true)
        })

    },[API])
  return (
    <Box mt={'100px'} mb={'100px'}>
        <Box maxWidth={'1727px'} mx={'auto'} mt={'20px'}>
            <Box>
                <Heading fontSize={'30px'}>MAZZALIK SHIRINLIKLAR</Heading>
            </Box>
            {!loader && <Box display={'flex'} gap={'20px'} justifyContent={'center'} minHeight={'25vh'} flexDirection={'column'}  alignItems={'center'}>
                <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
                />
                <Image width={'140px'} src={cat}></Image>
                <Text fontSize={'30px'}>Malumot kutyapman</Text>
            </Box>}
           {loader && <Box display={'flex'} justifyContent={'space-between'} flexWrap={'wrap'}>
                {data.map((item , i) => (
                    <Card width={'300px'} height={'600px'} key={i} mt={10} >
                        <CardBody display={'flex'} flexDirection={'column'} gap={'20px'}>
                            <Button color={'white'} _hover={{background: '#379'}} background={'#379'} width={'120px'}>{item.id} - Mahsulot</Button>
                            <Image height={'300px'} src={item.url} alt='Green double couch with wooden legs'borderRadius='lg'/>
                            <Heading size='md'>{item.name}</Heading>
                            <Text fontSize={'25px'}>{item.title}</Text>
                             <Divider />
                        </CardBody>
                        <CardFooter>
                            <ButtonGroup spacing='2'>
                                <Button variant='solid' colorScheme='blue'>
                                    Savatga
                                </Button>
                                <Text color='blue.600' fontSize='2xl'>
                                    {item.price} ming so'm
                                </Text>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                ))}
            </Box>}
        </Box>
    </Box>
  )
}

export default TypeShirinlik