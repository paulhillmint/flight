import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';

import data from '../../data';

import Section from '../Section';
import AllAirlinesSection from '../AllAirlinesSection';

import './ListPage.css';

const ListPage = () => {
  let history = useHistory();

  let { airlineId } = useParams();
  if (airlineId) {
    airlineId = airlineId.toUpperCase();
  }

  let airline;
  data.airlines.some(g => {
    airline = g.list.find(a => a.series === airlineId);
    return airline !== undefined;
  });
  console.log(airline);
  if (airlineId && !airline) {
    history.replace('/airlines');
  }

  const renderAirline = () => {
    if (airline) {
      return (<Section series={airlineId} startNumber={airline.startNumber} flightCount={airline.startNumber} />);
    } else {
      const list = data.airlines[0].list.concat(data.airlines[1].list);
      return list.map(a => (
        <Section series={a.series} startNumber={a.startNumber} flightCount={4} hasMore={true} key={a.series} />
      ));
    }
  };

  return (
    <Container>
      <Row gutterWidth={18}>
        <Col md={8}>
          {renderAirline()}
        </Col>
        <Col md={4}>
          <AllAirlinesSection />
        </Col>
      </Row>
    </Container>
  );
};

export default ListPage;
