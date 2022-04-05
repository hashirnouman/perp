import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FormControl,
  Input,
  Select,
  Stack,
  Center,
  Button,
} from "@chakra-ui/react";
const AddStock = () => {
  const [invoice, setInvoice] = useState(null);
  const [name, setName] = useState(null);
  const [contact, setContact] = useState(null);
  const [packet, setPacket] = useState(null);
  const [bill, setBill] = useState(null);
  const [drug, setDrug] = useState([]);
  const [id, setId] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/pos/stock/addStock", {
        invoice_number: invoice,
        supplier_name: name,
        supplier_contact: contact,
        total_quantity: packet,
        total_bill: bill,
        drug_id: id,
      })
      .then((response) => console.log(response.status));
  };
  useEffect(() => {
    fetch("http://127.0.0.1:8000/pos/druglist/getDrugs")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDrug(data);
      });
  }, []);
  return (
    <div>
      <Center>
        <form onSubmit={handleSubmit}>
          <FormControl w={600}>
            <Stack>
              <Input
                placeholder="Enter invoice Number"
                bg="white"
                value={invoice}
                onChange={(e) => setInvoice(e.target.value)}
              />
              <Input
                placeholder="Enter Subppier name"
                bg="white"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <Input
                placeholder="Enter Subppier Contact Number"
                bg="white"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
              <Select
                id="category"
                placeholder="Select Medicine"
                bg="white"
                value={id}
                onChange={(e) => setId(e.target.value)}
              >
                {drug.map((item, index) => {
                  <option key={index} value={item.id}>
                    {" "}
                    {item.drug_name}{" "}
                  </option>;
                })}
              </Select>
              <Input
                placeholder="Enter total packets"
                bg="white"
                type="number"
                value={packet}
                onChange={(e) => setPacket(e.target.value)}
              />
              <Input
                placeholder="Total bill"
                bg="white"
                type="number"
                value={bill}
                onChange={(e) => setBill(e.target.value)}
              />
              <Button
                type="submit"
                variant="solid"
                bg="blue.500"
                color="whiteAlpha.900"
                _hover={{ color: "black", backgroundColor: "transparent" }}
              >
                {" "}
                Add stock
              </Button>
            </Stack>
          </FormControl>
        </form>
      </Center>
    </div>
  );
};

export default AddStock;
