import { Grid } from "@mui/material";
import Link from "next/link";
import React from "react";

import styles from "./AccommodationSml.module.scss";
import CardSml from "./CardSml/CardSml";
import BasicButton from '../BasicButton/BasicButton'

const AccommodationSml = ({ accommodation }) => {
  return (
    <div className={styles.container}>
      <header className= {styles.heading}>
        <h2>Accommodation amoung the trees</h2>
      </header>

      <div className={styles.content}>
        <div className= {styles.text}>
          <p>
            The site offers beautiful campsites with power points, built-in
            braaiers, four sets of neat bathrooms, as well as dishwashing
            facilities. Campsites can be found next to the fishing waters, near
            the bathrooms or at the pool area. The campsites have not been marked
            out. The bonfire area is centrally located on site and ensures cozy
            late evening visits around a big bonfire. Apart from the campsites,
            Kromklip also offers accommodation in equipped, self-catering chalets
            and tent cabins. The chalets are built on the edge of the dam and have
            their own fishing area, built-in braaiers, picnic table and offer a
            lovely view of the dam. Kromklip now offers visitors a take away menu
            for the days that you don't feel like cooking.
          </p>

        </div>

        <div className={styles.cards}>
          <Grid container justifyContent={'center'} spacing = {4}>
            {accommodation.accomodation.map((card, i) => (
              <Grid item md = {4} sx = {{borderRadius: '20px'}}>
                <CardSml card={card} />
              </Grid>
            ))}
          </Grid>
        </div>

        <div className= {styles.view}>
          <Link href= '/accommodation'>
            <BasicButton text= 'view our accommodation' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccommodationSml;
