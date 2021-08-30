import React from 'react'
import StudentSelect from './StudentSelect'

function Filters(props) {
    return (
        <div id="filters">

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

            <div>
                <StudentSelect students={props.students} handleChange={props.handleChange} />
            </div>

        </div>
    )
}

export default Filters