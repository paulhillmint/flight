import React, { useState } from 'react';
import { FaBus, FaCat } from 'react-icons/fa';
import { FiLink, FiChevronRight } from 'react-icons/fi';
import { IoIosWarning } from 'react-icons/io';
import { MdMovieCreation } from 'react-icons/md';

import { urlFinder, flightURLFormatter } from '../../utils/urlUtil';

import Card from '../Card';

import './WebLink.css';

const WebLink = props => {
  const { url, title } = props;
  let { icon } = props;
  if (!icon) icon = (<FiLink />);
  return (
    <a className='WebLink' href={url} target='_blank' rel='noopener noreferrer'>
      <span className='WebLink-icon'>{icon}</span>
      <span className='WebLink-title'>{title}</span>
      <span className='WebLink-arrow'><FiChevronRight /></span>
    </a>
  );
};

export default WebLink;
