import React, { useEffect, useState } from "react";
import AdminLayouts from "../Layouts/AdminLayouts";

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

const Forecast = () => {
  const [table, setTable] = useState(null);
  const url = "http://127.0.0.1:8000/pos/forecast";
  useEffect(() => {
    axios.get(url).then((res) => {
      setTable(res.data);
    });
  }, [url]);
  var sr = 0;
  return (
    <div>
      <AdminLayouts>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Sr</Th>
                <Th>Drug id</Th>
                <Th>Sales</Th>
              </Tr>
            </Thead>
            <Tbody>
              {table &&
                table.map((i, key) => {
                  return (
                    <Tr key={key}>
                      <td>{++sr}</td>
                      <Td>{i.drug_id_id}</Td>
                      <Td>{i.value_occurrence}</Td>
                    </Tr>
                  );
                })}
            </Tbody>
          </Table>
        </TableContainer>
      </AdminLayouts>
    </div>
  );
};
export default Forecast;
