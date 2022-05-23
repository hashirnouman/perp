import React, { useState, useEffect, useCallback } from "react";
import style from "./styles/DrugsTables.module.css";
import {
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  Td,
  IconButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  FormControl,
  Stack,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import axios from "axios";
const DrugsTable = () => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [colData, setColData] = useState("");
  const [drug, setDrug] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [salt, setSalt] = useState("");
  const [variant, setVariant] = useState("");
  const [potency, setPotency] = useState(null);
  const [price, setPrice] = useState(null);
  const [unit, setUnit] = useState(null);
  const [id, setId] = useState(null);
  const [drugList, setDrugList] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/pos/druglist/drug", {})
      .then((res) => res.json())
      .then((data) => {
        setDrugList(data);
      });
  }, []);
  const handleDelete = (id) => {
    axios.delete(`http://127.0.0.1:8000/pos/druglist/drug/${id}`).then(() => {
      fetch("http://127.0.0.1:8000/pos/druglist/drug", {})
        .then((res) => res.json())
        .then((data) => {
          setDrugList(data);
          toast({
            title: "Drug Deleted",
            description: "We've Updated details of drug.",
            status: "info",
            duration: 2000,
            isClosable: true,
          });
        });
    });
  };
  const handleShow = (d) => {
    setColData(d);
    setDrug(d.drug_name);
    setManufacturer(d.manufacturer_name);
    setSalt(d.salt_name);
    setVariant(d.variant);
    setPotency(d.potency);
    setPrice(d.price_per_packet);
    setUnit(d.units_per_packet);
    setId(d.id);
    onOpen();
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const drugDetails = {
      drug_name: drug,
      manufacturer_name: manufacturer,
      salt_name: salt,
      potency: potency,
      price_per_packet: price,
      units_per_packet: unit,
      variant: variant,
    };
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: JSON.stringify(drugDetails),
    };
    fetch(`http://127.0.0.1:8000/pos/druglist/drug/${id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        fetch("http://127.0.0.1:8000/pos/druglist/drug", {})
          .then((res) => res.json())
          .then((data) => {
            setDrugList(data);
          })
          .then(() => {
            toast({
              title: "Drug Updated",
              description: "We've Updated details of drug.",
              status: "success",
              duration: 3000,
              isClosable: true,
            });
          });

        onClose();
      })
      .catch((error) => console.log("error", error));
  };
  var sr = 0;
  return (
    <div className={style.main}>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{/* <Lorem count={2} /> */}</ModalBody>
          <form onSubmit={handleSubmit}>
            <FormControl isRequired w={400}>
              <Stack>
                <Input
                  placeholder="Enter Medicine name"
                  value={drug}
                  onChange={(e) => setDrug(e.target.value)}
                  isRequired
                />
                <Input
                  placeholder="Enter Manufacturer Name"
                  value={manufacturer}
                  onChange={(e) => setManufacturer(e.target.value)}
                  isRequired
                />
                <Input
                  placeholder="Enter Salt Name"
                  value={salt}
                  onChange={(e) => setSalt(e.target.value)}
                  isRequired
                />
                <Input
                  placeholder="Enter variant"
                  value={variant}
                  onChange={(e) => setVariant(e.target.value)}
                  isRequired
                />

                <Input
                  placeholder="Enter Potency/Ml"
                  type="number"
                  value={potency}
                  onChange={(e) => setPotency(e.target.value)}
                  isRequired
                />
                <Input
                  placeholder="Enter Price Per packet"
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  isRequired
                />
                <Input
                  placeholder="Enter Total units per packet"
                  type="number"
                  value={unit}
                  isRequired
                  onChange={(e) => setUnit(e.target.value)}
                />
              </Stack>
            </FormControl>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="solid" type="submit" colorScheme="blue">
                Update
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
      {drugList && (
        <Table colorScheme="facebook">
          <Thead>
            <Tr>
              <Th>id</Th>
              <Th>Drug Name</Th>
              <Th>Manufacturer Name</Th>
              <Th>Salt Name</Th>
              <Th>Potency (mg)</Th>
              <Th>Price per packet</Th>
              <Th>Unit(s) per packet</Th>
              <Th>Variant</Th>
            </Tr>
          </Thead>
          <Tbody>
            {drugList.map((d, index) => {
              return (
                <Tr key={d.id}>
                  <Td>{++sr}</Td>
                  <Td>{d.drug_name}</Td>
                  <Td>{d.manufacturer_name}</Td>
                  <Td>{d.salt_name}</Td>
                  <Td>{d.potency}</Td>
                  <Td>{d.price_per_packet}</Td>
                  <Td>{d.units_per_packet}</Td>
                  <Td>{d.variant}</Td>

                  <Td>
                    <IconButton
                      icon={<EditIcon />}
                      onClick={(e) => handleShow(d, index)}
                    />
                  </Td>
                  <Td>
                    <IconButton
                      icon={<DeleteIcon />}
                      onClick={() => handleDelete(d.id)}
                    />
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      )}
    </div>
  );
};

export default DrugsTable;
