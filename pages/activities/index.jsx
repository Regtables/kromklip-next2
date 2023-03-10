import React from 'react'
import { GiMountainRoad } from 'react-icons/gi'
import { useRouter } from 'next/router'

import styles from './Activities.module.scss'
import { client } from '../../utils/client'
import { activitiesQuery } from '../../utils/queries'
import banner from '../../public/sorounding1.jpeg'

import Region from '../../components/Region/Region'
import PageBanner from '../../components/PageBanner/PageBanner'
import { renderPageIcon } from '../../utils/helpers'

const ActivitiesPage = ({ activities: data }) => {
  const { heading: { main, sub }, regions } = data
  const router = useRouter()
  
  return (
    <div className= {styles.container}>
      <PageBanner image = {banner} alt = 'waterfall' />
      <div className='page__margin'>
        <header className= 'heading'>
          {renderPageIcon(router.pathname)}
          <h1>{main}</h1>
          <p>{sub}</p>
        </header>

        <main className= {styles.content}>
          {regions.map((region, i) => (
            <Region region = {region} key = {i} />
          ))}
        </main>

      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const activitiesData = await client.fetch(activitiesQuery())

  return {
    props: {
      activities: activitiesData[0]
    }
  }
}

export default ActivitiesPage