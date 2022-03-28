import useWindowSize from "./WindowSize";

export const  LaneItem = ({ children, updateRef }) => {
    const size = useWindowSize()
    return (
        <div className="laneItem"
            onMouseEnter={() => updateRef(1)}
            onMouseLeave={() => updateRef(0)}
            style={{height: `${size.itemHeight}vw`, width: `${size.itemWidth}vw`}}>
            {children}
        </div>
    )
}