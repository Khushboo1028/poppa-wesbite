import icon1 from '../../images/svg-1.svg';
import icon2 from '../../images/svg-2.svg';
import icon3 from '../../images/svg-3.svg';

export const homeObjOne = {
	id            : 'about',
	lightBg       : false,
	lightText     : true,
	lightTextDesc : true,
	topLine       : 'Premium Bank',
	headline      : 'Unlimited Transaction with zero fees',
	description   :
		'Get access to our exclusive app that allows you to send unlimited transactions without getting charged.',
	buttonLabel   : 'Get Started',
	imgStart      : false,
	img           : icon1,
	alt           : 'Book',
	dark          : true,
	primary       : true,
	darkText      : false
};

export const homeObjTwo = {
	id            : 'discover',
	lightBg       : true,
	lightText     : false,
	lightTextDesc : false,
	topLine       : 'Unlimited Access',
	headline      : 'Unlimited Transaction with zero fees',
	description   :
		'Get access to our exclusive app that allows you to send unlimited transactions without getting charged.',
	buttonLabel   : 'Learn More',
	imgStart      : true,
	img           : icon2,
	alt           : 'Book',
	dark          : false,
	primary       : false,
	darkText      : true
};

export const homeObjThree = {
	id            : 'signup',
	lightBg       : true,
	lightText     : false,
	lightTextDesc : false,
	topLine       : 'Premium Bank',
	headline      : 'Unlimited Transaction with zero fees',
	description   :
		'Get access to our exclusive app that allows you to send unlimited transactions without getting charged.',
	buttonLabel   : 'Adios Amigos',
	imgStart      : false,
	img           : icon3,
	alt           : 'Book',
	dark          : false,
	primary       : false,
	darkText      : true
};
