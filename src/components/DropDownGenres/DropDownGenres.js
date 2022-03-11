import React from 'react'
import './styles.scss'
import { IconCaretDown } from '../Icons/IconCaretDown'

function DropDownGenres() {
    return (
        <div className="container-dropdown-genres ">
            <div className="selectGenre">              
                {/* <button className='dropdown-hover-btn'>Genres</button> */}
                <label htmlFor="select">Genres</label>
                <IconCaretDown />
            </div>
                <div className='dropdown-ui'>
                    <div className='dropdown-links'>
                        <ul>
                            <li value="">
                                <a href="">Comedy</a>
                            </li>
                            <li value="">
                                <a href="">Action</a></li>
                            <li value="">
                                <a href="">Thriller</a></li>
                            <li value="">
                                <a href="">Family</a></li>
                            <li value="">
                                <a href="">Fantasy</a></li>
                        </ul>
                        <ul>
                            <li value="">
                                <a href="">Crime</a>
                            </li>
                            <li value="">
                                <a href="">Adventure</a>
                            </li>
                            <li value="">
                                <a href="">80ties</a>
                            </li>
                            <li value="">
                                <a href="">90ties</a>
                            </li>
                            <li value="">
                                <a href="">2000 Millenials</a>
                            </li>
                        </ul>
                    </div>
                </div>

            

          
        </div>
    )
}

export default DropDownGenres