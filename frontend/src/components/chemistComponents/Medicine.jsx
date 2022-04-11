import { IconButton, ButtonGroup, Stack, Flex } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import React from "react";

const Medicine = ({ med, onDelete }) => {
  return (
    <div>
      <Flex
        direction="row"
        m={2}
        alignItems="baseline"
        justifyContent="space-between"
      >
        <Flex
          key={med.id}
          minW={400}
          minH={70}
          p={5}
          bg="white"
          justifyContent="space-between"
          alignItems="baseline"
          borderRadius={5}
        >
          <div>
            <p>{med.task}</p>
          </div>
          <ButtonGroup>
            <IconButton icon={<AddIcon />} colorScheme="blue" p={1} />
            <IconButton icon={<MinusIcon />} colorScheme="blue" p={1} />
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
