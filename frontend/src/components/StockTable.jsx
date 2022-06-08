import React, { useState, useEffect } from "react";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Skeleton,
} from "@chakra-ui/react";
import axios from "axios";
const StockTable = () => {
  const [table, setTable] = useState([]);
  const [loading, isLoading] = useState(true);
  const url = "http://127.0.0.1:8000/pos/stock";
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setTable(response.data);
        isLoading(false);
      })
      .catch((e) => console.log(e));
  }, [url]);
  var sr = 0;

  return (
    <div>
      {table && (
        <Skeleton isLoaded={!loading}>
          <TableContainer borderRadius="20">
            <Table variant="simple" bg="white">
              <Thead>
                <Tr>
                  <Th>Sr#</Th>
                  <Th>Invoice Number</Th>
                  <Th>Drug Name</Th>
                  <Th>Supplier Name</Th>
                  <Th>Supplier Contact</Th>
                  <Th isNumeric>Total Qunatity</Th>
                  <Th isNumeric>Total Bill</Th>
                  <Th>Added At</Th>
                </Tr>
              </Thead>
              <Tbody>
                {table.map((item, key) => {
                  return (
                    <Tr key={key}>
                      <Td>{++sr}</Td>
                      <Td>{item.invoice_number}</Td>
                      <Td>{item.drug_name}</Td>
                      <Td>{item.supplier_name}</Td>
                      <Td>{item.supplier_contact}</Td>
                      <Td>{item.total_quantity}</Td>
                      <Td>{item.total_bill}</Td>
                      <Td>{new Date(item.created_at).toUTCString()}</Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </Skeleton>
      )}
    </div>
  );
};

export default StockTable;
