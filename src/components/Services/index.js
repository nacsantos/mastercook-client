import React from "react";
import Icon1 from "../../assets/images/svg-1.svg";
import Icon2 from "../../assets/images/svg-2.svg";
import Icon3 from "../../assets/images/svg-3.svg";
import {
	ServicesContainer,
	ServicesH1,
	ServicesWrapper,
	ServicesCard,
	ServicesIcon,
	ServicesH2,
	ServicesP,
} from "./ServicesElements";

const Services = () => {
	return (
		<ServicesContainer id="services">
			<ServicesH1>Our Services</ServicesH1>
			<ServicesWrapper>
				<ServicesCard>
					<ServicesIcon src={Icon1} />
					<ServicesH2>Save Money</ServicesH2>
					<ServicesP>
						If any ingredient is missing from your recipe, you will save with
						our suggestion.
					</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={Icon2} />
					<ServicesH2>Recipe Repository</ServicesH2>
					<ServicesP>
						You can access to all recipes for free and forever in MasterCook.
					</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={Icon3} />
					<ServicesH2>Social Network</ServicesH2>
					<ServicesP>
						Social interaction with users and recipes. Comment, rate and share
						recipes.
					</ServicesP>
				</ServicesCard>
			</ServicesWrapper>
		</ServicesContainer>
	);
};

export default Services;
