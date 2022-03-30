import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HStack, List, ListItem, Text } from '@chakra-ui/react'
const ChemistNavItem = ({ icon, title, path }) => {
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(true)
    }
    return (
        <div>
            <List spacing={3}>
                <ListItem _hover={{ backgroundColor: "#35557f", transition: "0.2s ease-in-out" }} p={2} borderRadius='lg'
                >
                    <NavLink to={path}>

                        <HStack onClick={handleClick} style={{ backgroundColor: active ? "##35557f" : " " }}>
                            <img src={icon} alt="none" width={40} height={40} />
                            <Text fontWeight={700} fontSize={20}>
                                {title}
                            </Text>
                        </HStack>

                    </NavLink>
                </ListItem>
            </List>
        </div >
    )
}

export default ChemistNavItem