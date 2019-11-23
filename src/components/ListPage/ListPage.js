import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import Section from '../Section';
import InfoCard from '../InfoCard';

import './ListPage.css';

const ListPage = () => {
  return (
    <Container>
      <Row gutterWidth={18}>
        <Col md={8}>
          <Section series='SSNI' startNumber='658' flightCount={16} />
          <Section series='ABP' startNumber='933' flightCount={8} />
          <Section series='IPX' startNumber='421' flightCount={16} />
        </Col>
        <Col md={4}>
          <InfoCard flightId='ABP-920' />
        </Col>
      </Row>
    </Container>
  );
};

export default ListPage;
