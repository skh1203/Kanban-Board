import React from "react";
import "../css/sectionHeader.css";

function SectionHeader({ heading, count, onAddCard, onEditSection, grouping }) {
  if(grouping==="user"){
    let nameArr = heading.split(" ");
    nameArr.push(".");
    let randomColors = ["f2352e", "5ff22e", "ebf22e", "2e6cf2", "f22e90"];
    const randomIndex = Math.floor(Math.random() * randomColors.length);
    const color = randomColors[randomIndex]
    let url = "https://ui-avatars.com/api/?name="+nameArr[0]+"+"+nameArr[1]+"&background="+color;
    return (
      <div className="flex justify-between">
        <div className="flex justify-start">
          <div >
            <img className="section-img" src={url}></img>
          </div>
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
