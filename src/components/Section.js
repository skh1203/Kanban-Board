import React from "react";
import SectionHeader from "./SectionHeader";
import Card from "./Card";
import "../css/section.css";

const handleAdd = () => {};
const handleEdit = () => {};

function Section({ data, heading}) {
  return (
    <div className="section-container">
      <SectionHeader
        heading={heading}
        onAddCard={handleAdd}
        onEditSection={handleEdit}
        count={data?.length || 0}
      />
      {data?.map((item) => {
        console.log(item);
        return (
          <Card
            key={item.id}
            id={item.id}
            priority={item.priority}
            tags={item.tags}
            title={item.title}
          />
        );
      })}
    </div>
  );
}

export default Section;
