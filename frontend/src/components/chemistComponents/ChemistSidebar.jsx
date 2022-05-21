import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import ChemistNavItem from "./ChemistNavItem";
import { ChemistSliderdata } from "../../utils/ChemistSliderData";
const ChemistSidebar = () => {
  return (
    <div>
      <Box h="100vh" w={250} bg="blue.800" p={5} minH="100vh">
        <Text color="blue.50">
          <VStack spacing={7} align="stretch">
            <Text fontSize={20}>
              Chemist
            </Text>
            {ChemistSliderdata.map((item, index) => {
              return (
                <ChemistNavItem
                  icon={item.image}
                  key={index}
                  title={item.title}
                  path={item.path}
                />
              );
            })}
          </VStack>
        </Text>
      </Box>
    </div>
  );
};

export default ChemistSidebar;
