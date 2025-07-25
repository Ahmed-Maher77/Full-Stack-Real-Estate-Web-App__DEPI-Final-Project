import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
	return (
		<div className="f-wrapper">
			<div className="paddings innerWidth flexCenter f-container">
				{/* left side */}
				<div className="flexColStart f-left">
					<img src="./logo2.png" alt="" width={120} />
					<span className="secondaryText">
						Our vision is to make all people <br />
						the best place to live for them.
					</span>
				</div>

				<div className="flexColStart f-right">
					<span className="primaryText">Information</span>
					<span className="secondaryText" style={{display: "flex", flexDirection: "column", gap: "10px"}}>
            <span>Egypt, Cairo</span>
            <span>ahmedmaher.dev@gmail.com</span>
          </span>
					<div className="flexCenter f-menu">
						<NavLink to="/">Home</NavLink>
						<NavLink to="/properties">Properties</NavLink>
						<NavLink to="/contact">About Us</NavLink>
            <a href="https://ahmedmaher-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">Portfolio</a>
					</div>
				</div>
			</div>
			<div className="f-copyright" style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", padding: "20px"}}>
				<p style={{ fontSize: "15px", textAlign: "center" }}>
					Copyright &copy; <span id="copyright-year">2025</span>
					Developed By{" "}
					<a
						href="https://ahmedmaher-portfolio.vercel.app/"
						title="About Developer"
						target="_blank"
						style={{
							color: "var(--blue)",
							textDecoration: "none",
							fontWeight: "bold",
						}}
					>
						Ahmed Maher
					</a>
				</p>
				<span>All Rights Reserved</span>
			</div>
		</div>
	);
};

export default Footer;
