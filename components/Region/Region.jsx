import React from 'react'
import { Grid } from '@mui/material'

import styles from './Region.module.scss'
import Activity from '../Activitiy/Activity'

const Region = ({ region }) => {
  const { name, activities } = region
  return (
    <div className= {styles.container}>
      <div className= {styles.heading}>
        <h2>{name}</h2>
      </div>

      <div className= {styles.activities}>
        <Grid container spacing = {4} justifyContent = 'space-evenly'>
          {activities.map((activity, i) => (
            <Grid item md = {3} lg = {3} sm = {2} xs = {1} key = {i}>
              <Activity activity={activity} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}

export default Region