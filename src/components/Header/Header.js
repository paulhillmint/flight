import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import './Header.css';

const Header = () => {
  return (
    <header>
      <Container>
        <Row>
          <Col sm={4}>
            <div className='Header-title code'>✈Flight</div>
          </Col>
          <Col sm={8}>
            <div className='Header-nav'>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
