import React from 'react';

import './NotFoundPage.scss';

export const NotFoundPage = () => {
	return (
		<section className='not-found'>
			<div className='not-found__title'>404</div>
			<div className='not-found__text'>The requested page was not found.</div>
		</section>
	);
};
