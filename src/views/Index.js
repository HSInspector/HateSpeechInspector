import { useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";


import ShowChart from "./ShowChart";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.js";

import Header from "components/Headers/Header.js";

const Index = (props) => {
  const [option, setOption] = useState("Bar Chart");
  const [Radar_graph, setRadar_graph] = useState("false");

  function handle_radarGraph() {
    return !Radar_graph;
  }

  function handleChange(event) {
    setOption(event.target.value);
  }
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="8"></Col>
          <Col xl="4">
            <Card
              style={{
                alignItems: "left",
                marginLeft: "20px",
                justify: "center"
              }}
              className="shadow"
            >
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">
                      Hate Speech Box Chart
                    </h6>
                    <h2 className="mb-0">Hate Speech Inspector</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                Chart
                <div className="chart">
                  <Bar
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="shadow"></Card>
          </Col>
        </Row>

        {/* <DifferentCharts /> */}

        <select
          name={option}
          onChange={handleChange}
          placeholder="Select"
          style={{
            backgroundColor: "#0680F5",
            color: "#FFFF",
            textDecoration: "bold"
          }}
          // name="Select the chart"
        >
          <option value="Pie Chart">Pie Chart</option>
          <option value="Bar Chart">Bar Chart</option>
          <option value="Radar Graph">Radar Graph</option>
        </select>

        <Button onClick={handle_radarGraph}>Radar Graph</Button>

        {/* <returnChart value={option} /> */}
        <div>
          <ShowChart value={option} />
        </div>
      </Container>
    </>
  );
};

export default Index;
