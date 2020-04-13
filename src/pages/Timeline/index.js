import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { LineChart, BarChart } from 'recharts';
import Section from '../../components/Layout/Section';
import { MainChart } from '../../components/Charts';

export default () => {
  const [data, setData] = useState([]);
  const [countries, setCountries] = useState([]);
  async function getData() {
    const response = await axios.get('https://corona.lmao.ninja/v2/historical');
    const useCountries = ['eua', 'spain', 'iran', 'italy', 'usa'];
    const countriesData = {};
    const countries = response.data
      .filter(({ province, country }) => useCountries.includes(country))
      .map(({ country, timeline: { cases } }) => ({ country, cases }));

    countries.forEach(({ country, cases }) => {
      const keys = Object.keys(cases);
      keys.forEach((date) => {
        const total = cases[date];
        if (!countriesData[date]) {
          countriesData[date] = {
            [country]: total,
          };
        } else {
          countriesData[date][country] = total;
        }
      });
    });

    setCountries(countries.map(({ country }) => country));

    const finalData = [];
    const keys = Object.keys(countriesData);

    keys.map((key) => {
      finalData.push({ date: key, ...countriesData[key] });
    });


    setData(finalData);

    // const formatCountries = countries.map(country => )
    console.log({ finalData });
    // const { cases } = response.data.timeline;
    // const formatCase = [];
    // for (const x in cases) {
    //   formatCase.push({ date: x, Brazil: cases[x], Italy: cases[x] / 2 });
    // }
    // setData(formatCase);
  }

  useEffect(() => {
    getData();
  }, []);

  console.log({ data });

  return (
    <div>
      <Helmet>
        <title>Coronavírus | Timeline</title>
      </Helmet>
      <Section title="Coronavírus timeline per country">
        <MainChart
          data={data.slice(45)}
          height={650}
          Chart={LineChart}
          lines={countries}
          colors={['#B20BFF', '#FF3A00', '#13C600']}
          xAxis={{
            data: 'date',
            props: {
              interval: 2,
              padding: { right: 20 },
            },
          }}
          yAxis={{
            data: '',
          }}
        />
      </Section>
    </div>
  );
};
