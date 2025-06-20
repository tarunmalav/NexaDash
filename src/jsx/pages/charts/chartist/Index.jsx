import React from "react"; 
import { Row, Col, Card } from "react-bootstrap";
import LineChart from "../../../components/charts/chartlist/line";
import AreaChart from "../../../components/charts/chartlist/area";
import PolarChart from "../../../components/charts/chartlist/polar";
import DonutChart from "../../../components/charts/chartlist/donut";
import { Fragment } from "react";
import PageTitle from "../../../layouts/PageTitle";

function ChartChartist() {
  return (
    <Fragment>
      <PageTitle motherMenu="Charts" activeMenu="Chartist" />
      <Row>
        <Col xl={6} lg={6}>
          <Card>
            <Card.Header>
              <h4 className="card-title">Line</h4>
            </Card.Header>
            <Card.Body>
              <LineChart />
            </Card.Body>
          </Card>
        </Col>

        <Col xl={6} lg={6}>
          <Card>
            <Card.Header>
				<h4 className="card-title">Area</h4>
            </Card.Header>
            <Card.Body>
              <AreaChart />
            </Card.Body>
          </Card>
        </Col>

        <Col xl={6} lg={6}>
          <Card>
            <Card.Header>
              <h4 className="card-title">Bi Polar</h4>
            </Card.Header>
            <Card.Body>
              <PolarChart />
            </Card.Body>
          </Card>
        </Col>

        <Col xl={6} lg={6}>
          <Card>
            <Card.Header>
               <h4 className="card-title">Donut</h4>
            </Card.Header>
            <Card.Body>
              <DonutChart />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}

export default ChartChartist;
