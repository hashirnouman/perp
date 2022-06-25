import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Center,
  FormControl,
  HStack,
  Input,
  Stack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

import AdminLayouts from "../Layouts/AdminLayouts";
import AddDrug from "../components/AddDrug";
import Category from "../components/Category";
import DrugsTable from "../components/DrugsTable";
import CategoriesTables from "../components/CategoriesTables";
const DrugList = () => {
  const [categories, setCategories] = useState([]);
  const [drugList, setDrugList] = useState([]);

  const fetch = () => {
    let categoriesURL = "http://127.0.0.1:8000/pos/druglist/category";

    let drugsURL = "http://127.0.0.1:8000/pos/druglist/drug";

    const categoriesRequest = axios.get(categoriesURL);
    //  const subcategoriesRequest = axios.get(subcategoriesURL);
    const drugsRequest = axios.get(drugsURL);
    axios
      .all([categoriesRequest, drugsRequest])
      .then(
        axios.spread((...responses) => {
          const categoriesdata = responses[0];
          //  const subcategoriesdata = responses[1];
          const drugsdata = responses[1];
          setCategories(categoriesdata.data);
          //  setSubCategories(subcategoriesdata.data);
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
              <AddDrug categories={categories} />
              <Category categories={categories} />
            </HStack>
          </Center>
        </Stack>
        <Tabs isFitted variant="soft-rounded" mt={9}>
          <TabList>
            <Tab>Drugs</Tab>
            <Tab>Cetegories</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <DrugsTable />
            </TabPanel>
            <TabPanel>
              <CategoriesTables />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </AdminLayouts>
    </div>
  );
};

export default DrugList;
