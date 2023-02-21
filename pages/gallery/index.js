import React from 'react';

import styles from './Gallery.module.scss';
import { client } from '../../utils/client';
import { galleryQuery } from '../../utils/queries';
import { Grid } from '@mui/material';
import ImageTile from '../../components/ImageTile/ImageTile';

const GalleryPage = ({ gallery }) => {
	const { heading: { main, sub }, images } = gallery;

	return (
		<div className={`${styles.container} page__margin`}>
			<header className='heading'>
				<h1>{main}</h1>
				<p>{sub}</p>
			</header>

      <main className= {styles.gallery}>
        <Grid container spacing = {1}>
          {images.map((image, i) => (
            <Grid item md = {4} key = {i}>  
              <div className= {styles.image}>
                <ImageTile image={image} alt = 'visitor gallery' />
              </div>
            </Grid>
          ))}
        </Grid>
      </main>
		</div>
	);
};

export const getStaticProps = async () => {
	const galleryData = await client.fetch(galleryQuery());

	return {
		props: {
			gallery: galleryData[0],
		},
	};
};

export default GalleryPage;
