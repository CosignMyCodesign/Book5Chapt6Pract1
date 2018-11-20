import React, { Component } from 'react'
import ownerIcon from "./OwnerIcon.png"
import "./Owner.css"

export default class OwnerList extends Component {
  render() {
      return (
          <section className="owners">
          {
              this.props.owners.map(owner =>
                  <div key={owner.id} className="card">
                    <div className="card-body">
                      <h5 className="card-title">
                        <img src={ownerIcon} className="icon--owner" />
                        {owner.name}
                        <a href="#"
                          onClick={() => this.props.deleteOwner(owner.id)}
                          className="card-link">Remove Owner</a>
                        
                      </h5>
                      <p>{owner.phoneNumber}</p>
                    </div>
                  </div>
              )
          }
          </section>
      )
  }
}
