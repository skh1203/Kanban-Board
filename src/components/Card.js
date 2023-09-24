import React, { useState, useEffect, useContext } from "react";
import "../css/card.css";
import {
  FaExclamationCircle,
  FaFlag,
  FaStar,
  FaThumbsUp,
  FaCheck,
} from "react-icons/fa";
// import { FaSliders } from "react-icons/fa";

const userColorMap = new Map();
let userCounter = 0;

export default function Card({
  id,
  title,
  tags,
  priority,
  groupingType,
  checked,
  userName
}) {
  const [check, setCheck] = useState(checked);
  const handleCheckboxChange = (event, id) => {
    setCheck((prevValue) => !prevValue);
    document.getElementById(id).checked = !checked;
    let checkedId = JSON.parse(localStorage.getItem("checkedID"));
    console.log(typeof checkedId);
    if (checkedId.includes(id)) {
      const newArray = checkedId.filter((i) => i !== id);
      localStorage.setItem("checkedID", JSON.stringify(newArray));
    } else {
      checkedId.push(id);
      localStorage.setItem("checkedID", JSON.stringify(checkedId));
    }
    console.log(checkedId);
  };

  const priorityIcons = {
    0: <FaExclamationCircle />,
    1: <FaFlag />,
    2: <FaStar />,
    3: <FaThumbsUp />,
    4: <FaCheck />,
  };

  let nameArr = userName.split(" ");
  nameArr.push(".");
  let color = userColorMap.get(userName);
  if (!color) {
    userCounter++;
    let randomColors = ["f2352e", "5ff22e", "ebf22e", "2e6cf2", "f22e90"];
    const colorIndex = userCounter % randomColors.length;
    color = randomColors[colorIndex];
    userColorMap.set(userName, color);
  }
  let url =
    "https://ui-avatars.com/api/?name=" +
    nameArr[0] +
    "+" +
    nameArr[1] +
    "&background=" +
    color;

  return (
    <>
      <div className="card_container">
        <div className="card_header">
          <div className="card_title">{id}</div>
          <div className="card_user"><img src={url} /></div>
        </div>
        <div className="card_body">
          <div className="card_status">
            <div className="checkbox-wrapper-15">
              <input
                className="inp-cbx"
                id={id}
                type="checkbox"
                style={{ display: "none" }}
                checked={check}
                onChange={(e) => handleCheckboxChange(e, id)}
              />
              <label className="cbx" for={id}>
                <span>
                  <svg width="12px" height="9px" viewbox="0 0 12 9">
                    <polyline points="1 5 4 8 11 1"></polyline>
                  </svg>
                </span>
                <span className="card_desc">{title}</span>
              </label>
            </div>
          </div>
        </div>
        <div className="card_footer">
          <div className="card_priority">{priorityIcons[priority]}</div>
          <div className="card_feature">
            <div className="card_feature_pre"></div>
            <div className="card_feature_title">Feature Request</div>
          </div>
        </div>
      </div>
    </>
  );
}
