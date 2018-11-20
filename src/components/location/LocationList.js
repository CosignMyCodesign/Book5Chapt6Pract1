import React, { Component } from 'react'
import LocationIcon from "./LocationIcon.png"
import "./Location.css"


export default class LocationList extends Component {
  render() {
      return (
          <section className="locations">
          {
              this.props.locations.map(location =>
                  <div key={location.id} className="card">
                    <div className="card-body">
                      <h5 className="card-title">
                        <img src={LocationIcon} className="icon--location" />
                          <em>{location.name}</em>
                          <br></br>
                          {location.address}
                      </h5>
                    </div>
                  </div>
              )
          }
          </section>
      )
  }
}

