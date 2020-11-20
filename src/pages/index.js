import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import {
	homeObjOne,
	homeObjTwo,
	homeObjThree,
} from "../components/InfoSection/Data";
import Services from "../components/Services";
import Footer from "../components/Footer";

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toogle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Sidebar isOpen={isOpen} toogle={toogle} />
			<Navbar toogle={toogle} />
			<HeroSection />
			<InfoSection {...homeObjOne} />
			<InfoSection {...homeObjTwo} />
			<InfoSection {...homeObjThree} />
			<Services />
			<Footer />
		</>
	);
};

export default Home;
