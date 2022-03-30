import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { useLocation } from 'react-router-dom'

const AdminLayouts = ({ children }) => {
    const location = useLocation()
    return (
        <div>
            <Flex>
                <Sidebar />
                <Flex direction="column" grow={5}>

                    <Header locationName={location.pathname} />
                    <Box bg="gray.100" minH="91vh" p={2}>
                        {children}
                    </Box>

                </Flex>
            </Flex>

        </div>
    )
}

export default AdminLayouts