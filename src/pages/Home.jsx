import React from 'react';
import Cards from '../components/Cards/Cards';
import Content from '../components/Content/Content';
import Hero from '../components/Hero/Hero';

import Newsletter from '../components/Newsletter/Newsletter';

const Home = () => {
	return (
		<>
			<Hero />
			<Content />
			<Newsletter />
			<Cards />
		</>
	);
};

export default Home;
