import useWindowSize from "./WindowSize";

export const  LaneItem = ({ children, updateZIndexRef, updateMMMovieRef }) => {
    const size = useWindowSize()
    return (
        <div className="laneItem" 
            style={{height: `${size.itemHeight}vw`, width: `${size.itemWidth}vw`}}
            onMouseEnter={() => { updateZIndexRef(1); updateMMMovieRef(true) }}
            onMouseLeave={() => { updateZIndexRef(0); updateMMMovieRef(false) }}
            >
            {children}
        </div>
    )
}