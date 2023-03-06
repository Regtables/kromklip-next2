import { Grid } from "@mui/material";
import Link from "next/link";
import React from "react";
import ImageTile from "../ImageTile/ImageTile";
import Image from "next/image";
import { GiFishing, GiJeep } from 'react-icons/gi'
import { TbSwimming } from 'react-icons/tb'
import { GiHiking } from 'react-icons/gi'

import styles from "./FacilitiesSml.module.scss";

const IMAGES = [
  {
    src: "/fish10.jpeg",
  },
  {
    src: "/4x4-2.jpeg",
  },
  {
    src: "/sorounding1.jpeg",
  },
  {
    src: "/swimming 6.jpeg",
  },
];

const ICONS = [
  { icon: <GiJeep /> },
  { icon: <GiFishing />},
  { icon: <TbSwimming />},
  { icon: <GiHiking />}
]

const FacilitiesSml = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <Grid container spacing={1}>
            {IMAGES.map((image, i) => (
              <Grid item md={6} key={i}>
                {/* <ImageTile image={{image: image}} alt = 'facilities' /> */}
                <div className={styles.image}>
                  <Image src={image.src} fill />
                </div>
              </Grid>
            ))}
          </Grid>
        </div>

        <div className={styles.right}>
          <div className={styles.heading}>
            <h2>Facilities & nearby activities</h2>
          </div>
          
          <div className= {styles.icons}>
            {ICONS.map((icon, i) => (
              <p key = {i}>{icon.icon}</p>
            ))}
          </div>

          <div className={styles.text}>
            <p>
              We have a whole range of different facilities that will keep you
              and your family busy for holiday. Including 4x4 trails, fishing,
              swimming area, a resturant/bar, loads of animals, hiking and more!
            </p>
          </div>

          <Link href={`/facilities`}>
            <button className={styles.button} role="button">
              <p>view our facilities</p>
            </button>
          </Link>
        </div>
      </div>

      <div className= {styles.activities}>
        <div className= {styles.text}>
          <p style = {{width: "100%"}}>We also have a wide range nearby activities such as resturants, museums, towns, waterfalls and much more surrounding our park</p>
        </div>
        
        <Link href={`/facilities`}>
          <button className={styles.button_alt} role="button">
            <p>view nearby activities</p>
          </button>
        </Link>

      </div>
    </div>
  );
};

export default FacilitiesSml;
