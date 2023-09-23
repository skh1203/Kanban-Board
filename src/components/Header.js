import React from 'react'
import "../css/header.css";
import { useState } from "react";
export default function Header() {
    const [display, setDisplay] = useState(false);
    const [grouping, setGrouping] = useState("status");
    const [ordering, setOrdering] = useState("priority");

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
								<select>
									<option value="Option 1">First Option</option>
									<option value="Option 2">2nd Option</option>
									<option value="Option 3">Option Number 3</option>
								</select>
							</div>
						</div>
					</div>
					<div className="prop">
						<div className="type">Ordering </div>
						<div className="value">
							<div class="select-dropdown">
								<select>
									<option value="Option 1">First Option</option>
									<option value="Option 2">2nd Option</option>
									<option value="Option 3">Option Number 3</option>
								</select>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
