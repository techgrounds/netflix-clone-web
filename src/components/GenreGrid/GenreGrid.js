import React from 'react'
import './GenreGrid.scss'
import { GridItem } from './GridItem'

export const GenreGrid = ({ moviesByGenreData, genreTitle }) => {

    console.log("griddata?", moviesByGenreData, genreTitle)
    return (

        <>
            <div className="containerTitleGenre">
                <h1>{genreTitle}</h1>
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


        </>

    )
}
