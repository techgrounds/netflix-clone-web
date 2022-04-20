import React, { useRef } from "react";
import { useSelector } from "react-redux";
import './GenreGrid.scss'
import {LaneItem} from '../Lane/LaneItem'


export const GenreGrid = ({ laneTitle, movies, key, trailer, allGenresSelector }) => {
    const zIndexRef = useRef();
    const updateZIndexRef = (number) => {
        zIndexRef.current.style.zIndex = number;
        
    };
    const isModalVisible = useSelector((state) => state.movies.filmInfoModal);
    console.log("allGenresSelector", allGenresSelector)
    return (
        <>
            <div className="gridContainer">
            
                {allGenresSelector.map((genreItems) => {
                    console.log("genreItmes", genreItems)
                    return (
                        <div className="gridItem"
                            key={genreItems.id}
                        >

                            <LaneItem
                                key={genreItems.id}
                                updateZIndexRef={updateZIndexRef}
                                movie={genreItems}
                                // leftIndex={leftIndex}
                                // rightIndex={rightIndex}
                                // index={index}
                                isModalVisible={isModalVisible}
                                mute={mute}
                                setMute={setMute}
                            />
                            {/* <LaneItem
                            >
                                {genreItems.category}
                                <img className="genreImage" src={genreItems.image} alt="genre pic"/>
                            </LaneItem> */}
                            
                                               
                        </div>
                    )
                })}
            </div>
        </>
    )
     
}

