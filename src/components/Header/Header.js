import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { FaRegStar } from 'react-icons/fa';

import './Header.css';

const Header = () => {
  return (
    <header>
      <Container>
        <Row>
          <Col sm={4}>
            <div className='Header-title code'>
              <a className="ga-nav" id="index" href='/' target='_blank' rel='noopener noreferrer'>
                ✈Flight
              </a>
            </div>
          </Col>
          <Col sm={8}>
            <div className='Header-nav code'>
              <a className="ga-nav" id="flights" href='/' target='_blank' rel='noopener noreferrer'>
                Hall
              </a>
              <a className="ga-nav" id="flights" href='/about' target='_blank' rel='noopener noreferrer'>
                About
              </a>
              <a className="ga-nav" id="flights" href='/' target='_blank' rel='noopener noreferrer'>
                <FaRegStar />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
