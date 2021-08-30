import React from "react"

function StudentOption(props) {
    return (
        <option value={props.value}>{props.name}</option>
    )
}

export default StudentOption