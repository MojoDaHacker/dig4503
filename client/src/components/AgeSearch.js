import React from 'react'

export default class AgeSearch extends React.Component {

  getRecordFromAge(event) {
    event.preventDefault()

    let reporting = document.querySelector('#reportingArea')
    let ageForm = document.querySelector('#ageForm')
    let value = event.target[0].value

    console.log(reporting)

    fetch(`/age/${value}`)
    .then(res => res.json())
    .then(data => data.name ? reporting.innerHTML = data.name : reporting.innerHTML = data.error)
    .catch(err => console.log(err))

    ageForm.value = ""
  }

  render() {

    return (
      <div>
        <form id="ageForm" onSubmit={this.getRecordFromAge}>
          <input name="age" placeholder="Enter age..." type="number" />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}