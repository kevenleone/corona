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
            <th>Country</th>
            <th>Active</th>
            <th>Cases</th>
            <th>Deaths</th>
            <th>Recovered</th>
            <th>Today Cases / Deaths</th>
          </tr>
        </thead>
        <tbody>
          { countries.map(({
            active, country, cases, emoji, todayCases, deaths, todayDeaths, recovered,
          }) => (
            <tr key={country}>
              <td>{`${emoji || ''} ${country}`}</td>
              <td>{active}</td>
              <td>{cases}</td>
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
