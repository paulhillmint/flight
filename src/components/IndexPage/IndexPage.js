import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import data from '../../data';

import Section from '../Section';
import Headline from '../Headline';
import InfoCard from '../InfoCard';
import AllAirlinesSection from '../AllAirlinesSection';

import './IndexPage.css';

const IndexPage = () => {
  const renderAirline = () => {
    const list = data.airlines[0].list.concat(data.airlines[1].list);
    return list.map(a => {
      if (a.indexCount && a.indexCount > 0) {
        return (<Section series={a.series} startNumber={a.startNumber} flightCount={a.indexCount} hasMore={true} key={a.series} />);
      }
    });
  };

  const renderTodayCells = () => {
    const list = data.specials;
    return list.map(flightId => (
      <Col lg={12} key={flightId}>
        <InfoCard flightId={flightId} isMini={true} isFull={true} />
      </Col>
    ));
  };

  return (
    <Container>
      <Row gutterWidth={18}>
        <Col md={8}>
          {renderAirline()}
        </Col>
        <Col md={4}>
          <Headline title={`Today's Special`} />
          <Row gutterWidth={18}>
            {renderTodayCells()}
          </Row>
          <AllAirlinesSection />
        </Col>
      </Row>
    </Container>
  );
};

export default IndexPage;
