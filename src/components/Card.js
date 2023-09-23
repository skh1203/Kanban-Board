import React, { useState, useEffect, useContext } from "react";
import "../css/card.css";
export default function Card({ id, title, tags, priority, groupingType }) {
  return (
    <>
      <div className="card_container">
        <div className="card_header">
          <div className="card_title">{id}</div>
          <div className="card_user">{/* <img /> */}</div>
        </div>
        <div className="card_body">
          <div className="card_status"></div>
          <div className="card_desc">{title}</div>
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
