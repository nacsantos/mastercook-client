import React from "react";
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
	SideBtnWrap,
	SidebarRoute,
} from "./SideBarElements";
const Sidebar = ({ isOpen, toogle }) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toogle}>
			<Icon onClick={toogle}>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to="about" onClick={toogle}>
						About
					</SidebarLink>
					<SidebarLink to="discover" onClick={toogle}>
						Discover
					</SidebarLink>
					<SidebarLink to="services" onClick={toogle}>
						Services
					</SidebarLink>
					<SidebarLink to="signup" onClick={toogle}>
						Sign Up
					</SidebarLink>
				</SidebarMenu>
				<SideBtnWrap>
					<SidebarRoute to="/signin">Sign In</SidebarRoute>
				</SideBtnWrap>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
