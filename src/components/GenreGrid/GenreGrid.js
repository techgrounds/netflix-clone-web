import React from 'react'
import './GenreGrid.scss'
import { GridItem } from './GridItem'

export const GenreGrid = ({ moviesByGenreData, genreTitle }) => {

    console.log("griddata?", moviesByGenreData, genreTitle)
    return (
        <div className='grid'>
            <div className="containerTitleGenre">
                <h2>{genreTitle}</h2>
            </div>
            <div className='gridContainer'>

                {moviesByGenreData?.map((movie) => {
                    return (
                        // <div className='gridItem'
                        // >
                        //     {/* {movie.title} */}
                        //     <img
                        //         src={movie.image}
                        //         alt={movie.title}
                        //         className='movieImage'
                        //     />
                        // </div>
                        <GridItem key={movie.id} movie={movie}/>
                    )
                })}
            </div>
        </div>
    )
}
