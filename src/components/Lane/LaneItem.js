import useWindowSize from "./WindowSize";

export const  LaneItem = ({ children, updateZIndexRef }) => {
    const size = useWindowSize()
    return (
        <div className="laneItem" 
            style={{height: `${size.itemHeight}vw`, width: `${size.itemWidth}vw`}}
            onMouseEnter={() => updateZIndexRef(1)}
            onMouseLeave={() => updateZIndexRef(0)}
            >
            {children}
        </div>
    )
}