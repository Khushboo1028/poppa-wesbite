import React, { useState } from 'react';
import {
	HeroContainer,
	HeroBg,
	VideoBg,
	HeroContent,
	HeroH1,
	HeroP,
	ArrowForward,
	ArrowRight,
	HeroBtnWrapper
} from './HeroElements';
import Video from '../../videos/color.mp4';
import { Button } from '../ButtonElement';

const HeroSection = () => {
	const [ hover, setHover ] = useState(false);

	const onHover = () => {
		setHover(!hover);
	};

	return (
		<HeroContainer>
			<HeroBg>
				<VideoBg playsinline autoPlay loop muted src={Video} type="video/mp4" />
			</HeroBg>
			<HeroContent>
				<HeroH1>Happy Birthday Poppyyyy</HeroH1>
				<HeroP> Welcome to your own personal page!</HeroP>
				<HeroBtnWrapper>
					<Button primary="true" dark="true" onMouseEnter={onHover} onMouseLeave={onHover} to="hello">
						Get Started {hover ? <ArrowForward /> : <ArrowRight />}
					</Button>
				</HeroBtnWrapper>
			</HeroContent>
		</HeroContainer>
	);
};

export default HeroSection;
