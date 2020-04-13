import React from 'react';
import PropTypes from 'prop-types';
import {
  ResponsiveContainer, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import { constants, helpers } from '../../../utils';

import './Main.scss';

const { normalizeToArray } = helpers;
const { chart: { colors: defaultColors } } = constants;

export default function MainChart({
  Chart,
  legend,
  data,
  bars,
  colors,
  lines,
  xAxis,
  yAxis,
  height,
  customTooltip,
  cartesianProps,
}) {
  let TooltipComponent;
  if (customTooltip) {
    TooltipComponent = customTooltip.Component;
  }

  return (
    <ResponsiveContainer width="100%" height={height} className="MainChart">
      <Chart data={data}>
        <CartesianGrid strokeDasharray="1 0" {...cartesianProps} />
        <Tooltip
          labelStyle={{ fontSize: 18 }}
          content={TooltipComponent ? <TooltipComponent {...customTooltip.props} /> : null}
        />
        { normalizeToArray(xAxis.data).map((x) => <XAxis {...xAxis.props} key={x} dataKey={x} />) }
        { normalizeToArray(yAxis.data).map((y) => <YAxis {...yAxis.props} key={y} dataKey={y} />) }
        { normalizeToArray(bars).map((bar, index) => (
          <Bar key={bar} dataKey={bar} fill={colors[index] || defaultColors[index]} />
        )) }
        { normalizeToArray(lines).map((line, index) => (
          <Line
            key={line}
            type="linear"
            strokeWidth={2}
            dataKey={line}
            stroke={colors[index] || defaultColors[index]}
            activeDot={{ r: 8 }}
          />
        )) }
        { legend && <Legend iconSize={10} iconType="circle" />}

      </Chart>
    </ResponsiveContainer>
  );
}

MainChart.propTypes = {
  cartesianProps: PropTypes.shape({
    vertical: PropTypes.bool,
  }),
  height: PropTypes.number,
  legend: PropTypes.bool,
  Chart: PropTypes.oneOfType([
    PropTypes.any,
  ]).isRequired,
  bars: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  customTooltip: PropTypes.shape({
    Component: PropTypes.any,
    props: PropTypes.any,
  }),
  colors: PropTypes.arrayOf(PropTypes.string),
  data: PropTypes.arrayOf(PropTypes.object),
  lines: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  xAxis: PropTypes.shape({
    data: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
    ]),
    props: PropTypes.any,
  }),
  yAxis: PropTypes.shape({
    data: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
    ]),
    props: PropTypes.any,
  }),
};

MainChart.defaultProps = {
  cartesianProps: {},
  customTooltip: null,
  legend: true,
  height: 300,
  colors: [],
  lines: [],
  xAxis: {
    data: [],
  },
  yAxis: {
    data: [],
  },
  bars: [],
  data: [],
};
