import React from 'react';
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarWrapper,
	SidebarMenu,
	SideBtnWrap,
	SidebarRoute,
	SidebarLink
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink onClick={toggle} to="hello">
						Say Hello!
					</SidebarLink>
					<SidebarLink onClick={toggle} to="momma">
						Momma
					</SidebarLink>
					<SidebarLink onClick={toggle} to="babies">
						Babies
					</SidebarLink>
					<SidebarLink onClick={toggle} to="dadi">
						Dadi
					</SidebarLink>
					<SidebarLink onClick={toggle} to="withlove">
						With Love
					</SidebarLink>
				</SidebarMenu>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
