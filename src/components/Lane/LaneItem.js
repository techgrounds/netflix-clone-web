import useWindowSize from "./WindowSize";

export const  LaneItem = ({ children }) => {
    const size = useWindowSize()
    return (
        <div className="laneItem"
            style={{height: `${size.itemHeight}vw`, width: `${size.itemWidth}vw`}}>
            {children}
        </div>
    )
}