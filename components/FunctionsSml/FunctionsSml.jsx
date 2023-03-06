import Image from "next/image";
import React from "react";
import { useNextSanityImage } from "next-sanity-image";

import styles from "./FunctionsSml.module.scss";
import { client } from "../../utils/client";
import BasicButton from "../BasicButton/BasicButton";

const FunctionsSml = ({ functions }) => {
  console.log(functions)
  const image = functions.images.firstRow[0]
  const { bannerImage } = functions;
  const { src, loader } = useNextSanityImage(client, image);

  return (
    <div className={styles.container}>
      <div className= {styles.overlay} />
      <div className={styles.image}>
        <Image src={src} loader={loader} fill />
      </div>
      <div className={styles.content}>
      <header className={styles.heading}>
        <h2>Functions and weddings</h2>
      </header>
        <div className= {styles.text}>
          <p>
            Kromklip is suitable for all types of functions (weddings, youth
            camps, 4x4 training camps, year-end functions, birthday parties,
            family reunions, etc.) Various menu options are available, and
            Kromklip prepares meals according to your choice. Kromklip is
            especially popular for Spitbraai meals with side dishes. Our
            beautiful hall is built on the edge of the dam and accommodates up
            to 140 guests with enough space for a dance floor.
          </p>
        </div>

        <div className= {styles.view}>
          <BasicButton text = 'view our functions' />
        </div>
      </div>
    </div>
  );
};

export default FunctionsSml;
