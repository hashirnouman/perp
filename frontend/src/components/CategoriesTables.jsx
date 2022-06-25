import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  IconButton,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const CategoriesTables = () => {
  const [categories, setCategories] = useState([]);
  let categoriesURL = "http://127.0.0.1:8000/pos/druglist/category";
  useEffect(() => {
    axios.get(categoriesURL).then((res) => setCategories(res.data));
  }, []);
  console.log(categories);
  return (
    <div>
      <Table>
        <Thead>
          <Tr>
            <Th>Categoriy name</Th>
          </Tr>
        </Thead>
        <Tbody>
          {categories.map((cat, index) => {
            return (
              <Tr key={index}>
                <Td>{cat.category}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </div>
  );
};

export default CategoriesTables;
