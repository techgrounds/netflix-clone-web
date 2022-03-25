import { useEffect, useState } from "react";
import useWindowSize from "./WindowSize";

export const  LaneItem = ({ children, setStateZIndex }) => {
    const size = useWindowSize()
    return (
        <div className="laneItem"
            onMouseEnter={() => setStateZIndex(1)}
            onMouseLeave={() => setStateZIndex(0)}
            style={{height: `${size.itemHeight}vw`, width: `${size.itemWidth}vw`}}>
            {children}
        </div>
    )
}