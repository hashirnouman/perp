import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useLocation } from "react-router-dom";
import styles from "./AdminLayout.module.css";
const AdminLayouts = ({ children }) => {
  const location = useLocation();
  return (
    <>
      <Flex>
        <Sidebar />
        <Flex direction="column" grow={5} className={styles.main}>
          <Header locationName={location.pathname} />
          <Box bg="gray.200" p={2} className={styles.main}>
            <div>{children}</div>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default AdminLayouts;
