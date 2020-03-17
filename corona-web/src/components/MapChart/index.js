import React, { memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const rounded = num => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};

// const colorScale = scaleQuantile()
// .domain(data.map(d => d.unemployment_rate))
// .range([
//   "#ffedea",
//   "#ffcec5",
//   "#ffad9f",
//   "#ff8a75",
//   "#ff5533",
//   "#e2492d",
//   "#be3d26",
//   "#9a311f",
//   "#782618"
// ]);


const MapChart = ({ setTooltipContent }) => {
  return (
    <>
      <ComposableMap data-tip="" data-html projectionConfig={{ scale: 200 }}>
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill
                  onMouseEnter={() => {
                    const { NAME, POP_EST } = geo.properties;
                    setTooltipContent(`${NAME} — ${rounded(POP_EST)} 
                    <br> Total Cases — ${rounded(10)}
                    <br> Total Recovered — 10
                    <br> Total Deaths — 10
                    `);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  fill="#782618"
                  style={{
                    default: {
                      fill: "#D6D6DA",
                      outline: "none"
                    },
                    hover: {
                      fill: "#F53",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none"
                    }
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);