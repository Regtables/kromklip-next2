import React from 'react'
import { Grid } from '@mui/material'
import { GiJeep, GiFishing } from 'react-icons/gi'
import { TbSwimming } from 'react-icons/tb'

import styles from './FacilitySection.module.scss'

import ImageTile from '../ImageTile/ImageTile'
import Highlights from '../Highlights/Highlights'
import AdditionalInfo from '../AdditionalInfo/AdditionalInfo'

const FacilitySection = ({ facility: data }) => {
  console.log(data)
  const { facility: { name, decription, highlights }, images } = data

  const renderIcon = () => {
    if(name.toLowerCase() === '4x4 trail'){
      return (
        <p><GiJeep /></p>
      )
    } else if(name.toLowerCase() === 'fishing'){
      return (
        <p><GiFishing /></p>
      )
    } else if(name.toLowerCase() === 'swimming') {
      return (
        <p><TbSwimming /></p>
      )
    }
  }

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
          <Grid container spacing={2} height = '100%'>
            {images?.map((image, i) => (
              <Grid item md = {4} key = {i} sx = {{borderRadius: '20px'}}>
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