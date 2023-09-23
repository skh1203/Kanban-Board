import React from "react";
import SectionHeader from "./SectionHeader";
import Card from "./Card";
import "../css/section.css";

function Section() {
  return (
    <div className="section-container">
      <SectionHeader />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Section;
