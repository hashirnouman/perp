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
import React, { useState, useEffect } from "react";
import AdminLayouts from "../Layouts/AdminLayouts";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Home = () => {
  const [drugCount, setDrugCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);

  let history = useHistory();
  useEffect(() => {
    // if (localStorage.getItem("token")) {
    //   console.log(localStorage.getItem("token"));
    // }else{
    //   history.push('/login')
    // }
  }, []);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/pos/alldrug")
      .then((res) => setDrugCount(res.data));
    axios
      .get("http://127.0.0.1:8000/pos/totalOrders")
      .then((res) => setOrderCount(res.data));
  }, []);
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
                  <p>Total Medicines</p>
                  <Heading>{drugCount}</Heading>
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
                  <p>Total orders</p>
                  <Heading>{orderCount}</Heading>
                </Stack>
              </Center>
            </Box>
          </HStack>
          <div>
            <a href="http://127.0.0.1:8002/admin" color="black">
              Open superadmin
            </a>
          </div>
        </div>
      </AdminLayouts>
    </div>
  );
};

export default Home;
