import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';
import { IoIosAirplane } from 'react-icons/io';
import { MdLabel, MdExposurePlus1 } from 'react-icons/md';

import { urlFinder, airlineURLFormatter } from '../../utils/urlUtil';

import Section from '../Section';
import Headline from '../Headline';
import InfoCard from '../InfoCard';
import Card from '../Card';
import WebLink from '../WebLink';

import './ListPage.css';

const airlineList = [ 'SSNI', 'ABP', 'IPX' ];

const ListPage = () => {
  let { airlineId } = useParams();
  airlineId = airlineId.toUpperCase();
  if (airlineList.includes(airlineId)) {
    // Airline page
  } else {
    // Index page
  }

  return (
    <Container>
      <Row gutterWidth={18}>
        <Col md={8}>
          <Section series={airlineId} startNumber={658} flightCount={120} />
        </Col>
        <Col md={4}>
          <Headline title={`All Airlines`} />
          <Row gutterWidth={18}>
            <Col lg={12}>
              <AirlineListCard title='Legend Airlines' list={[ 'SSNI', 'IPX', 'ABP' ]} />
              <AirlineListCard title='Fashion Airlines' list={[ 'STARS', 'PPPD', 'WANZ', 'MIDE' ]} />
              <AirlineListCard title='Classic Airlines' list={[ 'SNIS', 'SOE', 'IPZ', 'IPTD', 'ABS' ]} />
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
    return list.map(airlineId => (
      <WebLink url={airlineURLFormatter(airlineId)} title={`Airline ${airlineId}`} icon={<MdLabel />} />
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
