import {Component} from 'react'
import Item from './MarketItem'

class Market extends Component {
  constructor(props){
    super(props)
    this.state = {      /*to create state variables*/
      count: 0
    }
  }
  render() {
    return (
      <div>
        <Item count={this.state.count}/>      {/*to show item count*/}
        <button onClick={() => this.setState(({count}) => ({count: count + 1}))}>ADD ITEM</button>  {/*can use function in handler that passes in previous state*/}
      </div>
    )
  }
}

export default Market;
