import React, {useContext} from 'react'
import { Card, ListGroup, Badge } from 'react-bootstrap'
import { RecordsContext } from '../App.js';

const RecentRecords = props => {
  const [records] = useContext(RecordsContext)
  const memberStatus = ['New Member', 'Existing Member']
  return (
    <Card style={{minHeight: '75vh'}} className="overflow-auto">
      <Card.Header>Recent Searches</Card.Header>
      <ListGroup>
        {records.map((val, i) => (
          <ListGroup.Item key={i}>
            <div>{val.name} : {val.age}</div>
            <Badge variant='danger'>{memberStatus[Math.round(Math.random() * (2 - 0) + 0)]}</Badge>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  )
}
export default RecentRecords