import React, { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
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
import axios from "axios";
const AddDrug = ({ categories, sub_categories }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [drug, setDrug] = useState(null);
  const [manufacturer, setManufacturer] = useState(null);
  const [salt, setSalt] = useState(null);
  const [variant, setVariant] = useState(null);
  const [potency, setPotency] = useState(null);
  const [price, setPrice] = useState(null);
  const [unit, setUnit] = useState(null);
  const [id, setId] = useState([]);
  const [id2, setId2] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/pos/druglist/drug", {
        drug_name: drug,
        manufacturer_name: manufacturer,
        salt_name: salt,
        sub_category_id: id2,
        potency: potency,
        price_per_packet: price,
        units_per_packet: unit,
        variant: variant,
        category_id: id,
      })
      .then((res) => {
        console.log(res.data);
      });
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
          <form onSubmit={handleSubmit}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Add Medicine</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <FormControl isRequired w={400}>
                  <Stack>
                    <Input
                      placeholder="Enter Medicine name"
                      isRequired
                      value={drug}
                      onChange={(e) => setDrug(e.target.value)}
                    />
                    <Input
                      placeholder="Enter Manufacturer Name"
                      isRequired
                      value={manufacturer}
                      onChange={(e) => setManufacturer(e.target.value)}
                    />
                    <Input
                      placeholder="Enter Salt Name"
                      isRequired
                      value={salt}
                      onChange={(e) => setSalt(e.target.value)}
                    />
                    <Input
                      placeholder="Enter variant"
                      isRequired
                      value={variant}
                      onChange={(e) => setVariant(e.target.value)}
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
                    <Select
                      placeholder="Select Sub-Category"
                      value={id2}
                      onChange={(e) => setId2(e.target.value)}
                    >
                      {sub_categories.map((item, index) => (
                        <option key={index} value={item.id}>
                          {item.sub_category}
                        </option>
                      ))}
                    </Select>
                    <Input
                      placeholder="Enter Potency/Ml"
                      type="number"
                      isRequired
                      value={potency}
                      onChange={(e) => setPotency(e.target.value)}
                    />
                    <Input
                      placeholder="Enter Price Per packet"
                      type="number"
                      isRequired
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                    <Input
                      placeholder="Enter Total units per packet"
                      type="number"
                      isRequired
                      value={unit}
                      onChange={(e) => setUnit(e.target.value)}
                    />
                  </Stack>
                  <Button variant="solid" type="submit" colorScheme="blue">
                    Add
                  </Button>
                </FormControl>
              </ModalBody>
              <ModalFooter>
                <Button
                  colorScheme="blue"
                  variant="ghost"
                  mr={3}
                  onClick={onClose}
                >
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default AddDrug;
