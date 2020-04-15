import React from "react";
import { Row, Table, Col } from "reactstrap";
import ReactTooltip from "react-tooltip";
import MapChart from "../../components/MapChart";
import Box from "../../components/Box";

const data = [
  {
    id: 1,
    total: 1000022,
    title: "CoronaVirus Cases",
    percentual: 5.59,
  },
  {
    id: 2,
    total: 1000022,
    title: "CoronaVirus Cases",
    percentual: 5.59,
  },
  {
    id: 3,
    total: 1000022,
    title: "CoronaVirus Cases",
    percentual: 65.59,
  },
  {
    id: 4,
    total: 12929,
    title: "Recovered",
    percentual: 35.59,
  },
];

const countries = [
  {
    code: "CN",
    name: "China",
    emoji: "🇨🇳",
  },
  {
    code: "US",
    name: "United States",
    or: ["United States", "US", "USA", "United States of America"],
    emoji: "🇺🇸",
  },
  {
    code: "BR",
    name: "Brazil",
    emoji: "🇧🇷",
  },
];

const normalizeColor = (count) => {
  if (count > 0 && count <= 20) return "text-success";
  if (count > 20 && count <= 50) return "text-warning";
  if (count > 50) return "text-danger";
};

export default function index() {
  const [tooltipContent, setTooltipContent] = React.useState("");
  return (
    <div className="pt-4">
      <Row>
        {data.map((d) => (
          <Box key={d.id}>
            <Box.Header>{d.total}</Box.Header>
            <Box.Body>
              <span className="text-secondary text-uppercase">{d.title}</span>

              <p className={`mt-5 ${normalizeColor(d.percentual)}`}>
                {d.percentual} %
              </p>
            </Box.Body>
          </Box>
        ))}
      </Row>
      <Row>
        <Box col="col-8" className="mt-4">
          <Box.Header>
            <Row>
              <Col xs={8}>
                Covid 19{" "}
                <small className="text-secondary">- Affected Areas wide the World</small>
              </Col>
              <Col className="text-secondary">
                <small className="mr-4">✹ Most Affected</small>
                <small>✹ Less Affected</small>
              </Col>
            </Row>
          </Box.Header>
          <Box.Body>
            <MapChart setTooltipContent={setTooltipContent} />
          </Box.Body>
        </Box>
        <Box className="mt-4">
          <Box.Header>Live Reports</Box.Header>
          <Box.Body>
            <div className="live-reports">
              <Table hover className="mt-4">
                <tbody>
                  {countries.map((country) => (
                    <tr key={country.code}>
                      <td>
                        <span style={{ fontSize: 32 }}>{country.emoji}</span>
                      </td>
                      <td>{country.name}</td>
                      <td>81.399</td>
                      <td>10%</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Box.Body>
        </Box>
      </Row>
      <ReactTooltip>{tooltipContent}</ReactTooltip>
    </div>
  );
}
