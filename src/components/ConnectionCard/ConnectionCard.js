import React from 'react';
import { IoIosAirplane } from 'react-icons/io';
import { MdExposureNeg1, MdExposurePlus1 } from 'react-icons/md';
import { Row, Col } from 'react-grid-system';

import Card from '../Card';

import './ConnectionCard.css';

const ConnectionCard = props => {
  const { flightId } = props;

  const ids = flightId.split('-');
  const series = ids[0];
  const number = ids[1];

  let nextNumber = ('00' + (parseInt(number) + 1)).slice(-3);
  nextNumber = nextNumber === '000' ? -1 : nextNumber;

  let previousNumber = ('00' + (parseInt(number) - 1)).slice(-3);
  previousNumber = previousNumber === '000' ? -1 : previousNumber;

  const nextId = `${series}-${nextNumber}`;
  const previousId = `${series}-${previousNumber}`;

  return (
    <Card
      header={
        <h2>Connecting Flights</h2>
      }
    >
      <Row gutterWidth={10} className="Card-container">
        <Col xs={6} md={12} lg={6}>
          <a className="Button Button-ghost code ga-flight" id={previousId} href={urlFormatter(previousId)} target='_blank' rel='noopener noreferrer'>
            <MdExposureNeg1 /><IoIosAirplane />{previousId}
          </a>
        </Col>
        <Col xs={6} md={12} lg={6}>
          <a className="Button code ga-flight" id={nextId} href={urlFormatter(nextId)} target='_blank' rel='noopener noreferrer'>
            <MdExposurePlus1 /><IoIosAirplane />{nextId}
          </a>
        </Col>
      </Row>
    </Card>
  );
};

const urlFormatter = identifier => {
  return `/flights/${identifier}.mp4`;
};

export default ConnectionCard;
