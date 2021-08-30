import React from 'react'
import Filters from './Filters'
import { studentsSorted } from '../data/dataTools'

function Header(props) {
    return (
        <header>

            <div id="logo-and-header-text">
                <img
                    alt="Winc Academy logo"
                    id="logo"
                    src="https://global-uploads.webflow.com/5ee34869dd28cd4237e2a5f2/5f030fe26dc9fc19df8dc16a_Winc-logo-objects.svg"
                />
                <h1>Student Dashboard / {props.data.selectedStudent}</h1>
            </div>

            <Filters
                students={studentsSorted}
                handleChange={props.handleChange}
                data={props.data}
            />

        </header>
    )
}

export default Header