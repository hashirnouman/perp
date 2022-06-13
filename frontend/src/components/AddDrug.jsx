import React, { useState } from "react";
import { useDisclosure, useToast } from "@chakra-ui/react";
import axios from "axios";
import {
  Button,
  FormControl,
  IconButton,
  Input,
  Stack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Select,
} from "@chakra-ui/react";
import { IoMdAddCircle } from "react-icons/io";
const AddDrug = ({ categories, sub_categories }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [drug, setDrug] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [salt, setSalt] = useState("");
  const [variant, setVariant] = useState("");
  const [potency, setPotency] = useState(null);
  const [price, setPrice] = useState(null);
  const [unit, setUnit] = useState(null);
  const [id, setId] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:8000/pos/druglist/drug", {
        drug_name: drug,
        manufacturer_name: manufacturer,
        salt_name: salt,
        potency: potency,
        price_per_packet: price,
        units_per_packet: unit,
        variant: variant,
        category_id: id,
      })
      .then((res) => {
        if (res.status == 200) {
          toast({
            title: "Drug Updated",
            description: "We've Updated details of drug.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          setDrug("");
          setManufacturer("");
          setSalt("");
          setPotency(null);
          setPrice(null);
          setVariant("");
          setUnit(null);
          setId(null);
        }
      });
    console.log(id2);
  };
  return (
    <div>
      <IconButton
        icon={<IoMdAddCircle />}
        size="lg"
        bg="blue.800"
        color="white"
        onClick={onOpen}
      />
      {categories && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Medicine</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <form onSubmit={handleSubmit}>
                <FormControl>
                  <Stack>
                    <Input
                      placeholder="Enter Medicine name"
                      value={drug}
                      onChange={(e) => setDrug(e.target.value)}
                      isRequired
                    />
                    <Input
                      placeholder="Enter Manufacturer Name"
                      value={manufacturer}
                      onChange={(e) => setManufacturer(e.target.value)}
                      isRequired
                    />
                    <Input
                      placeholder="Enter Salt Name"
                      value={salt}
                      onChange={(e) => setSalt(e.target.value)}
                      isRequired
                    />
                    <Input
                      placeholder="Enter variant"
                      value={variant}
                      onChange={(e) => setVariant(e.target.value)}
                      isRequired
                    />
                    <Select
                      placeholder="Select Category"
                      value={id}
                      onChange={(e) => setId(e.target.value)}
                    >
                      {categories.map((item, index) => (
                        <option key={index} value={item.id}>
                          {item.category}
                        </option>
                      ))}
                    </Select>
                    <Input
                      placeholder="Enter Potency/Ml"
                      type="number"
                      value={potency}
                      onChange={(e) => setPotency(e.target.value)}
                      isRequired
                    />
                    <Input
                      placeholder="Enter Price Per packet"
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      isRequired
                    />
                    <Input
                      placeholder="Enter Total units per packet"
                      type="number"
                      value={unit}
                      isRequired
                      onChange={(e) => setUnit(e.target.value)}
                    />
                  </Stack>
                </FormControl>

                <ModalFooter>
                  <Button variant="solid" type="submit" colorScheme="blue">
                    Add
                  </Button>
                  <Button
                    colorScheme="blue"
                    variant="ghost"
                    mr={3}
                    onClick={onClose}
                  >
                    Close
                  </Button>
                </ModalFooter>
              </form>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};

export default AddDrug;
