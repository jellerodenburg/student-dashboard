import React from "react"
import StudentOption from "./StudentOption"

function StudentSelect(props) {
    const listItems = props.students.map(function (item) {
        return <StudentOption
            key={item}
            name={item}
            value={item} />
    })
    return (
        <select
            value={props.selectedStudent}
            onChange={props.handleChange}
            name="selectedStudent"
        >
            {listItems}
        </select>
    )
}

export default StudentSelect