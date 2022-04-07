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
import { useToast } from "@chakra-ui/react";
const AddStock = ({ drug }) => {
  const [invoice, setInvoice] = useState(null);
  const [name, setName] = useState(null);
  const [contact, setContact] = useState(null);
  const [packet, setPacket] = useState(null);
  const [bill, setBill] = useState(null);
  const [id, setId] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://127.0.0.1:8000/pos/stock", {
        invoice_number: invoice,
        supplier_name: name,
        supplier_contact: contact,
        total_quantity: packet,
        total_bill: bill,
        drug_id: id,
      })
      .then((response) => {
        console.log(response.status);
        if (response.status == 200) {
          alert("data added");
          setPacket("");
          setBill("");
          setContact("");
          setInvoice("");
          setName("");
          setId("");
          console.log({
            id
          });
        }
      });
  };
  return (
    <div>
      {drug && (
        <Center>
          <form onSubmit={handleSubmit}>
            <FormControl w={600}>
              <Stack>
                <Input
                  placeholder="Enter invoice Number"
                  bg="white"
                  required
                  value={invoice}
                  onChange={(e) => setInvoice(e.target.value)}
                />
                <Input
                  placeholder="Enter Subppier name"
                  bg="white"
                  required
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <Input
                  placeholder="Enter Subppier Contact Number"
                  bg="white"
                  required
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
                <Select
                  placeholder="Select Medicine"
                  bg="white"
                  required
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                >
                  {drug.map((item, index) => {
                    return (
                      <option key={index} value={item.id}>
                        {item.drug_name}
                      </option>
                    );
                  })}
                </Select>
                <Input
                  placeholder="Enter total packets"
                  bg="white"
                  required
                  type="number"
                  value={packet}
                  onChange={(e) => setPacket(e.target.value)}
                />
                <Input
                  placeholder="Total bill"
                  bg="white"
                  required
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
                  Add stock
                </Button>
              </Stack>
            </FormControl>
          </form>
        </Center>
      )}
    </div>
  );
};

export default AddStock;
