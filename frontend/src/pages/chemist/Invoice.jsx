import {
  Button,
  FormControl,
  Stack,
  Input,
  Container,
  Box,
  Center,
  Divider,
  ButtonGroup,
  IconButton,
  Text,
  Spacer,
  Flex,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import React from "react";
import ChemistLayout from "../../Layouts/ChemistLayout";
const Invoice = () => {
  return (
    <ChemistLayout>
      <Container>
        <Stack direction="row">
          <FormControl>
            <Input placeholder="Enter medicine" bg="white" />
          </FormControl>
          <Button variant="solid" colorScheme="blue">
            Add Medicine
          </Button>
        </Stack>
      </Container>
      <Center mt={5}>
        <Box bg="white" minWidth={1200} minHeight={100} p={5} borderRadius={5}>
          <Center>
            <Box bg="gray.200" minH={70} w={600} borderRadius={5} p={5}>
              <Stack direction="row">
                <Stack>
                  <Text fontSize="lg" fontWeight="bold">
                    Panadol
                  </Text>
                  <Text>Total: 20</Text>
                </Stack>
                <Spacer />
                <ButtonGroup size="lg" variant="outline">
                  <IconButton icon={<MinusIcon />} />
                  <Text mt={3}>helo</Text>
                  <IconButton aria-label="Add to friends" icon={<AddIcon />} />
                </ButtonGroup>
              </Stack>
            </Box>
          </Center>
        </Box>
      </Center>
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
  );
};

export default Invoice;
