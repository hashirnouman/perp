import React from "react";
import Medicine from "./Medicine";
import "../../pages/styles/Scroll.css";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { medicineListActions } from "../../store/medicineList/medicineListSlicer";
const MedicineList = ({ meds, onDelete }) => {
  const { drugs, total } = useSelector((state) => state.medicine);
  return (
    <>
      <div className="main2">
        {drugs &&
          drugs.map((drug) => {
            return <Medicine key={drug.id} {...drug} />;
          })}
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
    </>
  );
};

export default MedicineList;
