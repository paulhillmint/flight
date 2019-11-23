import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';

import { urlFinder } from '../../utils/urlUtil';

import InfoCard from '../InfoCard';
import VideoCard from '../VideoCard';
import ConnectionCard from '../ConnectionCard';

import './DetailPage.css';

const DetailPage = () => {
  let history = useHistory();
  let { flightId } = useParams();
  flightId = flightId.replace('.mp4', '').toUpperCase();
  const urls = urlFinder(flightId);

  useEffect(() => {
    console.log(history);
    // history.replace('/flights/' + flightId);
  });

  return (
    <Container>
      <Row gutterWidth={18}>
        <Col md={4}>
          <InfoCard flightId={flightId} />
          <ConnectionCard flightId={flightId} />
        </Col>
        <Col md={8}>
          <VideoCard urls={urls} />
        </Col>
      </Row>
    </Container>
  );
};

export default DetailPage;
