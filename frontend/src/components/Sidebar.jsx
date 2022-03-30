import React from 'react'
import { Box, Text, VStack } from '@chakra-ui/react'
import NavItem from './NavItem'
import { Sliderdata } from '../utils/Sliderdata'
const Sidebar = () => {
    return (
        <div>
            <Box h="100vh" w={250} bg="blue.800" p={5} minH="100vh">
                <Text color="blue.50">
                    <VStack
                        spacing={7}
                        align='stretch'
                    >
                        <Text fontSize={20}>
                            Admin
                        </Text>
                        {Sliderdata.map((item, key) => {

                            return (
                                < NavItem icon={item.image} title={item.title} path={item.path} />
                            )
                        })

                        }
                    </VStack>
                </Text>
            </Box>
        </div >
    )
}

export default Sidebar