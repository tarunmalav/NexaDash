import { Form, Nav, Tab } from "react-bootstrap";
import Activitychart from "../../components/dashboard/Activitychart";
import Activitychart2 from "../../components/dashboard/Activitychart2";
import Activitychart3 from "../../components/dashboard/Activitychart3";
import { IMAGES } from "../../constant/theme";
import Dropdowndata2 from "./DropdownData2";
function RevenueUpdatechart() {
    return (
        <Tab.Container defaultActiveKey="bitcoin">
            <div className="card" id="user-activity">
                <div className="card-header flex-wrap">
                    <h4 className="card-title">Revenue Updates</h4>
                    <div className="d-flex align-items-baseline">
                        <Nav className="nav nav-pills revenue-tab">
                            <Nav.Item className="nav-item">
                                <Nav.Link className="nav-link" eventKey="bitcoin"><img src={IMAGES.btcsmsvg} alt="" className="me-1" />Bitcoin</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="nav-item">
                                <Nav.Link className="nav-link" eventKey="ethereum"><img src={IMAGES.ethsmsvg} alt="" className="me-1" />Ethereum</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="nav-item">
                                <Nav.Link className="nav-link" eventKey="bnb"><img src={IMAGES.bnbsmsvg} alt="" className="me-1" />BNB</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Dropdowndata2 />
                    </div>
                </div>
                <div className="card-body">
                    <Tab.Content className="tab-content" id="pills-tabContent">
                        <Tab.Pane eventKey="bitcoin" className="tab-pane fade  ">
                            <Activitychart />
                        </Tab.Pane>
                        <Tab.Pane eventKey="ethereum" className="tab-pane fade  ">
                            <Activitychart2 />
                        </Tab.Pane>
                        <Tab.Pane eventKey="bnb" className="tab-pane fade  ">
                            <Activitychart3 />
                        </Tab.Pane>
                    </Tab.Content>
                </div>
            </div>
        </Tab.Container>
    );
}

export default RevenueUpdatechart;