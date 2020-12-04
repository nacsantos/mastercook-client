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
						Save
					</SidebarLink>
					<SidebarLink to="discover" onClick={toogle}>
						Recipes
					</SidebarLink>
					<SidebarLink to="signup" onClick={toogle}>
						Network
					</SidebarLink>
					<SidebarLink to="services" onClick={toogle}>
						Services
					</SidebarLink>
				</SidebarMenu>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
