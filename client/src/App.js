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
            <AgeSearch />
            <NameSearch />
            <ReportingArea />
          </Col>
          <Col xs={4}>
            <RecentSearches />
          </Col>
        </Row>
      </Container>
    </RecentRecords>
  );
}
