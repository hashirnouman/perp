import React from "react";
import OrderHistroyTable from "../../components/chemistComponents/OrderHistroyTable";
import ChemistLayout from "../../Layouts/ChemistLayout";

const OrderHistory = () => {
  return (
    <div>
      <ChemistLayout>
        <OrderHistroyTable />
      </ChemistLayout>
    </div>
  );
};

export default OrderHistory;
