import React, { useState, useEffect } from "react";
import { useDisclosure } from "@chakra-ui/react";
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
const AddDrug = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [medicinesName, setMedcineName] = useState("");
  const [manufacturerName, setManufacturerName] = useState("");
  const [saltName, setSaltName] = useState("");
  const [variant, setVariant] = useState("");
  const [category, setCategory] = useState([]);
  const [cat, setCat] = useState("");
  const [subCat, setSubCat] = useState("");
  const [sub_category, setSubCategory] = useState([]);
  const [id, setId] = useState([]);

  useEffect(async () => {
    const response2 = await fetch(
      "http://127.0.0.1:8000/pos/druglist/getCategories"
    );
    const data2 = await response2.json();
    // console.log(data2, 'data2')

    setCategory(data2);
  }, []);
  return <div></div>;
};

export default AddDrug;
