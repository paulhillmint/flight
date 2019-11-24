import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';
import { IoIosAirplane } from 'react-icons/io';
import { MdLabel, MdExposurePlus1 } from 'react-icons/md';

import { urlFinder, airlineURLFormatter } from '../../utils/urlUtil';
import data from '../../data';

import Section from '../Section';
import Headline from '../Headline';
import InfoCard from '../InfoCard';
import Card from '../Card';
import WebLink from '../WebLink';

import './ListPage.css';

const ListPage = () => {
  let { airlineId } = useParams();
  airlineId = airlineId.toUpperCase();

  let airline;
  data.airlines.some(g => {
    airline = g.list.find(a => a.series === airlineId);
    return airline !== undefined;
  });
  console.log(airline);
  if (!airline) {
    // Go to index page
  }

  const renderAirlineCards = () => {
    return data.airlines.map(a => (
      <AirlineListCard title={`${a.category} Airlines`} list={a.list} key={a.category} />
    ));
  };

  return (
    <Container>
      <Row gutterWidth={18}>
        <Col md={8}>
          <Section series={airlineId} startNumber={airline.startNumber} flightCount={airline.startNumber} />
        </Col>
        <Col md={4}>
          <Headline title={`All Airlines`} />
          <Row gutterWidth={18}>
            <Col lg={12}>
              {renderAirlineCards()}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

const AirlineListCard = props => {
  const { title, list } = props;

  const renderAirlines = () => {
    return list.map(a => (
      <WebLink url={airlineURLFormatter(a.series)} title={`Airline ${a.series}`} icon={<MdLabel />} key={a.series} />
    ));
  };

  return (
    <Card
      header={
        <h2>{title}</h2>
      }
      footer={
        renderAirlines()
      }
    >
      <div className='Card-line'></div>
    </Card>
  );
};

export default ListPage;
