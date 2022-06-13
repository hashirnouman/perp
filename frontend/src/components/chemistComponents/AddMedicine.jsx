import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { medicineListActions } from "../../store/medicineList/medicineListSlicer";
import Medicine from "./Medicine";
import {
  Stack,
  FormControl,
  Input,
  Button,
  Box,
  Divider,
  Text,
} from "@chakra-ui/react";
const AddMedicine = ({ drugs }) => {
  const [input, setInput] = useState("");
  const [medicine, setMedicine] = useState("");
  const [filteredData, setFilteredData] = useState([]);

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
  const handleSubmit = (e) => {
    e.preventDefault();
    filteredData.filter((drugs) => {
      // dispatch(medicineListActions.addMedicine({ medicine: drugs.drug_name }));
      console.log(drugs.drug_name);
      <Medicine med={drugs.drug_name} />;
    });
    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <Stack direction="row">
            <Input
              placeholder="Enter medicine"
              bg="white"
              onChange={handleFilter}
              required
            />
          </Stack>
          {filteredData.length != 0 && (
            <Box bg="white" width="100%" mt={1} ml={1} p={2} borderRadius={5}>
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
                      <Button variant="solid" colorScheme="blue" type="submit">
                        Add
                      </Button>
                    </Stack>
                    <Divider />
                  </Box>
                );
              })}
            </Box>
          )}
        </FormControl>
      </form>
    </div>
  );
};

export default AddMedicine;
