import React from 'react'

function Footer() {
    return (
        <footer>
            This app was built by Jelle Rodenburg as an excercise.<br />
            Used tech:

            <ul>

                <li><a
                    href="https://reactjs.org/"
                    target="_blank"
                    rel="noreferrer">
                    React
                </a> JavaScript library</li>

                <li><a
                    href="https://formidable.com/open-source/victory/"
                    target="_blank"
                    rel="noreferrer">
                    Victory
                </a> modular charting components</li>

                <li><a
                    href="https://reactrouter.com"
                    target="_blank"
                    rel="noreferrer">
                    React Router</a>  navigational components</li>

            </ul>

            <p>
                The presented data is mock data (not from real students).
            </p>

            <p>
                If other data (in the same format) would be used as input,
                then the chart contents will update automatically.
                E.g. other student names from a new or updated data file
                will automatically be available as Links in the Select student menu.
            </p>

        </footer>
    )
}

export default Footer