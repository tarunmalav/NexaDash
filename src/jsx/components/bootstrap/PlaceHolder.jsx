import { useState } from "react";
import PageTitle from "../../layouts/PageTitle";
import { Row, Col, Card, Placeholder, Tab, Nav } from "react-bootstrap";
import Highlight from "react-highlight";
import { Link } from 'react-scroll'; 
import card2 from '../../../assets/images/card/2.png'

const sidebarLink = [
    { to: 'Default-card', title: 'Default Card' },
    { to: 'Default-Placeholder', title: 'Default Placeholder' },
    { to: 'Placeholder-Width', title: 'Placeholder Width' },
    { to: 'Placeholder-Animation', title: 'Placeholder Animation' },
    { to: 'Placeholder-Sizes', title: 'Placeholder Sizes' },
    { to: 'Placeholder-Colors', title: 'Placeholder Colors' },
];

const UiPlaceHolder = () => {
    const [activeLink, setActiveLink] = useState(0);  
    return (
        <>
            <PageTitle pageContent="Placeholder" motherMenu={"Home"} activeMenu={"Placeholder"} />
            <div className="container">
                <div className="element-wrapper">
                    <div className="element-right ">
                        <div className="p-4 border-bottom">
                            <h2>Placeholder.</h2>
                            <p>Make use of Bootstrap's unique placeholder styles to create visually consistent loading states that keep your interface looking polished while data is being loaded.</p>
                            <Link to={"#"} className="btn btn-primary">Placeholder on Bootstrap</Link>
                        </div>
                        <div className="demo-right ">
                            <div className="demo-right-inner dlab-scroll navigation navbar " id="right-sidebar">
                                <h4 className="title">Placeholder</h4>
                                <ul className="navbar-nav nav" id="menu-bar"> 
                                    {sidebarLink.map((item, ind) => (
                                        <li key={ind} className={ind === activeLink ? 'active' : ''}>
                                            <Link to={item.to} smooth={true}
                                                className={`scroll  c-pointer`}
                                                activeclass="active"
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
                                <Col xl={12} >
                                    <Tab.Container defaultActiveKey="Preview">
                                        <Card name="Default-card" className="dz-card">
                                            <img className="card-img-top img-fluid" src={card2} alt="Card image cap" />
                                            <Card.Header className=" flex-wrap border-0 pb-2">
                                                <h5>
                                                    <Card.Title>Card title</Card.Title>
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
                                                        <p className="card-text">He lay on his armour-like back, and if he lifted his head a little </p>
                                                    </Card.Body>
                                                    <Card.Footer>
                                                        <p className="card-text d-inline">Card footer</p>
                                                        <Link to={"#"} className="card-link float-end">Card link</Link>
                                                    </Card.Footer>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="Code">
                                                    <div className="card-body pt-0 p-0 code-area">
                                                        <pre className="mb-0"><code className="language-html">
                                                            <Highlight>
                                                                {`
<Card name="default-progress" className="dz-card">
    <img className="card-img-top img-fluid" src={card2} alt="Card image cap" />
        <Card.Body>
            <p className="card-text">He lay on his armour-like back, and if he lifted his head a little </p>
        </Card.Body>
        <Card.Footer>
             <p className="card-text d-inline">Card footer</p>
            <Link to={"#"} className="card-link float-end">Card link</Link>
        </Card.Footer>
</Card>
    `}
                                                            </Highlight>
                                                        </code></pre>
                                                    </div>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Card>
                                    </Tab.Container>
                                </Col>
                                <Col xl={12} >
                                    <Tab.Container defaultActiveKey="Preview">
                                        <Card name="Default-Placeholder" className="dz-card">
                                            <img className="card-img-top img-fluid" src={card2} alt="Card image cap" />
                                            <Card.Header className=" flex-wrap border-0 pb-2">
                                                <Card.Title> </Card.Title>
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
                                                        <Placeholder as={Card.Title} animation="glow">
                                                            <Placeholder xs={6} />
                                                        </Placeholder>
                                                        <Placeholder as={Card.Text} animation="glow">
                                                            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                                            <Placeholder xs={6} />
                                                        </Placeholder>
                                                        <Link className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></Link>
                                                    </Card.Body>

                                                </Tab.Pane>
                                                <Tab.Pane eventKey="Code">
                                                    <div className="card-body pt-0 p-0 code-area">
                                                        <pre className="mb-0"><code className="language-html">
                                                            <Highlight>
                                                                {`
<Placeholder as={Card.Title} animation="glow">
<Placeholder xs={6} />
</Placeholder>
<Placeholder as={Card.Text} animation="glow">
<Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
<Placeholder xs={6} />
</Placeholder>  
<Link className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></Link>
    `}
                                                            </Highlight>
                                                        </code></pre>
                                                    </div>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Card>
                                    </Tab.Container>
                                </Col>

                                <Col xl={12}>
                                    <Tab.Container defaultActiveKey="Preview">
                                        <Card name="Placeholder-Width" className="dz-card">
                                            <Card.Header className=" flex-wrap border-0 pb-2">
                                                <h5>
                                                    <Card.Title> Placeholder Width </Card.Title>
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
                                                        <Placeholder as="p" animation="glow">
                                                            <Placeholder xs={12} />
                                                        </Placeholder>
                                                        <Placeholder as="p" animation="wave">
                                                            <Placeholder xs={12} />
                                                        </Placeholder>
                                                    </Card.Body>

                                                </Tab.Pane>
                                                <Tab.Pane eventKey="Code">
                                                    <div className="card-body pt-0 p-0 code-area">
                                                        <pre className="mb-0"><code className="language-html">
                                                            <Highlight>
                                                                {`
<Placeholder xs={6} />
<Placeholder className="w-75" /> <Placeholder style={{ width: '25%' }} />
    `}
                                                            </Highlight>
                                                        </code></pre>
                                                    </div>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Card>
                                    </Tab.Container>
                                </Col>
                                <Col xl={12}>
                                    <Tab.Container defaultActiveKey="Preview">
                                        <Card name="Placeholder-Animation" className="dz-card">
                                            <Card.Header className=" flex-wrap border-0 pb-2">
                                                <h5>
                                                    <Card.Title> Placeholder Animation </Card.Title>
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
                                                        <Placeholder as="p" animation="glow">
                                                            <Placeholder xs={12} />
                                                        </Placeholder>
                                                        <Placeholder as="p" animation="wave">
                                                            <Placeholder xs={12} />
                                                        </Placeholder>
                                                    </Card.Body>

                                                </Tab.Pane>
                                                <Tab.Pane eventKey="Code">
                                                    <div className="card-body pt-0 p-0 code-area">
                                                        <pre className="mb-0"><code className="language-html">
                                                            <Highlight>
                                                                {`
<Placeholder as="p" animation="glow">
        <Placeholder xs={12} />
      </Placeholder>
      <Placeholder as="p" animation="wave">
        <Placeholder xs={12} />
      </Placeholder>
    `}
                                                            </Highlight>
                                                        </code></pre>
                                                    </div>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Card>
                                    </Tab.Container>
                                </Col>
                                <Col xl={12}>
                                    <Tab.Container defaultActiveKey="Preview">
                                        <Card name="Placeholder-Sizes" className="dz-card">
                                            <Card.Header className=" flex-wrap border-0 pb-2">
                                                <h5>
                                                    <Card.Title> Placeholder Sizes </Card.Title>
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
                                                        <Placeholder xs={12} size="lg" />
                                                        <Placeholder xs={12} />
                                                        <Placeholder xs={12} size="sm" />
                                                        <Placeholder xs={12} size="xs" />
                                                    </Card.Body>

                                                </Tab.Pane>
                                                <Tab.Pane eventKey="Code">
                                                    <div className="card-body pt-0 p-0 code-area">
                                                        <pre className="mb-0"><code className="language-html">
                                                            <Highlight>
                                                                {`
<Placeholder xs={12} size="lg" />
<Placeholder xs={12} />
<Placeholder xs={12} size="sm" />
<Placeholder xs={12} size="xs" />
    `}
                                                            </Highlight>
                                                        </code></pre>
                                                    </div>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Card>
                                    </Tab.Container>
                                </Col>
                                <Col xl={12}>
                                    <Tab.Container defaultActiveKey="Preview">
                                        <Card name="Placeholder-Colors" className="dz-card">
                                            <Card.Header className=" flex-wrap border-0 pb-2">
                                                <h5>
                                                    <Card.Title> Placeholder Colors </Card.Title>
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
                                                        <Placeholder xs={12} />

                                                        <Placeholder xs={12} bg="primary" />
                                                        <Placeholder xs={12} bg="secondary" />
                                                        <Placeholder xs={12} bg="success" />
                                                        <Placeholder xs={12} bg="danger" />
                                                        <Placeholder xs={12} bg="warning" />
                                                        <Placeholder xs={12} bg="info" />
                                                        <Placeholder xs={12} bg="light" />
                                                        <Placeholder xs={12} bg="dark" />
                                                    </Card.Body>

                                                </Tab.Pane>
                                                <Tab.Pane eventKey="Code">
                                                    <div className="card-body pt-0 p-0 code-area">
                                                        <pre className="mb-0"><code className="language-html">
                                                            <Highlight>
                                                                {`
<Placeholder xs={12} /> 
<Placeholder xs={12} bg="primary" />
<Placeholder xs={12} bg="secondary" />
<Placeholder xs={12} bg="success" />
<Placeholder xs={12} bg="danger" />
<Placeholder xs={12} bg="warning" />
<Placeholder xs={12} bg="info" />
<Placeholder xs={12} bg="light" />
<Placeholder xs={12} bg="dark" />
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

export default UiPlaceHolder;
