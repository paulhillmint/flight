import React from 'react';
import { FiLink, FiChevronRight } from 'react-icons/fi';

import './WebLink.css';

const WebLink = props => {
  const { url, title, number, classes, id } = props;
  let { icon } = props;
  if (!icon) icon = (<FiLink />);
  return (
    <a className={'WebLink' + (classes === undefined ? '' : classes)} id={id} href={url} target='_blank' rel='noopener noreferrer'>
      <span className='WebLink-icon'>{icon}</span>
      <span className='WebLink-title'>{title}</span>
      {number > 0 && (<span className='WebLink-number'>{number}</span>)}
      <span className='WebLink-arrow'><FiChevronRight /></span>
    </a>
  );
};

export default WebLink;
