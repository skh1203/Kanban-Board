import React from "react";
import "../css/header.css";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { FaSliders, FaAngleDown } from "react-icons/fa6";
export default function Header({ setGrouping, setOrdering }) {
  const [display, setDisplay] = useState(false);
  const moreBoxRef = useRef(null);

  const handleDisplay = () => {
    setDisplay(!display);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        moreBoxRef.current &&
        !moreBoxRef.current.contains(event.target) &&
        display
      ) {
        setDisplay(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [display]);

  return (
    <div className="outer">
      <button className="main_button" onClick={handleDisplay}>
        <div className="icon">
          <FaSliders></FaSliders>
        </div>
        <div className="display">Display</div>
        <div className="icon">
          <FaAngleDown></FaAngleDown>
        </div>
      </button>
      {display && (
        <div className="more_box">
          <div className="prop">
            <div className="type">Grouping</div>
            <div className="value">
              <div class="select-dropdown">
                <select
                  onChange={(e) => {
                    setGrouping(e.target.value);
                  }}
                >
                  <option value="status">Status</option>
                  <option value="user">User</option>
                  <option value="priority">Priority</option>
                </select>
              </div>
            </div>
          </div>
          <div className="prop">
            <div className="type">Ordering </div>
            <div className="value">
              <div class="select-dropdown">
                <select
                  onChange={(e) => {
                    setOrdering(e.target.value);
                  }}
                >
                  <option value="priority">Priority</option>
                  <option value="title">Title</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
