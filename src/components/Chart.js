import React from 'react'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack, VictoryGroup, } from 'victory'
import { totalAssignmentsDataWithAverage } from '../data/dataTools.js'

const assignmentId = 'Welke opdracht of welk project lever je nu in?'
const difficultyRating = 'Hoe moeilijk vond je deze opdracht?'
const enjoymentRating = 'Hoe leuk vond je deze opdracht?'
const studentName = 'Wie ben je?'

function Chart(props) {

  // Filter the data to be displayed in one chart
  // using props assignmentSection and selectedStudent
  const graphData = totalAssignmentsDataWithAverage.filter(el => {

    // If-statement is used to group assignment names starting with: W4, W5, W6, SRUM
    // because these consist of a small number of assignments (compared to W1, W2, W3)
    if (props.assignmentSection.startsWith("W4+")) {
      return el[studentName].startsWith(props.name) &&
        (
          el[assignmentId].startsWith('W4') ||
          el[assignmentId].startsWith('W5') ||
          el[assignmentId].startsWith('W6') ||
          el[assignmentId].startsWith('SCRUM')
        )
    } else {
      return el[studentName].startsWith(props.name) &&
        el[assignmentId].startsWith(props.assignmentSection)

    }
  })

  return (
    <div className="chart-div">

      <h3>{props.assignmentSection}</h3>

      <VictoryChart
        padding={{ top: 5, bottom: 30, left: 20, right: 10 }}
        domainPadding={{ x: 10, y: 0 }}
        theme={VictoryTheme.material}
        height={80}
      >

        <VictoryAxis
          // In Project assignment names replace " - " for a line break
          tickFormat={(t) => t.replace(/\s-\s/g, "\n")}
          style={{
            tickLabels: { fill: "white", fontSize: 4.5, padding: 5 }
          }}
        />

        <VictoryAxis
          dependentAxis
          tickValues={[1, 2, 3, 4, 5]}
          style={{
            tickLabels: { fill: "white", fontSize: 4.5, padding: 5 }
          }}
        />

        <VictoryGroup offset={5} style={{ data: { width: 5 } }}>

          <VictoryStack>
            <VictoryBar
              style={{
                data: {
                  fill: "#bd4b2e",
                  // Hide the bars for Difficulty if checkbox is unchecked
                  opacity: props.data.showDifficulty ? 1 : 0
                },
              }}
              data={graphData}
              x={assignmentId}
              y={difficultyRating}
            />
          </VictoryStack>

          <VictoryStack>
            <VictoryBar
              style={{
                data: {
                  fill: "#ceb837",
                  // Hide the bars for Enjoyment if checkbox is unchecked
                  opacity: props.data.showEnjoyment ? 1 : 0
                }
              }}
              data={graphData}
              x={assignmentId}
              y={enjoymentRating}
            />
          </VictoryStack>

        </VictoryGroup>

      </VictoryChart>
    </div >
  )
}

export default Chart
