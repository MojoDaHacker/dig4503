import {Component} from 'react'
import { Form, Button, ListGroup } from 'react-bootstrap'
import Item from './MarketItem'

class Market extends Component {
  constructor(props){
    super(props)
    this.state = {      /*to create state variables*/
      count: 0,
      nameInput: "",
      ageInput: "",
      list: []
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
  }
  onInputChange(input, e) {
    input === 'name' ? this.setState({nameInput: e.target.value}) : this.setState({ageInput: e.target.value})
  }
  onSubmit(e) {
    e.preventDefault()
    const list = this.state.list
    const name = this.state.nameInput
    const age = this.state.ageInput
    
    this.setState({
      nameInput: "",
      ageInput: "",
      list: [...list, {name: name, age: age}]
    })

  }

  render() {
    return (
      <>
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" onChange={(e) => this.onInputChange('name', e)} value={this.state.nameInput} />
          </Form.Group>
          <Form.Group controlId="formBasicAge">
            <Form.Label>Age</Form.Label>
            <Form.Control type="text" placeholder="Age"  onChange={(e) => this.onInputChange('age', e)} value={this.state.ageInput} />
          </Form.Group>
          <Button variant="primary" type="submit">Submit</Button>
        </Form>
        <ListGroup>
          {this.state.list.map((val, i) => (
            <ListGroup.Item key={i}>
              <div>{val.name}</div>
              <div>{val.age}</div>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <div>
          <Item count={this.state.count}/>      {/*to show item count*/}
          <button onClick={() => this.setState(({count}) => ({count: count + 1}))}>ADD ITEM</button>  {/*can use function in handler that passes in previous state*/}
        </div>
      </>
    )
  }
}

export default Market;
