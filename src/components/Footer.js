import React from 'react'

function Footer() {
    return (
        <footer>
            <p>
                This app was built as an excerise by Jelle Rodenburg with the <a
                    href="https://reactjs.org/"
                    target="_blank"
                    rel="noreferrer">
                    React
                </a> JavaScript library and <a
                    href="https://formidable.com/open-source/victory/"
                    target="_blank"
                    rel="noreferrer">
                    Victory</a> modular charting components.</p>
            <p>
                The presented data is mock data (not from real students).
            </p>
            <p>
                If other data (in the same format) would be used as input,
                then the chart contents will update automatically.
                E.g. other student names from a new or updated data file
                will automatically be available in the student selector at the top.
            </p>
        </footer>
    )
}

export default Footer