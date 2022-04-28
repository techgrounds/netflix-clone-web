import React from 'react'
import './GenreGrid.scss'
import { GridItem } from './GridItem'

const GenreGrid = ({ moviesByGenreData, genreTitle }) => {

    return (
        <div className='grid'>
            <div className="containerTitleGenre">
                <h2>{genreTitle}</h2>
            </div>
            <div className='gridContainer'>

                {moviesByGenreData?.map((movie) => {
                    return (
                        <GridItem key={movie.id} movie={movie}/>
                    )
                })}
            </div>
        </div>
    )
}

export default GenreGrid;