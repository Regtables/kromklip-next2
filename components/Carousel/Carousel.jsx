import React, { useState, useEffect } from 'react'
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai'
import { useSwipeable } from 'react-swipeable'

import styles from './Carousel.module.scss'

const Carousel = ( { children: items, activeIndex } ) => {
  console.log(items)
  console.log(activeIndex)
  const [index, setIndex] = useState(0)
  const [pause, setPause] = useState(false)

  const handlers = useSwipeable({
    onSwipedLeft: (e) => handleNext(),
    onSwipedRight: (e) => handlePrev()
  })

  // useEffect(() => {
  //   setIndex(activeIndex)
  // }, [activeIndex])

  useEffect(() => {
    const interval = setInterval(() => {
      if(!pause){
        handleNext()
      }
    }, 4000)

    return () => {
      if(interval){
        clearInterval(interval)
      }
    }
  })

  const handlePrev = () => {
    if(index === 0){
      setIndex(items.length-1)
    } else {
      setIndex((prev) => prev-1)
    }
  }

  const handleNext = () => {
    if(index === items.length-1){
      setIndex(0)
    } else{
      setIndex((prev) => prev+1)
    }
  }

  return (
    <div 
      className= {styles.container} 
      onMouseEnter = {() => setPause(true)}
      onMouseLeave = {() => setPause(false)}
      { ...handlers }
    >
      <div className= {styles.inner} style = {{transform: `translate(-${index*100}%)`}}>
        {items}
      </div>

      <div className= {styles.buttons}>
        <div className= {styles.prev}>
          <div onClick={handlePrev}><AiFillLeftCircle /></div>
        </div>
        <div className= {styles.next}>
          <div onClick={handleNext}><AiFillRightCircle /></div>
        </div>
        <div className= {styles.counter}>
          <div className= {styles.counterContainer}>
            {items.map((item, i) => (
              <div 
                className= {`${index === i ? styles.activeCount : ''}`} 
                key = {i} 
                onClick = {() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel