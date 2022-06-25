import React from "react";
import { Box } from "@chakra-ui/react";

const ProductCard = ({ drug }) => {
  return (
    <div>
      <Box
        shadow="md"
        height="180px"
        minWidth="80px"
        padding="10px"
        _hover={{ shadow: "dark-lg", transition: "ease-in" }}
      >
        
        <h2>{drug}</h2>
      </Box>
    </div>
  );
};

export default ProductCard;
