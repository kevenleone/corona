import React, { memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

import geomap from './world-110m.json'

const rounded = num => {
  if (num < 1000) {
    return num;
  } else if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};

const getColor = total => {
    if (total <= 100) {
      return '#D6D6DA'
    } else if (total > 100 && total <= 1000) {
      return '#ff8a75'
    } else if (total > 1000 && total < 5000) {
      return '#ff5533'
    } else if (total >= 5000 && total <= 10000) {
      return '#e2492d'
    } else if (total > 10000 && total < 20000) {
      return '#be3d26'
    } else if (total > 20000 && total <= 50000) {
      return '#9a311f'
    } else {
      return '#782618'
    } 
}

const MapChart = ({getCountryStatus, setTooltipContent}) => {
  return (
      <ComposableMap data-tip="" data-html projectionConfig={{ scale: 200 }}>
        <ZoomableGroup>
          <Geographies geography={geomap}>
            {({ geographies }) =>
              geographies.map(geo => {
                const { confirmed, deaths, recovered } = getCountryStatus(geo.properties);
                const defaultColor = getColor(confirmed);
                console.log({defaultColor})
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      const { NAME, POP_EST } = geo.properties;
                      setTooltipContent(`${NAME} — ${rounded(POP_EST)} 
                        <br> Total Cases — ${rounded(confirmed)}
                        <br> Total Recovered — ${rounded(recovered)}
                        <br> Total Deaths — ${rounded(deaths)}
                      `);
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("");
                    }}
                    style={{
                      default: {
                        fill: defaultColor, //D6D6DA
                        outline: "none"
                      },
                      hover: {
                        fill: "darkblue",
                        outline: "none"
                      },
                      pressed: {
                        fill: "#E42",
                        outline: "none"
                      }
                    }}
                  />
                )
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
  );
};

export default memo(MapChart);