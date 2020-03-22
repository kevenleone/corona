import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import MapChart from '../../components/MapChart';

const Home = () => {
  const [content, setContent] = useState('');
  const { countries: { all: countries } } = useSelector((state) => state.cov);

  function getCountryStatus({ NAME, ISO_A2 }) {
    const countryFound = countries.find(({ country, country_code: code, or }) => {
      if (or) {
        return or.includes(NAME) || or.includes(ISO_A2);
      }
      return country === NAME || ISO_A2 === code;
    });

    return countryFound || {
      cases: 0,
      deaths: 0,
      critical: 0,
      todayCases: 0,
      recovered: 0,
    };
  }

  return (
    <div>
      <MapChart
        getCountryStatus={getCountryStatus}
        setTooltipContent={setContent}
      />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
};

export default React.memo(Home);
