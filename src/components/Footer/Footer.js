import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col sm={12}>
            <div className='Footer-title code'>&copy; 2019 Crafted by Vulopus</div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
