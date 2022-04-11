import { Box, VStack, Text } from "@chakra-ui/react";
import React from "react";

const Cards = ({ src, title }) => {
  return (
    <div>
      <Box>
        <VStack>
          <img src={src} />
          <Text fontWeight="bold" color="white" fontSize="3xl">
            {title}
          </Text>
        </VStack>
      </Box>
    </div>
  );
};

export default Cards;
