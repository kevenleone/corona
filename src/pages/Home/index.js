import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import MapChart from '../../components/MapChart';

export default () => {
  const dispatch = useDispatch();
  const [content, setContent] = useState('');
  const { countries: { all: countries } } = useSelector((state) => state.cov);

  useEffect(() => {
    setInterval(() => {
      dispatch({ type: 'GET_ALL_INSIGHTS' });
    }, 30000);
  }, [dispatch]);

  function getCountryStatus({ NAME, ISO_A2 }) {
    const countryFound = countries.find(({ country, country_code }) => country === NAME || ISO_A2 === country_code);
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
