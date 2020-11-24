import React from 'react';
import {
	FooterContainer,
	FooterWrap,
	FooterLinksContainer,
	FooterLinksWrapper,
	FooterLinkItems,
	FooterLinkTitle,
	FooterLink,
	SocialMedia,
	SocialMediaWrap,
	SocialIcons,
	SocialIconLink,
	SocialLogo,
	WebsiteRights
} from './FooterElements';

import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
	return (
		<FooterContainer>
			<FooterWrap>
				<FooterLinksContainer>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle> The Pandas</FooterLinkTitle>
							<FooterLink to="/">Jovi</FooterLink>
							<FooterLink to="/">Khushi</FooterLink>
							<FooterLink to="/">Dadi</FooterLink>
							<FooterLink to="/">Momma</FooterLink>
							<FooterLink to="/">Poppa</FooterLink>
						</FooterLinkItems>

						<FooterLinkItems>
							<FooterLinkTitle>Netflix & Amazon</FooterLinkTitle>
							<FooterLink to="/">Crown</FooterLink>
							<FooterLink to="/">Young Sheldon</FooterLink>
							<FooterLink to="/">Brooklyn nine-nine</FooterLink>
							<FooterLink to="/">Suits</FooterLink>
							<FooterLink to="/">Madam Secretary</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>

					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle> Apps that made it to your year</FooterLinkTitle>
							<FooterLink to="/">Instagram</FooterLink>
							<FooterLink to="/">Bloomberg</FooterLink>
							<FooterLink to="/">Kite</FooterLink>
							<FooterLink to="/">Amazon Music</FooterLink>
						</FooterLinkItems>

						<FooterLinkItems>
							<FooterLinkTitle> Artists</FooterLinkTitle>
							<FooterLink to="/">U2</FooterLink>
							<FooterLink to="/">Sia</FooterLink>
							<FooterLink to="/">Santana</FooterLink>
							<FooterLink to="/">Yanni</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
				</FooterLinksContainer>

				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to="/">Pandas</SocialLogo>
						<WebsiteRights>Gandhi © {new Date().getFullYear()} All Rights Reserved</WebsiteRights>
						<SocialIcons>
							<SocialIconLink href="/" target="_blank" area-label="Facebook">
								<FaFacebook />
							</SocialIconLink>
							<SocialIconLink href="/" target="_blank" area-label="Instagram">
								<FaInstagram />
							</SocialIconLink>
							<SocialIconLink href="/" target="_blank" area-label="Twitter">
								<FaTwitter />
							</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	);
};

export default Footer;
