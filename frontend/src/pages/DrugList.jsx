import React, { useState, useEffect } from "react";
import { Center, FormControl, HStack, Input, Stack } from "@chakra-ui/react";
import "./styles/Home.css"
import AdminLayouts from "../Layouts/AdminLayouts";
import AddDrug from "../components/AddDrug";
import Category from "../components/Category";
const DrugList = () => {
  const [categories, setCategories] = useState([]);
  const [sub_categories, setSubCategories] = useState([]);
  useEffect(() => {
    const abortController = new AbortController();
    Promise.all([
      fetch("http://127.0.0.1:8000/pos/druglist/category", {
        signal: abortController.signal,
      })
        .then((res) => res.json())
        .then((data) => {
          setCategories(data);
        }),
      fetch("http://127.0.0.1:8000/pos/druglist/subcategory", {
        signal: abortController.signal,
      })
        .then((res) => res.json())
        .then((data) => {
          setSubCategories(data);
        }),
    ]).then(() => {});
    return () => abortController.abort();
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
      </AdminLayouts>
    </div>
  );
};

export default DrugList;
