import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';

import InfoCard from '../InfoCard';
import VideoCard from '../VideoCard';

import './DetailPage.css';

const DetailPage = () => {
  let history = useHistory();
  let { flightId } = useParams();
  flightId = flightId.replace('.mp4', '').toUpperCase();
  const urls = urlUtil(flightId);

  useEffect(() => {
    console.log(history);
    // history.replace('/flights/' + flightId);
  });

  const [ coverLoaded, setCoverLoaded ] = useState(true);
  const handleCoverLoad = e => {
    const { target:img } = e;
    if (img.offsetWidth < img.offsetHeight) {
      setCoverLoaded(false);
    }
  };
  const handleCoverError = e => {
    setCoverLoaded(false);
  };

  const renderInfoCard = () => {
    if (coverLoaded) {
      return <InfoCard flightId={flightId} urls={urls} handleCoverLoad={handleCoverLoad} handleCoverError={handleCoverError} />;
    } else {
      return <InfoCard.ErrorCard flightId={flightId} />;
    }
  };

  return (
    <Container>
      <Row gutterWidth={18}>
        <Col sm={4}>
          {renderInfoCard()}
        </Col>
        <Col sm={8}>
          <VideoCard urls={urls} />
        </Col>
      </Row>
    </Container>
  );
};

const urlUtil = identifier => {
  const ids = identifier.toLowerCase().split('-');
  const series = ids[0];
  const number = ids[1];

  const pureLower = `${series}${number}`;
  const dashLower = `${series}-${number}`;
  const dashUpper = `${series.toUpperCase()}-${number.toUpperCase()}`;

  let previewURL, bonusURL, coverURL, makerURL, shopURL, torrentURL, busURL;
  
  previewURL = `https://cc3001.dmm.co.jp/litevideo/freepv/${series.substr(0, 1)}/${series.substr(0, 3)}/${series}00${number}/${series}00${number}_dmb_w.mp4`;
  bonusURL = ``;
  switch (series) {
    case 'star':
    case 'stars':
    case 'sdab':
    case 'sdam':
    case 'sdmf':
    case 'sdmm':
    case 'sdmu':
    case 'sdnm':
    case 'sdnt':
    case 'sdjs':
    case 'sdde':
    case 'kmhr':
    case 'kmhrs':
      previewURL = `https://awscc3001.r18.com/litevideo/freepv/1/1${series.substr(0, 2)}/1${pureLower}/1${pureLower}_dmb_w.mp4`;
      break;
    case 'abp': // Bonus
    case 'abs':
    case 'sga':
    case 'chn': // Bonus
    case 'bgn': // Bonus
    case 'dic':
    case 'tre':
    case 'esk':
    case 'ppt':
    case 'ppp':
    case 'tap':
    case 'hrv':
    case 'spc':
    case 'nre':
    case 'wpc':
    case 'mas':
    case 'inu':
    case 'ztr':
    case 'jcn':
    case 'osr':
    case 'mmy':
    case 'yrh':
      previewURL = `https://sample.mgstage.com/sample/prestige/${series}/${number}/${dashUpper}.mp4`;
      bonusURL = `https://feature.mgstage.com/feature/${dashUpper}_tokuten_sample/${dashUpper}_tokuten_sample.mp4`;
      break;
    case 'dtt':
    case 'kbi': // Bonus
      previewURL = `https://sample.mgstage.com/sample/kanbi/336${series}/${number}/${dashUpper}.mp4`;
      bonusURL = `https://feature.mgstage.com/feature/336${dashUpper}_tokuten_sample/336${dashUpper}_tokuten_sample.mp4`;
      break;
    case 'rix':
    case 'tbl':
      previewURL = `https://sample.mgstage.com/sample/magictabloid/099${series}/${number}/${dashUpper}.mp4`;
      break;
    case 'onez':
      previewURL = `https://sample.mgstage.com/sample/onemore/013${series}/${number}/${dashUpper}.mp4`;
      break;
    case 'docp':
    case 'cdc':
    case 'fch':
      previewURL = `https://sample.mgstage.com/sample/doc/${series}/${number}/${dashUpper}.mp4`;
      break;
    case 'sksk':
      previewURL = `https://sample.mgstage.com/sample/sukesuke/368${series}/${number}/${dashUpper}.mp4`;
      break;
    case 'gne':
      previewURL = `https://sample.mgstage.com/sample/gallop/236${series}/${number}/${dashUpper}.mp4`;
      break;
    case 'otim':
      previewURL = `https://sample.mgstage.com/sample/onetime/393${series}/${number}/393${dashUpper}.mp4`;
      break;
    case 'bf':
      previewURL = `https://cc3001.dmm.co.jp/litevideo/freepv/${series.substr(0, 1)}/${(series+'0').substr(0, 3)}/${series}00${number}/${series}00${number}_dmb_w.mp4`;
      break;
    default:
      break;
  }

  coverURL = `http://pics.dmm.co.jp/mono/movie/adult/${pureLower}/${pureLower}pl.jpg`;
  makerURL = ``;
  switch (series) {
    case 'soe':
    case 'snis':
    case 'ssni':
    case 'ofje':
      coverURL = `https://www.s1s1s1.com/contents/works/${pureLower}/${pureLower}-pl.jpg`;
      makerURL = `https://www.s1s1s1.com/works/detail/${pureLower}/`;
      break;
    case 'ipz':
    case 'ipx':
    case 'iptd':
    case 'idbd':
    case 'supd':
      coverURL = `https://www.ideapocket.com/contents/works/${pureLower}/${pureLower}-pl.jpg`
      makerURL = `https://www.ideapocket.com/works/detail/${pureLower}/`;
      break;
    case 'midd':
    case 'mide':
    case 'migd':
    case 'mifd':
    case 'mird':
    case 'miaa':
    case 'mimk':
    case 'mdvr':
      coverURL = `https://www.moodyz.com/contents/works/${pureLower}/${pureLower}-pl.jpg`
      makerURL = `https://www.moodyz.com/works/detail/${pureLower}/`;
      break;
    case 'cawd':
    case 'kawd':
    case 'kwbd':
      coverURL = `https://www.kawaiikawaii.jp/contents/works/${pureLower}/${pureLower}-pl.jpg`
      makerURL = `https://www.kawaiikawaii.jp/works/detail/${pureLower}/`;
      break;
    case 'star':
    case 'stars':
    case 'sdab':
    case 'sdam':
    case 'sdmf':
    case 'sdmm':
    case 'sdmu':
    case 'sdnm':
    case 'sdnt':
    case 'sdjs':
    case 'sdde':
    case 'kmhr':
    case 'kmhrs':
      coverURL = `http://pics.dmm.co.jp/mono/movie/adult/1${pureLower}/1${pureLower}pl.jpg`;
      makerURL = `https://ec.sod.co.jp/prime/videos/?id=${dashUpper}`;
      break;
    case 'abp':
    case 'abs':
    case 'sga':
    case 'chn':
    case 'bgn':
    case 'dic':
    case 'tre':
    case 'esk':
    case 'ppt':
    case 'ppp':
    case 'tap':
    case 'hrv':
    case 'spc':
    case 'nre':
    case 'wpc':
    case 'mas':
    case 'inu':
    case 'ztr':
    case 'jcn':
    case 'osr':
    case 'mmy':
    case 'yrh':
      coverURL = `https://image.mgstage.com/images/prestige/${series}/${number}/pb_e_${dashLower}.jpg`;
      makerURL = `https://www.mgstage.com/product/product_detail/${dashUpper}/`;
      break;
    case 'dtt':
    case 'kbi':
      coverURL = `https://image.mgstage.com/images/kanbi/336${series}/${number}/pb_e_336${dashLower}.jpg`;
      makerURL = `https://www.mgstage.com/product/product_detail/336${dashUpper}`;
      break;
    case 'rix':
    case 'tbl':
      coverURL = `https://image.mgstage.com/images/magictabloid/099${series}/${number}/pb_e_099${dashLower}.jpg`;
      makerURL = `https://www.mgstage.com/product/product_detail/099${dashUpper}`;
      break;
    case 'onez':
      coverURL = `https://image.mgstage.com/images/onemore/013${series}/${number}/pb_e_013${dashLower}.jpg`;
      makerURL = `https://www.mgstage.com/product/product_detail/013${dashUpper}`;
      break;
    case 'docp':
    case 'cdc':
    case 'fch':
      coverURL = `https://image.mgstage.com/images/doc/${series}/${number}/pb_e_${dashLower}.jpg`;
      makerURL = `https://www.mgstage.com/product/product_detail/${dashUpper}/`;
      break;
    case 'sksk':
      coverURL = `https://image.mgstage.com/images/sukesuke/368${series}/${number}/pb_e_368${dashLower}.jpg`;
      makerURL = `https://www.mgstage.com/product/product_detail/368${dashUpper}`;
      break;
    case 'gne':
      coverURL = `https://image.mgstage.com/images/gallop/236${series}/${number}/pb_e_236${dashLower}.jpg`;
      makerURL = `https://www.mgstage.com/product/product_detail/236${dashUpper}`;
      break;
    case 'otim':
      coverURL = `https://image.mgstage.com/images/onetime/393${series}/${number}/pb_e_393${dashLower}.jpg`;
      makerURL = `https://www.mgstage.com/product/product_detail/393${dashUpper}`;
      break;
    case 'pppd':
    case 'ppbd':
      coverURL = `https://www.oppai-av.com/contents/works/${pureLower}/${pureLower}-pl.jpg`;
      makerURL = `https://www.oppai-av.com/works/detail/${pureLower}/`;
      break;
    case 'wanz':
    case 'core':
    case 'bmw':
      coverURL = `https://www.wanz-factory.com/contents/works/${pureLower}/${pureLower}-pl.jpg`;
      makerURL = `https://www.wanz-factory.com/works/detail/${pureLower}/`;
      break;
    case 'mdyd':
    case 'meyd':
      coverURL = `https://www.tameikegoro.jp/contents/works/${pureLower}/${pureLower}-pl.jpg`;
      makerURL = `https://www.tameikegoro.jp/works/detail/${pureLower}/`;
      break;
    case 'sspd':
    case 'rbd':
    case 'atid':
    case 'shkd':
    case 'adn':
    case 'jbd':
      coverURL = `https://www.attackers.net/contents/works/${pureLower}/${pureLower}-pl.jpg`;
      makerURL = `https://www.attackers.net/works/detail/${pureLower}/`;
      break;
    case 'ebod':
    case 'eyan':
    case 'mkck':
      coverURL = `https://www.av-e-body.com/contents/works/${pureLower}/${pureLower}-pl.jpg`;
      makerURL = `https://www.av-e-body.com/works/detail/${pureLower}/`;
      break;
    case 'pred':
    case 'prtd':
    case 'pbd':
    case 'pgd':
    case 'pid':
    case 'pjd':
    case 'pxd':
    case 'ptv':
      coverURL = `https://www.premium-beauty.com/contents/works/${pureLower}/${pureLower}-pl.jpg`;
      makerURL = `https://www.premium-beauty.com/works/detail/${pureLower}/`;
      break;
    case 'blk':
    case 'kisd':
    case 'set':
      coverURL = `https://www.kirakira-av.com/contents/works/${pureLower}/${pureLower}-pl.jpg`;
      makerURL = `https://www.kirakira-av.com/works/detail/${pureLower}/`;
      break;
    case 'tek':
      coverURL = `https://www.mutekimuteki.com/contents/works/${pureLower}/${pureLower}-pl.jpg`;
      makerURL = `https://www.mutekimuteki.com/works/detail/${pureLower}/`;
      break;
    case 'bf':
      coverURL = `https://www.befreebe.com/contents/works/${pureLower}/${pureLower}-pl.jpg`;
      makerURL = `https://www.befreebe.com/works/detail/${pureLower}/`;
      break;
    case 'cjod':
    case 'bist':
    case 'beb':
    case 'bib':
    case 'bwb':
      coverURL = `https://www.bi-av.com/contents/works/${pureLower}/${pureLower}-pl.jpg`;
      makerURL = `https://www.bi-av.com/works/detail/${pureLower}/`;
      break;
    case 'jul':
    case 'juy':
    case 'jusd':
    case 'oba':
    case 'ure':
      coverURL = `https://www.madonna-av.com/contents/works/${pureLower}/${pureLower}-pl.jpg`;
      makerURL = `https://www.madonna-av.com/works/detail/${pureLower}/`;
      break;
    case 'jufd':
    case 'jufe':
    case 'juny':
      coverURL = `https://www.fitch-av.com/contents/works/${pureLower}/${pureLower}-pl.jpg`;
      makerURL = `https://www.fitch-av.com/works/detail/${pureLower}/`;
      break;
    case 'mmnd':
      coverURL = `https://www.miman.jp/contents/works/${pureLower}/${pureLower}-pl.jpg`;
      makerURL = `https://www.miman.jp/works/detail/${pureLower}/`;
      break;
    case 'mudr':
    case 'mukd':
    case 'mucd':
      coverURL = `https://www.muku.tv/contents/works/${pureLower}/${pureLower}-pl.jpg`;
      makerURL = `https://www.muku.tv/works/detail/${pureLower}/`;
      break;
    case 'dasd':
      coverURL = `https://www.dasdas.jp/contents/works/${pureLower}/${pureLower}-pl.jpg`;
      makerURL = `https://www.dasdas.jp/works/detail/${pureLower}/`;
      break;
    case 'rki':
      coverURL = `https://www.rookie-av.jp/contents/works/${pureLower}/${pureLower}-pl.jpg`;
      makerURL = `https://www.rookie-av.jp/works/detail/${pureLower}/`;
      break;
    case 'hnd':
    case 'hndb':
    case 'hnds':
      coverURL = `https://www.honnaka.jp/contents/works/${pureLower}/${pureLower}-pl.jpg`;
      makerURL = `https://www.honnaka.jp/works/detail/${pureLower}/`;
      break;
    default:
      break;
  }

  shopURL = `http://www.dmm.co.jp/`;
  torrentURL = `https://www.torrentkitty.tv/search/${identifier}`;
  busURL = `https://www.javbus.com/${identifier}`;

  return { previewURL, bonusURL, coverURL, makerURL, shopURL, torrentURL, busURL };
};

export default DetailPage;
