import React, { memo } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
} from 'react-simple-maps';
import PropTypes from 'prop-types';

import { helpers } from '../../utils';
import geomap from './world.json';

const { rounded } = helpers;

const MapChart = ({ getCountryStatus, setTooltipContent }) => (
  <ComposableMap className="map_container" data-tip="" data-html>
    <Geographies geography={geomap}>
      {({ geographies }) => geographies.map((geo) => {
        return (
          <Geography
            key={geo.rsmKey}
            geography={geo}
            onMouseEnter={() => {
              const { NAME, POP_EST } = geo.properties;
              setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
            }}
            onMouseLeave={() => {
              setTooltipContent('');
            }}
            style={{
              default: {
                fill: '#D6D6DA', // D6D6DA
                outline: 'none',
              },
              hover: {
                fill: 'darkblue',
                outline: 'none',
              },
              pressed: {
                fill: '#E42',
                outline: 'none',
              },
            }}
          />
        );
      })}
    </Geographies>
  </ComposableMap>
);

MapChart.propTypes = {
  getCountryStatus: PropTypes.func.isRequired,
  setTooltipContent: PropTypes.func.isRequired,
};

export default memo(MapChart);