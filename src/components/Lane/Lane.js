import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import "./Lane.scss";

function setLaneLength(){
    return (
        window.innerWidth < 500 ? 2 :
        window.innerWidth < 650 ? 3 :
        window.innerWidth < 800 ? 4 :
        window.innerWidth < 1000 ? 5 :
        6
        )
}
function setLaneItemWidth(){
    return (
        window.innerWidth < 500 ? 45 :
        window.innerWidth < 650 ? 30 :
        window.innerWidth < 800 ? 22.5 :
        window.innerWidth < 1000 ? 18 :
        15
        )
}
function setLaneItemHeight(){
    return (
        window.innerWidth < 500 ? 27 :
        window.innerWidth < 650 ? 18 :
        window.innerWidth < 800 ? 13.5 :
        window.innerWidth < 1000 ? 10.8 :
        9
        )
}

const laneLenght = setLaneLength()
const laneItemWidth = setLaneItemWidth();
const laneItemHeight = setLaneItemHeight();

console.log(laneLenght)

export const  LaneItem = ({ children }) => {
    return (
        <div className="laneItem"
        style={{height: `${laneItemHeight}vw`, width: `${laneItemWidth}vw`}}>
            {children}
            </div>
    )
}

const Lane = ({ children }) => {
    // const [screenSize] = useState({
    //     dynamicWidth: window.innerWidth,
    //   })
    // useEffect(() => {
    //     window.addEventListener("resize", setLaneLenght);
    //     return(() => {
    //         window.addEventListener("resize", setLaneLenght)
    //     })
    // }),[]

    const [activeIndex, setActiveIndex] = useState(0);
    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - laneLenght
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    }

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + laneLenght),
        onSwipedRight: () => updateIndex(activeIndex - laneLenght)
    })

    return (
        <div className="lane">
            <div className="laneName">Lane</div>
            <div className="inner" {...handlers} style={{ transform: `translateX(-${activeIndex * laneItemWidth}vw)`}}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement( child )
                })}
            </div>
            <div className="indicators">
                <button className="indicator indicator_prev"
                style={{height: `${laneItemHeight}vw`, width: "5vw", top: `-${laneItemHeight}vw`}}
                onClick={() => {updateIndex(activeIndex - laneLenght)}}>PREV</button>
                <button className="indicator indicator_next"
                style={{height: `${laneItemHeight}vw`, width: "5vw", top: `-${laneItemHeight}vw`}}
                onClick={() => {updateIndex(activeIndex + laneLenght)}}>NEXT</button>
                <div className="pageIndicator_container"
                 style={
                     { top: `-${(laneItemHeight * 2.1)}vw`
                    }}
                 >
                    {React.Children.map(children, (child, index) => {
                    if (index % laneLenght === 0) return (
                        <button
                        className={`${
                                    index === activeIndex ? "active_pageIndicatior pageIndicator" : "pageIndicator"
                                }`}
                        />
                        )}
                    )}
                </div>
            </div>
        </div>
    )
}

export default Lane