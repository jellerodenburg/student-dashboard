import React from 'react'
import Chart from './Chart'
import Checkboxes from './Checkboxes'
import SelectStudentMenu from './SelectStudentMenu'

function GraphContainer(props) {
    return (
        <figure>
            <div id="filters-container">
                <h2 id="student-name-h2">{props.name}</h2>
                <SelectStudentMenu handleRoute={props.handleRoute} />
                <Checkboxes handleChange={props.handleChange} data={props.data} />
            </div>
            <Chart
                assignmentSection="W1"
                data={props.data}
                name={props.name}
            />
            <Chart
                assignmentSection="W2"
                data={props.data}
                name={props.name}
            />
            <Chart
                assignmentSection="W3"
                data={props.data}
                name={props.name}
            />
            <Chart
                assignmentSection="W4+"
                data={props.data}
                name={props.name}
            />
        </figure>
    )
}

export default GraphContainer