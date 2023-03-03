import React, { useState } from "react";
import { Grid } from "@mui/material";
import { getPlaiceholder } from "plaiceholder";
import { useRouter } from "next/router";

import styles from "./Gallery.module.scss";
import { client, urlFor } from "../../utils/client";
import { galleryQuery } from "../../utils/queries";
import { renderPageIcon } from "../../utils/helpers";

import ImageTile from "../../components/ImageTile/ImageTile";
import ImagePreview from "../../components/ImagePreview/ImagePreview";
import { useDispatch } from "react-redux";

const GalleryPage = ({ gallery, images }) => {
  const { heading: { main, sub } } = gallery
  const router = useRouter()
  const [showPreview, setShowPreview] = useState(false)
  const [activeImage, setActiveImage] = useState()
  const dispatch = useDispatch()

  const handleImageClick = (image) => {
    setActiveImage(image)
    setShowPreview(true)
    // dispatch(setActiveImage(image.image))
  }

  return (
    <div className={`${styles.container} page__margin`}>
      <header className="heading">
        {renderPageIcon(router.pathname)}
        <h1>{main}</h1>
        <p>{sub}</p>
      </header>

      <main className={styles.gallery}>
        <Grid container spacing={1} height = '100%'>
          {images.map((image, i) => (
            <Grid item md={4} key={i}>
              <div className={styles.image}>
                <ImageTile image={image} alt="visitor gallery" handleClick={handleImageClick} />
              </div>
            </Grid>
          ))}
        </Grid>
      </main>
      {showPreview && (
        <ImagePreview activeImage={activeImage} showPreview = {showPreview} setShowPreview = {setShowPreview} />
      )}
    </div>
  );
};

export const getStaticProps = async () => {
  const galleryData = await client.fetch(galleryQuery());

  const images = await Promise.all(
    galleryData[0].images.map(async (image) => {
      const { base64 } = await getPlaiceholder(urlFor(image).url());

      return {
        image: image,
        base64: base64,
      };
    })
  );

  return {
    props: {
      gallery: galleryData[0],
      images: images,
    },
  };
};

export default GalleryPage;
