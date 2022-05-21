import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { medicineListActions } from "../../store/medicineList/medicineListSlicer";
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
  const dispatch = useDispatch();
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
    filteredData.filter((value) => {
      dispatch(medicineListActions.addMedicine({ medicine: value.drug_name }));
      // onAdd({ medicine: value.drug_name });
    });
    setInput("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Stack direction="row">
          <FormControl>
            <Input
              placeholder="Enter medicine"
              bg="white"
              onChange={handleFilter}
              required
            />
          </FormControl>
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
                    <Button variant="solid" type="submit" colorScheme="blue">
                      Add
                    </Button>
                  </Stack>
                  <Divider />
                </Box>
              );
            })}
          </Box>
        )}
      </form>
    </div>
  );
};

export default AddMedicine;
