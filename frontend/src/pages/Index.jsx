import React from "react";
import {
  Box,
  Center,
  Flex,
  Spacer,
  Stack,
  Text,
  Grid,
  GridItem,
  HStack,
  Button,
} from "@chakra-ui/react";
import pharmacy from "../images/pharmacy.png";
import money from "../images/money 1.png";
import medication from "../images/medication 1.png";
import transfer from "../images/transfer 1.png";
import Card from "../components/Cards";
import { Link } from "react-router-dom";
const Index = () => {
  return (
    <div style={{ position: "relative", overflowY: "scroll", height: "800px" }}>
      <Box bg="facebook.500" h={500} p={5}>
        <>
          <div>
            <Link to="/login">
              <Button style={{ float: "right" }}> login</Button>
            </Link>
            <Link to="/meds">
              <Button style={{ float: "right", marginRight: "6px" }}>
                Available medicines
              </Button>
            </Link>
          </div>
          <Grid templateColumns="repeat(5, 1fr)">
            <GridItem colSpan={2}>
              <img src={pharmacy} />
            </GridItem>
            <Spacer />
            <GridItem>
              <Text
                fontSize="6xl"
                fontWeight="bold"
                color="white"
                colSpan={5}
                pt={24}
                w={700}
              >
                A solution to pharmacy management issues
              </Text>
            </GridItem>
          </Grid>
        </>
      </Box>
      <Box bg="facebook.500" h={300} p={5} mt={10}>
        <HStack gap="400px">
          <Card src={medication} title="Manage medicines" />
          <Card src={transfer} title="Manage stock" />
        </HStack>
      </Box>
    </div>
  );
};

export default Index;
