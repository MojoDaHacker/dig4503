import React, { useContext } from 'react'
import { Form, Button } from 'react-bootstrap'
import { RecordsContext } from '../App.js';

export default function AgeSearch(props) {
  const [records, setRecords] = useContext(RecordsContext)

  function getRecordFromAge(event) {
    event.preventDefault()

    let reporting = document.querySelector('#reportingArea')
    let ageForm = document.querySelector('#ageForm')
    let value = event.target[0].value

    fetch(`/age/${value}`)
    .then(res => res.json())
    .then(data => {
      if(data.name){
        reporting.innerHTML = data.name
        if(!records.includes(data)) setRecords([...records, data])
      } else {
        reporting.innerHTML = data.error
      }
    })
    .catch(err => console.log(err))

    ageForm.value = ""
  }

  return (
    <div>
      <Form id="ageForm" onSubmit={getRecordFromAge}>
        <Form.Control name="age" placeholder="Enter age..." type="number" />
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  )
}