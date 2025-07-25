import React from "react";
import "./GetStarted.css";
import { useNavigate } from "react-router-dom";

const GetStarted = () => {
	const navigate = useNavigate();

	const handleGetStarted = () => {
		navigate("/properties");
	}
	return (
		<div id="get-started" className="g-wrapper">
			<div className="paddings innerWidth g-container">
				<div className="flexColCenter inner-container">
					<span className="primaryText">Get started with Homyz</span>
					<span className="secondaryText">
						Subscribe and find super attractive price quotes from
						us.
						<br />
						Find your residence soon
					</span>
					<button className="button" onClick={handleGetStarted}>
						Get Started
					</button>
				</div>
			</div>
		</div>
	);
};

export default GetStarted;
