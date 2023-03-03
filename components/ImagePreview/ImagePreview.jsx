import React from "react";
import { Backdrop } from "@mui/material";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";

import styles from './ImagePreview.module.scss'
import { client } from '../../utils/client'

const ImagePreview = ({ activeImage, showPreview, setShowPreview }) => {
  const imageProps = useNextSanityImage(client, activeImage)

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 , display: 'flex', alignItems: 'center', justifyContent: 'center'}}
      open={showPreview}
      onClick={() => setShowPreview(false)}
    >
      <div className= {styles.container}>
        <Image 
          src = {imageProps.src}
          loader = {imageProps.loader}
          fill
        />
      </div>
    </Backdrop>
  );
};

export default ImagePreview;
