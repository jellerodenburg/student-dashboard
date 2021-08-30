import React from 'react'
import './App.css'
import Header from './components/Header'
import GraphContainer from './components/GraphContainer'
import Footer from './components/Footer'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedStudent: 'All students (average)',
      showDifficulty: true,
      showEnjoyment: true
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    const { name, value, type, checked } = event.target
    type === "checkbox" ?
      this.setState({ [name]: checked })
      :
      this.setState({ [name]: value })
  }

  render() {
    return (
      <div>
        <Header
          handleChange={this.handleChange}
          data={this.state}
        />
        <GraphContainer
          data={this.state}
        />
        <Footer />
      </div >
    )
  }
}

export default App