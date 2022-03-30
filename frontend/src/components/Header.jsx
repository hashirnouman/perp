import React, { useState } from 'react'
import { Box, Heading, HStack, IconButton, Spacer, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { BsFillPersonFill } from 'react-icons/bs'
import { useHistory } from 'react-router-dom'

const Header = ({ locationName }) => {
    const [redirect, setRedirect] = useState(false)
    let history = useHistory()
    const logout = async (e) => {
        e.preventDefault();
        await fetch('http://localhost:8000/api/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
           
        });
        setRedirect(true);
        if (redirect) {
            return (
                history.push('/login')
            )
        }

    }
    return (
        <Box bg="blue.100" p={4}>
            <HStack>

                <Heading size='md'>
                    {locationName.replace("/", '').toUpperCase()}

                </Heading>
                <Spacer />
                {/* <IconButton icon={<BsFillPersonFill />} /> */}
                <Menu >
                    <MenuButton as={Button} rightIcon={<BsFillPersonFill />}>
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Profile</MenuItem>
                        <MenuItem onClick={logout}>Logout</MenuItem>

                    </MenuList>
                </Menu>

            </HStack>
        </Box>
    )
}

export default Header