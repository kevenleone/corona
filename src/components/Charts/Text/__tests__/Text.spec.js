import React from 'react';
import { shallow } from 'enzyme';
import Text from '..';

describe('Text', () => {
  test('should render with success', () => {
    const data = '2days 21h19';
    const wrapper = shallow(<Text data={data} />);
    expect(wrapper.find('div.time').contains(data)).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
