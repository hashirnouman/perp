import React, { useState, useEffect } from "react";
import axios from "axios";
import { Center, FormControl, HStack, Input, Stack } from "@chakra-ui/react";

import AdminLayouts from "../Layouts/AdminLayouts";
import AddDrug from "../components/AddDrug";
import Category from "../components/Category";
import DrugsTable from "../components/DrugsTable";
const DrugList = () => {
  const [categories, setCategories] = useState([]);
  const [sub_categories, setSubCategories] = useState([]);
  const [drugList, setDrugList] = useState([]);

  const fetch = () => {
    let categoriesURL = "http://127.0.0.1:8000/pos/druglist/category";
    let subcategoriesURL = "http://127.0.0.1:8000/pos/druglist/subcategory";
    let drugsURL = "http://127.0.0.1:8000/pos/druglist/drug";

    const categoriesRequest = axios.get(categoriesURL);
    const subcategoriesRequest = axios.get(subcategoriesURL);
    const drugsRequest = axios.get(drugsURL);
    axios
      .all([categoriesRequest, subcategoriesRequest, drugsRequest])
      .then(
        axios.spread((...responses) => {
          const categoriesdata = responses[0];
          const subcategoriesdata = responses[1];
          const drugsdata = responses[2];
          setCategories(categoriesdata.data);
          setSubCategories(subcategoriesdata.data);
          setDrugList(drugsdata.data);
        })
      )
      .catch((errors) => {
        console.error(errors);
      });
  };
  useEffect(() => {
    fetch();
  }, []);
  return (
    <div className="main">
      <AdminLayouts>
        <Stack>
          <Center>
            <HStack spacing={5}>
              <FormControl isRequired w={900}>
                <Input
                  id="search-text"
                  placeholder="Search Medicines"
                  bg="white"
                />
              </FormControl>
              <AddDrug
                categories={categories}
                sub_categories={sub_categories}
              />
              <Category categories={categories} />
            </HStack>
          </Center>
        </Stack>
        <DrugsTable />
      </AdminLayouts>
    </div>
  );
};

export default DrugList;
