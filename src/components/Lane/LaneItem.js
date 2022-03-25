import useWindowSize from "./WindowSize";

export const  LaneItem = ({ children,isHovered, setIsHovered }) => {
    const size = useWindowSize()

    return (
        <div className="laneItem"
            // onMouseEnter={() => {setIsHovered(true); console.log("mouse hover")}}
            // onMouseLeave={() => {setIsHovered(false); console.log("mouse leave")}}
            style={{height: `${size.itemHeight}vw`, width: `${size.itemWidth}vw`}}>
            {children}
        </div>
    )
}