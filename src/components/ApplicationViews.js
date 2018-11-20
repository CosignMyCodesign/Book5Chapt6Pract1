import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import AnimalManager from "../modules/AnimalManager"
import EmployeeManager from "../modules/EmployeeManager"
import LocationManager from "../modules/LocationManager"
import OwnerManager from "../modules/OwnerManager"


export default class ApplicationViews extends Component {
// Need to start with empty arrays in state
    state = {
        employees: [],
        locations: [],
        animals: [],
        owners: []
    }
// componentDidMount() is invoked immediately after a component is mounted. Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
    componentDidMount() {
      const newState = {}
  
            AnimalManager.getAll().then(allAnimals => {
              this.setState({
                  animals: allAnimals
              })
          })
            EmployeeManager.getAll().then(allEmployees => {
              this.setState({
                  employees: allEmployees
              })
          })
            OwnerManager.getAll().then(allOwners => {
              this.setState({
                  owners: allOwners
              })
          })
            LocationManager.getAll().then(allLocations => {
              this.setState({
                  locations: allLocations
              })
          })
          .then(() => this.setState(newState))
          }

// Chapter 5 addition
// Method to delete an animal
  //     deleteAnimal = id => {
  //     return fetch(`http://localhost:5002/animals/${id}`, {
  //         method: "DELETE"
  //     })
  //     .then(e => e.json())
  //     .then(() => fetch(`http://localhost:5002/animals`))
  //     .then(e => e.json())
  //     .then(animals => this.setState({
  //         animals: animals
  //     })
  //   )
  // }
  //  Challenge chapter 6 to delete animal
      deleteAnimal = (id) => {
        return AnimalManager.removeAndList(id)
        .then(animals => this.setState({
            animals: animals
          })
        )
      }
// Method to remove an owner
      removeOwner = id => {
        return fetch(`http://localhost:5002/owners/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/owners`))
        .then(e => e.json())
        .then(owners => this.setState({
            owners: owners
        })
      )
      }
// Method to fire an employee
      fireEmployee = id => {
        return fetch(`http://localhost:5002/employees/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/employees`))
        .then(e => e.json())
        .then(employees => this.setState({
            employees: employees
        })
      )
      }
// Once the data is fetched we need to render that data
    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalList
                     animals={this.state.animals}
                     deleteAnimal={this.deleteAnimal} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList 
                    employees={this.state.employees}
                    fireEmployee={this.fireEmployee} />
                }} />
                <Route path="/owners" render={(props) => {
                    return <OwnerList 
                    owners={this.state.owners}
                    removeOwner={this.removeOwner} />
                }} />
            </React.Fragment>
        )
    }
}

