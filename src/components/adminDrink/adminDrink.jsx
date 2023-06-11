import { DeleteIcon } from "@chakra-ui/icons"
import { Box, Button, ButtonGroup, Divider, Heading, Image,  Text } from "@chakra-ui/react"
import { Card,  CardBody, CardFooter } from '@chakra-ui/react'
import axios from "axios"
import { useEffect, useState } from "react"
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

const AdminDrink = () => {
    const API = 'http://localhost:3000/ichimliklar'
    const [data , setData] = useState([])
    console.log(data)

    useEffect(() => {

        axios.get(API).then((res) => {
            setData(res.data)
        })

    },[API])
    
    const handleDelete = (id) => {
        axios.delete('http://localhost:3000/ichimliklar/' + id)
    }
  return (
    <Box>


        <Box display={'flex'} flexDirection={'column'} gap={5} justifyContent={'space-between'} flexWrap={'wrap'}>
            
            {data.map((item , i) => (
                <TableContainer>
                    <Table variant='simple'>
                        <Thead >
                            <Tr bg={'#379'} color={'white'}    key={i}>
                                <Td color={'white'}  fontSize={'20px'} width={'400px'}>{item.id}</Td>
                                <Td color={'white'}  fontSize={'20px'} width={'400px'}>{item.name}</Td>
                                <Td color={'white'}  fontSize={'20px'} width={'400px'}><Image width={'50px'} src={item.url}></Image></Td>
                                <Td color={'white'}  fontSize={'20px'} width={'400px'}>{item.title}</Td>
                                <Td color={'white'}  fontSize={'20px'} width={'400px'}>{item.price} ming so'm</Td>
                                <Td color={'white'}  fontSize={'20px'} width={'400px'}><Button onClick={() => handleDelete(item.id)} bg={'red'} color={'white'}><DeleteIcon /></Button></Td>
                            </Tr>
                        </Thead>
                    </Table>
                </TableContainer>
            ))}
        </Box>
    </Box>
  )
}

export default AdminDrink


{/* <Card width={'300px'} height={'600px'} key={i} mt={10} > */}
                    {/* <CardBody display={'flex'} flexDirection={'column'} gap={'20px'}> */}
                        {/* <Button color={'white'} _hover={{background: '#379'}} background={'#379'} width={'120px'}>{item.id} - Mahsulot</Button> */}
                        {/* <Image height={'300px'} src={item.url} alt='Green double couch with wooden legs'borderRadius='lg'/> */}
                        {/* <Heading size='md'>{item.name}</Heading> */}
                        {/* <Text fontSize={'25px'}>{item.title}</Text> */}
                         {/* <Divider /> */}
                    {/* </CardBody> */}
                    {/* <CardFooter> */}
                        {/* <ButtonGroup spacing='2'> */}
                            {/* <Button onClick={() => handleDelete(item.id)} bg={'red'} variant='solid' colorScheme='blue'> */}
                                {/* <DeleteIcon /> */}
                            {/* </Button> */}
                            {/* <Text color='blue.600' fontSize='2xl'> */}
                                {/* {item.price} ming so'm */}
                            {/* </Text> */}
                        {/* </ButtonGroup> */}
                    {/* </CardFooter> */}
                {/* </Card> */}