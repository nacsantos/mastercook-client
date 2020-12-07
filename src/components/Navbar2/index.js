// import "./Navbar2Elements.css";
import { ReactComponent as MasterbookLogo } from "../../assets/logos/masterbook-logo.svg";
import { ReactComponent as ChevronIcon } from "../../assets/icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow.svg";
import { ReactComponent as BoltIcon } from "../../assets/icons/bolt.svg";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as SocialIcon } from "../../assets/icons/social.svg";
import { ReactComponent as CompassIcon } from "../../assets/icons/compass.svg";
import { ReactComponent as BookmarkIcon } from "../../assets/icons/bookmark.svg";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";
import { ReactComponent as BellIcon } from "../../assets/icons/bell.svg";
import { ReactComponent as CartIcon } from "../../assets/icons/cart.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";
import { ReactComponent as CogIcon } from "../../assets/icons/cog.svg";
import { ReactComponent as HelpIcon } from "../../assets/icons/help.svg";
import { ReactComponent as DarkLightIcon } from "../../assets/icons/dark-light.svg";
import { ReactComponent as LogoutIcon } from "../../assets/icons/logout.svg";
import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";

function Navbar2() {
	return (
		<Navbar>
			<NavBrandComponent>
				<NavBrand logo={<MasterbookLogo />} />
			</NavBrandComponent>

			<NavEssentialComponent>
				<NavEssential icon={<HomeIcon />} selected={1} />
				<NavBlank />
				<NavEssential icon={<SocialIcon />} selected={0} />
				<NavBlank />
				<NavEssential icon={<CompassIcon />} selected={0} />
				<NavBlank />
				<NavEssential icon={<BookmarkIcon />} selected={0} />
			</NavEssentialComponent>

			<NavSearchComponent>
				<NavSearch />
			</NavSearchComponent>

			<NavItemComponent>
				<NavItem icon={<PlusIcon />} />
				<NavItem icon={<BellIcon />} />
				<NavItem icon={<CartIcon />} />
				<NavItem icon={<UserIcon />}>
					<DropdownMenu />
				</NavItem>
			</NavItemComponent>
		</Navbar>
	);
}

function Navbar(props) {
	return (
		<nav className="navbar">
			<ul className="navbar-nav">{props.children}</ul>
		</nav>
	);
}

function NavBrandComponent(props) {
	return (
		<li className="navbar-brand-component">
			<ul className="nav-brand-list">{props.children}</ul>
		</li>
	);
}

function NavEssentialComponent(props) {
	return (
		<li className="navbar-essential-component">
			<ul className="nav-essential-list">{props.children}</ul>
		</li>
	);
}

function NavSearchComponent(props) {
	return (
		<li className="navbar-search-component">
			<ul className="nav-search-list">{props.children}</ul>
		</li>
	);
}

function NavItemComponent(props) {
	return (
		<li className="navbar-item-component">
			<ul className="nav-item-list">{props.children}</ul>
		</li>
	);
}

function NavBlank(props) {
	return <li className="nav-blank" />;
}

function NavBrand(props) {
	return (
		<li className="nav-brand">
			<a href="#" className="icon-logo">
				{props.logo}
			</a>
		</li>
	);
}

function NavEssential(props) {
	if (props.selected === 1) {
		return (
			<li className="nav-essential">
				<a href="#" className="tab-button-selected">
					{props.icon}
				</a>
			</li>
		);
	} else {
		return (
			<li className="nav-essential">
				<a href="#" className="tab-button">
					{props.icon}
				</a>
			</li>
		);
	}
}

function NavSearch(props) {
	const hover = false;

	return (
		<li className="nav-search">
			<form className="search-form">
				<div className="search-bar">
					<span className="search-hint">
						&nbsp;&nbsp;&nbsp;Search Masterbook
					</span>
					<input
						className="search-input"
						id="search-input-query"
						type="text"
						placeholder="Search for Recipes, Ingredients, Supermarkets or Users"
						onKeyDown="SearchHandler(event)"
					/>
					<a href="#" className="search-icon">
						<i className="fas fa-search" />
					</a>
				</div>
			</form>
		</li>
	);
}

function NavItem(props) {
	const [open, setOpen] = useState(false);

	return (
		<li className="nav-item">
			<a href="#" className="icon-button" onClick={() => setOpen(!open)}>
				{props.icon}
			</a>

			{open && props.children}
		</li>
	);
}

function DropdownMenu() {
	const [activeMenu, setActiveMenu] = useState("main");
	const [menuHeight, setMenuHeight] = useState(null);
	const dropdownRef = useRef(null);

	useEffect(() => {
		setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
	}, []);

	function calcHeight(el) {
		const height = el.offsetHeight;
		setMenuHeight(height);
	}

	function DropdownItem(props) {
		return (
			<a
				href="#"
				className="menu-item"
				onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
			>
				<span className="icon-button">{props.leftIcon}</span>
				{props.children}
				<span className="icon-right">{props.rightIcon}</span>
			</a>
		);
	}

	function DropdownCopyright(props) {
		return (
			<span className="menu-copyright">
				<center>Masterbook © 2020 - All Rights Reserved</center>
			</span>
		);
	}

	return (
		<div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
			<CSSTransition
				in={activeMenu === "main"}
				timeout={500}
				classNames="menu-primary"
				unmountOnExit
				onEnter={calcHeight}
			>
				<div className="menu">
					<DropdownItem>My Profile</DropdownItem>
					<hr />
					<DropdownItem
						leftIcon={<CogIcon />}
						rightIcon={<ChevronIcon />}
						goToMenu="settings"
					>
						Settings
					</DropdownItem>
					<DropdownItem
						leftIcon={<HelpIcon />}
						rightIcon={<ChevronIcon />}
						goToMenu="settings"
					>
						Help, FAQs & Support
					</DropdownItem>
					<DropdownItem
						leftIcon={<DarkLightIcon />}
						rightIcon={<ChevronIcon />}
						goToMenu="animals"
					>
						Dark/Light Mode
					</DropdownItem>
					<DropdownItem
						leftIcon={<LogoutIcon />}
						rightIcon={<ChevronIcon />}
						goToMenu="animals"
					>
						Logout
					</DropdownItem>
					<hr />
					<DropdownCopyright />
				</div>
			</CSSTransition>

			<CSSTransition
				in={activeMenu === "settings"}
				timeout={500}
				classNames="menu-secondary"
				unmountOnExit
				onEnter={calcHeight}
			>
				<div className="menu">
					<DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
						<h2>My Tutorial</h2>
					</DropdownItem>
					<DropdownItem leftIcon={<BoltIcon />}>HTML</DropdownItem>
					<DropdownItem leftIcon={<BoltIcon />}>CSS</DropdownItem>
					<DropdownItem leftIcon={<BoltIcon />}>JavaScript</DropdownItem>
					<DropdownItem leftIcon={<BoltIcon />}>Awesome!</DropdownItem>
				</div>
			</CSSTransition>

			<CSSTransition
				in={activeMenu === "animals"}
				timeout={500}
				classNames="menu-secondary"
				unmountOnExit
				onEnter={calcHeight}
			>
				<div className="menu">
					<DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
						<h2>Animals</h2>
					</DropdownItem>
					<DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
					<DropdownItem leftIcon="🐸">Frog</DropdownItem>
					<DropdownItem leftIcon="🦋">Horse?</DropdownItem>
					<DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
				</div>
			</CSSTransition>
		</div>
	);
}

export default Navbar2;
