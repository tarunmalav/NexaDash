import { Row, Col, Card } from "react-bootstrap"; 
import PageTitle from "../../../layouts/PageTitle";
import BarChart1 from "./Bar1";
import BarChart5 from "./Bar5";
import BarChart6 from "./Bar6";
import LineChart1 from "./Line1";
import DualLine from "./DualLine";
import BasicArea from "./BasicArea";
import GradientArea from "./GradinetArea";
import DualArea from "./DualArea";
import ChartPie from "./Pie";
import PolarChart from "./Polar";

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
                <BarChart1 />
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
