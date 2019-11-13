import React from 'react';

import './Card.css';

const hiddenStyles = {
  visibility: 'hidden'
}

const Card = props => {
  const { hidden, header, footer, children } = props;
  return (
    <div className='Card' style={hidden ? hiddenStyles : {}}>
      {
        header && (
          <div className='Card-header code'>
            {header}
          </div>
        )
      }
      {children}
      {
        footer && (
          <div className='Card-footer'>
            {footer}
          </div>
        )
      }
    </div>
  );
};

export default Card;
