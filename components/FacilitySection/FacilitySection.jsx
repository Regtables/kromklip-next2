import React from 'react'
import { Grid } from '@mui/material'
import { GiJeep, GiFishing } from 'react-icons/gi'
import { TbSwimming } from 'react-icons/tb'

import styles from './FacilitySection.module.scss'

import ImageTile from '../ImageTile/ImageTile'
import Highlights from '../Highlights/Highlights'
import AdditionalInfo from '../AdditionalInfo/AdditionalInfo'

const FacilitySection = ({ facility }) => {
  console.log(facility)

  const renderIcon = () => {
    if(facility?.name?.toLowerCase() === '4x4 trail'){
      return (
        <p><GiJeep /></p>
      )
    } else if(facility?.name?.toLowerCase() === 'fishing'){
      return (
        <p><GiFishing /></p>
      )
    } else if(facility?.name?.toLowerCase() === 'swimming') {
      return (
        <p><TbSwimming /></p>
      )
    }
  }

  const { name, decription, highlights, images } = facility
  return (
    <section className= {styles.container}>
      <main className = {styles.main} >
        <header className= {styles.heading}>
          <h2>{name}</h2>
          {renderIcon()}
        </header>

        <div className= {styles.description}>
          <p>{decription}</p>
        </div>

        <div className= {styles.images}>
          <Grid container spacing={2}>
            {images?.map((image, i) => (
              <Grid item lg = {4} key = {i} height = '100%' sx = {{borderRadius: '20px'}}>
                <div className = {styles.image}>
                  <ImageTile image={image} alt = {name} />
                </div>
              </Grid>
            ))}
          </Grid>
        </div>

      </main>

      <aside className= {styles.aside}>
        {/* <h5>{highlights?.setup}</h5>
        <div>
          {highlights?.hightlights.map((highlight, i) => (
            <p>{highlight}</p>
          ))}
        </div> */}
        {highlights && (
          <Highlights highlights={highlights} />
        )}
        <AdditionalInfo />
      </aside>

    </section>
  )
}

export default FacilitySection