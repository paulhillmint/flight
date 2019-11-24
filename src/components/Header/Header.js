import React from 'react';
import { Container, Row, Col, Hidden } from 'react-grid-system';
import { FaRegStar } from 'react-icons/fa';

import './Header.css';

const Header = () => {
  const handleFav = e => {
    const pageTitle = document.title;
    const pageURL = document.location;
    try {
      // Internet Explorer
      eval("window.external.AddFa-vorite(pageURL, pageTitle)".replace(/-/g,''));
    }
    catch (e) {
      try {
        // Mozilla Firefox
        window.sidebar.addPanel(pageTitle, pageURL, "");
      }
      catch (e) {
        // Opera, Chrome, Safari, others
        alert('Please press ' + (navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? '⌘Cmd' : 'Ctrl') + '+D to bookmark this page.');
      }
    }
    return false;
  }

  return (
    <header>
      <Container>
        <Row>
          <Col xs={1} sm={3}>
            <div className='Header-title code'>
              <a className="ga-nav" id="index" href='/' target='_blank' rel='noopener noreferrer'>
                ✈<Hidden xs>Flight</Hidden>
              </a>
            </div>
          </Col>
          <Col xs={11} sm={9}>
            <div className='Header-nav code'>
              <a className="ga-nav" id="flights" href='/' target='_blank' rel='noopener noreferrer'>
                Flights
              </a>
              &nbsp;&nbsp;/
              <a className="ga-nav" id="airlines" href='/airlines' target='_blank' rel='noopener noreferrer'>
                Airlines
              </a>
              &nbsp;&nbsp;/
              <a className="ga-nav" id="about" href='/about' target='_blank' rel='noopener noreferrer'>
                About
              </a>
              &nbsp;&nbsp;/
              <a className="ga-nav" id="fav" onClick={handleFav}>
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
