import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  Td,
  IconButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Button,
  Input,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
const DrugsTable = ({ drugList }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState({
      
  })
  return (
    <div>
      {drugList && (
        <Table colorScheme="facebook">
          <Thead>
            <Tr>
              <Th>Drug Name</Th>
              <Th>Manufacturer Name</Th>
              <Th>Salt Name</Th>
              <Th>Potency (mg)</Th>
              <Th>Price per packet</Th>
              <Th>Unit(s) per packet</Th>
              <Th>Variant</Th>
            </Tr>
          </Thead>
          <Tbody>
            {drugList.map((d) => {
              return (
                <Tr>
                  <Td>
                  
                    <Input value={d.drug_name} />
                  </Td>

                  <Td>{d.manufacturer_name}</Td>
                  <Td>{d.salt_name}</Td>
                  <Td>{d.potency}</Td>
                  <Td>{d.price_per_packet}</Td>
                  <Td>{d.units_per_packet}</Td>
                  <Td>{d.variant}</Td>
                  <Td>
                    <IconButton icon={<EditIcon />} onClick={onOpen} />
                  </Td>
                  <Td>
                    <IconButton icon={<DeleteIcon />} />
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      )}
      {/* {drugList.map((m) => {
        return (
          <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Input value={m.drug_name} />
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button variant="ghost">Secondary Action</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        );
      })} */}
    </div>
  );
};

export default DrugsTable;
