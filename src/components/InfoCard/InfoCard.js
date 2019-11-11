import React from 'react';
import { FaBus, FaCat } from 'react-icons/fa';
import { FiLink, FiChevronRight } from 'react-icons/fi';
import { IoIosWarning } from 'react-icons/io';
import { MdMovieCreation } from 'react-icons/md';

import Card from '../Card';

import './InfoCard.css';

const InfoCard = props => {
  const { flightId, urls, handleCoverLoad, handleCoverError } = props;
  const { coverURL, makerURL, torrentURL, busURL } = urls;

  return (
    <Card
      header={
        <h2>Flight: {flightId.toUpperCase()}</h2>
      }
      footer={
        <div>
          {makerURL && <WebLink url={makerURL} title={makerName(makerURL)} icon={<MdMovieCreation />} />}
          <WebLink url={torrentURL} title="Torrent Kitty" icon={<FaCat />} />
          <WebLink url={busURL} title="JavBus" icon={<FaBus />} />
        </div>
      }
    >
      <img src={coverURL} alt='cover' onLoad={handleCoverLoad} onError={handleCoverError} />
    </Card>
  );
};

const ErrorCard = props => {
  const { flightId } = props;
  return (
    <Card
      header={
        <h2>Flight: {flightId.toUpperCase()}</h2>
      }
    >
      <div className='ErrorCard-sign'>
        <IoIosWarning className='icon' />
        <h3>Flight Not Found</h3>
      </div>
    </Card>
  );
};

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

const makerName = url => {
  const regex = /\/\/[a-z]+.([\w-]*).[com|jp|co.jp|net|tv]/i;
  const found = url.match(regex);
  let name = 'Maker';
  if (found && found[1]) {
    switch (found[1]) {
      case 's1s1s1':
        name = 'S1 NO.1 STYLE';
        break;
      case 'ideapocket':
        name = 'アイポケ ideapocket';
        break;
      case 'moodyz':
        name = 'MOODYZ';
        break;
      case 'kawaiikawaii':
        name = 'メーカー kawaii*';
        break;
      case 'sod':
        name = 'SOFT ON DEMAND';
        break;
      case 'prestige-av':
      case 'mgstage':
        name = 'PRESTIGE GROUP';
        break;
      case 'oppai-av':
        name = 'OPPAI';
        break;
      case 'wanz-factory':
        name = 'WANZ FACTORY';
        break;
      case 'tameikegoro':
        name = '溜池ゴロー';
        break;
      case 'av-e-body':
        name = 'E-BODY';
        break;
      case 'premium-beauty':
        name = 'PREMIUM';
        break;
      case 'kirakira-av':
        name = 'kira☆kira';
        break;
      case 'mutekimuteki':
        name = 'MUTEKI';
        break;
      case 'befreebe':
        name = 'BeFree';
        break;
      case 'bi-av':
        name = 'Chijyo HEAVEN';
        break;
      case 'madonna-av':
        name = 'Madonna';
        break;
      case 'fitch-av':
        name = 'Fitch';
        break;
      case 'miman':
        name = '未満 MIMAN';
        break;
      case 'muku':
        name = '無垢 MUKU';
        break;
      case 'dasdas':
        name = 'DAS';
        break;
      case 'honnaka':
        name = '本中 HONNAKA';
        break;
      default:
        name = found[1].replace('av', '').replace('-', ' ').toUpperCase();
        break;
    }
  }
  return name;
}

export default InfoCard;
InfoCard.ErrorCard = ErrorCard;
