import React from "react";
import { IconButton, ButtonGroup, Stack, Flex, Box } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { medicineListActions } from "../../store/medicineList/medicineListSlicer";

const Medicine = ({ med, onDelete }) => {
  const counter = useSelector((state) => state.medicine.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(medicineListActions.increment());
  };
  const decrement = () => {
    dispatch(medicineListActions.decrement());
  };
  return (
    <div>
      <Flex
        direction="row"
        m={2}
        alignItems="baseline"
        justifyContent="space-between"
      >
        <Flex
          minW={400}
          minH={70}
          p={5}
          bg="white"
          justifyContent="space-between"
          alignItems="baseline"
          borderRadius={5}
        >
          <Box>
            <Stack direction="row" spacing={3}>
              <p>{med}</p>
              <p>qunatity: {counter}</p>
            </Stack>
          </Box>
          <ButtonGroup>
            <IconButton
              icon={<AddIcon />}
              colorScheme="blue"
              p={1}
              onClick={increment}
            />
            <IconButton
              icon={<MinusIcon />}
              colorScheme="blue"
              p={1}
              onClick={decrement}
            />
          </ButtonGroup>
        </Flex>
        <IconButton
          onClick={() => onDelete(med.id)}
          icon={<DeleteIcon />}
          colorScheme="blue"
          h={71}
        />
      </Flex>
    </div>
  );
};

export default Medicine;
