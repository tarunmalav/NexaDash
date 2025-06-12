import { Dropdown, Nav, Tab } from "react-bootstrap";
import Activitychart from "../../components/dashboard/Activitychart";
import Activitychart2 from "../../components/dashboard/Activitychart2";
import Activitychart3 from "../../components/dashboard/Activitychart3";
import { IMAGES } from "../../constant/Theme";
import { useState } from "react";
function RevenueUpdatechart() {
    const [globalSelect, setGlobalSelect] = useState('Yearly');
    return (
        <div className="card" id="user-activity">
            <Tab.Container defaultActiveKey="bitcoin">
                <div className="card-header flex-wrap">
                    <h4 className="card-title">Revenue Updates</h4>
                    <div className="d-flex align-items-baseline">
                        <Nav as="ul" className="nav nav-pills revenue-tab">
                            <Nav.Item as="li" className="nav-item">
                                <Nav.Link className="nav-link" eventKey="bitcoin"><img src={IMAGES.btcsmsvg} alt="" className="me-1" />Bitcoin</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className="nav-item">
                                <Nav.Link className="nav-link" eventKey="ethereum"><img src={IMAGES.ethsmsvg} alt="" className="me-1" />Ethereum</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className="nav-item">
                                <Nav.Link className="nav-link" eventKey="bnb"><img src={IMAGES.bnbsmsvg} alt="" className="me-1" />BNB</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Dropdown className='global-drop d-sm-block d-none homedropdown' align="end" >
                            <Dropdown.Toggle as="div" className='i-false global-drop-toggle c-pointer text-primary badge-light rounded nav-link'>
                                {globalSelect}{" "}
                                <i className="fa-solid fa-chevron-down" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu className='global-drop-menu' >
                                <Dropdown.Item onClick={() => setGlobalSelect('yearly')} eventKey="bitcoin">Yearly</Dropdown.Item>
                                <Dropdown.Item onClick={() => setGlobalSelect('Weekly')} eventKey="ethereum">Weekly</Dropdown.Item>
                                <Dropdown.Item onClick={() => setGlobalSelect('Monthly')} eventKey="bnb">Monthly</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <div className="card-body">
                    <Tab.Content id="pills-tabContent">
                        <Tab.Pane eventKey="bitcoin"  >
                            <Activitychart />
                        </Tab.Pane>
                        <Tab.Pane eventKey="ethereum">
                            <Activitychart2 />
                        </Tab.Pane>
                        <Tab.Pane eventKey="bnb">
                            <Activitychart3 />
                        </Tab.Pane>
                    </Tab.Content>
                </div>
            </Tab.Container>
        </div>
    );
}

export default RevenueUpdatechart;