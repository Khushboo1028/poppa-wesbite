import React, { useState } from 'react';

import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import HeroSection from '../../components/HeroSection';
import InfoSection from '../../components/InfoSection';
import { homeObjOne, homeObjThree, homeObjFour, homeObjTwo, homeObjFive } from '../../components/InfoSection/Data';
import Services from '../../components/Services';
import Footer from '../../components/Footer';

const Home = () => {
	const [ isOpen, setIsOpen ] = useState(false);
	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
			<HeroSection />
			<InfoSection {...homeObjOne} />
			<InfoSection {...homeObjTwo} />
			<InfoSection {...homeObjThree} />
			<InfoSection {...homeObjFour} />
			<InfoSection {...homeObjFive} />
			<Footer />
		</div>
	);
};

export default Home;
