import React from 'react'

export default class Homepage extends React.Component{
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props)
  }
  render(){
    return this.props.firstName
  }
}