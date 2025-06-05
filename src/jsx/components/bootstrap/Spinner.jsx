
import { useState } from "react";
import PageTitle from "../../layouts/PageTitle";
import { Row, Col, Card, Tab, Nav, Spinner, Button } from "react-bootstrap";
import Highlight from "react-highlight";
import { Link } from 'react-scroll';

const sidebarLink = [
    { to: 'Default-Spinner', title: 'Default Spinner' },
    { to: 'Growing-Spinner', title: 'Growing Spinner' },
    { to: 'Colorfull-Spinners', title: 'Colorfull Spinners' },
    { to: 'Colorfull-Growing', title: 'Colorfull Growing' },
    { to: 'Alighment-Flex', title: 'Alighment Flex' },
    { to: 'Spinner-Sizes', title: 'Spinner Sizes' },
    { to: 'Buttons-Spinner', title: 'Buttons Spinner' },
];

const UiSpinner = () => {
    const [activeLink, setActiveLink] = useState(0);  
    return (
        <>
            <PageTitle pageContent="Spinners" motherMenu={"Home"} activeMenu={"Spinners"} />
            <div className="container">
                <div className="element-wrapper">
                    <div className="element-right ">
                        <div className="p-4 border-bottom">
                            <h2>Spinners.</h2>
                            <p>Make use of Bootstrap's unique Spinners styles to provide visual feedback for ongoing processes, ensuring users are aware of background activities.</p>
                            <Link to={"#"} className="btn btn-primary">Spinners on Bootstrap</Link>
                        </div>
                        <div className="demo-right ">
                            <div className="demo-right-inner dlab-scroll navigation navbar " id="right-sidebar">
                                <h4 className="title">Placeholder</h4>
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
                                        <Card name="Default-Spinner" className="dz-card">
                                            <Card.Header className=" flex-wrap border-0 pb-2">
                                                <h4>
                                                    <Card.Title>Default Spinner</Card.Title>
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
                                                        <Spinner animation="border" role="status">
                                                            <span className="visually-hidden">Loading...</span>
                                                        </Spinner>
                                                    </Card.Body>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="Code">
                                                    <div className="card-body pt-0 p-0 code-area">
                                                        <pre className="mb-0"><code className="language-html">
                                                            <Highlight>
                                                                {`
 <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
</Spinner>
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
                                        <Card name="Growing-Spinner" className="dz-card">
                                            <Card.Header className=" flex-wrap border-0 pb-2">
                                                <h4>
                                                    <Card.Title> Growing Spinner</Card.Title>
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
                                                        <Spinner animation="grow" />;
                                                    </Card.Body>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="Code">
                                                    <div className="card-body pt-0 p-0 code-area">
                                                        <pre className="mb-0"><code className="language-html">
                                                            <Highlight>
                                                                {`
<Spinner animation="grow" />;
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
                                        <Card name="Colorfull-Spinners" className="dz-card">
                                            <Card.Header className=" flex-wrap border-0 pb-2">
                                                <h4>
                                                    <Card.Title> Colorfull Spinners </Card.Title>
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
                                                        <Spinner animation="border" variant="primary" />
                                                        <Spinner animation="border" variant="secondary" />
                                                        <Spinner animation="border" variant="success" />
                                                        <Spinner animation="border" variant="danger" />
                                                        <Spinner animation="border" variant="warning" />
                                                        <Spinner animation="border" variant="info" />
                                                        <Spinner animation="border" variant="light" />
                                                        <Spinner animation="border" variant="dark" />
                                                    </Card.Body>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="Code">
                                                    <div className="card-body pt-0 p-0 code-area">
                                                        <pre className="mb-0"><code className="language-html">
                                                            <Highlight>
                                                                {`
<Spinner animation="border" variant="primary" />
<Spinner animation="border" variant="secondary" />
<Spinner animation="border" variant="success" />
<Spinner animation="border" variant="danger" />
<Spinner animation="border" variant="warning" />
<Spinner animation="border" variant="info" />
<Spinner animation="border" variant="light" />
<Spinner animation="border" variant="dark" />}} />
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
                                        <Card name=" Colorfull-Growing" className="dz-card">
                                            <Card.Header className=" flex-wrap border-0 pb-2">
                                                <h4>
                                                    <Card.Title> Colorfull Growing Spinners </Card.Title>
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
                                                        <Spinner animation="grow" variant="primary" />
                                                        <Spinner animation="grow" variant="secondary" />
                                                        <Spinner animation="grow" variant="success" />
                                                        <Spinner animation="grow" variant="danger" />
                                                        <Spinner animation="grow" variant="warning" />
                                                        <Spinner animation="grow" variant="info" />
                                                        <Spinner animation="grow" variant="light" />
                                                        <Spinner animation="grow" variant="dark" />
                                                    </Card.Body>

                                                </Tab.Pane>
                                                <Tab.Pane eventKey="Code">
                                                    <div className="card-body pt-0 p-0 code-area">
                                                        <pre className="mb-0"><code className="language-html">
                                                            <Highlight>
                                                                {`
 <Spinner animation="grow" variant="primary" />
<Spinner animation="grow" variant="secondary" />
<Spinner animation="grow" variant="success" />
<Spinner animation="grow" variant="danger" />
<Spinner animation="grow" variant="warning" />
<Spinner animation="grow" variant="info" />
<Spinner animation="grow" variant="light" />
<Spinner animation="grow" variant="dark" />
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
                                        <Card name="Alighment-Flex" className="dz-card">
                                            <Card.Header className=" flex-wrap border-0 pb-2">
                                                <h5>
                                                    <Card.Title> Alighment Flex </Card.Title>
                                                </h5>
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
                                                        <div className="d-flex justify-content-center">
                                                            <Spinner animation="border" role="status">
                                                                <span className="visually-hidden">Loading...</span>
                                                            </Spinner>
                                                        </div>
                                                        <div className="d-flex align-items-center">
                                                            <strong role="status">Loading...</strong>
                                                            <Spinner animation="border ms-auto" role="status">
                                                            </Spinner>
                                                        </div>
                                                    </Card.Body>

                                                </Tab.Pane>
                                                <Tab.Pane eventKey="Code">
                                                    <div className="card-body pt-0 p-0 code-area">
                                                        <pre className="mb-0"><code className="language-html">
                                                            <Highlight>
                                                                {`
<div className="d-flex justify-content-center">
    <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
    </Spinner>
    </div>
    <div className="d-flex align-items-center">
        <strong role="status">Loading...</strong>
    <Spinner animation="border ms-auto" role="status">
    </Spinner>
</div>
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
                                        <Card name="Spinner-Sizes" className="dz-card">
                                            <Card.Header className=" flex-wrap border-0 pb-2">
                                                <h5>
                                                    <Card.Title> Spinner Sizes </Card.Title>
                                                </h5>
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
                                                    <Card.Body className="d-flex flex-wrap align-items-center">
                                                        <Spinner animation="border" size="sm" className="me-4" />
                                                        <Spinner animation="grow" size="sm" className="me-4" />
                                                        <Spinner animation="border" className="me-4" style={{ height: "3rem", width: "3rem" }} />
                                                        <Spinner animation="grow" className="me-4" style={{ height: "3rem", width: "3rem" }} />
                                                    </Card.Body>

                                                </Tab.Pane>
                                                <Tab.Pane eventKey="Code">
                                                    <div className="card-body pt-0 p-0 code-area">
                                                        <pre className="mb-0"><code className="language-html">
                                                            <Highlight>
                                                                {`
<Spinner animation="border" size="sm" className="me-4" />
<Spinner animation="grow" size="sm" className="me-4" />
<Spinner animation="border" className="me-4" style={{ height: "3rem", width: "3rem" }} />
<Spinner animation="grow" className="me-4" style={{ height: "3rem", width: "3rem" }} />
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
                                        <Card name="Buttons-Spinner" className="dz-card">
                                            <Card.Header className=" flex-wrap border-0 pb-2">
                                                <h5>
                                                    <Card.Title> Buttons Spinner </Card.Title>
                                                </h5>
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
                                                    <Card.Body className="d-flex flex-wrap align-items-center">
                                                        <Button variant="primary" disabled className="mb-2 me-2">
                                                            <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true"  />
                                                            <span className="visually-hidden">Loading...</span>
                                                        </Button>
                                                        <Button variant="primary" disabled className="mb-2 me-2">
                                                            <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> Loading...
                                                        </Button>
                                                        <Button variant="primary" disabled className="mb-2 me-2">
                                                            <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true"  />
                                                            <span className="visually-hidden">Loading...</span>
                                                        </Button>
                                                        <Button variant="primary" disabled className="mb-2 me-2">
                                                            <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> Loading...
                                                        </Button>
                                                        <Button variant="secondary" disabled className="mb-2 me-2">
                                                            <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> Loading...
                                                        </Button>
                                                        <Button variant="success" disabled className="mb-2 me-2">
                                                            <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> Loading...
                                                        </Button>
                                                        <Button variant="danger" disabled className="mb-2 me-2">
                                                            <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> Loading...
                                                        </Button>
                                                        <Button variant="warning" disabled className="mb-2 me-2">
                                                            <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> Loading...
                                                        </Button>
                                                        <Button variant="info" disabled className="mb-2 me-2">
                                                            <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> Loading...
                                                        </Button>
                                                        <Button variant="dark" disabled className="mb-2 me-2">
                                                            <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> Loading...
                                                        </Button>
                                                    </Card.Body>

                                                </Tab.Pane>
                                                <Tab.Pane eventKey="Code">
                                                    <div className="card-body pt-0 p-0 code-area">
                                                        <pre className="mb-0"><code className="language-html">
                                                            <Highlight>
                                                                {`
<Button variant="primary" disabled className="mb-2 me-2">
<Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true"  />
<span className="visually-hidden">Loading...</span>
</Button>
<Button variant="primary" disabled className="mb-2 me-2">
<Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> Loading...
</Button>
<Button variant="primary" disabled className="mb-2 me-2">
<Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true"  />
<span className="visually-hidden">Loading...</span>
</Button>
<Button variant="primary" disabled className="mb-2 me-2">
<Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> Loading...
</Button>
<Button variant="secondary" disabled className="mb-2 me-2">
<Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> Loading...
</Button>
<Button variant="success" disabled className="mb-2 me-2">
<Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> Loading...
</Button>
<Button variant="danger" disabled className="mb-2 me-2">
<Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> Loading...
</Button>
<Button variant="warning" disabled className="mb-2 me-2">
<Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> Loading...
</Button>
<Button variant="info" disabled className="mb-2 me-2">
<Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> Loading...
</Button>
<Button variant="dark" disabled className="mb-2 me-2">
<Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> Loading...
</Button>
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

export default UiSpinner;
