import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useLocation } from "react-router-dom";

const AdminLayouts = ({ children }) => {
  const location = useLocation();
  return (
    <div style={{ scrollBehavior: "unset" }}>
      <Flex>
        <Sidebar />

        <Flex direction="column" grow={5}>
          <Header locationName={location.pathname} />
          <Box bg="gray.200" minH="91vh" p={2}>
            <div style={{ overflowY: "auto" }}>{children}</div>
          </Box>
        </Flex>
      </Flex>
    </div>
  );
};

export default AdminLayouts;
