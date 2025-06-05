
import { useState } from "react";
import PageTitle from "../../layouts/PageTitle";
import { Row, Col, Card, Tab, Nav, Spinner, Button, Form } from "react-bootstrap";
import Highlight from "react-highlight";
import { Link } from 'react-scroll';

const sidebarLink = [
    { to: 'Default-Range-Slider', title: 'Default Range Slider' },
    { to: 'Disabled-Range-Slider', title: 'Disabled Range Slider' },
    { to: 'Min-and-Max', title: 'Min and Max' },
    { to: 'Steps-Range-Slider', title: 'Steps Range Slider' },

];

const UiRangeSlider = () => {
    const [activeLink, setActiveLink] = useState(0);  
    return (
        <>
            <PageTitle pageContent="Range Slider" motherMenu={"Home"} activeMenu={"Range Slider"} />
            <div className="container">
                <div className="element-wrapper">
                    <div className="element-right ">
                        <div className="p-4 border-bottom">
                            <h2>Range Slider.</h2>
                            <p>Make use of Bootstrap's unique range slider styles to create visually appealing, user-friendly sliders for selecting numeric values or ranges. It also enhance user input with smooth, interactive sliders that provide precise control..</p>
                            <Link to={"#"} className="btn btn-primary">Range Slider on Bootstrap</Link>
                        </div>
                        <div className="demo-right ">
                            <div className="demo-right-inner dlab-scroll navigation navbar " id="right-sidebar">
                                <h4 className="title">Range Slider</h4>
                                <ul className="navbar-nav nav" id="menu-bar">

                                    {sidebarLink.map((item, ind) => (
                                        <li key={ind}
                                        >
                                            <Link to={item.to} smooth={true}
                                                className={`scroll  c-pointer ${ind === activeLink ? 'active' : ''} `}
                                                activeclassName="active"
                                                spy={true}
                                                onClick={() => setActiveLink(ind)}
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="demo-view">
                        <div className="container-fluid">
                            <Row>
                                <Col md={12} >
                                    <Tab.Container defaultActiveKey="Preview">
                                        <Card name="Default-Range-Slider" className="dz-card">
                                            <Card.Header className=" flex-wrap border-0 pb-2">
                                                <h4>
                                                    <Card.Title>Default Range Slider</Card.Title>
                                                </h4>
                                                <Nav as="ul" className="nav nav-tabs dzm-tabs" id="myTab" role="tablist">
                                                    <Nav.Item as="li" className="nav-item" role="presentation">
                                                        <Nav.Link as="button" type="button" eventKey="Preview">Preview</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item as="li" className="nav-item" >
                                                        <Nav.Link as="button" type="button" eventKey="Code">React</Nav.Link>
                                                    </Nav.Item>
                                                </Nav>
                                            </Card.Header>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="Preview">
                                                    <Card.Body>
                                                        <Form.Label>Example range</Form.Label>
                                                        <Form.Range />
                                                    </Card.Body>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="Code">
                                                    <div className="card-body pt-0 p-0 code-area">
                                                        <pre className="mb-0"><code className="language-html">
                                                            <Highlight>
                                                                {`
<Form.Label>Example range</Form.Label>
<Form.Range />
    `}
                                                            </Highlight>
                                                        </code></pre>
                                                    </div>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Card>
                                    </Tab.Container>
                                </Col>
                                <Col md={12} >
                                    <Tab.Container defaultActiveKey="Preview">
                                        <Card name="Disabled-Range-Slider" className="dz-card">
                                            <Card.Header className=" flex-wrap border-0 pb-2">
                                                <h4>
                                                    <Card.Title> Disabled Range Slider</Card.Title>
                                                </h4>
                                                <Nav as="ul" className="nav nav-tabs dzm-tabs" id="myTab" role="tablist">
                                                    <Nav.Item as="li" className="nav-item" role="presentation">
                                                        <Nav.Link as="button" type="button" eventKey="Preview">Preview</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item as="li" className="nav-item" >
                                                        <Nav.Link as="button" type="button" eventKey="Code">React</Nav.Link>
                                                    </Nav.Item>
                                                </Nav>
                                            </Card.Header>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="Preview">
                                                    <Card.Body>
                                                        <Form.Label>Disabled range</Form.Label>
                                                        <Form.Range disabled />
                                                    </Card.Body>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="Code">
                                                    <div className="card-body pt-0 p-0 code-area">
                                                        <pre className="mb-0"><code className="language-html">
                                                            <Highlight>
                                                                {`
<Form.Label>Disabled range</Form.Label>
<Form.Range disabled />
    `}
                                                            </Highlight>
                                                        </code></pre>
                                                    </div>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Card>
                                    </Tab.Container>
                                </Col>
                                <Col md={12}>
                                    <Tab.Container defaultActiveKey="Preview">
                                        <Card name="Min-and-Max" className="dz-card">
                                            <Card.Header className=" flex-wrap border-0 pb-2">
                                                <h4>
                                                    <Card.Title> Min and Max </Card.Title>
                                                </h4>
                                                <Nav as="ul" className="nav nav-tabs dzm-tabs" id="myTab" role="tablist">
                                                    <Nav.Item as="li" className="nav-item" role="presentation">
                                                        <Nav.Link as="button" type="button" eventKey="Preview">Preview</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item as="li" className="nav-item" >
                                                        <Nav.Link as="button" type="button" eventKey="Code">React</Nav.Link>
                                                    </Nav.Item>
                                                </Nav>
                                            </Card.Header>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="Preview">
                                                    <Card.Body>
                                                        <Form.Label>Example range</Form.Label>
                                                         <Form.Range min={0} max={5}/>
                                                    </Card.Body>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="Code">
                                                    <div className="card-body pt-0 p-0 code-area">
                                                        <pre className="mb-0"><code className="language-html">
                                                            <Highlight>
                                                                {`
<Form.Label>Example range</Form.Label>
<Form.Range min={0} max={5}/>
    `}
                                                            </Highlight>
                                                        </code></pre>
                                                    </div>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Card>
                                    </Tab.Container>
                                </Col>
                                <Col md={12}>
                                    <Tab.Container defaultActiveKey="Preview">
                                        <Card name="Steps-Range-Slider" className="dz-card">
                                            <Card.Header className=" flex-wrap border-0 pb-2">
                                                <h4>
                                                    <Card.Title> Steps Range Slider </Card.Title>
                                                </h4>
                                                <Nav as="ul" className="nav nav-tabs dzm-tabs" id="myTab" role="tablist">
                                                    <Nav.Item as="li" className="nav-item" role="presentation">
                                                        <Nav.Link as="button" type="button" eventKey="Preview">Preview</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item as="li" className="nav-item" >
                                                        <Nav.Link as="button" type="button" eventKey="Code">React</Nav.Link>
                                                    </Nav.Item>
                                                </Nav>
                                            </Card.Header>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="Preview">
                                                    <Card.Body>
                                                        <Form.Label>Example range</Form.Label>
                                                        <Form.Range step={0.5} min={0} max={5}/>
                                                    </Card.Body>

                                                </Tab.Pane>
                                                <Tab.Pane eventKey="Code">
                                                    <div className="card-body pt-0 p-0 code-area">
                                                        <pre className="mb-0"><code className="language-html">
                                                            <Highlight>
                                                                {`
<Form.Label>Example range</Form.Label>
<Form.Range step={0.5} min={0} max={5}/>
    `}
                                                            </Highlight>
                                                        </code></pre>
                                                    </div>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Card>
                                    </Tab.Container>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UiRangeSlider;
