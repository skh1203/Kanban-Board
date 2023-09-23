import React from "react";
import "../css/sectionHeader.css";

function SectionHeader({ heading, count, onAddCard, onEditSection }) {
  return (
    <div className="flex justify-between">
      <div className="flex justify-start">
        <div className="section-icon"></div>
        <div className="section-heading">{heading}</div>
        <div className="section-count">{count}</div>
      </div>
      <div className="flex justify-end">
        <div className="section-button">+</div>
        <div className="section-button">...</div>
      </div>
    </div>
  );
}

export default SectionHeader;
