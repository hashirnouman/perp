import React, { useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import axios from "axios";
const OrderHistroyTable = () => {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/pos/orders")
      .then((response) => {
        console.log(response.data, "Response data");
        setTableData(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
    // fetch("http://127.0.0.1:8000/pos/orders")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     setTableData(data);
    //   });
  }, []);
  var sr = 0;
  return (
    <div>
      {tableData && (
        <TableContainer>
          <Table variant="simple" bg="white">
            <Thead>
              <Tr>
                <Th>Sr#</Th>
                <Th>order number</Th>
                <Th>date</Th>
              </Tr>
            </Thead>
            <Tbody>
              {tableData.map((iterator, index) => {
                return (
                  <Tr key={index}>
                    <Td>{++sr}</Td>
                    <Td> {iterator.order_number}</Td>
                    <Td>{iterator.created_at}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default OrderHistroyTable;
