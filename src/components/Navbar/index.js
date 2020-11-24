import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLinks,
	NavBtn,
	NavBtnLink
} from './NavbarElements';

const Navbar = ({ toggle }) => {
	const [ scrollNav, setScrollNav ] = useState(false);

	const changeNav = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', changeNav);
	}, []);

	const toggleHome = () => {
		scroll.scrollToTop();
	};

	return (
		<IconContext.Provider value={{ color: '#002e41' }}>
			<Nav scrollNav={scrollNav}>
				<NavbarContainer>
					<NavLogo to="/" onClick={toggleHome}>
						Himanshu Gandhi
					</NavLogo>
					<MobileIcon onClick={toggle}>
						<FaBars />
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLinks to="hello" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
								Say Hello!
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="momma" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
								Momma
							</NavLinks>
						</NavItem>

						<NavItem>
							<NavLinks to="babies" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
								Babies
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="dadi" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
								Dadi
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="withlove" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
								With Love
							</NavLinks>
						</NavItem>
					</NavMenu>

					{/* <NavBtn>
						<NavBtnLink to="/signin">Sign In</NavBtnLink>
					</NavBtn> */}
				</NavbarContainer>
			</Nav>
		</IconContext.Provider>
	);
};

export default Navbar;
