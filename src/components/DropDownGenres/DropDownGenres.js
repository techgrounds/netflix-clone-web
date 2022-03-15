import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss'
import { IconCaretDown } from '../Icons/IconCaretDown'

function DropDownGenres() {

    const [showDropdown, setShowDropdown] = useState(false);

    const ref = useRef()

    // const dropDownHandler = () => {
    //     setShowDropdown(true)
    // }

    // const hideDropDownHandler = () => {
    //     setShowDropdown(false)
    // }

    // window.onClick = (e) => {
    //     if(e.target ===)
    // }

    useEffect(() => {
        const checkIfClickedOutside = event => {
            if (showDropdown && ref.current && !ref.current.contains(event.target)) {
                setShowDropdown(false)
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [showDropdown])


    return (
        <div className="container-dropdown-genres ">
            <div className="container-icon-genre">
                <div className="selectGenre" ref={ref}>
                    <button onClick={() => setShowDropdown(!showDropdown)} className='dropdown-toggle-btn open-dropdown'>Genres
                        <IconCaretDown />
                    </button>
                </div>
            </div>
            {showDropdown &&
                <div className='dropdown-ui'>
                    <div className='dropdown-links'>
                        <ul>
                            <li >
                                <Link to="/">Comedy</Link>
                            </li>
                            <li >
                                <Link to="/" >Action</Link></li>
                            <li>
                                <Link to="/" >Thriller</Link></li>
                            <li >
                                <Link to="/" >Family</Link></li>
                            <li >
                                <Link to="/" >Fantasy</Link></li>
                        </ul>

                        <ul>
                            <li >
                                <Link to="/" >Crime</Link>
                            </li>
                            <li >
                                <Link to="/" >Adventure</Link>
                            </li>
                            <li >
                                <Link to="/" >80ties</Link>
                            </li>
                            <li >
                                <Link to="/" >90ties</Link>
                            </li>
                            <li >
                                <Link to="/" >2000 Millenials</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            }

        </div>
    )
}

export default DropDownGenres