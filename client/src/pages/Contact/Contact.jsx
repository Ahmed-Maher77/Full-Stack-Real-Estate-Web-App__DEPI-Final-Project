import React from "react";
import "./Contact.css";
import { FaLinkedin, FaGithub, FaFacebook, FaWhatsapp } from "react-icons/fa";

const profileImg = "./My_Picture_2.jpg";

const Contact = () => {
	return (
		<div className="contact-page">
			<div className="contact-card">
				<img
					src={profileImg}
					alt="Ahmed Maher Algohary profile"
					className="contact-profile-img"
				/>
				<h1 className="contact-name">Ahmed Maher Algohary</h1>
				<span className="contact-title">
					Software Engineer | Full Stack Developer
				</span>
				<p className="contact-bio">
					Passionate Software Engineer | Full Stack Developer with a
					Bachelor's in Computer and Control Systems Engineering.
					<br />
					Specialized in creating dynamic, responsive, and accessible
					web applications that bring ideas to life.
				</p>
				<div className="contact-links-row">
					<a
						href="https://ahmedmaher-portfolio.vercel.app/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Portfolio"
						className="contact-link portfolio"
					>
						<span role="img" aria-label="Portfolio">
							🌐
						</span>
					</a>
					<a
						href="https://www.linkedin.com/in/ahmed-maher-algohary"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn"
						className="contact-link linkedin"
					>
						<FaLinkedin />
					</a>
					<a
						href="https://github.com/Ahmed-Maher77"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub"
						className="contact-link github"
					>
						<FaGithub />
					</a>
					<a
						href="https://web.facebook.com/profile.php?id=100012154268952"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Facebook"
						className="contact-link facebook"
					>
						<FaFacebook />
					</a>
					<a
						href="https://wa.me/+201150383416"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="WhatsApp"
						className="contact-link whatsapp"
					>
						<FaWhatsapp />
					</a>
				</div>
				<div className="contact-email">
					<a href="mailto:ahmedmaher.dev@gmail.com">
						ahmedmaher.dev@gmail.com
					</a>
				</div>
			</div>
		</div>
	);
};

export default Contact;
