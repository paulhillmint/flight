import React from 'react';
import { Row, Col } from 'react-grid-system';

import data from '../../data';

import Headline from '../Headline';
import InfoCard from '../InfoCard';

import './TodaysSpecialSection.css';

const TodaysSpecialSection = () => {
  const renderTodayCells = () => {
    const list = data.specials;
    return list.map(flightId => (
      <Col lg={12} key={flightId}>
        <InfoCard flightId={flightId} isMini={true} isFull={true} />
      </Col>
    ));
  };

  return (
    <div className='Section-cont'>
      <Headline title={`Today's Special`} />
      <Row gutterWidth={18}>
        {renderTodayCells()}
      </Row>
    </div>
  );
};

export default TodaysSpecialSection;
