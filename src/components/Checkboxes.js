import React from 'react'

function Checkboxes(props) {
    return (
        <div id="checkbox-container">

            <label id="difficulty-checkbox-label">
                <input
                    type="checkbox"
                    name="showDifficulty"
                    onChange={props.handleChange}
                    checked={props.data.showDifficulty}
                /> Difficulty
            </label>

            <label id="enjoyment-checkbox-label">
                <input
                    type="checkbox"
                    name="showEnjoyment"
                    onChange={props.handleChange}
                    checked={props.data.showEnjoyment}
                /> Enjoyment
            </label>

        </div>
    )
}

export default Checkboxes