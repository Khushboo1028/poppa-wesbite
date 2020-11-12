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
							<FooterLinkTitle> About Us</FooterLinkTitle>
							<FooterLink to="/">How it works</FooterLink>
							<FooterLink to="/">Testimonials</FooterLink>
							<FooterLink to="/">Careers</FooterLink>
							<FooterLink to="/">Investors</FooterLink>
							<FooterLink to="/">Terms of Service</FooterLink>
						</FooterLinkItems>

						<FooterLinkItems>
							<FooterLinkTitle> Videos</FooterLinkTitle>
							<FooterLink to="/">How it works</FooterLink>
							<FooterLink to="/">Testimonials</FooterLink>
							<FooterLink to="/">Careers</FooterLink>
							<FooterLink to="/">Investors</FooterLink>
							<FooterLink to="/">Terms of Service</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>

					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle> Contact Us</FooterLinkTitle>
							<FooterLink to="/">How it works</FooterLink>
							<FooterLink to="/">Testimonials</FooterLink>
							<FooterLink to="/">Careers</FooterLink>
							<FooterLink to="/">Investors</FooterLink>
							<FooterLink to="/">Terms of Service</FooterLink>
						</FooterLinkItems>

						<FooterLinkItems>
							<FooterLinkTitle> Business</FooterLinkTitle>
							<FooterLink to="/">Brightcom</FooterLink>
							<FooterLink to="/">Advice</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
				</FooterLinksContainer>

				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to="/">dolla</SocialLogo>
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
