import React, { Component } from 'react'
import employeeIcon from "./EmployeeIcon.png"
import "./Employee.css"


export default class EmployeeList extends Component {
  render() {
      return (
          <section className="employees">
            {
              this.props.employees.map(employee =>
                  <div key={employee.id} className="card">
                    <div className="card-body">
                      <h5 className="card-title">
                        <img src={employeeIcon} className="icon--employee" />
                        {employee.name}
                        <a href="#"
                          onClick={() => this.props.fireEmployee(employee.id)}
                          className="card-link">Fire Employee</a>
                      </h5>
                    </div>
                  </div>
              )
          }
          </section>
      )
  }
}