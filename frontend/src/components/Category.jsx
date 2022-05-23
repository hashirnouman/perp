import React, { useState, useEffect } from "react";
import { useDisclosure } from "@chakra-ui/react";
import {
  Button,
  FormControl,
  Input,
  Stack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Select,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import axios from "axios";
const Category = ({ categories }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [category, setCategory] = useState(null);
  const [subCat, setSubCat] = useState("");
  const [id, setId] = useState([]);
  const addCategory = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/pos/druglist/category", {
        category: category,
      })
      .then((response) => {
        if (response.status == 200) {
          alert("Data added");
          setCategory("");
        }
      });
  };
  const addSubCategory = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/pos/druglist/subcategory", {
        sub_category: subCat,
        category_id: id,
      })
      .then((res) => {
        if (res.status == 200) {
          alert("Data added");
          setSubCat("");
        }
      });
  };
  return (
    <div>
      <Button
        variant="solid"
        bg="blue.800"
        color="white"
        colorScheme="blue"
        onClick={onOpen}
      >
        Add Category
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Categories</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Tabs isFitted>
              <TabList>
                <Tab>Add Category</Tab>
                <Tab> Add Sub-Category</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <form onSubmit={addCategory}>
                    <FormControl>
                      <Input
                        placeholder="Enter Category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        isRequired
                      />
                      <Button variant="solid" type="submit" colorScheme="blue">
                        Add
                      </Button>
                    </FormControl>
                  </form>
                </TabPanel>
                <TabPanel>
                  <Stack>
                    <Select
                      id="category"
                      placeholder="Select Category"
                      value={id}
                      onChange={(e) => setId(e.target.value)}
                    >
                      {categories.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.category}
                        </option>
                      ))}
                    </Select>
                    <form onSubmit={addSubCategory}>
                      <FormControl>
                        <Input
                          placeholder="Enter Sub-Category"
                          value={subCat}
                          onChange={(e) => setSubCat(e.target.value)}
                          isRequired
                        />
                      </FormControl>
                      <Button variant="solid" type="submit" colorScheme="blue">
                        Add
                      </Button>
                    </form>
                  </Stack>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" variant="ghost" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Category;
