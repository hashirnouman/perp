import {
  Box,
  Center,
  Grid,
  GridItem,
  Heading,
  HStack,
  Stack,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import {
  Pie,
  PieChart,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
import React from "react";
import AdminLayouts from "../Layouts/AdminLayouts";
const data01 = [
  {
    name: "Group A",
    value: 400,
  },
  {
    name: "Group B",
    value: 300,
  },
  {
    name: "Group C",
    value: 300,
  },
  {
    name: "Group D",
    value: 200,
  },
  {
    name: "Group E",
    value: 278,
  },
  {
    name: "Group F",
    value: 189,
  },
];
const data02 = [
  {
    name: "Group A",
    value: 2400,
  },
  {
    name: "Group B",
    value: 4567,
  },
  {
    name: "Group C",
    value: 1398,
  },
  {
    name: "Group D",
    value: 9800,
  },
  {
    name: "Group E",
    value: 3908,
  },
  {
    name: "Group F",
    value: 4800,
  },
];

const Home = () => {
  return (
    <div>
      <AdminLayouts>
        <div>
          <HStack>
            <Box
              background="blue.300"
              width="100%"
              height="28"
              borderRadius="5"
              color="white"
            >
              <Center h="100px">
                <Stack spacing={1}>
                  <p>Total earning</p>
                  <Heading>19,000 pkr</Heading>
                </Stack>
              </Center>
            </Box>
            <Box
              background="red.300"
              width="100%"
              height="28"
              borderRadius="5"
              color="white"
            >
              <Center h="100px">
                <Stack spacing={1}>
                  <p>Total earning</p>
                  <Heading>19,000 pkr</Heading>
                </Stack>
              </Center>
            </Box>
            <Box
              background="green.200"
              width="100%"
              height="28"
              borderRadius="5"
              color="white"
            >
              <Center h="100px">
                <Stack spacing={1}>
                  <p>Total earning</p>
                  <Heading>19,000 pkr</Heading>
                </Stack>
              </Center>
            </Box>
          </HStack>
        </div>
        <>
          <Grid
            templateRows="repeat(5, 1fr)"
            templateColumns="repeat(5, 1fr)"
            mt={5}
            gap={5}
          >
            <GridItem colSpan={4}>
              <Box bg="white" boxShadow="dark-lg" p={3}>
                <LineChart
                  width={900}
                  height={235}
                  data={data01}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="name" stroke="#8884d8" />
                  <Line type="monotone" dataKey="value" stroke="#82ca9d" />
                </LineChart>
              </Box>
            </GridItem>

            <GridItem colSpan={1}>
              <Box bg="white" boxShadow="dark-lg" width="300px">
                <PieChart width={300} height={257}>
                  <Pie
                    data={data01}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={50}
                    fill="#8884d8"
                  />
                  <Tooltip />
                  <Pie
                    data={data02}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#82ca9d"
                    label
                  />
                </PieChart>
              </Box>
            </GridItem>
            <GridItem colSpan={5} p={2}>
              <Box bg="white" boxShadow="dark-lg">
                <TableContainer>
                  <Table size="lg" variant="simple">
                    <Thead>
                      <Tr>
                        <Th>To convert</Th>
                        <Th>into</Th>
                        <Th isNumeric>multiply by</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>inches</Td>
                        <Td>millimetres (mm)</Td>
                        <Td isNumeric>25.4</Td>
                      </Tr>
                      <Tr>
                        <Td>feet</Td>
                        <Td>centimetres (cm)</Td>
                        <Td isNumeric>30.48</Td>
                      </Tr>
                      <Tr>
                        <Td>yards</Td>
                        <Td>metres (m)</Td>
                        <Td isNumeric>0.91444</Td>
                      </Tr>
                    </Tbody>
                    <Tfoot>
                      <Tr>
                        <Th>To convert</Th>
                        <Th>into</Th>
                        <Th isNumeric>multiply by</Th>
                      </Tr>
                    </Tfoot>
                  </Table>
                </TableContainer>
              </Box>
            </GridItem>
          </Grid>
        </>
      </AdminLayouts>
    </div>
  );
};

export default Home;
