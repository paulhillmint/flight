import React, { useState } from 'react';

import Card from '../Card';

import './VideoCard.css';

const VideoCard = props => {
  const { urls } = props;
  const { previewURL, bonusURL } = urls;
  const renderVideos = () => {
    return sourceURLs(previewURL).map((url, i) => (<source key={i} src={url} type='video/mp4' />));
  };

  return (
    <div>
      <Card
        header={
          <h2>Preview Video</h2>
        }
      >
        <video controls>
          {renderVideos()}
          Your browser does not support HTML5 video.
        </video>
      </Card>
      {bonusURL && <BonusCard url={bonusURL} />}
    </div>
  );
};

const BonusCard = props => {
  const { url } = props;
  const [ bonusLoaded, setBonusLoaded ] = useState(false);
  const handleBonusLoad = e => {
    setBonusLoaded(true);
  };
  const handleBonusError = e => {
    setBonusLoaded(false);
  };

  return (
    <Card
      hidden={!bonusLoaded}
      header={
        <h2>Preview Video (Bonus)</h2>
      }
    >
      <video controls onCanPlay={handleBonusLoad} onError={handleBonusError}>
        <source src={url} type='video/mp4' />
        Your browser does not support HTML5 video.
      </video>
    </Card>
  );
};

const sourceURLs = url => {
  let urls = [ url ];
  const dmbw = 'dmb_w';
  if (url.includes(dmbw)) {
    const dmwURL = url.replace(dmbw, 'dm_w');
    const dmsURL = url.replace(dmbw, 'dm_s');
    const dmsURLShort = dmsURL.replace(/([a-z]{3})00(\d{3})/g, '$1$2');
    urls = [ url, dmwURL, dmsURL, dmsURLShort ];
  } else if (url.includes('mgstage')) {
    urls.push(url.replace('.mp4', '_35a.mp4'));
    urls.push(url.replace('.mp4', '_35b.mp4'));
    urls.push(url.replace('.mp4', '_35.mp4'));
  }
  return urls;
};

export default VideoCard;
