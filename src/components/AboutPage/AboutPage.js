import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import Card from '../Card';

import './AboutPage.css';

const AboutPage = () => {
  return (
    <Container>
      <Row justify='center'>
        <Col lg={6}>
          <Card
            header={
              <h2>About ✈Flight</h2>
            }
            footer={
              <div className='code'>
                <p>This is a personal use website to explore JAV "flights". </p>
                <p>Copyright © 2019 Vulopus. All Rights Reserved. All other trademarks and copyrights are the property of their respective holders.</p>
              </div>
            }
          >
            <div className='Card-line'></div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
