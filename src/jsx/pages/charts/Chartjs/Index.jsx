import React from "react"; 
import { Row, Col, Card } from "react-bootstrap"; 
import PageTitle from "../../../layouts/PageTitle";
// import BarChart1 from '../../../components/charts/Chartjs/Bar1';
import BarChart5 from "../../../components/charts/Chartjs/Bar5";
import BarChart6 from "../../../components/charts/Chartjs/Bar6";
import LineChart1 from "../../../components/charts/Chartjs/Line1";
import DualLine from "../../../components/charts/Chartjs/DualLine";
import BasicArea from "../../../components/charts/Chartjs/BasicArea";
import GradientArea from "../../../components/charts/Chartjs/GradinetArea";
import DualArea from "../../../components/charts/Chartjs/DualArea"; 
import PolarChart from "../../../components/charts/Chartjs/Polar"; 
import ChartPie from "../../../components/charts/Chartjs/Pie";

function ChartChartjs() {
  return (
    <>
      <PageTitle motherMenu="Home" activeMenu="ChartJs Chart" pageContent={"ChartJs Chart"}/>
      <div className="container">
        <Row>
          <Col xl={6} lg={6}>
            <Card>
              <Card.Header>
                <h4 className="card-title">Bar chart</h4>
              </Card.Header>
              <Card.Body>
                {/* <BarChart1 /> */}
              </Card.Body>
            </Card>
          </Col>
          <Col xl={6} lg={6}>
            <Card>
              <Card.Header>
                <h4 className="card-title">Bar chart</h4>
              </Card.Header>
              <Card.Body>
                <BarChart5 />
              </Card.Body>
            </Card>
          </Col>
          <Col xl={6} lg={6}>
            <Card>
              <Card.Header>
                <h4 className="card-title">Bar chart</h4>
              </Card.Header>
              <Card.Body>
                <BarChart6 />
              </Card.Body>
            </Card>
          </Col>
          <Col xl={6} lg={6}>
            <Card>
              <Card.Header>
                <h4 className="card-title">Line chart</h4>
              </Card.Header>
              <Card.Body>
                <LineChart1 />
              </Card.Body>
            </Card>
          </Col>
          <Col xl={6} lg={6}>
            <Card>
              <Card.Header>
                <h4 className="card-title">Dual Line chart</h4>
              </Card.Header>
              <Card.Body>
                <DualLine />
              </Card.Body>
            </Card>
          </Col>
          <Col xl={6} lg={6}>
            <Card>
              <Card.Header>
                <h4 className="card-title">Basic Area Chart</h4>
              </Card.Header>
              <Card.Body>
                <BasicArea />
              </Card.Body>
            </Card>
          </Col>
          <Col xl={6} lg={6}>
            <Card>
              <Card.Header>
                <h4 className="card-title">Gradinet Area Chart</h4>
              </Card.Header>
              <Card.Body>
                <GradientArea />
              </Card.Body>
            </Card>
          </Col>
          <Col xl={6} lg={6}>
            <Card>
              <Card.Header>
                <h4 className="card-title">Dual Area Chart</h4>
              </Card.Header>
              <Card.Body>
                <DualArea />
              </Card.Body>
            </Card>
          </Col>

          <Col xl={6} lg={6}>
            <Card>
              <Card.Header>
                <h4 className="card-title">Pie</h4>
              </Card.Header>
              <Card.Body>
                <ChartPie />
              </Card.Body>
            </Card>
          </Col>

          <Col xl={6} lg={6}>
            <Card>
              <Card.Header>
                <h4 className="card-title">Polar Chart</h4>
              </Card.Header>
              <Card.Body>
                <PolarChart />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ChartChartjs;
