import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import Section from '../Section';
import Headline from '../Headline';
import InfoCard from '../InfoCard';

import './IndexPage.css';

const IndexPage = () => {
  const renderAirline = () => {
    const list = [
      {
        series: 'SSNI',
        startNumber: '658',
        flightCount: 16
      },
      {
        series: 'ABP',
        startNumber: '933',
        flightCount: 8
      },
      {
        series: 'IPX',
        startNumber: '421',
        flightCount: 16
      }
    ];
    return list.map(({ series, startNumber, flightCount }) => (
      <Section series={series} startNumber={startNumber} flightCount={flightCount} key={series} />
    ));
  };

  const renderTodayCells = () => {
    const list = [ 'SSNI-643', 'IPX-415', 'SSNI-658' ];
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
        </Col>
      </Row>
    </Container>
  );
};

export default IndexPage;
