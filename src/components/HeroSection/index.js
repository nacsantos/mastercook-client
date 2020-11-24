import React, { useState } from "react";
import {
	HeroContainer,
	HeroBg,
	VideoBg,
	HeroContent,
	HeroH1,
	HeroP,
	HeroBtnWrapper,
	ArrowForward,
	ArrowRight,
} from "./HeroElements";
import { Button } from "../ButtonElement";
import Video from "../../videos/masterbook.mp4";

function HeroSection() {
	const [hover, setHover] = useState(false);

	const onHover = () => {
		setHover(!hover);
	};

	return (
		<HeroContainer id="home">
			<HeroBg>
				<VideoBg autoPlay loop muted src={Video} type="video/mp4" />
			</HeroBg>
			<HeroContent>
				<HeroH1>Master the kitchen</HeroH1>
				<HeroP>
					With Mastercook you not only learn to cook, you can save time and
					money.
				</HeroP>
				<HeroBtnWrapper>
					<Button
						to="signup"
						onMouseEnter={onHover}
						onMouseLeave={onHover}
						primary="true"
						dark="true"
						smooth={true}
						duration={500}
						spy={true}
						exact="true"
						className="orange-button"
					>
						Get Started {hover ? <ArrowForward /> : <ArrowRight />}
					</Button>
				</HeroBtnWrapper>
			</HeroContent>
		</HeroContainer>
	);
}

export default HeroSection;
