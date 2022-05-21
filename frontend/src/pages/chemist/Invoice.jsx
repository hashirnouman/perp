import React, { useState, useEffect } from "react";
import { Container, Box, Text, Flex, Stack } from "@chakra-ui/react";
import ChemistLayout from "../../Layouts/ChemistLayout";
import AddMedicine from "../../components/chemistComponents/AddMedicine";
import MedicineList from "../../components/chemistComponents/MedicineList";
import { useDispatch } from "react-redux";
import { medicineListActions } from "../../store/medicineList/medicineListSlicer";

const Invoice = () => {
  const [drugs, getDrugs] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    fetch("http://127.0.0.1:8000/pos/druglist/drug")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        getDrugs(data);
      });
  }, []);
  // const addMed = (medicine) => {
  //   // const id = Math.floor(Math.random() * 1000) + 1;
  //   // const newMeds = { id, ...medicine };
  //   // setMeds([...meds, newMeds]);
  //   dispatch(medicineListActions.addMedicine(medicine));
  // };
  // const deleteMed = (id) => {
  //   setMeds(meds.filter((med) => med.id != id));
  // };
  return (
    <div>
      <ChemistLayout>
        <Stack direction="row-reverse" spacing={28}>
          <div style={{ minWidth: "40%", overflowX: "hidden" }}>
            <AddMedicine  drugs={drugs} />
          </div>
          <div>
            <MedicineList  />
          </div>
        </Stack>
      </ChemistLayout>
    </div>
  );
};

export default Invoice;
