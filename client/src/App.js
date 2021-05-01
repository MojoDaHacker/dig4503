import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RecentSearches from "./components/RecentSearches";
import AgeSearch from "./components/AgeSearch";
import NameSearch from "./components/NameSearch";
import ReportingArea from "./components/ReportingArea";

export const RecordsContext = React.createContext()

function RecentRecords(props){
  const [records, setRecords] = useState([])

  return <RecordsContext.Provider value={[records, setRecords]} children={props.children} />
}

export default function App() {

  return (
    <RecentRecords>
      <Container className="App mt-3">
        <Row>
          <Col xs={8}>
            <AgeSearch /> {/*component to search by age*/}
            <NameSearch /> {/*component to search by name*/}
            <ReportingArea /> {/*component to report record*/}
          </Col>
          <Col xs={4}>
            <RecentSearches />   {/*component to list searches*/}
          </Col>
        </Row>
      </Container>
    </RecentRecords>
  );
}
