import React from 'react';

import './Headline.css';

const Headline = props => {
  const { title } = props;
  return (
    <div className='Headline code'>
      <h2>✈{title}</h2>
    </div>
  );
};

export default Headline;
