import { Box, Button, Image, Text, useDisclosure } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { logo } from "../../assets"
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import { useState } from "react"
import { HamburgerIcon } from "@chakra-ui/icons"


const Navbar = () => {
    const [size, setSize] = useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleClick = (newSize) => {
      setSize(newSize)
      onOpen()
    }
    const sizes = [ 'full']

  return (
    <Box background={'#379'}  h={{base: '18vh' , md: '13vh'}} p={5}>
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} maxWidth={'1727px'} mx={'auto'}>

            <Box >
                <Link to={'/'}>
                    <Box   display={'flex'} flexDirection={{base: 'column' , md: 'row'}} alignItems={'center'} gap={{base: 0 , md: 5}}>
                        <Image w={'70px'} src={logo}></Image>
                        <Text color={'white'} fontSize={'40px'}><span style={{color: 'red'}}>MO</span>devco</Text>
                    </Box>
                </Link>

            </Box>
            <Box display={{base: 'none' , md: 'block'}}>
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} fontSize={'20px'} color={'white'} gap={'30px'}>
                    <Link to={'/'}>Bosh sahifa</Link>
                    <Link to={'/ichimlik'}>Ichimlillar</Link>
                    <Link to={'/shirinlik'}>Shirinlilar</Link>
                    <Link to={'/salat'}>Salatlar</Link>
                </Box>

            </Box>

            <Box display={{base: 'none' , md: 'block'}}>
                <Link to={'/register'}><Button>Ro'yhatdan o'tish</Button></Link>
            </Box>
            <Box display={{base: 'block' , md: 'none'}}>
                {sizes.map((size) => (
                    <Button
                      onClick={() => handleClick(size)}
                      key={size}
                      m={4}
                    >{<HamburgerIcon />}</Button>
                ))}
                <Drawer onClose={onClose} isOpen={isOpen} size={size}>
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerBody>
                        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignContent={'flex-end'} minHeight={'100vh'} gap={'30px'}>
                            <Link to={'/'}>
                                <Box   display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} gap={5}>
                                    <Image w={'70px'} src={logo}></Image>
                                    <Text  fontSize={'40px'}><span style={{color: 'red'}}>MO</span>devco</Text>
                                </Box>
                            </Link>
                            <Box display={'flex'} flexDirection={{base: 'column' , md: 'row'}} justifyContent={'center'} alignItems={'center'} fontSize={'20px'}  gap={'30px'}>
                                <Link to={'/'}>Bosh sahifa</Link>
                                <Link to={'/ichimlik'}>Ichimlillar</Link>
                                <Link to={'/shirinlik'}>Shirinlilar</Link>
                                <Link to={'/salat'}>Salatlar</Link>
                            </Box>
                        </Box>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Box>
        </Box>
    </Box>
  )
}

export default Navbar