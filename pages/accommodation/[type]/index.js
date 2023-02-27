import React from 'react'

import styles from './AccommodationType.module.scss'
import { client } from '../../../utils/client'
import { accommodationQuery } from '../../../utils/queries'
import AccommodationVariant from '../../../components/AccommodationVariant/AccommodationVariant'

const AccommodationTypePage = ({ accommodation }) => {
  console.log(accommodation)
  const { heading: { main, sub }, subHeading, variations } = accommodation
  return (
    <div className= {`${styles.container} page__margin`}>
      <header className= 'heading'>
        <h1>{main}</h1>
        <p>{sub}</p>
      </header>

      <div className= {styles.subHeading}>
        <p>{subHeading}</p>
      </div>

      <div className= {styles.content}>
        {variations.map((variant, i) => (
          <AccommodationVariant variant={variant} key = {i} />
        ))}
      </div>
    </div>
  )
}

export const getStaticProps = async ({ params: { type } }) => {
  const accommodationData = await client.fetch(accommodationQuery())
  const accommodation = accommodationData[0].accomodation.find((accomodation) => accomodation.slug.current === type)

  return {
    props: {
      accommodation
    },
    revalidate: 1
  }
}

export const getStaticPaths = async () => {
  const accommodationData = await client.fetch(accommodationQuery())

  const paths = accommodationData[0].accomodation.map((type) => ({
    params: {
      type: type.slug.current
    }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export default AccommodationTypePage