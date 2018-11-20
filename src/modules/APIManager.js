// Advanced Challenge Chapter 6
const remoteURL = "http://localhost:5002"

export default class APIManager {
  constructor(resource) {
    this.resource = resource
  }
  get(id) {
    /*
        Since the purpose of this module is to be used by
        all of the more specialized one, then the string
        of `animals` should not be hard coded here.
    */
    return fetch(`${remoteURL}/${this.resource}/${id}`).then(data => data.json())
  }

  all() {
    return fetch(`${remoteURL}/${this.resource}`).then(data => data.json())
  }

  delete(id) {
    return fetch (`${remoteURL}/${this.resource}/${id}`, {method: "DELETE"}).then(data => data.json())
  }

}