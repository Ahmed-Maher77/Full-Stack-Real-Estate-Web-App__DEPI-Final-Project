import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./Residencies.css";
import { sliderSettings } from "../../utils/common";
import PropertyCard from "../PropertyCard/PropertyCard";
import useProperties from "../../hooks/useProperties";
import { PuffLoader } from "react-spinners";

const Residencies = () => {
	const { data, isError, isLoading } = useProperties();

	if (isError) {
		return (
			<div className="wrapper">
				<span>Error while fetching data</span>
			</div>
		);
	}

	if (isLoading) {
		return (
			<div className="wrapper flexCenter" style={{ height: "60vh" }}>
				<PuffLoader
					height="80"
					width="80"
					radius={1}
					color="#4066ff"
					aria-label="puff-loading"
				/>
			</div>
		);
	}

	return (
		<div id="residencies" className="r-wrapper">
			<div className="paddings innerWidth r-container">
				<div className="flexColStart r-head">
					<span className="orangeText">Best Choices</span>
					<span className="primaryText">Popular Residencies</span>
				</div>
				<Swiper {...sliderSettings}>
					<SlideNextButton />
					{/* slider */}
					{data.slice(0, 8).map((card, i) => (
						<SwiperSlide key={i}>
							<PropertyCard card={card} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default Residencies;

const SlideNextButton = () => {
	const swiper = useSwiper();
	const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);
	const [isEnd, setIsEnd] = useState(swiper.isEnd);

	useEffect(() => {
		const update = () => {
			setIsBeginning(swiper.isBeginning);
			setIsEnd(swiper.isEnd);
		};
		swiper.on("slideChange", update);
		// Also update on mount in case initial state is not correct
		update();
		return () => {
			swiper.off("slideChange", update);
		};
	}, [swiper]);

	return (
		<div className="flexCenter r-buttons">
			<button
				onClick={() => swiper.slidePrev()}
				disabled={isBeginning}
				className="r-prevButton"
			>
				&lt;
			</button>
			<button
				onClick={() => swiper.slideNext()}
				disabled={isEnd}
				className="r-nextButton"
			>
				&gt;
			</button>
		</div>
	);
};
