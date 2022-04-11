import React from "react";
import Medicine from "./Medicine";
import "../../pages/styles/Scroll.css";
const MedicineList = ({ meds, onDelete }) => {
  return (
    <div className="main2">
      {meds.map((med, index) => {
        return <Medicine med={med} key={index} onDelete={onDelete} />;
      })}
    </div>
  );
};

export default MedicineList;
