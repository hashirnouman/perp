import React, { useState } from "react";
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
  const toast = useToast();
  const [invoice, setInvoice] = useState(Math.floor(Math.random() * 1000));
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [packet, setPacket] = useState(null);
  const [bill, setBill] = useState(null);
  const [drug_name, setDrugname] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/pos/stock", {
        invoice_number: invoice,
        supplier_name: name,
        supplier_contact: contact,
        total_quantity: packet,
        total_bill: bill,
        drug_name: drug_name,
      })
      .then((res) => {
        console.log("Response", res.data);
        if (res.status == 200) {
          setInvoice(Math.floor(Math.random() * 1000));
          setName("");
          setPacket("");
          setBill("");
          setContact("");
          setDrugname("");
          toast({
            title: "Stock added",
            description: `We've added new stock details. The invoice number of this stock is ${invoice}`,
            status: "success",
            duration: 5000,
            isClosable: true,
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
                  disabled
                  // onChange={(e) => setInvoice(e.target.value)}
                />
                <Input
                  placeholder="Enter Subppier name"
                  bg="white"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  value={drug_name}
                  onChange={(e) => setDrugname(e.target.value)}
                >
                  {drug.map((item, index) => {
                    return (
                      <option key={index} value={item.drug_name}>
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
