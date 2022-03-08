import React from "react";
import "./Lane.scss";

export const  LaneItem = ({ children, width }) => {
    return (
        <div className="lane-item" style={{ width : width}}>
            {children}
            </div>
    )
}

const Lane = ({ children }) => {
    return (
        <div className="lane">
            <div className="inner" style={{ transform: "translateX(-0%)"}}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "40%" })
                })}
            </div>
        </div>
    )
}

export default Lane