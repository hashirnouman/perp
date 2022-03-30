import React from 'react'
import AdminLayouts from '../Layouts/AdminLayouts'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
const Stock = () => {
    return (
        <AdminLayouts>
            <Tabs isFitted>
                <TabList>
                    <Tab>View Stock</Tab>
                    <Tab>Add Stock</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <p>one!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </AdminLayouts>
    )
}

export default Stock