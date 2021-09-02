import React from 'react'
import { studentsSorted } from '../data/dataTools'
import { Route } from "react-router"
import GraphContainer from './GraphContainer'

function RouteList(props) {
  // Create Route-elements for each student with URL path /{student}
  const routeItems = studentsSorted.map(function (student) {
    return (
      <Route key={student} path={`/${student}`}>
        <GraphContainer
          name={student}
          data={props.data}
          handleChange={props.handleChange}
          handleRoute={props.handleRoute} />
      </Route>
    )
  })
  return (
    <div>
      {/* Set root URL path to /All_Students_Aveage */}
      <Route exact path={"/"}>
        <GraphContainer
          name={studentsSorted[0]}
          data={props.data}
          handleChange={props.handleChange}
          handleRoute={props.handleRoute} />
      </Route>
      {/* Add created Route-items */}
      {routeItems}
    </div>
  )
}

export default RouteList