
import React from 'react';
import { shallow } from 'enzyme';
import Line from '../Line';

describe('Line', () => {
  test('should render with success', () => {
    const props = {
      active: true,
      title: 'Issues',
      payload: [
        {
          name: 'Opened',
          color: 'red',
          value: 400,
        },
        {
          name: 'Closed',
          color: 'green',
          value: 300,
        }],
    };
    const wrapper = shallow(<Line {...props} />);
    expect(wrapper.find('div.heading span').contains(props.title)).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });

  test('should render null', () => {
    const props = {
      active: false,
      title: 'Pull Requests',
    };
    const wrapper = shallow(<Line {...props} />);
    expect(wrapper.equals(null)).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
