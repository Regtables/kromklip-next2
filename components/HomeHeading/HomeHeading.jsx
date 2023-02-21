import React from 'react';
import { GiMountainRoad } from 'react-icons/gi'

import styles from './HomeHeading.module.scss'

const HomeHeading = () => {
	return (
		<div className={styles.container}>
			<h1>Kromklip</h1>
			<h2>Function, Wedding Venue & Recreational Holiday Resort</h2>
			<h3>Lydenburg, Mpumalanga Panorama Route</h3>
			<p><GiMountainRoad /></p>
		</div>
	);
};

export default HomeHeading;
