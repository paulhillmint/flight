import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import InfoCard from '../InfoCard';

import './Section.css';

const Section = () => {
  return (
    <Row gutterWidth={18}>
      <Col md={12}>
        <div className='Headline code'>
          <h2>Airline: SSNI</h2>
        </div>
      </Col>
      <Col md={3}>
        <InfoCard flightId='SSNI-649' isMini={true} />
      </Col>
      <Col md={3}>
        <InfoCard flightId='SSNI-648' isMini={true} />
      </Col>
      <Col md={3}>
        <InfoCard flightId='SSNI-658' isMini={true} />
      </Col>
      <Col md={3}>
        <InfoCard flightId='ABP-920' isMini={true} />
      </Col>
    </Row>
  );
};


export default Section;
