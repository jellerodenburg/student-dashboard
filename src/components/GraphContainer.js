import React from 'react'
import Graph from './Graph'

function GraphContainer(props) {
    return (
        <figure>
            <Graph
                assignmentSection="W1"
                data={props.data}
            />
            <Graph
                assignmentSection="W2"
                data={props.data}
            />
            <Graph
                assignmentSection="W3"
                data={props.data}
            />
            <Graph
                assignmentSection="W4+"
                data={props.data}
            />
        </figure>
    )
}

export default GraphContainer