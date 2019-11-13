import React from 'react';
import { IoIosAirplane } from 'react-icons/io';
import { MdExposureNeg1, MdExposurePlus1 } from 'react-icons/md';
import { Row, Col } from 'react-grid-system';

import Card from '../Card';

import './AirlineCard.css';

const AirlineCard = props => {
  const { flightId } = props;

  const ids = flightId.split('-');
  const series = ids[0];
  const number = ids[1];

  let nextNumber = ('00' + (parseInt(number) + 1)).slice(-3);
  nextNumber = nextNumber === '000' ? -1 : nextNumber;

  let previousNumber = ('00' + (parseInt(number) - 1)).slice(-3);
  previousNumber = previousNumber === '000' ? -1 : previousNumber;

  return (
    <Card
      header={
        <h2>Airline: {series}</h2>
      }
    >
      <Row gutterWidth={10} className="Card-container">
        <Col xs={6}>
          <a className="Button Button-ghost code" href={urlFormatter(series, previousNumber)} target='_blank' rel='noopener noreferrer'>
            <MdExposureNeg1 /><IoIosAirplane />{`${series}-${previousNumber}`}
          </a>
        </Col>
        <Col xs={6}>
          <a className="Button code" href={urlFormatter(series, nextNumber)} target='_blank' rel='noopener noreferrer'>
            <MdExposurePlus1 /><IoIosAirplane />{`${series}-${nextNumber}`}
          </a>
        </Col>
      </Row>
    </Card>
  );
};

const urlFormatter = (series, number) => {
  return `/flights/${series}-${number}.mp4`;
};

export default AirlineCard;
