import React from 'react';
import { IoIosAirplane } from 'react-icons/io';
import { FiList } from 'react-icons/fi';

import Card from '../Card';

import './LinkCard.css';

const LinkCard = props => {
  const { type, id, title, url } = props;
  const icon = type === 'airline' ? <FiList /> : <IoIosAirplane />;
  return (
    <a className={'LinkCard ga-' + type} id={id} href={url} target='_blank' rel='noopener noreferrer'>
      <Card>{icon}<span>{title}</span></Card>
    </a>
  )
}

export default LinkCard;
