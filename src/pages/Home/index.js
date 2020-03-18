import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import MapChart from '../../components/MapChart'
import ReactTooltip from "react-tooltip";

export default () => {
    const [content, setContent] = useState("");
    const { countries: { all: countries } } = useSelector(state => state.cov);

    function getCountryStatus({NAME, ISO_A2}) {
      const country = countries.find(({country, country_code}) => country === NAME || ISO_A2 === country_code);
      return country || {
        confirmed: 0,
        deaths: 0,
        recovered: 0
      }
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
  }