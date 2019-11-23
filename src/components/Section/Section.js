import React from 'react';
import { Row, Col } from 'react-grid-system';

import InfoCard from '../InfoCard';

import './Section.css';

const Section = props => {
  const { series, startNumber, flightCount } = props;

  const renderCells = () => {
    let list = [];
    for (let i = 0; i < flightCount ; i++) {
      list.push(`${series}-${startNumber - i}`);
    }
    return list.map(flightId => (
      <Cell flightId={flightId} key={flightId} />
    ));
  };

  return (
    <Row gutterWidth={18}>
      <Col md={12}>
        <Headline title={`${series} Airline`} />
      </Col>
      {renderCells()}
    </Row>
  );
};

const Headline = props => {
  const { title } = props;
  return (
    <div className='Headline code'>
      <h2>{title}</h2>
    </div>
  );
};

const Cell = props => {
  const { flightId } = props;
  return (
    <Col md={3}>
      <InfoCard flightId={flightId} isMini={true} />
    </Col>
  );
};

export default Section;
