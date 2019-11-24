import React from 'react';
import { Row, Col } from 'react-grid-system';

import InfoCard from '../InfoCard';
import Headline from '../Headline';

import './Section.css';

const Section = props => {
  const { series, startNumber, flightCount } = props;

  const renderCells = () => {
    let list = [];
    for (let i = 0; i < flightCount ; i++) {
      list.push(`${series}-${('00' + (startNumber - i)).slice(-3)}`);
    }
    return list.map(flightId => (
      <Cell flightId={flightId} key={flightId} />
    ));
  };

  return (
    <div>
      <Headline title={`Airline ${series}`} />
      <Row gutterWidth={18}>
        {renderCells()}
      </Row>
    </div>
  );
};

const Cell = props => {
  const { flightId } = props;
  return (
    <Col xs={4} lg={3}>
      <InfoCard flightId={flightId} isMini={true} />
    </Col>
  );
};

export default Section;
