import React from 'react'
import "../css/header.css";
import { useState } from "react";
export default function Header({setGrouping, setOrdering}) {
    const [display, setDisplay] = useState(false);
    const handleDisplay = () => {
        setDisplay(!display);
    };
  return (
		<div className="outer">
			<button className="main_button" onClick={handleDisplay}>
				<div className="icon"></div>
				<div className="display">Display</div>
				<div className="icon"></div>
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
