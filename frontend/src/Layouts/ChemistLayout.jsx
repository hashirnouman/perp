import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import ChemistSidebar from "../components/chemistComponents/ChemistSidebar";
import styles from "./ChemistLayout.module.css";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
const ChemistLayout = ({ children }) => {
  const location = useLocation();
  return (
    <div>
      <Flex>
        <ChemistSidebar />
        <Flex direction="column" grow={5}>
          <Header locationName={location.pathname} />
          <Box bg="gray.100" minH="91vh" p={2}>
            <div className={styles.main}>{children}</div>
          </Box>
        </Flex>
      </Flex>
    </div>
  );
};

export default ChemistLayout;
