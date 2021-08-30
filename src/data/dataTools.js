const WincData = require('./WincData.json')

const assignmentId = 'Welke opdracht of welk project lever je nu in?'
const difficultyRating = 'Hoe moeilijk vond je deze opdracht?'
const enjoymentRating = 'Hoe leuk vond je deze opdracht?'
const studentName = 'Wie ben je?'

const assignments = WincData.map(item => item[assignmentId])
    .filter((value, index, self) => self.indexOf(value) === index)

function averageBy(arr, id, ratingType) {
    const { total, count } = arr.reduce((a, b) => {
        if (b[assignmentId] === id) {
            a.total += b[ratingType]
            a.count++
        }
        return a
    }, { total: 0, count: 0 })
    return total / count
}

const createAverageRatings = () => {
    let newArray = []
    assignments.forEach(assignment => {
        let assignmentAverageObject = {
            [studentName]: "All students (average)",
            [assignmentId]: assignment,
            [difficultyRating]: averageBy(WincData, assignment, difficultyRating),
            [enjoymentRating]: averageBy(WincData, assignment, enjoymentRating)
        }
        newArray.push(assignmentAverageObject)
    })
    return newArray
}

const averageRatingsArray = createAverageRatings()

const totalAssignmentsDataWithAverage = averageRatingsArray.concat(WincData)

const studentsUnsorted = totalAssignmentsDataWithAverage
    .map(item => item['Wie ben je?'])
    .filter((value, index, self) => self.indexOf(value) === index)

const studentsSorted = studentsUnsorted.sort()

export { totalAssignmentsDataWithAverage, studentsSorted }