import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Box, Button } from '@chakra-ui/react'
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
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useFetch } from '../../useFetch/useFetch'

const Admin = () => {
    const url = 'http://localhost:3000/users'
    const {data:data} = useFetch(url)
    const navigate = useNavigate()

    function handleDelete(id) {
        axios.delete('http://localhost:3000/users/' + id).then((res) => {
            navigate('/')
        }).catch(err => console.log(err))
    }


  return (
        <Box display={'flex'}   flexDirection={'column'} justifyContent={'flex-start'} alignItems={'center'} minHeight={'100vh'}>
            <Box overflowY={'scroll'} height={'100vh'}>
                <TableContainer>
                    <Table>
                        <Thead >
                            <Tr>
                                <Th fontSize={'20px'} w={'100%'}>
                                    №
                                </Th>
                                <Th fontSize={'20px'} w={'100%'}>
                                    ISM
                                </Th>
                                <Th fontSize={'20px'} w={'100%'}>
                                    FAMILIYA
                                </Th>
                                <Th fontSize={'20px'} w={'100%'}>
                                    EMAIL
                                </Th>
                                <Th fontSize={'20px'} w={'100%'}>
                                    PASSWORD
                                </Th>
                                <Th fontSize={'20px'} w={'100%'}>
                                    TOZALASH
                                </Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                        {data && data.map((item , i) => (
                            <Tr key={i}  gap={5} >
                                <Td bg={'#379'} color={'white'} w={'100%'} fontSize={'20px'} fontWeight={'500'}>
                                    {item.id}
                                </Td>
                                <Td bg={'#379'} color={'white'} w={'100%'} fontSize={'20px'} fontWeight={'500'}>
                                    {item.name}
                                </Td>
                                <Td bg={'#379'} color={'white'} w={'100%'} fontSize={'20px'} fontWeight={'500'}>
                                    {item.lastName}
                                </Td>
                                <Td bg={'#379'} color={'white'} w={'100%'} fontSize={'20px'} fontWeight={'500'}>
                                    {item.email}
                                </Td>
                                <Td bg={'#379'} color={'white'} w={'100%'} fontSize={'20px'} fontWeight={'500'}>
                                    {item.password}
                                </Td>
                                <Td bg={'#379'} color={'white'} w={'100%'} display={'flex'} justifyContent={'center'} gap={5}>
                                    <Button onClick={() => handleDelete(item.id)} background={'red'} color={'white'} _hover={{background: 'rgb(151, 25, 21)'}}><DeleteIcon /></Button>
                                </Td>
                            </Tr>
                        ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    )
    function handleDelete(id) {
        axios.delete('http://localhost:3000/users/' + id)
    }
}

export default Admin