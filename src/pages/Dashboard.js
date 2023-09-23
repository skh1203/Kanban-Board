import React, { useState, useEffect, useContext } from "react";
import Section from "../components/Section";
import "../css/dashboard.css";
import Card from "../components/Card";

export default function Dashboard() {
  return (
    <>
      <div className="dashboard-container">
        <Section />
        <Section />
        <Section />
        <Section />
        <Section />
        {/* <Card /> */}
      </div>
    </>
  );
}
