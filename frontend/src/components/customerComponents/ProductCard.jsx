import React from "react";
import { Box, IconButton, Stack, Text, transition } from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
const ProductCard = () => {
  return (
    <div>
      <Box
        shadow="md"
        height="180px"
        minWidth="80px"
        padding="10px"
        _hover={{ shadow: "dark-lg", transition: "ease-in" }}
      >
        <Text fontSize="lg" fontWeight="700">
          lorem 20
        </Text>
        <Stack direction="row">
          <IconButton icon={<MinusIcon />} />
          <IconButton icon={<AddIcon />} />
        </Stack>
      </Box>
    </div>
  );
};

export default ProductCard;
