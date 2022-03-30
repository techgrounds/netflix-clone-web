import React, { useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { IconArrowRight } from "../Icons/IconArrowRight";
import { IconArrowLeft } from "../Icons/IconArrowLeft";
import { v4 as uuidv4 } from 'uuid';
import { LaneItem } from '../../components/Lane/LaneItem';
import movies from '../../movies.json';
import useWindowSize from './WindowSize';
import MiniModal from '../MiniModal/MiniModal';
import './Lane.scss';

const Lane = ({ children }) => {
    const size = useWindowSize()
    const [activeIndex, setActiveIndex] = useState(1);
    const [startSwitch, setStartSwitch] = useState(0);
    const [animationState, setAnimationState] = useState(true);
    const zIndexRef = useRef();
    const laneRef = useRef();
    const updateZIndexRef = (number) => {zIndexRef.current.style.zIndex= number};


  console.log("render")

    const keyedMovies = movies.map(movie => {movie.key = uuidv4()
            return movie} )
    const midLane = movies && keyedMovies.map((movie, index) => {
        const leftIndex = (keyedMovies.length - size.length + activeIndex - 1) % keyedMovies.length;
        const rightIndex = leftIndex + (size.length - 1)
        return (
            <LaneItem key={movie.key}
            updateZIndexRef={updateZIndexRef}
            movie={movie}
            leftIndex={leftIndex}
            rightIndex={rightIndex}
            index={index}
          
            />
   
        )
    })
    const arrayFromFirstLane = midLane.filter((movie, index) => index < (size.length+1))
    const arrayFromLastLane = midLane.filter((movie, index) => index >= keyedMovies.length - (size.length+1))
    const fullLaneLenght = arrayFromLastLane.length + midLane.length + arrayFromFirstLane.length;
    const sleep = (milliseconds) => {return new Promise(resolve => setTimeout(resolve, milliseconds))}
    const animationStateOn = () => { setAnimationState(true) }
    const checkIndexNext = async (activeIndex) => {
      await sleep(800);
      if (activeIndex > fullLaneLenght - 1 - size.length * 2) {
            setAnimationState(false);
            setActiveIndex(size.length + 2 + (size.length - (fullLaneLenght - activeIndex))
            )
        }
    }
  const checkIndexPrev = async (activeIndex) => {
    await sleep(800);
    if (activeIndex < arrayFromLastLane.length + size.length) {
      if (startSwitch > 0) {
            setAnimationState(false);
            setActiveIndex( fullLaneLenght -1 - (size.length + arrayFromFirstLane.length - (size.length - (size.length - activeIndex)))
        );
      }
    }
  };
  const updateIndexNext = (newIndex) => {
    setActiveIndex(newIndex);
    checkIndexNext(newIndex);
    animationStateOn();
    setStartSwitch(1);
  };
  const updateIndexPrev = (newIndex) => {
    setActiveIndex(newIndex);
    checkIndexPrev(newIndex);
    animationStateOn();
    setStartSwitch(1);
  };
  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndexPrev(activeIndex + size.length),
    onSwipedRight: () => updateIndexNext(activeIndex - size.length),
  });

  return (
    <div className='laneContainer' style={{ zIndex: 0 }} ref={zIndexRef}>
      <div
        className='lane'
        style={{ height: `${size.itemHeight * 1.33}vw`}}
        >
        <div className='laneName'>
          Lane
          <button className='laneNameButton'>
            <div className='laneNameButtonOpened'>Explore all </div>
            <IconArrowRight />
          </button>
        </div>

        <div className='inner'
          {...handlers}
          style={{
            transform: `translateX(-${activeIndex * size.itemWidth}vw)`,
            transition: `${animationState ? ' transform 0.8s' : 'undefined'}`,
          }}
          ref={laneRef}>
          {arrayFromLastLane}
          {midLane}
          {arrayFromFirstLane}
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
              if (startSwitch === 1) updateIndexPrev(activeIndex - size.length);
            }}>
            <IconArrowLeft />
          </button>

          <button
            className='indicator indicator_next'
            style={{
              height: `${size.itemHeight}vw`,
              width: '5vw',
              top: `-${size.itemHeight}vw`,
            }}
            onClick={() => {
              updateIndexNext(activeIndex + size.length);
            }}>
            <IconArrowRight />
          </button>

          <div
            className='pageIndicator_container'
            style={{ top: `-${size.itemHeight * 2.1}vw` }}>
            {React.Children.map(children, (child, index) => {
              if (index % size.length === 1)
                return (
                  <button
                    className={`${
                      index === activeIndex - size.length
                        ? 'active_pageIndicatior pageIndicator'
                        : 'pageIndicator'
                    }`}
                  />
                );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lane;
