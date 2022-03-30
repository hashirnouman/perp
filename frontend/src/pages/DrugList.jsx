import {
    Button,
    Center,
    FormControl,
    HStack,
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
    Select

} from '@chakra-ui/react'
import { IoMdAddCircle } from 'react-icons/io'
import React from 'react'
import AdminLayouts from '../Layouts/AdminLayouts'
import { useDisclosure } from '@chakra-ui/react'

const DrugList = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <AdminLayouts>
            <Stack>
                <Center>
                    <HStack spacing={5}>
                        <FormControl isRequired w={900}>
                            <Input id="search-text" placeholder='Search Medicines' />
                        </FormControl>
                        <IconButton icon={<IoMdAddCircle />} size="lg" bg="blue.800" color="white" onClick={onOpen} />
                        <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>Modal Title</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    <form onSubmit={handleSubmit}>
                                        <FormControl isRequired w={400}>
                                            <Stack>
                                                <Input id="search-text" placeholder='Enter Medicine name' />
                                                <Input id="search-text" placeholder='Enter Manufacturer Name' />
                                                <Input id="search-text" placeholder='Enter Salt Name' />
                                                <Input id="search-text" placeholder='Enter Salt Name' />
                                                <Select id='country' placeholder='Select Category'>
                                                    <option>United Arab Emirates</option>
                                                    <option>Nigeria</option>
                                                </Select>
                                                <Select id='country' placeholder='Select Sub-category'>
                                                    <option>United Arab Emirates</option>
                                                    <option>Nigeria</option>
                                                </Select>
                                                <Input id="search-text" placeholder='Enter Potency/Ml' />
                                                <Input id="search-text" placeholder='Enter Price Per packed' />
                                                <Input id="search-text" placeholder='Enter Total units per packet' />
                                            </Stack>
                                        </FormControl>
                                    </form>
                                </ModalBody>
                                <ModalFooter>
                                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                                        Close
                                    </Button>
                                    <Button variant='ghost' colorScheme="blue">Secondary Action</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                        <Button variant="solid" bg="blue.800" color="white" colorScheme='blue' >
                            Add Category
                        </Button>
                    </HStack>
                </Center>

            </Stack>


        </AdminLayouts >
    )
}

export default DrugList