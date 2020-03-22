import React, { memo } from 'react';
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from 'react-simple-maps';
import PropTypes from 'prop-types';

import { helpers } from '../../utils';
import geomap from './world-110m.json';

const { getColor, rounded } = helpers;

const MapChart = ({ getCountryStatus, setTooltipContent }) => (
  <ComposableMap className="map_container" data-tip="" data-html projectionConfig={{ scale: 190 }}>
    <ZoomableGroup>
      <Geographies geography={geomap}>
        {({ geographies }) => geographies.map((geo) => {
          const {
            cases,
            deaths,
            recovered,
            todayCases,
            critical,
          } = getCountryStatus(geo.properties);
          const defaultColor = getColor(cases);
          return (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              onMouseEnter={() => {
                const { NAME, POP_EST } = geo.properties;
                setTooltipContent(`${NAME} — ${rounded(POP_EST)} 
                <br />
                <br />
                <table>
                  <tbody>
                    <tr>
                      <td width="90%">Cases</td>
                      <td>${rounded(cases)}</td>
                    </tr>
                    <tr>
                      <td>Cases Today</td>
                      <td>${rounded(todayCases)}</td>
                    </tr>
                    <tr>
                      <td>Critical State</td>
                      <td>${rounded(critical)}</td>
                    </tr>
                    <tr>
                      <td>Recovered</td>
                      <td>${rounded(recovered)}</td>
                    </tr>
                    <tr>
                      <td>Deaths</td>
                      <td>${rounded(deaths)}</td>
                    </tr>
                  </tbody>
                </table>`);
              }}
              onMouseLeave={() => {
                setTooltipContent('');
              }}
              style={{
                default: {
                  fill: defaultColor, // D6D6DA
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
    </ZoomableGroup>
  </ComposableMap>
);

MapChart.propTypes = {
  getCountryStatus: PropTypes.func.isRequired,
  setTooltipContent: PropTypes.func.isRequired,
};

export default memo(MapChart);
