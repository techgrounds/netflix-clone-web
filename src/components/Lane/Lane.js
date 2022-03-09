import React, { useState } from "react";
import "./Lane.scss";


export const  LaneItem = ({ children }) => {
    return (
        <div className="lane-item">
            {children}
            </div>
    )
}

const Lane = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = React.Children.count(children) - 1;
        }
        setActiveIndex(newIndex);
    }


    return (
        <div className="lane">
            <div className="inner" style={{ transform: `translateX(-${activeIndex * 15}vw)`}}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement( child )
                })}
            </div>
            <div className="indicators">
                <button onClick={() => {updateIndex(activeIndex - 6)}}>PREV</button>
                <button onClick={() => {updateIndex(activeIndex + 6)}}>NEXT</button>
            </div>
        </div>
    )
}

export default Lane