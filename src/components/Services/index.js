import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-4.svg';
import Icon3 from '../../images/svg-3.svg';

import family_pic from '../../images/family.png';
import khushi_jovi from '../../images/khushi-jovi.png';
import poppy_dadi from '../../images/poppa-dadi.png';
import poppa_jovi from '../../images/poppa-jovi.png';
import poppa_momma from '../../images/poppa-momma.png';
import poppa_jovi_khushi from '../../images/poppa-jovi-khushi.png';

import {
	ServicesContainer,
	ServicesH1,
	ServicesWrapper,
	ServicesCard,
	ServicesIcon,
	ServicesH2,
	ServicesP
} from './ServicesElements';

const Services = () => {
	return (
		<ServicesContainer id="services">
			<ServicesH1>Our Services</ServicesH1>
			<ServicesWrapper>
				<ServicesCard>
					<ServicesIcon src={khushi_jovi} />
					<ServicesH2>Reduce Expenses</ServicesH2>
					<ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>
				</ServicesCard>

				<ServicesCard>
					<ServicesIcon src={poppa_jovi_khushi} />
					<ServicesH2>Virtual Offices</ServicesH2>
					<ServicesP>You can access our platform online anywhere in the world</ServicesP>
				</ServicesCard>

				<ServicesCard>
					<ServicesIcon src={poppa_jovi} />
					<ServicesH2>Premium Benefits</ServicesH2>
					<ServicesP>Unlock our special membership card that returns 5%</ServicesP>
				</ServicesCard>
			</ServicesWrapper>
		</ServicesContainer>
	);
};

export default Services;
