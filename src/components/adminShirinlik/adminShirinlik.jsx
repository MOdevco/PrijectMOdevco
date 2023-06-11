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


const AdminShirinlik = () => {
    const API = 'http://localhost:3000/shirinlilar'
    const [data , setData] = useState([])
    console.log(data)

    useEffect(() => {

        axios.get(API).then((res) => {
            setData(res.data)
        })

    },[API])
    
    const handleDelete = (id) => {
        axios.delete('http://localhost:3000/shirinlilar/' + id)
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

export default AdminShirinlik