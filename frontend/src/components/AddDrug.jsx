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
const AddDrug = ({ categories, sub_categories }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [drug, setDrug] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [salt, setSalt] = useState("");
  const [variant, setVariant] = useState("");
  const [potency, setPotency] = useState(null);
  const [price, setPrice] = useState(null);
  const [unit, setUnit] = useState(null);
  const [id, setId] = useState(null);
  const [id2, setId2] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();

    const drugDetails = {
      drug,
      manufacturer,
      salt,
      id2,
      potency,
      price,
      unit,
      variant,
      id,
    };
    console.log(drugDetails);
    // fetch("http://127.0.0.1:8000/pos/druglist/drug", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(drugDetails),
    // }).then((res) => {
    //   if (res.status == 200) {
    //     console.log(res.json());
    //   } else {
    //     throw console.error("error");
    //   }
    // });
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
                <FormControl isRequired w={400}>
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
                      id="category"
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
                      isRequired
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
                <Button variant="solid" type="submit" colorScheme="blue">
                  Add
                </Button>
              </form>
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
        </Modal>
      )}
    </div>
  );
};

export default AddDrug;
