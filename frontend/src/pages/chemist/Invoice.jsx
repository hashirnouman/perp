import React, { useState, useEffect } from "react";
import { Container, Box, Text, Flex, Stack } from "@chakra-ui/react";
import ChemistLayout from "../../Layouts/ChemistLayout";
import AddMedicine from "../../components/chemistComponents/AddMedicine";
import MedicineList from "../../components/chemistComponents/MedicineList";
import { useDispatch } from "react-redux";
import { medicineListActions } from "../../store/medicineList/medicineListSlicer";
// import Medicine from "./Medicine";
import {
  FormControl,
  Input,
  Button,
  Divider,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
const Invoice = () => {
  const [drugs, getDrugs] = useState([]);
  const [total, setTotal] = useState(0);
  const [medicine, setMedicine] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [selectedDrugsList, setSelectedDrugsList] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/pos/druglist/drug")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        getDrugs(data);
      });
  }, []);

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    const filterWord = drugs.filter((drug) => {
      return drug.drug_name.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(filterWord);
    }
  };
  const calculateTotal = () => {
    let sum = 0;
    selectedDrugsList.map((item) => {
      sum += item.quantity * item.price_per_packet;
    });
    setTotal(sum);
  };
  return (
    <div>
      <ChemistLayout>
        <Stack direction="row-reverse" spacing={28}>
          <div style={{ minWidth: "10%", overflowX: "hidden" }}>
            <div>
              {/* <form> */}
              {/* <FormControl> */}
              <Stack direction="row">
                <Input
                  placeholder="Enter medicine"
                  bg="white"
                  onChange={handleFilter}
                  required
                />
              </Stack>
              {filteredData.length != 0 && (
                <Box
                  bg="white"
                  width="100%"
                  mt={1}
                  ml={1}
                  p={2}
                  borderRadius={5}
                >
                  {filteredData.slice(0, 4).map((drug, key) => {
                    return (
                      <Box index={key} m={5} width="100%">
                        <Stack
                          direction="row"
                          justifyContent="space-around"
                          alignItems="center"
                          m={3}
                        >
                          <Text>{drug.drug_name}</Text>
                          <Button
                            variant="solid"
                            colorScheme="blue"
                            onClick={() => {
                              // console.log(drug, key, "hmmmmmm");
                              let mydrug = { ...drug, quantity: 1 };
                              if (
                                JSON.stringify(selectedDrugsList).includes(
                                  JSON.stringify(mydrug)
                                ) === false
                              ) {
                                setSelectedDrugsList([
                                  ...selectedDrugsList,
                                  mydrug,
                                ]);
                              }
                              calculateTotal();
                            }}
                          >
                            Add
                          </Button>
                        </Stack>
                        <Divider />
                      </Box>
                    );
                  })}
                </Box>
              )}
           
            </div>
          </div>
          <div style={{ marginLeft: 10 }}>
            <div className="main2">
              <TableContainer variant="simple" width="100">
                <Table variant="striped" colorScheme="teal">
                  <Thead>
                    <Tr>
                      <Th>Drug Name</Th>
                      <Th>Drug Price</Th>
                      <Th>Drug Quantity</Th>
                      <Th>Sub Total</Th>
                      <Th>Action</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {selectedDrugsList.map((drug, key) => {
                      console.log(drug);
                      return (
                        <Tr>
                          <Td>{drug.drug_name}</Td>
                          <Td>{drug.price_per_packet}</Td>

                          <Td>{drug.quantity}</Td>
                          <Td>{drug.price_per_packet * drug.quantity}</Td>
                          <Td>
                            <Button
                              variant="solid"
                              colorScheme="blue"
                              onClick={() => {
                                let temp = [...selectedDrugsList];
                                let mydrug = temp[key];
                                mydrug.quantity = mydrug.quantity + 1;
                                temp[key] = mydrug;
                                setSelectedDrugsList([...temp]);
                                calculateTotal();
                              }}
                            >
                              +
                            </Button>
                            <Button
                              variant="solid"
                              colorScheme="blue"
                              style={{ marginLeft: 10 }}
                              onClick={() => {
                                let temp = [...selectedDrugsList];
                                let mydrug = temp[key];
                                mydrug.quantity = mydrug.quantity - 1;
                                if (mydrug.quantity < 1) mydrug.quantity = 1;
                                temp[key] = mydrug;
                                setSelectedDrugsList([...temp]);
                                calculateTotal();
                              }}
                            >
                              -
                            </Button>
                            <Button
                              variant="solid"
                              colorScheme="blue"
                              style={{ marginLeft: 10 }}
                              onClick={() => {
                                let temp = [...selectedDrugsList];
                                temp.splice(key, 1);
                                setSelectedDrugsList([...temp]);
                                calculateTotal();
                              }}
                            >
                              Delete
                            </Button>
                          </Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>
              </TableContainer>
            </div>
            <Box w={400} minH={100} mt={5} bg="blue.700" color="white" p={10}>
              <Flex
                direction="row"
                justifyContent="space-evenly"
                alignItems="baseline"
              >
                <Text fontSize="3xl" fontWeight="bold">
                  Total
                </Text>
                <Text fontSize="3xl" fontWeight="bold">
                  {total}
                </Text>
              </Flex>
            </Box>
          </div>
        </Stack>
      </ChemistLayout>
    </div>
  );
};

export default Invoice;
