import React from 'react';
import PropTypes from 'prop-types';
import './Line.scss';

export default function LineTooltip({ title, active, payload }) {
  if (active) {
    return (
      <div className="custom-tooltip">
        <div className="heading">
          <span>{title}</span>
        </div>
        <hr />
        <table>
          <tbody>
            { payload && payload.map(({ name, color, value }) => (
              <tr key={name}>
                <td width="100px">
                  <span style={{ color, fontSize: 22, marginRight: 10 }}>•</span>
                  <span>{name}</span>
                </td>
                <td style={{ marginRight: 10 }}>{value}</td>
              </tr>
            )) }
          </tbody>
        </table>
      </div>
    );
  }
  return null;
}

LineTooltip.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.object),
};

LineTooltip.defaultProps = {
  active: false,
  payload: [],
};
