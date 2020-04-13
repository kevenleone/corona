
import React from 'react';
import { shallow } from 'enzyme';
import Bar from '../Bar';

describe('Bar', () => {
  test('should render with success', () => {
    const props = {
      active: true,
      payload: [{
        payload: {
          name: 'Medium',
          'Average Time': 0,
          'Pull Requests': 0,
        },
      }],
    };
    const wrapper = shallow(<Bar {...props} />);
    expect(wrapper.find('div.BarTooltip td').contains('Average Time')).toBeTruthy();
    expect(wrapper.find('div.BarTooltip td').contains('Pull Requests')).toBeTruthy();
    expect(wrapper.find('div.BarTooltip td').contains('Medium')).toBeFalsy();
    expect(wrapper).toMatchSnapshot();
  });

  test('should render null', () => {
    const props = {
      active: false,
    };
    const wrapper = shallow(<Bar {...props} />);
    expect(wrapper.equals(null)).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
