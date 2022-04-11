import React, { useState } from "react";
import { Container, Box, Text, Flex } from "@chakra-ui/react";
import ChemistLayout from "../../Layouts/ChemistLayout";
import AddMedicine from "../../components/chemistComponents/AddMedicine";
import MedicineList from "../../components/chemistComponents/MedicineList";
const Invoice = () => {
  const [meds, setMeds] = useState([
    {
      id: 1,
      task: "Give dog a bath",
      complete: true,
    },
    {
      id: 2,
      task: "Do laundry",
      complete: true,
    },
    {
      id: 3,
      task: "Vacuum floor",
      complete: false,
    },
    {
      id: 4,
      task: "Feed cat",
      complete: true,
    },
    {
      id: 5,
      task: "Change light bulbs",
      complete: false,
    },
    {
      id: 6,
      task: "Go to Store",
      complete: true,
    },
    {
      id: 7,
      task: "Fill gas tank",
      complete: true,
    },
    {
      id: 8,
      task: "Change linens",
      complete: false,
    },
    {
      id: 9,
      task: "Rake leaves",
      complete: true,
    },
    {
      id: 10,
      task: "Bake Cookies",
      complete: false,
    },
    {
      id: 11,
      task: "Take nap",
      complete: true,
    },
    {
      id: 12,
      task: "Read book",
      complete: true,
    },
    {
      id: 13,
      task: "Exercise",
      complete: false,
    },
    {
      id: 14,
      task: "Give dog a bath",
      complete: false,
    },
    {
      id: 15,
      task: "Do laundry",
      complete: false,
    },
    {
      id: 16,
      task: "Vacuum floor",
      complete: false,
    },
    {
      id: 17,
      task: "Feed cat",
      complete: true,
    },
    {
      id: 18,
      task: "Change light bulbs",
      complete: false,
    },
    {
      id: 19,
      task: "Go to Store",
      complete: false,
    },
    {
      id: 20,
      task: "Fill gas tank",
      complete: false,
    },
  ]);
  const addMed = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    console.log(task);
    const newMeds = { id, ...task };
    setMeds([...meds, newMeds]);
  };
  const deleteMed = (id) => {
    setMeds(meds.filter((med) => med.id != id));
  };
  return (
    <div>
      <ChemistLayout>
        <Container >
          <AddMedicine onAdd={addMed} />
          <MedicineList meds={meds} onDelete={deleteMed} />
        </Container>

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
              helo
            </Text>
          </Flex>
        </Box>
      </ChemistLayout>
    </div>
  );
};

export default Invoice;
