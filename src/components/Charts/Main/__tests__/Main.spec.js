
import React from 'react';
import { shallow } from 'enzyme';
import { LineChart, BarChart } from 'recharts';
import Main from '..';

describe('Main', () => {
  test('should render LineChart with success', () => {
    const props = {
      Chart: LineChart,
      legend: true,
      data: [],
      lines: ['Opened', 'Closed', 'Merged'],
      colors: ['#333', '#444', '#555'],
      xAxis: {
        data: 'date',
        props: {},
      },
      yAxis: {
        data: '',
      },
    };
    const wrapper = shallow(<Main {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render BarChart with success', () => {
    const props = {
      Chart: BarChart,
      legend: false,
      data: [],
      bars: ['Opened'],
      colors: ['#333', '#444', '#555'],
      xAxis: {
        data: 'name',
        props: {},
      },
      yAxis: {
        data: 'Average Time',
        props: {
          unit: 'h',
        },
      },
    };
    const wrapper = shallow(<Main {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
