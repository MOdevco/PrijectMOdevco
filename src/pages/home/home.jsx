import { Box, Button, ButtonGroup, Divider, Heading, Image, Stack, Text } from "@chakra-ui/react"
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import axios from "axios"
import { useEffect, useState } from "react"
import TypeDrink from "../../components/typeDrink/typeDrink"
import TypeSalat from "../../components/typeSalat/typeSalat"
import TypeShirinlik from "../../components/typeShirinlik/typeShirinlik"

const Home = () => {

    const API = 'http://localhost:3000/ichimliklar'
    const [data , setData] = useState([])
    console.log(data)

    useEffect(() => {

        axios.get(API).then((res) => {
            setData(res.data)
        })

    },[API])
    return (
        <Box>
            <Box mt={'100px'}>
                <Box textAlign={'center'}>
                    <Heading fontSize={{base: '30px' , md: '40px'}} >MOdevco Mahsulotlariga Marhamat</Heading>
                    <Text fontSize={'20px'} color={'red'} fontWeight={'bold'} fontStyle={'italic'}>Bizda barcha turdagi mahsulotlar bor</Text>
                </Box>
            </Box>

            <Box>
                <TypeDrink />
            </Box>

            <Box>
                <TypeShirinlik />
            </Box>

            <Box>
                <TypeSalat />
            </Box>
        </Box>
    )
}

export default Home