import React from 'react';
import PropTypes from 'prop-types';
import './Bar.scss';

export default function BarTooltip({ transformValue, active, payload }) {
  if (active && payload.length) {
    const payloadBar = payload[0].payload;
    const keys = Object.keys(payloadBar)
      .filter((key) => key !== 'name')
      .sort((a, b) => b - a);
    return (
      <div className="BarTooltip">
        { keys.map((key) => (
          <table key={key}>
            <tbody>
              <tr>
                <td width="150px">
                  <span>{key}</span>
                </td>
                <td style={{ marginRight: 10 }}>{transformValue(key, payloadBar[key])}</td>
              </tr>
            </tbody>
          </table>
        )) }
      </div>
    );
  }
  return null;
}

BarTooltip.propTypes = {
  transformValue: PropTypes.func,
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.object),
};

BarTooltip.defaultProps = {
  transformValue: (_, v) => v,
  active: false,
  payload: [],
};
