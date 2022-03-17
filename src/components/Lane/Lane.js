import React, { useState, useRef, useReducer, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import useWindowSize from "./WindowSize";
import { IconArrowRight } from "../Icons/IconArrowRight";
import { IconArrowLeft } from "../Icons/IconArrowLeft"
import "./Lane.scss";

const Lane = ({ children }) => {
    const size = useWindowSize()
    const [activeIndex, setActiveIndex] = useState(1);
    const reference = useRef(React.Children.map(children, (child ) => {
        return React.cloneElement( child )
    }));

    const laneWithClones = [...reference.current]
    laneWithClones.unshift(laneWithClones[laneWithClones.length - 1])
    laneWithClones.push(laneWithClones[1])
    console.log(laneWithClones)

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + size.length),
        onSwipedRight: () => updateIndex(activeIndex - size.length)
    })

    const updateIndex  = (newIndex) => {
        if (newIndex < 1) {
            newIndex = React.Children.count(children) - (size.length-1)
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 1;
        }
        setActiveIndex(newIndex);
    }

    const firstLanePage = () => {
        const sliceLane_back = reference.current.slice(reference.current.length-reference.current, size.length)
        console.log(sliceLane_back)
        reference.current.unshift(...sliceLane_back)
        reference.current.splice(reference.current.length - size.length, size.length)
        console.log(activeIndex)
        console.log(reference.current)
    }

    const lastLanePage = () => {
        const sliceLane_front = reference.current.slice(0, size.length)
        reference.current.push(...sliceLane_front)
        reference.current.splice(0, size.length)
        console.log(activeIndex)
        console.log(reference.current)
    }

    return (
        <div className="lane">
            <div className="laneName">Lane</div>
            <div className="inner" {...handlers} style={{ transform: `translateX(-${activeIndex * size.itemWidth}vw)`}}>
                {laneWithClones}
            </div>

            <div className="indicators">
                <button className="indicator indicator_prev"
                style={{height: `${size.itemHeight}vw`, width: "5vw", top: `-${size.itemHeight}vw`}}
                onClick={() => {
                    updateIndex(activeIndex - size.length);
                    }}>
                    <IconArrowLeft/>
                </button>

                <button className="indicator indicator_next"
                style={{height: `${size.itemHeight}vw`, width: "5vw", top: `-${size.itemHeight}vw`}}
                onClick={() => {
                    updateIndex(activeIndex + size.length)
                }
                }>
                    <IconArrowRight/>
                </button>

                <div className="pageIndicator_container"
                 style={
                     { top: `-${(size.itemHeight * 2.1)}vw`
                    }}
                 >
                    {React.Children.map(children, (child, index) => {
                        if (index % (size.length) === 0) return (
                            <button className={`${ index === activeIndex ? "active_pageIndicatior pageIndicator" : "pageIndicator"}`}/>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default Lane