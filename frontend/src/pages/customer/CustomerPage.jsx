import React from "react";
import { SimpleGrid, Box } from "@chakra-ui/react";
import ProductCard from "../../components/customerComponents/ProductCard";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
const CustomerPage = () => {
  const location = useLocation();
  return (
    <>
      <Box>
        <Header locationName={location.pathname} />
        <SimpleGrid minChildWidth="220px" spacing="40px" padding="30px">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default CustomerPage;
