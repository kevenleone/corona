import React from 'react';
import { Table } from 'reactstrap';
import { useSelector } from 'react-redux';
import Section from '../../components/Layout/Section';

const Country = () => {
  const { countries: { all: countries } } = useSelector((state) => state.cov);
  return (
    <Section title="Countries Info" className="table-countries">
      <Table hover>
        <thead>
          <tr>
            <th width="2%">#</th>
            <th>Country</th>
            <th>Cases</th>
            <th>Active</th>
            <th>Deaths</th>
            <th>Recovered</th>
            <th>Today Cases / Deaths</th>
          </tr>
        </thead>
        <tbody>
          { countries.map(({
            active, country, cases, emoji, todayCases, deaths, todayDeaths, recovered,
          }, index) => (
            <tr key={country}>
              <td>{index + 1}</td>
              <td>{`${emoji || ''} ${country}`}</td>
              <td>{cases}</td>
              <td>{active}</td>
              <td>{deaths}</td>
              <td>{recovered}</td>
              <td>{`${todayCases} / ${todayDeaths}`}</td>
            </tr>
          )) }
        </tbody>
      </Table>
    </Section>
  );
};

export default Country;
