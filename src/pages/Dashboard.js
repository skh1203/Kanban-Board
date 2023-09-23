import React, { useState, useEffect, useContext } from "react";
import Section from "../components/Section";
import "../css/dashboard.css";
import Card from "../components/Card";
import axios from "axios";
import Header from "../components/Header";

import {
	groupByPriority,
	groupByStatus,
	groupByUser,
} from "../utils/dataGroup.util";
import {
	sortSectionByPriority,
	sortSectionByTitle,
} from "../utils/dataSort.util";

const STATUS_ARRAY = ["Backlog", "Todo", "In Progress", "Done", "Canceled"];
const PRIORITIES_ARRAY = ["No Priority", "Low", "Medium", "High", "Urgent"];

export default function Dashboard() {
	const [ogData, setOgData] = useState();
	const [data, setData] = useState([]);

	const [grouping, setGrouping] = useState("status");
	const [ordering, setOrdering] = useState("priority");

	const handleChange = () => {
		if (!ogData) return;
		if (grouping === "status") {
			setData((prev) => groupByStatus(ogData));
		} else if (grouping === "user") {
			setData((prev) => groupByUser(ogData));
		} else if (grouping === "priority") {
			setData((prev) => groupByPriority(ogData));
		}

		if (ordering === "priority") {
			setData((prev) => sortSectionByPriority(prev));
		} else if (ordering === "title") {
			setData((prev) => sortSectionByTitle(prev));
		}
	};

	useEffect(handleChange, [grouping, ordering]);

	useEffect(() => {
		axios
			.get("https://api.quicksell.co/v1/internal/frontend-assignment")
			.then((res) => {
				setOgData((prev) => res.data);
				setData((prev) => groupByStatus(res.data));
				setData((prev) => sortSectionByPriority(prev));
			});
	}, []);

	const getHeading = (item, users) => {
		if (grouping === "status") {
			return item[0]?.status;
		} else if (grouping === "user") {
			return (
				users.find((user) => user.id === item[0].userId)?.name || "Unknown"
			);
		} else if (grouping === "priority") {
			return PRIORITIES_ARRAY[item[0]?.priority];
		}
	};

	return (
		<>
			<div className="parent">
				<div className="dashboard-header">
					<Header setGrouping={setGrouping} setOrdering={setOrdering} />
				</div>
				<div className="dashboard-container">
					{data?.tickets &&
						data?.tickets?.map((item) => {
							return (
								<Section
									key={item.id}
									heading={getHeading(item, data.users)}
									data={item}
								/>
							);
						})}
				</div>
			</div>
		</>
	);
}
