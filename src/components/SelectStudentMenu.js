import React from 'react'
import { studentsSorted } from '../data/dataTools'
import { Link } from "react-router-dom";

function SelectStudentMenu(props) {
    const linkItems = studentsSorted.map(function (name) {
        return (
            <li key={name}>

                <Link
                    to={`${name}`}
                    onClick={() => props.handleRoute(name)}
                >{name}
                </Link >

            </li>
        )
    })
    return (
        <nav>
            <div className="dropdown">

                <span id="select-student">Select student ▼</span>

                <div className="dropdown-content">

                    <ul>
                        {linkItems}
                    </ul>

                </div>

            </div>
        </nav>
    )
}

export default SelectStudentMenu