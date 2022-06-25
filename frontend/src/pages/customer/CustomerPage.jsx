import React from "react";
import { SimpleGrid, Box } from "@chakra-ui/react";
import ProductCard from "../../components/customerComponents/ProductCard";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const CustomerPage = () => {
  const [drugname, setDrugName] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/pos/druglist/drug").then((res) => {
      setDrugName(res.data);
    });
  }, []);
  const location = useLocation();
  return (
    <>
      <Box>
        <Header locationName={location.pathname} />
        <SimpleGrid minChildWidth="220px" spacing="40px" padding="30px">
       
          {drugname.map((item, index) => {
            return <ProductCard drug={item.drug_name} />;
          })}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default CustomerPage;
