import React from "react";
import SectionHeader from "./SectionHeader";
import Card from "./Card";
import "../css/section.css";

const handleAdd = () => { };
const handleEdit = () => { };




function Section({ data, heading, grouping, users }) {
  var checkedIdArr = JSON.parse(localStorage.getItem("checkedID"));
  console.log(checkedIdArr);
  return (
    <div className="section-container">
      <SectionHeader
        heading={heading}
        onAddCard={handleAdd}
        onEditSection={handleEdit}
        count={data?.length || 0}
        grouping={grouping}

      />
      {data?.map((item) => {
        const user = users.find((user) => user.id === item.userId)?.name || "Unknown";
        console.log(item); var isChecked = false;
        console.log(checkedIdArr.includes(item.id));
        if (checkedIdArr.includes(item.id)) {
          isChecked = true;
        }
        return (

          <Card
            key={item.id}
            id={item.id}
            priority={item.priority}
            tags={item.tags}
            title={item.title}
            checked={isChecked}
            userName={user}
          />
        );
      })}
    </div>
  );
}

export default Section;
