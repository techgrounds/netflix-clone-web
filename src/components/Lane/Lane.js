import React, { useRef, useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import { IconArrowRight } from '../Icons/IconArrowRight'
import { IconArrowLeft } from '../Icons/IconArrowLeft'
import { LaneItem } from '../../components/Lane/LaneItem'
import useWindowSize from './WindowSize'
import './Lane.scss'


const Lane = ({
  laneTitle,
  movies,
  openModal,
  isModalVisible,
  setIsModalVisible,
}) => {
  const size = useWindowSize()
  const [activeIndex, setActiveIndex] = useState(0)
  const [startSwitch, setStartSwitch] = useState(0)
  const [animationState, setAnimationState] = useState(false)
  const zIndexRef = useRef()
  const laneRef = useRef()
  const updateZIndexRef = (number) => {
    zIndexRef.current.style.zIndex = number
  }

  const midLane =
    movies &&
    movies.map((movie, index) => {
      const leftIndex =
        startSwitch > 0
          ? (movies.length - size.length + activeIndex - 1) % movies.length
          : 0
      const rightIndex = leftIndex + (size.length - 1)
      return (
        <LaneItem
          key={movie.id}
          updateZIndexRef={updateZIndexRef}
          movie={movie}
          leftIndex={leftIndex}
          rightIndex={rightIndex}
          index={index}
          openModal={openModal}
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      )
    })
  const arrayFromFirstLane = midLane.filter(
    (movie, index) => index < size.length + 1
  )
  const arrayFromLastLane = midLane.filter(
    (movie, index) => index >= movies.length - (size.length + 1)
  )
  const fullLaneLenght =
    arrayFromLastLane.length + midLane.length + arrayFromFirstLane.length
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds))
  }
  const animationStateOn = () => {
    setAnimationState(true)
  }
  const checkIndexNext = async (activeIndex) => {
    await sleep(800)
    if (activeIndex > fullLaneLenght - 1 - size.length * 2) {
      setAnimationState(false)
      setActiveIndex(
        size.length + 2 + (size.length - (fullLaneLenght - activeIndex))
      )
    }
  }
  const checkIndexPrev = async (activeIndex) => {
    await sleep(800)
    if (activeIndex < arrayFromLastLane.length + size.length) {
      if (startSwitch > 0) {
        setAnimationState(false)
        setActiveIndex(
          fullLaneLenght -
            1 -
            (size.length +
              arrayFromFirstLane.length -
              (size.length - (size.length - activeIndex)))
        )
      }
    }
  }
  const updateIndexNext = (newIndex) => {
    if (startSwitch === 0) {
      setActiveIndex(newIndex + size.length + 1)
    } else {
      setActiveIndex(newIndex)
    }
    checkIndexNext(newIndex)
    animationStateOn()
    setStartSwitch(1)
  }
  const updateIndexPrev = (newIndex) => {
    setActiveIndex(newIndex)
    checkIndexPrev(newIndex)
    animationStateOn()
  }
  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndexPrev(activeIndex + size.length),
    onSwipedRight: () => updateIndexNext(activeIndex - size.length),
  })



  return (
    <div className='laneContainer' style={{ zIndex: 0 }} ref={zIndexRef}>
      <div
        className='lane'
        style={{ height: `${size.itemHeight * 1.33}vw` }}
        {...handlers}>
        <div className='laneName'>
          {laneTitle}
          <button className='laneNameButton'>
            <div className='laneNameButtonOpened'>Explore all </div>
            <IconArrowRight />
          </button>
        </div>

        <div
          className='inner'
          style={{
            transform: `translateX(-${activeIndex * size.itemWidth}vw)`,
            transition: `${animationState ? ' transform 0.8s' : 'undefined'}`,
          }}
          ref={laneRef}>
          {startSwitch > 0 && arrayFromLastLane}
          {midLane}
          {movies.length > size.length && arrayFromFirstLane}
        </div>

        <div className='indicators'>
          <button
            className={`${
              startSwitch === 0
                ? 'indicator_inactive indicator_prev'
                : 'indicator indicator_prev'
            }`}
            style={{
              height: `${size.itemHeight}vw`,
              width: '5vw',
              top: `-${size.itemHeight}vw`,
            }}
            onClick={() => {
              updateIndexPrev(activeIndex - size.length)
            }}>
            <IconArrowLeft />
          </button>

          <button
            className={`${
              movies.length < size.length
                ? 'indicator_inactive indicator_next'
                : 'indicator indicator_next'
            }`}
            style={{
              height: `${size.itemHeight}vw`,
              width: '5vw',
              top: `-${size.itemHeight}vw`,
            }}
            onClick={() => {
              updateIndexNext(activeIndex + size.length)
            }}>
            <IconArrowRight />
          </button>

          <div
            className='pageIndicator_container'
            style={{ top: `-${size.itemHeight * 2.1}vw` }}>
            {movies.map((movie, index) => {

console.log("active index: ",activeIndex)
console.log("size.length: ",size.length)
              if (index % size.length === 1)
                return (
                  <button
                    key={movie.id}
                    className={`${
                          (index >= (activeIndex - size.length) && index < (activeIndex - 1))
                        ? 'active_pageIndicatior pageIndicator'
                        : 'pageIndicator'
                    }`}
                  />
                )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lane
