import React, { useState, useEffect } from "react";
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
  Skeleton,
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
  const [potency, setPotency] = useState(null);
  const [price, setPrice] = useState(null);
  const [unit, setUnit] = useState(null);
  const [id, setId] = useState(null);
  const [drugList, setDrugList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(null);
  const url = "http://127.0.0.1:8000/pos/druglist/drug";
  useEffect(() => {
    fetch(url, {})
      .then((res) => res.json())
      .then((data) => {
        setDrugList(data);
        setLoading(false);
      });
  }, [url]);
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
    setDrug(d.drug_name);
    setManufacturer(d.manufacturer_name);
    setSalt(d.salt_name);
    setPotency(d.potency);
    setPrice(d.price_per_packet);
    setUnit(d.units_per_packet);
    setId(d.id);
    setCategoryId(d.category_id);
    onOpen();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://127.0.0.1:8000/pos/druglist/drug/${id}`, {
        drug_name: drug,
        manufacturer_name: manufacturer,
        salt_name: salt,
        potency: potency,
        price_per_packet: price,
        units_per_packet: parseInt(unit),
        id: id,
        category_id: categoryId,
      })
      .then(() => {
        axios.get(url).then((res) => {
          setDrugList(res.data);
          toast({
            title: "Drug Updated",
            description: "We've Updated details of drug.",
            status: "info",
            duration: 2000,
            isClosable: true,
          });
        });
      });
  };
  var sr = 0;
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Drug</ModalHeader>
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
        <Skeleton isLoaded={!loading}>
          <Table colorScheme="facebook">
            <Thead>
              <Tr>
                <Th>Sr#</Th>
                <Th>id</Th>
                <Th>Drug Name</Th>
                <Th>Manufacturer Name</Th>
                <Th>Salt Name</Th>
                <Th>Potency (mg)</Th>
                <Th>Price per packet</Th>
                <Th>Unit(s) per packet</Th>
              </Tr>
            </Thead>
            <Tbody>
              {drugList.map((d, index) => {
                return (
                  <Tr key={index}>
                    <Td>{++sr}</Td>
                    <Td>{d.id}</Td>
                    <Td>{d.drug_name}</Td>
                    <Td>{d.manufacturer_name}</Td>
                    <Td>{d.salt_name}</Td>
                    <Td>{d.potency}</Td>
                    <Td>{d.price_per_packet}</Td>
                    <Td>{d.units_per_packet}</Td>

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
        </Skeleton>
      )}
    </div>
  );
};

export default DrugsTable;
