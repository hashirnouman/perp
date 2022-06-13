import React, { useState } from "react";
import {
  Box,
  Heading,
  HStack,
  IconButton,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { BsFillPersonFill } from "react-icons/bs";
import { useHistory } from "react-router-dom";

const Header = ({ locationName }) => {
  const [redirect, setRedirect] = useState(false);
  let history = useHistory();
  const logout = (e) => {
    e.preventDefault();
    // await fetch("http://localhost:8000/api/logout", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    // });

    return history.push("/login");
  };
  return (
    <div>
      <Box bg="gray.200" p={4}>
        <HStack>
          <Heading size="md">
            {locationName.replace("/", "").toUpperCase()}
          </Heading>
          <Spacer />
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<BsFillPersonFill />}
            ></MenuButton>
            <MenuList>
              <MenuItem>Profile</MenuItem>
              <MenuItem onClick={logout}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Box>
    </div>
  );
};

export default Header;
