import {
  Button,
  Center,
  FormControl,
  HStack,
  IconButton,
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
import { IoMdAddCircle } from "react-icons/io";
import axios from "axios";
import React, { useState, useEffect } from "react";
import AdminLayouts from "../Layouts/AdminLayouts";
import { useDisclosure } from "@chakra-ui/react";
const DrugList = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();
  const [medicinesName, setMedcineName] = useState("");
  const [manufacturerName, setManufacturerName] = useState("");
  const [saltName, setSaltName] = useState("");
  const [variant, setVariant] = useState("");
  const [category, setCategory] = useState([]);
  const [cat, setCat] = useState("");
  const [subCat, setSubCat] = useState("");
  const [sub_category, setSubCategory] = useState([]);
  const [id, setId] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const addCategory = (e) => {};
  const addSubCategory = async (e) => {
    e.preventDefault();
    e.preventDefault();
    await axios
      .post("http://127.0.0.1:8000/pos/druglist/addSubCategories", {
        sub_category: subCat,
        category_id: id,
      })
      .then((res) => console.log(res.data));
  };
  const showCategory = async (e) => {
    // e.preventDefault()
    // const response = await fetch('http://127.0.0.1:8000/pos/druglist/getSubCategories')
    // const data = await response.json()
    // console.log(data, 'data')
    // setSubCategory(data)
  };
  useEffect(async () => {
    const response2 = await fetch(
      "http://127.0.0.1:8000/pos/druglist/getCategories"
    );
    const data2 = await response2.json();
    // console.log(data2, 'data2')

    setCategory(data2);
  }, []);

  return (
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
            <IconButton
              icon={<IoMdAddCircle />}
              size="lg"
              bg="blue.800"
              color="white"
              onClick={onOpen}
            />
            <Modal isOpen={isOpen} onClose={onClose}>
              <form onSubmit={handleSubmit}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Add Medicine</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <FormControl isRequired w={400}>
                      <Stack>
                        <Input placeholder="Enter Medicine name" isRequired />
                        <Input
                          placeholder="Enter Manufacturer Name"
                          isRequired
                        />
                        <Input placeholder="Enter Salt Name" isRequired />
                        <Input placeholder="Enter variant" isRequired />
                        <Select id="category" placeholder="Select Category">
                          {category.map((item, index) => (
                            <option key={index}> {item.category} </option>
                          ))}
                        </Select>
                        <Select
                          id="sub_category"
                          placeholder="Select Sub-category"
                          onChange={showCategory}
                        >
                          {sub_category.map((item, index) => (
                            <option key={index}>{item.sub_category}</option>
                          ))}
                        </Select>
                        <Input
                          placeholder="Enter Potency/Ml"
                          type="number"
                          isRequired
                        />
                        <Input
                          placeholder="Enter Price Per packet"
                          isRequired
                        />
                        <Input
                          placeholder="Enter Total units per packet"
                          isRequired
                        />
                      </Stack>
                    </FormControl>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      colorScheme="blue"
                      variant="ghost"
                      mr={3}
                      onClick={onClose}
                    >
                      Close
                    </Button>
                    <Button variant="solid" type="submit" colorScheme="blue">
                      Add
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </form>
            </Modal>

            <Button
              variant="solid"
              bg="blue.800"
              color="white"
              colorScheme="blue"
              onClick={onOpen2}
            >
              Add Category
            </Button>
            <Modal isOpen={isOpen2} onClose={onClose2}>
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
                        <form onSubmit={addCategory} noValidate>
                          <FormControl>
                            <Input
                              id="category"
                              placeholder="Enter Category"
                              value={cat}
                              onChange={(e) => setCat(e.target.value)}
                              isRequired
                            />
                          </FormControl>
                          <Button
                            variant="solid"
                            type="submit"
                            colorScheme="blue"
                          >
                            Add
                          </Button>
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
                            {category.map((item, index) => (
                              <option key={index} value={item.id}>
                                {" "}
                                {item.category}{" "}
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
                            <Button
                              variant="solid"
                              type="submit"
                              colorScheme="blue"
                            >
                              Add
                            </Button>
                          </form>
                        </Stack>
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </ModalBody>
                <ModalFooter>
                  <Button
                    colorScheme="blue"
                    variant="ghost"
                    mr={3}
                    onClick={onClose2}
                  >
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </HStack>
        </Center>
      </Stack>
    </AdminLayouts>
  );
};

export default DrugList;
