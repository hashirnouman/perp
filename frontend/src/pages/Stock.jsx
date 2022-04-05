import React, { useState, useEffect } from "react";
import AdminLayouts from "../Layouts/AdminLayouts";
import "./styles/Home.css";
import axios from "axios";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  FormControl,
  Input,
  Select,
  Stack,
  Center,
  Button,
} from "@chakra-ui/react";
import StockTable from "../components/StockTable";
import AddStock from "../components/AddStock";

const Stock = () => {
  return (
    <AdminLayouts>
      <div className="main">
        <Tabs isFitted>
          <TabList>
            <Tab>View Stock</Tab>
            <Tab>Add Stock</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <StockTable />
            </TabPanel>
            <TabPanel>
              <AddStock />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </AdminLayouts>
  );
};

export default Stock;
