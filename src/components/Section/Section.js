import React from 'react';
import { Row, Col } from 'react-grid-system';
import { MdLabel, MdExposurePlus1 } from 'react-icons/md';

import { urlFinder, airlineURLFormatter } from '../../utils/urlUtil';

import InfoCard from '../InfoCard';
import Headline from '../Headline';
import Card from '../Card';

import './Section.css';

const Section = props => {
  const { series, startNumber, flightCount, hasMore } = props;

  const renderCells = () => {
    let list = [];
    for (let i = 0; i < flightCount ; i++) {
      list.push(`${series}-${('00' + (startNumber - i)).slice(-3)}`);
    }
    return list.map(flightId => (
      <Cell flightId={flightId} key={flightId} />
    ));
  };

  return (
    <div>
      <Headline title={`Airline ${series}`} />
      <Row gutterWidth={18}>
        {renderCells()}
      </Row>
      {hasMore && (<More series={series} number={startNumber} />)}
    </div>
  );
};

const Cell = props => {
  const { flightId } = props;
  return (
    <Col xs={4} lg={3}>
      <InfoCard flightId={flightId} isMini={true} />
    </Col>
  );
};

const More = props => {
  const { series, number } = props;
  return (
    <a className='More ga-airline' id={series} href={airlineURLFormatter(series)} target='_blank' rel='noopener noreferrer'>
      <Card>
        {`View All ${number} Flights of Airline ${series}`}
      </Card>
    </a>
  )
}

export default Section;
