import React from 'react'

export default class NameSearch extends React.Component {

  getRecordFromName(event) {
    event.preventDefault()

    let reporting = document.querySelector('#reportingArea')
    let nameForm = document.querySelector('#nameForm')
    let value = event.target[0].value

    fetch(`/employees/${value}`)
    .then(res => res.json())
    .then(data => data.age ? reporting.innerHTML = data.age : reporting.innerHTML = data.error)
    .catch(err => console.log(err))

    nameForm.value = ""
  }

  render() {
    return (
      <div>
        <form id="nameForm" onSubmit={this.getRecordFromName}>
          <input name="name" placeholder="Enter name..." type="text" />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}