import React from 'react';
import { Row, Col } from 'react-grid-system';
import { FiList } from 'react-icons/fi';

import { airlineURLFormatter } from '../../utils/urlUtil';
import data from '../../data';

import Headline from '../Headline';
import Card from '../Card';
import WebLink from '../WebLink';

import './AllAirlinesSection.css';

const AllAirlinesSection = () => {
  const renderAirlineCards = () => {
    return data.airlines.map(a => (
      <AirlineListCard title={`${a.category} Airlines`} list={a.list} key={a.category} />
    ));
  };

  return (
    <div>
      <Headline title={`All Airlines`} />
      <Row gutterWidth={18}>
        <Col lg={12}>
          {renderAirlineCards()}
        </Col>
      </Row>
    </div>
  );
};

const AirlineListCard = props => {
  const { title, list } = props;

  const renderAirlineLinks = () => {
    return list.map(a => (
      <WebLink url={airlineURLFormatter(a.series)} title={`Airline ${a.series}`} icon={<FiList />} number={a.startNumber} key={a.series} />
    ));
  };

  return (
    <Card
      header={
        <h2>{title}</h2>
      }
      footer={
        renderAirlineLinks()
      }
    >
      <div className='Card-line'></div>
    </Card>
  );
};

export default AllAirlinesSection;
