import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { IconArrowRight } from "../Icons/IconArrowRight";
import { IconArrowLeft } from "../Icons/IconArrowLeft";
import { v4 as uuidv4 } from 'uuid';
import { LaneItem } from '../../components/Lane/LaneItem';
import movies from "../../movies.json";
import useWindowSize from "./WindowSize";
import "./Lane.scss";

const Lane = ({ children }) => {
    const size = useWindowSize()
    const [activeIndex, setActiveIndex] = useState(0);
    const [startSwitch, setStartSwitch] = useState(0);
    const [animationState, setAnimationState] = useState(true);
    const keyedMovies = movies.map(movie => {movie.key = uuidv4()
        return movie} )
    const midLane = movies && keyedMovies.map((movie) => {
        return (
        <LaneItem key={movie.key}>
            <img
            src={require(`../../assets/mockup_images/${movie.id}`)}
            alt={movie.title}
            className="movie-image" />
        </LaneItem>)
    })
    const arrayFromFirstLane = midLane.filter((movie, index) => index < (size.length+1))
    const arrayFromLastLane = midLane.filter((movie, index) => index >= keyedMovies.length - (size.length+1))
    const fullLaneLenght = arrayFromLastLane.length + midLane.length + arrayFromFirstLane.length;
    const sleep = (milliseconds) => {return new Promise(resolve => setTimeout(resolve, milliseconds))}

    const checkIndex = async (activeIndex) => {
        await sleep(800)
        if (activeIndex > (fullLaneLenght+1) - (size.length*2)) {
            console.log(activeIndex)
            console.log(fullLaneLenght)
            console.log(fullLaneLenght+2)
            setAnimationState(false)
            setActiveIndex((size.length+2) + (size.length - (fullLaneLenght - activeIndex)))
            // setStartSwitch(1)
        }
        // } else if (activeIndex < ((size.length*2)+1)) {
        //     if (startSwitch > 0) {
        //     setAnimationState(false)
        //     setActiveIndex(((fullLaneLenght+1) - (size.length *2)) + activeIndex)
        // }
        // }
    }

    const animationStateOn = () => {
        setAnimationState(true)
    }

    const updateIndex  = (newIndex) => {
        setActiveIndex(newIndex);
        checkIndex(newIndex);
        animationStateOn();
        setStartSwitch(1)
    }

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + size.length),
        onSwipedRight: () => updateIndex(activeIndex - size.length)
    })

    return (
        <div className="lane"
        style={{height: `${size.itemHeight*1.4}vw`}} >
            <div className="laneName">
                Lane
                <button className="laneNameButton"><div className="laneNameButtonOpened">Explore all </div><IconArrowRight/></button>
                </div>

            <div id="MovingLane" className="inner"
                {...handlers}
                style={{ transform: `translateX(-${activeIndex * size.itemWidth}vw)`,
                transition: `${animationState ? ' transform 0.8s' : 'undefined'}`
                }}>
                {arrayFromLastLane}
                {midLane}
                {arrayFromFirstLane}
            </div>

            <div className="indicators">
                <button className="indicator indicator_prev"
                    style={{height: `${size.itemHeight}vw`, width: "5vw", top: `-${size.itemHeight}vw`}}
                    onClick={() => {updateIndex(activeIndex - size.length)}}>
                    <IconArrowLeft/>
                </button>

                <button className="indicator indicator_next"
                    style={{height: `${size.itemHeight}vw`, width: "5vw", top: `-${size.itemHeight}vw`}}
                    onClick={() => {updateIndex(activeIndex + size.length)}}>
                    <IconArrowRight/>
                </button>

                <div className="pageIndicator_container"
                 style={{ top: `-${(size.itemHeight * 2.1)}vw`}}>
                    {React.Children.map(children, (child, index) => {
                        if ((index) % (size.length) === 0) return (
                            <button className={`${ (index) === activeIndex-size.length ? "active_pageIndicatior pageIndicator" : "pageIndicator"}`}/>)
                    })}

                </div>
            </div>
        </div>
    )
}

export default Lane