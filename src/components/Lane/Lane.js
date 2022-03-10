import React, { useState } from "react";
import "./Lane.scss";

const laneLenght = 6;
const laneItemWidth = 15;
const laneItemHeight = 9;

export const  LaneItem = ({ children }) => {
    return (
        <div className="laneItem"
        style={{height: `${laneItemHeight}vw`, width: `${laneItemWidth}vw`}}>
            {children}
            </div>
    )
}

const Lane = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - laneLenght
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    }

    return (
        <div className="lane">
            <div className="laneName">Lane</div>
            <div className="inner" style={{ transform: `translateX(-${activeIndex * laneItemWidth}vw)`}}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement( child )
                })}
            </div>
            <div className="indicators">
                <button className="indicator indicator_prev"
                style={{height: `${laneItemHeight}vw`, width: "5vw"}}
                onClick={() => {updateIndex(activeIndex - laneLenght)}}>PREV</button>
                <button className="indicator indicator_next"
                style={{height: `${laneItemHeight}vw`, width: "5vw"}}
                onClick={() => {updateIndex(activeIndex + laneLenght)}}>NEXT</button>
                <div className="pageIndicator_container">
                    {React.Children.map(children, (child, index) => {
                    if (index % laneLenght === 0) return (
                        <button
                        className={`${
                                    index == activeIndex ? "active_pageIndicatior pageIndicator" : "pageIndicator"
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