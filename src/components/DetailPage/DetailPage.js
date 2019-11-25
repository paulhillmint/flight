import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';

import { urlFinder, flightURLFormatter, airlineURLFormatter } from '../../utils/urlUtil';

import InfoCard from '../InfoCard';
import VideoCard from '../VideoCard';
import LinkCard from '../LinkCard';

import './DetailPage.css';

const DetailPage = () => {
  let history = useHistory();
  let { flightId } = useParams();
  flightId = flightId.replace('.mp4', '').toUpperCase();
  const urls = urlFinder(flightId);
  const previousId = previousFlightId(flightId);
  const series = flightId.split('-')[0];

  useEffect(() => {
    console.log(history);
    // history.replace('/flights/' + flightId);
  });

  return (
    <Container>
      <Row gutterWidth={18}>
        <Col md={4}>
          <InfoCard flightId={flightId} />
          <LinkCard type='flight' id={previousId} title={`View Connecting Flight ${previousId}`} url={flightURLFormatter(previousId)} />
          <LinkCard type='airline' id={series} title={`View Airline ${series}`} url={airlineURLFormatter(series)} />
        </Col>
        <Col md={8}>
          <VideoCard urls={urls} />
        </Col>
      </Row>
    </Container>
  );
};

const previousFlightId = flightId => {
  const ids = flightId.split('-');
  const series = ids[0];
  const number = ids[1];

  // let nextNumber = ('00' + (parseInt(number) + 1)).slice(-3);
  // nextNumber = nextNumber === '000' ? -1 : nextNumber;

  let previousNumber = ('00' + (parseInt(number) - 1)).slice(-3);
  previousNumber = previousNumber === '000' ? -1 : previousNumber;

  // const nextId = `${series}-${nextNumber}`;
  const previousId = `${series}-${previousNumber}`;

  return previousId;
}

export default DetailPage;
