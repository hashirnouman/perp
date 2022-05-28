import React, { useState, useEffect } from "react";
import AdminLayouts from "../Layouts/AdminLayouts";
import axios from "axios";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import StockTable from "../components/StockTable";
import AddStock from "../components/AddStock";
const Stock = () => {
  const [drug, setDrug] = useState(null);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/pos/druglist/drug")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDrug(data);
      });
  }, []);
  return (
    <div>
      <AdminLayouts>
        <Tabs variant="soft-rounded" isFitted>
          <TabList>
            <Tab>View Stock</Tab>
            <Tab>Add Stock</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <StockTable />
            </TabPanel>
            <TabPanel>
              <AddStock drug={drug} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </AdminLayouts>
    </div>
  );
};

export default Stock;
