import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import {
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLinks,
	NavBtn,
	NavBtnLink,
	NavBtrWrapper,
} from "./NavbarElements";
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({ toogle }) => {
	const [scrollNav, setScrollNav] = useState(false);

	const changeNav = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", changeNav);
	}, []);

	const toogleHome = () => {
		scroll.scrollToTop();
	};

	return (
		<>
			<Nav scrollNav={scrollNav}>
				<NavbarContainer>
					<NavLogo to="/" onClick={toogleHome}>
						MasterCook
					</NavLogo>
					<MobileIcon onClick={toogle}>
						<FaBars />
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLinks
								to="about"
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								// offset={-10}
							>
								Save
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks
								to="discover"
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								// offset={-80}
							>
								Recipes
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks
								to="signup"
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								// offset={-80}
							>
								Network
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks
								to="services"
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								// offset={-80}
							>
								Services
							</NavLinks>
						</NavItem>
					</NavMenu>
					<NavBtrWrapper>
						<NavBtn>
							<NavBtnLink to="/signin">Sign Up</NavBtnLink>
						</NavBtn>
						<NavBtn>
							<NavBtnLink to="/signin">Sign In</NavBtnLink>
						</NavBtn>
					</NavBtrWrapper>
				</NavbarContainer>
			</Nav>
		</>
	);
};

export default Navbar;
