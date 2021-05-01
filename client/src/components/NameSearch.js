import React, { useContext } from 'react'
import { Form, Button } from 'react-bootstrap'
import { RecordsContext } from '../App.js';

export default function NameSearch(props) {
  const [records, setRecords] = useContext(RecordsContext)
  
  function getRecordFromName(event) {
    event.preventDefault()

    let reporting = document.querySelector('#reportingArea')
    let nameForm = document.querySelector('#nameForm')
    let value = event.target[0].value

    fetch(`/employees/${value}`)
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

    nameForm.value = ""
  }

  return (
    <div>
      <Form id="nameForm" onSubmit={getRecordFromName}>
        <Form.Control name="name" placeholder="Enter name..." type="text" />
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  )
}