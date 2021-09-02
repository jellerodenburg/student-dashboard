import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import RouteList from './components/RouteList'
import { Switch } from "react-router-dom";

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showDifficulty: true,
      showEnjoyment: true
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleRoute = this.handleRoute.bind(this)
  }
  handleChange(event) {
    const { name, value, type, checked } = event.target
    if (type === "checkbox") {
      this.setState({ [name]: checked })
    } else {
      this.setState({ [name]: value })
    }
  }

  handleRoute(name) {
    this.setState({ selectedStudent: name })
  }

  render() {
    return (
      <div>

        <Header />

        <Switch>
          <RouteList
            data={this.state}
            handleChange={this.handleChange}
            handleRoute={this.handleRoute}
          />
        </Switch>

        <Footer />
      </div >
    )
  }
}

export default App