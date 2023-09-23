import React from "react";
import SectionHeader from "./SectionHeader";
import Card from "./Card";
import "../css/section.css";

const handleAdd = () => {};
const handleEdit = () => {};

function Section({ data, users, heading }) {
  return (
    <div className="section-container">
      <SectionHeader
        name={heading}
        
        onAddCard={handleAdd}
        onEditSection={handleEdit}
      />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Section;
