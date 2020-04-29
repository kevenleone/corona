import React, { useEffect } from 'react';
import { Table } from 'reactstrap';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { PageView } from '../../utils/ga';
import Section from '../../components/Layout/Section';

function toFloat(num) {
  return Number(num).toLocaleString();
}

const Country = () => {
  const { countries: { all: countries } } = useSelector((state) => state.cov);

  useEffect(() => {
    PageView('/countries');
  }, []);

  return (
    <Section title="Countries Info" className="table-countries">
      <Helmet>
        <title>Countries Statistics</title>
        <meta name="description" content="Coronavirus country statistics" />
      </Helmet>
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
              <td>{toFloat(cases)}</td>
              <td>{toFloat(active)}</td>
              <td>{toFloat(deaths)}</td>
              <td>{toFloat(recovered)}</td>
              <td>{`${toFloat(todayCases)} / ${toFloat(todayDeaths)}`}</td>
            </tr>
          )) }
        </tbody>
      </Table>
    </Section>
  );
};

export default Country;
