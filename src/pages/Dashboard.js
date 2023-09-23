import React, { useState, useEffect, useContext } from "react";
import Section from "../components/Section";
import "../css/dashboard.css";
import Card from "../components/Card";
import axios from "axios";

const STATUS_ARRAY = ["Backlog", "Todo", "In Progress", "Done", "Canceled"];
const PRIORITIES_ARRAY = ["No Priority", "Low", "Medium", "High", "Urgent"];

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }, []);

  return (
    <>
      <div className="dashboard-container">
        <Section />
        <Section />
        <Section />
        <Section />
        <Section />
      </div>
    </>
  );
}
