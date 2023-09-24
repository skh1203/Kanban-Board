import React, { useState, useEffect, useContext } from "react";
import "../css/card.css";
// import { FaSliders } from "react-icons/fa";
export default function Card({ id, title, tags, priority, groupingType, checked }) {
  const [check, setCheck]=useState(checked);
	const handleCheckboxChange = (event,id) => {
		setCheck((prevValue) => !prevValue);
		document.getElementById(id).checked = !checked;
		let checkedId = JSON.parse(localStorage.getItem("checkedID"));
		console.log(typeof checkedId);
		if(checkedId.includes(id)){
			
			const newArray = checkedId.filter(i => i !== id);
			localStorage.setItem("checkedID", JSON.stringify(newArray));	
		}
		else{
			checkedId.push(id);
			localStorage.setItem("checkedID", JSON.stringify(checkedId));
		}
		console.log(checkedId);
	  };
  return (
    <>
      <div className="card_container">
        <div className="card_header">
          <div className="card_title">{id}</div>
          <div className="card_user">{/* <img /> */}</div>
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
								onChange={(e)=> handleCheckboxChange(e,id)}
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
          <div className="card_priority">{priority}</div>
          <div className="card_feature">
            <div className="card_feature_pre"></div>
            <div className="card_feature_title">Feature Request</div>
          </div>
        </div>
      </div>
    </>
  );
}
