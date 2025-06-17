import { Fragment, useEffect, useState } from "react";
import { Link } from 'react-scroll';
import Highlight from "react-highlight";
import { Row, Col, Card, Button, Dropdown, ButtonGroup, Tab, Nav, Stack } from "react-bootstrap";
import PageTitle from "../../layouts/PageTitle";

const sidebarLink = [
  { title: 'Default Button', to: 'default-button' },
  { title: 'Button Sizes', to: 'button-sizes' },
  { title: 'Button Sizes Icon', to: 'button-icon-style' },
  { title: 'Button Style', to: 'button-style' },
  { title: 'CTA Buttons', to: 'button-right-icons' },
  { title: 'Dropdown Button', to: 'dropdown-button' },
  { title: 'Buttons Transparent', to: 'button-transparent' },
  { title: 'Disabled Button', to: 'disabled-button' },
  { title: 'Square Buttons', to: 'square-buttons' },
  { title: 'Button Block', to: 'button-block' },
  { title: 'Social Button', to: 'social-button' },
];

const buttonTypes = [
  { variant: 'white', title: 'White Button' },
  { variant: 'primary', title: 'Primary Button' },
  { variant: 'secondary', title: 'Secondary Button' },
  { variant: 'danger', title: 'Danger Button' },
  { variant: 'success', title: 'Success Button' },
  { variant: 'warning', title: 'Warning Button' },
  { variant: 'info', title: 'Info Button' },
  { variant: 'dark', title: 'Dark Button' },
  { variant: 'light', title: 'Light Button' },
];

const UiButton = () => {
  const [activeLink, setActiveLink] = useState(0);
  useEffect(() => {
    const element = document.querySelector('.content-body')
    element.classList.add('btn-page')
  }, [])

  return (
    <Fragment>
      <PageTitle activeMenu="Button" pageContent="Button" motherMenu="Home"
      />
      <div className="container">
        <div className="element-wrapper">
          <div className="element-right">
            <div className="p-4 border-bottom">
              <h2>Buttons.</h2>
              <p>Make use of Bootstrap's unique button styles to enhance actions in forms, dialogs, and
                various other elements, featuring comprehensive support for multiple sizes, states, and
                additional functionalities.</p>
              <Link to={"#"} className="btn btn-primary">Buttons on Bootstrap</Link>
            </div>
            <div className="demo-right-inner dz-scroll">
              <h4 className="title">Button</h4>
              <div className="demo-right-tabs" id="right-sidebar">
                <ul className="navbar-nav" id="menu-bar">
                  {sidebarLink.map((item, ind) => (
                    <li key={ind} className={ind === activeLink ? 'active' : ''} >
                      <Link to={item.to}
                        className={`scroll c-pointer`}
                        activeclass="active"
                        spy={true}
                        smooth={true}
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
            <div className="container-fluid ">
              <Row>
                <Col lg="12">
                  <Tab.Container defaultActiveKey="Preview">
                    <Card name="default-button" className="dz-card">
                      <Card.Header className="card-header flex-wrap d-flex justify-content-between border-0">
                        <div>
                          <Card.Title> Default Button</Card.Title>
                        </div>
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
                          {buttonTypes.map(({ variant, title }, idx) => (
                            <Card.Body key={idx} className="mb-4 pt-0">
                              <h4 className="card-title text-uppercase">{title}</h4>
                              <Row className="row column-5">
                                <Col>
                                  <label className="column-head">Filled</label>
                                  <Button variant={variant}>Button</Button>
                                </Col>
                                <Col>
                                  <label className="column-head">Outline</label>
                                  <Button variant={`outline-${variant}`}>Button</Button>
                                </Col>
                                <Col>
                                  <label className="column-head">Light</label>
                                  <Button variant={variant} className="light">Button</Button>
                                </Col>
                                <Col>
                                  <label className="column-head">Hover</label>
                                  <Button variant={variant} active>Button</Button>
                                </Col>
                                <Col>
                                  <label className="column-head">Link</label>
                                  <Button variant="link" className={`btn-${variant}`}>Button</Button>
                                </Col>
                              </Row>
                            </Card.Body>
                          ))}
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0"><code className="language-html">
                              <Highlight>
                                {`
     {buttonTypes.map(({ variant, title }, idx) => (
        <Card className="mb-4 pt-0" key={idx}>
          <Card.Body>
            <h4 className="card-title text-uppercase">{title}</h4>
            <Row className="row-cols-5 text-center">
              <Col>
                <label className="column-head">Filled</label>
                <Button variant={variant}>Button</Button>
              </Col>
              <Col>
                <label className="column-head">Outline</label>
                <Button variant={outline-\${variant}}>Button</Button>
              </Col>
              <Col>
                <label className="column-head">Light</label>
                <Button variant={variant} className="light">Button</Button>
              </Col>
              <Col>
                <label className="column-head">Hover</label>
                <Button variant={variant} active>Button</Button>
              </Col>
              <Col>
                <label className="column-head">Link</label>
                <Button variant="link" className={text-\${variant}}>Button</Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
      `}
                              </Highlight>
                            </code></pre>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Card>
                  </Tab.Container>
                </Col>
                <Col lg="12">
                  <Tab.Container defaultActiveKey="Preview">
                    <Card name="button-sizes" className="dz-card">
                      <Card.Header className="card-header flex-wrap d-flex justify-content-between border-0">
                        <div>
                          <Card.Title>Buttons Sizes</Card.Title>
                          <Card.Text className="mb-0 subtitle"> Fancy larger or smaller buttons? Add <code> .btn-lg </code> or <code> .btn-sm </code> for additional sizes. </Card.Text>
                        </div>
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
                          <Card.Body className="pt-0">
                            <Row className="column-5">
                              <Col>
                                <label className="column-head">Large</label>
                                <Button variant="primary" size="lg">Button</Button>
                              </Col>
                              <Col>
                                <label className="column-head">Medium</label>
                                <Button variant="primary">Button</Button>
                              </Col>
                              <Col>
                                <label className="column-head">Small</label>
                                <Button variant="primary" size="sm">Button</Button>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0"><code className="language-html">
                              <Highlight>
                                {`
  <Card.Body className="pt-0">
    <Row className="column-5">
      <Col>
        <label className="column-head">Large</label>
        <Button variant="primary" size="lg">Button</Button>
      </Col>
      <Col>
        <label className="column-head">Medium</label>
        <Button variant="primary">Button</Button>
      </Col>
      <Col>
        <label className="column-head">Small</label>
        <Button variant="primary" size="sm">Button</Button>
      </Col>
    </Row>
  </Card.Body>
      `}
                              </Highlight>
                            </code></pre>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Card>
                  </Tab.Container>
                </Col>
                <Col lg="12">
                  <Tab.Container defaultActiveKey="Preview">
                    <Card name="button-icon-style" className="dz-card">
                      <Card.Header className="card-header flex-wrap d-flex justify-content-between border-0">
                        <div>
                          <Card.Title>Button Sizes Icon</Card.Title>
                          <Card.Text className="mb-0 subtitle"> Fancy larger or smaller buttons? Add <code> .btn-lg</code> or <code> .btn-sm</code> to change the style </Card.Text>
                        </div>
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
                          <Card.Body className="pt-0">
                            <Row>
                              <Col md={3}>
                                <label className="column-head">Loading Icon</label>
                                <Button variant="info" className="d-flex align-items-center">
                                  <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                                    <path d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8Z" fill="white" fillOpacity="0.3" />
                                    <path d="M16 8C16 6.52462 15.592 5.07798 14.8211 3.82001C14.0502 2.56204 12.9465 1.54176 11.6319 0.871948C10.3174 0.20214 8.84316 -0.0910955 7.37233 0.0246613C5.9015 0.140418 4.49132 0.660658 3.29772 1.52786C2.10411 2.39507 1.17357 3.57546 0.608964 4.93853C0.0443609 6.3016 -0.132307 7.79426 0.0984932 9.25148C0.329293 10.7087 0.95857 12.0737 1.91675 13.1956C2.87493 14.3175 4.12469 15.1525 5.52786 15.6085L6.1459 13.7063C5.09352 13.3644 4.1562 12.7381 3.43756 11.8967C2.71893 11.0553 2.24697 10.0315 2.07387 8.93861C1.90077 7.8457 2.03327 6.7262 2.45672 5.7039C2.88018 4.68159 3.57808 3.7963 4.47329 3.1459C5.36849 2.49549 6.42612 2.10531 7.52925 2.0185C8.63237 1.93168 9.73801 2.1516 10.7239 2.65396C11.7099 3.15632 12.5377 3.92153 13.1158 4.86501C13.694 5.80848 14 6.89347 14 8H16Z" fill="white" />
                                  </svg>
                                  Loading
                                </Button>
                              </Col>

                              <Col md={3}>
                                <label className="column-head">Edit Icon</label>
                                <Button variant="primary" className="d-flex align-items-center">
                                  <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                                    <g clipPath="url(#clip0)">
                                      <path d="M11.334 2.00004C11.5091 1.82494 11.7169 1.68605 11.9457 1.59129C12.1745 1.49653 12.4197 1.44775 12.6673 1.44775C12.9149 1.44775 13.1601 1.49653 13.3889 1.59129C13.6177 1.68605 13.8256 1.82494 14.0007 2.00004C14.1757 2.17513 14.3146 2.383 14.4094 2.61178C14.5042 2.84055 14.5529 3.08575 14.5529 3.33337C14.5529 3.58099 14.5042 3.82619 14.4094 4.05497C14.3146 4.28374 14.1757 4.49161 14.0007 4.66671L5.00065 13.6667L1.33398 14.6667L2.33398 11L11.334 2.00004Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0"><rect width="16" height="16" fill="white" /></clipPath>
                                    </defs>
                                  </svg>
                                  Edit
                                </Button>
                              </Col>

                              <Col md={3}>
                                <label className="column-head">Download Button</label>
                                <Button variant="light" className="d-flex align-items-center justify-content-center">
                                  Download
                                  <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                    <path d="M14.5 10V12.6667C14.5 13.0203 14.3595 13.3594 14.1095 13.6095C13.8594 13.8595 13.5203 14 13.1667 14H3.83333C3.47971 14 3.14057 13.8595 2.89052 13.6095C2.64048 13.3594 2.5 13.0203 2.5 12.6667V10" stroke="#1D69D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M5.16602 6.66675L8.49935 10.0001L11.8327 6.66675" stroke="#1D69D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8.5 10V2" stroke="#1D69D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                </Button>
                              </Col>

                              <Col md={3}>
                                <label className="column-head">Icon Button</label>
                                <Button variant="primary" className="d-flex align-items-center">
                                  <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                    <g clipPath="url(#clip1)">
                                      <path d="M5.76613 2.24995L8.5005 5.1562L11.2349 2.24995H5.76613ZM12.4974 3.09683L10.2349 5.49995H14.2661L12.4974 3.09683ZM14.0599 6.99995H8.5005H2.94113L8.5005 13.1343L14.0599 6.99995ZM2.73488 5.49995H6.76613L4.50363 3.09683L2.73488 5.49995ZM16.3068 6.75308L9.05675 14.7531C8.91613 14.9093 8.713 15 8.5005 15C8.288 15 8.088 14.9093 7.94425 14.7531L0.69425 6.75308C0.453625 6.48745 0.434875 6.09058 0.647375 5.80308L4.14738 1.05308C4.288 0.862451 4.513 0.746826 4.7505 0.746826H12.2505C12.488 0.746826 12.713 0.859326 12.8536 1.05308L16.3536 5.80308C16.5661 6.09058 16.5443 6.48745 16.3068 6.75308Z" fill="white" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip1"><rect width="16" height="16" fill="white" transform="translate(0.5)" /></clipPath>
                                    </defs>
                                  </svg>
                                  Exclusive
                                </Button>
                              </Col>

                              <Col md={3} className="mt-3">
                                <label className="column-head">Logout Button</label>
                                <Button variant="primary" className="btn-light d-flex align-items-center">
                                  Logout
                                  <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                    <path d="M6.5 14H3.83333C3.47971 14 3.14057 13.8595 2.89052 13.6095C2.64048 13.3594 2.5 13.0203 2.5 12.6667V3.33333C2.5 2.97971 2.64048 2.64057 2.89052 2.39052C3.14057 2.14048 3.47971 2 3.83333 2H6.5" stroke="#1D69D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.166 11.3334L14.4993 8.00008L11.166 4.66675" stroke="#1D69D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M14.5 8H6.5" stroke="#1D69D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                </Button>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0"><code className="language-html">
                              <Highlight>
                                {`
        <Card.Body>
        <Row>
          <Col md={3}>
            <label className="column-head">Loading Icon</label>
            <Button variant="info" className="d-flex align-items-center">
              <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                <path d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8Z" fill="white" fillOpacity="0.3"/>
                <path d="M16 8C16 6.52462 15.592 5.07798 14.8211 3.82001C14.0502 2.56204 12.9465 1.54176 11.6319 0.871948C10.3174 0.20214 8.84316 -0.0910955 7.37233 0.0246613C5.9015 0.140418 4.49132 0.660658 3.29772 1.52786C2.10411 2.39507 1.17357 3.57546 0.608964 4.93853C0.0443609 6.3016 -0.132307 7.79426 0.0984932 9.25148C0.329293 10.7087 0.95857 12.0737 1.91675 13.1956C2.87493 14.3175 4.12469 15.1525 5.52786 15.6085L6.1459 13.7063C5.09352 13.3644 4.1562 12.7381 3.43756 11.8967C2.71893 11.0553 2.24697 10.0315 2.07387 8.93861C1.90077 7.8457 2.03327 6.7262 2.45672 5.7039C2.88018 4.68159 3.57808 3.7963 4.47329 3.1459C5.36849 2.49549 6.42612 2.10531 7.52925 2.0185C8.63237 1.93168 9.73801 2.1516 10.7239 2.65396C11.7099 3.15632 12.5377 3.92153 13.1158 4.86501C13.694 5.80848 14 6.89347 14 8H16Z" fill="white"/>
              </svg>
              Loading
            </Button>
          </Col>

          <Col md={3}>
            <label className="column-head">Edit Icon</label>
            <Button variant="primary" className="d-flex align-items-center">
              <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                <g clipPath="url(#clip0)">
                  <path d="M11.334 2.00004C11.5091 1.82494 11.7169 1.68605 11.9457 1.59129C12.1745 1.49653 12.4197 1.44775 12.6673 1.44775C12.9149 1.44775 13.1601 1.49653 13.3889 1.59129C13.6177 1.68605 13.8256 1.82494 14.0007 2.00004C14.1757 2.17513 14.3146 2.383 14.4094 2.61178C14.5042 2.84055 14.5529 3.08575 14.5529 3.33337C14.5529 3.58099 14.5042 3.82619 14.4094 4.05497C14.3146 4.28374 14.1757 4.49161 14.0007 4.66671L5.00065 13.6667L1.33398 14.6667L2.33398 11L11.334 2.00004Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                  <clipPath id="clip0"><rect width="16" height="16" fill="white"/></clipPath>
                </defs>
              </svg>
              Edit
            </Button>
          </Col>

          <Col md={3}>
            <label className="column-head">Download Button</label>
            <Button variant="light" className="d-flex align-items-center justify-content-center">
              Download
              <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                <path d="M14.5 10V12.6667C14.5 13.0203 14.3595 13.3594 14.1095 13.6095C13.8594 13.8595 13.5203 14 13.1667 14H3.83333C3.47971 14 3.14057 13.8595 2.89052 13.6095C2.64048 13.3594 2.5 13.0203 2.5 12.6667V10" stroke="#1D69D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.16602 6.66675L8.49935 10.0001L11.8327 6.66675" stroke="#1D69D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.5 10V2" stroke="#1D69D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Button>
          </Col>

          <Col md={3}>
            <label className="column-head">Icon Button</label>
            <Button variant="primary" className="d-flex align-items-center">
              <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                <g clipPath="url(#clip1)">
                  <path d="M5.76613 2.24995L8.5005 5.1562L11.2349 2.24995H5.76613ZM12.4974 3.09683L10.2349 5.49995H14.2661L12.4974 3.09683ZM14.0599 6.99995H8.5005H2.94113L8.5005 13.1343L14.0599 6.99995ZM2.73488 5.49995H6.76613L4.50363 3.09683L2.73488 5.49995ZM16.3068 6.75308L9.05675 14.7531C8.91613 14.9093 8.713 15 8.5005 15C8.288 15 8.088 14.9093 7.94425 14.7531L0.69425 6.75308C0.453625 6.48745 0.434875 6.09058 0.647375 5.80308L4.14738 1.05308C4.288 0.862451 4.513 0.746826 4.7505 0.746826H12.2505C12.488 0.746826 12.713 0.859326 12.8536 1.05308L16.3536 5.80308C16.5661 6.09058 16.5443 6.48745 16.3068 6.75308Z" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip1"><rect width="16" height="16" fill="white" transform="translate(0.5)"/></clipPath>
                </defs>
              </svg>
              Exclusive
            </Button>
          </Col>

          <Col md={3} className="mt-3">
            <label className="column-head">Logout Button</label>
            <Button variant="primary" className="btn-light d-flex align-items-center">
              Logout
              <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                <path d="M6.5 14H3.83333C3.47971 14 3.14057 13.8595 2.89052 13.6095C2.64048 13.3594 2.5 13.0203 2.5 12.6667V3.33333C2.5 2.97971 2.64048 2.64057 2.89052 2.39052C3.14057 2.14048 3.47971 2 3.83333 2H6.5" stroke="#1D69D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.166 11.3334L14.4993 8.00008L11.166 4.66675" stroke="#1D69D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.5 8H6.5" stroke="#1D69D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Button>
          </Col>
        </Row>
      </Card.Body>
      `}
                              </Highlight>
                            </code></pre>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Card>
                  </Tab.Container>
                </Col>
                <Col lg="12">
                  <Tab.Container defaultActiveKey="Preview">
                    <Card name="button-style" className="dz-card">
                      <Card.Header className="card-header flex-wrap d-flex justify-content-between border-0">
                        <div>
                          <Card.Title>Button Style</Card.Title>
                          <Card.Text className="mb-0 subtitle"> Fancy larger or smaller buttons? Add <code> .btn-lg</code> or <code> .btn-sm</code> for additional sizes. </Card.Text>
                        </div>
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
                          <div className="card-body pt-0">
                            <Row className="column-5">
                              <Col>
                                <label className="column-head">Round Button</label>
                                <Button variant="primary" size="md">Button</Button>
                              </Col>
                              <Col>
                                <label className="column-head">Sharp Button</label>
                                <Button variant="primary" size="md" className="rounded-0">Button</Button>
                              </Col>
                              <Col>
                                <label className="column-head">Rounded</label>
                                <Button variant="primary" size="md" className="rounded-pill">Button</Button>
                              </Col>
                              <Col>
                                <label className="column-head">Shadow</label>
                                <Button variant="primary" size="md" className="shadow-lg">Button</Button>
                              </Col>
                              <Col>
                                <label className="column-head">Outline</label>
                                <Button variant="outline-primary" size="md">Button</Button>
                              </Col>
                            </Row>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0"><code className="language-html">
                              <Highlight>
                                {`
<div className="card-body pt-0">
<Row className="column-5">
  <Col>
    <label className="column-head">Round Button</label>
    <Button variant="primary" size="md">Button</Button>
  </Col>
  <Col>
    <label className="column-head">Sharp Button</label>
    <Button variant="primary" size="md" className="rounded-0">Button</Button>
  </Col>
  <Col>
    <label className="column-head">Rounded</label>
    <Button variant="primary" size="md" className="rounded-pill">Button</Button>
  </Col>
  <Col>
    <label className="column-head">Shadow</label>
    <Button variant="primary" size="md" className="shadow-lg">Button</Button>
  </Col>
  <Col>
    <label className="column-head">Outline</label>
    <Button variant="outline-primary" size="md">Button</Button>
  </Col>
</Row>
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
                <Col lg="12">
                  <Tab.Container defaultActiveKey="Preview">
                    <Card name="button-right-icons" className="dz-card">
                      <Card.Header className="card-header flex-wrap d-flex justify-content-between border-0">
                        <div>
                          <Card.Title>CTA Buttons</Card.Title>
                          <Card.Text className="mb-0 subtitle"> Fancy larger or smaller buttons? Add <code> .btn-lg</code> or <code> .btn-sm</code> for additional sizes. </Card.Text>
                        </div>
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
                          <div className="card-body pt-0">
                            <Row className="column-4 gx-2">
                              <Col>
                                <label className="column-head">Round</label>
                                <Button variant="primary"> Add To Cart{" "}
                                  <span className="btn-icon-end">
                                    <i className="fa fa-shopping-cart" />
                                  </span>
                                </Button>
                              </Col>

                              <Col>
                                <label className="column-head">Sharp</label>
                                <Button variant="primary" className="rounded-0">  Add To Cart{" "}
                                  <span className="btn-icon-end">
                                    <i className="fa fa-shopping-cart" />
                                  </span>
                                </Button>
                              </Col>

                              <Col>
                                <label className="column-head">Rounded</label>
                                <Button variant="primary" className="rounded-pill"> Add To Cart{" "}
                                  <span className="btn-icon-end">
                                    <i className="fas fa-times" />
                                  </span>
                                </Button>
                              </Col>

                              <Col>
                                <label className="column-head">Outline</label>
                                <Button variant="outline-primary"> Add To Cart{" "}
                                  <span className="btn-icon-end">
                                    <i className="fa fa-shopping-cart" />
                                  </span>
                                </Button>
                              </Col>

                              <Col>
                                <Button variant="secondary" className="rounded-0"> Download{" "}
                                  <span className="icon-box icon-box-sm bg-white ms-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                      <path
                                        d="M14 13.125C14 13.6082 13.6082 14 13.125 14H0.875C0.391754 14 0 13.6082 0 13.125C0 12.6418 0.391754 12.25 0.875 12.25H13.125C13.6082 12.25 14 12.6418 14 13.125ZM6.38129 10.3531C6.55216 10.524 6.77605 10.6094 7 10.6094C7.22389 10.6094 7.44789 10.524 7.61871 10.3531L10.7189 7.25296C11.0606 6.91124 11.0606 6.35723 10.7189 6.01552C10.3772 5.6738 9.82316 5.6738 9.48145 6.01552L7.875 7.62196V0.875C7.875 0.391754 7.48325 0 7 0C6.51675 0 6.125 0.391754 6.125 0.875V7.62196L4.51855 6.01552C4.17684 5.6738 3.62283 5.6738 3.28111 6.01552C2.9394 6.35723 2.9394 6.91124 3.28111 7.25296L6.38129 10.3531Z"
                                        fill="#1F2025"
                                      />
                                    </svg>
                                  </span>
                                </Button>
                              </Col>

                              <Col>
                                <Button variant="secondary" className="rounded-pill">
                                  Add To Cart{" "}
                                  <span className="icon-box icon-box-sm bg-white ms-3 rounded-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                      <path
                                        d="M14 13.125C14 13.6082 13.6082 14 13.125 14H0.875C0.391754 14 0 13.6082 0 13.125C0 12.6418 0.391754 12.25 0.875 12.25H13.125C13.6082 12.25 14 12.6418 14 13.125ZM6.38129 10.3531C6.55216 10.524 6.77605 10.6094 7 10.6094C7.22389 10.6094 7.44789 10.524 7.61871 10.3531L10.7189 7.25296C11.0606 6.91124 11.0606 6.35723 10.7189 6.01552C10.3772 5.6738 9.82316 5.6738 9.48145 6.01552L7.875 7.62196V0.875C7.875 0.391754 7.48325 0 7 0C6.51675 0 6.125 0.391754 6.125 0.875V7.62196L4.51855 6.01552C4.17684 5.6738 3.62283 5.6738 3.28111 6.01552C2.9394 6.35723 2.9394 6.91124 3.28111 7.25296L6.38129 10.3531Z"
                                        fill="#1F2025"
                                      />
                                    </svg>
                                  </span>
                                </Button>
                              </Col>

                              <Col>
                                <Button variant="outline-secondary">
                                  Add To Cart{" "}
                                  <span className="icon-box icon-box-sm bg-secondary ms-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                      <path
                                        d="M14 13.125C14 13.6082 13.6082 14 13.125 14H0.875C0.391754 14 0 13.6082 0 13.125C0 12.6418 0.391754 12.25 0.875 12.25H13.125C13.6082 12.25 14 12.6418 14 13.125ZM6.38129 10.3531C6.55216 10.524 6.77605 10.6094 7 10.6094C7.22389 10.6094 7.44789 10.524 7.61871 10.3531L10.7189 7.25296C11.0606 6.91124 11.0606 6.35723 10.7189 6.01552C10.3772 5.6738 9.82316 5.6738 9.48145 6.01552L7.875 7.62196V0.875C7.875 0.391754 7.48325 0 7 0C6.51675 0 6.125 0.391754 6.125 0.875V7.62196L4.51855 6.01552C4.17684 5.6738 3.62283 5.6738 3.28111 6.01552C2.9394 6.35723 2.9394 6.91124 3.28111 7.25296L6.38129 10.3531Z"
                                        fill="#fff"
                                      />
                                    </svg>
                                  </span>
                                </Button>
                              </Col>
                            </Row>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0"><code className="language-html">
                              <Highlight>
                                {`
<div className="card-body pt-0">
  <Row className="column-4 gx-2">
    <Col>
      <label className="column-head">Round</label>
      <Button variant="primary"> Add To Cart{" "}
        <span className="btn-icon-end">
          <i className="fa fa-shopping-cart" />
        </span>
      </Button>
    </Col>

    <Col>
      <label className="column-head">Sharp</label>
      <Button variant="primary" className="rounded-0">  Add To Cart{" "}
        <span className="btn-icon-end">
          <i className="fa fa-shopping-cart" />
        </span>
      </Button>
    </Col>

    <Col>
      <label className="column-head">Rounded</label>
      <Button variant="primary" className="rounded-pill"> Add To Cart{" "}
        <span className="btn-icon-end">
          <i className="fas fa-times" />
        </span>
      </Button>
    </Col>

    <Col>
      <label className="column-head">Outline</label>
      <Button variant="outline-primary"> Add To Cart{" "}
        <span className="btn-icon-end">
          <i className="fa fa-shopping-cart" />
        </span>
      </Button>
    </Col>

    <Col>
      <Button variant="secondary" className="rounded-0"> Download{" "}
        <span className="icon-box icon-box-sm bg-white ms-3"> 
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M14 13.125C14 13.6082 13.6082 14 13.125 14H0.875C0.391754 14 0 13.6082 0 13.125C0 12.6418 0.391754 12.25 0.875 12.25H13.125C13.6082 12.25 14 12.6418 14 13.125ZM6.38129 10.3531C6.55216 10.524 6.77605 10.6094 7 10.6094C7.22389 10.6094 7.44789 10.524 7.61871 10.3531L10.7189 7.25296C11.0606 6.91124 11.0606 6.35723 10.7189 6.01552C10.3772 5.6738 9.82316 5.6738 9.48145 6.01552L7.875 7.62196V0.875C7.875 0.391754 7.48325 0 7 0C6.51675 0 6.125 0.391754 6.125 0.875V7.62196L4.51855 6.01552C4.17684 5.6738 3.62283 5.6738 3.28111 6.01552C2.9394 6.35723 2.9394 6.91124 3.28111 7.25296L6.38129 10.3531Z"
              fill="#1F2025"
            />
          </svg>
        </span>
      </Button>
    </Col>

    <Col>
      <Button variant="secondary" className="rounded-pill">
        Add To Cart{" "}
        <span className="icon-box icon-box-sm bg-white ms-3 rounded-circle">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M14 13.125C14 13.6082 13.6082 14 13.125 14H0.875C0.391754 14 0 13.6082 0 13.125C0 12.6418 0.391754 12.25 0.875 12.25H13.125C13.6082 12.25 14 12.6418 14 13.125ZM6.38129 10.3531C6.55216 10.524 6.77605 10.6094 7 10.6094C7.22389 10.6094 7.44789 10.524 7.61871 10.3531L10.7189 7.25296C11.0606 6.91124 11.0606 6.35723 10.7189 6.01552C10.3772 5.6738 9.82316 5.6738 9.48145 6.01552L7.875 7.62196V0.875C7.875 0.391754 7.48325 0 7 0C6.51675 0 6.125 0.391754 6.125 0.875V7.62196L4.51855 6.01552C4.17684 5.6738 3.62283 5.6738 3.28111 6.01552C2.9394 6.35723 2.9394 6.91124 3.28111 7.25296L6.38129 10.3531Z"
              fill="#1F2025"
            />
          </svg>
        </span>
      </Button>
    </Col>

    <Col>
      <Button variant="outline-secondary">
        Add To Cart{" "}
        <span className="icon-box icon-box-sm bg-secondary ms-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M14 13.125C14 13.6082 13.6082 14 13.125 14H0.875C0.391754 14 0 13.6082 0 13.125C0 12.6418 0.391754 12.25 0.875 12.25H13.125C13.6082 12.25 14 12.6418 14 13.125ZM6.38129 10.3531C6.55216 10.524 6.77605 10.6094 7 10.6094C7.22389 10.6094 7.44789 10.524 7.61871 10.3531L10.7189 7.25296C11.0606 6.91124 11.0606 6.35723 10.7189 6.01552C10.3772 5.6738 9.82316 5.6738 9.48145 6.01552L7.875 7.62196V0.875C7.875 0.391754 7.48325 0 7 0C6.51675 0 6.125 0.391754 6.125 0.875V7.62196L4.51855 6.01552C4.17684 5.6738 3.62283 5.6738 3.28111 6.01552C2.9394 6.35723 2.9394 6.91124 3.28111 7.25296L6.38129 10.3531Z"
              fill="#fff"
            />
          </svg>
        </span>
      </Button>
    </Col>
  </Row>
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
                <Col lg="12">
                  <Tab.Container defaultActiveKey="Preview">
                    <Card name="dropdown-button" className="dz-card">
                      <Card.Header className="card-header flex-wrap d-flex justify-content-between border-0 ">
                        <div>
                          <Card.Title>Dropdown Button</Card.Title>
                          <Card.Text className="mb-0 subtitle"> Fancy larger or smaller buttons? Add <code> .btn-lg</code> or <code> .btn-sm</code> for additional sizes. </Card.Text>
                        </div>
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
                          <div className="card-body pt-0">
                            <div className="row">
                              <div className="col-4">
                                <label className="column-head">Default</label>
                                <Dropdown>
                                  <Dropdown.Toggle variant="outline-light">
                                    Dropdown
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu>
                                    <Dropdown.Item href="#">Action</Dropdown.Item>
                                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                              <div className="col-4">
                                <label className="column-head">Dropdown Block</label>
                                <Dropdown as={ButtonGroup}>
                                  <Dropdown.Toggle variant="primary">
                                    <svg className="me-2" xmlns="http://www.w3.org/2000/svg"
                                      width="16" height="16" viewBox="0 0 16 16"
                                      fill="none">
                                      <path
                                        d="M9.33268 1.33337H3.99935C3.64573 1.33337 3.30659 1.47385 3.05654 1.7239C2.80649 1.97395 2.66602 2.31309 2.66602 2.66671V13.3334C2.66602 13.687 2.80649 14.0261 3.05654 14.2762C3.30659 14.5262 3.64573 14.6667 3.99935 14.6667H11.9993C12.353 14.6667 12.6921 14.5262 12.9422 14.2762C13.1922 14.0261 13.3327 13.687 13.3327 13.3334V5.33337L9.33268 1.33337Z"
                                        stroke="white" strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round" />
                                      <path d="M9.33398 1.33337V5.33337H13.334"
                                        stroke="white" strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round" />
                                      <path d="M10.6673 8.66663H5.33398"
                                        stroke="white" strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round" />
                                      <path d="M10.6673 11.3334H5.33398"
                                        stroke="white" strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round" />
                                      <path d="M6.66732 6H6.00065H5.33398"
                                        stroke="white" strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round" />
                                    </svg> Download PDF
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu>
                                    <Dropdown.Item href="#">Action</Dropdown.Item>
                                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                              <div className="col-4">
                                <label className="column-head">Rounded</label>
                                <Dropdown>
                                  <Dropdown.Toggle variant="primary" className="rounded-pill">
                                    Drop up
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu>
                                    <Dropdown.Item href="#">Action</Dropdown.Item>
                                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </div>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0"><code className="language-html">
                              <Highlight>
                                {`
      <div className="card-body pt-0">
        <div className="row">
          <div className="col-4">
            <label className="column-head">Default</label>
            <Dropdown>
              <Dropdown.Toggle variant="outline-light">
                Dropdown
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="col-4">
            <label className="column-head">Dropdown Block</label>
            <Dropdown as={ButtonGroup}>
              <Dropdown.Toggle variant="primary">
                <svg className="me-2" xmlns="http://www.w3.org/2000/svg"
                  width="16" height="16" viewBox="0 0 16 16"
                  fill="none">
                  <path
                    d="M9.33268 1.33337H3.99935C3.64573 1.33337 3.30659 1.47385 3.05654 1.7239C2.80649 1.97395 2.66602 2.31309 2.66602 2.66671V13.3334C2.66602 13.687 2.80649 14.0261 3.05654 14.2762C3.30659 14.5262 3.64573 14.6667 3.99935 14.6667H11.9993C12.353 14.6667 12.6921 14.5262 12.9422 14.2762C13.1922 14.0261 13.3327 13.687 13.3327 13.3334V5.33337L9.33268 1.33337Z"
                    stroke="white" strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round" />
                  <path d="M9.33398 1.33337V5.33337H13.334"
                    stroke="white" strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round" />
                  <path d="M10.6673 8.66663H5.33398"
                    stroke="white" strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round" />
                  <path d="M10.6673 11.3334H5.33398"
                    stroke="white" strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round" />
                  <path d="M6.66732 6H6.00065H5.33398"
                    stroke="white" strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round" />
                </svg> Download PDF
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="col-4">
            <label className="column-head">Rounded</label>
            <Dropdown>
              <Dropdown.Toggle variant="primary" className="rounded-pill">
                Drop up
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
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
                <Col lg="12">
                  <Tab.Container defaultActiveKey="Preview">
                    <Card name="button-transparent" className="dz-card">
                      <Card.Header className="card-header flex-wrap d-flex justify-content-between border-0 ">
                        <div>
                          <Card.Title>Buttons Transparent</Card.Title>
                          <Card.Text className="mb-0 subtitle"> Default button style <code> .btn-primary</code> and more. </Card.Text>
                        </div>
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
                          <div className="card-body pt-0">
                            <Button variant="primary" className="btn-transparent me-2">Primary</Button>
                            <Button variant="secondary" className="btn-transparent me-2">Secondary</Button>
                            <Button variant="danger" className="btn-transparent me-2">Danger</Button>
                            <Button variant="success" className="btn-transparent me-2">Success</Button>
                            <Button variant="warning" className="btn-transparent me-2">Warning</Button>
                            <Button variant="info" className="btn-transparent me-2">Info</Button>
                            <Button variant="dark" className="btn-transparent me-2">Dark</Button>
                          </div>
                          <div className="card-body pt-0">
                            <h4 className="pb-3 card-title">Light Fill Button</h4>
                            <Button variant="primary" className="light btn-transparent me-2">Primary</Button>
                            <Button variant="secondary" className="light btn-transparent me-2">Secondary</Button>
                            <Button variant="danger" className="light btn-transparent me-2">Danger</Button>
                            <Button variant="success" className="light btn-transparent me-2">Success</Button>
                            <Button variant="warning" className="light btn-transparent me-2">Warning</Button>
                            <Button variant="info" className="light btn-transparent me-2">Info</Button>
                            <Button variant="dark" className="light btn-transparent me-2">Dark</Button>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0"><code className="language-html">
                              <Highlight>
                                {`
<div className="card-body pt-0">
  <Button variant="primary" className="btn-transparent me-2">Primary</Button>
  <Button variant="secondary" className="btn-transparent me-2">Secondary</Button>
  <Button variant="danger" className="btn-transparent me-2">Danger</Button>
  <Button variant="success" className="btn-transparent me-2">Success</Button>
  <Button variant="warning" className="btn-transparent me-2">Warning</Button>
  <Button variant="info" className="btn-transparent me-2">Info</Button>
  <Button variant="dark" className="btn-transparent me-2">Dark</Button>
</div>
<div className="card-body pt-0">
  <h4 className="pb-3 card-title">Light Fill Button</h4>
  <Button variant="primary" className="light btn-transparent me-2">Primary</Button>
  <Button variant="secondary" className="light btn-transparent me-2">Secondary</Button>
  <Button variant="danger" className="light btn-transparent me-2">Danger</Button>
  <Button variant="success" className="light btn-transparent me-2">Success</Button>
  <Button variant="warning" className="light btn-transparent me-2">Warning</Button>
  <Button variant="info" className="light btn-transparent me-2">Info</Button>
  <Button variant="dark" className="light btn-transparent me-2">Dark</Button>
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
                <Col lg="12">
                  <Tab.Container defaultActiveKey="Preview">
                    <Card name="disabled-button" className="dz-card">
                      <Card.Header className="card-header flex-wrap d-flex justify-content-between border-0 ">
                        <div>
                          <Card.Title>Disabled Button</Card.Title>
                          <Card.Text className="mb-0 subtitle"> Default button style <code>disabled="disabled"</code> to change the style </Card.Text>
                        </div>
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
                          <div className="card-body pt-0">
                            <Button
                              variant="primary"
                              className="btn-rounded btn-md me-2"
                              disabled
                            >
                              Primary
                            </Button>
                            <Button
                              variant="dark"
                              className="btn-rounded btn-md"
                              disabled
                            >
                              Secondary
                            </Button>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0"><code className="language-html">
                              <Highlight>
                                {`
       <div className="card-body pt-0">
      <Button
        variant="primary"
        className="btn-rounded btn-md me-2"
        disabled
      >
        Primary
      </Button>
      <Button
        variant="dark"
        className="btn-rounded btn-md"
        disabled
      >
        Secondary
      </Button>
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
                <Col lg="12">
                  <Tab.Container defaultActiveKey="Preview">
                    <Card name="square-buttons" className="dz-card">
                      <Card.Header className="card-header flex-wrap d-flex justify-content-between border-0 ">
                        <div>
                          <Card.Title>Square Buttons</Card.Title>
                          <Card.Text className="mb-0 subtitle"> add <code>.btn-square</code> to change the style </Card.Text>
                        </div>
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
                          <div className="card-body pt-0">
                            <Row>
                              <Col md={4}>
                                <label className="column-head">Round</label>
                                <div className="d-flex">
                                  <Button className="btn-square btn-primary me-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                      height="24" viewBox="0 0 24 24" fill="none">
                                      <path
                                        d="M22.125 8.67447V19.875C22.1244 20.4715 21.8872 21.0435 21.4653 21.4653C21.0435 21.8871 20.4716 22.1244 19.875 22.125H16.125C15.7272 22.125 15.3456 21.9669 15.0643 21.6856C14.783 21.4043 14.625 21.0228 14.625 20.625V16.5C14.625 16.3011 14.546 16.1103 14.4053 15.9696C14.2647 15.829 14.0739 15.75 13.875 15.75H10.125C9.92609 15.75 9.73532 15.829 9.59467 15.9696C9.45402 16.1103 9.375 16.3011 9.375 16.5V20.625C9.375 21.0228 9.21696 21.4043 8.93566 21.6856C8.65436 21.9669 8.27282 22.125 7.875 22.125H4.125C3.52845 22.1244 2.9565 21.8871 2.53467 21.4653C2.11284 21.0435 1.8756 20.4715 1.875 19.875V8.67447C1.87556 8.41545 1.94287 8.16095 2.07043 7.93552C2.19799 7.71008 2.3815 7.52133 2.60325 7.38747L11.2282 2.21247C11.4614 2.07252 11.7282 1.9986 12.0002 1.9986C12.2721 1.9986 12.539 2.07252 12.7721 2.21247L21.3971 7.38747C21.6188 7.52138 21.8022 7.71015 21.9297 7.93558C22.0572 8.16101 22.1245 8.41549 22.125 8.67447Z"
                                        fill="white" />
                                    </svg>
                                  </Button>
                                  <Button className="btn-square btn-primary light me-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                      height="24" viewBox="0 0 24 24" fill="none">
                                      <path
                                        d="M22.125 8.67447V19.875C22.1244 20.4715 21.8872 21.0435 21.4653 21.4653C21.0435 21.8871 20.4716 22.1244 19.875 22.125H16.125C15.7272 22.125 15.3456 21.9669 15.0643 21.6856C14.783 21.4043 14.625 21.0228 14.625 20.625V16.5C14.625 16.3011 14.546 16.1103 14.4053 15.9696C14.2647 15.829 14.0739 15.75 13.875 15.75H10.125C9.92609 15.75 9.73532 15.829 9.59467 15.9696C9.45402 16.1103 9.375 16.3011 9.375 16.5V20.625C9.375 21.0228 9.21696 21.4043 8.93566 21.6856C8.65436 21.9669 8.27282 22.125 7.875 22.125H4.125C3.52845 22.1244 2.9565 21.8871 2.53467 21.4653C2.11284 21.0435 1.8756 20.4715 1.875 19.875V8.67447C1.87556 8.41545 1.94287 8.16095 2.07043 7.93552C2.19799 7.71008 2.3815 7.52133 2.60325 7.38747L11.2282 2.21247C11.4614 2.07252 11.7282 1.9986 12.0002 1.9986C12.2721 1.9986 12.539 2.07252 12.7721 2.21247L21.3971 7.38747C21.6188 7.52138 21.8022 7.71015 21.9297 7.93558C22.0572 8.16101 22.1245 8.41549 22.125 8.67447Z"
                                        fill="var(--primary)" />
                                    </svg>
                                  </Button>
                                  <Button className="btn-square bg-white border-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24"
																	height="24" viewBox="0 0 24 24" fill="white">
																	<path
																		d="M22.125 8.67447V19.875C22.1244 20.4715 21.8872 21.0435 21.4653 21.4653C21.0435 21.8871 20.4716 22.1244 19.875 22.125H16.125C15.7272 22.125 15.3456 21.9669 15.0643 21.6856C14.783 21.4043 14.625 21.0228 14.625 20.625V16.5C14.625 16.3011 14.546 16.1103 14.4053 15.9696C14.2647 15.829 14.0739 15.75 13.875 15.75H10.125C9.92609 15.75 9.73532 15.829 9.59467 15.9696C9.45402 16.1103 9.375 16.3011 9.375 16.5V20.625C9.375 21.0228 9.21696 21.4043 8.93566 21.6856C8.65436 21.9669 8.27282 22.125 7.875 22.125H4.125C3.52845 22.1244 2.9565 21.8871 2.53467 21.4653C2.11284 21.0435 1.8756 20.4715 1.875 19.875V8.67447C1.87556 8.41545 1.94287 8.16095 2.07043 7.93552C2.19799 7.71008 2.3815 7.52133 2.60325 7.38747L11.2282 2.21247C11.4614 2.07252 11.7282 1.9986 12.0002 1.9986C12.2721 1.9986 12.539 2.07252 12.7721 2.21247L21.3971 7.38747C21.6188 7.52138 21.8022 7.71015 21.9297 7.93558C22.0572 8.16101 22.1245 8.41549 22.125 8.67447Z"
																		fill="var(--primary)" />
																</svg>
                                  </Button>
                                </div>
                              </Col>
                              <Col md={4}>
                                <label className="column-head">Rounded</label>
                                <div className="d-flex">
                                  <Button className="btn-square btn-primary rounded-circle me-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                      height="24" viewBox="0 0 24 24" fill="none">
                                      <path
                                        d="M22.125 8.67447V19.875C22.1244 20.4715 21.8872 21.0435 21.4653 21.4653C21.0435 21.8871 20.4716 22.1244 19.875 22.125H16.125C15.7272 22.125 15.3456 21.9669 15.0643 21.6856C14.783 21.4043 14.625 21.0228 14.625 20.625V16.5C14.625 16.3011 14.546 16.1103 14.4053 15.9696C14.2647 15.829 14.0739 15.75 13.875 15.75H10.125C9.92609 15.75 9.73532 15.829 9.59467 15.9696C9.45402 16.1103 9.375 16.3011 9.375 16.5V20.625C9.375 21.0228 9.21696 21.4043 8.93566 21.6856C8.65436 21.9669 8.27282 22.125 7.875 22.125H4.125C3.52845 22.1244 2.9565 21.8871 2.53467 21.4653C2.11284 21.0435 1.8756 20.4715 1.875 19.875V8.67447C1.87556 8.41545 1.94287 8.16095 2.07043 7.93552C2.19799 7.71008 2.3815 7.52133 2.60325 7.38747L11.2282 2.21247C11.4614 2.07252 11.7282 1.9986 12.0002 1.9986C12.2721 1.9986 12.539 2.07252 12.7721 2.21247L21.3971 7.38747C21.6188 7.52138 21.8022 7.71015 21.9297 7.93558C22.0572 8.16101 22.1245 8.41549 22.125 8.67447Z"
                                        fill="white" />
                                    </svg>
                                  </Button>
                                  <Button className="btn-square btn-primary rounded-circle light me-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                      height="24" viewBox="0 0 24 24" fill="none">
                                      <path
                                        d="M22.125 8.67447V19.875C22.1244 20.4715 21.8872 21.0435 21.4653 21.4653C21.0435 21.8871 20.4716 22.1244 19.875 22.125H16.125C15.7272 22.125 15.3456 21.9669 15.0643 21.6856C14.783 21.4043 14.625 21.0228 14.625 20.625V16.5C14.625 16.3011 14.546 16.1103 14.4053 15.9696C14.2647 15.829 14.0739 15.75 13.875 15.75H10.125C9.92609 15.75 9.73532 15.829 9.59467 15.9696C9.45402 16.1103 9.375 16.3011 9.375 16.5V20.625C9.375 21.0228 9.21696 21.4043 8.93566 21.6856C8.65436 21.9669 8.27282 22.125 7.875 22.125H4.125C3.52845 22.1244 2.9565 21.8871 2.53467 21.4653C2.11284 21.0435 1.8756 20.4715 1.875 19.875V8.67447C1.87556 8.41545 1.94287 8.16095 2.07043 7.93552C2.19799 7.71008 2.3815 7.52133 2.60325 7.38747L11.2282 2.21247C11.4614 2.07252 11.7282 1.9986 12.0002 1.9986C12.2721 1.9986 12.539 2.07252 12.7721 2.21247L21.3971 7.38747C21.6188 7.52138 21.8022 7.71015 21.9297 7.93558C22.0572 8.16101 22.1245 8.41549 22.125 8.67447Z"
                                        fill="var(--primary)" />
                                    </svg>
                                  </Button>
                                  <Button className="btn-square  rounded-circle bg-white border-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                      height="24" viewBox="0 0 24 24" fill="none">
                                      <path
                                        d="M22.125 8.67447V19.875C22.1244 20.4715 21.8872 21.0435 21.4653 21.4653C21.0435 21.8871 20.4716 22.1244 19.875 22.125H16.125C15.7272 22.125 15.3456 21.9669 15.0643 21.6856C14.783 21.4043 14.625 21.0228 14.625 20.625V16.5C14.625 16.3011 14.546 16.1103 14.4053 15.9696C14.2647 15.829 14.0739 15.75 13.875 15.75H10.125C9.92609 15.75 9.73532 15.829 9.59467 15.9696C9.45402 16.1103 9.375 16.3011 9.375 16.5V20.625C9.375 21.0228 9.21696 21.4043 8.93566 21.6856C8.65436 21.9669 8.27282 22.125 7.875 22.125H4.125C3.52845 22.1244 2.9565 21.8871 2.53467 21.4653C2.11284 21.0435 1.8756 20.4715 1.875 19.875V8.67447C1.87556 8.41545 1.94287 8.16095 2.07043 7.93552C2.19799 7.71008 2.3815 7.52133 2.60325 7.38747L11.2282 2.21247C11.4614 2.07252 11.7282 1.9986 12.0002 1.9986C12.2721 1.9986 12.539 2.07252 12.7721 2.21247L21.3971 7.38747C21.6188 7.52138 21.8022 7.71015 21.9297 7.93558C22.0572 8.16101 22.1245 8.41549 22.125 8.67447Z"
                                        fill="var(--primary)" />
                                    </svg>
                                  </Button>
                                </div>
                              </Col>
                              <Col md={4}>
                                <label className="column-head">Sharp</label>
                                <div className="d-flex">
                                  <Button className="btn-square btn-primary rounded-0 me-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                      height="24" viewBox="0 0 24 24" fill="none">
                                      <path
                                        d="M22.125 8.67447V19.875C22.1244 20.4715 21.8872 21.0435 21.4653 21.4653C21.0435 21.8871 20.4716 22.1244 19.875 22.125H16.125C15.7272 22.125 15.3456 21.9669 15.0643 21.6856C14.783 21.4043 14.625 21.0228 14.625 20.625V16.5C14.625 16.3011 14.546 16.1103 14.4053 15.9696C14.2647 15.829 14.0739 15.75 13.875 15.75H10.125C9.92609 15.75 9.73532 15.829 9.59467 15.9696C9.45402 16.1103 9.375 16.3011 9.375 16.5V20.625C9.375 21.0228 9.21696 21.4043 8.93566 21.6856C8.65436 21.9669 8.27282 22.125 7.875 22.125H4.125C3.52845 22.1244 2.9565 21.8871 2.53467 21.4653C2.11284 21.0435 1.8756 20.4715 1.875 19.875V8.67447C1.87556 8.41545 1.94287 8.16095 2.07043 7.93552C2.19799 7.71008 2.3815 7.52133 2.60325 7.38747L11.2282 2.21247C11.4614 2.07252 11.7282 1.9986 12.0002 1.9986C12.2721 1.9986 12.539 2.07252 12.7721 2.21247L21.3971 7.38747C21.6188 7.52138 21.8022 7.71015 21.9297 7.93558C22.0572 8.16101 22.1245 8.41549 22.125 8.67447Z"
                                        fill="white" />
                                    </svg>
                                  </Button>
                                  <Button className="btn-square btn-primary rounded-0 light me-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                      height="24" viewBox="0 0 24 24" fill="none">
                                      <path
                                        d="M22.125 8.67447V19.875C22.1244 20.4715 21.8872 21.0435 21.4653 21.4653C21.0435 21.8871 20.4716 22.1244 19.875 22.125H16.125C15.7272 22.125 15.3456 21.9669 15.0643 21.6856C14.783 21.4043 14.625 21.0228 14.625 20.625V16.5C14.625 16.3011 14.546 16.1103 14.4053 15.9696C14.2647 15.829 14.0739 15.75 13.875 15.75H10.125C9.92609 15.75 9.73532 15.829 9.59467 15.9696C9.45402 16.1103 9.375 16.3011 9.375 16.5V20.625C9.375 21.0228 9.21696 21.4043 8.93566 21.6856C8.65436 21.9669 8.27282 22.125 7.875 22.125H4.125C3.52845 22.1244 2.9565 21.8871 2.53467 21.4653C2.11284 21.0435 1.8756 20.4715 1.875 19.875V8.67447C1.87556 8.41545 1.94287 8.16095 2.07043 7.93552C2.19799 7.71008 2.3815 7.52133 2.60325 7.38747L11.2282 2.21247C11.4614 2.07252 11.7282 1.9986 12.0002 1.9986C12.2721 1.9986 12.539 2.07252 12.7721 2.21247L21.3971 7.38747C21.6188 7.52138 21.8022 7.71015 21.9297 7.93558C22.0572 8.16101 22.1245 8.41549 22.125 8.67447Z"
                                        fill="var(--primary)" />
                                    </svg>
                                  </Button>
                                  <Button className="btn-square rounded-0 bg-white border-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                      height="24" viewBox="0 0 24 24" fill="none">
                                      <path
                                        d="M22.125 8.67447V19.875C22.1244 20.4715 21.8872 21.0435 21.4653 21.4653C21.0435 21.8871 20.4716 22.1244 19.875 22.125H16.125C15.7272 22.125 15.3456 21.9669 15.0643 21.6856C14.783 21.4043 14.625 21.0228 14.625 20.625V16.5C14.625 16.3011 14.546 16.1103 14.4053 15.9696C14.2647 15.829 14.0739 15.75 13.875 15.75H10.125C9.92609 15.75 9.73532 15.829 9.59467 15.9696C9.45402 16.1103 9.375 16.3011 9.375 16.5V20.625C9.375 21.0228 9.21696 21.4043 8.93566 21.6856C8.65436 21.9669 8.27282 22.125 7.875 22.125H4.125C3.52845 22.1244 2.9565 21.8871 2.53467 21.4653C2.11284 21.0435 1.8756 20.4715 1.875 19.875V8.67447C1.87556 8.41545 1.94287 8.16095 2.07043 7.93552C2.19799 7.71008 2.3815 7.52133 2.60325 7.38747L11.2282 2.21247C11.4614 2.07252 11.7282 1.9986 12.0002 1.9986C12.2721 1.9986 12.539 2.07252 12.7721 2.21247L21.3971 7.38747C21.6188 7.52138 21.8022 7.71015 21.9297 7.93558C22.0572 8.16101 22.1245 8.41549 22.125 8.67447Z"
                                        fill="var(--primary)" />
                                    </svg>
                                  </Button>
                                </div>
                              </Col>
                            </Row>
                          </div>
                          <div className="card-body pt-0">
                            <h4 className="card-title mb-3">Medium Button</h4>
                            <div className="row">
                              <div className="col-4">
                                <label className="column-head">Round</label>
                                <button type="button"
                                  className="btn  btn-square btn-md btn-info me-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none">
                                    <path
                                      d="M22.125 8.67447V19.875C22.1244 20.4715 21.8872 21.0435 21.4653 21.4653C21.0435 21.8871 20.4716 22.1244 19.875 22.125H16.125C15.7272 22.125 15.3456 21.9669 15.0643 21.6856C14.783 21.4043 14.625 21.0228 14.625 20.625V16.5C14.625 16.3011 14.546 16.1103 14.4053 15.9696C14.2647 15.829 14.0739 15.75 13.875 15.75H10.125C9.92609 15.75 9.73532 15.829 9.59467 15.9696C9.45402 16.1103 9.375 16.3011 9.375 16.5V20.625C9.375 21.0228 9.21696 21.4043 8.93566 21.6856C8.65436 21.9669 8.27282 22.125 7.875 22.125H4.125C3.52845 22.1244 2.9565 21.8871 2.53467 21.4653C2.11284 21.0435 1.8756 20.4715 1.875 19.875V8.67447C1.87556 8.41545 1.94287 8.16095 2.07043 7.93552C2.19799 7.71008 2.3815 7.52133 2.60325 7.38747L11.2282 2.21247C11.4614 2.07252 11.7282 1.9986 12.0002 1.9986C12.2721 1.9986 12.539 2.07252 12.7721 2.21247L21.3971 7.38747C21.6188 7.52138 21.8022 7.71015 21.9297 7.93558C22.0572 8.16101 22.1245 8.41549 22.125 8.67447Z"
                                      fill="white" />
                                  </svg>
                                </button>
                                <button type="button"
                                  className="btn  btn-square btn-md btn-info light me-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20"
                                    height="20" viewBox="0 0 20 20" fill="none">
                                    <path
                                      d="M18.4375 7.22876V16.5625C18.437 17.0596 18.2393 17.5363 17.8878 17.8878C17.5363 18.2393 17.0596 18.437 16.5625 18.4375H13.4375C13.106 18.4375 12.788 18.3058 12.5536 18.0714C12.3192 17.837 12.1875 17.519 12.1875 17.1875V13.75C12.1875 13.5842 12.1217 13.4253 12.0044 13.3081C11.8872 13.1909 11.7283 13.125 11.5625 13.125H8.4375C8.27174 13.125 8.11277 13.1909 7.99556 13.3081C7.87835 13.4253 7.8125 13.5842 7.8125 13.75V17.1875C7.8125 17.519 7.6808 17.837 7.44638 18.0714C7.21196 18.3058 6.89402 18.4375 6.5625 18.4375H3.4375C2.94037 18.437 2.46375 18.2393 2.11222 17.8878C1.7607 17.5363 1.563 17.0596 1.5625 16.5625V7.22876C1.56297 7.01291 1.61906 6.80082 1.72536 6.61296C1.83166 6.4251 1.98458 6.26781 2.16937 6.15626L9.35687 1.84376C9.55118 1.72713 9.77354 1.66553 10.0002 1.66553C10.2268 1.66553 10.4491 1.72713 10.6434 1.84376L17.8309 6.15626C18.0157 6.26785 18.1685 6.42516 18.2748 6.61301C18.381 6.80087 18.4371 7.01294 18.4375 7.22876Z"
                                      fill="#2AA3E7" />
                                  </svg>
                                </button>
                                <button type="button"
                                  className="btn btn-square btn-md btn-outline-light">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20"
                                    height="20" viewBox="0 0 20 20" fill="none">
                                    <path
                                      d="M18.4375 7.22876V16.5625C18.437 17.0596 18.2393 17.5363 17.8878 17.8878C17.5363 18.2393 17.0596 18.437 16.5625 18.4375H13.4375C13.106 18.4375 12.788 18.3058 12.5536 18.0714C12.3192 17.837 12.1875 17.519 12.1875 17.1875V13.75C12.1875 13.5842 12.1217 13.4253 12.0044 13.3081C11.8872 13.1909 11.7283 13.125 11.5625 13.125H8.4375C8.27174 13.125 8.11277 13.1909 7.99556 13.3081C7.87835 13.4253 7.8125 13.5842 7.8125 13.75V17.1875C7.8125 17.519 7.6808 17.837 7.44638 18.0714C7.21196 18.3058 6.89402 18.4375 6.5625 18.4375H3.4375C2.94037 18.437 2.46375 18.2393 2.11222 17.8878C1.7607 17.5363 1.563 17.0596 1.5625 16.5625V7.22876C1.56297 7.01291 1.61906 6.80082 1.72536 6.61296C1.83166 6.4251 1.98458 6.26781 2.16937 6.15626L9.35687 1.84376C9.55118 1.72713 9.77354 1.66553 10.0002 1.66553C10.2268 1.66553 10.4491 1.72713 10.6434 1.84376L17.8309 6.15626C18.0157 6.26785 18.1685 6.42516 18.2748 6.61301C18.381 6.80087 18.4371 7.01294 18.4375 7.22876Z"
                                      fill="#2AA3E7" />
                                  </svg>
                                </button>
                              </div>
                              <div className="col-4">
                                <label className="column-head">Round</label>
                                <button type="button"
                                  className="btn  btn-square btn-info btn-md rounded-circle me-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none">
                                    <path
                                      d="M22.125 8.67447V19.875C22.1244 20.4715 21.8872 21.0435 21.4653 21.4653C21.0435 21.8871 20.4716 22.1244 19.875 22.125H16.125C15.7272 22.125 15.3456 21.9669 15.0643 21.6856C14.783 21.4043 14.625 21.0228 14.625 20.625V16.5C14.625 16.3011 14.546 16.1103 14.4053 15.9696C14.2647 15.829 14.0739 15.75 13.875 15.75H10.125C9.92609 15.75 9.73532 15.829 9.59467 15.9696C9.45402 16.1103 9.375 16.3011 9.375 16.5V20.625C9.375 21.0228 9.21696 21.4043 8.93566 21.6856C8.65436 21.9669 8.27282 22.125 7.875 22.125H4.125C3.52845 22.1244 2.9565 21.8871 2.53467 21.4653C2.11284 21.0435 1.8756 20.4715 1.875 19.875V8.67447C1.87556 8.41545 1.94287 8.16095 2.07043 7.93552C2.19799 7.71008 2.3815 7.52133 2.60325 7.38747L11.2282 2.21247C11.4614 2.07252 11.7282 1.9986 12.0002 1.9986C12.2721 1.9986 12.539 2.07252 12.7721 2.21247L21.3971 7.38747C21.6188 7.52138 21.8022 7.71015 21.9297 7.93558C22.0572 8.16101 22.1245 8.41549 22.125 8.67447Z"
                                      fill="white" />
                                  </svg>
                                </button>
                                <button type="button"
                                  className="btn  btn-square btn-info btn-md rounded-circle light me-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20"
                                    height="20" viewBox="0 0 20 20" fill="none">
                                    <path
                                      d="M18.4375 7.22876V16.5625C18.437 17.0596 18.2393 17.5363 17.8878 17.8878C17.5363 18.2393 17.0596 18.437 16.5625 18.4375H13.4375C13.106 18.4375 12.788 18.3058 12.5536 18.0714C12.3192 17.837 12.1875 17.519 12.1875 17.1875V13.75C12.1875 13.5842 12.1217 13.4253 12.0044 13.3081C11.8872 13.1909 11.7283 13.125 11.5625 13.125H8.4375C8.27174 13.125 8.11277 13.1909 7.99556 13.3081C7.87835 13.4253 7.8125 13.5842 7.8125 13.75V17.1875C7.8125 17.519 7.6808 17.837 7.44638 18.0714C7.21196 18.3058 6.89402 18.4375 6.5625 18.4375H3.4375C2.94037 18.437 2.46375 18.2393 2.11222 17.8878C1.7607 17.5363 1.563 17.0596 1.5625 16.5625V7.22876C1.56297 7.01291 1.61906 6.80082 1.72536 6.61296C1.83166 6.4251 1.98458 6.26781 2.16937 6.15626L9.35687 1.84376C9.55118 1.72713 9.77354 1.66553 10.0002 1.66553C10.2268 1.66553 10.4491 1.72713 10.6434 1.84376L17.8309 6.15626C18.0157 6.26785 18.1685 6.42516 18.2748 6.61301C18.381 6.80087 18.4371 7.01294 18.4375 7.22876Z"
                                      fill="#2AA3E7" />
                                  </svg>
                                </button>
                                <button type="button"
                                  className="btn btn-square btn-outline-light btn-md rounded-circle ">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20"
                                    height="20" viewBox="0 0 20 20" fill="none">
                                    <path
                                      d="M18.4375 7.22876V16.5625C18.437 17.0596 18.2393 17.5363 17.8878 17.8878C17.5363 18.2393 17.0596 18.437 16.5625 18.4375H13.4375C13.106 18.4375 12.788 18.3058 12.5536 18.0714C12.3192 17.837 12.1875 17.519 12.1875 17.1875V13.75C12.1875 13.5842 12.1217 13.4253 12.0044 13.3081C11.8872 13.1909 11.7283 13.125 11.5625 13.125H8.4375C8.27174 13.125 8.11277 13.1909 7.99556 13.3081C7.87835 13.4253 7.8125 13.5842 7.8125 13.75V17.1875C7.8125 17.519 7.6808 17.837 7.44638 18.0714C7.21196 18.3058 6.89402 18.4375 6.5625 18.4375H3.4375C2.94037 18.437 2.46375 18.2393 2.11222 17.8878C1.7607 17.5363 1.563 17.0596 1.5625 16.5625V7.22876C1.56297 7.01291 1.61906 6.80082 1.72536 6.61296C1.83166 6.4251 1.98458 6.26781 2.16937 6.15626L9.35687 1.84376C9.55118 1.72713 9.77354 1.66553 10.0002 1.66553C10.2268 1.66553 10.4491 1.72713 10.6434 1.84376L17.8309 6.15626C18.0157 6.26785 18.1685 6.42516 18.2748 6.61301C18.381 6.80087 18.4371 7.01294 18.4375 7.22876Z"
                                      fill="#2AA3E7" />
                                  </svg>
                                </button>
                              </div>
                              <div className="col-4">
                                <label className="column-head">Round</label>
                                <button type="button"
                                  className="btn  btn-square btn-info  btn-md rounded-0 me-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none">
                                    <path
                                      d="M22.125 8.67447V19.875C22.1244 20.4715 21.8872 21.0435 21.4653 21.4653C21.0435 21.8871 20.4716 22.1244 19.875 22.125H16.125C15.7272 22.125 15.3456 21.9669 15.0643 21.6856C14.783 21.4043 14.625 21.0228 14.625 20.625V16.5C14.625 16.3011 14.546 16.1103 14.4053 15.9696C14.2647 15.829 14.0739 15.75 13.875 15.75H10.125C9.92609 15.75 9.73532 15.829 9.59467 15.9696C9.45402 16.1103 9.375 16.3011 9.375 16.5V20.625C9.375 21.0228 9.21696 21.4043 8.93566 21.6856C8.65436 21.9669 8.27282 22.125 7.875 22.125H4.125C3.52845 22.1244 2.9565 21.8871 2.53467 21.4653C2.11284 21.0435 1.8756 20.4715 1.875 19.875V8.67447C1.87556 8.41545 1.94287 8.16095 2.07043 7.93552C2.19799 7.71008 2.3815 7.52133 2.60325 7.38747L11.2282 2.21247C11.4614 2.07252 11.7282 1.9986 12.0002 1.9986C12.2721 1.9986 12.539 2.07252 12.7721 2.21247L21.3971 7.38747C21.6188 7.52138 21.8022 7.71015 21.9297 7.93558C22.0572 8.16101 22.1245 8.41549 22.125 8.67447Z"
                                      fill="white" />
                                  </svg>
                                </button>
                                <button type="button"
                                  className="btn  btn-square btn-info btn-md rounded-0 light me-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20"
                                    height="20" viewBox="0 0 20 20" fill="none">
                                    <path
                                      d="M18.4375 7.22876V16.5625C18.437 17.0596 18.2393 17.5363 17.8878 17.8878C17.5363 18.2393 17.0596 18.437 16.5625 18.4375H13.4375C13.106 18.4375 12.788 18.3058 12.5536 18.0714C12.3192 17.837 12.1875 17.519 12.1875 17.1875V13.75C12.1875 13.5842 12.1217 13.4253 12.0044 13.3081C11.8872 13.1909 11.7283 13.125 11.5625 13.125H8.4375C8.27174 13.125 8.11277 13.1909 7.99556 13.3081C7.87835 13.4253 7.8125 13.5842 7.8125 13.75V17.1875C7.8125 17.519 7.6808 17.837 7.44638 18.0714C7.21196 18.3058 6.89402 18.4375 6.5625 18.4375H3.4375C2.94037 18.437 2.46375 18.2393 2.11222 17.8878C1.7607 17.5363 1.563 17.0596 1.5625 16.5625V7.22876C1.56297 7.01291 1.61906 6.80082 1.72536 6.61296C1.83166 6.4251 1.98458 6.26781 2.16937 6.15626L9.35687 1.84376C9.55118 1.72713 9.77354 1.66553 10.0002 1.66553C10.2268 1.66553 10.4491 1.72713 10.6434 1.84376L17.8309 6.15626C18.0157 6.26785 18.1685 6.42516 18.2748 6.61301C18.381 6.80087 18.4371 7.01294 18.4375 7.22876Z"
                                      fill="#2AA3E7" />
                                  </svg>
                                </button>
                                <button type="button"
                                  className="btn btn-square btn-outline-light btn-md rounded-0">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20"
                                    height="20" viewBox="0 0 20 20" fill="none">
                                    <path
                                      d="M18.4375 7.22876V16.5625C18.437 17.0596 18.2393 17.5363 17.8878 17.8878C17.5363 18.2393 17.0596 18.437 16.5625 18.4375H13.4375C13.106 18.4375 12.788 18.3058 12.5536 18.0714C12.3192 17.837 12.1875 17.519 12.1875 17.1875V13.75C12.1875 13.5842 12.1217 13.4253 12.0044 13.3081C11.8872 13.1909 11.7283 13.125 11.5625 13.125H8.4375C8.27174 13.125 8.11277 13.1909 7.99556 13.3081C7.87835 13.4253 7.8125 13.5842 7.8125 13.75V17.1875C7.8125 17.519 7.6808 17.837 7.44638 18.0714C7.21196 18.3058 6.89402 18.4375 6.5625 18.4375H3.4375C2.94037 18.437 2.46375 18.2393 2.11222 17.8878C1.7607 17.5363 1.563 17.0596 1.5625 16.5625V7.22876C1.56297 7.01291 1.61906 6.80082 1.72536 6.61296C1.83166 6.4251 1.98458 6.26781 2.16937 6.15626L9.35687 1.84376C9.55118 1.72713 9.77354 1.66553 10.0002 1.66553C10.2268 1.66553 10.4491 1.72713 10.6434 1.84376L17.8309 6.15626C18.0157 6.26785 18.1685 6.42516 18.2748 6.61301C18.381 6.80087 18.4371 7.01294 18.4375 7.22876Z"
                                      fill="#2AA3E7" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="card-body pt-0">
                            <h4 className="card-title mb-3">Small Button</h4>
                            <div className="row">
                              <div className="col-4">
                                <button type="button"
                                  className="btn  btn-square btn-sm btn-secondary me-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none">
                                    <path
                                      d="M22.125 8.67447V19.875C22.1244 20.4715 21.8872 21.0435 21.4653 21.4653C21.0435 21.8871 20.4716 22.1244 19.875 22.125H16.125C15.7272 22.125 15.3456 21.9669 15.0643 21.6856C14.783 21.4043 14.625 21.0228 14.625 20.625V16.5C14.625 16.3011 14.546 16.1103 14.4053 15.9696C14.2647 15.829 14.0739 15.75 13.875 15.75H10.125C9.92609 15.75 9.73532 15.829 9.59467 15.9696C9.45402 16.1103 9.375 16.3011 9.375 16.5V20.625C9.375 21.0228 9.21696 21.4043 8.93566 21.6856C8.65436 21.9669 8.27282 22.125 7.875 22.125H4.125C3.52845 22.1244 2.9565 21.8871 2.53467 21.4653C2.11284 21.0435 1.8756 20.4715 1.875 19.875V8.67447C1.87556 8.41545 1.94287 8.16095 2.07043 7.93552C2.19799 7.71008 2.3815 7.52133 2.60325 7.38747L11.2282 2.21247C11.4614 2.07252 11.7282 1.9986 12.0002 1.9986C12.2721 1.9986 12.539 2.07252 12.7721 2.21247L21.3971 7.38747C21.6188 7.52138 21.8022 7.71015 21.9297 7.93558C22.0572 8.16101 22.1245 8.41549 22.125 8.67447Z"
                                      fill="white" />
                                  </svg>
                                </button>
                                <button type="button"
                                  className="btn  btn-square btn-md btn-secondary light me-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="14"
                                    height="14" viewBox="0 0 14 14" fill="none">
                                    <path
                                      d="M12.9062 5.06015V11.5938C12.9059 11.9418 12.7675 12.2754 12.5214 12.5215C12.2754 12.7675 11.9417 12.9059 11.5938 12.9063H9.40625C9.17419 12.9063 8.95163 12.8141 8.78753 12.65C8.62344 12.4859 8.53125 12.2633 8.53125 12.0313V9.62503C8.53125 9.509 8.48516 9.39772 8.40311 9.31567C8.32106 9.23362 8.20978 9.18753 8.09375 9.18753H5.90625C5.79022 9.18753 5.67894 9.23362 5.59689 9.31567C5.51484 9.39772 5.46875 9.509 5.46875 9.62503V12.0313C5.46875 12.2633 5.37656 12.4859 5.21247 12.65C5.04837 12.8141 4.82581 12.9063 4.59375 12.9063H2.40625C2.05826 12.9059 1.72462 12.7675 1.47856 12.5215C1.23249 12.2754 1.0941 11.9418 1.09375 11.5938V5.06015C1.09408 4.90906 1.13334 4.7606 1.20775 4.6291C1.28216 4.49759 1.38921 4.38749 1.51856 4.3094L6.54981 1.29066C6.68583 1.20902 6.84148 1.16589 7.00011 1.16589C7.15874 1.16589 7.31439 1.20902 7.45041 1.29066L12.4817 4.3094C12.611 4.38752 12.718 4.49763 12.7923 4.62913C12.8667 4.76063 12.9059 4.90908 12.9062 5.06015Z"
                                      fill="#1F2025" />
                                  </svg>
                                </button>
                                <button type="button"
                                  className="btn btn-square btn-md btn-outline-light">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="14"
                                    height="14" viewBox="0 0 14 14" fill="none">
                                    <path
                                      d="M12.9062 5.06015V11.5938C12.9059 11.9418 12.7675 12.2754 12.5214 12.5215C12.2754 12.7675 11.9417 12.9059 11.5938 12.9063H9.40625C9.17419 12.9063 8.95163 12.8141 8.78753 12.65C8.62344 12.4859 8.53125 12.2633 8.53125 12.0313V9.62503C8.53125 9.509 8.48516 9.39772 8.40311 9.31567C8.32106 9.23362 8.20978 9.18753 8.09375 9.18753H5.90625C5.79022 9.18753 5.67894 9.23362 5.59689 9.31567C5.51484 9.39772 5.46875 9.509 5.46875 9.62503V12.0313C5.46875 12.2633 5.37656 12.4859 5.21247 12.65C5.04837 12.8141 4.82581 12.9063 4.59375 12.9063H2.40625C2.05826 12.9059 1.72462 12.7675 1.47856 12.5215C1.23249 12.2754 1.0941 11.9418 1.09375 11.5938V5.06015C1.09408 4.90906 1.13334 4.7606 1.20775 4.6291C1.28216 4.49759 1.38921 4.38749 1.51856 4.3094L6.54981 1.29066C6.68583 1.20902 6.84148 1.16589 7.00011 1.16589C7.15874 1.16589 7.31439 1.20902 7.45041 1.29066L12.4817 4.3094C12.611 4.38752 12.718 4.49763 12.7923 4.62913C12.8667 4.76063 12.9059 4.90908 12.9062 5.06015Z"
                                      fill="#1D69D6" />
                                  </svg>
                                </button>
                              </div>
                              <div className="col-4">

                                <button type="button"
                                  className="btn  btn-square btn-secondary btn-md rounded-circle me-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none">
                                    <path
                                      d="M22.125 8.67447V19.875C22.1244 20.4715 21.8872 21.0435 21.4653 21.4653C21.0435 21.8871 20.4716 22.1244 19.875 22.125H16.125C15.7272 22.125 15.3456 21.9669 15.0643 21.6856C14.783 21.4043 14.625 21.0228 14.625 20.625V16.5C14.625 16.3011 14.546 16.1103 14.4053 15.9696C14.2647 15.829 14.0739 15.75 13.875 15.75H10.125C9.92609 15.75 9.73532 15.829 9.59467 15.9696C9.45402 16.1103 9.375 16.3011 9.375 16.5V20.625C9.375 21.0228 9.21696 21.4043 8.93566 21.6856C8.65436 21.9669 8.27282 22.125 7.875 22.125H4.125C3.52845 22.1244 2.9565 21.8871 2.53467 21.4653C2.11284 21.0435 1.8756 20.4715 1.875 19.875V8.67447C1.87556 8.41545 1.94287 8.16095 2.07043 7.93552C2.19799 7.71008 2.3815 7.52133 2.60325 7.38747L11.2282 2.21247C11.4614 2.07252 11.7282 1.9986 12.0002 1.9986C12.2721 1.9986 12.539 2.07252 12.7721 2.21247L21.3971 7.38747C21.6188 7.52138 21.8022 7.71015 21.9297 7.93558C22.0572 8.16101 22.1245 8.41549 22.125 8.67447Z"
                                      fill="white" />
                                  </svg>
                                </button>
                                <button type="button"
                                  className="btn  btn-square btn-secondary btn-md rounded-circle light me-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none">
                                    <path
                                      d="M22.125 8.67447V19.875C22.1244 20.4715 21.8872 21.0435 21.4653 21.4653C21.0435 21.8871 20.4716 22.1244 19.875 22.125H16.125C15.7272 22.125 15.3456 21.9669 15.0643 21.6856C14.783 21.4043 14.625 21.0228 14.625 20.625V16.5C14.625 16.3011 14.546 16.1103 14.4053 15.9696C14.2647 15.829 14.0739 15.75 13.875 15.75H10.125C9.92609 15.75 9.73532 15.829 9.59467 15.9696C9.45402 16.1103 9.375 16.3011 9.375 16.5V20.625C9.375 21.0228 9.21696 21.4043 8.93566 21.6856C8.65436 21.9669 8.27282 22.125 7.875 22.125H4.125C3.52845 22.1244 2.9565 21.8871 2.53467 21.4653C2.11284 21.0435 1.8756 20.4715 1.875 19.875V8.67447C1.87556 8.41545 1.94287 8.16095 2.07043 7.93552C2.19799 7.71008 2.3815 7.52133 2.60325 7.38747L11.2282 2.21247C11.4614 2.07252 11.7282 1.9986 12.0002 1.9986C12.2721 1.9986 12.539 2.07252 12.7721 2.21247L21.3971 7.38747C21.6188 7.52138 21.8022 7.71015 21.9297 7.93558C22.0572 8.16101 22.1245 8.41549 22.125 8.67447Z"
                                      fill="var(--primary)" />
                                  </svg>
                                </button>
                                <button type="button"
                                  className="btn btn-square btn-outline-light btn-md rounded-circle ">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none">
                                    <path
                                      d="M22.125 8.67447V19.875C22.1244 20.4715 21.8872 21.0435 21.4653 21.4653C21.0435 21.8871 20.4716 22.1244 19.875 22.125H16.125C15.7272 22.125 15.3456 21.9669 15.0643 21.6856C14.783 21.4043 14.625 21.0228 14.625 20.625V16.5C14.625 16.3011 14.546 16.1103 14.4053 15.9696C14.2647 15.829 14.0739 15.75 13.875 15.75H10.125C9.92609 15.75 9.73532 15.829 9.59467 15.9696C9.45402 16.1103 9.375 16.3011 9.375 16.5V20.625C9.375 21.0228 9.21696 21.4043 8.93566 21.6856C8.65436 21.9669 8.27282 22.125 7.875 22.125H4.125C3.52845 22.1244 2.9565 21.8871 2.53467 21.4653C2.11284 21.0435 1.8756 20.4715 1.875 19.875V8.67447C1.87556 8.41545 1.94287 8.16095 2.07043 7.93552C2.19799 7.71008 2.3815 7.52133 2.60325 7.38747L11.2282 2.21247C11.4614 2.07252 11.7282 1.9986 12.0002 1.9986C12.2721 1.9986 12.539 2.07252 12.7721 2.21247L21.3971 7.38747C21.6188 7.52138 21.8022 7.71015 21.9297 7.93558C22.0572 8.16101 22.1245 8.41549 22.125 8.67447Z"
                                      fill="var(--primary)" />
                                  </svg>
                                </button>
                              </div>
                              <div className="col-4">
                                <button type="button"
                                  className="btn  btn-square btn-secondary  btn-md rounded-0 me-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none">
                                    <path
                                      d="M22.125 8.67447V19.875C22.1244 20.4715 21.8872 21.0435 21.4653 21.4653C21.0435 21.8871 20.4716 22.1244 19.875 22.125H16.125C15.7272 22.125 15.3456 21.9669 15.0643 21.6856C14.783 21.4043 14.625 21.0228 14.625 20.625V16.5C14.625 16.3011 14.546 16.1103 14.4053 15.9696C14.2647 15.829 14.0739 15.75 13.875 15.75H10.125C9.92609 15.75 9.73532 15.829 9.59467 15.9696C9.45402 16.1103 9.375 16.3011 9.375 16.5V20.625C9.375 21.0228 9.21696 21.4043 8.93566 21.6856C8.65436 21.9669 8.27282 22.125 7.875 22.125H4.125C3.52845 22.1244 2.9565 21.8871 2.53467 21.4653C2.11284 21.0435 1.8756 20.4715 1.875 19.875V8.67447C1.87556 8.41545 1.94287 8.16095 2.07043 7.93552C2.19799 7.71008 2.3815 7.52133 2.60325 7.38747L11.2282 2.21247C11.4614 2.07252 11.7282 1.9986 12.0002 1.9986C12.2721 1.9986 12.539 2.07252 12.7721 2.21247L21.3971 7.38747C21.6188 7.52138 21.8022 7.71015 21.9297 7.93558C22.0572 8.16101 22.1245 8.41549 22.125 8.67447Z"
                                      fill="white" />
                                  </svg>
                                </button>
                                <button type="button"
                                  className="btn  btn-square btn-secondary btn-md rounded-0 light me-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="14"
                                    height="14" viewBox="0 0 14 14" fill="none">
                                    <path
                                      d="M12.9062 5.06015V11.5938C12.9059 11.9418 12.7675 12.2754 12.5214 12.5215C12.2754 12.7675 11.9417 12.9059 11.5938 12.9063H9.40625C9.17419 12.9063 8.95163 12.8141 8.78753 12.65C8.62344 12.4859 8.53125 12.2633 8.53125 12.0313V9.62503C8.53125 9.509 8.48516 9.39772 8.40311 9.31567C8.32106 9.23362 8.20978 9.18753 8.09375 9.18753H5.90625C5.79022 9.18753 5.67894 9.23362 5.59689 9.31567C5.51484 9.39772 5.46875 9.509 5.46875 9.62503V12.0313C5.46875 12.2633 5.37656 12.4859 5.21247 12.65C5.04837 12.8141 4.82581 12.9063 4.59375 12.9063H2.40625C2.05826 12.9059 1.72462 12.7675 1.47856 12.5215C1.23249 12.2754 1.0941 11.9418 1.09375 11.5938V5.06015C1.09408 4.90906 1.13334 4.7606 1.20775 4.6291C1.28216 4.49759 1.38921 4.38749 1.51856 4.3094L6.54981 1.29066C6.68583 1.20902 6.84148 1.16589 7.00011 1.16589C7.15874 1.16589 7.31439 1.20902 7.45041 1.29066L12.4817 4.3094C12.611 4.38752 12.718 4.49763 12.7923 4.62913C12.8667 4.76063 12.9059 4.90908 12.9062 5.06015Z"
                                      fill="#1F2025" />
                                  </svg>
                                </button>
                                <button type="button"
                                  className="btn btn-square btn-outline-light btn-md rounded-0">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="14"
                                    height="14" viewBox="0 0 14 14" fill="none">
                                    <path
                                      d="M12.9062 5.06015V11.5938C12.9059 11.9418 12.7675 12.2754 12.5214 12.5215C12.2754 12.7675 11.9417 12.9059 11.5938 12.9063H9.40625C9.17419 12.9063 8.95163 12.8141 8.78753 12.65C8.62344 12.4859 8.53125 12.2633 8.53125 12.0313V9.62503C8.53125 9.509 8.48516 9.39772 8.40311 9.31567C8.32106 9.23362 8.20978 9.18753 8.09375 9.18753H5.90625C5.79022 9.18753 5.67894 9.23362 5.59689 9.31567C5.51484 9.39772 5.46875 9.509 5.46875 9.62503V12.0313C5.46875 12.2633 5.37656 12.4859 5.21247 12.65C5.04837 12.8141 4.82581 12.9063 4.59375 12.9063H2.40625C2.05826 12.9059 1.72462 12.7675 1.47856 12.5215C1.23249 12.2754 1.0941 11.9418 1.09375 11.5938V5.06015C1.09408 4.90906 1.13334 4.7606 1.20775 4.6291C1.28216 4.49759 1.38921 4.38749 1.51856 4.3094L6.54981 1.29066C6.68583 1.20902 6.84148 1.16589 7.00011 1.16589C7.15874 1.16589 7.31439 1.20902 7.45041 1.29066L12.4817 4.3094C12.611 4.38752 12.718 4.49763 12.7923 4.62913C12.8667 4.76063 12.9059 4.90908 12.9062 5.06015Z"
                                      fill="#1D69D6" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0"><code className="language-html">
                              <Highlight>
                                {`
  <Row>
    <Col md={4}>
      <label className="column-head">Round</label>
      <div className="d-flex">
        <Button className="btn-square btn-primary me-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="24"
            height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M22.125 8.67447V19.875C22.1244 20.4715 21.8872 21.0435 21.4653 21.4653C21.0435 21.8871 20.4716 22.1244 19.875 22.125H16.125C15.7272 22.125 15.3456 21.9669 15.0643 21.6856C14.783 21.4043 14.625 21.0228 14.625 20.625V16.5C14.625 16.3011 14.546 16.1103 14.4053 15.9696C14.2647 15.829 14.0739 15.75 13.875 15.75H10.125C9.92609 15.75 9.73532 15.829 9.59467 15.9696C9.45402 16.1103 9.375 16.3011 9.375 16.5V20.625C9.375 21.0228 9.21696 21.4043 8.93566 21.6856C8.65436 21.9669 8.27282 22.125 7.875 22.125H4.125C3.52845 22.1244 2.9565 21.8871 2.53467 21.4653C2.11284 21.0435 1.8756 20.4715 1.875 19.875V8.67447C1.87556 8.41545 1.94287 8.16095 2.07043 7.93552C2.19799 7.71008 2.3815 7.52133 2.60325 7.38747L11.2282 2.21247C11.4614 2.07252 11.7282 1.9986 12.0002 1.9986C12.2721 1.9986 12.539 2.07252 12.7721 2.21247L21.3971 7.38747C21.6188 7.52138 21.8022 7.71015 21.9297 7.93558C22.0572 8.16101 22.1245 8.41549 22.125 8.67447Z"
              fill="white" />
          </svg>
        </Button>
        <Button className="btn-square btn-primary light me-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="24"
            height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M22.125 8.67447V19.875C22.1244 20.4715 21.8872 21.0435 21.4653 21.4653C21.0435 21.8871 20.4716 22.1244 19.875 22.125H16.125C15.7272 22.125 15.3456 21.9669 15.0643 21.6856C14.783 21.4043 14.625 21.0228 14.625 20.625V16.5C14.625 16.3011 14.546 16.1103 14.4053 15.9696C14.2647 15.829 14.0739 15.75 13.875 15.75H10.125C9.92609 15.75 9.73532 15.829 9.59467 15.9696C9.45402 16.1103 9.375 16.3011 9.375 16.5V20.625C9.375 21.0228 9.21696 21.4043 8.93566 21.6856C8.65436 21.9669 8.27282 22.125 7.875 22.125H4.125C3.52845 22.1244 2.9565 21.8871 2.53467 21.4653C2.11284 21.0435 1.8756 20.4715 1.875 19.875V8.67447C1.87556 8.41545 1.94287 8.16095 2.07043 7.93552C2.19799 7.71008 2.3815 7.52133 2.60325 7.38747L11.2282 2.21247C11.4614 2.07252 11.7282 1.9986 12.0002 1.9986C12.2721 1.9986 12.539 2.07252 12.7721 2.21247L21.3971 7.38747C21.6188 7.52138 21.8022 7.71015 21.9297 7.93558C22.0572 8.16101 22.1245 8.41549 22.125 8.67447Z"
              fill="var(--primary)" />
          </svg>
        </Button>
        <Button className="btn-square btn-outline-light">
          <svg xmlns="http://www.w3.org/2000/svg" width="24"
            height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M22.125 8.67447V19.875C22.1244 20.4715 21.8872 21.0435 21.4653 21.4653C21.0435 21.8871 20.4716 22.1244 19.875 22.125H16.125C15.7272 22.125 15.3456 21.9669 15.0643 21.6856C14.783 21.4043 14.625 21.0228 14.625 20.625V16.5C14.625 16.3011 14.546 16.1103 14.4053 15.9696C14.2647 15.829 14.0739 15.75 13.875 15.75H10.125C9.92609 15.75 9.73532 15.829 9.59467 15.9696C9.45402 16.1103 9.375 16.3011 9.375 16.5V20.625C9.375 21.0228 9.21696 21.4043 8.93566 21.6856C8.65436 21.9669 8.27282 22.125 7.875 22.125H4.125C3.52845 22.1244 2.9565 21.8871 2.53467 21.4653C2.11284 21.0435 1.8756 20.4715 1.875 19.875V8.67447C1.87556 8.41545 1.94287 8.16095 2.07043 7.93552C2.19799 7.71008 2.3815 7.52133 2.60325 7.38747L11.2282 2.21247C11.4614 2.07252 11.7282 1.9986 12.0002 1.9986C12.2721 1.9986 12.539 2.07252 12.7721 2.21247L21.3971 7.38747C21.6188 7.52138 21.8022 7.71015 21.9297 7.93558C22.0572 8.16101 22.1245 8.41549 22.125 8.67447Z"
              fill="var(--primary)" />
          </svg>
        </Button>
      </div>
    </Col>
    <Col md={4}>
      <label className="column-head">Rounded</label>
      <div className="d-flex">
        <Button className="btn-square btn-primary rounded-circle me-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="24"
            height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M22.125 8.67447V19.875C22.1244 20.4715 21.8872 21.0435 21.4653 21.4653C21.0435 21.8871 20.4716 22.1244 19.875 22.125H16.125C15.7272 22.125 15.3456 21.9669 15.0643 21.6856C14.783 21.4043 14.625 21.0228 14.625 20.625V16.5C14.625 16.3011 14.546 16.1103 14.4053 15.9696C14.2647 15.829 14.0739 15.75 13.875 15.75H10.125C9.92609 15.75 9.73532 15.829 9.59467 15.9696C9.45402 16.1103 9.375 16.3011 9.375 16.5V20.625C9.375 21.0228 9.21696 21.4043 8.93566 21.6856C8.65436 21.9669 8.27282 22.125 7.875 22.125H4.125C3.52845 22.1244 2.9565 21.8871 2.53467 21.4653C2.11284 21.0435 1.8756 20.4715 1.875 19.875V8.67447C1.87556 8.41545 1.94287 8.16095 2.07043 7.93552C2.19799 7.71008 2.3815 7.52133 2.60325 7.38747L11.2282 2.21247C11.4614 2.07252 11.7282 1.9986 12.0002 1.9986C12.2721 1.9986 12.539 2.07252 12.7721 2.21247L21.3971 7.38747C21.6188 7.52138 21.8022 7.71015 21.9297 7.93558C22.0572 8.16101 22.1245 8.41549 22.125 8.67447Z"
              fill="white" />
          </svg>
        </Button>
        <Button className="btn-square btn-primary rounded-circle light me-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="24"
            height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M22.125 8.67447V19.875C22.1244 20.4715 21.8872 21.0435 21.4653 21.4653C21.0435 21.8871 20.4716 22.1244 19.875 22.125H16.125C15.7272 22.125 15.3456 21.9669 15.0643 21.6856C14.783 21.4043 14.625 21.0228 14.625 20.625V16.5C14.625 16.3011 14.546 16.1103 14.4053 15.9696C14.2647 15.829 14.0739 15.75 13.875 15.75H10.125C9.92609 15.75 9.73532 15.829 9.59467 15.9696C9.45402 16.1103 9.375 16.3011 9.375 16.5V20.625C9.375 21.0228 9.21696 21.4043 8.93566 21.6856C8.65436 21.9669 8.27282 22.125 7.875 22.125H4.125C3.52845 22.1244 2.9565 21.8871 2.53467 21.4653C2.11284 21.0435 1.8756 20.4715 1.875 19.875V8.67447C1.87556 8.41545 1.94287 8.16095 2.07043 7.93552C2.19799 7.71008 2.3815 7.52133 2.60325 7.38747L11.2282 2.21247C11.4614 2.07252 11.7282 1.9986 12.0002 1.9986C12.2721 1.9986 12.539 2.07252 12.7721 2.21247L21.3971 7.38747C21.6188 7.52138 21.8022 7.71015 21.9297 7.93558C22.0572 8.16101 22.1245 8.41549 22.125 8.67447Z"
              fill="var(--primary)" />
          </svg>
        </Button>
        <Button className="btn-square btn-outline-light rounded-circle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24"
            height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M22.125 8.67447V19.875C22.1244 20.4715 21.8872 21.0435 21.4653 21.4653C21.0435 21.8871 20.4716 22.1244 19.875 22.125H16.125C15.7272 22.125 15.3456 21.9669 15.0643 21.6856C14.783 21.4043 14.625 21.0228 14.625 20.625V16.5C14.625 16.3011 14.546 16.1103 14.4053 15.9696C14.2647 15.829 14.0739 15.75 13.875 15.75H10.125C9.92609 15.75 9.73532 15.829 9.59467 15.9696C9.45402 16.1103 9.375 16.3011 9.375 16.5V20.625C9.375 21.0228 9.21696 21.4043 8.93566 21.6856C8.65436 21.9669 8.27282 22.125 7.875 22.125H4.125C3.52845 22.1244 2.9565 21.8871 2.53467 21.4653C2.11284 21.0435 1.8756 20.4715 1.875 19.875V8.67447C1.87556 8.41545 1.94287 8.16095 2.07043 7.93552C2.19799 7.71008 2.3815 7.52133 2.60325 7.38747L11.2282 2.21247C11.4614 2.07252 11.7282 1.9986 12.0002 1.9986C12.2721 1.9986 12.539 2.07252 12.7721 2.21247L21.3971 7.38747C21.6188 7.52138 21.8022 7.71015 21.9297 7.93558C22.0572 8.16101 22.1245 8.41549 22.125 8.67447Z"
              fill="var(--primary)" />
          </svg>
        </Button>
      </div>
    </Col>
    <Col md={4}>
      <label className="column-head">Sharp</label>
      <div className="d-flex">
        <Button className="btn-square btn-primary rounded-0 me-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="24"
            height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M22.125 8.67447V19.875C22.1244 20.4715 21.8872 21.0435 21.4653 21.4653C21.0435 21.8871 20.4716 22.1244 19.875 22.125H16.125C15.7272 22.125 15.3456 21.9669 15.0643 21.6856C14.783 21.4043 14.625 21.0228 14.625 20.625V16.5C14.625 16.3011 14.546 16.1103 14.4053 15.9696C14.2647 15.829 14.0739 15.75 13.875 15.75H10.125C9.92609 15.75 9.73532 15.829 9.59467 15.9696C9.45402 16.1103 9.375 16.3011 9.375 16.5V20.625C9.375 21.0228 9.21696 21.4043 8.93566 21.6856C8.65436 21.9669 8.27282 22.125 7.875 22.125H4.125C3.52845 22.1244 2.9565 21.8871 2.53467 21.4653C2.11284 21.0435 1.8756 20.4715 1.875 19.875V8.67447C1.87556 8.41545 1.94287 8.16095 2.07043 7.93552C2.19799 7.71008 2.3815 7.52133 2.60325 7.38747L11.2282 2.21247C11.4614 2.07252 11.7282 1.9986 12.0002 1.9986C12.2721 1.9986 12.539 2.07252 12.7721 2.21247L21.3971 7.38747C21.6188 7.52138 21.8022 7.71015 21.9297 7.93558C22.0572 8.16101 22.1245 8.41549 22.125 8.67447Z"
              fill="white" />
          </svg>
        </Button>
        <Button className="btn-square btn-primary rounded-0 light me-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="24"
            height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M22.125 8.67447V19.875C22.1244 20.4715 21.8872 21.0435 21.4653 21.4653C21.0435 21.8871 20.4716 22.1244 19.875 22.125H16.125C15.7272 22.125 15.3456 21.9669 15.0643 21.6856C14.783 21.4043 14.625 21.0228 14.625 20.625V16.5C14.625 16.3011 14.546 16.1103 14.4053 15.9696C14.2647 15.829 14.0739 15.75 13.875 15.75H10.125C9.92609 15.75 9.73532 15.829 9.59467 15.9696C9.45402 16.1103 9.375 16.3011 9.375 16.5V20.625C9.375 21.0228 9.21696 21.4043 8.93566 21.6856C8.65436 21.9669 8.27282 22.125 7.875 22.125H4.125C3.52845 22.1244 2.9565 21.8871 2.53467 21.4653C2.11284 21.0435 1.8756 20.4715 1.875 19.875V8.67447C1.87556 8.41545 1.94287 8.16095 2.07043 7.93552C2.19799 7.71008 2.3815 7.52133 2.60325 7.38747L11.2282 2.21247C11.4614 2.07252 11.7282 1.9986 12.0002 1.9986C12.2721 1.9986 12.539 2.07252 12.7721 2.21247L21.3971 7.38747C21.6188 7.52138 21.8022 7.71015 21.9297 7.93558C22.0572 8.16101 22.1245 8.41549 22.125 8.67447Z"
              fill="var(--primary)" />
          </svg>
        </Button>
        <Button className="btn-square btn-outline-light rounded-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="24"
            height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M22.125 8.67447V19.875C22.1244 20.4715 21.8872 21.0435 21.4653 21.4653C21.0435 21.8871 20.4716 22.1244 19.875 22.125H16.125C15.7272 22.125 15.3456 21.9669 15.0643 21.6856C14.783 21.4043 14.625 21.0228 14.625 20.625V16.5C14.625 16.3011 14.546 16.1103 14.4053 15.9696C14.2647 15.829 14.0739 15.75 13.875 15.75H10.125C9.92609 15.75 9.73532 15.829 9.59467 15.9696C9.45402 16.1103 9.375 16.3011 9.375 16.5V20.625C9.375 21.0228 9.21696 21.4043 8.93566 21.6856C8.65436 21.9669 8.27282 22.125 7.875 22.125H4.125C3.52845 22.1244 2.9565 21.8871 2.53467 21.4653C2.11284 21.0435 1.8756 20.4715 1.875 19.875V8.67447C1.87556 8.41545 1.94287 8.16095 2.07043 7.93552C2.19799 7.71008 2.3815 7.52133 2.60325 7.38747L11.2282 2.21247C11.4614 2.07252 11.7282 1.9986 12.0002 1.9986C12.2721 1.9986 12.539 2.07252 12.7721 2.21247L21.3971 7.38747C21.6188 7.52138 21.8022 7.71015 21.9297 7.93558C22.0572 8.16101 22.1245 8.41549 22.125 8.67447Z"
              fill="var(--primary)" />
          </svg>
        </Button>
      </div>
    </Col>
  </Row>
      `}
                              </Highlight>
                            </code></pre>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Card>
                  </Tab.Container>
                </Col>
                <Col lg="12">
                  <Tab.Container defaultActiveKey="Preview">
                    <Card name="button-block" className="dz-card">
                      <Card.Header className="card-header flex-wrap d-flex justify-content-between border-0">
                        <div>
                          <Card.Title>Button Block</Card.Title>
                          <Card.Text className="mb-0 subtitle"> add <code>.btn-square</code> to change the style </Card.Text>
                        </div>
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
                          <div className="card-body pt-0">
                            <Stack gap={3}>
                              <Button variant="primary" size="sm" className="light border-0">
                                Small
                              </Button>
                              <Button variant="outline-primary">
                                Medium
                              </Button>
                              <Button variant="primary" size="lg">
                                Large
                              </Button>
                            </Stack>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0"><code className="language-html">
                              <Highlight>
                                {`
      <div className="card-body pt-0">
      <Stack gap={3}>
        <Button variant="primary" size="sm" className="light border-0">
          Small
        </Button>
        <Button variant="outline-primary">
          Medium
        </Button>
        <Button variant="primary" size="lg">
          Large
        </Button>
      </Stack>
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
                <Col lg="12">
                  <Tab.Container defaultActiveKey="Preview">
                    <Card name="social-button" className="dz-card">
                      <Card.Header className="card-header flex-wrap d-flex justify-content-between border-0">
                        <div>
                          <Card.Title>Social Sign in Buttons</Card.Title>
                          <Card.Text className="mb-0 subtitle">
                            add <code>.btn-rounded</code> to change the style
                          </Card.Text>
                        </div>
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
                          <div className="card-body pt-0 btn-spacing">
                            <Row>
                              <Col md={3}>
                                <Button className="btn-drive d-flex align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none" >
                                    <g clipPath="url(#clip0_309_354)">
                                      <path d="M13.8335 13.75H20.4998L13.8335 1.25H7.16602L13.8335 13.75Z" fill="white" />
                                      <path d="M6.69023 13.75L3.83398 18.75H17.3752L20.5002 13.75H6.69023Z" fill="white" />
                                      <path d="M7.16625 1.25L0.5 12.9163L3.83375 18.75L10.385 7.285L7.16625 1.25Z" fill="white" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_354">
                                        <rect width="20" height="20" fill="white" transform="translate(0.5)" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  Drive
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button variant="outline-light" className="d-flex align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                    <g clipPath="url(#clip0_309_469)">
                                      <path d="M13.8335 13.75H20.4998L13.8335 1.25H7.16602L13.8335 13.75Z" fill="#FFC107" />
                                      <path d="M6.69023 13.75L3.83398 18.75H17.3752L20.5002 13.75H6.69023Z" fill="#2196F3" />
                                      <path d="M7.16625 1.25L0.5 12.9163L3.83375 18.75L10.385 7.285L7.16625 1.25Z" fill="#4CAF50" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_469">
                                        <rect width="20" height="20" fill="white" transform="translate(0.5)" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  Drive
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button variant="white" className="active d-flex align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                    <g clipPath="url(#clip0_309_584)">
                                      <path d="M13.8335 13.75H20.4998L13.8335 1.25H7.16602L13.8335 13.75Z" fill="#FFC107" />
                                      <path d="M6.69023 13.75L3.83398 18.75H17.3752L20.5002 13.75H6.69023Z" fill="#2196F3" />
                                      <path d="M7.16625 1.25L0.5 12.9163L3.83375 18.75L10.385 7.285L7.16625 1.25Z" fill="#4CAF50" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_584">
                                        <rect width="20" height="20" fill="white" transform="translate(0.5)" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  Drive
                                </Button>
                              </Col>
                              <Col md={2}>
                                <Button variant="outline-light" className="btn-square btn-md d-flex justify-content-center align-items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g clipPath="url(#clip0_309_164)">
                                      <path d="M13.3335 13.75H19.9998L13.3335 1.25H6.66602L13.3335 13.75Z" fill="#FFC107" />
                                      <path d="M6.19023 13.75L3.33398 18.75H16.8752L20.0002 13.75H6.19023Z" fill="#2196F3" />
                                      <path d="M6.66625 1.25L0 12.9163L3.33375 18.75L9.885 7.285L6.66625 1.25Z" fill="#4CAF50" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_164">
                                        <rect width="20" height="20" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </Button>
                              </Col>
                              <Col md={1}>
                                <Button className="btn-square btn-md btn-drive d-flex justify-content-center align-items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g clipPath="url(#clip0_309_259)">
                                      <path d="M13.3335 13.75H19.9998L13.3335 1.25H6.66602L13.3335 13.75Z" fill="white" />
                                      <path d="M6.19023 13.75L3.33398 18.75H16.8752L20.0002 13.75H6.19023Z" fill="white" />
                                      <path d="M6.66625 1.25L0 12.9163L3.33375 18.75L9.885 7.285L6.66625 1.25Z" fill="white" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_259">
                                        <rect width="20" height="20" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button className="btn-envato d-flex align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g clipPath="url(#clip0_309_264)">
                                      <path d="M16.0866 0.109612C15.3716 -0.241644 11.744 0.159612 9.12898 2.6684C5.00892 6.78222 5.10767 12.2024 5.10767 12.2024C5.10767 12.2024 4.97142 12.7598 4.39141 11.951C3.12139 10.3323 3.7864 6.60846 3.8614 6.0897C3.9664 5.35844 3.50015 5.33719 3.30639 5.57845C-1.28368 11.951 2.86139 17.1686 5.57518 18.8249C8.75273 20.7637 15.0203 20.7624 17.5166 15.2623C20.6267 8.41349 16.9829 0.548369 16.0866 0.109612Z" fill="white" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_264">
                                        <rect width="20" height="20" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  Envato
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button variant="outline-light" className="d-flex align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_475)">
                                      <path
                                        d="M16.0866 0.109612C15.3716 -0.241644 11.744 0.159612 9.12898 2.6684C5.00892 6.78222 5.10767 12.2024 5.10767 12.2024C5.10767 12.2024 4.97142 12.7598 4.39141 11.951C3.12139 10.3323 3.7864 6.60846 3.8614 6.0897C3.9664 5.35844 3.50015 5.33719 3.30639 5.57845C-1.28368 11.951 2.86139 17.1686 5.57518 18.8249C8.75273 20.7637 15.0203 20.7624 17.5166 15.2623C20.6267 8.41349 16.9829 0.548369 16.0866 0.109612Z"
                                        fill="#7CB342" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_4751">
                                        <rect width="20" height="20" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  Envato
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button variant="white" className="active d-flex align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_475)">
                                      <path
                                        d="M16.0866 0.109612C15.3716 -0.241644 11.744 0.159612 9.12898 2.6684C5.00892 6.78222 5.10767 12.2024 5.10767 12.2024C5.10767 12.2024 4.97142 12.7598 4.39141 11.951C3.12139 10.3323 3.7864 6.60846 3.8614 6.0897C3.9664 5.35844 3.50015 5.33719 3.30639 5.57845C-1.28368 11.951 2.86139 17.1686 5.57518 18.8249C8.75273 20.7637 15.0203 20.7624 17.5166 15.2623C20.6267 8.41349 16.9829 0.548369 16.0866 0.109612Z"
                                        fill="#7CB342" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_4751">
                                        <rect width="20" height="20" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  Envato
                                </Button>
                              </Col>
                              <Col md={2}>
                                <Button variant="outline-light" className="btn-square btn-md d-flex justify-content-center align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_475)">
                                      <path
                                        d="M16.0866 0.109612C15.3716 -0.241644 11.744 0.159612 9.12898 2.6684C5.00892 6.78222 5.10767 12.2024 5.10767 12.2024C5.10767 12.2024 4.97142 12.7598 4.39141 11.951C3.12139 10.3323 3.7864 6.60846 3.8614 6.0897C3.9664 5.35844 3.50015 5.33719 3.30639 5.57845C-1.28368 11.951 2.86139 17.1686 5.57518 18.8249C8.75273 20.7637 15.0203 20.7624 17.5166 15.2623C20.6267 8.41349 16.9829 0.548369 16.0866 0.109612Z"
                                        fill="#7CB342" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_4751">
                                        <rect width="20" height="20" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </Button>
                              </Col>
                              <Col md={1}>
                                <Button className="btn-square btn-md btn-envato d-flex justify-content-center align-items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g clipPath="url(#clip0_309_264)">
                                      <path d="M16.0866 0.109612C15.3716 -0.241644 11.744 0.159612 9.12898 2.6684C5.00892 6.78222 5.10767 12.2024 5.10767 12.2024C5.10767 12.2024 4.97142 12.7598 4.39141 11.951C3.12139 10.3323 3.7864 6.60846 3.8614 6.0897C3.9664 5.35844 3.50015 5.33719 3.30639 5.57845C-1.28368 11.951 2.86139 17.1686 5.57518 18.8249C8.75273 20.7637 15.0203 20.7624 17.5166 15.2623C20.6267 8.41349 16.9829 0.548369 16.0866 0.109612Z" fill="white" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_264">
                                        <rect width="20" height="20" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button className="btn-linkedin d-flex align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                    <g clipPath="url(#clip0_309_364)">
                                      <path d="M4.9725 6.25H0.5V20H4.9725V6.25Z" fill="white" />
                                      <path d="M17.155 6.41125C17.1075 6.39625 17.0625 6.38 17.0125 6.36625C16.9525 6.3525 16.8925 6.34125 16.8312 6.33125C16.5937 6.28375 16.3338 6.25 16.0288 6.25C13.4213 6.25 11.7675 8.14625 11.2225 8.87875V6.25H6.75V20H11.2225V12.5C11.2225 12.5 14.6025 7.7925 16.0288 11.25C16.0288 14.3363 16.0288 20 16.0288 20H20.5V10.7212C20.5 8.64375 19.0763 6.9125 17.155 6.41125Z" fill="white" />
                                      <path d="M2.6875 4.375C3.89562 4.375 4.875 3.39562 4.875 2.1875C4.875 0.979377 3.89562 0 2.6875 0C1.47938 0 0.5 0.979377 0.5 2.1875C0.5 3.39562 1.47938 4.375 2.6875 4.375Z" fill="white" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_364">
                                        <rect width="20" height="20" fill="white" transform="translate(0.5)" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  LinkedIn
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button variant="outline-light" className="d-flex align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                    <g clipPath="url(#clip0_309_479)">
                                      <path d="M4.9725 6.25H0.5V20H4.9725V6.25Z" fill="#1976D2" />
                                      <path d="M17.155 6.41125C17.1075 6.39625 17.0625 6.38 17.0125 6.36625C16.9525 6.3525 16.8925 6.34125 16.8312 6.33125C16.5937 6.28375 16.3338 6.25 16.0288 6.25C13.4213 6.25 11.7675 8.14625 11.2225 8.87875V6.25H6.75V20H11.2225V12.5C11.2225 12.5 14.6025 7.7925 16.0288 11.25C16.0288 14.3363 16.0288 20 16.0288 20H20.5V10.7212C20.5 8.64375 19.0763 6.9125 17.155 6.41125Z" fill="#1976D2" />
                                      <path d="M2.6875 4.375C3.89562 4.375 4.875 3.39562 4.875 2.1875C4.875 0.979377 3.89562 0 2.6875 0C1.47938 0 0.5 0.979377 0.5 2.1875C0.5 3.39562 1.47938 4.375 2.6875 4.375Z" fill="#1976D2" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_479">
                                        <rect width="20" height="20" fill="white" transform="translate(0.5)" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  LinkedIn
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button variant="white" className="active d-flex align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                    <g clipPath="url(#clip0_309_4791)">
                                      <path d="M4.9725 6.25H0.5V20H4.9725V6.25Z" fill="#1976D2" />
                                      <path d="M17.155 6.41125C17.1075 6.39625 17.0625 6.38 17.0125 6.36625C16.9525 6.3525 16.8925 6.34125 16.8312 6.33125C16.5937 6.28375 16.3338 6.25 16.0288 6.25C13.4213 6.25 11.7675 8.14625 11.2225 8.87875V6.25H6.75V20H11.2225V12.5C11.2225 12.5 14.6025 7.7925 16.0288 11.25C16.0288 14.3363 16.0288 20 16.0288 20H20.5V10.7212C20.5 8.64375 19.0763 6.9125 17.155 6.41125Z" fill="#1976D2" />
                                      <path d="M2.6875 4.375C3.89562 4.375 4.875 3.39562 4.875 2.1875C4.875 0.979377 3.89562 0 2.6875 0C1.47938 0 0.5 0.979377 0.5 2.1875C0.5 3.39562 1.47938 4.375 2.6875 4.375Z" fill="#1976D2" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_4791">
                                        <rect width="20" height="20" fill="white" transform="translate(0.5)" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  LinkedIn
                                </Button>
                              </Col>
                              <Col md={2}>
                                <Button variant="outline-light" className="btn-square btn-md d-flex justify-content-center align-items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                    <g clipPath="url(#clip0_309_4792)">
                                      <path d="M4.9725 6.25H0.5V20H4.9725V6.25Z" fill="#1976D2" />
                                      <path d="M17.155 6.41125C17.1075 6.39625 17.0625 6.38 17.0125 6.36625C16.9525 6.3525 16.8925 6.34125 16.8312 6.33125C16.5937 6.28375 16.3338 6.25 16.0288 6.25C13.4213 6.25 11.7675 8.14625 11.2225 8.87875V6.25H6.75V20H11.2225V12.5C11.2225 12.5 14.6025 7.7925 16.0288 11.25C16.0288 14.3363 16.0288 20 16.0288 20H20.5V10.7212C20.5 8.64375 19.0763 6.9125 17.155 6.41125Z" fill="#1976D2" />
                                      <path d="M2.6875 4.375C3.89562 4.375 4.875 3.39562 4.875 2.1875C4.875 0.979377 3.89562 0 2.6875 0C1.47938 0 0.5 0.979377 0.5 2.1875C0.5 3.39562 1.47938 4.375 2.6875 4.375Z" fill="#1976D2" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_4792">
                                        <rect width="20" height="20" fill="white" transform="translate(0.5)" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </Button>
                              </Col>
                              <Col md={1}>
                                <Button className="btn-square btn-md btn-linkedin d-flex justify-content-center align-items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g clipPath="url(#clip0_309_267)">
                                      <path d="M4.4725 6.25H0V20H4.4725V6.25Z" fill="white" />
                                      <path d="M16.655 6.41125C16.6075 6.39625 16.5625 6.38 16.5125 6.36625C16.4525 6.3525 16.3925 6.34125 16.3312 6.33125C16.0937 6.28375 15.8338 6.25 15.5288 6.25C12.9213 6.25 11.2675 8.14625 10.7225 8.87875V6.25H6.25V20H10.7225V12.5C10.7225 12.5 14.1025 7.7925 15.5288 11.25C15.5288 14.3363 15.5288 20 15.5288 20H20V10.7212C20 8.64375 18.5763 6.9125 16.655 6.41125Z" fill="white" />
                                      <path d="M2.1875 4.375C3.39562 4.375 4.375 3.39562 4.375 2.1875C4.375 0.979377 3.39562 0 2.1875 0C0.979377 0 0 0.979377 0 2.1875C0 3.39562 0.979377 4.375 2.1875 4.375Z" fill="white" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_267">
                                        <rect width="20" height="20" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button className="btn-Skype d-flex align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_371)">
                                      <path
                                        d="M19.645 10.1038C19.645 4.91 15.375 0.69875 10.1062 0.69875C9.55125 0.69875 9.00625 0.74625 8.475 0.83625C7.6225 0.3075 6.61375 0 5.5325 0C2.47625 0 0 2.44125 0 5.455C0 6.46125 0.2775 7.4025 0.76 8.21375C0.63375 8.82375 0.56625 9.4575 0.56625 10.1038C0.56625 15.2987 4.8375 19.51 10.105 19.51C10.7025 19.51 11.285 19.455 11.8525 19.3525C12.6325 19.765 13.5212 20 14.4688 20C17.5238 20 20 17.5575 20 14.5463C20 13.6763 19.7925 12.8538 19.425 12.1238C19.57 11.4713 19.645 10.7975 19.645 10.1038Z"
                                        fill="white" />
                                      <path
                                        d="M14.9994 14.5987C14.5581 15.215 13.9069 15.7025 13.0606 16.0475C12.2244 16.39 11.2231 16.5662 10.0806 16.5662C8.71063 16.5662 7.56187 16.3287 6.66437 15.8587C6.02312 15.5175 5.49562 15.0562 5.09437 14.4837C4.68812 13.9087 4.48438 13.3375 4.48438 12.7837C4.48438 12.4412 4.61813 12.1412 4.88188 11.8975C5.14313 11.6537 5.47813 11.5325 5.87813 11.5325C6.20563 11.5325 6.48813 11.6287 6.71813 11.82C6.93688 12.005 7.12563 12.2775 7.27688 12.6262C7.44563 13.0087 7.62937 13.3312 7.82312 13.5825C8.01187 13.8287 8.28063 14.0337 8.62438 14.195C8.97063 14.355 9.43687 14.4387 10.0094 14.4387C10.7981 14.4387 11.4456 14.2712 11.9306 13.945C12.4069 13.6262 12.6369 13.2412 12.6369 12.7712C12.6369 12.4012 12.5156 12.1087 12.2694 11.88C12.0094 11.64 11.6669 11.4537 11.2519 11.325C10.8181 11.1925 10.2294 11.0475 9.50187 10.8975C8.51062 10.6887 7.66937 10.4425 7.00187 10.16C6.31812 9.8725 5.76563 9.475 5.36313 8.97875C4.95313 8.47125 4.74563 7.8375 4.74563 7.0925C4.74563 6.3825 4.96313 5.7425 5.39313 5.19C5.81938 4.64125 6.44188 4.2125 7.24563 3.92125C8.03688 3.6325 8.97813 3.4875 10.0444 3.4875C10.8956 3.4875 11.6444 3.585 12.2706 3.7775C12.8994 3.97 13.4294 4.23 13.8456 4.55125C14.2656 4.87625 14.5781 5.22 14.7731 5.58C14.9706 5.9425 15.0719 6.30375 15.0719 6.6525C15.0719 6.98875 14.9406 7.295 14.6806 7.56C14.4181 7.8275 14.0881 7.9625 13.7006 7.9625C13.3481 7.9625 13.0706 7.87625 12.8794 7.71C12.7006 7.55375 12.5144 7.31 12.3094 6.9625C12.0719 6.5175 11.7831 6.16625 11.4531 5.9175C11.1319 5.67625 10.5969 5.55625 9.85938 5.55625C9.17688 5.55625 8.61938 5.69125 8.20688 5.95875C7.80938 6.215 7.61563 6.51 7.61563 6.86C7.61563 7.07375 7.67812 7.2525 7.80687 7.40625C7.94187 7.57125 8.13312 7.7125 8.37562 7.8325C8.62563 7.95625 8.88438 8.05625 9.14313 8.12625C9.40813 8.19875 9.85187 8.3075 10.4631 8.44625C11.2356 8.60875 11.9444 8.7925 12.5719 8.99125C13.2081 9.19 13.7556 9.43625 14.2056 9.725C14.6619 10.0187 15.0231 10.3937 15.2806 10.8437C15.5381 11.2975 15.6681 11.8537 15.6681 12.5012C15.6669 13.275 15.4419 13.9812 14.9994 14.5987Z"
                                        fill="#03A9F4" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_371">
                                        <rect width="20" height="20" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  Skype
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button variant="outline-light" className="d-flex align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_486)">
                                      <path
                                        d="M19.645 10.1038C19.645 4.91 15.375 0.69875 10.1062 0.69875C9.55125 0.69875 9.00625 0.74625 8.475 0.83625C7.6225 0.3075 6.61375 0 5.5325 0C2.47625 0 0 2.44125 0 5.455C0 6.46125 0.2775 7.4025 0.76 8.21375C0.63375 8.82375 0.56625 9.4575 0.56625 10.1038C0.56625 15.2987 4.8375 19.51 10.105 19.51C10.7025 19.51 11.285 19.455 11.8525 19.3525C12.6325 19.765 13.5212 20 14.4688 20C17.5238 20 20 17.5575 20 14.5463C20 13.6763 19.7925 12.8538 19.425 12.1238C19.57 11.4713 19.645 10.7975 19.645 10.1038Z"
                                        fill="#03A9F4" />
                                      <path
                                        d="M14.9994 14.5987C14.5581 15.215 13.9069 15.7025 13.0606 16.0475C12.2244 16.39 11.2231 16.5662 10.0806 16.5662C8.71063 16.5662 7.56187 16.3287 6.66437 15.8587C6.02312 15.5175 5.49562 15.0562 5.09437 14.4837C4.68812 13.9087 4.48438 13.3375 4.48438 12.7837C4.48438 12.4412 4.61813 12.1412 4.88188 11.8975C5.14313 11.6537 5.47813 11.5325 5.87813 11.5325C6.20563 11.5325 6.48813 11.6287 6.71813 11.82C6.93688 12.005 7.12563 12.2775 7.27688 12.6262C7.44563 13.0087 7.62937 13.3312 7.82312 13.5825C8.01187 13.8287 8.28063 14.0337 8.62438 14.195C8.97063 14.355 9.43687 14.4387 10.0094 14.4387C10.7981 14.4387 11.4456 14.2712 11.9306 13.945C12.4069 13.6262 12.6369 13.2412 12.6369 12.7712C12.6369 12.4012 12.5156 12.1087 12.2694 11.88C12.0094 11.64 11.6669 11.4537 11.2519 11.325C10.8181 11.1925 10.2294 11.0475 9.50187 10.8975C8.51062 10.6887 7.66937 10.4425 7.00187 10.16C6.31812 9.8725 5.76563 9.475 5.36313 8.97875C4.95313 8.47125 4.74563 7.8375 4.74563 7.0925C4.74563 6.3825 4.96313 5.7425 5.39313 5.19C5.81938 4.64125 6.44188 4.2125 7.24563 3.92125C8.03688 3.6325 8.97813 3.4875 10.0444 3.4875C10.8956 3.4875 11.6444 3.585 12.2706 3.7775C12.8994 3.97 13.4294 4.23 13.8456 4.55125C14.2656 4.87625 14.5781 5.22 14.7731 5.58C14.9706 5.9425 15.0719 6.30375 15.0719 6.6525C15.0719 6.98875 14.9406 7.295 14.6806 7.56C14.4181 7.8275 14.0881 7.9625 13.7006 7.9625C13.3481 7.9625 13.0706 7.87625 12.8794 7.71C12.7006 7.55375 12.5144 7.31 12.3094 6.9625C12.0719 6.5175 11.7831 6.16625 11.4531 5.9175C11.1319 5.67625 10.5969 5.55625 9.85938 5.55625C9.17688 5.55625 8.61938 5.69125 8.20688 5.95875C7.80938 6.215 7.61563 6.51 7.61563 6.86C7.61563 7.07375 7.67812 7.2525 7.80687 7.40625C7.94187 7.57125 8.13312 7.7125 8.37562 7.8325C8.62563 7.95625 8.88438 8.05625 9.14313 8.12625C9.40813 8.19875 9.85187 8.3075 10.4631 8.44625C11.2356 8.60875 11.9444 8.7925 12.5719 8.99125C13.2081 9.19 13.7556 9.43625 14.2056 9.725C14.6619 10.0187 15.0231 10.3937 15.2806 10.8437C15.5381 11.2975 15.6681 11.8537 15.6681 12.5012C15.6669 13.275 15.4419 13.9812 14.9994 14.5987Z"
                                        fill="#FAFAFA" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_4868">
                                        <rect width="20" height="20" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  Skype
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button variant="white" className="active d-flex align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_486)">
                                      <path
                                        d="M19.645 10.1038C19.645 4.91 15.375 0.69875 10.1062 0.69875C9.55125 0.69875 9.00625 0.74625 8.475 0.83625C7.6225 0.3075 6.61375 0 5.5325 0C2.47625 0 0 2.44125 0 5.455C0 6.46125 0.2775 7.4025 0.76 8.21375C0.63375 8.82375 0.56625 9.4575 0.56625 10.1038C0.56625 15.2987 4.8375 19.51 10.105 19.51C10.7025 19.51 11.285 19.455 11.8525 19.3525C12.6325 19.765 13.5212 20 14.4688 20C17.5238 20 20 17.5575 20 14.5463C20 13.6763 19.7925 12.8538 19.425 12.1238C19.57 11.4713 19.645 10.7975 19.645 10.1038Z"
                                        fill="#03A9F4" />
                                      <path
                                        d="M14.9994 14.5987C14.5581 15.215 13.9069 15.7025 13.0606 16.0475C12.2244 16.39 11.2231 16.5662 10.0806 16.5662C8.71063 16.5662 7.56187 16.3287 6.66437 15.8587C6.02312 15.5175 5.49562 15.0562 5.09437 14.4837C4.68812 13.9087 4.48438 13.3375 4.48438 12.7837C4.48438 12.4412 4.61813 12.1412 4.88188 11.8975C5.14313 11.6537 5.47813 11.5325 5.87813 11.5325C6.20563 11.5325 6.48813 11.6287 6.71813 11.82C6.93688 12.005 7.12563 12.2775 7.27688 12.6262C7.44563 13.0087 7.62937 13.3312 7.82312 13.5825C8.01187 13.8287 8.28063 14.0337 8.62438 14.195C8.97063 14.355 9.43687 14.4387 10.0094 14.4387C10.7981 14.4387 11.4456 14.2712 11.9306 13.945C12.4069 13.6262 12.6369 13.2412 12.6369 12.7712C12.6369 12.4012 12.5156 12.1087 12.2694 11.88C12.0094 11.64 11.6669 11.4537 11.2519 11.325C10.8181 11.1925 10.2294 11.0475 9.50187 10.8975C8.51062 10.6887 7.66937 10.4425 7.00187 10.16C6.31812 9.8725 5.76563 9.475 5.36313 8.97875C4.95313 8.47125 4.74563 7.8375 4.74563 7.0925C4.74563 6.3825 4.96313 5.7425 5.39313 5.19C5.81938 4.64125 6.44188 4.2125 7.24563 3.92125C8.03688 3.6325 8.97813 3.4875 10.0444 3.4875C10.8956 3.4875 11.6444 3.585 12.2706 3.7775C12.8994 3.97 13.4294 4.23 13.8456 4.55125C14.2656 4.87625 14.5781 5.22 14.7731 5.58C14.9706 5.9425 15.0719 6.30375 15.0719 6.6525C15.0719 6.98875 14.9406 7.295 14.6806 7.56C14.4181 7.8275 14.0881 7.9625 13.7006 7.9625C13.3481 7.9625 13.0706 7.87625 12.8794 7.71C12.7006 7.55375 12.5144 7.31 12.3094 6.9625C12.0719 6.5175 11.7831 6.16625 11.4531 5.9175C11.1319 5.67625 10.5969 5.55625 9.85938 5.55625C9.17688 5.55625 8.61938 5.69125 8.20688 5.95875C7.80938 6.215 7.61563 6.51 7.61563 6.86C7.61563 7.07375 7.67812 7.2525 7.80687 7.40625C7.94187 7.57125 8.13312 7.7125 8.37562 7.8325C8.62563 7.95625 8.88438 8.05625 9.14313 8.12625C9.40813 8.19875 9.85187 8.3075 10.4631 8.44625C11.2356 8.60875 11.9444 8.7925 12.5719 8.99125C13.2081 9.19 13.7556 9.43625 14.2056 9.725C14.6619 10.0187 15.0231 10.3937 15.2806 10.8437C15.5381 11.2975 15.6681 11.8537 15.6681 12.5012C15.6669 13.275 15.4419 13.9812 14.9994 14.5987Z"
                                        fill="#FAFAFA" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_4868">
                                        <rect width="20" height="20" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  Skype
                                </Button>
                              </Col>
                              <Col md={2}>
                                <Button variant="outline-light" className="btn-square btn-md d-flex justify-content-center align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_486)">
                                      <path
                                        d="M19.645 10.1038C19.645 4.91 15.375 0.69875 10.1062 0.69875C9.55125 0.69875 9.00625 0.74625 8.475 0.83625C7.6225 0.3075 6.61375 0 5.5325 0C2.47625 0 0 2.44125 0 5.455C0 6.46125 0.2775 7.4025 0.76 8.21375C0.63375 8.82375 0.56625 9.4575 0.56625 10.1038C0.56625 15.2987 4.8375 19.51 10.105 19.51C10.7025 19.51 11.285 19.455 11.8525 19.3525C12.6325 19.765 13.5212 20 14.4688 20C17.5238 20 20 17.5575 20 14.5463C20 13.6763 19.7925 12.8538 19.425 12.1238C19.57 11.4713 19.645 10.7975 19.645 10.1038Z"
                                        fill="#03A9F4" />
                                      <path
                                        d="M14.9994 14.5987C14.5581 15.215 13.9069 15.7025 13.0606 16.0475C12.2244 16.39 11.2231 16.5662 10.0806 16.5662C8.71063 16.5662 7.56187 16.3287 6.66437 15.8587C6.02312 15.5175 5.49562 15.0562 5.09437 14.4837C4.68812 13.9087 4.48438 13.3375 4.48438 12.7837C4.48438 12.4412 4.61813 12.1412 4.88188 11.8975C5.14313 11.6537 5.47813 11.5325 5.87813 11.5325C6.20563 11.5325 6.48813 11.6287 6.71813 11.82C6.93688 12.005 7.12563 12.2775 7.27688 12.6262C7.44563 13.0087 7.62937 13.3312 7.82312 13.5825C8.01187 13.8287 8.28063 14.0337 8.62438 14.195C8.97063 14.355 9.43687 14.4387 10.0094 14.4387C10.7981 14.4387 11.4456 14.2712 11.9306 13.945C12.4069 13.6262 12.6369 13.2412 12.6369 12.7712C12.6369 12.4012 12.5156 12.1087 12.2694 11.88C12.0094 11.64 11.6669 11.4537 11.2519 11.325C10.8181 11.1925 10.2294 11.0475 9.50187 10.8975C8.51062 10.6887 7.66937 10.4425 7.00187 10.16C6.31812 9.8725 5.76563 9.475 5.36313 8.97875C4.95313 8.47125 4.74563 7.8375 4.74563 7.0925C4.74563 6.3825 4.96313 5.7425 5.39313 5.19C5.81938 4.64125 6.44188 4.2125 7.24563 3.92125C8.03688 3.6325 8.97813 3.4875 10.0444 3.4875C10.8956 3.4875 11.6444 3.585 12.2706 3.7775C12.8994 3.97 13.4294 4.23 13.8456 4.55125C14.2656 4.87625 14.5781 5.22 14.7731 5.58C14.9706 5.9425 15.0719 6.30375 15.0719 6.6525C15.0719 6.98875 14.9406 7.295 14.6806 7.56C14.4181 7.8275 14.0881 7.9625 13.7006 7.9625C13.3481 7.9625 13.0706 7.87625 12.8794 7.71C12.7006 7.55375 12.5144 7.31 12.3094 6.9625C12.0719 6.5175 11.7831 6.16625 11.4531 5.9175C11.1319 5.67625 10.5969 5.55625 9.85938 5.55625C9.17688 5.55625 8.61938 5.69125 8.20688 5.95875C7.80938 6.215 7.61563 6.51 7.61563 6.86C7.61563 7.07375 7.67812 7.2525 7.80687 7.40625C7.94187 7.57125 8.13312 7.7125 8.37562 7.8325C8.62563 7.95625 8.88438 8.05625 9.14313 8.12625C9.40813 8.19875 9.85187 8.3075 10.4631 8.44625C11.2356 8.60875 11.9444 8.7925 12.5719 8.99125C13.2081 9.19 13.7556 9.43625 14.2056 9.725C14.6619 10.0187 15.0231 10.3937 15.2806 10.8437C15.5381 11.2975 15.6681 11.8537 15.6681 12.5012C15.6669 13.275 15.4419 13.9812 14.9994 14.5987Z"
                                        fill="#FAFAFA" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_4868">
                                        <rect width="20" height="20" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </Button>
                              </Col>
                              <Col md={1}>
                                <Button className="btn-square btn-md btn-Skype d-flex justify-content-center align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_371)">
                                      <path
                                        d="M19.645 10.1038C19.645 4.91 15.375 0.69875 10.1062 0.69875C9.55125 0.69875 9.00625 0.74625 8.475 0.83625C7.6225 0.3075 6.61375 0 5.5325 0C2.47625 0 0 2.44125 0 5.455C0 6.46125 0.2775 7.4025 0.76 8.21375C0.63375 8.82375 0.56625 9.4575 0.56625 10.1038C0.56625 15.2987 4.8375 19.51 10.105 19.51C10.7025 19.51 11.285 19.455 11.8525 19.3525C12.6325 19.765 13.5212 20 14.4688 20C17.5238 20 20 17.5575 20 14.5463C20 13.6763 19.7925 12.8538 19.425 12.1238C19.57 11.4713 19.645 10.7975 19.645 10.1038Z"
                                        fill="white" />
                                      <path
                                        d="M14.9994 14.5987C14.5581 15.215 13.9069 15.7025 13.0606 16.0475C12.2244 16.39 11.2231 16.5662 10.0806 16.5662C8.71063 16.5662 7.56187 16.3287 6.66437 15.8587C6.02312 15.5175 5.49562 15.0562 5.09437 14.4837C4.68812 13.9087 4.48438 13.3375 4.48438 12.7837C4.48438 12.4412 4.61813 12.1412 4.88188 11.8975C5.14313 11.6537 5.47813 11.5325 5.87813 11.5325C6.20563 11.5325 6.48813 11.6287 6.71813 11.82C6.93688 12.005 7.12563 12.2775 7.27688 12.6262C7.44563 13.0087 7.62937 13.3312 7.82312 13.5825C8.01187 13.8287 8.28063 14.0337 8.62438 14.195C8.97063 14.355 9.43687 14.4387 10.0094 14.4387C10.7981 14.4387 11.4456 14.2712 11.9306 13.945C12.4069 13.6262 12.6369 13.2412 12.6369 12.7712C12.6369 12.4012 12.5156 12.1087 12.2694 11.88C12.0094 11.64 11.6669 11.4537 11.2519 11.325C10.8181 11.1925 10.2294 11.0475 9.50187 10.8975C8.51062 10.6887 7.66937 10.4425 7.00187 10.16C6.31812 9.8725 5.76563 9.475 5.36313 8.97875C4.95313 8.47125 4.74563 7.8375 4.74563 7.0925C4.74563 6.3825 4.96313 5.7425 5.39313 5.19C5.81938 4.64125 6.44188 4.2125 7.24563 3.92125C8.03688 3.6325 8.97813 3.4875 10.0444 3.4875C10.8956 3.4875 11.6444 3.585 12.2706 3.7775C12.8994 3.97 13.4294 4.23 13.8456 4.55125C14.2656 4.87625 14.5781 5.22 14.7731 5.58C14.9706 5.9425 15.0719 6.30375 15.0719 6.6525C15.0719 6.98875 14.9406 7.295 14.6806 7.56C14.4181 7.8275 14.0881 7.9625 13.7006 7.9625C13.3481 7.9625 13.0706 7.87625 12.8794 7.71C12.7006 7.55375 12.5144 7.31 12.3094 6.9625C12.0719 6.5175 11.7831 6.16625 11.4531 5.9175C11.1319 5.67625 10.5969 5.55625 9.85938 5.55625C9.17688 5.55625 8.61938 5.69125 8.20688 5.95875C7.80938 6.215 7.61563 6.51 7.61563 6.86C7.61563 7.07375 7.67812 7.2525 7.80687 7.40625C7.94187 7.57125 8.13312 7.7125 8.37562 7.8325C8.62563 7.95625 8.88438 8.05625 9.14313 8.12625C9.40813 8.19875 9.85187 8.3075 10.4631 8.44625C11.2356 8.60875 11.9444 8.7925 12.5719 8.99125C13.2081 9.19 13.7556 9.43625 14.2056 9.725C14.6619 10.0187 15.0231 10.3937 15.2806 10.8437C15.5381 11.2975 15.6681 11.8537 15.6681 12.5012C15.6669 13.275 15.4419 13.9812 14.9994 14.5987Z"
                                        fill="#03A9F4" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_371">
                                        <rect width="20" height="20" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button className="btn-flickr d-flex align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="21" height="20" viewBox="0 0 21 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_376)">
                                      <path
                                        d="M16.125 14.375C18.5412 14.375 20.5 12.4162 20.5 10C20.5 7.58375 18.5412 5.625 16.125 5.625C13.7088 5.625 11.75 7.58375 11.75 10C11.75 12.4162 13.7088 14.375 16.125 14.375Z"
                                        fill="white" />
                                      <path
                                        d="M4.875 14.375C7.29125 14.375 9.25 12.4162 9.25 10C9.25 7.58375 7.29125 5.625 4.875 5.625C2.45875 5.625 0.5 7.58375 0.5 10C0.5 12.4162 2.45875 14.375 4.875 14.375Z"
                                        fill="white" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_376">
                                        <rect width="20" height="20" fill="white"
                                          transform="translate(0.5)" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  Flickr
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button variant="outline-light" className="d-flex align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="21" height="20" viewBox="0 0 21 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_491)">
                                      <path
                                        d="M16.125 14.375C18.5412 14.375 20.5 12.4162 20.5 10C20.5 7.58375 18.5412 5.625 16.125 5.625C13.7088 5.625 11.75 7.58375 11.75 10C11.75 12.4162 13.7088 14.375 16.125 14.375Z"
                                        fill="#EC407A" />
                                      <path
                                        d="M4.875 14.375C7.29125 14.375 9.25 12.4162 9.25 10C9.25 7.58375 7.29125 5.625 4.875 5.625C2.45875 5.625 0.5 7.58375 0.5 10C0.5 12.4162 2.45875 14.375 4.875 14.375Z"
                                        fill="#3F51B5" />
                                    </g>
                                    <defs>
                                      <rect width="20" height="20" fill="white"
                                        transform="translate(0.5)" />
                                    </defs>
                                  </svg>
                                  Flickr
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button variant="white" className="active d-flex align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="21" height="20" viewBox="0 0 21 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_491)">
                                      <path
                                        d="M16.125 14.375C18.5412 14.375 20.5 12.4162 20.5 10C20.5 7.58375 18.5412 5.625 16.125 5.625C13.7088 5.625 11.75 7.58375 11.75 10C11.75 12.4162 13.7088 14.375 16.125 14.375Z"
                                        fill="#EC407A" />
                                      <path
                                        d="M4.875 14.375C7.29125 14.375 9.25 12.4162 9.25 10C9.25 7.58375 7.29125 5.625 4.875 5.625C2.45875 5.625 0.5 7.58375 0.5 10C0.5 12.4162 2.45875 14.375 4.875 14.375Z"
                                        fill="#3F51B5" />
                                    </g>
                                    <defs>
                                      <rect width="20" height="20" fill="white"
                                        transform="translate(0.5)" />
                                    </defs>
                                  </svg>
                                  Flickr
                                </Button>
                              </Col>
                              <Col md={2}>
                                <Button variant="outline-light" className="btn-square btn-md d-flex justify-content-center align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="21" height="20" viewBox="0 0 21 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_491)">
                                      <path
                                        d="M16.125 14.375C18.5412 14.375 20.5 12.4162 20.5 10C20.5 7.58375 18.5412 5.625 16.125 5.625C13.7088 5.625 11.75 7.58375 11.75 10C11.75 12.4162 13.7088 14.375 16.125 14.375Z"
                                        fill="#EC407A" />
                                      <path
                                        d="M4.875 14.375C7.29125 14.375 9.25 12.4162 9.25 10C9.25 7.58375 7.29125 5.625 4.875 5.625C2.45875 5.625 0.5 7.58375 0.5 10C0.5 12.4162 2.45875 14.375 4.875 14.375Z"
                                        fill="#3F51B5" />
                                    </g>
                                    <defs>
                                      <rect width="20" height="20" fill="white"
                                        transform="translate(0.5)" />
                                    </defs>
                                  </svg>
                                </Button>
                              </Col>
                              <Col md={1}>
                                <Button className="btn-square btn-md btn-flickr d-flex justify-content-center align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="21" height="20" viewBox="0 0 21 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_376)">
                                      <path
                                        d="M16.125 14.375C18.5412 14.375 20.5 12.4162 20.5 10C20.5 7.58375 18.5412 5.625 16.125 5.625C13.7088 5.625 11.75 7.58375 11.75 10C11.75 12.4162 13.7088 14.375 16.125 14.375Z"
                                        fill="white" />
                                      <path
                                        d="M4.875 14.375C7.29125 14.375 9.25 12.4162 9.25 10C9.25 7.58375 7.29125 5.625 4.875 5.625C2.45875 5.625 0.5 7.58375 0.5 10C0.5 12.4162 2.45875 14.375 4.875 14.375Z"
                                        fill="white" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_376">
                                        <rect width="20" height="20" fill="white"
                                          transform="translate(0.5)" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button className="btn-photo d-flex align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_381)">
                                      <path d="M5 5L0 10H7.5L9.375 9.375L5 5Z"
                                        fill="white" />
                                      <path d="M5 5L9.375 9.375L10 7.5V5H5Z"
                                        fill="white" />
                                      <path d="M5 15L10 20V12.5L9.375 10.625L5 15Z"
                                        fill="white" />
                                      <path d="M5 15L9.375 10.625L7.5 10H5V15Z"
                                        fill="white" />
                                      <path d="M15 15L20 10H12.5L10.625 10.625L15 15Z"
                                        fill="white" />
                                      <path d="M15 15L10.625 10.625L10 12.5V15H15Z"
                                        fill="white" />
                                      <path d="M15 5L10 0V7.5L10.625 9.375L15 5Z"
                                        fill="white" />
                                      <path d="M15 5L10.625 9.375L12.5 10H15V5Z"
                                        fill="white" />
                                    </g>
                                    <clipPath id="clip0_309_381">
                                      <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                  </svg>
                                  photo
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button variant="outline-light" className="d-flex align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_496)">
                                      <path d="M5 5L0 10H7.5L9.375 9.375L5 5Z"
                                        fill="#FFC107" />
                                      <path d="M5 5L9.375 9.375L10 7.5V5H5Z"
                                        fill="#FFA000" />
                                      <path d="M5 15L10 20V12.5L9.375 10.625L5 15Z"
                                        fill="#4CAF50" />
                                      <path d="M5 15L9.375 10.625L7.5 10H5V15Z"
                                        fill="#388E3C" />
                                      <path d="M15 15L20 10H12.5L10.625 10.625L15 15Z"
                                        fill="#2196F3" />
                                      <path d="M15 15L10.625 10.625L10 12.5V15H15Z"
                                        fill="#1976D2" />
                                      <path d="M15 5L10 0V7.5L10.625 9.375L15 5Z"
                                        fill="#F44336" />
                                      <path d="M15 5L10.625 9.375L12.5 10H15V5Z"
                                        fill="#9C27B0" />
                                    </g>
                                    <clipPath id="clip0_309_49616">
                                      <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                  </svg>
                                  photo
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button variant="white" className="active d-flex align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_496)">
                                      <path d="M5 5L0 10H7.5L9.375 9.375L5 5Z"
                                        fill="#FFC107" />
                                      <path d="M5 5L9.375 9.375L10 7.5V5H5Z"
                                        fill="#FFA000" />
                                      <path d="M5 15L10 20V12.5L9.375 10.625L5 15Z"
                                        fill="#4CAF50" />
                                      <path d="M5 15L9.375 10.625L7.5 10H5V15Z"
                                        fill="#388E3C" />
                                      <path d="M15 15L20 10H12.5L10.625 10.625L15 15Z"
                                        fill="#2196F3" />
                                      <path d="M15 15L10.625 10.625L10 12.5V15H15Z"
                                        fill="#1976D2" />
                                      <path d="M15 5L10 0V7.5L10.625 9.375L15 5Z"
                                        fill="#F44336" />
                                      <path d="M15 5L10.625 9.375L12.5 10H15V5Z"
                                        fill="#9C27B0" />
                                    </g>
                                    <clipPath id="clip0_309_49616">
                                      <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                  </svg>
                                  photo
                                </Button>
                              </Col>
                              <Col md={2}>
                                <Button variant="outline-light" className="btn-square btn-md d-flex justify-content-center align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_496)">
                                      <path d="M5 5L0 10H7.5L9.375 9.375L5 5Z"
                                        fill="#FFC107" />
                                      <path d="M5 5L9.375 9.375L10 7.5V5H5Z"
                                        fill="#FFA000" />
                                      <path d="M5 15L10 20V12.5L9.375 10.625L5 15Z"
                                        fill="#4CAF50" />
                                      <path d="M5 15L9.375 10.625L7.5 10H5V15Z"
                                        fill="#388E3C" />
                                      <path d="M15 15L20 10H12.5L10.625 10.625L15 15Z"
                                        fill="#2196F3" />
                                      <path d="M15 15L10.625 10.625L10 12.5V15H15Z"
                                        fill="#1976D2" />
                                      <path d="M15 5L10 0V7.5L10.625 9.375L15 5Z"
                                        fill="#F44336" />
                                      <path d="M15 5L10.625 9.375L12.5 10H15V5Z"
                                        fill="#9C27B0" />
                                    </g>
                                    <clipPath id="clip0_309_49616">
                                      <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                  </svg>
                                </Button>
                              </Col>
                              <Col md={1}>
                                <Button className="btn-square btn-md btn-photo d-flex justify-content-center align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_381)">
                                      <path d="M5 5L0 10H7.5L9.375 9.375L5 5Z"
                                        fill="white" />
                                      <path d="M5 5L9.375 9.375L10 7.5V5H5Z"
                                        fill="white" />
                                      <path d="M5 15L10 20V12.5L9.375 10.625L5 15Z"
                                        fill="white" />
                                      <path d="M5 15L9.375 10.625L7.5 10H5V15Z"
                                        fill="white" />
                                      <path d="M15 15L20 10H12.5L10.625 10.625L15 15Z"
                                        fill="white" />
                                      <path d="M15 15L10.625 10.625L10 12.5V15H15Z"
                                        fill="white" />
                                      <path d="M15 5L10 0V7.5L10.625 9.375L15 5Z"
                                        fill="white" />
                                      <path d="M15 5L10.625 9.375L12.5 10H15V5Z"
                                        fill="white" />
                                    </g>
                                    <clipPath id="clip0_309_381">
                                      <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                  </svg>
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button className="btn-linkedin d-flex align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="21" height="20" viewBox="0 0 21 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_392)">
                                      <path
                                        d="M9.677 5.04959C10.0545 5.56838 10.2433 6.18718 10.2433 6.91099C10.2433 7.6548 10.0545 8.25485 9.672 8.70739C9.45698 8.95866 9.14321 9.19118 8.72817 9.39995C9.35823 9.62746 9.83327 9.98624 10.157 10.4763C10.4771 10.9663 10.6383 11.5626 10.6383 12.2627C10.6383 12.9852 10.4546 13.634 10.087 14.2066C9.85452 14.5854 9.56199 14.9066 9.21196 15.1654C8.81818 15.4629 8.35314 15.6667 7.8156 15.778C7.27806 15.888 6.69676 15.9417 6.06921 15.9417H0.5V3.74948H6.47299C7.98061 3.77198 9.04695 4.20452 9.677 5.04959ZM2.96395 5.86715V8.55738H5.9692C6.50424 8.55738 6.94053 8.45612 7.27681 8.25485C7.61058 8.05358 7.77935 7.69605 7.77935 7.18476C7.77935 6.61472 7.55808 6.24094 7.11554 6.05717C6.73301 5.93091 6.24547 5.86715 5.65417 5.86715H2.96395ZM2.96395 10.575V13.8266H5.96545C6.50174 13.8266 6.92053 13.7553 7.21805 13.6115C7.7606 13.344 8.03062 12.839 8.03062 12.0889C8.03062 11.4526 7.76935 11.0176 7.2443 10.7801C6.94928 10.6488 6.53675 10.5788 6.0067 10.575H2.96395ZM18.1102 7.10976C18.749 7.39103 19.274 7.83607 19.6878 8.44362C20.0654 8.97991 20.3079 9.60121 20.4179 10.3075C20.4829 10.7201 20.5079 11.3189 20.4979 12.0977H13.8386C13.8786 13.0015 14.1936 13.6365 14.7962 13.9991C15.1612 14.2253 15.5987 14.3391 16.115 14.3391C16.6576 14.3391 17.1001 14.2016 17.4401 13.9266C17.6277 13.7766 17.7914 13.5703 17.9327 13.3065H20.3729C20.3079 13.8403 20.0116 14.3841 19.4878 14.9366C18.669 15.8117 17.5226 16.2505 16.0488 16.2505C14.8312 16.2505 13.7586 15.8817 12.8298 15.1417C11.8972 14.4029 11.4334 13.199 11.4334 11.5326C11.4334 9.96999 11.8534 8.77114 12.6923 7.93733C13.5336 7.10601 14.6212 6.68722 15.96 6.68722C16.7576 6.68597 17.4739 6.82723 18.1102 7.10976ZM14.5362 9.14617C14.1986 9.48995 13.9861 9.95499 13.8986 10.5413H18.0177C17.9739 9.91499 17.7602 9.4412 17.3814 9.11492C16.9976 8.79114 16.5263 8.62988 15.9625 8.62988C15.3512 8.63113 14.8737 8.80365 14.5362 9.14617ZM13.281 5.8359H18.5777V4.31828H13.281V5.8359Z"
                                        fill="white" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_392">
                                        <rect width="20" height="20" fill="white"
                                          transform="translate(0.5)" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  behance
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button variant="outline-light" className="d-flex align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="21" height="20" viewBox="0 0 21 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_507)">
                                      <path
                                        d="M9.677 5.04959C10.0545 5.56838 10.2433 6.18718 10.2433 6.91099C10.2433 7.6548 10.0545 8.25485 9.672 8.70739C9.45698 8.95866 9.14321 9.19118 8.72817 9.39995C9.35823 9.62746 9.83327 9.98624 10.157 10.4763C10.4771 10.9663 10.6383 11.5626 10.6383 12.2627C10.6383 12.9852 10.4546 13.634 10.087 14.2066C9.85452 14.5854 9.56199 14.9066 9.21196 15.1654C8.81818 15.4629 8.35314 15.6667 7.8156 15.778C7.27806 15.888 6.69676 15.9417 6.06921 15.9417H0.5V3.74948H6.47299C7.98061 3.77198 9.04695 4.20452 9.677 5.04959ZM2.96395 5.86715V8.55738H5.9692C6.50424 8.55738 6.94053 8.45612 7.27681 8.25485C7.61058 8.05358 7.77935 7.69605 7.77935 7.18476C7.77935 6.61472 7.55808 6.24094 7.11554 6.05717C6.73301 5.93091 6.24547 5.86715 5.65417 5.86715H2.96395ZM2.96395 10.575V13.8266H5.96545C6.50174 13.8266 6.92053 13.7553 7.21805 13.6115C7.7606 13.344 8.03062 12.839 8.03062 12.0889C8.03062 11.4526 7.76935 11.0176 7.2443 10.7801C6.94928 10.6488 6.53675 10.5788 6.0067 10.575H2.96395ZM18.1102 7.10976C18.749 7.39103 19.274 7.83607 19.6878 8.44362C20.0654 8.97991 20.3079 9.60121 20.4179 10.3075C20.4829 10.7201 20.5079 11.3189 20.4979 12.0977H13.8386C13.8786 13.0015 14.1936 13.6365 14.7962 13.9991C15.1612 14.2253 15.5987 14.3391 16.115 14.3391C16.6576 14.3391 17.1001 14.2016 17.4401 13.9266C17.6277 13.7766 17.7914 13.5703 17.9327 13.3065H20.3729C20.3079 13.8403 20.0116 14.3841 19.4878 14.9366C18.669 15.8117 17.5226 16.2505 16.0488 16.2505C14.8312 16.2505 13.7586 15.8817 12.8298 15.1417C11.8972 14.4029 11.4334 13.199 11.4334 11.5326C11.4334 9.96999 11.8534 8.77114 12.6923 7.93733C13.5336 7.10601 14.6212 6.68722 15.96 6.68722C16.7576 6.68597 17.4739 6.82723 18.1102 7.10976ZM14.5362 9.14617C14.1986 9.48995 13.9861 9.95499 13.8986 10.5413H18.0177C17.9739 9.91499 17.7602 9.4412 17.3814 9.11492C16.9976 8.79114 16.5263 8.62988 15.9625 8.62988C15.3512 8.63113 14.8737 8.80365 14.5362 9.14617ZM13.281 5.8359H18.5777V4.31828H13.281V5.8359Z"
                                        fill="#1976D2" />
                                    </g>
                                    <defs>
                                      <clipPath>
                                        <rect width=" 20" height="20" fill="white" transform="translate(0.5)" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  behance
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button variant="white" className="active d-flex align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="21" height="20" viewBox="0 0 21 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_507)">
                                      <path
                                        d="M9.677 5.04959C10.0545 5.56838 10.2433 6.18718 10.2433 6.91099C10.2433 7.6548 10.0545 8.25485 9.672 8.70739C9.45698 8.95866 9.14321 9.19118 8.72817 9.39995C9.35823 9.62746 9.83327 9.98624 10.157 10.4763C10.4771 10.9663 10.6383 11.5626 10.6383 12.2627C10.6383 12.9852 10.4546 13.634 10.087 14.2066C9.85452 14.5854 9.56199 14.9066 9.21196 15.1654C8.81818 15.4629 8.35314 15.6667 7.8156 15.778C7.27806 15.888 6.69676 15.9417 6.06921 15.9417H0.5V3.74948H6.47299C7.98061 3.77198 9.04695 4.20452 9.677 5.04959ZM2.96395 5.86715V8.55738H5.9692C6.50424 8.55738 6.94053 8.45612 7.27681 8.25485C7.61058 8.05358 7.77935 7.69605 7.77935 7.18476C7.77935 6.61472 7.55808 6.24094 7.11554 6.05717C6.73301 5.93091 6.24547 5.86715 5.65417 5.86715H2.96395ZM2.96395 10.575V13.8266H5.96545C6.50174 13.8266 6.92053 13.7553 7.21805 13.6115C7.7606 13.344 8.03062 12.839 8.03062 12.0889C8.03062 11.4526 7.76935 11.0176 7.2443 10.7801C6.94928 10.6488 6.53675 10.5788 6.0067 10.575H2.96395ZM18.1102 7.10976C18.749 7.39103 19.274 7.83607 19.6878 8.44362C20.0654 8.97991 20.3079 9.60121 20.4179 10.3075C20.4829 10.7201 20.5079 11.3189 20.4979 12.0977H13.8386C13.8786 13.0015 14.1936 13.6365 14.7962 13.9991C15.1612 14.2253 15.5987 14.3391 16.115 14.3391C16.6576 14.3391 17.1001 14.2016 17.4401 13.9266C17.6277 13.7766 17.7914 13.5703 17.9327 13.3065H20.3729C20.3079 13.8403 20.0116 14.3841 19.4878 14.9366C18.669 15.8117 17.5226 16.2505 16.0488 16.2505C14.8312 16.2505 13.7586 15.8817 12.8298 15.1417C11.8972 14.4029 11.4334 13.199 11.4334 11.5326C11.4334 9.96999 11.8534 8.77114 12.6923 7.93733C13.5336 7.10601 14.6212 6.68722 15.96 6.68722C16.7576 6.68597 17.4739 6.82723 18.1102 7.10976ZM14.5362 9.14617C14.1986 9.48995 13.9861 9.95499 13.8986 10.5413H18.0177C17.9739 9.91499 17.7602 9.4412 17.3814 9.11492C16.9976 8.79114 16.5263 8.62988 15.9625 8.62988C15.3512 8.63113 14.8737 8.80365 14.5362 9.14617ZM13.281 5.8359H18.5777V4.31828H13.281V5.8359Z"
                                        fill="#1976D2" />
                                    </g>
                                    <defs>
                                      <clipPath>
                                        <rect width=" 20" height="20" fill="white" transform="translate(0.5)" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  behance
                                </Button>
                              </Col>
                              <Col md={2}>
                                <Button variant="outline-light" className="btn-square btn-md d-flex justify-content-center align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="21" height="20" viewBox="0 0 21 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_507)">
                                      <path
                                        d="M9.677 5.04959C10.0545 5.56838 10.2433 6.18718 10.2433 6.91099C10.2433 7.6548 10.0545 8.25485 9.672 8.70739C9.45698 8.95866 9.14321 9.19118 8.72817 9.39995C9.35823 9.62746 9.83327 9.98624 10.157 10.4763C10.4771 10.9663 10.6383 11.5626 10.6383 12.2627C10.6383 12.9852 10.4546 13.634 10.087 14.2066C9.85452 14.5854 9.56199 14.9066 9.21196 15.1654C8.81818 15.4629 8.35314 15.6667 7.8156 15.778C7.27806 15.888 6.69676 15.9417 6.06921 15.9417H0.5V3.74948H6.47299C7.98061 3.77198 9.04695 4.20452 9.677 5.04959ZM2.96395 5.86715V8.55738H5.9692C6.50424 8.55738 6.94053 8.45612 7.27681 8.25485C7.61058 8.05358 7.77935 7.69605 7.77935 7.18476C7.77935 6.61472 7.55808 6.24094 7.11554 6.05717C6.73301 5.93091 6.24547 5.86715 5.65417 5.86715H2.96395ZM2.96395 10.575V13.8266H5.96545C6.50174 13.8266 6.92053 13.7553 7.21805 13.6115C7.7606 13.344 8.03062 12.839 8.03062 12.0889C8.03062 11.4526 7.76935 11.0176 7.2443 10.7801C6.94928 10.6488 6.53675 10.5788 6.0067 10.575H2.96395ZM18.1102 7.10976C18.749 7.39103 19.274 7.83607 19.6878 8.44362C20.0654 8.97991 20.3079 9.60121 20.4179 10.3075C20.4829 10.7201 20.5079 11.3189 20.4979 12.0977H13.8386C13.8786 13.0015 14.1936 13.6365 14.7962 13.9991C15.1612 14.2253 15.5987 14.3391 16.115 14.3391C16.6576 14.3391 17.1001 14.2016 17.4401 13.9266C17.6277 13.7766 17.7914 13.5703 17.9327 13.3065H20.3729C20.3079 13.8403 20.0116 14.3841 19.4878 14.9366C18.669 15.8117 17.5226 16.2505 16.0488 16.2505C14.8312 16.2505 13.7586 15.8817 12.8298 15.1417C11.8972 14.4029 11.4334 13.199 11.4334 11.5326C11.4334 9.96999 11.8534 8.77114 12.6923 7.93733C13.5336 7.10601 14.6212 6.68722 15.96 6.68722C16.7576 6.68597 17.4739 6.82723 18.1102 7.10976ZM14.5362 9.14617C14.1986 9.48995 13.9861 9.95499 13.8986 10.5413H18.0177C17.9739 9.91499 17.7602 9.4412 17.3814 9.11492C16.9976 8.79114 16.5263 8.62988 15.9625 8.62988C15.3512 8.63113 14.8737 8.80365 14.5362 9.14617ZM13.281 5.8359H18.5777V4.31828H13.281V5.8359Z"
                                        fill="#1976D2" />
                                    </g>
                                    <defs>
                                      <clipPath>
                                        <rect width=" 20" height="20" fill="white" transform="translate(0.5)" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </Button>
                              </Col>
                              <Col md={1}>
                                <Button className="btn-square btn-md btn-linkedin d-flex justify-content-center align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="21" height="20" viewBox="0 0 21 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_392)">
                                      <path
                                        d="M9.677 5.04959C10.0545 5.56838 10.2433 6.18718 10.2433 6.91099C10.2433 7.6548 10.0545 8.25485 9.672 8.70739C9.45698 8.95866 9.14321 9.19118 8.72817 9.39995C9.35823 9.62746 9.83327 9.98624 10.157 10.4763C10.4771 10.9663 10.6383 11.5626 10.6383 12.2627C10.6383 12.9852 10.4546 13.634 10.087 14.2066C9.85452 14.5854 9.56199 14.9066 9.21196 15.1654C8.81818 15.4629 8.35314 15.6667 7.8156 15.778C7.27806 15.888 6.69676 15.9417 6.06921 15.9417H0.5V3.74948H6.47299C7.98061 3.77198 9.04695 4.20452 9.677 5.04959ZM2.96395 5.86715V8.55738H5.9692C6.50424 8.55738 6.94053 8.45612 7.27681 8.25485C7.61058 8.05358 7.77935 7.69605 7.77935 7.18476C7.77935 6.61472 7.55808 6.24094 7.11554 6.05717C6.73301 5.93091 6.24547 5.86715 5.65417 5.86715H2.96395ZM2.96395 10.575V13.8266H5.96545C6.50174 13.8266 6.92053 13.7553 7.21805 13.6115C7.7606 13.344 8.03062 12.839 8.03062 12.0889C8.03062 11.4526 7.76935 11.0176 7.2443 10.7801C6.94928 10.6488 6.53675 10.5788 6.0067 10.575H2.96395ZM18.1102 7.10976C18.749 7.39103 19.274 7.83607 19.6878 8.44362C20.0654 8.97991 20.3079 9.60121 20.4179 10.3075C20.4829 10.7201 20.5079 11.3189 20.4979 12.0977H13.8386C13.8786 13.0015 14.1936 13.6365 14.7962 13.9991C15.1612 14.2253 15.5987 14.3391 16.115 14.3391C16.6576 14.3391 17.1001 14.2016 17.4401 13.9266C17.6277 13.7766 17.7914 13.5703 17.9327 13.3065H20.3729C20.3079 13.8403 20.0116 14.3841 19.4878 14.9366C18.669 15.8117 17.5226 16.2505 16.0488 16.2505C14.8312 16.2505 13.7586 15.8817 12.8298 15.1417C11.8972 14.4029 11.4334 13.199 11.4334 11.5326C11.4334 9.96999 11.8534 8.77114 12.6923 7.93733C13.5336 7.10601 14.6212 6.68722 15.96 6.68722C16.7576 6.68597 17.4739 6.82723 18.1102 7.10976ZM14.5362 9.14617C14.1986 9.48995 13.9861 9.95499 13.8986 10.5413H18.0177C17.9739 9.91499 17.7602 9.4412 17.3814 9.11492C16.9976 8.79114 16.5263 8.62988 15.9625 8.62988C15.3512 8.63113 14.8737 8.80365 14.5362 9.14617ZM13.281 5.8359H18.5777V4.31828H13.281V5.8359Z"
                                        fill="white" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_392">
                                        <rect width="20" height="20" fill="white"
                                          transform="translate(0.5)" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button className="btn-vimeo d-flex align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="21" height="20" viewBox="0 0 21 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_396)">
                                      <path
                                        d="M0.5 6.02519L1.30748 7.08891C1.30748 7.08891 2.98245 5.76769 3.53993 6.42518C4.10492 7.08891 6.24363 15.0587 6.95111 16.5325C7.5686 17.8237 9.28231 19.5274 11.1548 18.3124C13.0447 17.0899 19.2833 11.7626 20.4008 5.45895C21.5158 -0.833418 12.881 0.484054 11.976 5.96894C14.2535 4.60147 15.4809 6.52892 14.3135 8.70763C13.1435 10.8951 12.0698 12.3213 11.5135 12.3213C10.9673 12.3213 10.5348 10.8538 9.8948 8.30639C9.23856 5.66769 9.23856 0.910295 6.49362 1.45028C3.89868 1.96277 0.5 6.02519 0.5 6.02519Z"
                                        fill="white" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_396">
                                        <rect width="20" height="20" fill="white"
                                          transform="translate(0.5)" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  Vimeo
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button variant="outline-light" className="d-flex align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="21" height="20" viewBox="0 0 21 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_511)">
                                      <path
                                        d="M0.5 6.02519L1.30748 7.08891C1.30748 7.08891 2.98245 5.76769 3.53993 6.42518C4.10492 7.08891 6.24363 15.0587 6.95111 16.5325C7.5686 17.8237 9.28231 19.5274 11.1548 18.3124C13.0447 17.0899 19.2833 11.7626 20.4008 5.45895C21.5158 -0.833418 12.881 0.484054 11.976 5.96894C14.2535 4.60147 15.4809 6.52892 14.3135 8.70763C13.1435 10.8951 12.0698 12.3213 11.5135 12.3213C10.9673 12.3213 10.5348 10.8538 9.8948 8.30639C9.23856 5.66769 9.23856 0.910295 6.49362 1.45028C3.89868 1.96277 0.5 6.02519 0.5 6.02519Z"
                                        fill="#00BCD4" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_349_511">
                                        <rect width="20" height="20" fill="white"
                                          transform="translate(0.5)" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  Vimeo
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button variant="white" className="active d-flex align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="21" height="20" viewBox="0 0 21 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_511)">
                                      <path
                                        d="M0.5 6.02519L1.30748 7.08891C1.30748 7.08891 2.98245 5.76769 3.53993 6.42518C4.10492 7.08891 6.24363 15.0587 6.95111 16.5325C7.5686 17.8237 9.28231 19.5274 11.1548 18.3124C13.0447 17.0899 19.2833 11.7626 20.4008 5.45895C21.5158 -0.833418 12.881 0.484054 11.976 5.96894C14.2535 4.60147 15.4809 6.52892 14.3135 8.70763C13.1435 10.8951 12.0698 12.3213 11.5135 12.3213C10.9673 12.3213 10.5348 10.8538 9.8948 8.30639C9.23856 5.66769 9.23856 0.910295 6.49362 1.45028C3.89868 1.96277 0.5 6.02519 0.5 6.02519Z"
                                        fill="#00BCD4" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_349_511">
                                        <rect width="20" height="20" fill="white"
                                          transform="translate(0.5)" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  Vimeo
                                </Button>
                              </Col>
                              <Col md={2}>
                                <Button variant="outline-light" className="btn-square btn-md d-flex justify-content-center align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="21" height="20" viewBox="0 0 21 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_511)">
                                      <path
                                        d="M0.5 6.02519L1.30748 7.08891C1.30748 7.08891 2.98245 5.76769 3.53993 6.42518C4.10492 7.08891 6.24363 15.0587 6.95111 16.5325C7.5686 17.8237 9.28231 19.5274 11.1548 18.3124C13.0447 17.0899 19.2833 11.7626 20.4008 5.45895C21.5158 -0.833418 12.881 0.484054 11.976 5.96894C14.2535 4.60147 15.4809 6.52892 14.3135 8.70763C13.1435 10.8951 12.0698 12.3213 11.5135 12.3213C10.9673 12.3213 10.5348 10.8538 9.8948 8.30639C9.23856 5.66769 9.23856 0.910295 6.49362 1.45028C3.89868 1.96277 0.5 6.02519 0.5 6.02519Z"
                                        fill="#00BCD4" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_349_511">
                                        <rect width="20" height="20" fill="white"
                                          transform="translate(0.5)" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </Button>
                              </Col>
                              <Col md={1}>
                                <Button className="btn-square btn-md btn-vimeo d-flex justify-content-center align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="21" height="20" viewBox="0 0 21 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_396)">
                                      <path
                                        d="M0.5 6.02519L1.30748 7.08891C1.30748 7.08891 2.98245 5.76769 3.53993 6.42518C4.10492 7.08891 6.24363 15.0587 6.95111 16.5325C7.5686 17.8237 9.28231 19.5274 11.1548 18.3124C13.0447 17.0899 19.2833 11.7626 20.4008 5.45895C21.5158 -0.833418 12.881 0.484054 11.976 5.96894C14.2535 4.60147 15.4809 6.52892 14.3135 8.70763C13.1435 10.8951 12.0698 12.3213 11.5135 12.3213C10.9673 12.3213 10.5348 10.8538 9.8948 8.30639C9.23856 5.66769 9.23856 0.910295 6.49362 1.45028C3.89868 1.96277 0.5 6.02519 0.5 6.02519Z"
                                        fill="white" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_396">
                                        <rect width="20" height="20" fill="white"
                                          transform="translate(0.5)" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button className="btn-dropbox d-flex align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="21" height="20" viewBox="0 0 21 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_400)">
                                      <path
                                        d="M20.5 3.8725L14.6163 0L10.5 3.46375L16.4325 7.155L20.5 3.8725Z"
                                        fill="white" />
                                      <path
                                        d="M6.38375 0L0.5 3.87125L4.56875 7.155L10.5 3.46375L6.38375 0Z"
                                        fill="white" />
                                      <path
                                        d="M10.5 10.8475L6.38375 14.3112L0.5 10.4387L4.5675 7.155L10.5 10.8475L16.4312 7.155L20.5 10.4387L14.6163 14.3112L10.5 10.8475Z"
                                        fill="white" />
                                      <path
                                        d="M14.9137 15.6113C14.81 15.68 14.69 15.7138 14.5712 15.7138C14.4275 15.7138 14.285 15.6638 14.1688 15.5675L10.5 12.48L6.83125 15.5675C6.62 15.745 6.31625 15.7625 6.085 15.6113L4.25 14.4038V16.25L10.5125 20L16.75 16.25V14.4025L14.9137 15.6113Z"
                                        fill="white" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_400">
                                        <rect width="20" height="20" fill="white"
                                          transform="translate(0.5)" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  dropbox
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button variant="outline-light" className="d-flex align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="21" height="20" viewBox="0 0 21 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_515)">
                                      <path
                                        d="M20.5 3.8725L14.6163 0L10.5 3.46375L16.4325 7.155L20.5 3.8725Z"
                                        fill="#1E88E5" />
                                      <path
                                        d="M6.38375 0L0.5 3.87125L4.56875 7.155L10.5 3.46375L6.38375 0Z"
                                        fill="#1E88E5" />
                                      <path
                                        d="M10.5 10.8475L6.38375 14.3112L0.5 10.4387L4.5675 7.155L10.5 10.8475L16.4312 7.155L20.5 10.4387L14.6163 14.3112L10.5 10.8475Z"
                                        fill="#1E88E5" />
                                      <path
                                        d="M14.9137 15.6113C14.81 15.68 14.69 15.7138 14.5712 15.7138C14.4275 15.7138 14.285 15.6638 14.1688 15.5675L10.5 12.48L6.83125 15.5675C6.62 15.745 6.31625 15.7625 6.085 15.6113L4.25 14.4038V16.25L10.5125 20L16.75 16.25V14.4025L14.9137 15.6113Z"
                                        fill="#1E88E5" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_359_515">
                                        <rect width="20" height="20" fill="white"
                                          transform="translate(0.5)" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  dropbox
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button variant="white" className="active d-flex align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="21" height="20" viewBox="0 0 21 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_515)">
                                      <path
                                        d="M20.5 3.8725L14.6163 0L10.5 3.46375L16.4325 7.155L20.5 3.8725Z"
                                        fill="#1E88E5" />
                                      <path
                                        d="M6.38375 0L0.5 3.87125L4.56875 7.155L10.5 3.46375L6.38375 0Z"
                                        fill="#1E88E5" />
                                      <path
                                        d="M10.5 10.8475L6.38375 14.3112L0.5 10.4387L4.5675 7.155L10.5 10.8475L16.4312 7.155L20.5 10.4387L14.6163 14.3112L10.5 10.8475Z"
                                        fill="#1E88E5" />
                                      <path
                                        d="M14.9137 15.6113C14.81 15.68 14.69 15.7138 14.5712 15.7138C14.4275 15.7138 14.285 15.6638 14.1688 15.5675L10.5 12.48L6.83125 15.5675C6.62 15.745 6.31625 15.7625 6.085 15.6113L4.25 14.4038V16.25L10.5125 20L16.75 16.25V14.4025L14.9137 15.6113Z"
                                        fill="#1E88E5" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_359_515">
                                        <rect width="20" height="20" fill="white"
                                          transform="translate(0.5)" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  dropbox
                                </Button>
                              </Col>
                              <Col md={2}>
                                <Button variant="outline-light" className="btn-square btn-md d-flex justify-content-center align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="21" height="20" viewBox="0 0 21 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_515)">
                                      <path
                                        d="M20.5 3.8725L14.6163 0L10.5 3.46375L16.4325 7.155L20.5 3.8725Z"
                                        fill="#1E88E5" />
                                      <path
                                        d="M6.38375 0L0.5 3.87125L4.56875 7.155L10.5 3.46375L6.38375 0Z"
                                        fill="#1E88E5" />
                                      <path
                                        d="M10.5 10.8475L6.38375 14.3112L0.5 10.4387L4.5675 7.155L10.5 10.8475L16.4312 7.155L20.5 10.4387L14.6163 14.3112L10.5 10.8475Z"
                                        fill="#1E88E5" />
                                      <path
                                        d="M14.9137 15.6113C14.81 15.68 14.69 15.7138 14.5712 15.7138C14.4275 15.7138 14.285 15.6638 14.1688 15.5675L10.5 12.48L6.83125 15.5675C6.62 15.745 6.31625 15.7625 6.085 15.6113L4.25 14.4038V16.25L10.5125 20L16.75 16.25V14.4025L14.9137 15.6113Z"
                                        fill="#1E88E5" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_359_515">
                                        <rect width="20" height="20" fill="white"
                                          transform="translate(0.5)" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </Button>
                              </Col>
                              <Col md={1}>
                                <Button className="btn-square btn-md btn-dropbox d-flex justify-content-center align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="21" height="20" viewBox="0 0 21 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_400)">
                                      <path
                                        d="M20.5 3.8725L14.6163 0L10.5 3.46375L16.4325 7.155L20.5 3.8725Z"
                                        fill="white" />
                                      <path
                                        d="M6.38375 0L0.5 3.87125L4.56875 7.155L10.5 3.46375L6.38375 0Z"
                                        fill="white" />
                                      <path
                                        d="M10.5 10.8475L6.38375 14.3112L0.5 10.4387L4.5675 7.155L10.5 10.8475L16.4312 7.155L20.5 10.4387L14.6163 14.3112L10.5 10.8475Z"
                                        fill="white" />
                                      <path
                                        d="M14.9137 15.6113C14.81 15.68 14.69 15.7138 14.5712 15.7138C14.4275 15.7138 14.285 15.6638 14.1688 15.5675L10.5 12.48L6.83125 15.5675C6.62 15.745 6.31625 15.7625 6.085 15.6113L4.25 14.4038V16.25L10.5125 20L16.75 16.25V14.4025L14.9137 15.6113Z"
                                        fill="white" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_400">
                                        <rect width="20" height="20" fill="white"
                                          transform="translate(0.5)" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button className="btn-facebook d-flex align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_408)">
                                      <path
                                        d="M20 10C20 14.9914 16.343 19.1285 11.5625 19.8785V12.8906H13.8926L14.3359 10H11.5625V8.12422C11.5625 7.3332 11.95 6.5625 13.1922 6.5625H14.4531V4.10156C14.4531 4.10156 13.3086 3.90625 12.2145 3.90625C9.93047 3.90625 8.4375 5.29063 8.4375 7.79688V10H5.89844V12.8906H8.4375V19.8785C3.65703 19.1285 0 14.9914 0 10C0 4.47734 4.47734 0 10 0C15.5227 0 20 4.47734 20 10Z"
                                        fill="white" />
                                      <path
                                        d="M13.8926 12.8906L14.3359 10H11.5625V8.12418C11.5625 7.33336 11.9499 6.5625 13.1921 6.5625H14.4531V4.10156C14.4531 4.10156 13.3088 3.90625 12.2146 3.90625C9.93043 3.90625 8.4375 5.29063 8.4375 7.79688V10H5.89844V12.8906H8.4375V19.8785C8.94664 19.9584 9.46844 20 10 20C10.5316 20 11.0534 19.9584 11.5625 19.8785V12.8906H13.8926Z"
                                        fill="#1877F2" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_408">
                                        <rect width="20" height="20" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  facebook
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button variant="outline-light" className="d-flex align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_523)">
                                      <path
                                        d="M20 10C20 14.9914 16.343 19.1285 11.5625 19.8785V12.8906H13.8926L14.3359 10H11.5625V8.12422C11.5625 7.3332 11.95 6.5625 13.1922 6.5625H14.4531V4.10156C14.4531 4.10156 13.3086 3.90625 12.2145 3.90625C9.93047 3.90625 8.4375 5.29063 8.4375 7.79688V10H5.89844V12.8906H8.4375V19.8785C3.65703 19.1285 0 14.9914 0 10C0 4.47734 4.47734 0 10 0C15.5227 0 20 4.47734 20 10Z"
                                        fill="#1877F2" />
                                      <path
                                        d="M13.8926 12.8906L14.3359 10H11.5625V8.12418C11.5625 7.33336 11.9499 6.5625 13.1921 6.5625H14.4531V4.10156C14.4531 4.10156 13.3088 3.90625 12.2146 3.90625C9.93043 3.90625 8.4375 5.29063 8.4375 7.79688V10H5.89844V12.8906H8.4375V19.8785C8.94664 19.9584 9.46844 20 10 20C10.5316 20 11.0534 19.9584 11.5625 19.8785V12.8906H13.8926Z"
                                        fill="white" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_523">
                                        <rect width="20" height="20" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  facebook
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button variant="white" className="active d-flex align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_523)">
                                      <path
                                        d="M20 10C20 14.9914 16.343 19.1285 11.5625 19.8785V12.8906H13.8926L14.3359 10H11.5625V8.12422C11.5625 7.3332 11.95 6.5625 13.1922 6.5625H14.4531V4.10156C14.4531 4.10156 13.3086 3.90625 12.2145 3.90625C9.93047 3.90625 8.4375 5.29063 8.4375 7.79688V10H5.89844V12.8906H8.4375V19.8785C3.65703 19.1285 0 14.9914 0 10C0 4.47734 4.47734 0 10 0C15.5227 0 20 4.47734 20 10Z"
                                        fill="#1877F2" />
                                      <path
                                        d="M13.8926 12.8906L14.3359 10H11.5625V8.12418C11.5625 7.33336 11.9499 6.5625 13.1921 6.5625H14.4531V4.10156C14.4531 4.10156 13.3088 3.90625 12.2146 3.90625C9.93043 3.90625 8.4375 5.29063 8.4375 7.79688V10H5.89844V12.8906H8.4375V19.8785C8.94664 19.9584 9.46844 20 10 20C10.5316 20 11.0534 19.9584 11.5625 19.8785V12.8906H13.8926Z"
                                        fill="white" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_523">
                                        <rect width="20" height="20" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  facebook
                                </Button>
                              </Col>
                              <Col md={2}>
                                <Button variant="outline-light" className="btn-square btn-md d-flex justify-content-center align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_523)">
                                      <path
                                        d="M20 10C20 14.9914 16.343 19.1285 11.5625 19.8785V12.8906H13.8926L14.3359 10H11.5625V8.12422C11.5625 7.3332 11.95 6.5625 13.1922 6.5625H14.4531V4.10156C14.4531 4.10156 13.3086 3.90625 12.2145 3.90625C9.93047 3.90625 8.4375 5.29063 8.4375 7.79688V10H5.89844V12.8906H8.4375V19.8785C3.65703 19.1285 0 14.9914 0 10C0 4.47734 4.47734 0 10 0C15.5227 0 20 4.47734 20 10Z"
                                        fill="#1877F2" />
                                      <path
                                        d="M13.8926 12.8906L14.3359 10H11.5625V8.12418C11.5625 7.33336 11.9499 6.5625 13.1921 6.5625H14.4531V4.10156C14.4531 4.10156 13.3088 3.90625 12.2146 3.90625C9.93043 3.90625 8.4375 5.29063 8.4375 7.79688V10H5.89844V12.8906H8.4375V19.8785C8.94664 19.9584 9.46844 20 10 20C10.5316 20 11.0534 19.9584 11.5625 19.8785V12.8906H13.8926Z"
                                        fill="white" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_523">
                                        <rect width="20" height="20" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </Button>
                              </Col>
                              <Col md={1}>
                                <Button className="btn-square btn-md btn-facebook d-flex justify-content-center align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_408)">
                                      <path
                                        d="M20 10C20 14.9914 16.343 19.1285 11.5625 19.8785V12.8906H13.8926L14.3359 10H11.5625V8.12422C11.5625 7.3332 11.95 6.5625 13.1922 6.5625H14.4531V4.10156C14.4531 4.10156 13.3086 3.90625 12.2145 3.90625C9.93047 3.90625 8.4375 5.29063 8.4375 7.79688V10H5.89844V12.8906H8.4375V19.8785C3.65703 19.1285 0 14.9914 0 10C0 4.47734 4.47734 0 10 0C15.5227 0 20 4.47734 20 10Z"
                                        fill="white" />
                                      <path
                                        d="M13.8926 12.8906L14.3359 10H11.5625V8.12418C11.5625 7.33336 11.9499 6.5625 13.1921 6.5625H14.4531V4.10156C14.4531 4.10156 13.3088 3.90625 12.2146 3.90625C9.93043 3.90625 8.4375 5.29063 8.4375 7.79688V10H5.89844V12.8906H8.4375V19.8785C8.94664 19.9584 9.46844 20 10 20C10.5316 20 11.0534 19.9584 11.5625 19.8785V12.8906H13.8926Z"
                                        fill="#1877F2" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_408">
                                        <rect width="20" height="20" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button className="btn-instagram d-flex align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_418)">
                                      <path
                                        d="M13.75 0H6.25C2.79875 0 0 2.79875 0 6.25V13.75C0 17.2013 2.79875 20 6.25 20H13.75C17.2013 20 20 17.2013 20 13.75V6.25C20 2.79875 17.2013 0 13.75 0ZM18.125 13.75C18.125 16.1625 16.1625 18.125 13.75 18.125H6.25C3.8375 18.125 1.875 16.1625 1.875 13.75V6.25C1.875 3.8375 3.8375 1.875 6.25 1.875H13.75C16.1625 1.875 18.125 3.8375 18.125 6.25V13.75Z"
                                        fill="white" />
                                      <path
                                        d="M10 5C7.23875 5 5 7.23875 5 10C5 12.7613 7.23875 15 10 15C12.7613 15 15 12.7613 15 10C15 7.23875 12.7613 5 10 5ZM10 13.125C8.2775 13.125 6.875 11.7225 6.875 10C6.875 8.27625 8.2775 6.875 10 6.875C11.7225 6.875 13.125 8.27625 13.125 10C13.125 11.7225 11.7225 13.125 10 13.125Z"
                                        fill="white" />
                                      <path
                                        d="M15.3752 5.29124C15.7432 5.29124 16.0415 4.99295 16.0415 4.62499C16.0415 4.25703 15.7432 3.95874 15.3752 3.95874C15.0073 3.95874 14.709 4.25703 14.709 4.62499C14.709 4.99295 15.0073 5.29124 15.3752 5.29124Z"
                                        fill="white" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_418">
                                        <rect width="20" height="20" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  instagram
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button variant="outline-light" className="d-flex align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg" width="20"
                                    height="20" viewBox="0 0 20 20" fill="none">
                                    <g clipPath="url(#clip0_309_533)">
                                      <path
                                        d="M13.75 0H6.25C2.79875 0 0 2.79875 0 6.25V13.75C0 17.2013 2.79875 20 6.25 20H13.75C17.2013 20 20 17.2013 20 13.75V6.25C20 2.79875 17.2013 0 13.75 0ZM18.125 13.75C18.125 16.1625 16.1625 18.125 13.75 18.125H6.25C3.8375 18.125 1.875 16.1625 1.875 13.75V6.25C1.875 3.8375 3.8375 1.875 6.25 1.875H13.75C16.1625 1.875 18.125 3.8375 18.125 6.25V13.75Z"
                                        fill="url(#paint0_linear_309_533)" />
                                      <path
                                        d="M10 5C7.23875 5 5 7.23875 5 10C5 12.7613 7.23875 15 10 15C12.7613 15 15 12.7613 15 10C15 7.23875 12.7613 5 10 5ZM10 13.125C8.2775 13.125 6.875 11.7225 6.875 10C6.875 8.27625 8.2775 6.875 10 6.875C11.7225 6.875 13.125 8.27625 13.125 10C13.125 11.7225 11.7225 13.125 10 13.125Z"
                                        fill="url(#paint1_linear_309_533)" />
                                      <path
                                        d="M15.3752 5.29124C15.7432 5.29124 16.0415 4.99295 16.0415 4.62499C16.0415 4.25703 15.7432 3.95874 15.3752 3.95874C15.0073 3.95874 14.709 4.25703 14.709 4.62499C14.709 4.99295 15.0073 5.29124 15.3752 5.29124Z"
                                        fill="url(#paint2_linear_309_533)" />
                                    </g>
                                    <linearGradient id="paint0_linear_309_533"
                                      x1="1.83081" y1="18.1693" x2="18.1692"
                                      y2="1.83069" gradientUnits="userSpaceOnUse">
                                      <stop stopColor="#FFC107" />
                                      <stop offset="0.507" stopColor="#F44336" />
                                      <stop offset="0.99" stopColor="#9C27B0" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_309_533"
                                      x1="6.46456" y1="13.5354" x2="13.5354"
                                      y2="6.46456" gradientUnits="userSpaceOnUse">
                                      <stop stopColor="#FFC107" />
                                      <stop offset="0.507" stopColor="#F44336" />
                                    </linearGradient>
                                  </svg>
                                  instagram
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button variant="white" className="active d-flex align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg" width="20"
                                    height="20" viewBox="0 0 20 20" fill="none">
                                    <g clipPath="url(#clip0_309_533)">
                                      <path
                                        d="M13.75 0H6.25C2.79875 0 0 2.79875 0 6.25V13.75C0 17.2013 2.79875 20 6.25 20H13.75C17.2013 20 20 17.2013 20 13.75V6.25C20 2.79875 17.2013 0 13.75 0ZM18.125 13.75C18.125 16.1625 16.1625 18.125 13.75 18.125H6.25C3.8375 18.125 1.875 16.1625 1.875 13.75V6.25C1.875 3.8375 3.8375 1.875 6.25 1.875H13.75C16.1625 1.875 18.125 3.8375 18.125 6.25V13.75Z"
                                        fill="url(#paint0_linear_309_533)" />
                                      <path
                                        d="M10 5C7.23875 5 5 7.23875 5 10C5 12.7613 7.23875 15 10 15C12.7613 15 15 12.7613 15 10C15 7.23875 12.7613 5 10 5ZM10 13.125C8.2775 13.125 6.875 11.7225 6.875 10C6.875 8.27625 8.2775 6.875 10 6.875C11.7225 6.875 13.125 8.27625 13.125 10C13.125 11.7225 11.7225 13.125 10 13.125Z"
                                        fill="url(#paint1_linear_309_533)" />
                                      <path
                                        d="M15.3752 5.29124C15.7432 5.29124 16.0415 4.99295 16.0415 4.62499C16.0415 4.25703 15.7432 3.95874 15.3752 3.95874C15.0073 3.95874 14.709 4.25703 14.709 4.62499C14.709 4.99295 15.0073 5.29124 15.3752 5.29124Z"
                                        fill="url(#paint2_linear_309_533)" />
                                    </g>
                                    <linearGradient id="paint0_linear_309_533"
                                      x1="1.83081" y1="18.1693" x2="18.1692"
                                      y2="1.83069" gradientUnits="userSpaceOnUse">
                                      <stop stopColor="#FFC107" />
                                      <stop offset="0.507" stopColor="#F44336" />
                                      <stop offset="0.99" stopColor="#9C27B0" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_309_533"
                                      x1="6.46456" y1="13.5354" x2="13.5354"
                                      y2="6.46456" gradientUnits="userSpaceOnUse">
                                      <stop stopColor="#FFC107" />
                                      <stop offset="0.507" stopColor="#F44336" />
                                    </linearGradient>
                                  </svg>
                                  instagram
                                </Button>
                              </Col>
                              <Col md={2}>
                                <Button variant="outline-light" className="btn-square btn-md d-flex justify-content-center align-items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20"
                                    height="20" viewBox="0 0 20 20" fill="none">
                                    <g clipPath="url(#clip0_309_533)">
                                      <path
                                        d="M13.75 0H6.25C2.79875 0 0 2.79875 0 6.25V13.75C0 17.2013 2.79875 20 6.25 20H13.75C17.2013 20 20 17.2013 20 13.75V6.25C20 2.79875 17.2013 0 13.75 0ZM18.125 13.75C18.125 16.1625 16.1625 18.125 13.75 18.125H6.25C3.8375 18.125 1.875 16.1625 1.875 13.75V6.25C1.875 3.8375 3.8375 1.875 6.25 1.875H13.75C16.1625 1.875 18.125 3.8375 18.125 6.25V13.75Z"
                                        fill="url(#paint0_linear_309_533)" />
                                      <path
                                        d="M10 5C7.23875 5 5 7.23875 5 10C5 12.7613 7.23875 15 10 15C12.7613 15 15 12.7613 15 10C15 7.23875 12.7613 5 10 5ZM10 13.125C8.2775 13.125 6.875 11.7225 6.875 10C6.875 8.27625 8.2775 6.875 10 6.875C11.7225 6.875 13.125 8.27625 13.125 10C13.125 11.7225 11.7225 13.125 10 13.125Z"
                                        fill="url(#paint1_linear_309_533)" />
                                      <path
                                        d="M15.3752 5.29124C15.7432 5.29124 16.0415 4.99295 16.0415 4.62499C16.0415 4.25703 15.7432 3.95874 15.3752 3.95874C15.0073 3.95874 14.709 4.25703 14.709 4.62499C14.709 4.99295 15.0073 5.29124 15.3752 5.29124Z"
                                        fill="url(#paint2_linear_309_533)" />
                                    </g>
                                    <linearGradient id="paint0_linear_309_533"
                                      x1="1.83081" y1="18.1693" x2="18.1692"
                                      y2="1.83069" gradientUnits="userSpaceOnUse">
                                      <stop stopColor="#FFC107" />
                                      <stop offset="0.507" stopColor="#F44336" />
                                      <stop offset="0.99" stopColor="#9C27B0" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_309_533"
                                      x1="6.46456" y1="13.5354" x2="13.5354"
                                      y2="6.46456" gradientUnits="userSpaceOnUse">
                                      <stop stopColor="#FFC107" />
                                      <stop offset="0.507" stopColor="#F44336" />
                                    </linearGradient>
                                  </svg>
                                </Button>
                              </Col>
                              <Col md={1}>
                                <Button className="btn-square btn-md btn-instagram d-flex justify-content-center align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_418)">
                                      <path
                                        d="M13.75 0H6.25C2.79875 0 0 2.79875 0 6.25V13.75C0 17.2013 2.79875 20 6.25 20H13.75C17.2013 20 20 17.2013 20 13.75V6.25C20 2.79875 17.2013 0 13.75 0ZM18.125 13.75C18.125 16.1625 16.1625 18.125 13.75 18.125H6.25C3.8375 18.125 1.875 16.1625 1.875 13.75V6.25C1.875 3.8375 3.8375 1.875 6.25 1.875H13.75C16.1625 1.875 18.125 3.8375 18.125 6.25V13.75Z"
                                        fill="white" />
                                      <path
                                        d="M10 5C7.23875 5 5 7.23875 5 10C5 12.7613 7.23875 15 10 15C12.7613 15 15 12.7613 15 10C15 7.23875 12.7613 5 10 5ZM10 13.125C8.2775 13.125 6.875 11.7225 6.875 10C6.875 8.27625 8.2775 6.875 10 6.875C11.7225 6.875 13.125 8.27625 13.125 10C13.125 11.7225 11.7225 13.125 10 13.125Z"
                                        fill="white" />
                                      <path
                                        d="M15.3752 5.29124C15.7432 5.29124 16.0415 4.99295 16.0415 4.62499C16.0415 4.25703 15.7432 3.95874 15.3752 3.95874C15.0073 3.95874 14.709 4.25703 14.709 4.62499C14.709 4.99295 15.0073 5.29124 15.3752 5.29124Z"
                                        fill="white" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_418">
                                        <rect width="20" height="20" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button className="btn-snapchat d-flex align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_424)">
                                      <path
                                        d="M19.608 14.6265C16.9341 14.1865 15.729 11.4476 15.6803 11.3313C15.6765 11.3238 15.674 11.3163 15.669 11.3088C15.5328 11.0313 15.5003 10.8026 15.5753 10.6288C15.7215 10.2863 16.2815 10.1088 16.6516 9.99126C16.7591 9.95751 16.8603 9.92501 16.9441 9.89251C17.3091 9.74875 17.5691 9.59249 17.7416 9.41623C17.9466 9.20498 17.9866 9.00247 17.9841 8.87121C17.9779 8.55119 17.7329 8.26618 17.3416 8.12742C17.2103 8.07367 17.0591 8.04492 16.9066 8.04492C16.8028 8.04492 16.6478 8.05867 16.5016 8.12742C16.189 8.27368 15.909 8.35369 15.6678 8.36494C15.5403 8.35869 15.4503 8.33118 15.3915 8.30493C15.399 8.17993 15.4065 8.05117 15.4153 7.91866L15.419 7.86116C15.5053 6.50735 15.6115 4.82352 15.164 3.82347C14.8577 3.13844 14.4465 2.54966 13.9402 2.07214C13.5164 1.67212 13.0239 1.34711 12.4764 1.1071C11.5251 0.687076 10.6375 0.624573 10.1925 0.624573H10.1913C10.1738 0.624573 10.1575 0.624573 10.1425 0.624573C10.0188 0.625823 9.81749 0.628323 9.79874 0.628323C9.35497 0.628323 8.46618 0.690826 7.51238 1.11085C6.96611 1.35086 6.47609 1.67462 6.05357 2.07464C5.54979 2.55216 5.13977 3.13969 4.83476 3.82222C4.38724 4.82102 4.49349 6.50485 4.5785 7.85741V7.85991C4.58725 8.00492 4.59725 8.15618 4.606 8.30368C4.541 8.33243 4.43474 8.36494 4.27848 8.36494C4.02597 8.36494 3.72596 8.28493 3.38719 8.12617C3.28719 8.07992 3.17343 8.05617 3.04843 8.05617C2.84717 8.05617 2.63341 8.11492 2.44965 8.22368C2.21714 8.35994 2.06713 8.55119 2.02588 8.76495C1.99963 8.90496 2.00088 9.18372 2.31089 9.46624C2.48215 9.62124 2.73216 9.765 3.05593 9.89251C3.14093 9.92626 3.24219 9.95751 3.34844 9.99126C3.71846 10.1088 4.27973 10.2863 4.42599 10.6288C4.49974 10.8026 4.46724 11.0313 4.33099 11.3088C4.32724 11.3163 4.32349 11.3238 4.32099 11.3313C4.28598 11.4113 3.96722 12.1301 3.31344 12.8889C2.94217 13.3202 2.5334 13.6814 2.09838 13.9614C1.56711 14.304 0.99333 14.5265 0.392052 14.6252C0.155791 14.664 -0.0129674 14.874 0.000783266 15.1128C0.00453344 15.1815 0.0207842 15.2503 0.0495356 15.3165V15.3178C0.14579 15.5415 0.36705 15.7303 0.727067 15.8965C1.16709 16.1003 1.82462 16.2716 2.68341 16.4053C2.72716 16.4878 2.77216 16.6941 2.80341 16.8353C2.83592 16.9853 2.86967 17.1403 2.91842 17.3041C2.97092 17.4816 3.10593 17.6941 3.45469 17.6941C3.5872 17.6941 3.73846 17.6641 3.91472 17.6304C4.17223 17.5804 4.52474 17.5116 4.96352 17.5116C5.20728 17.5116 5.45979 17.5329 5.71355 17.5754C6.20357 17.6566 6.62609 17.9541 7.11487 18.2992C7.8299 18.8042 8.63994 19.3755 9.8775 19.3755C9.91125 19.3755 9.945 19.3742 9.97875 19.3717C10.0188 19.3742 10.07 19.3755 10.1225 19.3755C11.3601 19.3755 12.1701 18.8042 12.8851 18.3004L12.8864 18.2992C13.3752 17.9554 13.7977 17.6579 14.2877 17.5766C14.5415 17.5341 14.794 17.5129 15.0377 17.5129C15.4578 17.5129 15.7903 17.5666 16.0865 17.6241C16.2803 17.6616 16.4303 17.6804 16.5466 17.6804H16.5578H16.5691C16.8241 17.6804 17.0116 17.5404 17.0828 17.2966C17.1303 17.1353 17.1641 16.9853 17.1978 16.8316C17.2266 16.6991 17.2741 16.4866 17.3166 16.4041C18.1754 16.2691 18.8329 16.099 19.2729 15.8953C19.6317 15.729 19.853 15.5403 19.9492 15.3178C19.978 15.2515 19.9955 15.1828 19.9992 15.1115C20.013 14.8752 19.8442 14.664 19.608 14.6265Z"
                                        fill="black" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_4244">
                                        <rect width="20" height="20" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  snapchat
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button variant="outline-light" className="d-flex align-items-center">
                                  <svg className="me-1 snap"
                                    xmlns="http://www.w3.org/2000/svg" width="20"
                                    height="20" viewBox="0 0 20 20" fill="none">
                                    <g clipPath="url(#clip0_309_424)">
                                      <path
                                        d="M19.608 14.6265C16.9341 14.1865 15.729 11.4476 15.6803 11.3313C15.6765 11.3238 15.674 11.3163 15.669 11.3088C15.5328 11.0313 15.5003 10.8026 15.5753 10.6288C15.7215 10.2863 16.2815 10.1088 16.6516 9.99126C16.7591 9.95751 16.8603 9.92501 16.9441 9.89251C17.3091 9.74875 17.5691 9.59249 17.7416 9.41623C17.9466 9.20498 17.9866 9.00247 17.9841 8.87121C17.9779 8.55119 17.7329 8.26618 17.3416 8.12742C17.2103 8.07367 17.0591 8.04492 16.9066 8.04492C16.8028 8.04492 16.6478 8.05867 16.5016 8.12742C16.189 8.27368 15.909 8.35369 15.6678 8.36494C15.5403 8.35869 15.4503 8.33118 15.3915 8.30493C15.399 8.17993 15.4065 8.05117 15.4153 7.91866L15.419 7.86116C15.5053 6.50735 15.6115 4.82352 15.164 3.82347C14.8577 3.13844 14.4465 2.54966 13.9402 2.07214C13.5164 1.67212 13.0239 1.34711 12.4764 1.1071C11.5251 0.687076 10.6375 0.624573 10.1925 0.624573H10.1913C10.1738 0.624573 10.1575 0.624573 10.1425 0.624573C10.0188 0.625823 9.81749 0.628323 9.79874 0.628323C9.35497 0.628323 8.46618 0.690826 7.51238 1.11085C6.96611 1.35086 6.47609 1.67462 6.05357 2.07464C5.54979 2.55216 5.13977 3.13969 4.83476 3.82222C4.38724 4.82102 4.49349 6.50485 4.5785 7.85741V7.85991C4.58725 8.00492 4.59725 8.15618 4.606 8.30368C4.541 8.33243 4.43474 8.36494 4.27848 8.36494C4.02597 8.36494 3.72596 8.28493 3.38719 8.12617C3.28719 8.07992 3.17343 8.05617 3.04843 8.05617C2.84717 8.05617 2.63341 8.11492 2.44965 8.22368C2.21714 8.35994 2.06713 8.55119 2.02588 8.76495C1.99963 8.90496 2.00088 9.18372 2.31089 9.46624C2.48215 9.62124 2.73216 9.765 3.05593 9.89251C3.14093 9.92626 3.24219 9.95751 3.34844 9.99126C3.71846 10.1088 4.27973 10.2863 4.42599 10.6288C4.49974 10.8026 4.46724 11.0313 4.33099 11.3088C4.32724 11.3163 4.32349 11.3238 4.32099 11.3313C4.28598 11.4113 3.96722 12.1301 3.31344 12.8889C2.94217 13.3202 2.5334 13.6814 2.09838 13.9614C1.56711 14.304 0.99333 14.5265 0.392052 14.6252C0.155791 14.664 -0.0129674 14.874 0.000783266 15.1128C0.00453344 15.1815 0.0207842 15.2503 0.0495356 15.3165V15.3178C0.14579 15.5415 0.36705 15.7303 0.727067 15.8965C1.16709 16.1003 1.82462 16.2716 2.68341 16.4053C2.72716 16.4878 2.77216 16.6941 2.80341 16.8353C2.83592 16.9853 2.86967 17.1403 2.91842 17.3041C2.97092 17.4816 3.10593 17.6941 3.45469 17.6941C3.5872 17.6941 3.73846 17.6641 3.91472 17.6304C4.17223 17.5804 4.52474 17.5116 4.96352 17.5116C5.20728 17.5116 5.45979 17.5329 5.71355 17.5754C6.20357 17.6566 6.62609 17.9541 7.11487 18.2992C7.8299 18.8042 8.63994 19.3755 9.8775 19.3755C9.91125 19.3755 9.945 19.3742 9.97875 19.3717C10.0188 19.3742 10.07 19.3755 10.1225 19.3755C11.3601 19.3755 12.1701 18.8042 12.8851 18.3004L12.8864 18.2992C13.3752 17.9554 13.7977 17.6579 14.2877 17.5766C14.5415 17.5341 14.794 17.5129 15.0377 17.5129C15.4578 17.5129 15.7903 17.5666 16.0865 17.6241C16.2803 17.6616 16.4303 17.6804 16.5466 17.6804H16.5578H16.5691C16.8241 17.6804 17.0116 17.5404 17.0828 17.2966C17.1303 17.1353 17.1641 16.9853 17.1978 16.8316C17.2266 16.6991 17.2741 16.4866 17.3166 16.4041C18.1754 16.2691 18.8329 16.099 19.2729 15.8953C19.6317 15.729 19.853 15.5403 19.9492 15.3178C19.978 15.2515 19.9955 15.1828 19.9992 15.1115C20.013 14.8752 19.8442 14.664 19.608 14.6265Z"
                                        fill="black" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_4245">
                                        <rect width="20" height="20" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  snapchat
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button variant="white" className="active d-flex align-items-center">
                                  <svg className="me-1 snap"
                                    xmlns="http://www.w3.org/2000/svg" width="20"
                                    height="20" viewBox="0 0 20 20" fill="none">
                                    <g clipPath="url(#clip0_309_424)">
                                      <path
                                        d="M19.608 14.6265C16.9341 14.1865 15.729 11.4476 15.6803 11.3313C15.6765 11.3238 15.674 11.3163 15.669 11.3088C15.5328 11.0313 15.5003 10.8026 15.5753 10.6288C15.7215 10.2863 16.2815 10.1088 16.6516 9.99126C16.7591 9.95751 16.8603 9.92501 16.9441 9.89251C17.3091 9.74875 17.5691 9.59249 17.7416 9.41623C17.9466 9.20498 17.9866 9.00247 17.9841 8.87121C17.9779 8.55119 17.7329 8.26618 17.3416 8.12742C17.2103 8.07367 17.0591 8.04492 16.9066 8.04492C16.8028 8.04492 16.6478 8.05867 16.5016 8.12742C16.189 8.27368 15.909 8.35369 15.6678 8.36494C15.5403 8.35869 15.4503 8.33118 15.3915 8.30493C15.399 8.17993 15.4065 8.05117 15.4153 7.91866L15.419 7.86116C15.5053 6.50735 15.6115 4.82352 15.164 3.82347C14.8577 3.13844 14.4465 2.54966 13.9402 2.07214C13.5164 1.67212 13.0239 1.34711 12.4764 1.1071C11.5251 0.687076 10.6375 0.624573 10.1925 0.624573H10.1913C10.1738 0.624573 10.1575 0.624573 10.1425 0.624573C10.0188 0.625823 9.81749 0.628323 9.79874 0.628323C9.35497 0.628323 8.46618 0.690826 7.51238 1.11085C6.96611 1.35086 6.47609 1.67462 6.05357 2.07464C5.54979 2.55216 5.13977 3.13969 4.83476 3.82222C4.38724 4.82102 4.49349 6.50485 4.5785 7.85741V7.85991C4.58725 8.00492 4.59725 8.15618 4.606 8.30368C4.541 8.33243 4.43474 8.36494 4.27848 8.36494C4.02597 8.36494 3.72596 8.28493 3.38719 8.12617C3.28719 8.07992 3.17343 8.05617 3.04843 8.05617C2.84717 8.05617 2.63341 8.11492 2.44965 8.22368C2.21714 8.35994 2.06713 8.55119 2.02588 8.76495C1.99963 8.90496 2.00088 9.18372 2.31089 9.46624C2.48215 9.62124 2.73216 9.765 3.05593 9.89251C3.14093 9.92626 3.24219 9.95751 3.34844 9.99126C3.71846 10.1088 4.27973 10.2863 4.42599 10.6288C4.49974 10.8026 4.46724 11.0313 4.33099 11.3088C4.32724 11.3163 4.32349 11.3238 4.32099 11.3313C4.28598 11.4113 3.96722 12.1301 3.31344 12.8889C2.94217 13.3202 2.5334 13.6814 2.09838 13.9614C1.56711 14.304 0.99333 14.5265 0.392052 14.6252C0.155791 14.664 -0.0129674 14.874 0.000783266 15.1128C0.00453344 15.1815 0.0207842 15.2503 0.0495356 15.3165V15.3178C0.14579 15.5415 0.36705 15.7303 0.727067 15.8965C1.16709 16.1003 1.82462 16.2716 2.68341 16.4053C2.72716 16.4878 2.77216 16.6941 2.80341 16.8353C2.83592 16.9853 2.86967 17.1403 2.91842 17.3041C2.97092 17.4816 3.10593 17.6941 3.45469 17.6941C3.5872 17.6941 3.73846 17.6641 3.91472 17.6304C4.17223 17.5804 4.52474 17.5116 4.96352 17.5116C5.20728 17.5116 5.45979 17.5329 5.71355 17.5754C6.20357 17.6566 6.62609 17.9541 7.11487 18.2992C7.8299 18.8042 8.63994 19.3755 9.8775 19.3755C9.91125 19.3755 9.945 19.3742 9.97875 19.3717C10.0188 19.3742 10.07 19.3755 10.1225 19.3755C11.3601 19.3755 12.1701 18.8042 12.8851 18.3004L12.8864 18.2992C13.3752 17.9554 13.7977 17.6579 14.2877 17.5766C14.5415 17.5341 14.794 17.5129 15.0377 17.5129C15.4578 17.5129 15.7903 17.5666 16.0865 17.6241C16.2803 17.6616 16.4303 17.6804 16.5466 17.6804H16.5578H16.5691C16.8241 17.6804 17.0116 17.5404 17.0828 17.2966C17.1303 17.1353 17.1641 16.9853 17.1978 16.8316C17.2266 16.6991 17.2741 16.4866 17.3166 16.4041C18.1754 16.2691 18.8329 16.099 19.2729 15.8953C19.6317 15.729 19.853 15.5403 19.9492 15.3178C19.978 15.2515 19.9955 15.1828 19.9992 15.1115C20.013 14.8752 19.8442 14.664 19.608 14.6265Z"
                                        fill="black" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_4245">
                                        <rect width="20" height="20" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  snapchat
                                </Button>
                              </Col>
                              <Col md={2}>
                                <Button variant="outline-light" className="btn-square btn-md d-flex justify-content-center align-items-center">
                                  <svg className="me-1 snap"
                                    xmlns="http://www.w3.org/2000/svg" width="20"
                                    height="20" viewBox="0 0 20 20" fill="none">
                                    <g clipPath="url(#clip0_309_424)">
                                      <path
                                        d="M19.608 14.6265C16.9341 14.1865 15.729 11.4476 15.6803 11.3313C15.6765 11.3238 15.674 11.3163 15.669 11.3088C15.5328 11.0313 15.5003 10.8026 15.5753 10.6288C15.7215 10.2863 16.2815 10.1088 16.6516 9.99126C16.7591 9.95751 16.8603 9.92501 16.9441 9.89251C17.3091 9.74875 17.5691 9.59249 17.7416 9.41623C17.9466 9.20498 17.9866 9.00247 17.9841 8.87121C17.9779 8.55119 17.7329 8.26618 17.3416 8.12742C17.2103 8.07367 17.0591 8.04492 16.9066 8.04492C16.8028 8.04492 16.6478 8.05867 16.5016 8.12742C16.189 8.27368 15.909 8.35369 15.6678 8.36494C15.5403 8.35869 15.4503 8.33118 15.3915 8.30493C15.399 8.17993 15.4065 8.05117 15.4153 7.91866L15.419 7.86116C15.5053 6.50735 15.6115 4.82352 15.164 3.82347C14.8577 3.13844 14.4465 2.54966 13.9402 2.07214C13.5164 1.67212 13.0239 1.34711 12.4764 1.1071C11.5251 0.687076 10.6375 0.624573 10.1925 0.624573H10.1913C10.1738 0.624573 10.1575 0.624573 10.1425 0.624573C10.0188 0.625823 9.81749 0.628323 9.79874 0.628323C9.35497 0.628323 8.46618 0.690826 7.51238 1.11085C6.96611 1.35086 6.47609 1.67462 6.05357 2.07464C5.54979 2.55216 5.13977 3.13969 4.83476 3.82222C4.38724 4.82102 4.49349 6.50485 4.5785 7.85741V7.85991C4.58725 8.00492 4.59725 8.15618 4.606 8.30368C4.541 8.33243 4.43474 8.36494 4.27848 8.36494C4.02597 8.36494 3.72596 8.28493 3.38719 8.12617C3.28719 8.07992 3.17343 8.05617 3.04843 8.05617C2.84717 8.05617 2.63341 8.11492 2.44965 8.22368C2.21714 8.35994 2.06713 8.55119 2.02588 8.76495C1.99963 8.90496 2.00088 9.18372 2.31089 9.46624C2.48215 9.62124 2.73216 9.765 3.05593 9.89251C3.14093 9.92626 3.24219 9.95751 3.34844 9.99126C3.71846 10.1088 4.27973 10.2863 4.42599 10.6288C4.49974 10.8026 4.46724 11.0313 4.33099 11.3088C4.32724 11.3163 4.32349 11.3238 4.32099 11.3313C4.28598 11.4113 3.96722 12.1301 3.31344 12.8889C2.94217 13.3202 2.5334 13.6814 2.09838 13.9614C1.56711 14.304 0.99333 14.5265 0.392052 14.6252C0.155791 14.664 -0.0129674 14.874 0.000783266 15.1128C0.00453344 15.1815 0.0207842 15.2503 0.0495356 15.3165V15.3178C0.14579 15.5415 0.36705 15.7303 0.727067 15.8965C1.16709 16.1003 1.82462 16.2716 2.68341 16.4053C2.72716 16.4878 2.77216 16.6941 2.80341 16.8353C2.83592 16.9853 2.86967 17.1403 2.91842 17.3041C2.97092 17.4816 3.10593 17.6941 3.45469 17.6941C3.5872 17.6941 3.73846 17.6641 3.91472 17.6304C4.17223 17.5804 4.52474 17.5116 4.96352 17.5116C5.20728 17.5116 5.45979 17.5329 5.71355 17.5754C6.20357 17.6566 6.62609 17.9541 7.11487 18.2992C7.8299 18.8042 8.63994 19.3755 9.8775 19.3755C9.91125 19.3755 9.945 19.3742 9.97875 19.3717C10.0188 19.3742 10.07 19.3755 10.1225 19.3755C11.3601 19.3755 12.1701 18.8042 12.8851 18.3004L12.8864 18.2992C13.3752 17.9554 13.7977 17.6579 14.2877 17.5766C14.5415 17.5341 14.794 17.5129 15.0377 17.5129C15.4578 17.5129 15.7903 17.5666 16.0865 17.6241C16.2803 17.6616 16.4303 17.6804 16.5466 17.6804H16.5578H16.5691C16.8241 17.6804 17.0116 17.5404 17.0828 17.2966C17.1303 17.1353 17.1641 16.9853 17.1978 16.8316C17.2266 16.6991 17.2741 16.4866 17.3166 16.4041C18.1754 16.2691 18.8329 16.099 19.2729 15.8953C19.6317 15.729 19.853 15.5403 19.9492 15.3178C19.978 15.2515 19.9955 15.1828 19.9992 15.1115C20.013 14.8752 19.8442 14.664 19.608 14.6265Z"
                                        fill="black" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_4245">
                                        <rect width="20" height="20" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </Button>
                              </Col>
                              <Col md={1}>
                                <Button className="btn-square btn-md btn-snapchat d-flex justify-content-center align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_424)">
                                      <path
                                        d="M19.608 14.6265C16.9341 14.1865 15.729 11.4476 15.6803 11.3313C15.6765 11.3238 15.674 11.3163 15.669 11.3088C15.5328 11.0313 15.5003 10.8026 15.5753 10.6288C15.7215 10.2863 16.2815 10.1088 16.6516 9.99126C16.7591 9.95751 16.8603 9.92501 16.9441 9.89251C17.3091 9.74875 17.5691 9.59249 17.7416 9.41623C17.9466 9.20498 17.9866 9.00247 17.9841 8.87121C17.9779 8.55119 17.7329 8.26618 17.3416 8.12742C17.2103 8.07367 17.0591 8.04492 16.9066 8.04492C16.8028 8.04492 16.6478 8.05867 16.5016 8.12742C16.189 8.27368 15.909 8.35369 15.6678 8.36494C15.5403 8.35869 15.4503 8.33118 15.3915 8.30493C15.399 8.17993 15.4065 8.05117 15.4153 7.91866L15.419 7.86116C15.5053 6.50735 15.6115 4.82352 15.164 3.82347C14.8577 3.13844 14.4465 2.54966 13.9402 2.07214C13.5164 1.67212 13.0239 1.34711 12.4764 1.1071C11.5251 0.687076 10.6375 0.624573 10.1925 0.624573H10.1913C10.1738 0.624573 10.1575 0.624573 10.1425 0.624573C10.0188 0.625823 9.81749 0.628323 9.79874 0.628323C9.35497 0.628323 8.46618 0.690826 7.51238 1.11085C6.96611 1.35086 6.47609 1.67462 6.05357 2.07464C5.54979 2.55216 5.13977 3.13969 4.83476 3.82222C4.38724 4.82102 4.49349 6.50485 4.5785 7.85741V7.85991C4.58725 8.00492 4.59725 8.15618 4.606 8.30368C4.541 8.33243 4.43474 8.36494 4.27848 8.36494C4.02597 8.36494 3.72596 8.28493 3.38719 8.12617C3.28719 8.07992 3.17343 8.05617 3.04843 8.05617C2.84717 8.05617 2.63341 8.11492 2.44965 8.22368C2.21714 8.35994 2.06713 8.55119 2.02588 8.76495C1.99963 8.90496 2.00088 9.18372 2.31089 9.46624C2.48215 9.62124 2.73216 9.765 3.05593 9.89251C3.14093 9.92626 3.24219 9.95751 3.34844 9.99126C3.71846 10.1088 4.27973 10.2863 4.42599 10.6288C4.49974 10.8026 4.46724 11.0313 4.33099 11.3088C4.32724 11.3163 4.32349 11.3238 4.32099 11.3313C4.28598 11.4113 3.96722 12.1301 3.31344 12.8889C2.94217 13.3202 2.5334 13.6814 2.09838 13.9614C1.56711 14.304 0.99333 14.5265 0.392052 14.6252C0.155791 14.664 -0.0129674 14.874 0.000783266 15.1128C0.00453344 15.1815 0.0207842 15.2503 0.0495356 15.3165V15.3178C0.14579 15.5415 0.36705 15.7303 0.727067 15.8965C1.16709 16.1003 1.82462 16.2716 2.68341 16.4053C2.72716 16.4878 2.77216 16.6941 2.80341 16.8353C2.83592 16.9853 2.86967 17.1403 2.91842 17.3041C2.97092 17.4816 3.10593 17.6941 3.45469 17.6941C3.5872 17.6941 3.73846 17.6641 3.91472 17.6304C4.17223 17.5804 4.52474 17.5116 4.96352 17.5116C5.20728 17.5116 5.45979 17.5329 5.71355 17.5754C6.20357 17.6566 6.62609 17.9541 7.11487 18.2992C7.8299 18.8042 8.63994 19.3755 9.8775 19.3755C9.91125 19.3755 9.945 19.3742 9.97875 19.3717C10.0188 19.3742 10.07 19.3755 10.1225 19.3755C11.3601 19.3755 12.1701 18.8042 12.8851 18.3004L12.8864 18.2992C13.3752 17.9554 13.7977 17.6579 14.2877 17.5766C14.5415 17.5341 14.794 17.5129 15.0377 17.5129C15.4578 17.5129 15.7903 17.5666 16.0865 17.6241C16.2803 17.6616 16.4303 17.6804 16.5466 17.6804H16.5578H16.5691C16.8241 17.6804 17.0116 17.5404 17.0828 17.2966C17.1303 17.1353 17.1641 16.9853 17.1978 16.8316C17.2266 16.6991 17.2741 16.4866 17.3166 16.4041C18.1754 16.2691 18.8329 16.099 19.2729 15.8953C19.6317 15.729 19.853 15.5403 19.9492 15.3178C19.978 15.2515 19.9955 15.1828 19.9992 15.1115C20.013 14.8752 19.8442 14.664 19.608 14.6265Z"
                                        fill="black" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_4244">
                                        <rect width="20" height="20" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button className="btn-dribbble d-flex align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="21" height="20" viewBox="0 0 21 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_428)">
                                      <path
                                        d="M10.5 19.3075C15.6777 19.3075 19.875 15.1102 19.875 9.9325C19.875 4.75483 15.6777 0.557495 10.5 0.557495C5.32233 0.557495 1.125 4.75483 1.125 9.9325C1.125 15.1102 5.32233 19.3075 10.5 19.3075Z"
                                        fill="white" />
                                      <path
                                        d="M10.5 0C4.98625 0 0.5 4.48625 0.5 10C0.5 15.5138 4.98625 20 10.5 20C16.0138 20 20.5 15.5138 20.5 10C20.5 4.48625 16.0138 0 10.5 0ZM19.2463 10.075C17.1287 9.51625 14.9575 9.45125 12.8888 9.8775C12.6063 9.1725 12.3012 8.47875 11.9738 7.79375C13.845 6.91875 15.575 5.7325 17.0925 4.26625C18.4312 5.8025 19.25 7.805 19.25 10C19.25 10.025 19.2463 10.0488 19.2463 10.075ZM16.2088 3.38375C14.7913 4.7525 13.1788 5.8675 11.4312 6.6825C10.4975 4.895 9.405 3.1875 8.16875 1.575C8.9125 1.36875 9.69125 1.25 10.5 1.25C12.6812 1.25 14.675 2.0575 16.2088 3.38375ZM6.93375 2.0175C8.2025 3.6325 9.31625 5.3525 10.265 7.15375C7.64 8.15625 4.79 8.54125 1.93625 8.2075C2.515 5.4375 4.41 3.15 6.93375 2.0175ZM1.75 10C1.75 9.8125 1.76625 9.62875 1.77875 9.445C2.51875 9.5325 3.25875 9.59 3.99625 9.59C6.34875 9.59 8.66 9.13 10.8263 8.28625C11.1262 8.91125 11.4087 9.545 11.67 10.1875C8.5975 11.11 5.86 13.0775 4.0175 15.8563C2.61375 14.3038 1.75 12.2525 1.75 10ZM4.93125 16.7438C6.62625 14.0788 9.21125 12.2 12.12 11.35C12.91 13.525 13.4787 15.7837 13.81 18.095C12.7887 18.515 11.6713 18.75 10.5 18.75C8.38625 18.75 6.445 17.9963 4.93125 16.7438ZM14.9825 17.5C14.6388 15.2975 14.0938 13.1412 13.3475 11.06C15.2362 10.705 17.2125 10.7887 19.1375 11.3325C18.7337 13.9525 17.17 16.1875 14.9825 17.5Z"
                                        fill="#EC407A" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_428">
                                        <rect width="20" height="20" fill="white"
                                          transform="translate(0.5)" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  dribbble
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button variant="outline-light" className="d-flex align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="21" height="20" viewBox="0 0 21 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_543)">
                                      <path
                                        d="M10.5 19.3075C15.6777 19.3075 19.875 15.1102 19.875 9.9325C19.875 4.75483 15.6777 0.557495 10.5 0.557495C5.32233 0.557495 1.125 4.75483 1.125 9.9325C1.125 15.1102 5.32233 19.3075 10.5 19.3075Z"
                                        fill="#EC407A" />
                                      <path
                                        d="M10.5 0C4.98625 0 0.5 4.48625 0.5 10C0.5 15.5138 4.98625 20 10.5 20C16.0138 20 20.5 15.5138 20.5 10C20.5 4.48625 16.0138 0 10.5 0ZM19.2463 10.075C17.1287 9.51625 14.9575 9.45125 12.8888 9.8775C12.6063 9.1725 12.3012 8.47875 11.9738 7.79375C13.845 6.91875 15.575 5.7325 17.0925 4.26625C18.4312 5.8025 19.25 7.805 19.25 10C19.25 10.025 19.2463 10.0488 19.2463 10.075ZM16.2088 3.38375C14.7913 4.7525 13.1788 5.8675 11.4312 6.6825C10.4975 4.895 9.405 3.1875 8.16875 1.575C8.9125 1.36875 9.69125 1.25 10.5 1.25C12.6812 1.25 14.675 2.0575 16.2088 3.38375ZM6.93375 2.0175C8.2025 3.6325 9.31625 5.3525 10.265 7.15375C7.64 8.15625 4.79 8.54125 1.93625 8.2075C2.515 5.4375 4.41 3.15 6.93375 2.0175ZM1.75 10C1.75 9.8125 1.76625 9.62875 1.77875 9.445C2.51875 9.5325 3.25875 9.59 3.99625 9.59C6.34875 9.59 8.66 9.13 10.8263 8.28625C11.1262 8.91125 11.4087 9.545 11.67 10.1875C8.5975 11.11 5.86 13.0775 4.0175 15.8563C2.61375 14.3038 1.75 12.2525 1.75 10ZM4.93125 16.7438C6.62625 14.0788 9.21125 12.2 12.12 11.35C12.91 13.525 13.4787 15.7837 13.81 18.095C12.7887 18.515 11.6713 18.75 10.5 18.75C8.38625 18.75 6.445 17.9963 4.93125 16.7438ZM14.9825 17.5C14.6388 15.2975 14.0938 13.1412 13.3475 11.06C15.2362 10.705 17.2125 10.7887 19.1375 11.3325C18.7337 13.9525 17.17 16.1875 14.9825 17.5Z"
                                        fill="#C2185B" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_5434">
                                        <rect width="20" height="20" fill="white"
                                          transform="translate(0.5)" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  dribbble
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button variant="white" className="active d-flex align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="21" height="20" viewBox="0 0 21 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_543)">
                                      <path
                                        d="M10.5 19.3075C15.6777 19.3075 19.875 15.1102 19.875 9.9325C19.875 4.75483 15.6777 0.557495 10.5 0.557495C5.32233 0.557495 1.125 4.75483 1.125 9.9325C1.125 15.1102 5.32233 19.3075 10.5 19.3075Z"
                                        fill="#EC407A" />
                                      <path
                                        d="M10.5 0C4.98625 0 0.5 4.48625 0.5 10C0.5 15.5138 4.98625 20 10.5 20C16.0138 20 20.5 15.5138 20.5 10C20.5 4.48625 16.0138 0 10.5 0ZM19.2463 10.075C17.1287 9.51625 14.9575 9.45125 12.8888 9.8775C12.6063 9.1725 12.3012 8.47875 11.9738 7.79375C13.845 6.91875 15.575 5.7325 17.0925 4.26625C18.4312 5.8025 19.25 7.805 19.25 10C19.25 10.025 19.2463 10.0488 19.2463 10.075ZM16.2088 3.38375C14.7913 4.7525 13.1788 5.8675 11.4312 6.6825C10.4975 4.895 9.405 3.1875 8.16875 1.575C8.9125 1.36875 9.69125 1.25 10.5 1.25C12.6812 1.25 14.675 2.0575 16.2088 3.38375ZM6.93375 2.0175C8.2025 3.6325 9.31625 5.3525 10.265 7.15375C7.64 8.15625 4.79 8.54125 1.93625 8.2075C2.515 5.4375 4.41 3.15 6.93375 2.0175ZM1.75 10C1.75 9.8125 1.76625 9.62875 1.77875 9.445C2.51875 9.5325 3.25875 9.59 3.99625 9.59C6.34875 9.59 8.66 9.13 10.8263 8.28625C11.1262 8.91125 11.4087 9.545 11.67 10.1875C8.5975 11.11 5.86 13.0775 4.0175 15.8563C2.61375 14.3038 1.75 12.2525 1.75 10ZM4.93125 16.7438C6.62625 14.0788 9.21125 12.2 12.12 11.35C12.91 13.525 13.4787 15.7837 13.81 18.095C12.7887 18.515 11.6713 18.75 10.5 18.75C8.38625 18.75 6.445 17.9963 4.93125 16.7438ZM14.9825 17.5C14.6388 15.2975 14.0938 13.1412 13.3475 11.06C15.2362 10.705 17.2125 10.7887 19.1375 11.3325C18.7337 13.9525 17.17 16.1875 14.9825 17.5Z"
                                        fill="#C2185B" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_5434">
                                        <rect width="20" height="20" fill="white"
                                          transform="translate(0.5)" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  dribbble
                                </Button>
                              </Col>
                              <Col md={2}>
                                <Button variant="outline-light" className="btn-square btn-md d-flex justify-content-center align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="21" height="20" viewBox="0 0 21 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_543)">
                                      <path
                                        d="M10.5 19.3075C15.6777 19.3075 19.875 15.1102 19.875 9.9325C19.875 4.75483 15.6777 0.557495 10.5 0.557495C5.32233 0.557495 1.125 4.75483 1.125 9.9325C1.125 15.1102 5.32233 19.3075 10.5 19.3075Z"
                                        fill="#EC407A" />
                                      <path
                                        d="M10.5 0C4.98625 0 0.5 4.48625 0.5 10C0.5 15.5138 4.98625 20 10.5 20C16.0138 20 20.5 15.5138 20.5 10C20.5 4.48625 16.0138 0 10.5 0ZM19.2463 10.075C17.1287 9.51625 14.9575 9.45125 12.8888 9.8775C12.6063 9.1725 12.3012 8.47875 11.9738 7.79375C13.845 6.91875 15.575 5.7325 17.0925 4.26625C18.4312 5.8025 19.25 7.805 19.25 10C19.25 10.025 19.2463 10.0488 19.2463 10.075ZM16.2088 3.38375C14.7913 4.7525 13.1788 5.8675 11.4312 6.6825C10.4975 4.895 9.405 3.1875 8.16875 1.575C8.9125 1.36875 9.69125 1.25 10.5 1.25C12.6812 1.25 14.675 2.0575 16.2088 3.38375ZM6.93375 2.0175C8.2025 3.6325 9.31625 5.3525 10.265 7.15375C7.64 8.15625 4.79 8.54125 1.93625 8.2075C2.515 5.4375 4.41 3.15 6.93375 2.0175ZM1.75 10C1.75 9.8125 1.76625 9.62875 1.77875 9.445C2.51875 9.5325 3.25875 9.59 3.99625 9.59C6.34875 9.59 8.66 9.13 10.8263 8.28625C11.1262 8.91125 11.4087 9.545 11.67 10.1875C8.5975 11.11 5.86 13.0775 4.0175 15.8563C2.61375 14.3038 1.75 12.2525 1.75 10ZM4.93125 16.7438C6.62625 14.0788 9.21125 12.2 12.12 11.35C12.91 13.525 13.4787 15.7837 13.81 18.095C12.7887 18.515 11.6713 18.75 10.5 18.75C8.38625 18.75 6.445 17.9963 4.93125 16.7438ZM14.9825 17.5C14.6388 15.2975 14.0938 13.1412 13.3475 11.06C15.2362 10.705 17.2125 10.7887 19.1375 11.3325C18.7337 13.9525 17.17 16.1875 14.9825 17.5Z"
                                        fill="#C2185B" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_5434">
                                        <rect width="20" height="20" fill="white"
                                          transform="translate(0.5)" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </Button>
                              </Col>
                              <Col md={1}>
                                <Button className="btn-square btn-md btn-dribbble d-flex justify-content-center align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="21" height="20" viewBox="0 0 21 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_428)">
                                      <path
                                        d="M10.5 19.3075C15.6777 19.3075 19.875 15.1102 19.875 9.9325C19.875 4.75483 15.6777 0.557495 10.5 0.557495C5.32233 0.557495 1.125 4.75483 1.125 9.9325C1.125 15.1102 5.32233 19.3075 10.5 19.3075Z"
                                        fill="white" />
                                      <path
                                        d="M10.5 0C4.98625 0 0.5 4.48625 0.5 10C0.5 15.5138 4.98625 20 10.5 20C16.0138 20 20.5 15.5138 20.5 10C20.5 4.48625 16.0138 0 10.5 0ZM19.2463 10.075C17.1287 9.51625 14.9575 9.45125 12.8888 9.8775C12.6063 9.1725 12.3012 8.47875 11.9738 7.79375C13.845 6.91875 15.575 5.7325 17.0925 4.26625C18.4312 5.8025 19.25 7.805 19.25 10C19.25 10.025 19.2463 10.0488 19.2463 10.075ZM16.2088 3.38375C14.7913 4.7525 13.1788 5.8675 11.4312 6.6825C10.4975 4.895 9.405 3.1875 8.16875 1.575C8.9125 1.36875 9.69125 1.25 10.5 1.25C12.6812 1.25 14.675 2.0575 16.2088 3.38375ZM6.93375 2.0175C8.2025 3.6325 9.31625 5.3525 10.265 7.15375C7.64 8.15625 4.79 8.54125 1.93625 8.2075C2.515 5.4375 4.41 3.15 6.93375 2.0175ZM1.75 10C1.75 9.8125 1.76625 9.62875 1.77875 9.445C2.51875 9.5325 3.25875 9.59 3.99625 9.59C6.34875 9.59 8.66 9.13 10.8263 8.28625C11.1262 8.91125 11.4087 9.545 11.67 10.1875C8.5975 11.11 5.86 13.0775 4.0175 15.8563C2.61375 14.3038 1.75 12.2525 1.75 10ZM4.93125 16.7438C6.62625 14.0788 9.21125 12.2 12.12 11.35C12.91 13.525 13.4787 15.7837 13.81 18.095C12.7887 18.515 11.6713 18.75 10.5 18.75C8.38625 18.75 6.445 17.9963 4.93125 16.7438ZM14.9825 17.5C14.6388 15.2975 14.0938 13.1412 13.3475 11.06C15.2362 10.705 17.2125 10.7887 19.1375 11.3325C18.7337 13.9525 17.17 16.1875 14.9825 17.5Z"
                                        fill="#EC407A" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_428">
                                        <rect width="20" height="20" fill="white"
                                          transform="translate(0.5)" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button className="btn-pinterest d-flex align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="21" height="20" viewBox="0 0 21 20"
                                    fill="none">
                                    <path
                                      d="M10.7716 0C5.29013 0 2.375 3.51266 2.375 7.34283C2.375 9.11916 3.36754 11.3343 4.95637 12.0368C5.19763 12.1455 5.32888 12.0993 5.38264 11.8755C5.43014 11.7055 5.6389 10.8867 5.74015 10.5005C5.7714 10.3767 5.75515 10.2692 5.65515 10.153C5.12762 9.54293 4.70885 8.43163 4.70885 7.38908C4.70885 4.71771 6.8327 2.12385 10.4466 2.12385C13.5718 2.12385 15.7581 4.15394 15.7581 7.05782C15.7581 10.3392 14.0218 12.6093 11.7654 12.6093C10.5166 12.6093 9.58657 11.6293 9.88159 10.4167C10.2379 8.9729 10.9366 7.42033 10.9366 6.37904C10.9366 5.44524 10.4091 4.67271 9.33156 4.67271C8.06026 4.67271 7.02896 5.93152 7.02896 7.62159C7.02896 8.69539 7.40898 9.42042 7.40898 9.42042C7.40898 9.42042 6.15142 14.5007 5.91766 15.4494C5.52264 17.0558 5.97141 19.6571 6.01016 19.8809C6.03391 20.0046 6.17267 20.0434 6.25017 19.9421C6.37393 19.7796 7.894 17.6108 8.32027 16.0432C8.47527 15.4719 9.11155 13.1556 9.11155 13.1556C9.53032 13.9119 10.7391 14.5457 12.0267 14.5457C15.8569 14.5457 18.6245 11.1793 18.6245 7.00156C18.6107 2.99638 15.1831 0 10.7716 0Z"
                                      fill="white" />
                                  </svg>
                                  pinterest
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button variant="outline-light" className="d-flex align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="21" height="20" viewBox="0 0 21 20"
                                    fill="none">
                                    <path
                                      d="M10.7716 0C5.29013 0 2.375 3.51266 2.375 7.34283C2.375 9.11916 3.36754 11.3343 4.95637 12.0368C5.19763 12.1455 5.32888 12.0993 5.38264 11.8755C5.43014 11.7055 5.6389 10.8867 5.74015 10.5005C5.7714 10.3767 5.75515 10.2692 5.65515 10.153C5.12762 9.54293 4.70885 8.43163 4.70885 7.38908C4.70885 4.71771 6.8327 2.12385 10.4466 2.12385C13.5718 2.12385 15.7581 4.15394 15.7581 7.05782C15.7581 10.3392 14.0218 12.6093 11.7654 12.6093C10.5166 12.6093 9.58657 11.6293 9.88159 10.4167C10.2379 8.9729 10.9366 7.42033 10.9366 6.37904C10.9366 5.44524 10.4091 4.67271 9.33156 4.67271C8.06026 4.67271 7.02896 5.93152 7.02896 7.62159C7.02896 8.69539 7.40898 9.42042 7.40898 9.42042C7.40898 9.42042 6.15142 14.5007 5.91766 15.4494C5.52264 17.0558 5.97141 19.6571 6.01016 19.8809C6.03391 20.0046 6.17267 20.0434 6.25017 19.9421C6.37393 19.7796 7.894 17.6108 8.32027 16.0432C8.47527 15.4719 9.11155 13.1556 9.11155 13.1556C9.53032 13.9119 10.7391 14.5457 12.0267 14.5457C15.8569 14.5457 18.6245 11.1793 18.6245 7.00156C18.6107 2.99638 15.1831 0 10.7716 0Z"
                                      fill="#D32F2F" />
                                  </svg>
                                  pinterest
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button variant="white" className="active d-flex align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="21" height="20" viewBox="0 0 21 20"
                                    fill="none">
                                    <path
                                      d="M10.7716 0C5.29013 0 2.375 3.51266 2.375 7.34283C2.375 9.11916 3.36754 11.3343 4.95637 12.0368C5.19763 12.1455 5.32888 12.0993 5.38264 11.8755C5.43014 11.7055 5.6389 10.8867 5.74015 10.5005C5.7714 10.3767 5.75515 10.2692 5.65515 10.153C5.12762 9.54293 4.70885 8.43163 4.70885 7.38908C4.70885 4.71771 6.8327 2.12385 10.4466 2.12385C13.5718 2.12385 15.7581 4.15394 15.7581 7.05782C15.7581 10.3392 14.0218 12.6093 11.7654 12.6093C10.5166 12.6093 9.58657 11.6293 9.88159 10.4167C10.2379 8.9729 10.9366 7.42033 10.9366 6.37904C10.9366 5.44524 10.4091 4.67271 9.33156 4.67271C8.06026 4.67271 7.02896 5.93152 7.02896 7.62159C7.02896 8.69539 7.40898 9.42042 7.40898 9.42042C7.40898 9.42042 6.15142 14.5007 5.91766 15.4494C5.52264 17.0558 5.97141 19.6571 6.01016 19.8809C6.03391 20.0046 6.17267 20.0434 6.25017 19.9421C6.37393 19.7796 7.894 17.6108 8.32027 16.0432C8.47527 15.4719 9.11155 13.1556 9.11155 13.1556C9.53032 13.9119 10.7391 14.5457 12.0267 14.5457C15.8569 14.5457 18.6245 11.1793 18.6245 7.00156C18.6107 2.99638 15.1831 0 10.7716 0Z"
                                      fill="#D32F2F" />
                                  </svg>
                                  pinterest
                                </Button>
                              </Col>
                              <Col md={2}>
                                <Button variant="outline-light" className="btn-square btn-md d-flex justify-content-center align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="21" height="20" viewBox="0 0 21 20"
                                    fill="none">
                                    <path
                                      d="M10.7716 0C5.29013 0 2.375 3.51266 2.375 7.34283C2.375 9.11916 3.36754 11.3343 4.95637 12.0368C5.19763 12.1455 5.32888 12.0993 5.38264 11.8755C5.43014 11.7055 5.6389 10.8867 5.74015 10.5005C5.7714 10.3767 5.75515 10.2692 5.65515 10.153C5.12762 9.54293 4.70885 8.43163 4.70885 7.38908C4.70885 4.71771 6.8327 2.12385 10.4466 2.12385C13.5718 2.12385 15.7581 4.15394 15.7581 7.05782C15.7581 10.3392 14.0218 12.6093 11.7654 12.6093C10.5166 12.6093 9.58657 11.6293 9.88159 10.4167C10.2379 8.9729 10.9366 7.42033 10.9366 6.37904C10.9366 5.44524 10.4091 4.67271 9.33156 4.67271C8.06026 4.67271 7.02896 5.93152 7.02896 7.62159C7.02896 8.69539 7.40898 9.42042 7.40898 9.42042C7.40898 9.42042 6.15142 14.5007 5.91766 15.4494C5.52264 17.0558 5.97141 19.6571 6.01016 19.8809C6.03391 20.0046 6.17267 20.0434 6.25017 19.9421C6.37393 19.7796 7.894 17.6108 8.32027 16.0432C8.47527 15.4719 9.11155 13.1556 9.11155 13.1556C9.53032 13.9119 10.7391 14.5457 12.0267 14.5457C15.8569 14.5457 18.6245 11.1793 18.6245 7.00156C18.6107 2.99638 15.1831 0 10.7716 0Z"
                                      fill="#D32F2F" />
                                  </svg>
                                </Button>
                              </Col>
                              <Col md={1}>
                                <Button className="btn-square btn-md btn-pinterest d-flex justify-content-center align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="21" height="20" viewBox="0 0 21 20"
                                    fill="none">
                                    <path
                                      d="M10.7716 0C5.29013 0 2.375 3.51266 2.375 7.34283C2.375 9.11916 3.36754 11.3343 4.95637 12.0368C5.19763 12.1455 5.32888 12.0993 5.38264 11.8755C5.43014 11.7055 5.6389 10.8867 5.74015 10.5005C5.7714 10.3767 5.75515 10.2692 5.65515 10.153C5.12762 9.54293 4.70885 8.43163 4.70885 7.38908C4.70885 4.71771 6.8327 2.12385 10.4466 2.12385C13.5718 2.12385 15.7581 4.15394 15.7581 7.05782C15.7581 10.3392 14.0218 12.6093 11.7654 12.6093C10.5166 12.6093 9.58657 11.6293 9.88159 10.4167C10.2379 8.9729 10.9366 7.42033 10.9366 6.37904C10.9366 5.44524 10.4091 4.67271 9.33156 4.67271C8.06026 4.67271 7.02896 5.93152 7.02896 7.62159C7.02896 8.69539 7.40898 9.42042 7.40898 9.42042C7.40898 9.42042 6.15142 14.5007 5.91766 15.4494C5.52264 17.0558 5.97141 19.6571 6.01016 19.8809C6.03391 20.0046 6.17267 20.0434 6.25017 19.9421C6.37393 19.7796 7.894 17.6108 8.32027 16.0432C8.47527 15.4719 9.11155 13.1556 9.11155 13.1556C9.53032 13.9119 10.7391 14.5457 12.0267 14.5457C15.8569 14.5457 18.6245 11.1793 18.6245 7.00156C18.6107 2.99638 15.1831 0 10.7716 0Z"
                                      fill="white" />
                                  </svg>
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button className="btn-youtube d-flex align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                      d="M19.15 4.45C18.6075 3.485 18.0188 3.3075 16.82 3.24C15.6225 3.15875 12.6112 3.125 10.0025 3.125C7.38875 3.125 4.37625 3.15875 3.18 3.23875C1.98375 3.3075 1.39375 3.48375 0.84625 4.45C0.2875 5.41375 0 7.07375 0 9.99625C0 9.99875 0 10 0 10C0 10.0025 0 10.0038 0 10.0038V10.0063C0 12.9163 0.2875 14.5887 0.84625 15.5425C1.39375 16.5075 1.9825 16.6825 3.17875 16.7638C4.37625 16.8338 7.38875 16.875 10.0025 16.875C12.6112 16.875 15.6225 16.8337 16.8212 16.765C18.02 16.6837 18.6087 16.5088 19.1513 15.5438C19.715 14.59 20 12.9175 20 10.0075C20 10.0075 20 10.0038 20 10.0013C20 10.0013 20 9.99875 20 9.9975C20 7.07375 19.715 5.41375 19.15 4.45Z"
                                      fill="white" />
                                    <path d="M7.5 13.75V6.25L13.75 10L7.5 13.75Z"
                                      fill="#F44336" />
                                  </svg>
                                  youtube
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button variant="outline-light" className="d-flex align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                      d="M19.15 4.45C18.6075 3.485 18.0188 3.3075 16.82 3.24C15.6225 3.15875 12.6112 3.125 10.0025 3.125C7.38875 3.125 4.37625 3.15875 3.18 3.23875C1.98375 3.3075 1.39375 3.48375 0.84625 4.45C0.2875 5.41375 0 7.07375 0 9.99625C0 9.99875 0 10 0 10C0 10.0025 0 10.0038 0 10.0038V10.0063C0 12.9163 0.2875 14.5887 0.84625 15.5425C1.39375 16.5075 1.9825 16.6825 3.17875 16.7638C4.37625 16.8338 7.38875 16.875 10.0025 16.875C12.6112 16.875 15.6225 16.8337 16.8212 16.765C18.02 16.6837 18.6087 16.5088 19.1513 15.5438C19.715 14.59 20 12.9175 20 10.0075C20 10.0075 20 10.0038 20 10.0013C20 10.0013 20 9.99875 20 9.9975C20 7.07375 19.715 5.41375 19.15 4.45Z"
                                      fill="#F44336" />
                                    <path d="M7.5 13.75V6.25L13.75 10L7.5 13.75Z"
                                      fill="#FAFAFA" />
                                  </svg>
                                  youtube
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button variant="white" className="active d-flex align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                      d="M19.15 4.45C18.6075 3.485 18.0188 3.3075 16.82 3.24C15.6225 3.15875 12.6112 3.125 10.0025 3.125C7.38875 3.125 4.37625 3.15875 3.18 3.23875C1.98375 3.3075 1.39375 3.48375 0.84625 4.45C0.2875 5.41375 0 7.07375 0 9.99625C0 9.99875 0 10 0 10C0 10.0025 0 10.0038 0 10.0038V10.0063C0 12.9163 0.2875 14.5887 0.84625 15.5425C1.39375 16.5075 1.9825 16.6825 3.17875 16.7638C4.37625 16.8338 7.38875 16.875 10.0025 16.875C12.6112 16.875 15.6225 16.8337 16.8212 16.765C18.02 16.6837 18.6087 16.5088 19.1513 15.5438C19.715 14.59 20 12.9175 20 10.0075C20 10.0075 20 10.0038 20 10.0013C20 10.0013 20 9.99875 20 9.9975C20 7.07375 19.715 5.41375 19.15 4.45Z"
                                      fill="#F44336" />
                                    <path d="M7.5 13.75V6.25L13.75 10L7.5 13.75Z"
                                      fill="#FAFAFA" />
                                  </svg>
                                  youtube
                                </Button>
                              </Col>
                              <Col md={2}>
                                <Button variant="outline-light" className="btn-square btn-md d-flex justify-content-center align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                      d="M19.15 4.45C18.6075 3.485 18.0188 3.3075 16.82 3.24C15.6225 3.15875 12.6112 3.125 10.0025 3.125C7.38875 3.125 4.37625 3.15875 3.18 3.23875C1.98375 3.3075 1.39375 3.48375 0.84625 4.45C0.2875 5.41375 0 7.07375 0 9.99625C0 9.99875 0 10 0 10C0 10.0025 0 10.0038 0 10.0038V10.0063C0 12.9163 0.2875 14.5887 0.84625 15.5425C1.39375 16.5075 1.9825 16.6825 3.17875 16.7638C4.37625 16.8338 7.38875 16.875 10.0025 16.875C12.6112 16.875 15.6225 16.8337 16.8212 16.765C18.02 16.6837 18.6087 16.5088 19.1513 15.5438C19.715 14.59 20 12.9175 20 10.0075C20 10.0075 20 10.0038 20 10.0013C20 10.0013 20 9.99875 20 9.9975C20 7.07375 19.715 5.41375 19.15 4.45Z"
                                      fill="#F44336" />
                                    <path d="M7.5 13.75V6.25L13.75 10L7.5 13.75Z"
                                      fill="#FAFAFA" />
                                  </svg>
                                </Button>
                              </Col>
                              <Col md={1}>
                                <Button className="btn-square btn-md btn-youtube d-flex justify-content-center align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                      d="M19.15 4.45C18.6075 3.485 18.0188 3.3075 16.82 3.24C15.6225 3.15875 12.6112 3.125 10.0025 3.125C7.38875 3.125 4.37625 3.15875 3.18 3.23875C1.98375 3.3075 1.39375 3.48375 0.84625 4.45C0.2875 5.41375 0 7.07375 0 9.99625C0 9.99875 0 10 0 10C0 10.0025 0 10.0038 0 10.0038V10.0063C0 12.9163 0.2875 14.5887 0.84625 15.5425C1.39375 16.5075 1.9825 16.6825 3.17875 16.7638C4.37625 16.8338 7.38875 16.875 10.0025 16.875C12.6112 16.875 15.6225 16.8337 16.8212 16.765C18.02 16.6837 18.6087 16.5088 19.1513 15.5438C19.715 14.59 20 12.9175 20 10.0075C20 10.0075 20 10.0038 20 10.0013C20 10.0013 20 9.99875 20 9.9975C20 7.07375 19.715 5.41375 19.15 4.45Z"
                                      fill="white" />
                                    <path d="M7.5 13.75V6.25L13.75 10L7.5 13.75Z"
                                      fill="#F44336" />
                                  </svg>
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button className="btn-whatsapp d-flex align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_443)">
                                      <path
                                        d="M10.0025 0H9.9975C4.48375 0 0 4.485 0 10C0 12.1875 0.705 14.215 1.90375 15.8612L0.6575 19.5763L4.50125 18.3475C6.0825 19.395 7.96875 20 10.0025 20C15.5162 20 20 15.5138 20 10C20 4.48625 15.5162 0 10.0025 0Z"
                                        fill="white" />
                                      <path
                                        d="M15.8207 14.1212C15.5795 14.8025 14.622 15.3675 13.8582 15.5325C13.3357 15.6437 12.6532 15.7325 10.3557 14.78C7.41695 13.5625 5.52445 10.5762 5.37695 10.3825C5.2357 10.1887 4.18945 8.80123 4.18945 7.36623C4.18945 5.93123 4.9182 5.23248 5.21195 4.93248C5.4532 4.68623 5.85195 4.57373 6.23445 4.57373C6.3582 4.57373 6.46945 4.57998 6.56945 4.58498C6.8632 4.59748 7.0107 4.61498 7.20445 5.07873C7.4457 5.65998 8.0332 7.09498 8.1032 7.24248C8.17445 7.38998 8.2457 7.58998 8.1457 7.78373C8.05195 7.98373 7.96945 8.07248 7.82195 8.24248C7.67445 8.41248 7.53445 8.54248 7.38695 8.72498C7.25195 8.88373 7.09945 9.05373 7.26945 9.34748C7.43945 9.63498 8.02695 10.5937 8.89195 11.3637C10.0082 12.3575 10.9132 12.675 11.237 12.81C11.4782 12.91 11.7657 12.8862 11.942 12.6987C12.1657 12.4575 12.442 12.0575 12.7232 11.6637C12.9232 11.3812 13.1757 11.3462 13.4407 11.4462C13.7107 11.54 15.1395 12.2462 15.4332 12.3925C15.727 12.54 15.9207 12.61 15.992 12.7337C16.062 12.8575 16.062 13.4387 15.8207 14.1212Z"
                                        fill="#4CAF50" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_443">
                                        <rect width="20" height="20" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  whatsapp
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button variant="outline-light" className="d-flex align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_558)">
                                      <path
                                        d="M10.0025 0H9.9975C4.48375 0 0 4.485 0 10C0 12.1875 0.705 14.215 1.90375 15.8612L0.6575 19.5763L4.50125 18.3475C6.0825 19.395 7.96875 20 10.0025 20C15.5162 20 20 15.5138 20 10C20 4.48625 15.5162 0 10.0025 0Z"
                                        fill="#4CAF50" />
                                      <path
                                        d="M15.8207 14.1212C15.5795 14.8025 14.622 15.3675 13.8582 15.5325C13.3357 15.6437 12.6532 15.7325 10.3557 14.78C7.41695 13.5625 5.52445 10.5762 5.37695 10.3825C5.2357 10.1887 4.18945 8.80123 4.18945 7.36623C4.18945 5.93123 4.9182 5.23248 5.21195 4.93248C5.4532 4.68623 5.85195 4.57373 6.23445 4.57373C6.3582 4.57373 6.46945 4.57998 6.56945 4.58498C6.8632 4.59748 7.0107 4.61498 7.20445 5.07873C7.4457 5.65998 8.0332 7.09498 8.1032 7.24248C8.17445 7.38998 8.2457 7.58998 8.1457 7.78373C8.05195 7.98373 7.96945 8.07248 7.82195 8.24248C7.67445 8.41248 7.53445 8.54248 7.38695 8.72498C7.25195 8.88373 7.09945 9.05373 7.26945 9.34748C7.43945 9.63498 8.02695 10.5937 8.89195 11.3637C10.0082 12.3575 10.9132 12.675 11.237 12.81C11.4782 12.91 11.7657 12.8862 11.942 12.6987C12.1657 12.4575 12.442 12.0575 12.7232 11.6637C12.9232 11.3812 13.1757 11.3462 13.4407 11.4462C13.7107 11.54 15.1395 12.2462 15.4332 12.3925C15.727 12.54 15.9207 12.61 15.992 12.7337C16.062 12.8575 16.062 13.4387 15.8207 14.1212Z"
                                        fill="#FAFAFA" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_5582">
                                        <rect width="20" height="20" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  whatsapp
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button variant="white" className="active d-flex align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_558)">
                                      <path
                                        d="M10.0025 0H9.9975C4.48375 0 0 4.485 0 10C0 12.1875 0.705 14.215 1.90375 15.8612L0.6575 19.5763L4.50125 18.3475C6.0825 19.395 7.96875 20 10.0025 20C15.5162 20 20 15.5138 20 10C20 4.48625 15.5162 0 10.0025 0Z"
                                        fill="#4CAF50" />
                                      <path
                                        d="M15.8207 14.1212C15.5795 14.8025 14.622 15.3675 13.8582 15.5325C13.3357 15.6437 12.6532 15.7325 10.3557 14.78C7.41695 13.5625 5.52445 10.5762 5.37695 10.3825C5.2357 10.1887 4.18945 8.80123 4.18945 7.36623C4.18945 5.93123 4.9182 5.23248 5.21195 4.93248C5.4532 4.68623 5.85195 4.57373 6.23445 4.57373C6.3582 4.57373 6.46945 4.57998 6.56945 4.58498C6.8632 4.59748 7.0107 4.61498 7.20445 5.07873C7.4457 5.65998 8.0332 7.09498 8.1032 7.24248C8.17445 7.38998 8.2457 7.58998 8.1457 7.78373C8.05195 7.98373 7.96945 8.07248 7.82195 8.24248C7.67445 8.41248 7.53445 8.54248 7.38695 8.72498C7.25195 8.88373 7.09945 9.05373 7.26945 9.34748C7.43945 9.63498 8.02695 10.5937 8.89195 11.3637C10.0082 12.3575 10.9132 12.675 11.237 12.81C11.4782 12.91 11.7657 12.8862 11.942 12.6987C12.1657 12.4575 12.442 12.0575 12.7232 11.6637C12.9232 11.3812 13.1757 11.3462 13.4407 11.4462C13.7107 11.54 15.1395 12.2462 15.4332 12.3925C15.727 12.54 15.9207 12.61 15.992 12.7337C16.062 12.8575 16.062 13.4387 15.8207 14.1212Z"
                                        fill="#FAFAFA" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_5582">
                                        <rect width="20" height="20" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  whatsapp
                                </Button>
                              </Col>
                              <Col md={2}>
                                <Button variant="outline-light" className="btn-square btn-md d-flex justify-content-center align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_558)">
                                      <path
                                        d="M10.0025 0H9.9975C4.48375 0 0 4.485 0 10C0 12.1875 0.705 14.215 1.90375 15.8612L0.6575 19.5763L4.50125 18.3475C6.0825 19.395 7.96875 20 10.0025 20C15.5162 20 20 15.5138 20 10C20 4.48625 15.5162 0 10.0025 0Z"
                                        fill="#4CAF50" />
                                      <path
                                        d="M15.8207 14.1212C15.5795 14.8025 14.622 15.3675 13.8582 15.5325C13.3357 15.6437 12.6532 15.7325 10.3557 14.78C7.41695 13.5625 5.52445 10.5762 5.37695 10.3825C5.2357 10.1887 4.18945 8.80123 4.18945 7.36623C4.18945 5.93123 4.9182 5.23248 5.21195 4.93248C5.4532 4.68623 5.85195 4.57373 6.23445 4.57373C6.3582 4.57373 6.46945 4.57998 6.56945 4.58498C6.8632 4.59748 7.0107 4.61498 7.20445 5.07873C7.4457 5.65998 8.0332 7.09498 8.1032 7.24248C8.17445 7.38998 8.2457 7.58998 8.1457 7.78373C8.05195 7.98373 7.96945 8.07248 7.82195 8.24248C7.67445 8.41248 7.53445 8.54248 7.38695 8.72498C7.25195 8.88373 7.09945 9.05373 7.26945 9.34748C7.43945 9.63498 8.02695 10.5937 8.89195 11.3637C10.0082 12.3575 10.9132 12.675 11.237 12.81C11.4782 12.91 11.7657 12.8862 11.942 12.6987C12.1657 12.4575 12.442 12.0575 12.7232 11.6637C12.9232 11.3812 13.1757 11.3462 13.4407 11.4462C13.7107 11.54 15.1395 12.2462 15.4332 12.3925C15.727 12.54 15.9207 12.61 15.992 12.7337C16.062 12.8575 16.062 13.4387 15.8207 14.1212Z"
                                        fill="#FAFAFA" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_5582">
                                        <rect width="20" height="20" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </Button>
                              </Col>
                              <Col md={1}>
                                <Button className="btn-square btn-md btn-whatsapp d-flex justify-content-center align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_443)">
                                      <path
                                        d="M10.0025 0H9.9975C4.48375 0 0 4.485 0 10C0 12.1875 0.705 14.215 1.90375 15.8612L0.6575 19.5763L4.50125 18.3475C6.0825 19.395 7.96875 20 10.0025 20C15.5162 20 20 15.5138 20 10C20 4.48625 15.5162 0 10.0025 0Z"
                                        fill="white" />
                                      <path
                                        d="M15.8207 14.1212C15.5795 14.8025 14.622 15.3675 13.8582 15.5325C13.3357 15.6437 12.6532 15.7325 10.3557 14.78C7.41695 13.5625 5.52445 10.5762 5.37695 10.3825C5.2357 10.1887 4.18945 8.80123 4.18945 7.36623C4.18945 5.93123 4.9182 5.23248 5.21195 4.93248C5.4532 4.68623 5.85195 4.57373 6.23445 4.57373C6.3582 4.57373 6.46945 4.57998 6.56945 4.58498C6.8632 4.59748 7.0107 4.61498 7.20445 5.07873C7.4457 5.65998 8.0332 7.09498 8.1032 7.24248C8.17445 7.38998 8.2457 7.58998 8.1457 7.78373C8.05195 7.98373 7.96945 8.07248 7.82195 8.24248C7.67445 8.41248 7.53445 8.54248 7.38695 8.72498C7.25195 8.88373 7.09945 9.05373 7.26945 9.34748C7.43945 9.63498 8.02695 10.5937 8.89195 11.3637C10.0082 12.3575 10.9132 12.675 11.237 12.81C11.4782 12.91 11.7657 12.8862 11.942 12.6987C12.1657 12.4575 12.442 12.0575 12.7232 11.6637C12.9232 11.3812 13.1757 11.3462 13.4407 11.4462C13.7107 11.54 15.1395 12.2462 15.4332 12.3925C15.727 12.54 15.9207 12.61 15.992 12.7337C16.062 12.8575 16.062 13.4387 15.8207 14.1212Z"
                                        fill="#4CAF50" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_443">
                                        <rect width="20" height="20" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button className="btn-apple d-flex align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="21" height="20" viewBox="0 0 21 20"
                                    fill="none">
                                    <path
                                      d="M14.349 0C14.3956 0 14.4421 0 14.4913 0C14.6055 1.41044 14.0671 2.46432 13.4128 3.22751C12.7708 3.98542 11.8917 4.7205 10.4699 4.60897C10.375 3.21872 10.9142 2.24301 11.5676 1.48158C12.1736 0.771967 13.2846 0.140517 14.349 0Z"
                                      fill="white" />
                                    <path
                                      d="M18.6529 14.6805C18.6529 14.6946 18.6529 14.7069 18.6529 14.7201C18.2533 15.9303 17.6834 16.9675 16.9878 17.93C16.3528 18.8038 15.5747 19.9798 14.1854 19.9798C12.9848 19.9798 12.1874 19.2078 10.957 19.1868C9.65543 19.1657 8.93967 19.8323 7.74967 20C7.61354 20 7.47742 20 7.34392 20C6.47008 19.8735 5.76486 19.1815 5.25109 18.5579C3.73614 16.7154 2.56546 14.3354 2.34766 11.2897C2.34766 10.9911 2.34766 10.6934 2.34766 10.3948C2.43987 8.21499 3.49902 6.44272 4.90683 5.58381C5.64981 5.12712 6.6712 4.73807 7.80851 4.91196C8.29593 4.98749 8.79389 5.15435 9.23037 5.31946C9.64402 5.47842 10.1613 5.76033 10.6513 5.7454C10.9833 5.73574 11.3135 5.56273 11.6481 5.44065C12.6283 5.08673 13.589 4.68098 14.8555 4.87156C16.3774 5.10166 17.4577 5.7779 18.1251 6.82124C16.8376 7.64063 15.8197 8.87542 15.9936 10.9841C16.1482 12.8995 17.2618 14.0201 18.6529 14.6805Z"
                                      fill="white" />
                                  </svg>
                                  apple
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button variant="outline-light" className="d-flex align-items-center">
                                  <svg className="me-1 apple"
                                    xmlns="http://www.w3.org/2000/svg" width="21"
                                    height="20" viewBox="0 0 21 20" fill="none">
                                    <path
                                      d="M14.349 0C14.3956 0 14.4421 0 14.4913 0C14.6055 1.41044 14.0671 2.46432 13.4128 3.22751C12.7708 3.98542 11.8917 4.7205 10.4699 4.60897C10.375 3.21872 10.9142 2.24301 11.5676 1.48158C12.1736 0.771967 13.2846 0.140517 14.349 0Z"
                                      fill="#1F2025" />
                                    <path
                                      d="M18.6529 14.6805C18.6529 14.6946 18.6529 14.7069 18.6529 14.7201C18.2533 15.9303 17.6834 16.9675 16.9878 17.93C16.3528 18.8038 15.5747 19.9798 14.1854 19.9798C12.9848 19.9798 12.1874 19.2078 10.957 19.1868C9.65543 19.1657 8.93967 19.8323 7.74967 20C7.61354 20 7.47742 20 7.34392 20C6.47008 19.8735 5.76486 19.1815 5.25109 18.5579C3.73614 16.7154 2.56546 14.3354 2.34766 11.2897C2.34766 10.9911 2.34766 10.6934 2.34766 10.3948C2.43987 8.21499 3.49902 6.44272 4.90683 5.58381C5.64981 5.12712 6.6712 4.73807 7.80851 4.91196C8.29593 4.98749 8.79389 5.15435 9.23037 5.31946C9.64402 5.47842 10.1613 5.76033 10.6513 5.7454C10.9833 5.73574 11.3135 5.56273 11.6481 5.44065C12.6283 5.08673 13.589 4.68098 14.8555 4.87156C16.3774 5.10166 17.4577 5.7779 18.1251 6.82124C16.8376 7.64063 15.8197 8.87542 15.9936 10.9841C16.1482 12.8995 17.2618 14.0201 18.6529 14.6805Z"
                                      fill="#1F2025" />
                                  </svg>
                                  apple
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button variant="white" className="active d-flex align-items-center">
                                  <svg className="me-1 apple"
                                    xmlns="http://www.w3.org/2000/svg" width="21"
                                    height="20" viewBox="0 0 21 20" fill="none">
                                    <path
                                      d="M14.349 0C14.3956 0 14.4421 0 14.4913 0C14.6055 1.41044 14.0671 2.46432 13.4128 3.22751C12.7708 3.98542 11.8917 4.7205 10.4699 4.60897C10.375 3.21872 10.9142 2.24301 11.5676 1.48158C12.1736 0.771967 13.2846 0.140517 14.349 0Z"
                                      fill="#1F2025" />
                                    <path
                                      d="M18.6529 14.6805C18.6529 14.6946 18.6529 14.7069 18.6529 14.7201C18.2533 15.9303 17.6834 16.9675 16.9878 17.93C16.3528 18.8038 15.5747 19.9798 14.1854 19.9798C12.9848 19.9798 12.1874 19.2078 10.957 19.1868C9.65543 19.1657 8.93967 19.8323 7.74967 20C7.61354 20 7.47742 20 7.34392 20C6.47008 19.8735 5.76486 19.1815 5.25109 18.5579C3.73614 16.7154 2.56546 14.3354 2.34766 11.2897C2.34766 10.9911 2.34766 10.6934 2.34766 10.3948C2.43987 8.21499 3.49902 6.44272 4.90683 5.58381C5.64981 5.12712 6.6712 4.73807 7.80851 4.91196C8.29593 4.98749 8.79389 5.15435 9.23037 5.31946C9.64402 5.47842 10.1613 5.76033 10.6513 5.7454C10.9833 5.73574 11.3135 5.56273 11.6481 5.44065C12.6283 5.08673 13.589 4.68098 14.8555 4.87156C16.3774 5.10166 17.4577 5.7779 18.1251 6.82124C16.8376 7.64063 15.8197 8.87542 15.9936 10.9841C16.1482 12.8995 17.2618 14.0201 18.6529 14.6805Z"
                                      fill="#1F2025" />
                                  </svg>
                                  apple
                                </Button>
                              </Col>
                              <Col md={2}>
                                <Button variant="outline-light" className="btn-square btn-md d-flex justify-content-center align-items-center">
                                  <svg className="me-1 apple"
                                    xmlns="http://www.w3.org/2000/svg" width="21"
                                    height="20" viewBox="0 0 21 20" fill="none">
                                    <path
                                      d="M14.349 0C14.3956 0 14.4421 0 14.4913 0C14.6055 1.41044 14.0671 2.46432 13.4128 3.22751C12.7708 3.98542 11.8917 4.7205 10.4699 4.60897C10.375 3.21872 10.9142 2.24301 11.5676 1.48158C12.1736 0.771967 13.2846 0.140517 14.349 0Z"
                                      fill="#1F2025" />
                                    <path
                                      d="M18.6529 14.6805C18.6529 14.6946 18.6529 14.7069 18.6529 14.7201C18.2533 15.9303 17.6834 16.9675 16.9878 17.93C16.3528 18.8038 15.5747 19.9798 14.1854 19.9798C12.9848 19.9798 12.1874 19.2078 10.957 19.1868C9.65543 19.1657 8.93967 19.8323 7.74967 20C7.61354 20 7.47742 20 7.34392 20C6.47008 19.8735 5.76486 19.1815 5.25109 18.5579C3.73614 16.7154 2.56546 14.3354 2.34766 11.2897C2.34766 10.9911 2.34766 10.6934 2.34766 10.3948C2.43987 8.21499 3.49902 6.44272 4.90683 5.58381C5.64981 5.12712 6.6712 4.73807 7.80851 4.91196C8.29593 4.98749 8.79389 5.15435 9.23037 5.31946C9.64402 5.47842 10.1613 5.76033 10.6513 5.7454C10.9833 5.73574 11.3135 5.56273 11.6481 5.44065C12.6283 5.08673 13.589 4.68098 14.8555 4.87156C16.3774 5.10166 17.4577 5.7779 18.1251 6.82124C16.8376 7.64063 15.8197 8.87542 15.9936 10.9841C16.1482 12.8995 17.2618 14.0201 18.6529 14.6805Z"
                                      fill="#1F2025" />
                                  </svg>
                                </Button>
                              </Col>
                              <Col md={1}>
                                <Button className="btn-square btn-md btn-apple d-flex justify-content-center align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="21" height="20" viewBox="0 0 21 20"
                                    fill="none">
                                    <path
                                      d="M14.349 0C14.3956 0 14.4421 0 14.4913 0C14.6055 1.41044 14.0671 2.46432 13.4128 3.22751C12.7708 3.98542 11.8917 4.7205 10.4699 4.60897C10.375 3.21872 10.9142 2.24301 11.5676 1.48158C12.1736 0.771967 13.2846 0.140517 14.349 0Z"
                                      fill="white" />
                                    <path
                                      d="M18.6529 14.6805C18.6529 14.6946 18.6529 14.7069 18.6529 14.7201C18.2533 15.9303 17.6834 16.9675 16.9878 17.93C16.3528 18.8038 15.5747 19.9798 14.1854 19.9798C12.9848 19.9798 12.1874 19.2078 10.957 19.1868C9.65543 19.1657 8.93967 19.8323 7.74967 20C7.61354 20 7.47742 20 7.34392 20C6.47008 19.8735 5.76486 19.1815 5.25109 18.5579C3.73614 16.7154 2.56546 14.3354 2.34766 11.2897C2.34766 10.9911 2.34766 10.6934 2.34766 10.3948C2.43987 8.21499 3.49902 6.44272 4.90683 5.58381C5.64981 5.12712 6.6712 4.73807 7.80851 4.91196C8.29593 4.98749 8.79389 5.15435 9.23037 5.31946C9.64402 5.47842 10.1613 5.76033 10.6513 5.7454C10.9833 5.73574 11.3135 5.56273 11.6481 5.44065C12.6283 5.08673 13.589 4.68098 14.8555 4.87156C16.3774 5.10166 17.4577 5.7779 18.1251 6.82124C16.8376 7.64063 15.8197 8.87542 15.9936 10.9841C16.1482 12.8995 17.2618 14.0201 18.6529 14.6805Z"
                                      fill="white" />
                                  </svg>
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button className="btn-google-plus d-flex align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg" width="20"
                                    height="20" viewBox="0 0 20 20" fill="none">
                                    <g clipPath="url(#clip0_309_455)">
                                      <path
                                        d="M19.2456 8.26132L11.0878 8.26093C10.7275 8.26093 10.4355 8.55288 10.4355 8.91311V11.5192C10.4355 11.8793 10.7275 12.1714 11.0877 12.1714H15.6817C15.1787 13.4769 14.2398 14.5702 13.0419 15.2649L15.0007 18.6558C18.143 16.8385 20.0007 13.6499 20.0007 10.0805C20.0007 9.57221 19.9633 9.20889 19.8884 8.79979C19.8314 8.48897 19.5616 8.26132 19.2456 8.26132Z"
                                        fill="white" />
                                      <path
                                        d="M9.99957 16.0869C7.75137 16.0869 5.78871 14.8586 4.73461 13.0409L1.34375 14.9953C3.06934 17.9861 6.30191 20 9.99957 20C11.8135 20 13.5251 19.5116 14.9996 18.6605V18.6558L13.0407 15.2648C12.1447 15.7845 11.1078 16.0869 9.99957 16.0869Z"
                                        fill="white" />
                                      <path
                                        d="M15 18.6605V18.6558L13.0411 15.2648C12.1451 15.7845 11.1083 16.087 10 16.087V20C11.8139 20 13.5256 19.5116 15 18.6605Z"
                                        fill="white" />
                                      <path
                                        d="M3.91305 9.99999C3.91305 8.89183 4.21547 7.85507 4.73504 6.95909L1.34418 5.00464C0.488359 6.47444 0 8.1814 0 9.99999C0 11.8186 0.488359 13.5255 1.34418 14.9953L4.73504 13.0409C4.21547 12.1449 3.91305 11.1082 3.91305 9.99999Z"
                                        fill="white" />
                                      <path
                                        d="M9.99957 3.91305C11.4656 3.91305 12.8123 4.43398 13.8641 5.30051C14.1236 5.51426 14.5007 5.49883 14.7384 5.26113L16.5849 3.41465C16.8546 3.14496 16.8354 2.70352 16.5473 2.45359C14.785 0.924726 12.492 0 9.99957 0C6.30191 0 3.06934 2.01395 1.34375 5.00465L4.73461 6.9591C5.78871 5.14141 7.75137 3.91305 9.99957 3.91305Z"
                                        fill="white" />
                                      <path
                                        d="M13.8645 5.30051C14.124 5.51426 14.5012 5.49883 14.7389 5.26113L16.5854 3.41465C16.855 3.14496 16.8358 2.70352 16.5477 2.45359C14.7854 0.924688 12.4925 0 10 0V3.91305C11.466 3.91305 12.8127 4.43398 13.8645 5.30051Z"
                                        fill="white" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_455">
                                        <rect width="20" height="20" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  Google
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button variant="outline-light" className="d-flex align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_570)">
                                      <path
                                        d="M19.2456 8.26132L11.0878 8.26093C10.7275 8.26093 10.4355 8.55288 10.4355 8.91311V11.5192C10.4355 11.8793 10.7275 12.1714 11.0877 12.1714H15.6817C15.1787 13.4769 14.2398 14.5702 13.0419 15.2649L15.0007 18.6558C18.143 16.8385 20.0007 13.6499 20.0007 10.0805C20.0007 9.57221 19.9633 9.20889 19.8884 8.79979C19.8314 8.48897 19.5616 8.26132 19.2456 8.26132Z"
                                        fill="#167EE6" />
                                      <path
                                        d="M9.99957 16.0869C7.75137 16.0869 5.78871 14.8586 4.73461 13.0409L1.34375 14.9953C3.06934 17.9861 6.30191 20 9.99957 20C11.8135 20 13.5251 19.5116 14.9996 18.6605V18.6558L13.0407 15.2648C12.1447 15.7845 11.1078 16.0869 9.99957 16.0869Z"
                                        fill="#12B347" />
                                      <path
                                        d="M15 18.6605V18.6558L13.0411 15.2648C12.1451 15.7845 11.1083 16.087 10 16.087V20C11.8139 20 13.5256 19.5116 15 18.6605Z"
                                        fill="#0F993E" />
                                      <path
                                        d="M3.91305 9.99999C3.91305 8.89183 4.21547 7.85507 4.73504 6.95909L1.34418 5.00464C0.488359 6.47444 0 8.1814 0 9.99999C0 11.8186 0.488359 13.5255 1.34418 14.9953L4.73504 13.0409C4.21547 12.1449 3.91305 11.1082 3.91305 9.99999Z"
                                        fill="#FFD500" />
                                      <path
                                        d="M9.99957 3.91305C11.4656 3.91305 12.8123 4.43398 13.8641 5.30051C14.1236 5.51426 14.5007 5.49883 14.7384 5.26113L16.5849 3.41465C16.8546 3.14496 16.8354 2.70352 16.5473 2.45359C14.785 0.924726 12.492 0 9.99957 0C6.30191 0 3.06934 2.01395 1.34375 5.00465L4.73461 6.9591C5.78871 5.14141 7.75137 3.91305 9.99957 3.91305Z"
                                        fill="#FF4B26" />
                                      <path
                                        d="M13.8645 5.30051C14.124 5.51426 14.5012 5.49883 14.7389 5.26113L16.5854 3.41465C16.855 3.14496 16.8358 2.70352 16.5477 2.45359C14.7854 0.924688 12.4925 0 10 0V3.91305C11.466 3.91305 12.8127 4.43398 13.8645 5.30051Z"
                                        fill="#D93F21" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_570">
                                        <rect width="20" height="20" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  Google
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button variant="white" className="active d-flex align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_570)">
                                      <path
                                        d="M19.2456 8.26132L11.0878 8.26093C10.7275 8.26093 10.4355 8.55288 10.4355 8.91311V11.5192C10.4355 11.8793 10.7275 12.1714 11.0877 12.1714H15.6817C15.1787 13.4769 14.2398 14.5702 13.0419 15.2649L15.0007 18.6558C18.143 16.8385 20.0007 13.6499 20.0007 10.0805C20.0007 9.57221 19.9633 9.20889 19.8884 8.79979C19.8314 8.48897 19.5616 8.26132 19.2456 8.26132Z"
                                        fill="#167EE6" />
                                      <path
                                        d="M9.99957 16.0869C7.75137 16.0869 5.78871 14.8586 4.73461 13.0409L1.34375 14.9953C3.06934 17.9861 6.30191 20 9.99957 20C11.8135 20 13.5251 19.5116 14.9996 18.6605V18.6558L13.0407 15.2648C12.1447 15.7845 11.1078 16.0869 9.99957 16.0869Z"
                                        fill="#12B347" />
                                      <path
                                        d="M15 18.6605V18.6558L13.0411 15.2648C12.1451 15.7845 11.1083 16.087 10 16.087V20C11.8139 20 13.5256 19.5116 15 18.6605Z"
                                        fill="#0F993E" />
                                      <path
                                        d="M3.91305 9.99999C3.91305 8.89183 4.21547 7.85507 4.73504 6.95909L1.34418 5.00464C0.488359 6.47444 0 8.1814 0 9.99999C0 11.8186 0.488359 13.5255 1.34418 14.9953L4.73504 13.0409C4.21547 12.1449 3.91305 11.1082 3.91305 9.99999Z"
                                        fill="#FFD500" />
                                      <path
                                        d="M9.99957 3.91305C11.4656 3.91305 12.8123 4.43398 13.8641 5.30051C14.1236 5.51426 14.5007 5.49883 14.7384 5.26113L16.5849 3.41465C16.8546 3.14496 16.8354 2.70352 16.5473 2.45359C14.785 0.924726 12.492 0 9.99957 0C6.30191 0 3.06934 2.01395 1.34375 5.00465L4.73461 6.9591C5.78871 5.14141 7.75137 3.91305 9.99957 3.91305Z"
                                        fill="#FF4B26" />
                                      <path
                                        d="M13.8645 5.30051C14.124 5.51426 14.5012 5.49883 14.7389 5.26113L16.5854 3.41465C16.855 3.14496 16.8358 2.70352 16.5477 2.45359C14.7854 0.924688 12.4925 0 10 0V3.91305C11.466 3.91305 12.8127 4.43398 13.8645 5.30051Z"
                                        fill="#D93F21" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_570">
                                        <rect width="20" height="20" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  Google
                                </Button>
                              </Col>
                              <Col md={2}>
                                <Button variant="outline-light" className="btn-square btn-md d-flex justify-content-center align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_570)">
                                      <path
                                        d="M19.2456 8.26132L11.0878 8.26093C10.7275 8.26093 10.4355 8.55288 10.4355 8.91311V11.5192C10.4355 11.8793 10.7275 12.1714 11.0877 12.1714H15.6817C15.1787 13.4769 14.2398 14.5702 13.0419 15.2649L15.0007 18.6558C18.143 16.8385 20.0007 13.6499 20.0007 10.0805C20.0007 9.57221 19.9633 9.20889 19.8884 8.79979C19.8314 8.48897 19.5616 8.26132 19.2456 8.26132Z"
                                        fill="#167EE6" />
                                      <path
                                        d="M9.99957 16.0869C7.75137 16.0869 5.78871 14.8586 4.73461 13.0409L1.34375 14.9953C3.06934 17.9861 6.30191 20 9.99957 20C11.8135 20 13.5251 19.5116 14.9996 18.6605V18.6558L13.0407 15.2648C12.1447 15.7845 11.1078 16.0869 9.99957 16.0869Z"
                                        fill="#12B347" />
                                      <path
                                        d="M15 18.6605V18.6558L13.0411 15.2648C12.1451 15.7845 11.1083 16.087 10 16.087V20C11.8139 20 13.5256 19.5116 15 18.6605Z"
                                        fill="#0F993E" />
                                      <path
                                        d="M3.91305 9.99999C3.91305 8.89183 4.21547 7.85507 4.73504 6.95909L1.34418 5.00464C0.488359 6.47444 0 8.1814 0 9.99999C0 11.8186 0.488359 13.5255 1.34418 14.9953L4.73504 13.0409C4.21547 12.1449 3.91305 11.1082 3.91305 9.99999Z"
                                        fill="#FFD500" />
                                      <path
                                        d="M9.99957 3.91305C11.4656 3.91305 12.8123 4.43398 13.8641 5.30051C14.1236 5.51426 14.5007 5.49883 14.7384 5.26113L16.5849 3.41465C16.8546 3.14496 16.8354 2.70352 16.5473 2.45359C14.785 0.924726 12.492 0 9.99957 0C6.30191 0 3.06934 2.01395 1.34375 5.00465L4.73461 6.9591C5.78871 5.14141 7.75137 3.91305 9.99957 3.91305Z"
                                        fill="#FF4B26" />
                                      <path
                                        d="M13.8645 5.30051C14.124 5.51426 14.5012 5.49883 14.7389 5.26113L16.5854 3.41465C16.855 3.14496 16.8358 2.70352 16.5477 2.45359C14.7854 0.924688 12.4925 0 10 0V3.91305C11.466 3.91305 12.8127 4.43398 13.8645 5.30051Z"
                                        fill="#D93F21" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_570">
                                        <rect width="20" height="20" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </Button>
                              </Col>
                              <Col md={1}>
                                <Button className="btn-square btn-md btn-google-plus d-flex justify-content-center align-items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20"
                                    height="20" viewBox="0 0 20 20" fill="none">
                                    <g clipPath="url(#clip0_309_455)">
                                      <path
                                        d="M19.2456 8.26132L11.0878 8.26093C10.7275 8.26093 10.4355 8.55288 10.4355 8.91311V11.5192C10.4355 11.8793 10.7275 12.1714 11.0877 12.1714H15.6817C15.1787 13.4769 14.2398 14.5702 13.0419 15.2649L15.0007 18.6558C18.143 16.8385 20.0007 13.6499 20.0007 10.0805C20.0007 9.57221 19.9633 9.20889 19.8884 8.79979C19.8314 8.48897 19.5616 8.26132 19.2456 8.26132Z"
                                        fill="white" />
                                      <path
                                        d="M9.99957 16.0869C7.75137 16.0869 5.78871 14.8586 4.73461 13.0409L1.34375 14.9953C3.06934 17.9861 6.30191 20 9.99957 20C11.8135 20 13.5251 19.5116 14.9996 18.6605V18.6558L13.0407 15.2648C12.1447 15.7845 11.1078 16.0869 9.99957 16.0869Z"
                                        fill="white" />
                                      <path
                                        d="M15 18.6605V18.6558L13.0411 15.2648C12.1451 15.7845 11.1083 16.087 10 16.087V20C11.8139 20 13.5256 19.5116 15 18.6605Z"
                                        fill="white" />
                                      <path
                                        d="M3.91305 9.99999C3.91305 8.89183 4.21547 7.85507 4.73504 6.95909L1.34418 5.00464C0.488359 6.47444 0 8.1814 0 9.99999C0 11.8186 0.488359 13.5255 1.34418 14.9953L4.73504 13.0409C4.21547 12.1449 3.91305 11.1082 3.91305 9.99999Z"
                                        fill="white" />
                                      <path
                                        d="M9.99957 3.91305C11.4656 3.91305 12.8123 4.43398 13.8641 5.30051C14.1236 5.51426 14.5007 5.49883 14.7384 5.26113L16.5849 3.41465C16.8546 3.14496 16.8354 2.70352 16.5473 2.45359C14.785 0.924726 12.492 0 9.99957 0C6.30191 0 3.06934 2.01395 1.34375 5.00465L4.73461 6.9591C5.78871 5.14141 7.75137 3.91305 9.99957 3.91305Z"
                                        fill="white" />
                                      <path
                                        d="M13.8645 5.30051C14.124 5.51426 14.5012 5.49883 14.7389 5.26113L16.5854 3.41465C16.855 3.14496 16.8358 2.70352 16.5477 2.45359C14.7854 0.924688 12.4925 0 10 0V3.91305C11.466 3.91305 12.8127 4.43398 13.8645 5.30051Z"
                                        fill="white" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_455">
                                        <rect width="20" height="20" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button className="btn-dropbox d-flex align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_464)">
                                      <path
                                        d="M9.78601 15.6577H10.9811C10.9811 15.6577 11.3424 15.6177 11.5261 15.4189C11.6961 15.2364 11.6899 14.8939 11.6899 14.8939C11.6899 14.8939 11.6661 13.29 12.4112 13.0538C13.145 12.8212 14.0876 14.6039 15.0864 15.2902C15.8415 15.809 16.4152 15.6952 16.4152 15.6952L19.0867 15.6577C19.0867 15.6577 20.4843 15.5714 19.8217 14.4726C19.768 14.3826 19.4355 13.6601 17.8354 12.1749C16.1602 10.6198 16.3852 10.8723 18.4029 8.1834C19.6317 6.54577 20.123 5.5457 19.9693 5.11817C19.823 4.71064 18.9192 4.81815 18.9192 4.81815L15.914 4.83565C15.914 4.83565 15.6914 4.80564 15.5252 4.9044C15.3639 5.00191 15.2602 5.22693 15.2602 5.22693C15.2602 5.22693 14.7839 6.49452 14.1488 7.5721C12.81 9.84602 12.2737 9.96603 12.0549 9.82477C11.5461 9.49599 11.6736 8.50217 11.6736 7.79712C11.6736 5.5932 12.0074 4.67438 11.0223 4.43687C10.6948 4.35811 10.4548 4.30561 9.61849 4.29686C8.54591 4.28561 7.6371 4.30061 7.12331 4.55188C6.78078 4.71939 6.51701 5.09317 6.67827 5.11442C6.87704 5.14067 7.32707 5.23568 7.56584 5.5607C7.87461 5.97948 7.86336 6.92205 7.86336 6.92205C7.86336 6.92205 8.04088 9.51599 7.44958 9.83852C7.0433 10.0598 6.48701 9.6085 5.29317 7.5446C4.68188 6.48827 4.21934 5.31943 4.21934 5.31943C4.21934 5.31943 4.13059 5.10192 3.97182 4.98566C3.77931 4.8444 3.50929 4.79939 3.50929 4.79939L0.651577 4.8169C0.651577 4.8169 0.222796 4.8294 0.0652839 5.01566C-0.0747265 5.18192 0.0540331 5.52445 0.0540331 5.52445C0.0540331 5.52445 2.2917 10.7586 4.82439 13.3975C7.14831 15.8165 9.78601 15.6577 9.78601 15.6577Z"
                                        fill="white" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_464">
                                        <rect width="20" height="20" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  Vk
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button variant="outline-light" className="d-flex align-items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20"
                                    height="20" viewBox="0 0 20 20" fill="none">
                                    <g clipPath="url(#clip0_309_579)">
                                      <path
                                        d="M9.78601 15.6577H10.9811C10.9811 15.6577 11.3424 15.6177 11.5261 15.4189C11.6961 15.2364 11.6899 14.8939 11.6899 14.8939C11.6899 14.8939 11.6661 13.29 12.4112 13.0538C13.145 12.8212 14.0876 14.6039 15.0864 15.2902C15.8415 15.809 16.4152 15.6952 16.4152 15.6952L19.0867 15.6577C19.0867 15.6577 20.4843 15.5714 19.8217 14.4726C19.768 14.3826 19.4355 13.6601 17.8354 12.1749C16.1602 10.6198 16.3852 10.8723 18.4029 8.1834C19.6317 6.54577 20.123 5.5457 19.9693 5.11817C19.823 4.71064 18.9192 4.81815 18.9192 4.81815L15.914 4.83565C15.914 4.83565 15.6914 4.80564 15.5252 4.9044C15.3639 5.00191 15.2602 5.22693 15.2602 5.22693C15.2602 5.22693 14.7839 6.49452 14.1488 7.5721C12.81 9.84602 12.2737 9.96603 12.0549 9.82477C11.5461 9.49599 11.6736 8.50217 11.6736 7.79712C11.6736 5.5932 12.0074 4.67438 11.0223 4.43687C10.6948 4.35811 10.4548 4.30561 9.61849 4.29686C8.54591 4.28561 7.6371 4.30061 7.12331 4.55188C6.78078 4.71939 6.51701 5.09317 6.67827 5.11442C6.87704 5.14067 7.32707 5.23568 7.56584 5.5607C7.87461 5.97948 7.86336 6.92205 7.86336 6.92205C7.86336 6.92205 8.04088 9.51599 7.44958 9.83852C7.0433 10.0598 6.48701 9.6085 5.29317 7.5446C4.68188 6.48827 4.21934 5.31943 4.21934 5.31943C4.21934 5.31943 4.13059 5.10192 3.97182 4.98566C3.77931 4.8444 3.50929 4.79939 3.50929 4.79939L0.651577 4.8169C0.651577 4.8169 0.222796 4.8294 0.0652839 5.01566C-0.0747265 5.18192 0.0540331 5.52445 0.0540331 5.52445C0.0540331 5.52445 2.2917 10.7586 4.82439 13.3975C7.14831 15.8165 9.78601 15.6577 9.78601 15.6577Z"
                                        fill="#1E88E5" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_579">
                                        <rect width="20" height="20" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  Vk
                                </Button>
                              </Col>
                              <Col md={3}>
                                <Button variant="white" className="active d-flex align-items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20"
                                    height="20" viewBox="0 0 20 20" fill="none">
                                    <g clipPath="url(#clip0_309_579)">
                                      <path
                                        d="M9.78601 15.6577H10.9811C10.9811 15.6577 11.3424 15.6177 11.5261 15.4189C11.6961 15.2364 11.6899 14.8939 11.6899 14.8939C11.6899 14.8939 11.6661 13.29 12.4112 13.0538C13.145 12.8212 14.0876 14.6039 15.0864 15.2902C15.8415 15.809 16.4152 15.6952 16.4152 15.6952L19.0867 15.6577C19.0867 15.6577 20.4843 15.5714 19.8217 14.4726C19.768 14.3826 19.4355 13.6601 17.8354 12.1749C16.1602 10.6198 16.3852 10.8723 18.4029 8.1834C19.6317 6.54577 20.123 5.5457 19.9693 5.11817C19.823 4.71064 18.9192 4.81815 18.9192 4.81815L15.914 4.83565C15.914 4.83565 15.6914 4.80564 15.5252 4.9044C15.3639 5.00191 15.2602 5.22693 15.2602 5.22693C15.2602 5.22693 14.7839 6.49452 14.1488 7.5721C12.81 9.84602 12.2737 9.96603 12.0549 9.82477C11.5461 9.49599 11.6736 8.50217 11.6736 7.79712C11.6736 5.5932 12.0074 4.67438 11.0223 4.43687C10.6948 4.35811 10.4548 4.30561 9.61849 4.29686C8.54591 4.28561 7.6371 4.30061 7.12331 4.55188C6.78078 4.71939 6.51701 5.09317 6.67827 5.11442C6.87704 5.14067 7.32707 5.23568 7.56584 5.5607C7.87461 5.97948 7.86336 6.92205 7.86336 6.92205C7.86336 6.92205 8.04088 9.51599 7.44958 9.83852C7.0433 10.0598 6.48701 9.6085 5.29317 7.5446C4.68188 6.48827 4.21934 5.31943 4.21934 5.31943C4.21934 5.31943 4.13059 5.10192 3.97182 4.98566C3.77931 4.8444 3.50929 4.79939 3.50929 4.79939L0.651577 4.8169C0.651577 4.8169 0.222796 4.8294 0.0652839 5.01566C-0.0747265 5.18192 0.0540331 5.52445 0.0540331 5.52445C0.0540331 5.52445 2.2917 10.7586 4.82439 13.3975C7.14831 15.8165 9.78601 15.6577 9.78601 15.6577Z"
                                        fill="#1E88E5" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_579">
                                        <rect width="20" height="20" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  Vk
                                </Button>
                              </Col>
                              <Col md={2}>
                                <Button variant="outline-light" className="btn-square btn-md d-flex justify-content-center align-items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20"
                                    height="20" viewBox="0 0 20 20" fill="none">
                                    <g clipPath="url(#clip0_309_579)">
                                      <path
                                        d="M9.78601 15.6577H10.9811C10.9811 15.6577 11.3424 15.6177 11.5261 15.4189C11.6961 15.2364 11.6899 14.8939 11.6899 14.8939C11.6899 14.8939 11.6661 13.29 12.4112 13.0538C13.145 12.8212 14.0876 14.6039 15.0864 15.2902C15.8415 15.809 16.4152 15.6952 16.4152 15.6952L19.0867 15.6577C19.0867 15.6577 20.4843 15.5714 19.8217 14.4726C19.768 14.3826 19.4355 13.6601 17.8354 12.1749C16.1602 10.6198 16.3852 10.8723 18.4029 8.1834C19.6317 6.54577 20.123 5.5457 19.9693 5.11817C19.823 4.71064 18.9192 4.81815 18.9192 4.81815L15.914 4.83565C15.914 4.83565 15.6914 4.80564 15.5252 4.9044C15.3639 5.00191 15.2602 5.22693 15.2602 5.22693C15.2602 5.22693 14.7839 6.49452 14.1488 7.5721C12.81 9.84602 12.2737 9.96603 12.0549 9.82477C11.5461 9.49599 11.6736 8.50217 11.6736 7.79712C11.6736 5.5932 12.0074 4.67438 11.0223 4.43687C10.6948 4.35811 10.4548 4.30561 9.61849 4.29686C8.54591 4.28561 7.6371 4.30061 7.12331 4.55188C6.78078 4.71939 6.51701 5.09317 6.67827 5.11442C6.87704 5.14067 7.32707 5.23568 7.56584 5.5607C7.87461 5.97948 7.86336 6.92205 7.86336 6.92205C7.86336 6.92205 8.04088 9.51599 7.44958 9.83852C7.0433 10.0598 6.48701 9.6085 5.29317 7.5446C4.68188 6.48827 4.21934 5.31943 4.21934 5.31943C4.21934 5.31943 4.13059 5.10192 3.97182 4.98566C3.77931 4.8444 3.50929 4.79939 3.50929 4.79939L0.651577 4.8169C0.651577 4.8169 0.222796 4.8294 0.0652839 5.01566C-0.0747265 5.18192 0.0540331 5.52445 0.0540331 5.52445C0.0540331 5.52445 2.2917 10.7586 4.82439 13.3975C7.14831 15.8165 9.78601 15.6577 9.78601 15.6577Z"
                                        fill="#1E88E5" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_579">
                                        <rect width="20" height="20" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </Button>
                              </Col>
                              <Col md={1}>
                                <Button className="btn-square btn-md btn-dropbox d-flex justify-content-center align-items-center">
                                  <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
                                    width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <g clipPath="url(#clip0_309_464)">
                                      <path
                                        d="M9.78601 15.6577H10.9811C10.9811 15.6577 11.3424 15.6177 11.5261 15.4189C11.6961 15.2364 11.6899 14.8939 11.6899 14.8939C11.6899 14.8939 11.6661 13.29 12.4112 13.0538C13.145 12.8212 14.0876 14.6039 15.0864 15.2902C15.8415 15.809 16.4152 15.6952 16.4152 15.6952L19.0867 15.6577C19.0867 15.6577 20.4843 15.5714 19.8217 14.4726C19.768 14.3826 19.4355 13.6601 17.8354 12.1749C16.1602 10.6198 16.3852 10.8723 18.4029 8.1834C19.6317 6.54577 20.123 5.5457 19.9693 5.11817C19.823 4.71064 18.9192 4.81815 18.9192 4.81815L15.914 4.83565C15.914 4.83565 15.6914 4.80564 15.5252 4.9044C15.3639 5.00191 15.2602 5.22693 15.2602 5.22693C15.2602 5.22693 14.7839 6.49452 14.1488 7.5721C12.81 9.84602 12.2737 9.96603 12.0549 9.82477C11.5461 9.49599 11.6736 8.50217 11.6736 7.79712C11.6736 5.5932 12.0074 4.67438 11.0223 4.43687C10.6948 4.35811 10.4548 4.30561 9.61849 4.29686C8.54591 4.28561 7.6371 4.30061 7.12331 4.55188C6.78078 4.71939 6.51701 5.09317 6.67827 5.11442C6.87704 5.14067 7.32707 5.23568 7.56584 5.5607C7.87461 5.97948 7.86336 6.92205 7.86336 6.92205C7.86336 6.92205 8.04088 9.51599 7.44958 9.83852C7.0433 10.0598 6.48701 9.6085 5.29317 7.5446C4.68188 6.48827 4.21934 5.31943 4.21934 5.31943C4.21934 5.31943 4.13059 5.10192 3.97182 4.98566C3.77931 4.8444 3.50929 4.79939 3.50929 4.79939L0.651577 4.8169C0.651577 4.8169 0.222796 4.8294 0.0652839 5.01566C-0.0747265 5.18192 0.0540331 5.52445 0.0540331 5.52445C0.0540331 5.52445 2.2917 10.7586 4.82439 13.3975C7.14831 15.8165 9.78601 15.6577 9.78601 15.6577Z"
                                        fill="white" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_309_464">
                                        <rect width="20" height="20" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </Button>
                              </Col>
                            </Row>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0"><code className="language-html">
                              <Highlight>
                                {`
<div className="card-body pt-0 btn-spacing">
<Row>
  <Col md={3}>
    <Button className="btn-drive d-flex align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none" >
        <g clipPath="url(#clip0_309_354)">
          <path d="M13.8335 13.75H20.4998L13.8335 1.25H7.16602L13.8335 13.75Z" fill="white" />
          <path d="M6.69023 13.75L3.83398 18.75H17.3752L20.5002 13.75H6.69023Z" fill="white" />
          <path d="M7.16625 1.25L0.5 12.9163L3.83375 18.75L10.385 7.285L7.16625 1.25Z" fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_309_354">
            <rect width="20" height="20" fill="white" transform="translate(0.5)" />
          </clipPath>
        </defs>
      </svg>
      Drive
    </Button>
  </Col>
  <Col md={3}>
    <Button variant="outline-light" className="d-flex align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
        <g clipPath="url(#clip0_309_469)">
          <path d="M13.8335 13.75H20.4998L13.8335 1.25H7.16602L13.8335 13.75Z" fill="#FFC107" />
          <path d="M6.69023 13.75L3.83398 18.75H17.3752L20.5002 13.75H6.69023Z" fill="#2196F3" />
          <path d="M7.16625 1.25L0.5 12.9163L3.83375 18.75L10.385 7.285L7.16625 1.25Z" fill="#4CAF50" />
        </g>
        <defs>
          <clipPath id="clip0_309_469">
            <rect width="20" height="20" fill="white" transform="translate(0.5)" />
          </clipPath>
        </defs>
      </svg>
      Drive
    </Button>
  </Col>
  <Col md={3}>
    <Button variant="white" className="active d-flex align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
        <g clipPath="url(#clip0_309_584)">
          <path d="M13.8335 13.75H20.4998L13.8335 1.25H7.16602L13.8335 13.75Z" fill="#FFC107" />
          <path d="M6.69023 13.75L3.83398 18.75H17.3752L20.5002 13.75H6.69023Z" fill="#2196F3" />
          <path d="M7.16625 1.25L0.5 12.9163L3.83375 18.75L10.385 7.285L7.16625 1.25Z" fill="#4CAF50" />
        </g>
        <defs>
          <clipPath id="clip0_309_584">
            <rect width="20" height="20" fill="white" transform="translate(0.5)" />
          </clipPath>
        </defs>
      </svg>
      Drive
    </Button>
  </Col>
  <Col md={2}>
    <Button variant="outline-light" className="btn-square btn-md d-flex justify-content-center align-items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <g clipPath="url(#clip0_309_164)">
          <path d="M13.3335 13.75H19.9998L13.3335 1.25H6.66602L13.3335 13.75Z" fill="#FFC107" />
          <path d="M6.19023 13.75L3.33398 18.75H16.8752L20.0002 13.75H6.19023Z" fill="#2196F3" />
          <path d="M6.66625 1.25L0 12.9163L3.33375 18.75L9.885 7.285L6.66625 1.25Z" fill="#4CAF50" />
        </g>
        <defs>
          <clipPath id="clip0_309_164">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Button>
  </Col>
  <Col md={1}>
    <Button className="btn-square btn-md btn-drive d-flex justify-content-center align-items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <g clipPath="url(#clip0_309_259)">
          <path d="M13.3335 13.75H19.9998L13.3335 1.25H6.66602L13.3335 13.75Z" fill="white" />
          <path d="M6.19023 13.75L3.33398 18.75H16.8752L20.0002 13.75H6.19023Z" fill="white" />
          <path d="M6.66625 1.25L0 12.9163L3.33375 18.75L9.885 7.285L6.66625 1.25Z" fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_309_259">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Button>
  </Col>
  <Col md={3}>
    <Button className="btn-envato d-flex align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <g clipPath="url(#clip0_309_264)">
          <path d="M16.0866 0.109612C15.3716 -0.241644 11.744 0.159612 9.12898 2.6684C5.00892 6.78222 5.10767 12.2024 5.10767 12.2024C5.10767 12.2024 4.97142 12.7598 4.39141 11.951C3.12139 10.3323 3.7864 6.60846 3.8614 6.0897C3.9664 5.35844 3.50015 5.33719 3.30639 5.57845C-1.28368 11.951 2.86139 17.1686 5.57518 18.8249C8.75273 20.7637 15.0203 20.7624 17.5166 15.2623C20.6267 8.41349 16.9829 0.548369 16.0866 0.109612Z" fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_309_264">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
      Envato
    </Button>
  </Col>
  <Col md={3}>
    <Button variant="outline-light" className="d-flex align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="20" height="20" viewBox="0 0 20 20"
        fill="none">
        <g clipPath="url(#clip0_309_475)">
          <path
            d="M16.0866 0.109612C15.3716 -0.241644 11.744 0.159612 9.12898 2.6684C5.00892 6.78222 5.10767 12.2024 5.10767 12.2024C5.10767 12.2024 4.97142 12.7598 4.39141 11.951C3.12139 10.3323 3.7864 6.60846 3.8614 6.0897C3.9664 5.35844 3.50015 5.33719 3.30639 5.57845C-1.28368 11.951 2.86139 17.1686 5.57518 18.8249C8.75273 20.7637 15.0203 20.7624 17.5166 15.2623C20.6267 8.41349 16.9829 0.548369 16.0866 0.109612Z"
            fill="#7CB342" />
        </g>
        <defs>
          <clipPath id="clip0_309_4751">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
      Envato
    </Button>
  </Col>
  <Col md={3}>
    <Button variant="white" className="active d-flex align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="20" height="20" viewBox="0 0 20 20"
        fill="none">
        <g clipPath="url(#clip0_309_475)">
          <path
            d="M16.0866 0.109612C15.3716 -0.241644 11.744 0.159612 9.12898 2.6684C5.00892 6.78222 5.10767 12.2024 5.10767 12.2024C5.10767 12.2024 4.97142 12.7598 4.39141 11.951C3.12139 10.3323 3.7864 6.60846 3.8614 6.0897C3.9664 5.35844 3.50015 5.33719 3.30639 5.57845C-1.28368 11.951 2.86139 17.1686 5.57518 18.8249C8.75273 20.7637 15.0203 20.7624 17.5166 15.2623C20.6267 8.41349 16.9829 0.548369 16.0866 0.109612Z"
            fill="#7CB342" />
        </g>
        <defs>
          <clipPath id="clip0_309_4751">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
      Envato
    </Button>
  </Col>
  <Col md={2}>
    <Button variant="outline-light" className="btn-square btn-md d-flex justify-content-center align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="20" height="20" viewBox="0 0 20 20"
        fill="none">
        <g clipPath="url(#clip0_309_475)">
          <path
            d="M16.0866 0.109612C15.3716 -0.241644 11.744 0.159612 9.12898 2.6684C5.00892 6.78222 5.10767 12.2024 5.10767 12.2024C5.10767 12.2024 4.97142 12.7598 4.39141 11.951C3.12139 10.3323 3.7864 6.60846 3.8614 6.0897C3.9664 5.35844 3.50015 5.33719 3.30639 5.57845C-1.28368 11.951 2.86139 17.1686 5.57518 18.8249C8.75273 20.7637 15.0203 20.7624 17.5166 15.2623C20.6267 8.41349 16.9829 0.548369 16.0866 0.109612Z"
            fill="#7CB342" />
        </g>
        <defs>
          <clipPath id="clip0_309_4751">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Button>
  </Col>
  <Col md={1}>
    <Button className="btn-square btn-md btn-envato d-flex justify-content-center align-items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <g clipPath="url(#clip0_309_264)">
          <path d="M16.0866 0.109612C15.3716 -0.241644 11.744 0.159612 9.12898 2.6684C5.00892 6.78222 5.10767 12.2024 5.10767 12.2024C5.10767 12.2024 4.97142 12.7598 4.39141 11.951C3.12139 10.3323 3.7864 6.60846 3.8614 6.0897C3.9664 5.35844 3.50015 5.33719 3.30639 5.57845C-1.28368 11.951 2.86139 17.1686 5.57518 18.8249C8.75273 20.7637 15.0203 20.7624 17.5166 15.2623C20.6267 8.41349 16.9829 0.548369 16.0866 0.109612Z" fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_309_264">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Button>
  </Col>
  <Col md={3}>
    <Button className="btn-linkedin d-flex align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
        <g clipPath="url(#clip0_309_364)">
          <path d="M4.9725 6.25H0.5V20H4.9725V6.25Z" fill="white" />
          <path d="M17.155 6.41125C17.1075 6.39625 17.0625 6.38 17.0125 6.36625C16.9525 6.3525 16.8925 6.34125 16.8312 6.33125C16.5937 6.28375 16.3338 6.25 16.0288 6.25C13.4213 6.25 11.7675 8.14625 11.2225 8.87875V6.25H6.75V20H11.2225V12.5C11.2225 12.5 14.6025 7.7925 16.0288 11.25C16.0288 14.3363 16.0288 20 16.0288 20H20.5V10.7212C20.5 8.64375 19.0763 6.9125 17.155 6.41125Z" fill="white" />
          <path d="M2.6875 4.375C3.89562 4.375 4.875 3.39562 4.875 2.1875C4.875 0.979377 3.89562 0 2.6875 0C1.47938 0 0.5 0.979377 0.5 2.1875C0.5 3.39562 1.47938 4.375 2.6875 4.375Z" fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_309_364">
            <rect width="20" height="20" fill="white" transform="translate(0.5)" />
          </clipPath>
        </defs>
      </svg>
      LinkedIn
    </Button>
  </Col>
  <Col md={3}>
    <Button variant="outline-light" className="d-flex align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
        <g clipPath="url(#clip0_309_479)">
          <path d="M4.9725 6.25H0.5V20H4.9725V6.25Z" fill="#1976D2" />
          <path d="M17.155 6.41125C17.1075 6.39625 17.0625 6.38 17.0125 6.36625C16.9525 6.3525 16.8925 6.34125 16.8312 6.33125C16.5937 6.28375 16.3338 6.25 16.0288 6.25C13.4213 6.25 11.7675 8.14625 11.2225 8.87875V6.25H6.75V20H11.2225V12.5C11.2225 12.5 14.6025 7.7925 16.0288 11.25C16.0288 14.3363 16.0288 20 16.0288 20H20.5V10.7212C20.5 8.64375 19.0763 6.9125 17.155 6.41125Z" fill="#1976D2" />
          <path d="M2.6875 4.375C3.89562 4.375 4.875 3.39562 4.875 2.1875C4.875 0.979377 3.89562 0 2.6875 0C1.47938 0 0.5 0.979377 0.5 2.1875C0.5 3.39562 1.47938 4.375 2.6875 4.375Z" fill="#1976D2" />
        </g>
        <defs>
          <clipPath id="clip0_309_479">
            <rect width="20" height="20" fill="white" transform="translate(0.5)" />
          </clipPath>
        </defs>
      </svg>
      LinkedIn
    </Button>
  </Col>
  <Col md={3}>
    <Button variant="white" className="active d-flex align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
        <g clipPath="url(#clip0_309_4791)">
          <path d="M4.9725 6.25H0.5V20H4.9725V6.25Z" fill="#1976D2" />
          <path d="M17.155 6.41125C17.1075 6.39625 17.0625 6.38 17.0125 6.36625C16.9525 6.3525 16.8925 6.34125 16.8312 6.33125C16.5937 6.28375 16.3338 6.25 16.0288 6.25C13.4213 6.25 11.7675 8.14625 11.2225 8.87875V6.25H6.75V20H11.2225V12.5C11.2225 12.5 14.6025 7.7925 16.0288 11.25C16.0288 14.3363 16.0288 20 16.0288 20H20.5V10.7212C20.5 8.64375 19.0763 6.9125 17.155 6.41125Z" fill="#1976D2" />
          <path d="M2.6875 4.375C3.89562 4.375 4.875 3.39562 4.875 2.1875C4.875 0.979377 3.89562 0 2.6875 0C1.47938 0 0.5 0.979377 0.5 2.1875C0.5 3.39562 1.47938 4.375 2.6875 4.375Z" fill="#1976D2" />
        </g>
        <defs>
          <clipPath id="clip0_309_4791">
            <rect width="20" height="20" fill="white" transform="translate(0.5)" />
          </clipPath>
        </defs>
      </svg>
      LinkedIn
    </Button>
  </Col>
  <Col md={2}>
    <Button variant="outline-light" className="btn-square btn-md d-flex justify-content-center align-items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
        <g clipPath="url(#clip0_309_4792)">
          <path d="M4.9725 6.25H0.5V20H4.9725V6.25Z" fill="#1976D2" />
          <path d="M17.155 6.41125C17.1075 6.39625 17.0625 6.38 17.0125 6.36625C16.9525 6.3525 16.8925 6.34125 16.8312 6.33125C16.5937 6.28375 16.3338 6.25 16.0288 6.25C13.4213 6.25 11.7675 8.14625 11.2225 8.87875V6.25H6.75V20H11.2225V12.5C11.2225 12.5 14.6025 7.7925 16.0288 11.25C16.0288 14.3363 16.0288 20 16.0288 20H20.5V10.7212C20.5 8.64375 19.0763 6.9125 17.155 6.41125Z" fill="#1976D2" />
          <path d="M2.6875 4.375C3.89562 4.375 4.875 3.39562 4.875 2.1875C4.875 0.979377 3.89562 0 2.6875 0C1.47938 0 0.5 0.979377 0.5 2.1875C0.5 3.39562 1.47938 4.375 2.6875 4.375Z" fill="#1976D2" />
        </g>
        <defs>
          <clipPath id="clip0_309_4792">
            <rect width="20" height="20" fill="white" transform="translate(0.5)" />
          </clipPath>
        </defs>
      </svg>
    </Button>
  </Col>
  <Col md={1}>
    <Button className="btn-square btn-md btn-linkedin d-flex justify-content-center align-items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <g clipPath="url(#clip0_309_267)">
          <path d="M4.4725 6.25H0V20H4.4725V6.25Z" fill="white" />
          <path d="M16.655 6.41125C16.6075 6.39625 16.5625 6.38 16.5125 6.36625C16.4525 6.3525 16.3925 6.34125 16.3312 6.33125C16.0937 6.28375 15.8338 6.25 15.5288 6.25C12.9213 6.25 11.2675 8.14625 10.7225 8.87875V6.25H6.25V20H10.7225V12.5C10.7225 12.5 14.1025 7.7925 15.5288 11.25C15.5288 14.3363 15.5288 20 15.5288 20H20V10.7212C20 8.64375 18.5763 6.9125 16.655 6.41125Z" fill="white" />
          <path d="M2.1875 4.375C3.39562 4.375 4.375 3.39562 4.375 2.1875C4.375 0.979377 3.39562 0 2.1875 0C0.979377 0 0 0.979377 0 2.1875C0 3.39562 0.979377 4.375 2.1875 4.375Z" fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_309_267">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Button>
  </Col>
  <Col md={3}>
    <Button className="btn-Skype d-flex align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="20" height="20" viewBox="0 0 20 20"
        fill="none">
        <g clipPath="url(#clip0_309_371)">
          <path
            d="M19.645 10.1038C19.645 4.91 15.375 0.69875 10.1062 0.69875C9.55125 0.69875 9.00625 0.74625 8.475 0.83625C7.6225 0.3075 6.61375 0 5.5325 0C2.47625 0 0 2.44125 0 5.455C0 6.46125 0.2775 7.4025 0.76 8.21375C0.63375 8.82375 0.56625 9.4575 0.56625 10.1038C0.56625 15.2987 4.8375 19.51 10.105 19.51C10.7025 19.51 11.285 19.455 11.8525 19.3525C12.6325 19.765 13.5212 20 14.4688 20C17.5238 20 20 17.5575 20 14.5463C20 13.6763 19.7925 12.8538 19.425 12.1238C19.57 11.4713 19.645 10.7975 19.645 10.1038Z"
            fill="white" />
          <path
            d="M14.9994 14.5987C14.5581 15.215 13.9069 15.7025 13.0606 16.0475C12.2244 16.39 11.2231 16.5662 10.0806 16.5662C8.71063 16.5662 7.56187 16.3287 6.66437 15.8587C6.02312 15.5175 5.49562 15.0562 5.09437 14.4837C4.68812 13.9087 4.48438 13.3375 4.48438 12.7837C4.48438 12.4412 4.61813 12.1412 4.88188 11.8975C5.14313 11.6537 5.47813 11.5325 5.87813 11.5325C6.20563 11.5325 6.48813 11.6287 6.71813 11.82C6.93688 12.005 7.12563 12.2775 7.27688 12.6262C7.44563 13.0087 7.62937 13.3312 7.82312 13.5825C8.01187 13.8287 8.28063 14.0337 8.62438 14.195C8.97063 14.355 9.43687 14.4387 10.0094 14.4387C10.7981 14.4387 11.4456 14.2712 11.9306 13.945C12.4069 13.6262 12.6369 13.2412 12.6369 12.7712C12.6369 12.4012 12.5156 12.1087 12.2694 11.88C12.0094 11.64 11.6669 11.4537 11.2519 11.325C10.8181 11.1925 10.2294 11.0475 9.50187 10.8975C8.51062 10.6887 7.66937 10.4425 7.00187 10.16C6.31812 9.8725 5.76563 9.475 5.36313 8.97875C4.95313 8.47125 4.74563 7.8375 4.74563 7.0925C4.74563 6.3825 4.96313 5.7425 5.39313 5.19C5.81938 4.64125 6.44188 4.2125 7.24563 3.92125C8.03688 3.6325 8.97813 3.4875 10.0444 3.4875C10.8956 3.4875 11.6444 3.585 12.2706 3.7775C12.8994 3.97 13.4294 4.23 13.8456 4.55125C14.2656 4.87625 14.5781 5.22 14.7731 5.58C14.9706 5.9425 15.0719 6.30375 15.0719 6.6525C15.0719 6.98875 14.9406 7.295 14.6806 7.56C14.4181 7.8275 14.0881 7.9625 13.7006 7.9625C13.3481 7.9625 13.0706 7.87625 12.8794 7.71C12.7006 7.55375 12.5144 7.31 12.3094 6.9625C12.0719 6.5175 11.7831 6.16625 11.4531 5.9175C11.1319 5.67625 10.5969 5.55625 9.85938 5.55625C9.17688 5.55625 8.61938 5.69125 8.20688 5.95875C7.80938 6.215 7.61563 6.51 7.61563 6.86C7.61563 7.07375 7.67812 7.2525 7.80687 7.40625C7.94187 7.57125 8.13312 7.7125 8.37562 7.8325C8.62563 7.95625 8.88438 8.05625 9.14313 8.12625C9.40813 8.19875 9.85187 8.3075 10.4631 8.44625C11.2356 8.60875 11.9444 8.7925 12.5719 8.99125C13.2081 9.19 13.7556 9.43625 14.2056 9.725C14.6619 10.0187 15.0231 10.3937 15.2806 10.8437C15.5381 11.2975 15.6681 11.8537 15.6681 12.5012C15.6669 13.275 15.4419 13.9812 14.9994 14.5987Z"
            fill="#03A9F4" />
        </g>
        <defs>
          <clipPath id="clip0_309_371">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
      Skype
    </Button>
  </Col>
  <Col md={3}>
    <Button variant="outline-light" className="d-flex align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="20" height="20" viewBox="0 0 20 20"
        fill="none">
        <g clipPath="url(#clip0_309_486)">
          <path
            d="M19.645 10.1038C19.645 4.91 15.375 0.69875 10.1062 0.69875C9.55125 0.69875 9.00625 0.74625 8.475 0.83625C7.6225 0.3075 6.61375 0 5.5325 0C2.47625 0 0 2.44125 0 5.455C0 6.46125 0.2775 7.4025 0.76 8.21375C0.63375 8.82375 0.56625 9.4575 0.56625 10.1038C0.56625 15.2987 4.8375 19.51 10.105 19.51C10.7025 19.51 11.285 19.455 11.8525 19.3525C12.6325 19.765 13.5212 20 14.4688 20C17.5238 20 20 17.5575 20 14.5463C20 13.6763 19.7925 12.8538 19.425 12.1238C19.57 11.4713 19.645 10.7975 19.645 10.1038Z"
            fill="#03A9F4" />
          <path
            d="M14.9994 14.5987C14.5581 15.215 13.9069 15.7025 13.0606 16.0475C12.2244 16.39 11.2231 16.5662 10.0806 16.5662C8.71063 16.5662 7.56187 16.3287 6.66437 15.8587C6.02312 15.5175 5.49562 15.0562 5.09437 14.4837C4.68812 13.9087 4.48438 13.3375 4.48438 12.7837C4.48438 12.4412 4.61813 12.1412 4.88188 11.8975C5.14313 11.6537 5.47813 11.5325 5.87813 11.5325C6.20563 11.5325 6.48813 11.6287 6.71813 11.82C6.93688 12.005 7.12563 12.2775 7.27688 12.6262C7.44563 13.0087 7.62937 13.3312 7.82312 13.5825C8.01187 13.8287 8.28063 14.0337 8.62438 14.195C8.97063 14.355 9.43687 14.4387 10.0094 14.4387C10.7981 14.4387 11.4456 14.2712 11.9306 13.945C12.4069 13.6262 12.6369 13.2412 12.6369 12.7712C12.6369 12.4012 12.5156 12.1087 12.2694 11.88C12.0094 11.64 11.6669 11.4537 11.2519 11.325C10.8181 11.1925 10.2294 11.0475 9.50187 10.8975C8.51062 10.6887 7.66937 10.4425 7.00187 10.16C6.31812 9.8725 5.76563 9.475 5.36313 8.97875C4.95313 8.47125 4.74563 7.8375 4.74563 7.0925C4.74563 6.3825 4.96313 5.7425 5.39313 5.19C5.81938 4.64125 6.44188 4.2125 7.24563 3.92125C8.03688 3.6325 8.97813 3.4875 10.0444 3.4875C10.8956 3.4875 11.6444 3.585 12.2706 3.7775C12.8994 3.97 13.4294 4.23 13.8456 4.55125C14.2656 4.87625 14.5781 5.22 14.7731 5.58C14.9706 5.9425 15.0719 6.30375 15.0719 6.6525C15.0719 6.98875 14.9406 7.295 14.6806 7.56C14.4181 7.8275 14.0881 7.9625 13.7006 7.9625C13.3481 7.9625 13.0706 7.87625 12.8794 7.71C12.7006 7.55375 12.5144 7.31 12.3094 6.9625C12.0719 6.5175 11.7831 6.16625 11.4531 5.9175C11.1319 5.67625 10.5969 5.55625 9.85938 5.55625C9.17688 5.55625 8.61938 5.69125 8.20688 5.95875C7.80938 6.215 7.61563 6.51 7.61563 6.86C7.61563 7.07375 7.67812 7.2525 7.80687 7.40625C7.94187 7.57125 8.13312 7.7125 8.37562 7.8325C8.62563 7.95625 8.88438 8.05625 9.14313 8.12625C9.40813 8.19875 9.85187 8.3075 10.4631 8.44625C11.2356 8.60875 11.9444 8.7925 12.5719 8.99125C13.2081 9.19 13.7556 9.43625 14.2056 9.725C14.6619 10.0187 15.0231 10.3937 15.2806 10.8437C15.5381 11.2975 15.6681 11.8537 15.6681 12.5012C15.6669 13.275 15.4419 13.9812 14.9994 14.5987Z"
            fill="#FAFAFA" />
        </g>
        <defs>
          <clipPath id="clip0_309_4868">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
      Skype
    </Button>
  </Col>
  <Col md={3}>
    <Button variant="white" className="active d-flex align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="20" height="20" viewBox="0 0 20 20"
        fill="none">
        <g clipPath="url(#clip0_309_486)">
          <path
            d="M19.645 10.1038C19.645 4.91 15.375 0.69875 10.1062 0.69875C9.55125 0.69875 9.00625 0.74625 8.475 0.83625C7.6225 0.3075 6.61375 0 5.5325 0C2.47625 0 0 2.44125 0 5.455C0 6.46125 0.2775 7.4025 0.76 8.21375C0.63375 8.82375 0.56625 9.4575 0.56625 10.1038C0.56625 15.2987 4.8375 19.51 10.105 19.51C10.7025 19.51 11.285 19.455 11.8525 19.3525C12.6325 19.765 13.5212 20 14.4688 20C17.5238 20 20 17.5575 20 14.5463C20 13.6763 19.7925 12.8538 19.425 12.1238C19.57 11.4713 19.645 10.7975 19.645 10.1038Z"
            fill="#03A9F4" />
          <path
            d="M14.9994 14.5987C14.5581 15.215 13.9069 15.7025 13.0606 16.0475C12.2244 16.39 11.2231 16.5662 10.0806 16.5662C8.71063 16.5662 7.56187 16.3287 6.66437 15.8587C6.02312 15.5175 5.49562 15.0562 5.09437 14.4837C4.68812 13.9087 4.48438 13.3375 4.48438 12.7837C4.48438 12.4412 4.61813 12.1412 4.88188 11.8975C5.14313 11.6537 5.47813 11.5325 5.87813 11.5325C6.20563 11.5325 6.48813 11.6287 6.71813 11.82C6.93688 12.005 7.12563 12.2775 7.27688 12.6262C7.44563 13.0087 7.62937 13.3312 7.82312 13.5825C8.01187 13.8287 8.28063 14.0337 8.62438 14.195C8.97063 14.355 9.43687 14.4387 10.0094 14.4387C10.7981 14.4387 11.4456 14.2712 11.9306 13.945C12.4069 13.6262 12.6369 13.2412 12.6369 12.7712C12.6369 12.4012 12.5156 12.1087 12.2694 11.88C12.0094 11.64 11.6669 11.4537 11.2519 11.325C10.8181 11.1925 10.2294 11.0475 9.50187 10.8975C8.51062 10.6887 7.66937 10.4425 7.00187 10.16C6.31812 9.8725 5.76563 9.475 5.36313 8.97875C4.95313 8.47125 4.74563 7.8375 4.74563 7.0925C4.74563 6.3825 4.96313 5.7425 5.39313 5.19C5.81938 4.64125 6.44188 4.2125 7.24563 3.92125C8.03688 3.6325 8.97813 3.4875 10.0444 3.4875C10.8956 3.4875 11.6444 3.585 12.2706 3.7775C12.8994 3.97 13.4294 4.23 13.8456 4.55125C14.2656 4.87625 14.5781 5.22 14.7731 5.58C14.9706 5.9425 15.0719 6.30375 15.0719 6.6525C15.0719 6.98875 14.9406 7.295 14.6806 7.56C14.4181 7.8275 14.0881 7.9625 13.7006 7.9625C13.3481 7.9625 13.0706 7.87625 12.8794 7.71C12.7006 7.55375 12.5144 7.31 12.3094 6.9625C12.0719 6.5175 11.7831 6.16625 11.4531 5.9175C11.1319 5.67625 10.5969 5.55625 9.85938 5.55625C9.17688 5.55625 8.61938 5.69125 8.20688 5.95875C7.80938 6.215 7.61563 6.51 7.61563 6.86C7.61563 7.07375 7.67812 7.2525 7.80687 7.40625C7.94187 7.57125 8.13312 7.7125 8.37562 7.8325C8.62563 7.95625 8.88438 8.05625 9.14313 8.12625C9.40813 8.19875 9.85187 8.3075 10.4631 8.44625C11.2356 8.60875 11.9444 8.7925 12.5719 8.99125C13.2081 9.19 13.7556 9.43625 14.2056 9.725C14.6619 10.0187 15.0231 10.3937 15.2806 10.8437C15.5381 11.2975 15.6681 11.8537 15.6681 12.5012C15.6669 13.275 15.4419 13.9812 14.9994 14.5987Z"
            fill="#FAFAFA" />
        </g>
        <defs>
          <clipPath id="clip0_309_4868">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
      Skype
    </Button>
  </Col>
  <Col md={2}>
    <Button variant="outline-light" className="btn-square btn-md d-flex justify-content-center align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="20" height="20" viewBox="0 0 20 20"
        fill="none">
        <g clipPath="url(#clip0_309_486)">
          <path
            d="M19.645 10.1038C19.645 4.91 15.375 0.69875 10.1062 0.69875C9.55125 0.69875 9.00625 0.74625 8.475 0.83625C7.6225 0.3075 6.61375 0 5.5325 0C2.47625 0 0 2.44125 0 5.455C0 6.46125 0.2775 7.4025 0.76 8.21375C0.63375 8.82375 0.56625 9.4575 0.56625 10.1038C0.56625 15.2987 4.8375 19.51 10.105 19.51C10.7025 19.51 11.285 19.455 11.8525 19.3525C12.6325 19.765 13.5212 20 14.4688 20C17.5238 20 20 17.5575 20 14.5463C20 13.6763 19.7925 12.8538 19.425 12.1238C19.57 11.4713 19.645 10.7975 19.645 10.1038Z"
            fill="#03A9F4" />
          <path
            d="M14.9994 14.5987C14.5581 15.215 13.9069 15.7025 13.0606 16.0475C12.2244 16.39 11.2231 16.5662 10.0806 16.5662C8.71063 16.5662 7.56187 16.3287 6.66437 15.8587C6.02312 15.5175 5.49562 15.0562 5.09437 14.4837C4.68812 13.9087 4.48438 13.3375 4.48438 12.7837C4.48438 12.4412 4.61813 12.1412 4.88188 11.8975C5.14313 11.6537 5.47813 11.5325 5.87813 11.5325C6.20563 11.5325 6.48813 11.6287 6.71813 11.82C6.93688 12.005 7.12563 12.2775 7.27688 12.6262C7.44563 13.0087 7.62937 13.3312 7.82312 13.5825C8.01187 13.8287 8.28063 14.0337 8.62438 14.195C8.97063 14.355 9.43687 14.4387 10.0094 14.4387C10.7981 14.4387 11.4456 14.2712 11.9306 13.945C12.4069 13.6262 12.6369 13.2412 12.6369 12.7712C12.6369 12.4012 12.5156 12.1087 12.2694 11.88C12.0094 11.64 11.6669 11.4537 11.2519 11.325C10.8181 11.1925 10.2294 11.0475 9.50187 10.8975C8.51062 10.6887 7.66937 10.4425 7.00187 10.16C6.31812 9.8725 5.76563 9.475 5.36313 8.97875C4.95313 8.47125 4.74563 7.8375 4.74563 7.0925C4.74563 6.3825 4.96313 5.7425 5.39313 5.19C5.81938 4.64125 6.44188 4.2125 7.24563 3.92125C8.03688 3.6325 8.97813 3.4875 10.0444 3.4875C10.8956 3.4875 11.6444 3.585 12.2706 3.7775C12.8994 3.97 13.4294 4.23 13.8456 4.55125C14.2656 4.87625 14.5781 5.22 14.7731 5.58C14.9706 5.9425 15.0719 6.30375 15.0719 6.6525C15.0719 6.98875 14.9406 7.295 14.6806 7.56C14.4181 7.8275 14.0881 7.9625 13.7006 7.9625C13.3481 7.9625 13.0706 7.87625 12.8794 7.71C12.7006 7.55375 12.5144 7.31 12.3094 6.9625C12.0719 6.5175 11.7831 6.16625 11.4531 5.9175C11.1319 5.67625 10.5969 5.55625 9.85938 5.55625C9.17688 5.55625 8.61938 5.69125 8.20688 5.95875C7.80938 6.215 7.61563 6.51 7.61563 6.86C7.61563 7.07375 7.67812 7.2525 7.80687 7.40625C7.94187 7.57125 8.13312 7.7125 8.37562 7.8325C8.62563 7.95625 8.88438 8.05625 9.14313 8.12625C9.40813 8.19875 9.85187 8.3075 10.4631 8.44625C11.2356 8.60875 11.9444 8.7925 12.5719 8.99125C13.2081 9.19 13.7556 9.43625 14.2056 9.725C14.6619 10.0187 15.0231 10.3937 15.2806 10.8437C15.5381 11.2975 15.6681 11.8537 15.6681 12.5012C15.6669 13.275 15.4419 13.9812 14.9994 14.5987Z"
            fill="#FAFAFA" />
        </g>
        <defs>
          <clipPath id="clip0_309_4868">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Button>
  </Col>
  <Col md={1}>
    <Button className="btn-square btn-md btn-Skype d-flex justify-content-center align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="20" height="20" viewBox="0 0 20 20"
        fill="none">
        <g clipPath="url(#clip0_309_371)">
          <path
            d="M19.645 10.1038C19.645 4.91 15.375 0.69875 10.1062 0.69875C9.55125 0.69875 9.00625 0.74625 8.475 0.83625C7.6225 0.3075 6.61375 0 5.5325 0C2.47625 0 0 2.44125 0 5.455C0 6.46125 0.2775 7.4025 0.76 8.21375C0.63375 8.82375 0.56625 9.4575 0.56625 10.1038C0.56625 15.2987 4.8375 19.51 10.105 19.51C10.7025 19.51 11.285 19.455 11.8525 19.3525C12.6325 19.765 13.5212 20 14.4688 20C17.5238 20 20 17.5575 20 14.5463C20 13.6763 19.7925 12.8538 19.425 12.1238C19.57 11.4713 19.645 10.7975 19.645 10.1038Z"
            fill="white" />
          <path
            d="M14.9994 14.5987C14.5581 15.215 13.9069 15.7025 13.0606 16.0475C12.2244 16.39 11.2231 16.5662 10.0806 16.5662C8.71063 16.5662 7.56187 16.3287 6.66437 15.8587C6.02312 15.5175 5.49562 15.0562 5.09437 14.4837C4.68812 13.9087 4.48438 13.3375 4.48438 12.7837C4.48438 12.4412 4.61813 12.1412 4.88188 11.8975C5.14313 11.6537 5.47813 11.5325 5.87813 11.5325C6.20563 11.5325 6.48813 11.6287 6.71813 11.82C6.93688 12.005 7.12563 12.2775 7.27688 12.6262C7.44563 13.0087 7.62937 13.3312 7.82312 13.5825C8.01187 13.8287 8.28063 14.0337 8.62438 14.195C8.97063 14.355 9.43687 14.4387 10.0094 14.4387C10.7981 14.4387 11.4456 14.2712 11.9306 13.945C12.4069 13.6262 12.6369 13.2412 12.6369 12.7712C12.6369 12.4012 12.5156 12.1087 12.2694 11.88C12.0094 11.64 11.6669 11.4537 11.2519 11.325C10.8181 11.1925 10.2294 11.0475 9.50187 10.8975C8.51062 10.6887 7.66937 10.4425 7.00187 10.16C6.31812 9.8725 5.76563 9.475 5.36313 8.97875C4.95313 8.47125 4.74563 7.8375 4.74563 7.0925C4.74563 6.3825 4.96313 5.7425 5.39313 5.19C5.81938 4.64125 6.44188 4.2125 7.24563 3.92125C8.03688 3.6325 8.97813 3.4875 10.0444 3.4875C10.8956 3.4875 11.6444 3.585 12.2706 3.7775C12.8994 3.97 13.4294 4.23 13.8456 4.55125C14.2656 4.87625 14.5781 5.22 14.7731 5.58C14.9706 5.9425 15.0719 6.30375 15.0719 6.6525C15.0719 6.98875 14.9406 7.295 14.6806 7.56C14.4181 7.8275 14.0881 7.9625 13.7006 7.9625C13.3481 7.9625 13.0706 7.87625 12.8794 7.71C12.7006 7.55375 12.5144 7.31 12.3094 6.9625C12.0719 6.5175 11.7831 6.16625 11.4531 5.9175C11.1319 5.67625 10.5969 5.55625 9.85938 5.55625C9.17688 5.55625 8.61938 5.69125 8.20688 5.95875C7.80938 6.215 7.61563 6.51 7.61563 6.86C7.61563 7.07375 7.67812 7.2525 7.80687 7.40625C7.94187 7.57125 8.13312 7.7125 8.37562 7.8325C8.62563 7.95625 8.88438 8.05625 9.14313 8.12625C9.40813 8.19875 9.85187 8.3075 10.4631 8.44625C11.2356 8.60875 11.9444 8.7925 12.5719 8.99125C13.2081 9.19 13.7556 9.43625 14.2056 9.725C14.6619 10.0187 15.0231 10.3937 15.2806 10.8437C15.5381 11.2975 15.6681 11.8537 15.6681 12.5012C15.6669 13.275 15.4419 13.9812 14.9994 14.5987Z"
            fill="#03A9F4" />
        </g>
        <defs>
          <clipPath id="clip0_309_371">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Button>
  </Col>
  <Col md={3}>
    <Button className="btn-flickr d-flex align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="21" height="20" viewBox="0 0 21 20"
        fill="none">
        <g clipPath="url(#clip0_309_376)">
          <path
            d="M16.125 14.375C18.5412 14.375 20.5 12.4162 20.5 10C20.5 7.58375 18.5412 5.625 16.125 5.625C13.7088 5.625 11.75 7.58375 11.75 10C11.75 12.4162 13.7088 14.375 16.125 14.375Z"
            fill="white" />
          <path
            d="M4.875 14.375C7.29125 14.375 9.25 12.4162 9.25 10C9.25 7.58375 7.29125 5.625 4.875 5.625C2.45875 5.625 0.5 7.58375 0.5 10C0.5 12.4162 2.45875 14.375 4.875 14.375Z"
            fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_309_376">
            <rect width="20" height="20" fill="white"
              transform="translate(0.5)" />
          </clipPath>
        </defs>
      </svg>
      Flickr
    </Button>
  </Col>
  <Col md={3}>
    <Button variant="outline-light" className="d-flex align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="21" height="20" viewBox="0 0 21 20"
        fill="none">
        <g clipPath="url(#clip0_309_491)">
          <path
            d="M16.125 14.375C18.5412 14.375 20.5 12.4162 20.5 10C20.5 7.58375 18.5412 5.625 16.125 5.625C13.7088 5.625 11.75 7.58375 11.75 10C11.75 12.4162 13.7088 14.375 16.125 14.375Z"
            fill="#EC407A" />
          <path
            d="M4.875 14.375C7.29125 14.375 9.25 12.4162 9.25 10C9.25 7.58375 7.29125 5.625 4.875 5.625C2.45875 5.625 0.5 7.58375 0.5 10C0.5 12.4162 2.45875 14.375 4.875 14.375Z"
            fill="#3F51B5" />
        </g>
        <defs>
          <rect width="20" height="20" fill="white"
            transform="translate(0.5)" />
        </defs>
      </svg>
      Flickr
    </Button>
  </Col>
  <Col md={3}>
    <Button variant="white" className="active d-flex align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="21" height="20" viewBox="0 0 21 20"
        fill="none">
        <g clipPath="url(#clip0_309_491)">
          <path
            d="M16.125 14.375C18.5412 14.375 20.5 12.4162 20.5 10C20.5 7.58375 18.5412 5.625 16.125 5.625C13.7088 5.625 11.75 7.58375 11.75 10C11.75 12.4162 13.7088 14.375 16.125 14.375Z"
            fill="#EC407A" />
          <path
            d="M4.875 14.375C7.29125 14.375 9.25 12.4162 9.25 10C9.25 7.58375 7.29125 5.625 4.875 5.625C2.45875 5.625 0.5 7.58375 0.5 10C0.5 12.4162 2.45875 14.375 4.875 14.375Z"
            fill="#3F51B5" />
        </g>
        <defs>
          <rect width="20" height="20" fill="white"
            transform="translate(0.5)" />
        </defs>
      </svg>
      Flickr
    </Button>
  </Col>
  <Col md={2}>
    <Button variant="outline-light" className="btn-square btn-md d-flex justify-content-center align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="21" height="20" viewBox="0 0 21 20"
        fill="none">
        <g clipPath="url(#clip0_309_491)">
          <path
            d="M16.125 14.375C18.5412 14.375 20.5 12.4162 20.5 10C20.5 7.58375 18.5412 5.625 16.125 5.625C13.7088 5.625 11.75 7.58375 11.75 10C11.75 12.4162 13.7088 14.375 16.125 14.375Z"
            fill="#EC407A" />
          <path
            d="M4.875 14.375C7.29125 14.375 9.25 12.4162 9.25 10C9.25 7.58375 7.29125 5.625 4.875 5.625C2.45875 5.625 0.5 7.58375 0.5 10C0.5 12.4162 2.45875 14.375 4.875 14.375Z"
            fill="#3F51B5" />
        </g>
        <defs>
          <rect width="20" height="20" fill="white"
            transform="translate(0.5)" />
        </defs>
      </svg>
    </Button>
  </Col>
  <Col md={1}>
    <Button className="btn-square btn-md btn-flickr d-flex justify-content-center align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="21" height="20" viewBox="0 0 21 20"
        fill="none">
        <g clipPath="url(#clip0_309_376)">
          <path
            d="M16.125 14.375C18.5412 14.375 20.5 12.4162 20.5 10C20.5 7.58375 18.5412 5.625 16.125 5.625C13.7088 5.625 11.75 7.58375 11.75 10C11.75 12.4162 13.7088 14.375 16.125 14.375Z"
            fill="white" />
          <path
            d="M4.875 14.375C7.29125 14.375 9.25 12.4162 9.25 10C9.25 7.58375 7.29125 5.625 4.875 5.625C2.45875 5.625 0.5 7.58375 0.5 10C0.5 12.4162 2.45875 14.375 4.875 14.375Z"
            fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_309_376">
            <rect width="20" height="20" fill="white"
              transform="translate(0.5)" />
          </clipPath>
        </defs>
      </svg>
    </Button>
  </Col>
  <Col md={3}>
    <Button className="btn-photo d-flex align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="20" height="20" viewBox="0 0 20 20"
        fill="none">
        <g clipPath="url(#clip0_309_381)">
          <path d="M5 5L0 10H7.5L9.375 9.375L5 5Z"
            fill="white" />
          <path d="M5 5L9.375 9.375L10 7.5V5H5Z"
            fill="white" />
          <path d="M5 15L10 20V12.5L9.375 10.625L5 15Z"
            fill="white" />
          <path d="M5 15L9.375 10.625L7.5 10H5V15Z"
            fill="white" />
          <path d="M15 15L20 10H12.5L10.625 10.625L15 15Z"
            fill="white" />
          <path d="M15 15L10.625 10.625L10 12.5V15H15Z"
            fill="white" />
          <path d="M15 5L10 0V7.5L10.625 9.375L15 5Z"
            fill="white" />
          <path d="M15 5L10.625 9.375L12.5 10H15V5Z"
            fill="white" />
        </g>
        <clipPath id="clip0_309_381">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </svg>
      photo
    </Button>
  </Col>
  <Col md={3}>
    <Button variant="outline-light" className="d-flex align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="20" height="20" viewBox="0 0 20 20"
        fill="none">
        <g clipPath="url(#clip0_309_496)">
          <path d="M5 5L0 10H7.5L9.375 9.375L5 5Z"
            fill="#FFC107" />
          <path d="M5 5L9.375 9.375L10 7.5V5H5Z"
            fill="#FFA000" />
          <path d="M5 15L10 20V12.5L9.375 10.625L5 15Z"
            fill="#4CAF50" />
          <path d="M5 15L9.375 10.625L7.5 10H5V15Z"
            fill="#388E3C" />
          <path d="M15 15L20 10H12.5L10.625 10.625L15 15Z"
            fill="#2196F3" />
          <path d="M15 15L10.625 10.625L10 12.5V15H15Z"
            fill="#1976D2" />
          <path d="M15 5L10 0V7.5L10.625 9.375L15 5Z"
            fill="#F44336" />
          <path d="M15 5L10.625 9.375L12.5 10H15V5Z"
            fill="#9C27B0" />
        </g>
        <clipPath id="clip0_309_49616">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </svg>
      photo
    </Button>
  </Col>
  <Col md={3}>
    <Button variant="white" className="active d-flex align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="20" height="20" viewBox="0 0 20 20"
        fill="none">
        <g clipPath="url(#clip0_309_496)">
          <path d="M5 5L0 10H7.5L9.375 9.375L5 5Z"
            fill="#FFC107" />
          <path d="M5 5L9.375 9.375L10 7.5V5H5Z"
            fill="#FFA000" />
          <path d="M5 15L10 20V12.5L9.375 10.625L5 15Z"
            fill="#4CAF50" />
          <path d="M5 15L9.375 10.625L7.5 10H5V15Z"
            fill="#388E3C" />
          <path d="M15 15L20 10H12.5L10.625 10.625L15 15Z"
            fill="#2196F3" />
          <path d="M15 15L10.625 10.625L10 12.5V15H15Z"
            fill="#1976D2" />
          <path d="M15 5L10 0V7.5L10.625 9.375L15 5Z"
            fill="#F44336" />
          <path d="M15 5L10.625 9.375L12.5 10H15V5Z"
            fill="#9C27B0" />
        </g>
        <clipPath id="clip0_309_49616">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </svg>
      photo
    </Button>
  </Col>
  <Col md={2}>
    <Button variant="outline-light" className="btn-square btn-md d-flex justify-content-center align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="20" height="20" viewBox="0 0 20 20"
        fill="none">
        <g clipPath="url(#clip0_309_496)">
          <path d="M5 5L0 10H7.5L9.375 9.375L5 5Z"
            fill="#FFC107" />
          <path d="M5 5L9.375 9.375L10 7.5V5H5Z"
            fill="#FFA000" />
          <path d="M5 15L10 20V12.5L9.375 10.625L5 15Z"
            fill="#4CAF50" />
          <path d="M5 15L9.375 10.625L7.5 10H5V15Z"
            fill="#388E3C" />
          <path d="M15 15L20 10H12.5L10.625 10.625L15 15Z"
            fill="#2196F3" />
          <path d="M15 15L10.625 10.625L10 12.5V15H15Z"
            fill="#1976D2" />
          <path d="M15 5L10 0V7.5L10.625 9.375L15 5Z"
            fill="#F44336" />
          <path d="M15 5L10.625 9.375L12.5 10H15V5Z"
            fill="#9C27B0" />
        </g>
        <clipPath id="clip0_309_49616">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </svg>
    </Button>
  </Col>
  <Col md={1}>
    <Button className="btn-square btn-md btn-photo d-flex justify-content-center align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="20" height="20" viewBox="0 0 20 20"
        fill="none">
        <g clipPath="url(#clip0_309_381)">
          <path d="M5 5L0 10H7.5L9.375 9.375L5 5Z"
            fill="white" />
          <path d="M5 5L9.375 9.375L10 7.5V5H5Z"
            fill="white" />
          <path d="M5 15L10 20V12.5L9.375 10.625L5 15Z"
            fill="white" />
          <path d="M5 15L9.375 10.625L7.5 10H5V15Z"
            fill="white" />
          <path d="M15 15L20 10H12.5L10.625 10.625L15 15Z"
            fill="white" />
          <path d="M15 15L10.625 10.625L10 12.5V15H15Z"
            fill="white" />
          <path d="M15 5L10 0V7.5L10.625 9.375L15 5Z"
            fill="white" />
          <path d="M15 5L10.625 9.375L12.5 10H15V5Z"
            fill="white" />
        </g>
        <clipPath id="clip0_309_381">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </svg>
    </Button>
  </Col>
  <Col md={3}>
    <Button className="btn-linkedin d-flex align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="21" height="20" viewBox="0 0 21 20"
        fill="none">
        <g clipPath="url(#clip0_309_392)">
          <path
            d="M9.677 5.04959C10.0545 5.56838 10.2433 6.18718 10.2433 6.91099C10.2433 7.6548 10.0545 8.25485 9.672 8.70739C9.45698 8.95866 9.14321 9.19118 8.72817 9.39995C9.35823 9.62746 9.83327 9.98624 10.157 10.4763C10.4771 10.9663 10.6383 11.5626 10.6383 12.2627C10.6383 12.9852 10.4546 13.634 10.087 14.2066C9.85452 14.5854 9.56199 14.9066 9.21196 15.1654C8.81818 15.4629 8.35314 15.6667 7.8156 15.778C7.27806 15.888 6.69676 15.9417 6.06921 15.9417H0.5V3.74948H6.47299C7.98061 3.77198 9.04695 4.20452 9.677 5.04959ZM2.96395 5.86715V8.55738H5.9692C6.50424 8.55738 6.94053 8.45612 7.27681 8.25485C7.61058 8.05358 7.77935 7.69605 7.77935 7.18476C7.77935 6.61472 7.55808 6.24094 7.11554 6.05717C6.73301 5.93091 6.24547 5.86715 5.65417 5.86715H2.96395ZM2.96395 10.575V13.8266H5.96545C6.50174 13.8266 6.92053 13.7553 7.21805 13.6115C7.7606 13.344 8.03062 12.839 8.03062 12.0889C8.03062 11.4526 7.76935 11.0176 7.2443 10.7801C6.94928 10.6488 6.53675 10.5788 6.0067 10.575H2.96395ZM18.1102 7.10976C18.749 7.39103 19.274 7.83607 19.6878 8.44362C20.0654 8.97991 20.3079 9.60121 20.4179 10.3075C20.4829 10.7201 20.5079 11.3189 20.4979 12.0977H13.8386C13.8786 13.0015 14.1936 13.6365 14.7962 13.9991C15.1612 14.2253 15.5987 14.3391 16.115 14.3391C16.6576 14.3391 17.1001 14.2016 17.4401 13.9266C17.6277 13.7766 17.7914 13.5703 17.9327 13.3065H20.3729C20.3079 13.8403 20.0116 14.3841 19.4878 14.9366C18.669 15.8117 17.5226 16.2505 16.0488 16.2505C14.8312 16.2505 13.7586 15.8817 12.8298 15.1417C11.8972 14.4029 11.4334 13.199 11.4334 11.5326C11.4334 9.96999 11.8534 8.77114 12.6923 7.93733C13.5336 7.10601 14.6212 6.68722 15.96 6.68722C16.7576 6.68597 17.4739 6.82723 18.1102 7.10976ZM14.5362 9.14617C14.1986 9.48995 13.9861 9.95499 13.8986 10.5413H18.0177C17.9739 9.91499 17.7602 9.4412 17.3814 9.11492C16.9976 8.79114 16.5263 8.62988 15.9625 8.62988C15.3512 8.63113 14.8737 8.80365 14.5362 9.14617ZM13.281 5.8359H18.5777V4.31828H13.281V5.8359Z"
            fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_309_392">
            <rect width="20" height="20" fill="white"
              transform="translate(0.5)" />
          </clipPath>
        </defs>
      </svg>
      behance
    </Button>
  </Col>
  <Col md={3}>
    <Button variant="outline-light" className="d-flex align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="21" height="20" viewBox="0 0 21 20"
        fill="none">
        <g clipPath="url(#clip0_309_507)">
          <path
            d="M9.677 5.04959C10.0545 5.56838 10.2433 6.18718 10.2433 6.91099C10.2433 7.6548 10.0545 8.25485 9.672 8.70739C9.45698 8.95866 9.14321 9.19118 8.72817 9.39995C9.35823 9.62746 9.83327 9.98624 10.157 10.4763C10.4771 10.9663 10.6383 11.5626 10.6383 12.2627C10.6383 12.9852 10.4546 13.634 10.087 14.2066C9.85452 14.5854 9.56199 14.9066 9.21196 15.1654C8.81818 15.4629 8.35314 15.6667 7.8156 15.778C7.27806 15.888 6.69676 15.9417 6.06921 15.9417H0.5V3.74948H6.47299C7.98061 3.77198 9.04695 4.20452 9.677 5.04959ZM2.96395 5.86715V8.55738H5.9692C6.50424 8.55738 6.94053 8.45612 7.27681 8.25485C7.61058 8.05358 7.77935 7.69605 7.77935 7.18476C7.77935 6.61472 7.55808 6.24094 7.11554 6.05717C6.73301 5.93091 6.24547 5.86715 5.65417 5.86715H2.96395ZM2.96395 10.575V13.8266H5.96545C6.50174 13.8266 6.92053 13.7553 7.21805 13.6115C7.7606 13.344 8.03062 12.839 8.03062 12.0889C8.03062 11.4526 7.76935 11.0176 7.2443 10.7801C6.94928 10.6488 6.53675 10.5788 6.0067 10.575H2.96395ZM18.1102 7.10976C18.749 7.39103 19.274 7.83607 19.6878 8.44362C20.0654 8.97991 20.3079 9.60121 20.4179 10.3075C20.4829 10.7201 20.5079 11.3189 20.4979 12.0977H13.8386C13.8786 13.0015 14.1936 13.6365 14.7962 13.9991C15.1612 14.2253 15.5987 14.3391 16.115 14.3391C16.6576 14.3391 17.1001 14.2016 17.4401 13.9266C17.6277 13.7766 17.7914 13.5703 17.9327 13.3065H20.3729C20.3079 13.8403 20.0116 14.3841 19.4878 14.9366C18.669 15.8117 17.5226 16.2505 16.0488 16.2505C14.8312 16.2505 13.7586 15.8817 12.8298 15.1417C11.8972 14.4029 11.4334 13.199 11.4334 11.5326C11.4334 9.96999 11.8534 8.77114 12.6923 7.93733C13.5336 7.10601 14.6212 6.68722 15.96 6.68722C16.7576 6.68597 17.4739 6.82723 18.1102 7.10976ZM14.5362 9.14617C14.1986 9.48995 13.9861 9.95499 13.8986 10.5413H18.0177C17.9739 9.91499 17.7602 9.4412 17.3814 9.11492C16.9976 8.79114 16.5263 8.62988 15.9625 8.62988C15.3512 8.63113 14.8737 8.80365 14.5362 9.14617ZM13.281 5.8359H18.5777V4.31828H13.281V5.8359Z"
            fill="#1976D2" />
        </g>
        <defs>
          <clipPath>
            <rect width=" 20" height="20" fill="white" transform="translate(0.5)" />
          </clipPath>
        </defs>
      </svg>
      behance
    </Button>
  </Col>
  <Col md={3}>
    <Button variant="white" className="active d-flex align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="21" height="20" viewBox="0 0 21 20"
        fill="none">
        <g clipPath="url(#clip0_309_507)">
          <path
            d="M9.677 5.04959C10.0545 5.56838 10.2433 6.18718 10.2433 6.91099C10.2433 7.6548 10.0545 8.25485 9.672 8.70739C9.45698 8.95866 9.14321 9.19118 8.72817 9.39995C9.35823 9.62746 9.83327 9.98624 10.157 10.4763C10.4771 10.9663 10.6383 11.5626 10.6383 12.2627C10.6383 12.9852 10.4546 13.634 10.087 14.2066C9.85452 14.5854 9.56199 14.9066 9.21196 15.1654C8.81818 15.4629 8.35314 15.6667 7.8156 15.778C7.27806 15.888 6.69676 15.9417 6.06921 15.9417H0.5V3.74948H6.47299C7.98061 3.77198 9.04695 4.20452 9.677 5.04959ZM2.96395 5.86715V8.55738H5.9692C6.50424 8.55738 6.94053 8.45612 7.27681 8.25485C7.61058 8.05358 7.77935 7.69605 7.77935 7.18476C7.77935 6.61472 7.55808 6.24094 7.11554 6.05717C6.73301 5.93091 6.24547 5.86715 5.65417 5.86715H2.96395ZM2.96395 10.575V13.8266H5.96545C6.50174 13.8266 6.92053 13.7553 7.21805 13.6115C7.7606 13.344 8.03062 12.839 8.03062 12.0889C8.03062 11.4526 7.76935 11.0176 7.2443 10.7801C6.94928 10.6488 6.53675 10.5788 6.0067 10.575H2.96395ZM18.1102 7.10976C18.749 7.39103 19.274 7.83607 19.6878 8.44362C20.0654 8.97991 20.3079 9.60121 20.4179 10.3075C20.4829 10.7201 20.5079 11.3189 20.4979 12.0977H13.8386C13.8786 13.0015 14.1936 13.6365 14.7962 13.9991C15.1612 14.2253 15.5987 14.3391 16.115 14.3391C16.6576 14.3391 17.1001 14.2016 17.4401 13.9266C17.6277 13.7766 17.7914 13.5703 17.9327 13.3065H20.3729C20.3079 13.8403 20.0116 14.3841 19.4878 14.9366C18.669 15.8117 17.5226 16.2505 16.0488 16.2505C14.8312 16.2505 13.7586 15.8817 12.8298 15.1417C11.8972 14.4029 11.4334 13.199 11.4334 11.5326C11.4334 9.96999 11.8534 8.77114 12.6923 7.93733C13.5336 7.10601 14.6212 6.68722 15.96 6.68722C16.7576 6.68597 17.4739 6.82723 18.1102 7.10976ZM14.5362 9.14617C14.1986 9.48995 13.9861 9.95499 13.8986 10.5413H18.0177C17.9739 9.91499 17.7602 9.4412 17.3814 9.11492C16.9976 8.79114 16.5263 8.62988 15.9625 8.62988C15.3512 8.63113 14.8737 8.80365 14.5362 9.14617ZM13.281 5.8359H18.5777V4.31828H13.281V5.8359Z"
            fill="#1976D2" />
        </g>
        <defs>
          <clipPath>
            <rect width=" 20" height="20" fill="white" transform="translate(0.5)" />
          </clipPath>
        </defs>
      </svg>
      behance
    </Button>
  </Col>
  <Col md={2}>
    <Button variant="outline-light" className="btn-square btn-md d-flex justify-content-center align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="21" height="20" viewBox="0 0 21 20"
        fill="none">
        <g clipPath="url(#clip0_309_507)">
          <path
            d="M9.677 5.04959C10.0545 5.56838 10.2433 6.18718 10.2433 6.91099C10.2433 7.6548 10.0545 8.25485 9.672 8.70739C9.45698 8.95866 9.14321 9.19118 8.72817 9.39995C9.35823 9.62746 9.83327 9.98624 10.157 10.4763C10.4771 10.9663 10.6383 11.5626 10.6383 12.2627C10.6383 12.9852 10.4546 13.634 10.087 14.2066C9.85452 14.5854 9.56199 14.9066 9.21196 15.1654C8.81818 15.4629 8.35314 15.6667 7.8156 15.778C7.27806 15.888 6.69676 15.9417 6.06921 15.9417H0.5V3.74948H6.47299C7.98061 3.77198 9.04695 4.20452 9.677 5.04959ZM2.96395 5.86715V8.55738H5.9692C6.50424 8.55738 6.94053 8.45612 7.27681 8.25485C7.61058 8.05358 7.77935 7.69605 7.77935 7.18476C7.77935 6.61472 7.55808 6.24094 7.11554 6.05717C6.73301 5.93091 6.24547 5.86715 5.65417 5.86715H2.96395ZM2.96395 10.575V13.8266H5.96545C6.50174 13.8266 6.92053 13.7553 7.21805 13.6115C7.7606 13.344 8.03062 12.839 8.03062 12.0889C8.03062 11.4526 7.76935 11.0176 7.2443 10.7801C6.94928 10.6488 6.53675 10.5788 6.0067 10.575H2.96395ZM18.1102 7.10976C18.749 7.39103 19.274 7.83607 19.6878 8.44362C20.0654 8.97991 20.3079 9.60121 20.4179 10.3075C20.4829 10.7201 20.5079 11.3189 20.4979 12.0977H13.8386C13.8786 13.0015 14.1936 13.6365 14.7962 13.9991C15.1612 14.2253 15.5987 14.3391 16.115 14.3391C16.6576 14.3391 17.1001 14.2016 17.4401 13.9266C17.6277 13.7766 17.7914 13.5703 17.9327 13.3065H20.3729C20.3079 13.8403 20.0116 14.3841 19.4878 14.9366C18.669 15.8117 17.5226 16.2505 16.0488 16.2505C14.8312 16.2505 13.7586 15.8817 12.8298 15.1417C11.8972 14.4029 11.4334 13.199 11.4334 11.5326C11.4334 9.96999 11.8534 8.77114 12.6923 7.93733C13.5336 7.10601 14.6212 6.68722 15.96 6.68722C16.7576 6.68597 17.4739 6.82723 18.1102 7.10976ZM14.5362 9.14617C14.1986 9.48995 13.9861 9.95499 13.8986 10.5413H18.0177C17.9739 9.91499 17.7602 9.4412 17.3814 9.11492C16.9976 8.79114 16.5263 8.62988 15.9625 8.62988C15.3512 8.63113 14.8737 8.80365 14.5362 9.14617ZM13.281 5.8359H18.5777V4.31828H13.281V5.8359Z"
            fill="#1976D2" />
        </g>
        <defs>
          <clipPath>
            <rect width=" 20" height="20" fill="white" transform="translate(0.5)" />
          </clipPath>
        </defs>
      </svg>
    </Button>
  </Col>
  <Col md={1}>
    <Button className="btn-square btn-md btn-linkedin d-flex justify-content-center align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="21" height="20" viewBox="0 0 21 20"
        fill="none">
        <g clipPath="url(#clip0_309_392)">
          <path
            d="M9.677 5.04959C10.0545 5.56838 10.2433 6.18718 10.2433 6.91099C10.2433 7.6548 10.0545 8.25485 9.672 8.70739C9.45698 8.95866 9.14321 9.19118 8.72817 9.39995C9.35823 9.62746 9.83327 9.98624 10.157 10.4763C10.4771 10.9663 10.6383 11.5626 10.6383 12.2627C10.6383 12.9852 10.4546 13.634 10.087 14.2066C9.85452 14.5854 9.56199 14.9066 9.21196 15.1654C8.81818 15.4629 8.35314 15.6667 7.8156 15.778C7.27806 15.888 6.69676 15.9417 6.06921 15.9417H0.5V3.74948H6.47299C7.98061 3.77198 9.04695 4.20452 9.677 5.04959ZM2.96395 5.86715V8.55738H5.9692C6.50424 8.55738 6.94053 8.45612 7.27681 8.25485C7.61058 8.05358 7.77935 7.69605 7.77935 7.18476C7.77935 6.61472 7.55808 6.24094 7.11554 6.05717C6.73301 5.93091 6.24547 5.86715 5.65417 5.86715H2.96395ZM2.96395 10.575V13.8266H5.96545C6.50174 13.8266 6.92053 13.7553 7.21805 13.6115C7.7606 13.344 8.03062 12.839 8.03062 12.0889C8.03062 11.4526 7.76935 11.0176 7.2443 10.7801C6.94928 10.6488 6.53675 10.5788 6.0067 10.575H2.96395ZM18.1102 7.10976C18.749 7.39103 19.274 7.83607 19.6878 8.44362C20.0654 8.97991 20.3079 9.60121 20.4179 10.3075C20.4829 10.7201 20.5079 11.3189 20.4979 12.0977H13.8386C13.8786 13.0015 14.1936 13.6365 14.7962 13.9991C15.1612 14.2253 15.5987 14.3391 16.115 14.3391C16.6576 14.3391 17.1001 14.2016 17.4401 13.9266C17.6277 13.7766 17.7914 13.5703 17.9327 13.3065H20.3729C20.3079 13.8403 20.0116 14.3841 19.4878 14.9366C18.669 15.8117 17.5226 16.2505 16.0488 16.2505C14.8312 16.2505 13.7586 15.8817 12.8298 15.1417C11.8972 14.4029 11.4334 13.199 11.4334 11.5326C11.4334 9.96999 11.8534 8.77114 12.6923 7.93733C13.5336 7.10601 14.6212 6.68722 15.96 6.68722C16.7576 6.68597 17.4739 6.82723 18.1102 7.10976ZM14.5362 9.14617C14.1986 9.48995 13.9861 9.95499 13.8986 10.5413H18.0177C17.9739 9.91499 17.7602 9.4412 17.3814 9.11492C16.9976 8.79114 16.5263 8.62988 15.9625 8.62988C15.3512 8.63113 14.8737 8.80365 14.5362 9.14617ZM13.281 5.8359H18.5777V4.31828H13.281V5.8359Z"
            fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_309_392">
            <rect width="20" height="20" fill="white"
              transform="translate(0.5)" />
          </clipPath>
        </defs>
      </svg>
    </Button>
  </Col>
  <Col md={3}>
    <Button className="btn-vimeo d-flex align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="21" height="20" viewBox="0 0 21 20"
        fill="none">
        <g clipPath="url(#clip0_309_396)">
          <path
            d="M0.5 6.02519L1.30748 7.08891C1.30748 7.08891 2.98245 5.76769 3.53993 6.42518C4.10492 7.08891 6.24363 15.0587 6.95111 16.5325C7.5686 17.8237 9.28231 19.5274 11.1548 18.3124C13.0447 17.0899 19.2833 11.7626 20.4008 5.45895C21.5158 -0.833418 12.881 0.484054 11.976 5.96894C14.2535 4.60147 15.4809 6.52892 14.3135 8.70763C13.1435 10.8951 12.0698 12.3213 11.5135 12.3213C10.9673 12.3213 10.5348 10.8538 9.8948 8.30639C9.23856 5.66769 9.23856 0.910295 6.49362 1.45028C3.89868 1.96277 0.5 6.02519 0.5 6.02519Z"
            fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_309_396">
            <rect width="20" height="20" fill="white"
              transform="translate(0.5)" />
          </clipPath>
        </defs>
      </svg>
      Vimeo
    </Button>
  </Col>
  <Col md={3}>
    <Button variant="outline-light" className="d-flex align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="21" height="20" viewBox="0 0 21 20"
        fill="none">
        <g clipPath="url(#clip0_309_511)">
          <path
            d="M0.5 6.02519L1.30748 7.08891C1.30748 7.08891 2.98245 5.76769 3.53993 6.42518C4.10492 7.08891 6.24363 15.0587 6.95111 16.5325C7.5686 17.8237 9.28231 19.5274 11.1548 18.3124C13.0447 17.0899 19.2833 11.7626 20.4008 5.45895C21.5158 -0.833418 12.881 0.484054 11.976 5.96894C14.2535 4.60147 15.4809 6.52892 14.3135 8.70763C13.1435 10.8951 12.0698 12.3213 11.5135 12.3213C10.9673 12.3213 10.5348 10.8538 9.8948 8.30639C9.23856 5.66769 9.23856 0.910295 6.49362 1.45028C3.89868 1.96277 0.5 6.02519 0.5 6.02519Z"
            fill="#00BCD4" />
        </g>
        <defs>
          <clipPath id="clip0_349_511">
            <rect width="20" height="20" fill="white"
              transform="translate(0.5)" />
          </clipPath>
        </defs>
      </svg>
      Vimeo
    </Button>
  </Col>
  <Col md={3}>
    <Button variant="white" className="active d-flex align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="21" height="20" viewBox="0 0 21 20"
        fill="none">
        <g clipPath="url(#clip0_309_511)">
          <path
            d="M0.5 6.02519L1.30748 7.08891C1.30748 7.08891 2.98245 5.76769 3.53993 6.42518C4.10492 7.08891 6.24363 15.0587 6.95111 16.5325C7.5686 17.8237 9.28231 19.5274 11.1548 18.3124C13.0447 17.0899 19.2833 11.7626 20.4008 5.45895C21.5158 -0.833418 12.881 0.484054 11.976 5.96894C14.2535 4.60147 15.4809 6.52892 14.3135 8.70763C13.1435 10.8951 12.0698 12.3213 11.5135 12.3213C10.9673 12.3213 10.5348 10.8538 9.8948 8.30639C9.23856 5.66769 9.23856 0.910295 6.49362 1.45028C3.89868 1.96277 0.5 6.02519 0.5 6.02519Z"
            fill="#00BCD4" />
        </g>
        <defs>
          <clipPath id="clip0_349_511">
            <rect width="20" height="20" fill="white"
              transform="translate(0.5)" />
          </clipPath>
        </defs>
      </svg>
      Vimeo
    </Button>
  </Col>
  <Col md={2}>
    <Button variant="outline-light" className="btn-square btn-md d-flex justify-content-center align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="21" height="20" viewBox="0 0 21 20"
        fill="none">
        <g clipPath="url(#clip0_309_511)">
          <path
            d="M0.5 6.02519L1.30748 7.08891C1.30748 7.08891 2.98245 5.76769 3.53993 6.42518C4.10492 7.08891 6.24363 15.0587 6.95111 16.5325C7.5686 17.8237 9.28231 19.5274 11.1548 18.3124C13.0447 17.0899 19.2833 11.7626 20.4008 5.45895C21.5158 -0.833418 12.881 0.484054 11.976 5.96894C14.2535 4.60147 15.4809 6.52892 14.3135 8.70763C13.1435 10.8951 12.0698 12.3213 11.5135 12.3213C10.9673 12.3213 10.5348 10.8538 9.8948 8.30639C9.23856 5.66769 9.23856 0.910295 6.49362 1.45028C3.89868 1.96277 0.5 6.02519 0.5 6.02519Z"
            fill="#00BCD4" />
        </g>
        <defs>
          <clipPath id="clip0_349_511">
            <rect width="20" height="20" fill="white"
              transform="translate(0.5)" />
          </clipPath>
        </defs>
      </svg>
    </Button>
  </Col>
  <Col md={1}>
    <Button className="btn-square btn-md btn-vimeo d-flex justify-content-center align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="21" height="20" viewBox="0 0 21 20"
        fill="none">
        <g clipPath="url(#clip0_309_396)">
          <path
            d="M0.5 6.02519L1.30748 7.08891C1.30748 7.08891 2.98245 5.76769 3.53993 6.42518C4.10492 7.08891 6.24363 15.0587 6.95111 16.5325C7.5686 17.8237 9.28231 19.5274 11.1548 18.3124C13.0447 17.0899 19.2833 11.7626 20.4008 5.45895C21.5158 -0.833418 12.881 0.484054 11.976 5.96894C14.2535 4.60147 15.4809 6.52892 14.3135 8.70763C13.1435 10.8951 12.0698 12.3213 11.5135 12.3213C10.9673 12.3213 10.5348 10.8538 9.8948 8.30639C9.23856 5.66769 9.23856 0.910295 6.49362 1.45028C3.89868 1.96277 0.5 6.02519 0.5 6.02519Z"
            fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_309_396">
            <rect width="20" height="20" fill="white"
              transform="translate(0.5)" />
          </clipPath>
        </defs>
      </svg>
    </Button>
  </Col>
  <Col md={3}>
    <Button className="btn-dropbox d-flex align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="21" height="20" viewBox="0 0 21 20"
        fill="none">
        <g clipPath="url(#clip0_309_400)">
          <path
            d="M20.5 3.8725L14.6163 0L10.5 3.46375L16.4325 7.155L20.5 3.8725Z"
            fill="white" />
          <path
            d="M6.38375 0L0.5 3.87125L4.56875 7.155L10.5 3.46375L6.38375 0Z"
            fill="white" />
          <path
            d="M10.5 10.8475L6.38375 14.3112L0.5 10.4387L4.5675 7.155L10.5 10.8475L16.4312 7.155L20.5 10.4387L14.6163 14.3112L10.5 10.8475Z"
            fill="white" />
          <path
            d="M14.9137 15.6113C14.81 15.68 14.69 15.7138 14.5712 15.7138C14.4275 15.7138 14.285 15.6638 14.1688 15.5675L10.5 12.48L6.83125 15.5675C6.62 15.745 6.31625 15.7625 6.085 15.6113L4.25 14.4038V16.25L10.5125 20L16.75 16.25V14.4025L14.9137 15.6113Z"
            fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_309_400">
            <rect width="20" height="20" fill="white"
              transform="translate(0.5)" />
          </clipPath>
        </defs>
      </svg>
      dropbox
    </Button>
  </Col>
  <Col md={3}>
    <Button variant="outline-light" className="d-flex align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="21" height="20" viewBox="0 0 21 20"
        fill="none">
        <g clipPath="url(#clip0_309_515)">
          <path
            d="M20.5 3.8725L14.6163 0L10.5 3.46375L16.4325 7.155L20.5 3.8725Z"
            fill="#1E88E5" />
          <path
            d="M6.38375 0L0.5 3.87125L4.56875 7.155L10.5 3.46375L6.38375 0Z"
            fill="#1E88E5" />
          <path
            d="M10.5 10.8475L6.38375 14.3112L0.5 10.4387L4.5675 7.155L10.5 10.8475L16.4312 7.155L20.5 10.4387L14.6163 14.3112L10.5 10.8475Z"
            fill="#1E88E5" />
          <path
            d="M14.9137 15.6113C14.81 15.68 14.69 15.7138 14.5712 15.7138C14.4275 15.7138 14.285 15.6638 14.1688 15.5675L10.5 12.48L6.83125 15.5675C6.62 15.745 6.31625 15.7625 6.085 15.6113L4.25 14.4038V16.25L10.5125 20L16.75 16.25V14.4025L14.9137 15.6113Z"
            fill="#1E88E5" />
        </g>
        <defs>
          <clipPath id="clip0_359_515">
            <rect width="20" height="20" fill="white"
              transform="translate(0.5)" />
          </clipPath>
        </defs>
      </svg>
      dropbox
    </Button>
  </Col>
  <Col md={3}>
    <Button variant="white" className="active d-flex align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="21" height="20" viewBox="0 0 21 20"
        fill="none">
        <g clipPath="url(#clip0_309_515)">
          <path
            d="M20.5 3.8725L14.6163 0L10.5 3.46375L16.4325 7.155L20.5 3.8725Z"
            fill="#1E88E5" />
          <path
            d="M6.38375 0L0.5 3.87125L4.56875 7.155L10.5 3.46375L6.38375 0Z"
            fill="#1E88E5" />
          <path
            d="M10.5 10.8475L6.38375 14.3112L0.5 10.4387L4.5675 7.155L10.5 10.8475L16.4312 7.155L20.5 10.4387L14.6163 14.3112L10.5 10.8475Z"
            fill="#1E88E5" />
          <path
            d="M14.9137 15.6113C14.81 15.68 14.69 15.7138 14.5712 15.7138C14.4275 15.7138 14.285 15.6638 14.1688 15.5675L10.5 12.48L6.83125 15.5675C6.62 15.745 6.31625 15.7625 6.085 15.6113L4.25 14.4038V16.25L10.5125 20L16.75 16.25V14.4025L14.9137 15.6113Z"
            fill="#1E88E5" />
        </g>
        <defs>
          <clipPath id="clip0_359_515">
            <rect width="20" height="20" fill="white"
              transform="translate(0.5)" />
          </clipPath>
        </defs>
      </svg>
      dropbox
    </Button>
  </Col>
  <Col md={2}>
    <Button variant="outline-light" className="btn-square btn-md d-flex justify-content-center align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="21" height="20" viewBox="0 0 21 20"
        fill="none">
        <g clipPath="url(#clip0_309_515)">
          <path
            d="M20.5 3.8725L14.6163 0L10.5 3.46375L16.4325 7.155L20.5 3.8725Z"
            fill="#1E88E5" />
          <path
            d="M6.38375 0L0.5 3.87125L4.56875 7.155L10.5 3.46375L6.38375 0Z"
            fill="#1E88E5" />
          <path
            d="M10.5 10.8475L6.38375 14.3112L0.5 10.4387L4.5675 7.155L10.5 10.8475L16.4312 7.155L20.5 10.4387L14.6163 14.3112L10.5 10.8475Z"
            fill="#1E88E5" />
          <path
            d="M14.9137 15.6113C14.81 15.68 14.69 15.7138 14.5712 15.7138C14.4275 15.7138 14.285 15.6638 14.1688 15.5675L10.5 12.48L6.83125 15.5675C6.62 15.745 6.31625 15.7625 6.085 15.6113L4.25 14.4038V16.25L10.5125 20L16.75 16.25V14.4025L14.9137 15.6113Z"
            fill="#1E88E5" />
        </g>
        <defs>
          <clipPath id="clip0_359_515">
            <rect width="20" height="20" fill="white"
              transform="translate(0.5)" />
          </clipPath>
        </defs>
      </svg>
    </Button>
  </Col>
  <Col md={1}>
    <Button className="btn-square btn-md btn-dropbox d-flex justify-content-center align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="21" height="20" viewBox="0 0 21 20"
        fill="none">
        <g clipPath="url(#clip0_309_400)">
          <path
            d="M20.5 3.8725L14.6163 0L10.5 3.46375L16.4325 7.155L20.5 3.8725Z"
            fill="white" />
          <path
            d="M6.38375 0L0.5 3.87125L4.56875 7.155L10.5 3.46375L6.38375 0Z"
            fill="white" />
          <path
            d="M10.5 10.8475L6.38375 14.3112L0.5 10.4387L4.5675 7.155L10.5 10.8475L16.4312 7.155L20.5 10.4387L14.6163 14.3112L10.5 10.8475Z"
            fill="white" />
          <path
            d="M14.9137 15.6113C14.81 15.68 14.69 15.7138 14.5712 15.7138C14.4275 15.7138 14.285 15.6638 14.1688 15.5675L10.5 12.48L6.83125 15.5675C6.62 15.745 6.31625 15.7625 6.085 15.6113L4.25 14.4038V16.25L10.5125 20L16.75 16.25V14.4025L14.9137 15.6113Z"
            fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_309_400">
            <rect width="20" height="20" fill="white"
              transform="translate(0.5)" />
          </clipPath>
        </defs>
      </svg>
    </Button>
  </Col>
  <Col md={3}>
    <Button className="btn-facebook d-flex align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="20" height="20" viewBox="0 0 20 20"
        fill="none">
        <g clipPath="url(#clip0_309_408)">
          <path
            d="M20 10C20 14.9914 16.343 19.1285 11.5625 19.8785V12.8906H13.8926L14.3359 10H11.5625V8.12422C11.5625 7.3332 11.95 6.5625 13.1922 6.5625H14.4531V4.10156C14.4531 4.10156 13.3086 3.90625 12.2145 3.90625C9.93047 3.90625 8.4375 5.29063 8.4375 7.79688V10H5.89844V12.8906H8.4375V19.8785C3.65703 19.1285 0 14.9914 0 10C0 4.47734 4.47734 0 10 0C15.5227 0 20 4.47734 20 10Z"
            fill="white" />
          <path
            d="M13.8926 12.8906L14.3359 10H11.5625V8.12418C11.5625 7.33336 11.9499 6.5625 13.1921 6.5625H14.4531V4.10156C14.4531 4.10156 13.3088 3.90625 12.2146 3.90625C9.93043 3.90625 8.4375 5.29063 8.4375 7.79688V10H5.89844V12.8906H8.4375V19.8785C8.94664 19.9584 9.46844 20 10 20C10.5316 20 11.0534 19.9584 11.5625 19.8785V12.8906H13.8926Z"
            fill="#1877F2" />
        </g>
        <defs>
          <clipPath id="clip0_309_408">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
      facebook
    </Button>
  </Col>
  <Col md={3}>
    <Button variant="outline-light" className="d-flex align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="20" height="20" viewBox="0 0 20 20"
        fill="none">
        <g clipPath="url(#clip0_309_523)">
          <path
            d="M20 10C20 14.9914 16.343 19.1285 11.5625 19.8785V12.8906H13.8926L14.3359 10H11.5625V8.12422C11.5625 7.3332 11.95 6.5625 13.1922 6.5625H14.4531V4.10156C14.4531 4.10156 13.3086 3.90625 12.2145 3.90625C9.93047 3.90625 8.4375 5.29063 8.4375 7.79688V10H5.89844V12.8906H8.4375V19.8785C3.65703 19.1285 0 14.9914 0 10C0 4.47734 4.47734 0 10 0C15.5227 0 20 4.47734 20 10Z"
            fill="#1877F2" />
          <path
            d="M13.8926 12.8906L14.3359 10H11.5625V8.12418C11.5625 7.33336 11.9499 6.5625 13.1921 6.5625H14.4531V4.10156C14.4531 4.10156 13.3088 3.90625 12.2146 3.90625C9.93043 3.90625 8.4375 5.29063 8.4375 7.79688V10H5.89844V12.8906H8.4375V19.8785C8.94664 19.9584 9.46844 20 10 20C10.5316 20 11.0534 19.9584 11.5625 19.8785V12.8906H13.8926Z"
            fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_309_523">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
      facebook
    </Button>
  </Col>
  <Col md={3}>
    <Button variant="white" className="active d-flex align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="20" height="20" viewBox="0 0 20 20"
        fill="none">
        <g clipPath="url(#clip0_309_523)">
          <path
            d="M20 10C20 14.9914 16.343 19.1285 11.5625 19.8785V12.8906H13.8926L14.3359 10H11.5625V8.12422C11.5625 7.3332 11.95 6.5625 13.1922 6.5625H14.4531V4.10156C14.4531 4.10156 13.3086 3.90625 12.2145 3.90625C9.93047 3.90625 8.4375 5.29063 8.4375 7.79688V10H5.89844V12.8906H8.4375V19.8785C3.65703 19.1285 0 14.9914 0 10C0 4.47734 4.47734 0 10 0C15.5227 0 20 4.47734 20 10Z"
            fill="#1877F2" />
          <path
            d="M13.8926 12.8906L14.3359 10H11.5625V8.12418C11.5625 7.33336 11.9499 6.5625 13.1921 6.5625H14.4531V4.10156C14.4531 4.10156 13.3088 3.90625 12.2146 3.90625C9.93043 3.90625 8.4375 5.29063 8.4375 7.79688V10H5.89844V12.8906H8.4375V19.8785C8.94664 19.9584 9.46844 20 10 20C10.5316 20 11.0534 19.9584 11.5625 19.8785V12.8906H13.8926Z"
            fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_309_523">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
      facebook
    </Button>
  </Col>
  <Col md={2}>
    <Button variant="outline-light" className="btn-square btn-md d-flex justify-content-center align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="20" height="20" viewBox="0 0 20 20"
        fill="none">
        <g clipPath="url(#clip0_309_523)">
          <path
            d="M20 10C20 14.9914 16.343 19.1285 11.5625 19.8785V12.8906H13.8926L14.3359 10H11.5625V8.12422C11.5625 7.3332 11.95 6.5625 13.1922 6.5625H14.4531V4.10156C14.4531 4.10156 13.3086 3.90625 12.2145 3.90625C9.93047 3.90625 8.4375 5.29063 8.4375 7.79688V10H5.89844V12.8906H8.4375V19.8785C3.65703 19.1285 0 14.9914 0 10C0 4.47734 4.47734 0 10 0C15.5227 0 20 4.47734 20 10Z"
            fill="#1877F2" />
          <path
            d="M13.8926 12.8906L14.3359 10H11.5625V8.12418C11.5625 7.33336 11.9499 6.5625 13.1921 6.5625H14.4531V4.10156C14.4531 4.10156 13.3088 3.90625 12.2146 3.90625C9.93043 3.90625 8.4375 5.29063 8.4375 7.79688V10H5.89844V12.8906H8.4375V19.8785C8.94664 19.9584 9.46844 20 10 20C10.5316 20 11.0534 19.9584 11.5625 19.8785V12.8906H13.8926Z"
            fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_309_523">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Button>
  </Col>
  <Col md={1}>
    <Button className="btn-square btn-md btn-facebook d-flex justify-content-center align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="20" height="20" viewBox="0 0 20 20"
        fill="none">
        <g clipPath="url(#clip0_309_408)">
          <path
            d="M20 10C20 14.9914 16.343 19.1285 11.5625 19.8785V12.8906H13.8926L14.3359 10H11.5625V8.12422C11.5625 7.3332 11.95 6.5625 13.1922 6.5625H14.4531V4.10156C14.4531 4.10156 13.3086 3.90625 12.2145 3.90625C9.93047 3.90625 8.4375 5.29063 8.4375 7.79688V10H5.89844V12.8906H8.4375V19.8785C3.65703 19.1285 0 14.9914 0 10C0 4.47734 4.47734 0 10 0C15.5227 0 20 4.47734 20 10Z"
            fill="white" />
          <path
            d="M13.8926 12.8906L14.3359 10H11.5625V8.12418C11.5625 7.33336 11.9499 6.5625 13.1921 6.5625H14.4531V4.10156C14.4531 4.10156 13.3088 3.90625 12.2146 3.90625C9.93043 3.90625 8.4375 5.29063 8.4375 7.79688V10H5.89844V12.8906H8.4375V19.8785C8.94664 19.9584 9.46844 20 10 20C10.5316 20 11.0534 19.9584 11.5625 19.8785V12.8906H13.8926Z"
            fill="#1877F2" />
        </g>
        <defs>
          <clipPath id="clip0_309_408">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Button>
  </Col>
  <Col md={3}>
    <Button className="btn-instagram d-flex align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="20" height="20" viewBox="0 0 20 20"
        fill="none">
        <g clipPath="url(#clip0_309_418)">
          <path
            d="M13.75 0H6.25C2.79875 0 0 2.79875 0 6.25V13.75C0 17.2013 2.79875 20 6.25 20H13.75C17.2013 20 20 17.2013 20 13.75V6.25C20 2.79875 17.2013 0 13.75 0ZM18.125 13.75C18.125 16.1625 16.1625 18.125 13.75 18.125H6.25C3.8375 18.125 1.875 16.1625 1.875 13.75V6.25C1.875 3.8375 3.8375 1.875 6.25 1.875H13.75C16.1625 1.875 18.125 3.8375 18.125 6.25V13.75Z"
            fill="white" />
          <path
            d="M10 5C7.23875 5 5 7.23875 5 10C5 12.7613 7.23875 15 10 15C12.7613 15 15 12.7613 15 10C15 7.23875 12.7613 5 10 5ZM10 13.125C8.2775 13.125 6.875 11.7225 6.875 10C6.875 8.27625 8.2775 6.875 10 6.875C11.7225 6.875 13.125 8.27625 13.125 10C13.125 11.7225 11.7225 13.125 10 13.125Z"
            fill="white" />
          <path
            d="M15.3752 5.29124C15.7432 5.29124 16.0415 4.99295 16.0415 4.62499C16.0415 4.25703 15.7432 3.95874 15.3752 3.95874C15.0073 3.95874 14.709 4.25703 14.709 4.62499C14.709 4.99295 15.0073 5.29124 15.3752 5.29124Z"
            fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_309_418">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
      instagram
    </Button>
  </Col>
  <Col md={3}>
    <Button variant="outline-light" className="d-flex align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg" width="20"
        height="20" viewBox="0 0 20 20" fill="none">
        <g clipPath="url(#clip0_309_533)">
          <path
            d="M13.75 0H6.25C2.79875 0 0 2.79875 0 6.25V13.75C0 17.2013 2.79875 20 6.25 20H13.75C17.2013 20 20 17.2013 20 13.75V6.25C20 2.79875 17.2013 0 13.75 0ZM18.125 13.75C18.125 16.1625 16.1625 18.125 13.75 18.125H6.25C3.8375 18.125 1.875 16.1625 1.875 13.75V6.25C1.875 3.8375 3.8375 1.875 6.25 1.875H13.75C16.1625 1.875 18.125 3.8375 18.125 6.25V13.75Z"
            fill="url(#paint0_linear_309_533)" />
          <path
            d="M10 5C7.23875 5 5 7.23875 5 10C5 12.7613 7.23875 15 10 15C12.7613 15 15 12.7613 15 10C15 7.23875 12.7613 5 10 5ZM10 13.125C8.2775 13.125 6.875 11.7225 6.875 10C6.875 8.27625 8.2775 6.875 10 6.875C11.7225 6.875 13.125 8.27625 13.125 10C13.125 11.7225 11.7225 13.125 10 13.125Z"
            fill="url(#paint1_linear_309_533)" />
          <path
            d="M15.3752 5.29124C15.7432 5.29124 16.0415 4.99295 16.0415 4.62499C16.0415 4.25703 15.7432 3.95874 15.3752 3.95874C15.0073 3.95874 14.709 4.25703 14.709 4.62499C14.709 4.99295 15.0073 5.29124 15.3752 5.29124Z"
            fill="url(#paint2_linear_309_533)" />
        </g>
        <linearGradient id="paint0_linear_309_533"
          x1="1.83081" y1="18.1693" x2="18.1692"
          y2="1.83069" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFC107" />
          <stop offset="0.507" stopColor="#F44336" />
          <stop offset="0.99" stopColor="#9C27B0" />
        </linearGradient>
        <linearGradient id="paint1_linear_309_533"
          x1="6.46456" y1="13.5354" x2="13.5354"
          y2="6.46456" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFC107" />
          <stop offset="0.507" stopColor="#F44336" />
        </linearGradient>
      </svg>
      instagram
    </Button>
  </Col>
  <Col md={3}>
    <Button variant="white" className="active d-flex align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg" width="20"
        height="20" viewBox="0 0 20 20" fill="none">
        <g clipPath="url(#clip0_309_533)">
          <path
            d="M13.75 0H6.25C2.79875 0 0 2.79875 0 6.25V13.75C0 17.2013 2.79875 20 6.25 20H13.75C17.2013 20 20 17.2013 20 13.75V6.25C20 2.79875 17.2013 0 13.75 0ZM18.125 13.75C18.125 16.1625 16.1625 18.125 13.75 18.125H6.25C3.8375 18.125 1.875 16.1625 1.875 13.75V6.25C1.875 3.8375 3.8375 1.875 6.25 1.875H13.75C16.1625 1.875 18.125 3.8375 18.125 6.25V13.75Z"
            fill="url(#paint0_linear_309_533)" />
          <path
            d="M10 5C7.23875 5 5 7.23875 5 10C5 12.7613 7.23875 15 10 15C12.7613 15 15 12.7613 15 10C15 7.23875 12.7613 5 10 5ZM10 13.125C8.2775 13.125 6.875 11.7225 6.875 10C6.875 8.27625 8.2775 6.875 10 6.875C11.7225 6.875 13.125 8.27625 13.125 10C13.125 11.7225 11.7225 13.125 10 13.125Z"
            fill="url(#paint1_linear_309_533)" />
          <path
            d="M15.3752 5.29124C15.7432 5.29124 16.0415 4.99295 16.0415 4.62499C16.0415 4.25703 15.7432 3.95874 15.3752 3.95874C15.0073 3.95874 14.709 4.25703 14.709 4.62499C14.709 4.99295 15.0073 5.29124 15.3752 5.29124Z"
            fill="url(#paint2_linear_309_533)" />
        </g>
        <linearGradient id="paint0_linear_309_533"
          x1="1.83081" y1="18.1693" x2="18.1692"
          y2="1.83069" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFC107" />
          <stop offset="0.507" stopColor="#F44336" />
          <stop offset="0.99" stopColor="#9C27B0" />
        </linearGradient>
        <linearGradient id="paint1_linear_309_533"
          x1="6.46456" y1="13.5354" x2="13.5354"
          y2="6.46456" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFC107" />
          <stop offset="0.507" stopColor="#F44336" />
        </linearGradient>
      </svg>
      instagram
    </Button>
  </Col>
  <Col md={2}>
    <Button variant="outline-light" className="btn-square btn-md d-flex justify-content-center align-items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="20"
        height="20" viewBox="0 0 20 20" fill="none">
        <g clipPath="url(#clip0_309_533)">
          <path
            d="M13.75 0H6.25C2.79875 0 0 2.79875 0 6.25V13.75C0 17.2013 2.79875 20 6.25 20H13.75C17.2013 20 20 17.2013 20 13.75V6.25C20 2.79875 17.2013 0 13.75 0ZM18.125 13.75C18.125 16.1625 16.1625 18.125 13.75 18.125H6.25C3.8375 18.125 1.875 16.1625 1.875 13.75V6.25C1.875 3.8375 3.8375 1.875 6.25 1.875H13.75C16.1625 1.875 18.125 3.8375 18.125 6.25V13.75Z"
            fill="url(#paint0_linear_309_533)" />
          <path
            d="M10 5C7.23875 5 5 7.23875 5 10C5 12.7613 7.23875 15 10 15C12.7613 15 15 12.7613 15 10C15 7.23875 12.7613 5 10 5ZM10 13.125C8.2775 13.125 6.875 11.7225 6.875 10C6.875 8.27625 8.2775 6.875 10 6.875C11.7225 6.875 13.125 8.27625 13.125 10C13.125 11.7225 11.7225 13.125 10 13.125Z"
            fill="url(#paint1_linear_309_533)" />
          <path
            d="M15.3752 5.29124C15.7432 5.29124 16.0415 4.99295 16.0415 4.62499C16.0415 4.25703 15.7432 3.95874 15.3752 3.95874C15.0073 3.95874 14.709 4.25703 14.709 4.62499C14.709 4.99295 15.0073 5.29124 15.3752 5.29124Z"
            fill="url(#paint2_linear_309_533)" />
        </g>
        <linearGradient id="paint0_linear_309_533"
          x1="1.83081" y1="18.1693" x2="18.1692"
          y2="1.83069" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFC107" />
          <stop offset="0.507" stopColor="#F44336" />
          <stop offset="0.99" stopColor="#9C27B0" />
        </linearGradient>
        <linearGradient id="paint1_linear_309_533"
          x1="6.46456" y1="13.5354" x2="13.5354"
          y2="6.46456" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFC107" />
          <stop offset="0.507" stopColor="#F44336" />
        </linearGradient>
      </svg>
    </Button>
  </Col>
  <Col md={1}>
    <Button className="btn-square btn-md btn-instagram d-flex justify-content-center align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="20" height="20" viewBox="0 0 20 20"
        fill="none">
        <g clipPath="url(#clip0_309_418)">
          <path
            d="M13.75 0H6.25C2.79875 0 0 2.79875 0 6.25V13.75C0 17.2013 2.79875 20 6.25 20H13.75C17.2013 20 20 17.2013 20 13.75V6.25C20 2.79875 17.2013 0 13.75 0ZM18.125 13.75C18.125 16.1625 16.1625 18.125 13.75 18.125H6.25C3.8375 18.125 1.875 16.1625 1.875 13.75V6.25C1.875 3.8375 3.8375 1.875 6.25 1.875H13.75C16.1625 1.875 18.125 3.8375 18.125 6.25V13.75Z"
            fill="white" />
          <path
            d="M10 5C7.23875 5 5 7.23875 5 10C5 12.7613 7.23875 15 10 15C12.7613 15 15 12.7613 15 10C15 7.23875 12.7613 5 10 5ZM10 13.125C8.2775 13.125 6.875 11.7225 6.875 10C6.875 8.27625 8.2775 6.875 10 6.875C11.7225 6.875 13.125 8.27625 13.125 10C13.125 11.7225 11.7225 13.125 10 13.125Z"
            fill="white" />
          <path
            d="M15.3752 5.29124C15.7432 5.29124 16.0415 4.99295 16.0415 4.62499C16.0415 4.25703 15.7432 3.95874 15.3752 3.95874C15.0073 3.95874 14.709 4.25703 14.709 4.62499C14.709 4.99295 15.0073 5.29124 15.3752 5.29124Z"
            fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_309_418">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Button>
  </Col>
  <Col md={3}>
    <Button className="btn-snapchat d-flex align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="20" height="20" viewBox="0 0 20 20"
        fill="none">
        <g clipPath="url(#clip0_309_424)">
          <path
            d="M19.608 14.6265C16.9341 14.1865 15.729 11.4476 15.6803 11.3313C15.6765 11.3238 15.674 11.3163 15.669 11.3088C15.5328 11.0313 15.5003 10.8026 15.5753 10.6288C15.7215 10.2863 16.2815 10.1088 16.6516 9.99126C16.7591 9.95751 16.8603 9.92501 16.9441 9.89251C17.3091 9.74875 17.5691 9.59249 17.7416 9.41623C17.9466 9.20498 17.9866 9.00247 17.9841 8.87121C17.9779 8.55119 17.7329 8.26618 17.3416 8.12742C17.2103 8.07367 17.0591 8.04492 16.9066 8.04492C16.8028 8.04492 16.6478 8.05867 16.5016 8.12742C16.189 8.27368 15.909 8.35369 15.6678 8.36494C15.5403 8.35869 15.4503 8.33118 15.3915 8.30493C15.399 8.17993 15.4065 8.05117 15.4153 7.91866L15.419 7.86116C15.5053 6.50735 15.6115 4.82352 15.164 3.82347C14.8577 3.13844 14.4465 2.54966 13.9402 2.07214C13.5164 1.67212 13.0239 1.34711 12.4764 1.1071C11.5251 0.687076 10.6375 0.624573 10.1925 0.624573H10.1913C10.1738 0.624573 10.1575 0.624573 10.1425 0.624573C10.0188 0.625823 9.81749 0.628323 9.79874 0.628323C9.35497 0.628323 8.46618 0.690826 7.51238 1.11085C6.96611 1.35086 6.47609 1.67462 6.05357 2.07464C5.54979 2.55216 5.13977 3.13969 4.83476 3.82222C4.38724 4.82102 4.49349 6.50485 4.5785 7.85741V7.85991C4.58725 8.00492 4.59725 8.15618 4.606 8.30368C4.541 8.33243 4.43474 8.36494 4.27848 8.36494C4.02597 8.36494 3.72596 8.28493 3.38719 8.12617C3.28719 8.07992 3.17343 8.05617 3.04843 8.05617C2.84717 8.05617 2.63341 8.11492 2.44965 8.22368C2.21714 8.35994 2.06713 8.55119 2.02588 8.76495C1.99963 8.90496 2.00088 9.18372 2.31089 9.46624C2.48215 9.62124 2.73216 9.765 3.05593 9.89251C3.14093 9.92626 3.24219 9.95751 3.34844 9.99126C3.71846 10.1088 4.27973 10.2863 4.42599 10.6288C4.49974 10.8026 4.46724 11.0313 4.33099 11.3088C4.32724 11.3163 4.32349 11.3238 4.32099 11.3313C4.28598 11.4113 3.96722 12.1301 3.31344 12.8889C2.94217 13.3202 2.5334 13.6814 2.09838 13.9614C1.56711 14.304 0.99333 14.5265 0.392052 14.6252C0.155791 14.664 -0.0129674 14.874 0.000783266 15.1128C0.00453344 15.1815 0.0207842 15.2503 0.0495356 15.3165V15.3178C0.14579 15.5415 0.36705 15.7303 0.727067 15.8965C1.16709 16.1003 1.82462 16.2716 2.68341 16.4053C2.72716 16.4878 2.77216 16.6941 2.80341 16.8353C2.83592 16.9853 2.86967 17.1403 2.91842 17.3041C2.97092 17.4816 3.10593 17.6941 3.45469 17.6941C3.5872 17.6941 3.73846 17.6641 3.91472 17.6304C4.17223 17.5804 4.52474 17.5116 4.96352 17.5116C5.20728 17.5116 5.45979 17.5329 5.71355 17.5754C6.20357 17.6566 6.62609 17.9541 7.11487 18.2992C7.8299 18.8042 8.63994 19.3755 9.8775 19.3755C9.91125 19.3755 9.945 19.3742 9.97875 19.3717C10.0188 19.3742 10.07 19.3755 10.1225 19.3755C11.3601 19.3755 12.1701 18.8042 12.8851 18.3004L12.8864 18.2992C13.3752 17.9554 13.7977 17.6579 14.2877 17.5766C14.5415 17.5341 14.794 17.5129 15.0377 17.5129C15.4578 17.5129 15.7903 17.5666 16.0865 17.6241C16.2803 17.6616 16.4303 17.6804 16.5466 17.6804H16.5578H16.5691C16.8241 17.6804 17.0116 17.5404 17.0828 17.2966C17.1303 17.1353 17.1641 16.9853 17.1978 16.8316C17.2266 16.6991 17.2741 16.4866 17.3166 16.4041C18.1754 16.2691 18.8329 16.099 19.2729 15.8953C19.6317 15.729 19.853 15.5403 19.9492 15.3178C19.978 15.2515 19.9955 15.1828 19.9992 15.1115C20.013 14.8752 19.8442 14.664 19.608 14.6265Z"
            fill="black" />
        </g>
        <defs>
          <clipPath id="clip0_309_4244">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
      snapchat
    </Button>
  </Col>
  <Col md={3}>
    <Button variant="outline-light" className="d-flex align-items-center">
      <svg className="me-1 snap"
        xmlns="http://www.w3.org/2000/svg" width="20"
        height="20" viewBox="0 0 20 20" fill="none">
        <g clipPath="url(#clip0_309_424)">
          <path
            d="M19.608 14.6265C16.9341 14.1865 15.729 11.4476 15.6803 11.3313C15.6765 11.3238 15.674 11.3163 15.669 11.3088C15.5328 11.0313 15.5003 10.8026 15.5753 10.6288C15.7215 10.2863 16.2815 10.1088 16.6516 9.99126C16.7591 9.95751 16.8603 9.92501 16.9441 9.89251C17.3091 9.74875 17.5691 9.59249 17.7416 9.41623C17.9466 9.20498 17.9866 9.00247 17.9841 8.87121C17.9779 8.55119 17.7329 8.26618 17.3416 8.12742C17.2103 8.07367 17.0591 8.04492 16.9066 8.04492C16.8028 8.04492 16.6478 8.05867 16.5016 8.12742C16.189 8.27368 15.909 8.35369 15.6678 8.36494C15.5403 8.35869 15.4503 8.33118 15.3915 8.30493C15.399 8.17993 15.4065 8.05117 15.4153 7.91866L15.419 7.86116C15.5053 6.50735 15.6115 4.82352 15.164 3.82347C14.8577 3.13844 14.4465 2.54966 13.9402 2.07214C13.5164 1.67212 13.0239 1.34711 12.4764 1.1071C11.5251 0.687076 10.6375 0.624573 10.1925 0.624573H10.1913C10.1738 0.624573 10.1575 0.624573 10.1425 0.624573C10.0188 0.625823 9.81749 0.628323 9.79874 0.628323C9.35497 0.628323 8.46618 0.690826 7.51238 1.11085C6.96611 1.35086 6.47609 1.67462 6.05357 2.07464C5.54979 2.55216 5.13977 3.13969 4.83476 3.82222C4.38724 4.82102 4.49349 6.50485 4.5785 7.85741V7.85991C4.58725 8.00492 4.59725 8.15618 4.606 8.30368C4.541 8.33243 4.43474 8.36494 4.27848 8.36494C4.02597 8.36494 3.72596 8.28493 3.38719 8.12617C3.28719 8.07992 3.17343 8.05617 3.04843 8.05617C2.84717 8.05617 2.63341 8.11492 2.44965 8.22368C2.21714 8.35994 2.06713 8.55119 2.02588 8.76495C1.99963 8.90496 2.00088 9.18372 2.31089 9.46624C2.48215 9.62124 2.73216 9.765 3.05593 9.89251C3.14093 9.92626 3.24219 9.95751 3.34844 9.99126C3.71846 10.1088 4.27973 10.2863 4.42599 10.6288C4.49974 10.8026 4.46724 11.0313 4.33099 11.3088C4.32724 11.3163 4.32349 11.3238 4.32099 11.3313C4.28598 11.4113 3.96722 12.1301 3.31344 12.8889C2.94217 13.3202 2.5334 13.6814 2.09838 13.9614C1.56711 14.304 0.99333 14.5265 0.392052 14.6252C0.155791 14.664 -0.0129674 14.874 0.000783266 15.1128C0.00453344 15.1815 0.0207842 15.2503 0.0495356 15.3165V15.3178C0.14579 15.5415 0.36705 15.7303 0.727067 15.8965C1.16709 16.1003 1.82462 16.2716 2.68341 16.4053C2.72716 16.4878 2.77216 16.6941 2.80341 16.8353C2.83592 16.9853 2.86967 17.1403 2.91842 17.3041C2.97092 17.4816 3.10593 17.6941 3.45469 17.6941C3.5872 17.6941 3.73846 17.6641 3.91472 17.6304C4.17223 17.5804 4.52474 17.5116 4.96352 17.5116C5.20728 17.5116 5.45979 17.5329 5.71355 17.5754C6.20357 17.6566 6.62609 17.9541 7.11487 18.2992C7.8299 18.8042 8.63994 19.3755 9.8775 19.3755C9.91125 19.3755 9.945 19.3742 9.97875 19.3717C10.0188 19.3742 10.07 19.3755 10.1225 19.3755C11.3601 19.3755 12.1701 18.8042 12.8851 18.3004L12.8864 18.2992C13.3752 17.9554 13.7977 17.6579 14.2877 17.5766C14.5415 17.5341 14.794 17.5129 15.0377 17.5129C15.4578 17.5129 15.7903 17.5666 16.0865 17.6241C16.2803 17.6616 16.4303 17.6804 16.5466 17.6804H16.5578H16.5691C16.8241 17.6804 17.0116 17.5404 17.0828 17.2966C17.1303 17.1353 17.1641 16.9853 17.1978 16.8316C17.2266 16.6991 17.2741 16.4866 17.3166 16.4041C18.1754 16.2691 18.8329 16.099 19.2729 15.8953C19.6317 15.729 19.853 15.5403 19.9492 15.3178C19.978 15.2515 19.9955 15.1828 19.9992 15.1115C20.013 14.8752 19.8442 14.664 19.608 14.6265Z"
            fill="black" />
        </g>
        <defs>
          <clipPath id="clip0_309_4245">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
      snapchat
    </Button>
  </Col>
  <Col md={3}>
    <Button variant="white" className="active d-flex align-items-center">
      <svg className="me-1 snap"
        xmlns="http://www.w3.org/2000/svg" width="20"
        height="20" viewBox="0 0 20 20" fill="none">
        <g clipPath="url(#clip0_309_424)">
          <path
            d="M19.608 14.6265C16.9341 14.1865 15.729 11.4476 15.6803 11.3313C15.6765 11.3238 15.674 11.3163 15.669 11.3088C15.5328 11.0313 15.5003 10.8026 15.5753 10.6288C15.7215 10.2863 16.2815 10.1088 16.6516 9.99126C16.7591 9.95751 16.8603 9.92501 16.9441 9.89251C17.3091 9.74875 17.5691 9.59249 17.7416 9.41623C17.9466 9.20498 17.9866 9.00247 17.9841 8.87121C17.9779 8.55119 17.7329 8.26618 17.3416 8.12742C17.2103 8.07367 17.0591 8.04492 16.9066 8.04492C16.8028 8.04492 16.6478 8.05867 16.5016 8.12742C16.189 8.27368 15.909 8.35369 15.6678 8.36494C15.5403 8.35869 15.4503 8.33118 15.3915 8.30493C15.399 8.17993 15.4065 8.05117 15.4153 7.91866L15.419 7.86116C15.5053 6.50735 15.6115 4.82352 15.164 3.82347C14.8577 3.13844 14.4465 2.54966 13.9402 2.07214C13.5164 1.67212 13.0239 1.34711 12.4764 1.1071C11.5251 0.687076 10.6375 0.624573 10.1925 0.624573H10.1913C10.1738 0.624573 10.1575 0.624573 10.1425 0.624573C10.0188 0.625823 9.81749 0.628323 9.79874 0.628323C9.35497 0.628323 8.46618 0.690826 7.51238 1.11085C6.96611 1.35086 6.47609 1.67462 6.05357 2.07464C5.54979 2.55216 5.13977 3.13969 4.83476 3.82222C4.38724 4.82102 4.49349 6.50485 4.5785 7.85741V7.85991C4.58725 8.00492 4.59725 8.15618 4.606 8.30368C4.541 8.33243 4.43474 8.36494 4.27848 8.36494C4.02597 8.36494 3.72596 8.28493 3.38719 8.12617C3.28719 8.07992 3.17343 8.05617 3.04843 8.05617C2.84717 8.05617 2.63341 8.11492 2.44965 8.22368C2.21714 8.35994 2.06713 8.55119 2.02588 8.76495C1.99963 8.90496 2.00088 9.18372 2.31089 9.46624C2.48215 9.62124 2.73216 9.765 3.05593 9.89251C3.14093 9.92626 3.24219 9.95751 3.34844 9.99126C3.71846 10.1088 4.27973 10.2863 4.42599 10.6288C4.49974 10.8026 4.46724 11.0313 4.33099 11.3088C4.32724 11.3163 4.32349 11.3238 4.32099 11.3313C4.28598 11.4113 3.96722 12.1301 3.31344 12.8889C2.94217 13.3202 2.5334 13.6814 2.09838 13.9614C1.56711 14.304 0.99333 14.5265 0.392052 14.6252C0.155791 14.664 -0.0129674 14.874 0.000783266 15.1128C0.00453344 15.1815 0.0207842 15.2503 0.0495356 15.3165V15.3178C0.14579 15.5415 0.36705 15.7303 0.727067 15.8965C1.16709 16.1003 1.82462 16.2716 2.68341 16.4053C2.72716 16.4878 2.77216 16.6941 2.80341 16.8353C2.83592 16.9853 2.86967 17.1403 2.91842 17.3041C2.97092 17.4816 3.10593 17.6941 3.45469 17.6941C3.5872 17.6941 3.73846 17.6641 3.91472 17.6304C4.17223 17.5804 4.52474 17.5116 4.96352 17.5116C5.20728 17.5116 5.45979 17.5329 5.71355 17.5754C6.20357 17.6566 6.62609 17.9541 7.11487 18.2992C7.8299 18.8042 8.63994 19.3755 9.8775 19.3755C9.91125 19.3755 9.945 19.3742 9.97875 19.3717C10.0188 19.3742 10.07 19.3755 10.1225 19.3755C11.3601 19.3755 12.1701 18.8042 12.8851 18.3004L12.8864 18.2992C13.3752 17.9554 13.7977 17.6579 14.2877 17.5766C14.5415 17.5341 14.794 17.5129 15.0377 17.5129C15.4578 17.5129 15.7903 17.5666 16.0865 17.6241C16.2803 17.6616 16.4303 17.6804 16.5466 17.6804H16.5578H16.5691C16.8241 17.6804 17.0116 17.5404 17.0828 17.2966C17.1303 17.1353 17.1641 16.9853 17.1978 16.8316C17.2266 16.6991 17.2741 16.4866 17.3166 16.4041C18.1754 16.2691 18.8329 16.099 19.2729 15.8953C19.6317 15.729 19.853 15.5403 19.9492 15.3178C19.978 15.2515 19.9955 15.1828 19.9992 15.1115C20.013 14.8752 19.8442 14.664 19.608 14.6265Z"
            fill="black" />
        </g>
        <defs>
          <clipPath id="clip0_309_4245">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
      snapchat
    </Button>
  </Col>
  <Col md={2}>
    <Button variant="outline-light" className="btn-square btn-md d-flex justify-content-center align-items-center">
      <svg className="me-1 snap"
        xmlns="http://www.w3.org/2000/svg" width="20"
        height="20" viewBox="0 0 20 20" fill="none">
        <g clipPath="url(#clip0_309_424)">
          <path
            d="M19.608 14.6265C16.9341 14.1865 15.729 11.4476 15.6803 11.3313C15.6765 11.3238 15.674 11.3163 15.669 11.3088C15.5328 11.0313 15.5003 10.8026 15.5753 10.6288C15.7215 10.2863 16.2815 10.1088 16.6516 9.99126C16.7591 9.95751 16.8603 9.92501 16.9441 9.89251C17.3091 9.74875 17.5691 9.59249 17.7416 9.41623C17.9466 9.20498 17.9866 9.00247 17.9841 8.87121C17.9779 8.55119 17.7329 8.26618 17.3416 8.12742C17.2103 8.07367 17.0591 8.04492 16.9066 8.04492C16.8028 8.04492 16.6478 8.05867 16.5016 8.12742C16.189 8.27368 15.909 8.35369 15.6678 8.36494C15.5403 8.35869 15.4503 8.33118 15.3915 8.30493C15.399 8.17993 15.4065 8.05117 15.4153 7.91866L15.419 7.86116C15.5053 6.50735 15.6115 4.82352 15.164 3.82347C14.8577 3.13844 14.4465 2.54966 13.9402 2.07214C13.5164 1.67212 13.0239 1.34711 12.4764 1.1071C11.5251 0.687076 10.6375 0.624573 10.1925 0.624573H10.1913C10.1738 0.624573 10.1575 0.624573 10.1425 0.624573C10.0188 0.625823 9.81749 0.628323 9.79874 0.628323C9.35497 0.628323 8.46618 0.690826 7.51238 1.11085C6.96611 1.35086 6.47609 1.67462 6.05357 2.07464C5.54979 2.55216 5.13977 3.13969 4.83476 3.82222C4.38724 4.82102 4.49349 6.50485 4.5785 7.85741V7.85991C4.58725 8.00492 4.59725 8.15618 4.606 8.30368C4.541 8.33243 4.43474 8.36494 4.27848 8.36494C4.02597 8.36494 3.72596 8.28493 3.38719 8.12617C3.28719 8.07992 3.17343 8.05617 3.04843 8.05617C2.84717 8.05617 2.63341 8.11492 2.44965 8.22368C2.21714 8.35994 2.06713 8.55119 2.02588 8.76495C1.99963 8.90496 2.00088 9.18372 2.31089 9.46624C2.48215 9.62124 2.73216 9.765 3.05593 9.89251C3.14093 9.92626 3.24219 9.95751 3.34844 9.99126C3.71846 10.1088 4.27973 10.2863 4.42599 10.6288C4.49974 10.8026 4.46724 11.0313 4.33099 11.3088C4.32724 11.3163 4.32349 11.3238 4.32099 11.3313C4.28598 11.4113 3.96722 12.1301 3.31344 12.8889C2.94217 13.3202 2.5334 13.6814 2.09838 13.9614C1.56711 14.304 0.99333 14.5265 0.392052 14.6252C0.155791 14.664 -0.0129674 14.874 0.000783266 15.1128C0.00453344 15.1815 0.0207842 15.2503 0.0495356 15.3165V15.3178C0.14579 15.5415 0.36705 15.7303 0.727067 15.8965C1.16709 16.1003 1.82462 16.2716 2.68341 16.4053C2.72716 16.4878 2.77216 16.6941 2.80341 16.8353C2.83592 16.9853 2.86967 17.1403 2.91842 17.3041C2.97092 17.4816 3.10593 17.6941 3.45469 17.6941C3.5872 17.6941 3.73846 17.6641 3.91472 17.6304C4.17223 17.5804 4.52474 17.5116 4.96352 17.5116C5.20728 17.5116 5.45979 17.5329 5.71355 17.5754C6.20357 17.6566 6.62609 17.9541 7.11487 18.2992C7.8299 18.8042 8.63994 19.3755 9.8775 19.3755C9.91125 19.3755 9.945 19.3742 9.97875 19.3717C10.0188 19.3742 10.07 19.3755 10.1225 19.3755C11.3601 19.3755 12.1701 18.8042 12.8851 18.3004L12.8864 18.2992C13.3752 17.9554 13.7977 17.6579 14.2877 17.5766C14.5415 17.5341 14.794 17.5129 15.0377 17.5129C15.4578 17.5129 15.7903 17.5666 16.0865 17.6241C16.2803 17.6616 16.4303 17.6804 16.5466 17.6804H16.5578H16.5691C16.8241 17.6804 17.0116 17.5404 17.0828 17.2966C17.1303 17.1353 17.1641 16.9853 17.1978 16.8316C17.2266 16.6991 17.2741 16.4866 17.3166 16.4041C18.1754 16.2691 18.8329 16.099 19.2729 15.8953C19.6317 15.729 19.853 15.5403 19.9492 15.3178C19.978 15.2515 19.9955 15.1828 19.9992 15.1115C20.013 14.8752 19.8442 14.664 19.608 14.6265Z"
            fill="black" />
        </g>
        <defs>
          <clipPath id="clip0_309_4245">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Button>
  </Col>
  <Col md={1}>
    <Button className="btn-square btn-md btn-snapchat d-flex justify-content-center align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="20" height="20" viewBox="0 0 20 20"
        fill="none">
        <g clipPath="url(#clip0_309_424)">
          <path
            d="M19.608 14.6265C16.9341 14.1865 15.729 11.4476 15.6803 11.3313C15.6765 11.3238 15.674 11.3163 15.669 11.3088C15.5328 11.0313 15.5003 10.8026 15.5753 10.6288C15.7215 10.2863 16.2815 10.1088 16.6516 9.99126C16.7591 9.95751 16.8603 9.92501 16.9441 9.89251C17.3091 9.74875 17.5691 9.59249 17.7416 9.41623C17.9466 9.20498 17.9866 9.00247 17.9841 8.87121C17.9779 8.55119 17.7329 8.26618 17.3416 8.12742C17.2103 8.07367 17.0591 8.04492 16.9066 8.04492C16.8028 8.04492 16.6478 8.05867 16.5016 8.12742C16.189 8.27368 15.909 8.35369 15.6678 8.36494C15.5403 8.35869 15.4503 8.33118 15.3915 8.30493C15.399 8.17993 15.4065 8.05117 15.4153 7.91866L15.419 7.86116C15.5053 6.50735 15.6115 4.82352 15.164 3.82347C14.8577 3.13844 14.4465 2.54966 13.9402 2.07214C13.5164 1.67212 13.0239 1.34711 12.4764 1.1071C11.5251 0.687076 10.6375 0.624573 10.1925 0.624573H10.1913C10.1738 0.624573 10.1575 0.624573 10.1425 0.624573C10.0188 0.625823 9.81749 0.628323 9.79874 0.628323C9.35497 0.628323 8.46618 0.690826 7.51238 1.11085C6.96611 1.35086 6.47609 1.67462 6.05357 2.07464C5.54979 2.55216 5.13977 3.13969 4.83476 3.82222C4.38724 4.82102 4.49349 6.50485 4.5785 7.85741V7.85991C4.58725 8.00492 4.59725 8.15618 4.606 8.30368C4.541 8.33243 4.43474 8.36494 4.27848 8.36494C4.02597 8.36494 3.72596 8.28493 3.38719 8.12617C3.28719 8.07992 3.17343 8.05617 3.04843 8.05617C2.84717 8.05617 2.63341 8.11492 2.44965 8.22368C2.21714 8.35994 2.06713 8.55119 2.02588 8.76495C1.99963 8.90496 2.00088 9.18372 2.31089 9.46624C2.48215 9.62124 2.73216 9.765 3.05593 9.89251C3.14093 9.92626 3.24219 9.95751 3.34844 9.99126C3.71846 10.1088 4.27973 10.2863 4.42599 10.6288C4.49974 10.8026 4.46724 11.0313 4.33099 11.3088C4.32724 11.3163 4.32349 11.3238 4.32099 11.3313C4.28598 11.4113 3.96722 12.1301 3.31344 12.8889C2.94217 13.3202 2.5334 13.6814 2.09838 13.9614C1.56711 14.304 0.99333 14.5265 0.392052 14.6252C0.155791 14.664 -0.0129674 14.874 0.000783266 15.1128C0.00453344 15.1815 0.0207842 15.2503 0.0495356 15.3165V15.3178C0.14579 15.5415 0.36705 15.7303 0.727067 15.8965C1.16709 16.1003 1.82462 16.2716 2.68341 16.4053C2.72716 16.4878 2.77216 16.6941 2.80341 16.8353C2.83592 16.9853 2.86967 17.1403 2.91842 17.3041C2.97092 17.4816 3.10593 17.6941 3.45469 17.6941C3.5872 17.6941 3.73846 17.6641 3.91472 17.6304C4.17223 17.5804 4.52474 17.5116 4.96352 17.5116C5.20728 17.5116 5.45979 17.5329 5.71355 17.5754C6.20357 17.6566 6.62609 17.9541 7.11487 18.2992C7.8299 18.8042 8.63994 19.3755 9.8775 19.3755C9.91125 19.3755 9.945 19.3742 9.97875 19.3717C10.0188 19.3742 10.07 19.3755 10.1225 19.3755C11.3601 19.3755 12.1701 18.8042 12.8851 18.3004L12.8864 18.2992C13.3752 17.9554 13.7977 17.6579 14.2877 17.5766C14.5415 17.5341 14.794 17.5129 15.0377 17.5129C15.4578 17.5129 15.7903 17.5666 16.0865 17.6241C16.2803 17.6616 16.4303 17.6804 16.5466 17.6804H16.5578H16.5691C16.8241 17.6804 17.0116 17.5404 17.0828 17.2966C17.1303 17.1353 17.1641 16.9853 17.1978 16.8316C17.2266 16.6991 17.2741 16.4866 17.3166 16.4041C18.1754 16.2691 18.8329 16.099 19.2729 15.8953C19.6317 15.729 19.853 15.5403 19.9492 15.3178C19.978 15.2515 19.9955 15.1828 19.9992 15.1115C20.013 14.8752 19.8442 14.664 19.608 14.6265Z"
            fill="black" />
        </g>
        <defs>
          <clipPath id="clip0_309_4244">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Button>
  </Col>
  <Col md={3}>
    <Button className="btn-dribbble d-flex align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="21" height="20" viewBox="0 0 21 20"
        fill="none">
        <g clipPath="url(#clip0_309_428)">
          <path
            d="M10.5 19.3075C15.6777 19.3075 19.875 15.1102 19.875 9.9325C19.875 4.75483 15.6777 0.557495 10.5 0.557495C5.32233 0.557495 1.125 4.75483 1.125 9.9325C1.125 15.1102 5.32233 19.3075 10.5 19.3075Z"
            fill="white" />
          <path
            d="M10.5 0C4.98625 0 0.5 4.48625 0.5 10C0.5 15.5138 4.98625 20 10.5 20C16.0138 20 20.5 15.5138 20.5 10C20.5 4.48625 16.0138 0 10.5 0ZM19.2463 10.075C17.1287 9.51625 14.9575 9.45125 12.8888 9.8775C12.6063 9.1725 12.3012 8.47875 11.9738 7.79375C13.845 6.91875 15.575 5.7325 17.0925 4.26625C18.4312 5.8025 19.25 7.805 19.25 10C19.25 10.025 19.2463 10.0488 19.2463 10.075ZM16.2088 3.38375C14.7913 4.7525 13.1788 5.8675 11.4312 6.6825C10.4975 4.895 9.405 3.1875 8.16875 1.575C8.9125 1.36875 9.69125 1.25 10.5 1.25C12.6812 1.25 14.675 2.0575 16.2088 3.38375ZM6.93375 2.0175C8.2025 3.6325 9.31625 5.3525 10.265 7.15375C7.64 8.15625 4.79 8.54125 1.93625 8.2075C2.515 5.4375 4.41 3.15 6.93375 2.0175ZM1.75 10C1.75 9.8125 1.76625 9.62875 1.77875 9.445C2.51875 9.5325 3.25875 9.59 3.99625 9.59C6.34875 9.59 8.66 9.13 10.8263 8.28625C11.1262 8.91125 11.4087 9.545 11.67 10.1875C8.5975 11.11 5.86 13.0775 4.0175 15.8563C2.61375 14.3038 1.75 12.2525 1.75 10ZM4.93125 16.7438C6.62625 14.0788 9.21125 12.2 12.12 11.35C12.91 13.525 13.4787 15.7837 13.81 18.095C12.7887 18.515 11.6713 18.75 10.5 18.75C8.38625 18.75 6.445 17.9963 4.93125 16.7438ZM14.9825 17.5C14.6388 15.2975 14.0938 13.1412 13.3475 11.06C15.2362 10.705 17.2125 10.7887 19.1375 11.3325C18.7337 13.9525 17.17 16.1875 14.9825 17.5Z"
            fill="#EC407A" />
        </g>
        <defs>
          <clipPath id="clip0_309_428">
            <rect width="20" height="20" fill="white"
              transform="translate(0.5)" />
          </clipPath>
        </defs>
      </svg>
      dribbble
    </Button>
  </Col>
  <Col md={3}>
    <Button variant="outline-light" className="d-flex align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="21" height="20" viewBox="0 0 21 20"
        fill="none">
        <g clipPath="url(#clip0_309_543)">
          <path
            d="M10.5 19.3075C15.6777 19.3075 19.875 15.1102 19.875 9.9325C19.875 4.75483 15.6777 0.557495 10.5 0.557495C5.32233 0.557495 1.125 4.75483 1.125 9.9325C1.125 15.1102 5.32233 19.3075 10.5 19.3075Z"
            fill="#EC407A" />
          <path
            d="M10.5 0C4.98625 0 0.5 4.48625 0.5 10C0.5 15.5138 4.98625 20 10.5 20C16.0138 20 20.5 15.5138 20.5 10C20.5 4.48625 16.0138 0 10.5 0ZM19.2463 10.075C17.1287 9.51625 14.9575 9.45125 12.8888 9.8775C12.6063 9.1725 12.3012 8.47875 11.9738 7.79375C13.845 6.91875 15.575 5.7325 17.0925 4.26625C18.4312 5.8025 19.25 7.805 19.25 10C19.25 10.025 19.2463 10.0488 19.2463 10.075ZM16.2088 3.38375C14.7913 4.7525 13.1788 5.8675 11.4312 6.6825C10.4975 4.895 9.405 3.1875 8.16875 1.575C8.9125 1.36875 9.69125 1.25 10.5 1.25C12.6812 1.25 14.675 2.0575 16.2088 3.38375ZM6.93375 2.0175C8.2025 3.6325 9.31625 5.3525 10.265 7.15375C7.64 8.15625 4.79 8.54125 1.93625 8.2075C2.515 5.4375 4.41 3.15 6.93375 2.0175ZM1.75 10C1.75 9.8125 1.76625 9.62875 1.77875 9.445C2.51875 9.5325 3.25875 9.59 3.99625 9.59C6.34875 9.59 8.66 9.13 10.8263 8.28625C11.1262 8.91125 11.4087 9.545 11.67 10.1875C8.5975 11.11 5.86 13.0775 4.0175 15.8563C2.61375 14.3038 1.75 12.2525 1.75 10ZM4.93125 16.7438C6.62625 14.0788 9.21125 12.2 12.12 11.35C12.91 13.525 13.4787 15.7837 13.81 18.095C12.7887 18.515 11.6713 18.75 10.5 18.75C8.38625 18.75 6.445 17.9963 4.93125 16.7438ZM14.9825 17.5C14.6388 15.2975 14.0938 13.1412 13.3475 11.06C15.2362 10.705 17.2125 10.7887 19.1375 11.3325C18.7337 13.9525 17.17 16.1875 14.9825 17.5Z"
            fill="#C2185B" />
        </g>
        <defs>
          <clipPath id="clip0_309_5434">
            <rect width="20" height="20" fill="white"
              transform="translate(0.5)" />
          </clipPath>
        </defs>
      </svg>
      dribbble
    </Button>
  </Col>
  <Col md={3}>
    <Button variant="white" className="active d-flex align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="21" height="20" viewBox="0 0 21 20"
        fill="none">
        <g clipPath="url(#clip0_309_543)">
          <path
            d="M10.5 19.3075C15.6777 19.3075 19.875 15.1102 19.875 9.9325C19.875 4.75483 15.6777 0.557495 10.5 0.557495C5.32233 0.557495 1.125 4.75483 1.125 9.9325C1.125 15.1102 5.32233 19.3075 10.5 19.3075Z"
            fill="#EC407A" />
          <path
            d="M10.5 0C4.98625 0 0.5 4.48625 0.5 10C0.5 15.5138 4.98625 20 10.5 20C16.0138 20 20.5 15.5138 20.5 10C20.5 4.48625 16.0138 0 10.5 0ZM19.2463 10.075C17.1287 9.51625 14.9575 9.45125 12.8888 9.8775C12.6063 9.1725 12.3012 8.47875 11.9738 7.79375C13.845 6.91875 15.575 5.7325 17.0925 4.26625C18.4312 5.8025 19.25 7.805 19.25 10C19.25 10.025 19.2463 10.0488 19.2463 10.075ZM16.2088 3.38375C14.7913 4.7525 13.1788 5.8675 11.4312 6.6825C10.4975 4.895 9.405 3.1875 8.16875 1.575C8.9125 1.36875 9.69125 1.25 10.5 1.25C12.6812 1.25 14.675 2.0575 16.2088 3.38375ZM6.93375 2.0175C8.2025 3.6325 9.31625 5.3525 10.265 7.15375C7.64 8.15625 4.79 8.54125 1.93625 8.2075C2.515 5.4375 4.41 3.15 6.93375 2.0175ZM1.75 10C1.75 9.8125 1.76625 9.62875 1.77875 9.445C2.51875 9.5325 3.25875 9.59 3.99625 9.59C6.34875 9.59 8.66 9.13 10.8263 8.28625C11.1262 8.91125 11.4087 9.545 11.67 10.1875C8.5975 11.11 5.86 13.0775 4.0175 15.8563C2.61375 14.3038 1.75 12.2525 1.75 10ZM4.93125 16.7438C6.62625 14.0788 9.21125 12.2 12.12 11.35C12.91 13.525 13.4787 15.7837 13.81 18.095C12.7887 18.515 11.6713 18.75 10.5 18.75C8.38625 18.75 6.445 17.9963 4.93125 16.7438ZM14.9825 17.5C14.6388 15.2975 14.0938 13.1412 13.3475 11.06C15.2362 10.705 17.2125 10.7887 19.1375 11.3325C18.7337 13.9525 17.17 16.1875 14.9825 17.5Z"
            fill="#C2185B" />
        </g>
        <defs>
          <clipPath id="clip0_309_5434">
            <rect width="20" height="20" fill="white"
              transform="translate(0.5)" />
          </clipPath>
        </defs>
      </svg>
      dribbble
    </Button>
  </Col>
  <Col md={2}>
    <Button variant="outline-light" className="btn-square btn-md d-flex justify-content-center align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="21" height="20" viewBox="0 0 21 20"
        fill="none">
        <g clipPath="url(#clip0_309_543)">
          <path
            d="M10.5 19.3075C15.6777 19.3075 19.875 15.1102 19.875 9.9325C19.875 4.75483 15.6777 0.557495 10.5 0.557495C5.32233 0.557495 1.125 4.75483 1.125 9.9325C1.125 15.1102 5.32233 19.3075 10.5 19.3075Z"
            fill="#EC407A" />
          <path
            d="M10.5 0C4.98625 0 0.5 4.48625 0.5 10C0.5 15.5138 4.98625 20 10.5 20C16.0138 20 20.5 15.5138 20.5 10C20.5 4.48625 16.0138 0 10.5 0ZM19.2463 10.075C17.1287 9.51625 14.9575 9.45125 12.8888 9.8775C12.6063 9.1725 12.3012 8.47875 11.9738 7.79375C13.845 6.91875 15.575 5.7325 17.0925 4.26625C18.4312 5.8025 19.25 7.805 19.25 10C19.25 10.025 19.2463 10.0488 19.2463 10.075ZM16.2088 3.38375C14.7913 4.7525 13.1788 5.8675 11.4312 6.6825C10.4975 4.895 9.405 3.1875 8.16875 1.575C8.9125 1.36875 9.69125 1.25 10.5 1.25C12.6812 1.25 14.675 2.0575 16.2088 3.38375ZM6.93375 2.0175C8.2025 3.6325 9.31625 5.3525 10.265 7.15375C7.64 8.15625 4.79 8.54125 1.93625 8.2075C2.515 5.4375 4.41 3.15 6.93375 2.0175ZM1.75 10C1.75 9.8125 1.76625 9.62875 1.77875 9.445C2.51875 9.5325 3.25875 9.59 3.99625 9.59C6.34875 9.59 8.66 9.13 10.8263 8.28625C11.1262 8.91125 11.4087 9.545 11.67 10.1875C8.5975 11.11 5.86 13.0775 4.0175 15.8563C2.61375 14.3038 1.75 12.2525 1.75 10ZM4.93125 16.7438C6.62625 14.0788 9.21125 12.2 12.12 11.35C12.91 13.525 13.4787 15.7837 13.81 18.095C12.7887 18.515 11.6713 18.75 10.5 18.75C8.38625 18.75 6.445 17.9963 4.93125 16.7438ZM14.9825 17.5C14.6388 15.2975 14.0938 13.1412 13.3475 11.06C15.2362 10.705 17.2125 10.7887 19.1375 11.3325C18.7337 13.9525 17.17 16.1875 14.9825 17.5Z"
            fill="#C2185B" />
        </g>
        <defs>
          <clipPath id="clip0_309_5434">
            <rect width="20" height="20" fill="white"
              transform="translate(0.5)" />
          </clipPath>
        </defs>
      </svg>
    </Button>
  </Col>
  <Col md={1}>
    <Button className="btn-square btn-md btn-dribbble d-flex justify-content-center align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="21" height="20" viewBox="0 0 21 20"
        fill="none">
        <g clipPath="url(#clip0_309_428)">
          <path
            d="M10.5 19.3075C15.6777 19.3075 19.875 15.1102 19.875 9.9325C19.875 4.75483 15.6777 0.557495 10.5 0.557495C5.32233 0.557495 1.125 4.75483 1.125 9.9325C1.125 15.1102 5.32233 19.3075 10.5 19.3075Z"
            fill="white" />
          <path
            d="M10.5 0C4.98625 0 0.5 4.48625 0.5 10C0.5 15.5138 4.98625 20 10.5 20C16.0138 20 20.5 15.5138 20.5 10C20.5 4.48625 16.0138 0 10.5 0ZM19.2463 10.075C17.1287 9.51625 14.9575 9.45125 12.8888 9.8775C12.6063 9.1725 12.3012 8.47875 11.9738 7.79375C13.845 6.91875 15.575 5.7325 17.0925 4.26625C18.4312 5.8025 19.25 7.805 19.25 10C19.25 10.025 19.2463 10.0488 19.2463 10.075ZM16.2088 3.38375C14.7913 4.7525 13.1788 5.8675 11.4312 6.6825C10.4975 4.895 9.405 3.1875 8.16875 1.575C8.9125 1.36875 9.69125 1.25 10.5 1.25C12.6812 1.25 14.675 2.0575 16.2088 3.38375ZM6.93375 2.0175C8.2025 3.6325 9.31625 5.3525 10.265 7.15375C7.64 8.15625 4.79 8.54125 1.93625 8.2075C2.515 5.4375 4.41 3.15 6.93375 2.0175ZM1.75 10C1.75 9.8125 1.76625 9.62875 1.77875 9.445C2.51875 9.5325 3.25875 9.59 3.99625 9.59C6.34875 9.59 8.66 9.13 10.8263 8.28625C11.1262 8.91125 11.4087 9.545 11.67 10.1875C8.5975 11.11 5.86 13.0775 4.0175 15.8563C2.61375 14.3038 1.75 12.2525 1.75 10ZM4.93125 16.7438C6.62625 14.0788 9.21125 12.2 12.12 11.35C12.91 13.525 13.4787 15.7837 13.81 18.095C12.7887 18.515 11.6713 18.75 10.5 18.75C8.38625 18.75 6.445 17.9963 4.93125 16.7438ZM14.9825 17.5C14.6388 15.2975 14.0938 13.1412 13.3475 11.06C15.2362 10.705 17.2125 10.7887 19.1375 11.3325C18.7337 13.9525 17.17 16.1875 14.9825 17.5Z"
            fill="#EC407A" />
        </g>
        <defs>
          <clipPath id="clip0_309_428">
            <rect width="20" height="20" fill="white"
              transform="translate(0.5)" />
          </clipPath>
        </defs>
      </svg>
    </Button>
  </Col>
  <Col md={3}>
    <Button className="btn-pinterest d-flex align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="21" height="20" viewBox="0 0 21 20"
        fill="none">
        <path
          d="M10.7716 0C5.29013 0 2.375 3.51266 2.375 7.34283C2.375 9.11916 3.36754 11.3343 4.95637 12.0368C5.19763 12.1455 5.32888 12.0993 5.38264 11.8755C5.43014 11.7055 5.6389 10.8867 5.74015 10.5005C5.7714 10.3767 5.75515 10.2692 5.65515 10.153C5.12762 9.54293 4.70885 8.43163 4.70885 7.38908C4.70885 4.71771 6.8327 2.12385 10.4466 2.12385C13.5718 2.12385 15.7581 4.15394 15.7581 7.05782C15.7581 10.3392 14.0218 12.6093 11.7654 12.6093C10.5166 12.6093 9.58657 11.6293 9.88159 10.4167C10.2379 8.9729 10.9366 7.42033 10.9366 6.37904C10.9366 5.44524 10.4091 4.67271 9.33156 4.67271C8.06026 4.67271 7.02896 5.93152 7.02896 7.62159C7.02896 8.69539 7.40898 9.42042 7.40898 9.42042C7.40898 9.42042 6.15142 14.5007 5.91766 15.4494C5.52264 17.0558 5.97141 19.6571 6.01016 19.8809C6.03391 20.0046 6.17267 20.0434 6.25017 19.9421C6.37393 19.7796 7.894 17.6108 8.32027 16.0432C8.47527 15.4719 9.11155 13.1556 9.11155 13.1556C9.53032 13.9119 10.7391 14.5457 12.0267 14.5457C15.8569 14.5457 18.6245 11.1793 18.6245 7.00156C18.6107 2.99638 15.1831 0 10.7716 0Z"
          fill="white" />
      </svg>
      pinterest
    </Button>
  </Col>
  <Col md={3}>
    <Button variant="outline-light" className="d-flex align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="21" height="20" viewBox="0 0 21 20"
        fill="none">
        <path
          d="M10.7716 0C5.29013 0 2.375 3.51266 2.375 7.34283C2.375 9.11916 3.36754 11.3343 4.95637 12.0368C5.19763 12.1455 5.32888 12.0993 5.38264 11.8755C5.43014 11.7055 5.6389 10.8867 5.74015 10.5005C5.7714 10.3767 5.75515 10.2692 5.65515 10.153C5.12762 9.54293 4.70885 8.43163 4.70885 7.38908C4.70885 4.71771 6.8327 2.12385 10.4466 2.12385C13.5718 2.12385 15.7581 4.15394 15.7581 7.05782C15.7581 10.3392 14.0218 12.6093 11.7654 12.6093C10.5166 12.6093 9.58657 11.6293 9.88159 10.4167C10.2379 8.9729 10.9366 7.42033 10.9366 6.37904C10.9366 5.44524 10.4091 4.67271 9.33156 4.67271C8.06026 4.67271 7.02896 5.93152 7.02896 7.62159C7.02896 8.69539 7.40898 9.42042 7.40898 9.42042C7.40898 9.42042 6.15142 14.5007 5.91766 15.4494C5.52264 17.0558 5.97141 19.6571 6.01016 19.8809C6.03391 20.0046 6.17267 20.0434 6.25017 19.9421C6.37393 19.7796 7.894 17.6108 8.32027 16.0432C8.47527 15.4719 9.11155 13.1556 9.11155 13.1556C9.53032 13.9119 10.7391 14.5457 12.0267 14.5457C15.8569 14.5457 18.6245 11.1793 18.6245 7.00156C18.6107 2.99638 15.1831 0 10.7716 0Z"
          fill="#D32F2F" />
      </svg>
      pinterest
    </Button>
  </Col>
  <Col md={3}>
    <Button variant="white" className="active d-flex align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="21" height="20" viewBox="0 0 21 20"
        fill="none">
        <path
          d="M10.7716 0C5.29013 0 2.375 3.51266 2.375 7.34283C2.375 9.11916 3.36754 11.3343 4.95637 12.0368C5.19763 12.1455 5.32888 12.0993 5.38264 11.8755C5.43014 11.7055 5.6389 10.8867 5.74015 10.5005C5.7714 10.3767 5.75515 10.2692 5.65515 10.153C5.12762 9.54293 4.70885 8.43163 4.70885 7.38908C4.70885 4.71771 6.8327 2.12385 10.4466 2.12385C13.5718 2.12385 15.7581 4.15394 15.7581 7.05782C15.7581 10.3392 14.0218 12.6093 11.7654 12.6093C10.5166 12.6093 9.58657 11.6293 9.88159 10.4167C10.2379 8.9729 10.9366 7.42033 10.9366 6.37904C10.9366 5.44524 10.4091 4.67271 9.33156 4.67271C8.06026 4.67271 7.02896 5.93152 7.02896 7.62159C7.02896 8.69539 7.40898 9.42042 7.40898 9.42042C7.40898 9.42042 6.15142 14.5007 5.91766 15.4494C5.52264 17.0558 5.97141 19.6571 6.01016 19.8809C6.03391 20.0046 6.17267 20.0434 6.25017 19.9421C6.37393 19.7796 7.894 17.6108 8.32027 16.0432C8.47527 15.4719 9.11155 13.1556 9.11155 13.1556C9.53032 13.9119 10.7391 14.5457 12.0267 14.5457C15.8569 14.5457 18.6245 11.1793 18.6245 7.00156C18.6107 2.99638 15.1831 0 10.7716 0Z"
          fill="#D32F2F" />
      </svg>
      pinterest
    </Button>
  </Col>
  <Col md={2}>
    <Button variant="outline-light" className="btn-square btn-md d-flex justify-content-center align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="21" height="20" viewBox="0 0 21 20"
        fill="none">
        <path
          d="M10.7716 0C5.29013 0 2.375 3.51266 2.375 7.34283C2.375 9.11916 3.36754 11.3343 4.95637 12.0368C5.19763 12.1455 5.32888 12.0993 5.38264 11.8755C5.43014 11.7055 5.6389 10.8867 5.74015 10.5005C5.7714 10.3767 5.75515 10.2692 5.65515 10.153C5.12762 9.54293 4.70885 8.43163 4.70885 7.38908C4.70885 4.71771 6.8327 2.12385 10.4466 2.12385C13.5718 2.12385 15.7581 4.15394 15.7581 7.05782C15.7581 10.3392 14.0218 12.6093 11.7654 12.6093C10.5166 12.6093 9.58657 11.6293 9.88159 10.4167C10.2379 8.9729 10.9366 7.42033 10.9366 6.37904C10.9366 5.44524 10.4091 4.67271 9.33156 4.67271C8.06026 4.67271 7.02896 5.93152 7.02896 7.62159C7.02896 8.69539 7.40898 9.42042 7.40898 9.42042C7.40898 9.42042 6.15142 14.5007 5.91766 15.4494C5.52264 17.0558 5.97141 19.6571 6.01016 19.8809C6.03391 20.0046 6.17267 20.0434 6.25017 19.9421C6.37393 19.7796 7.894 17.6108 8.32027 16.0432C8.47527 15.4719 9.11155 13.1556 9.11155 13.1556C9.53032 13.9119 10.7391 14.5457 12.0267 14.5457C15.8569 14.5457 18.6245 11.1793 18.6245 7.00156C18.6107 2.99638 15.1831 0 10.7716 0Z"
          fill="#D32F2F" />
      </svg>
    </Button>
  </Col>
  <Col md={1}>
    <Button className="btn-square btn-md btn-pinterest d-flex justify-content-center align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="21" height="20" viewBox="0 0 21 20"
        fill="none">
        <path
          d="M10.7716 0C5.29013 0 2.375 3.51266 2.375 7.34283C2.375 9.11916 3.36754 11.3343 4.95637 12.0368C5.19763 12.1455 5.32888 12.0993 5.38264 11.8755C5.43014 11.7055 5.6389 10.8867 5.74015 10.5005C5.7714 10.3767 5.75515 10.2692 5.65515 10.153C5.12762 9.54293 4.70885 8.43163 4.70885 7.38908C4.70885 4.71771 6.8327 2.12385 10.4466 2.12385C13.5718 2.12385 15.7581 4.15394 15.7581 7.05782C15.7581 10.3392 14.0218 12.6093 11.7654 12.6093C10.5166 12.6093 9.58657 11.6293 9.88159 10.4167C10.2379 8.9729 10.9366 7.42033 10.9366 6.37904C10.9366 5.44524 10.4091 4.67271 9.33156 4.67271C8.06026 4.67271 7.02896 5.93152 7.02896 7.62159C7.02896 8.69539 7.40898 9.42042 7.40898 9.42042C7.40898 9.42042 6.15142 14.5007 5.91766 15.4494C5.52264 17.0558 5.97141 19.6571 6.01016 19.8809C6.03391 20.0046 6.17267 20.0434 6.25017 19.9421C6.37393 19.7796 7.894 17.6108 8.32027 16.0432C8.47527 15.4719 9.11155 13.1556 9.11155 13.1556C9.53032 13.9119 10.7391 14.5457 12.0267 14.5457C15.8569 14.5457 18.6245 11.1793 18.6245 7.00156C18.6107 2.99638 15.1831 0 10.7716 0Z"
          fill="white" />
      </svg>
    </Button>
  </Col>
  <Col md={3}>
    <Button className="btn-youtube d-flex align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="20" height="20" viewBox="0 0 20 20"
        fill="none">
        <path
          d="M19.15 4.45C18.6075 3.485 18.0188 3.3075 16.82 3.24C15.6225 3.15875 12.6112 3.125 10.0025 3.125C7.38875 3.125 4.37625 3.15875 3.18 3.23875C1.98375 3.3075 1.39375 3.48375 0.84625 4.45C0.2875 5.41375 0 7.07375 0 9.99625C0 9.99875 0 10 0 10C0 10.0025 0 10.0038 0 10.0038V10.0063C0 12.9163 0.2875 14.5887 0.84625 15.5425C1.39375 16.5075 1.9825 16.6825 3.17875 16.7638C4.37625 16.8338 7.38875 16.875 10.0025 16.875C12.6112 16.875 15.6225 16.8337 16.8212 16.765C18.02 16.6837 18.6087 16.5088 19.1513 15.5438C19.715 14.59 20 12.9175 20 10.0075C20 10.0075 20 10.0038 20 10.0013C20 10.0013 20 9.99875 20 9.9975C20 7.07375 19.715 5.41375 19.15 4.45Z"
          fill="white" />
        <path d="M7.5 13.75V6.25L13.75 10L7.5 13.75Z"
          fill="#F44336" />
      </svg>
      youtube
    </Button>
  </Col>
  <Col md={3}>
    <Button variant="outline-light" className="d-flex align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="20" height="20" viewBox="0 0 20 20"
        fill="none">
        <path
          d="M19.15 4.45C18.6075 3.485 18.0188 3.3075 16.82 3.24C15.6225 3.15875 12.6112 3.125 10.0025 3.125C7.38875 3.125 4.37625 3.15875 3.18 3.23875C1.98375 3.3075 1.39375 3.48375 0.84625 4.45C0.2875 5.41375 0 7.07375 0 9.99625C0 9.99875 0 10 0 10C0 10.0025 0 10.0038 0 10.0038V10.0063C0 12.9163 0.2875 14.5887 0.84625 15.5425C1.39375 16.5075 1.9825 16.6825 3.17875 16.7638C4.37625 16.8338 7.38875 16.875 10.0025 16.875C12.6112 16.875 15.6225 16.8337 16.8212 16.765C18.02 16.6837 18.6087 16.5088 19.1513 15.5438C19.715 14.59 20 12.9175 20 10.0075C20 10.0075 20 10.0038 20 10.0013C20 10.0013 20 9.99875 20 9.9975C20 7.07375 19.715 5.41375 19.15 4.45Z"
          fill="#F44336" />
        <path d="M7.5 13.75V6.25L13.75 10L7.5 13.75Z"
          fill="#FAFAFA" />
      </svg>
      youtube
    </Button>
  </Col>
  <Col md={3}>
    <Button variant="white" className="active d-flex align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="20" height="20" viewBox="0 0 20 20"
        fill="none">
        <path
          d="M19.15 4.45C18.6075 3.485 18.0188 3.3075 16.82 3.24C15.6225 3.15875 12.6112 3.125 10.0025 3.125C7.38875 3.125 4.37625 3.15875 3.18 3.23875C1.98375 3.3075 1.39375 3.48375 0.84625 4.45C0.2875 5.41375 0 7.07375 0 9.99625C0 9.99875 0 10 0 10C0 10.0025 0 10.0038 0 10.0038V10.0063C0 12.9163 0.2875 14.5887 0.84625 15.5425C1.39375 16.5075 1.9825 16.6825 3.17875 16.7638C4.37625 16.8338 7.38875 16.875 10.0025 16.875C12.6112 16.875 15.6225 16.8337 16.8212 16.765C18.02 16.6837 18.6087 16.5088 19.1513 15.5438C19.715 14.59 20 12.9175 20 10.0075C20 10.0075 20 10.0038 20 10.0013C20 10.0013 20 9.99875 20 9.9975C20 7.07375 19.715 5.41375 19.15 4.45Z"
          fill="#F44336" />
        <path d="M7.5 13.75V6.25L13.75 10L7.5 13.75Z"
          fill="#FAFAFA" />
      </svg>
      youtube
    </Button>
  </Col>
  <Col md={2}>
    <Button variant="outline-light" className="btn-square btn-md d-flex justify-content-center align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="20" height="20" viewBox="0 0 20 20"
        fill="none">
        <path
          d="M19.15 4.45C18.6075 3.485 18.0188 3.3075 16.82 3.24C15.6225 3.15875 12.6112 3.125 10.0025 3.125C7.38875 3.125 4.37625 3.15875 3.18 3.23875C1.98375 3.3075 1.39375 3.48375 0.84625 4.45C0.2875 5.41375 0 7.07375 0 9.99625C0 9.99875 0 10 0 10C0 10.0025 0 10.0038 0 10.0038V10.0063C0 12.9163 0.2875 14.5887 0.84625 15.5425C1.39375 16.5075 1.9825 16.6825 3.17875 16.7638C4.37625 16.8338 7.38875 16.875 10.0025 16.875C12.6112 16.875 15.6225 16.8337 16.8212 16.765C18.02 16.6837 18.6087 16.5088 19.1513 15.5438C19.715 14.59 20 12.9175 20 10.0075C20 10.0075 20 10.0038 20 10.0013C20 10.0013 20 9.99875 20 9.9975C20 7.07375 19.715 5.41375 19.15 4.45Z"
          fill="#F44336" />
        <path d="M7.5 13.75V6.25L13.75 10L7.5 13.75Z"
          fill="#FAFAFA" />
      </svg>
    </Button>
  </Col>
  <Col md={1}>
    <Button className="btn-square btn-md btn-youtube d-flex justify-content-center align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="20" height="20" viewBox="0 0 20 20"
        fill="none">
        <path
          d="M19.15 4.45C18.6075 3.485 18.0188 3.3075 16.82 3.24C15.6225 3.15875 12.6112 3.125 10.0025 3.125C7.38875 3.125 4.37625 3.15875 3.18 3.23875C1.98375 3.3075 1.39375 3.48375 0.84625 4.45C0.2875 5.41375 0 7.07375 0 9.99625C0 9.99875 0 10 0 10C0 10.0025 0 10.0038 0 10.0038V10.0063C0 12.9163 0.2875 14.5887 0.84625 15.5425C1.39375 16.5075 1.9825 16.6825 3.17875 16.7638C4.37625 16.8338 7.38875 16.875 10.0025 16.875C12.6112 16.875 15.6225 16.8337 16.8212 16.765C18.02 16.6837 18.6087 16.5088 19.1513 15.5438C19.715 14.59 20 12.9175 20 10.0075C20 10.0075 20 10.0038 20 10.0013C20 10.0013 20 9.99875 20 9.9975C20 7.07375 19.715 5.41375 19.15 4.45Z"
          fill="white" />
        <path d="M7.5 13.75V6.25L13.75 10L7.5 13.75Z"
          fill="#F44336" />
      </svg>
    </Button>
  </Col>
  <Col md={3}>
    <Button className="btn-whatsapp d-flex align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="20" height="20" viewBox="0 0 20 20"
        fill="none">
        <g clipPath="url(#clip0_309_443)">
          <path
            d="M10.0025 0H9.9975C4.48375 0 0 4.485 0 10C0 12.1875 0.705 14.215 1.90375 15.8612L0.6575 19.5763L4.50125 18.3475C6.0825 19.395 7.96875 20 10.0025 20C15.5162 20 20 15.5138 20 10C20 4.48625 15.5162 0 10.0025 0Z"
            fill="white" />
          <path
            d="M15.8207 14.1212C15.5795 14.8025 14.622 15.3675 13.8582 15.5325C13.3357 15.6437 12.6532 15.7325 10.3557 14.78C7.41695 13.5625 5.52445 10.5762 5.37695 10.3825C5.2357 10.1887 4.18945 8.80123 4.18945 7.36623C4.18945 5.93123 4.9182 5.23248 5.21195 4.93248C5.4532 4.68623 5.85195 4.57373 6.23445 4.57373C6.3582 4.57373 6.46945 4.57998 6.56945 4.58498C6.8632 4.59748 7.0107 4.61498 7.20445 5.07873C7.4457 5.65998 8.0332 7.09498 8.1032 7.24248C8.17445 7.38998 8.2457 7.58998 8.1457 7.78373C8.05195 7.98373 7.96945 8.07248 7.82195 8.24248C7.67445 8.41248 7.53445 8.54248 7.38695 8.72498C7.25195 8.88373 7.09945 9.05373 7.26945 9.34748C7.43945 9.63498 8.02695 10.5937 8.89195 11.3637C10.0082 12.3575 10.9132 12.675 11.237 12.81C11.4782 12.91 11.7657 12.8862 11.942 12.6987C12.1657 12.4575 12.442 12.0575 12.7232 11.6637C12.9232 11.3812 13.1757 11.3462 13.4407 11.4462C13.7107 11.54 15.1395 12.2462 15.4332 12.3925C15.727 12.54 15.9207 12.61 15.992 12.7337C16.062 12.8575 16.062 13.4387 15.8207 14.1212Z"
            fill="#4CAF50" />
        </g>
        <defs>
          <clipPath id="clip0_309_443">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
      whatsapp
    </Button>
  </Col>
  <Col md={3}>
    <Button variant="outline-light" className="d-flex align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="20" height="20" viewBox="0 0 20 20"
        fill="none">
        <g clipPath="url(#clip0_309_558)">
          <path
            d="M10.0025 0H9.9975C4.48375 0 0 4.485 0 10C0 12.1875 0.705 14.215 1.90375 15.8612L0.6575 19.5763L4.50125 18.3475C6.0825 19.395 7.96875 20 10.0025 20C15.5162 20 20 15.5138 20 10C20 4.48625 15.5162 0 10.0025 0Z"
            fill="#4CAF50" />
          <path
            d="M15.8207 14.1212C15.5795 14.8025 14.622 15.3675 13.8582 15.5325C13.3357 15.6437 12.6532 15.7325 10.3557 14.78C7.41695 13.5625 5.52445 10.5762 5.37695 10.3825C5.2357 10.1887 4.18945 8.80123 4.18945 7.36623C4.18945 5.93123 4.9182 5.23248 5.21195 4.93248C5.4532 4.68623 5.85195 4.57373 6.23445 4.57373C6.3582 4.57373 6.46945 4.57998 6.56945 4.58498C6.8632 4.59748 7.0107 4.61498 7.20445 5.07873C7.4457 5.65998 8.0332 7.09498 8.1032 7.24248C8.17445 7.38998 8.2457 7.58998 8.1457 7.78373C8.05195 7.98373 7.96945 8.07248 7.82195 8.24248C7.67445 8.41248 7.53445 8.54248 7.38695 8.72498C7.25195 8.88373 7.09945 9.05373 7.26945 9.34748C7.43945 9.63498 8.02695 10.5937 8.89195 11.3637C10.0082 12.3575 10.9132 12.675 11.237 12.81C11.4782 12.91 11.7657 12.8862 11.942 12.6987C12.1657 12.4575 12.442 12.0575 12.7232 11.6637C12.9232 11.3812 13.1757 11.3462 13.4407 11.4462C13.7107 11.54 15.1395 12.2462 15.4332 12.3925C15.727 12.54 15.9207 12.61 15.992 12.7337C16.062 12.8575 16.062 13.4387 15.8207 14.1212Z"
            fill="#FAFAFA" />
        </g>
        <defs>
          <clipPath id="clip0_309_5582">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
      whatsapp
    </Button>
  </Col>
  <Col md={3}>
    <Button variant="white" className="active d-flex align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="20" height="20" viewBox="0 0 20 20"
        fill="none">
        <g clipPath="url(#clip0_309_558)">
          <path
            d="M10.0025 0H9.9975C4.48375 0 0 4.485 0 10C0 12.1875 0.705 14.215 1.90375 15.8612L0.6575 19.5763L4.50125 18.3475C6.0825 19.395 7.96875 20 10.0025 20C15.5162 20 20 15.5138 20 10C20 4.48625 15.5162 0 10.0025 0Z"
            fill="#4CAF50" />
          <path
            d="M15.8207 14.1212C15.5795 14.8025 14.622 15.3675 13.8582 15.5325C13.3357 15.6437 12.6532 15.7325 10.3557 14.78C7.41695 13.5625 5.52445 10.5762 5.37695 10.3825C5.2357 10.1887 4.18945 8.80123 4.18945 7.36623C4.18945 5.93123 4.9182 5.23248 5.21195 4.93248C5.4532 4.68623 5.85195 4.57373 6.23445 4.57373C6.3582 4.57373 6.46945 4.57998 6.56945 4.58498C6.8632 4.59748 7.0107 4.61498 7.20445 5.07873C7.4457 5.65998 8.0332 7.09498 8.1032 7.24248C8.17445 7.38998 8.2457 7.58998 8.1457 7.78373C8.05195 7.98373 7.96945 8.07248 7.82195 8.24248C7.67445 8.41248 7.53445 8.54248 7.38695 8.72498C7.25195 8.88373 7.09945 9.05373 7.26945 9.34748C7.43945 9.63498 8.02695 10.5937 8.89195 11.3637C10.0082 12.3575 10.9132 12.675 11.237 12.81C11.4782 12.91 11.7657 12.8862 11.942 12.6987C12.1657 12.4575 12.442 12.0575 12.7232 11.6637C12.9232 11.3812 13.1757 11.3462 13.4407 11.4462C13.7107 11.54 15.1395 12.2462 15.4332 12.3925C15.727 12.54 15.9207 12.61 15.992 12.7337C16.062 12.8575 16.062 13.4387 15.8207 14.1212Z"
            fill="#FAFAFA" />
        </g>
        <defs>
          <clipPath id="clip0_309_5582">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
      whatsapp
    </Button>
  </Col>
  <Col md={2}>
    <Button variant="outline-light" className="btn-square btn-md d-flex justify-content-center align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="20" height="20" viewBox="0 0 20 20"
        fill="none">
        <g clipPath="url(#clip0_309_558)">
          <path
            d="M10.0025 0H9.9975C4.48375 0 0 4.485 0 10C0 12.1875 0.705 14.215 1.90375 15.8612L0.6575 19.5763L4.50125 18.3475C6.0825 19.395 7.96875 20 10.0025 20C15.5162 20 20 15.5138 20 10C20 4.48625 15.5162 0 10.0025 0Z"
            fill="#4CAF50" />
          <path
            d="M15.8207 14.1212C15.5795 14.8025 14.622 15.3675 13.8582 15.5325C13.3357 15.6437 12.6532 15.7325 10.3557 14.78C7.41695 13.5625 5.52445 10.5762 5.37695 10.3825C5.2357 10.1887 4.18945 8.80123 4.18945 7.36623C4.18945 5.93123 4.9182 5.23248 5.21195 4.93248C5.4532 4.68623 5.85195 4.57373 6.23445 4.57373C6.3582 4.57373 6.46945 4.57998 6.56945 4.58498C6.8632 4.59748 7.0107 4.61498 7.20445 5.07873C7.4457 5.65998 8.0332 7.09498 8.1032 7.24248C8.17445 7.38998 8.2457 7.58998 8.1457 7.78373C8.05195 7.98373 7.96945 8.07248 7.82195 8.24248C7.67445 8.41248 7.53445 8.54248 7.38695 8.72498C7.25195 8.88373 7.09945 9.05373 7.26945 9.34748C7.43945 9.63498 8.02695 10.5937 8.89195 11.3637C10.0082 12.3575 10.9132 12.675 11.237 12.81C11.4782 12.91 11.7657 12.8862 11.942 12.6987C12.1657 12.4575 12.442 12.0575 12.7232 11.6637C12.9232 11.3812 13.1757 11.3462 13.4407 11.4462C13.7107 11.54 15.1395 12.2462 15.4332 12.3925C15.727 12.54 15.9207 12.61 15.992 12.7337C16.062 12.8575 16.062 13.4387 15.8207 14.1212Z"
            fill="#FAFAFA" />
        </g>
        <defs>
          <clipPath id="clip0_309_5582">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Button>
  </Col>
  <Col md={1}>
    <Button className="btn-square btn-md btn-whatsapp d-flex justify-content-center align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="20" height="20" viewBox="0 0 20 20"
        fill="none">
        <g clipPath="url(#clip0_309_443)">
          <path
            d="M10.0025 0H9.9975C4.48375 0 0 4.485 0 10C0 12.1875 0.705 14.215 1.90375 15.8612L0.6575 19.5763L4.50125 18.3475C6.0825 19.395 7.96875 20 10.0025 20C15.5162 20 20 15.5138 20 10C20 4.48625 15.5162 0 10.0025 0Z"
            fill="white" />
          <path
            d="M15.8207 14.1212C15.5795 14.8025 14.622 15.3675 13.8582 15.5325C13.3357 15.6437 12.6532 15.7325 10.3557 14.78C7.41695 13.5625 5.52445 10.5762 5.37695 10.3825C5.2357 10.1887 4.18945 8.80123 4.18945 7.36623C4.18945 5.93123 4.9182 5.23248 5.21195 4.93248C5.4532 4.68623 5.85195 4.57373 6.23445 4.57373C6.3582 4.57373 6.46945 4.57998 6.56945 4.58498C6.8632 4.59748 7.0107 4.61498 7.20445 5.07873C7.4457 5.65998 8.0332 7.09498 8.1032 7.24248C8.17445 7.38998 8.2457 7.58998 8.1457 7.78373C8.05195 7.98373 7.96945 8.07248 7.82195 8.24248C7.67445 8.41248 7.53445 8.54248 7.38695 8.72498C7.25195 8.88373 7.09945 9.05373 7.26945 9.34748C7.43945 9.63498 8.02695 10.5937 8.89195 11.3637C10.0082 12.3575 10.9132 12.675 11.237 12.81C11.4782 12.91 11.7657 12.8862 11.942 12.6987C12.1657 12.4575 12.442 12.0575 12.7232 11.6637C12.9232 11.3812 13.1757 11.3462 13.4407 11.4462C13.7107 11.54 15.1395 12.2462 15.4332 12.3925C15.727 12.54 15.9207 12.61 15.992 12.7337C16.062 12.8575 16.062 13.4387 15.8207 14.1212Z"
            fill="#4CAF50" />
        </g>
        <defs>
          <clipPath id="clip0_309_443">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Button>
  </Col>
  <Col md={3}>
    <Button className="btn-apple d-flex align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="21" height="20" viewBox="0 0 21 20"
        fill="none">
        <path
          d="M14.349 0C14.3956 0 14.4421 0 14.4913 0C14.6055 1.41044 14.0671 2.46432 13.4128 3.22751C12.7708 3.98542 11.8917 4.7205 10.4699 4.60897C10.375 3.21872 10.9142 2.24301 11.5676 1.48158C12.1736 0.771967 13.2846 0.140517 14.349 0Z"
          fill="white" />
        <path
          d="M18.6529 14.6805C18.6529 14.6946 18.6529 14.7069 18.6529 14.7201C18.2533 15.9303 17.6834 16.9675 16.9878 17.93C16.3528 18.8038 15.5747 19.9798 14.1854 19.9798C12.9848 19.9798 12.1874 19.2078 10.957 19.1868C9.65543 19.1657 8.93967 19.8323 7.74967 20C7.61354 20 7.47742 20 7.34392 20C6.47008 19.8735 5.76486 19.1815 5.25109 18.5579C3.73614 16.7154 2.56546 14.3354 2.34766 11.2897C2.34766 10.9911 2.34766 10.6934 2.34766 10.3948C2.43987 8.21499 3.49902 6.44272 4.90683 5.58381C5.64981 5.12712 6.6712 4.73807 7.80851 4.91196C8.29593 4.98749 8.79389 5.15435 9.23037 5.31946C9.64402 5.47842 10.1613 5.76033 10.6513 5.7454C10.9833 5.73574 11.3135 5.56273 11.6481 5.44065C12.6283 5.08673 13.589 4.68098 14.8555 4.87156C16.3774 5.10166 17.4577 5.7779 18.1251 6.82124C16.8376 7.64063 15.8197 8.87542 15.9936 10.9841C16.1482 12.8995 17.2618 14.0201 18.6529 14.6805Z"
          fill="white" />
      </svg>
      apple
    </Button>
  </Col>
  <Col md={3}>
    <Button variant="outline-light" className="d-flex align-items-center">
      <svg className="me-1 apple"
        xmlns="http://www.w3.org/2000/svg" width="21"
        height="20" viewBox="0 0 21 20" fill="none">
        <path
          d="M14.349 0C14.3956 0 14.4421 0 14.4913 0C14.6055 1.41044 14.0671 2.46432 13.4128 3.22751C12.7708 3.98542 11.8917 4.7205 10.4699 4.60897C10.375 3.21872 10.9142 2.24301 11.5676 1.48158C12.1736 0.771967 13.2846 0.140517 14.349 0Z"
          fill="#1F2025" />
        <path
          d="M18.6529 14.6805C18.6529 14.6946 18.6529 14.7069 18.6529 14.7201C18.2533 15.9303 17.6834 16.9675 16.9878 17.93C16.3528 18.8038 15.5747 19.9798 14.1854 19.9798C12.9848 19.9798 12.1874 19.2078 10.957 19.1868C9.65543 19.1657 8.93967 19.8323 7.74967 20C7.61354 20 7.47742 20 7.34392 20C6.47008 19.8735 5.76486 19.1815 5.25109 18.5579C3.73614 16.7154 2.56546 14.3354 2.34766 11.2897C2.34766 10.9911 2.34766 10.6934 2.34766 10.3948C2.43987 8.21499 3.49902 6.44272 4.90683 5.58381C5.64981 5.12712 6.6712 4.73807 7.80851 4.91196C8.29593 4.98749 8.79389 5.15435 9.23037 5.31946C9.64402 5.47842 10.1613 5.76033 10.6513 5.7454C10.9833 5.73574 11.3135 5.56273 11.6481 5.44065C12.6283 5.08673 13.589 4.68098 14.8555 4.87156C16.3774 5.10166 17.4577 5.7779 18.1251 6.82124C16.8376 7.64063 15.8197 8.87542 15.9936 10.9841C16.1482 12.8995 17.2618 14.0201 18.6529 14.6805Z"
          fill="#1F2025" />
      </svg>
      apple
    </Button>
  </Col>
  <Col md={3}>
    <Button variant="white" className="active d-flex align-items-center">
      <svg className="me-1 apple"
        xmlns="http://www.w3.org/2000/svg" width="21"
        height="20" viewBox="0 0 21 20" fill="none">
        <path
          d="M14.349 0C14.3956 0 14.4421 0 14.4913 0C14.6055 1.41044 14.0671 2.46432 13.4128 3.22751C12.7708 3.98542 11.8917 4.7205 10.4699 4.60897C10.375 3.21872 10.9142 2.24301 11.5676 1.48158C12.1736 0.771967 13.2846 0.140517 14.349 0Z"
          fill="#1F2025" />
        <path
          d="M18.6529 14.6805C18.6529 14.6946 18.6529 14.7069 18.6529 14.7201C18.2533 15.9303 17.6834 16.9675 16.9878 17.93C16.3528 18.8038 15.5747 19.9798 14.1854 19.9798C12.9848 19.9798 12.1874 19.2078 10.957 19.1868C9.65543 19.1657 8.93967 19.8323 7.74967 20C7.61354 20 7.47742 20 7.34392 20C6.47008 19.8735 5.76486 19.1815 5.25109 18.5579C3.73614 16.7154 2.56546 14.3354 2.34766 11.2897C2.34766 10.9911 2.34766 10.6934 2.34766 10.3948C2.43987 8.21499 3.49902 6.44272 4.90683 5.58381C5.64981 5.12712 6.6712 4.73807 7.80851 4.91196C8.29593 4.98749 8.79389 5.15435 9.23037 5.31946C9.64402 5.47842 10.1613 5.76033 10.6513 5.7454C10.9833 5.73574 11.3135 5.56273 11.6481 5.44065C12.6283 5.08673 13.589 4.68098 14.8555 4.87156C16.3774 5.10166 17.4577 5.7779 18.1251 6.82124C16.8376 7.64063 15.8197 8.87542 15.9936 10.9841C16.1482 12.8995 17.2618 14.0201 18.6529 14.6805Z"
          fill="#1F2025" />
      </svg>
      apple
    </Button>
  </Col>
  <Col md={2}>
    <Button variant="outline-light" className="btn-square btn-md d-flex justify-content-center align-items-center">
      <svg className="me-1 apple"
        xmlns="http://www.w3.org/2000/svg" width="21"
        height="20" viewBox="0 0 21 20" fill="none">
        <path
          d="M14.349 0C14.3956 0 14.4421 0 14.4913 0C14.6055 1.41044 14.0671 2.46432 13.4128 3.22751C12.7708 3.98542 11.8917 4.7205 10.4699 4.60897C10.375 3.21872 10.9142 2.24301 11.5676 1.48158C12.1736 0.771967 13.2846 0.140517 14.349 0Z"
          fill="#1F2025" />
        <path
          d="M18.6529 14.6805C18.6529 14.6946 18.6529 14.7069 18.6529 14.7201C18.2533 15.9303 17.6834 16.9675 16.9878 17.93C16.3528 18.8038 15.5747 19.9798 14.1854 19.9798C12.9848 19.9798 12.1874 19.2078 10.957 19.1868C9.65543 19.1657 8.93967 19.8323 7.74967 20C7.61354 20 7.47742 20 7.34392 20C6.47008 19.8735 5.76486 19.1815 5.25109 18.5579C3.73614 16.7154 2.56546 14.3354 2.34766 11.2897C2.34766 10.9911 2.34766 10.6934 2.34766 10.3948C2.43987 8.21499 3.49902 6.44272 4.90683 5.58381C5.64981 5.12712 6.6712 4.73807 7.80851 4.91196C8.29593 4.98749 8.79389 5.15435 9.23037 5.31946C9.64402 5.47842 10.1613 5.76033 10.6513 5.7454C10.9833 5.73574 11.3135 5.56273 11.6481 5.44065C12.6283 5.08673 13.589 4.68098 14.8555 4.87156C16.3774 5.10166 17.4577 5.7779 18.1251 6.82124C16.8376 7.64063 15.8197 8.87542 15.9936 10.9841C16.1482 12.8995 17.2618 14.0201 18.6529 14.6805Z"
          fill="#1F2025" />
      </svg>
    </Button>
  </Col>
  <Col md={1}>
    <Button className="btn-square btn-md btn-apple d-flex justify-content-center align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="21" height="20" viewBox="0 0 21 20"
        fill="none">
        <path
          d="M14.349 0C14.3956 0 14.4421 0 14.4913 0C14.6055 1.41044 14.0671 2.46432 13.4128 3.22751C12.7708 3.98542 11.8917 4.7205 10.4699 4.60897C10.375 3.21872 10.9142 2.24301 11.5676 1.48158C12.1736 0.771967 13.2846 0.140517 14.349 0Z"
          fill="white" />
        <path
          d="M18.6529 14.6805C18.6529 14.6946 18.6529 14.7069 18.6529 14.7201C18.2533 15.9303 17.6834 16.9675 16.9878 17.93C16.3528 18.8038 15.5747 19.9798 14.1854 19.9798C12.9848 19.9798 12.1874 19.2078 10.957 19.1868C9.65543 19.1657 8.93967 19.8323 7.74967 20C7.61354 20 7.47742 20 7.34392 20C6.47008 19.8735 5.76486 19.1815 5.25109 18.5579C3.73614 16.7154 2.56546 14.3354 2.34766 11.2897C2.34766 10.9911 2.34766 10.6934 2.34766 10.3948C2.43987 8.21499 3.49902 6.44272 4.90683 5.58381C5.64981 5.12712 6.6712 4.73807 7.80851 4.91196C8.29593 4.98749 8.79389 5.15435 9.23037 5.31946C9.64402 5.47842 10.1613 5.76033 10.6513 5.7454C10.9833 5.73574 11.3135 5.56273 11.6481 5.44065C12.6283 5.08673 13.589 4.68098 14.8555 4.87156C16.3774 5.10166 17.4577 5.7779 18.1251 6.82124C16.8376 7.64063 15.8197 8.87542 15.9936 10.9841C16.1482 12.8995 17.2618 14.0201 18.6529 14.6805Z"
          fill="white" />
      </svg>
    </Button>
  </Col>
  <Col md={3}>
    <Button className="btn-google-plus d-flex align-items-center">
      <svg  className="me-1" xmlns="http://www.w3.org/2000/svg" width="20"
        height="20" viewBox="0 0 20 20" fill="none">
        <g clipPath="url(#clip0_309_455)">
          <path
            d="M19.2456 8.26132L11.0878 8.26093C10.7275 8.26093 10.4355 8.55288 10.4355 8.91311V11.5192C10.4355 11.8793 10.7275 12.1714 11.0877 12.1714H15.6817C15.1787 13.4769 14.2398 14.5702 13.0419 15.2649L15.0007 18.6558C18.143 16.8385 20.0007 13.6499 20.0007 10.0805C20.0007 9.57221 19.9633 9.20889 19.8884 8.79979C19.8314 8.48897 19.5616 8.26132 19.2456 8.26132Z"
            fill="white" />
          <path
            d="M9.99957 16.0869C7.75137 16.0869 5.78871 14.8586 4.73461 13.0409L1.34375 14.9953C3.06934 17.9861 6.30191 20 9.99957 20C11.8135 20 13.5251 19.5116 14.9996 18.6605V18.6558L13.0407 15.2648C12.1447 15.7845 11.1078 16.0869 9.99957 16.0869Z"
            fill="white" />
          <path
            d="M15 18.6605V18.6558L13.0411 15.2648C12.1451 15.7845 11.1083 16.087 10 16.087V20C11.8139 20 13.5256 19.5116 15 18.6605Z"
            fill="white" />
          <path
            d="M3.91305 9.99999C3.91305 8.89183 4.21547 7.85507 4.73504 6.95909L1.34418 5.00464C0.488359 6.47444 0 8.1814 0 9.99999C0 11.8186 0.488359 13.5255 1.34418 14.9953L4.73504 13.0409C4.21547 12.1449 3.91305 11.1082 3.91305 9.99999Z"
            fill="white" />
          <path
            d="M9.99957 3.91305C11.4656 3.91305 12.8123 4.43398 13.8641 5.30051C14.1236 5.51426 14.5007 5.49883 14.7384 5.26113L16.5849 3.41465C16.8546 3.14496 16.8354 2.70352 16.5473 2.45359C14.785 0.924726 12.492 0 9.99957 0C6.30191 0 3.06934 2.01395 1.34375 5.00465L4.73461 6.9591C5.78871 5.14141 7.75137 3.91305 9.99957 3.91305Z"
            fill="white" />
          <path
            d="M13.8645 5.30051C14.124 5.51426 14.5012 5.49883 14.7389 5.26113L16.5854 3.41465C16.855 3.14496 16.8358 2.70352 16.5477 2.45359C14.7854 0.924688 12.4925 0 10 0V3.91305C11.466 3.91305 12.8127 4.43398 13.8645 5.30051Z"
            fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_309_455">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
      Google
    </Button>
  </Col>
  <Col md={3}>
    <Button variant="outline-light" className="d-flex align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="20" height="20" viewBox="0 0 20 20"
        fill="none">
        <g clipPath="url(#clip0_309_570)">
          <path
            d="M19.2456 8.26132L11.0878 8.26093C10.7275 8.26093 10.4355 8.55288 10.4355 8.91311V11.5192C10.4355 11.8793 10.7275 12.1714 11.0877 12.1714H15.6817C15.1787 13.4769 14.2398 14.5702 13.0419 15.2649L15.0007 18.6558C18.143 16.8385 20.0007 13.6499 20.0007 10.0805C20.0007 9.57221 19.9633 9.20889 19.8884 8.79979C19.8314 8.48897 19.5616 8.26132 19.2456 8.26132Z"
            fill="#167EE6" />
          <path
            d="M9.99957 16.0869C7.75137 16.0869 5.78871 14.8586 4.73461 13.0409L1.34375 14.9953C3.06934 17.9861 6.30191 20 9.99957 20C11.8135 20 13.5251 19.5116 14.9996 18.6605V18.6558L13.0407 15.2648C12.1447 15.7845 11.1078 16.0869 9.99957 16.0869Z"
            fill="#12B347" />
          <path
            d="M15 18.6605V18.6558L13.0411 15.2648C12.1451 15.7845 11.1083 16.087 10 16.087V20C11.8139 20 13.5256 19.5116 15 18.6605Z"
            fill="#0F993E" />
          <path
            d="M3.91305 9.99999C3.91305 8.89183 4.21547 7.85507 4.73504 6.95909L1.34418 5.00464C0.488359 6.47444 0 8.1814 0 9.99999C0 11.8186 0.488359 13.5255 1.34418 14.9953L4.73504 13.0409C4.21547 12.1449 3.91305 11.1082 3.91305 9.99999Z"
            fill="#FFD500" />
          <path
            d="M9.99957 3.91305C11.4656 3.91305 12.8123 4.43398 13.8641 5.30051C14.1236 5.51426 14.5007 5.49883 14.7384 5.26113L16.5849 3.41465C16.8546 3.14496 16.8354 2.70352 16.5473 2.45359C14.785 0.924726 12.492 0 9.99957 0C6.30191 0 3.06934 2.01395 1.34375 5.00465L4.73461 6.9591C5.78871 5.14141 7.75137 3.91305 9.99957 3.91305Z"
            fill="#FF4B26" />
          <path
            d="M13.8645 5.30051C14.124 5.51426 14.5012 5.49883 14.7389 5.26113L16.5854 3.41465C16.855 3.14496 16.8358 2.70352 16.5477 2.45359C14.7854 0.924688 12.4925 0 10 0V3.91305C11.466 3.91305 12.8127 4.43398 13.8645 5.30051Z"
            fill="#D93F21" />
        </g>
        <defs>
          <clipPath id="clip0_309_570">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
      Google
    </Button>
  </Col>
  <Col md={3}>
    <Button variant="white" className="active d-flex align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="20" height="20" viewBox="0 0 20 20"
        fill="none">
        <g clipPath="url(#clip0_309_570)">
          <path
            d="M19.2456 8.26132L11.0878 8.26093C10.7275 8.26093 10.4355 8.55288 10.4355 8.91311V11.5192C10.4355 11.8793 10.7275 12.1714 11.0877 12.1714H15.6817C15.1787 13.4769 14.2398 14.5702 13.0419 15.2649L15.0007 18.6558C18.143 16.8385 20.0007 13.6499 20.0007 10.0805C20.0007 9.57221 19.9633 9.20889 19.8884 8.79979C19.8314 8.48897 19.5616 8.26132 19.2456 8.26132Z"
            fill="#167EE6" />
          <path
            d="M9.99957 16.0869C7.75137 16.0869 5.78871 14.8586 4.73461 13.0409L1.34375 14.9953C3.06934 17.9861 6.30191 20 9.99957 20C11.8135 20 13.5251 19.5116 14.9996 18.6605V18.6558L13.0407 15.2648C12.1447 15.7845 11.1078 16.0869 9.99957 16.0869Z"
            fill="#12B347" />
          <path
            d="M15 18.6605V18.6558L13.0411 15.2648C12.1451 15.7845 11.1083 16.087 10 16.087V20C11.8139 20 13.5256 19.5116 15 18.6605Z"
            fill="#0F993E" />
          <path
            d="M3.91305 9.99999C3.91305 8.89183 4.21547 7.85507 4.73504 6.95909L1.34418 5.00464C0.488359 6.47444 0 8.1814 0 9.99999C0 11.8186 0.488359 13.5255 1.34418 14.9953L4.73504 13.0409C4.21547 12.1449 3.91305 11.1082 3.91305 9.99999Z"
            fill="#FFD500" />
          <path
            d="M9.99957 3.91305C11.4656 3.91305 12.8123 4.43398 13.8641 5.30051C14.1236 5.51426 14.5007 5.49883 14.7384 5.26113L16.5849 3.41465C16.8546 3.14496 16.8354 2.70352 16.5473 2.45359C14.785 0.924726 12.492 0 9.99957 0C6.30191 0 3.06934 2.01395 1.34375 5.00465L4.73461 6.9591C5.78871 5.14141 7.75137 3.91305 9.99957 3.91305Z"
            fill="#FF4B26" />
          <path
            d="M13.8645 5.30051C14.124 5.51426 14.5012 5.49883 14.7389 5.26113L16.5854 3.41465C16.855 3.14496 16.8358 2.70352 16.5477 2.45359C14.7854 0.924688 12.4925 0 10 0V3.91305C11.466 3.91305 12.8127 4.43398 13.8645 5.30051Z"
            fill="#D93F21" />
        </g>
        <defs>
          <clipPath id="clip0_309_570">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
      Google
    </Button>
  </Col>
  <Col md={2}>
    <Button variant="outline-light" className="btn-square btn-md d-flex justify-content-center align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="20" height="20" viewBox="0 0 20 20"
        fill="none">
        <g clipPath="url(#clip0_309_570)">
          <path
            d="M19.2456 8.26132L11.0878 8.26093C10.7275 8.26093 10.4355 8.55288 10.4355 8.91311V11.5192C10.4355 11.8793 10.7275 12.1714 11.0877 12.1714H15.6817C15.1787 13.4769 14.2398 14.5702 13.0419 15.2649L15.0007 18.6558C18.143 16.8385 20.0007 13.6499 20.0007 10.0805C20.0007 9.57221 19.9633 9.20889 19.8884 8.79979C19.8314 8.48897 19.5616 8.26132 19.2456 8.26132Z"
            fill="#167EE6" />
          <path
            d="M9.99957 16.0869C7.75137 16.0869 5.78871 14.8586 4.73461 13.0409L1.34375 14.9953C3.06934 17.9861 6.30191 20 9.99957 20C11.8135 20 13.5251 19.5116 14.9996 18.6605V18.6558L13.0407 15.2648C12.1447 15.7845 11.1078 16.0869 9.99957 16.0869Z"
            fill="#12B347" />
          <path
            d="M15 18.6605V18.6558L13.0411 15.2648C12.1451 15.7845 11.1083 16.087 10 16.087V20C11.8139 20 13.5256 19.5116 15 18.6605Z"
            fill="#0F993E" />
          <path
            d="M3.91305 9.99999C3.91305 8.89183 4.21547 7.85507 4.73504 6.95909L1.34418 5.00464C0.488359 6.47444 0 8.1814 0 9.99999C0 11.8186 0.488359 13.5255 1.34418 14.9953L4.73504 13.0409C4.21547 12.1449 3.91305 11.1082 3.91305 9.99999Z"
            fill="#FFD500" />
          <path
            d="M9.99957 3.91305C11.4656 3.91305 12.8123 4.43398 13.8641 5.30051C14.1236 5.51426 14.5007 5.49883 14.7384 5.26113L16.5849 3.41465C16.8546 3.14496 16.8354 2.70352 16.5473 2.45359C14.785 0.924726 12.492 0 9.99957 0C6.30191 0 3.06934 2.01395 1.34375 5.00465L4.73461 6.9591C5.78871 5.14141 7.75137 3.91305 9.99957 3.91305Z"
            fill="#FF4B26" />
          <path
            d="M13.8645 5.30051C14.124 5.51426 14.5012 5.49883 14.7389 5.26113L16.5854 3.41465C16.855 3.14496 16.8358 2.70352 16.5477 2.45359C14.7854 0.924688 12.4925 0 10 0V3.91305C11.466 3.91305 12.8127 4.43398 13.8645 5.30051Z"
            fill="#D93F21" />
        </g>
        <defs>
          <clipPath id="clip0_309_570">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Button>
  </Col>
  <Col md={1}>
    <Button className="btn-square btn-md btn-google-plus d-flex justify-content-center align-items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="20"
        height="20" viewBox="0 0 20 20" fill="none">
        <g clipPath="url(#clip0_309_455)">
          <path
            d="M19.2456 8.26132L11.0878 8.26093C10.7275 8.26093 10.4355 8.55288 10.4355 8.91311V11.5192C10.4355 11.8793 10.7275 12.1714 11.0877 12.1714H15.6817C15.1787 13.4769 14.2398 14.5702 13.0419 15.2649L15.0007 18.6558C18.143 16.8385 20.0007 13.6499 20.0007 10.0805C20.0007 9.57221 19.9633 9.20889 19.8884 8.79979C19.8314 8.48897 19.5616 8.26132 19.2456 8.26132Z"
            fill="white" />
          <path
            d="M9.99957 16.0869C7.75137 16.0869 5.78871 14.8586 4.73461 13.0409L1.34375 14.9953C3.06934 17.9861 6.30191 20 9.99957 20C11.8135 20 13.5251 19.5116 14.9996 18.6605V18.6558L13.0407 15.2648C12.1447 15.7845 11.1078 16.0869 9.99957 16.0869Z"
            fill="white" />
          <path
            d="M15 18.6605V18.6558L13.0411 15.2648C12.1451 15.7845 11.1083 16.087 10 16.087V20C11.8139 20 13.5256 19.5116 15 18.6605Z"
            fill="white" />
          <path
            d="M3.91305 9.99999C3.91305 8.89183 4.21547 7.85507 4.73504 6.95909L1.34418 5.00464C0.488359 6.47444 0 8.1814 0 9.99999C0 11.8186 0.488359 13.5255 1.34418 14.9953L4.73504 13.0409C4.21547 12.1449 3.91305 11.1082 3.91305 9.99999Z"
            fill="white" />
          <path
            d="M9.99957 3.91305C11.4656 3.91305 12.8123 4.43398 13.8641 5.30051C14.1236 5.51426 14.5007 5.49883 14.7384 5.26113L16.5849 3.41465C16.8546 3.14496 16.8354 2.70352 16.5473 2.45359C14.785 0.924726 12.492 0 9.99957 0C6.30191 0 3.06934 2.01395 1.34375 5.00465L4.73461 6.9591C5.78871 5.14141 7.75137 3.91305 9.99957 3.91305Z"
            fill="white" />
          <path
            d="M13.8645 5.30051C14.124 5.51426 14.5012 5.49883 14.7389 5.26113L16.5854 3.41465C16.855 3.14496 16.8358 2.70352 16.5477 2.45359C14.7854 0.924688 12.4925 0 10 0V3.91305C11.466 3.91305 12.8127 4.43398 13.8645 5.30051Z"
            fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_309_455">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Button>
  </Col>
  <Col md={3}>
    <Button className="btn-dropbox d-flex align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="20" height="20" viewBox="0 0 20 20"
        fill="none">
        <g clipPath="url(#clip0_309_464)">
          <path
            d="M9.78601 15.6577H10.9811C10.9811 15.6577 11.3424 15.6177 11.5261 15.4189C11.6961 15.2364 11.6899 14.8939 11.6899 14.8939C11.6899 14.8939 11.6661 13.29 12.4112 13.0538C13.145 12.8212 14.0876 14.6039 15.0864 15.2902C15.8415 15.809 16.4152 15.6952 16.4152 15.6952L19.0867 15.6577C19.0867 15.6577 20.4843 15.5714 19.8217 14.4726C19.768 14.3826 19.4355 13.6601 17.8354 12.1749C16.1602 10.6198 16.3852 10.8723 18.4029 8.1834C19.6317 6.54577 20.123 5.5457 19.9693 5.11817C19.823 4.71064 18.9192 4.81815 18.9192 4.81815L15.914 4.83565C15.914 4.83565 15.6914 4.80564 15.5252 4.9044C15.3639 5.00191 15.2602 5.22693 15.2602 5.22693C15.2602 5.22693 14.7839 6.49452 14.1488 7.5721C12.81 9.84602 12.2737 9.96603 12.0549 9.82477C11.5461 9.49599 11.6736 8.50217 11.6736 7.79712C11.6736 5.5932 12.0074 4.67438 11.0223 4.43687C10.6948 4.35811 10.4548 4.30561 9.61849 4.29686C8.54591 4.28561 7.6371 4.30061 7.12331 4.55188C6.78078 4.71939 6.51701 5.09317 6.67827 5.11442C6.87704 5.14067 7.32707 5.23568 7.56584 5.5607C7.87461 5.97948 7.86336 6.92205 7.86336 6.92205C7.86336 6.92205 8.04088 9.51599 7.44958 9.83852C7.0433 10.0598 6.48701 9.6085 5.29317 7.5446C4.68188 6.48827 4.21934 5.31943 4.21934 5.31943C4.21934 5.31943 4.13059 5.10192 3.97182 4.98566C3.77931 4.8444 3.50929 4.79939 3.50929 4.79939L0.651577 4.8169C0.651577 4.8169 0.222796 4.8294 0.0652839 5.01566C-0.0747265 5.18192 0.0540331 5.52445 0.0540331 5.52445C0.0540331 5.52445 2.2917 10.7586 4.82439 13.3975C7.14831 15.8165 9.78601 15.6577 9.78601 15.6577Z"
            fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_309_464">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
      Vk
    </Button>
  </Col>
  <Col md={3}>
    <Button variant="outline-light" className="d-flex align-items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="20"
        height="20" viewBox="0 0 20 20" fill="none">
        <g clipPath="url(#clip0_309_579)">
          <path
            d="M9.78601 15.6577H10.9811C10.9811 15.6577 11.3424 15.6177 11.5261 15.4189C11.6961 15.2364 11.6899 14.8939 11.6899 14.8939C11.6899 14.8939 11.6661 13.29 12.4112 13.0538C13.145 12.8212 14.0876 14.6039 15.0864 15.2902C15.8415 15.809 16.4152 15.6952 16.4152 15.6952L19.0867 15.6577C19.0867 15.6577 20.4843 15.5714 19.8217 14.4726C19.768 14.3826 19.4355 13.6601 17.8354 12.1749C16.1602 10.6198 16.3852 10.8723 18.4029 8.1834C19.6317 6.54577 20.123 5.5457 19.9693 5.11817C19.823 4.71064 18.9192 4.81815 18.9192 4.81815L15.914 4.83565C15.914 4.83565 15.6914 4.80564 15.5252 4.9044C15.3639 5.00191 15.2602 5.22693 15.2602 5.22693C15.2602 5.22693 14.7839 6.49452 14.1488 7.5721C12.81 9.84602 12.2737 9.96603 12.0549 9.82477C11.5461 9.49599 11.6736 8.50217 11.6736 7.79712C11.6736 5.5932 12.0074 4.67438 11.0223 4.43687C10.6948 4.35811 10.4548 4.30561 9.61849 4.29686C8.54591 4.28561 7.6371 4.30061 7.12331 4.55188C6.78078 4.71939 6.51701 5.09317 6.67827 5.11442C6.87704 5.14067 7.32707 5.23568 7.56584 5.5607C7.87461 5.97948 7.86336 6.92205 7.86336 6.92205C7.86336 6.92205 8.04088 9.51599 7.44958 9.83852C7.0433 10.0598 6.48701 9.6085 5.29317 7.5446C4.68188 6.48827 4.21934 5.31943 4.21934 5.31943C4.21934 5.31943 4.13059 5.10192 3.97182 4.98566C3.77931 4.8444 3.50929 4.79939 3.50929 4.79939L0.651577 4.8169C0.651577 4.8169 0.222796 4.8294 0.0652839 5.01566C-0.0747265 5.18192 0.0540331 5.52445 0.0540331 5.52445C0.0540331 5.52445 2.2917 10.7586 4.82439 13.3975C7.14831 15.8165 9.78601 15.6577 9.78601 15.6577Z"
            fill="#1E88E5" />
        </g>
        <defs>
          <clipPath id="clip0_309_579">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
      Vk
    </Button>
  </Col>
  <Col md={3}>
    <Button variant="white" className="active d-flex align-items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="20"
        height="20" viewBox="0 0 20 20" fill="none">
        <g clipPath="url(#clip0_309_579)">
          <path
            d="M9.78601 15.6577H10.9811C10.9811 15.6577 11.3424 15.6177 11.5261 15.4189C11.6961 15.2364 11.6899 14.8939 11.6899 14.8939C11.6899 14.8939 11.6661 13.29 12.4112 13.0538C13.145 12.8212 14.0876 14.6039 15.0864 15.2902C15.8415 15.809 16.4152 15.6952 16.4152 15.6952L19.0867 15.6577C19.0867 15.6577 20.4843 15.5714 19.8217 14.4726C19.768 14.3826 19.4355 13.6601 17.8354 12.1749C16.1602 10.6198 16.3852 10.8723 18.4029 8.1834C19.6317 6.54577 20.123 5.5457 19.9693 5.11817C19.823 4.71064 18.9192 4.81815 18.9192 4.81815L15.914 4.83565C15.914 4.83565 15.6914 4.80564 15.5252 4.9044C15.3639 5.00191 15.2602 5.22693 15.2602 5.22693C15.2602 5.22693 14.7839 6.49452 14.1488 7.5721C12.81 9.84602 12.2737 9.96603 12.0549 9.82477C11.5461 9.49599 11.6736 8.50217 11.6736 7.79712C11.6736 5.5932 12.0074 4.67438 11.0223 4.43687C10.6948 4.35811 10.4548 4.30561 9.61849 4.29686C8.54591 4.28561 7.6371 4.30061 7.12331 4.55188C6.78078 4.71939 6.51701 5.09317 6.67827 5.11442C6.87704 5.14067 7.32707 5.23568 7.56584 5.5607C7.87461 5.97948 7.86336 6.92205 7.86336 6.92205C7.86336 6.92205 8.04088 9.51599 7.44958 9.83852C7.0433 10.0598 6.48701 9.6085 5.29317 7.5446C4.68188 6.48827 4.21934 5.31943 4.21934 5.31943C4.21934 5.31943 4.13059 5.10192 3.97182 4.98566C3.77931 4.8444 3.50929 4.79939 3.50929 4.79939L0.651577 4.8169C0.651577 4.8169 0.222796 4.8294 0.0652839 5.01566C-0.0747265 5.18192 0.0540331 5.52445 0.0540331 5.52445C0.0540331 5.52445 2.2917 10.7586 4.82439 13.3975C7.14831 15.8165 9.78601 15.6577 9.78601 15.6577Z"
            fill="#1E88E5" />
        </g>
        <defs>
          <clipPath id="clip0_309_579">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
      Vk
    </Button>
  </Col>
  <Col md={2}>
    <Button variant="outline-light" className="btn-square btn-md d-flex justify-content-center align-items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="20"
        height="20" viewBox="0 0 20 20" fill="none">
        <g clipPath="url(#clip0_309_579)">
          <path
            d="M9.78601 15.6577H10.9811C10.9811 15.6577 11.3424 15.6177 11.5261 15.4189C11.6961 15.2364 11.6899 14.8939 11.6899 14.8939C11.6899 14.8939 11.6661 13.29 12.4112 13.0538C13.145 12.8212 14.0876 14.6039 15.0864 15.2902C15.8415 15.809 16.4152 15.6952 16.4152 15.6952L19.0867 15.6577C19.0867 15.6577 20.4843 15.5714 19.8217 14.4726C19.768 14.3826 19.4355 13.6601 17.8354 12.1749C16.1602 10.6198 16.3852 10.8723 18.4029 8.1834C19.6317 6.54577 20.123 5.5457 19.9693 5.11817C19.823 4.71064 18.9192 4.81815 18.9192 4.81815L15.914 4.83565C15.914 4.83565 15.6914 4.80564 15.5252 4.9044C15.3639 5.00191 15.2602 5.22693 15.2602 5.22693C15.2602 5.22693 14.7839 6.49452 14.1488 7.5721C12.81 9.84602 12.2737 9.96603 12.0549 9.82477C11.5461 9.49599 11.6736 8.50217 11.6736 7.79712C11.6736 5.5932 12.0074 4.67438 11.0223 4.43687C10.6948 4.35811 10.4548 4.30561 9.61849 4.29686C8.54591 4.28561 7.6371 4.30061 7.12331 4.55188C6.78078 4.71939 6.51701 5.09317 6.67827 5.11442C6.87704 5.14067 7.32707 5.23568 7.56584 5.5607C7.87461 5.97948 7.86336 6.92205 7.86336 6.92205C7.86336 6.92205 8.04088 9.51599 7.44958 9.83852C7.0433 10.0598 6.48701 9.6085 5.29317 7.5446C4.68188 6.48827 4.21934 5.31943 4.21934 5.31943C4.21934 5.31943 4.13059 5.10192 3.97182 4.98566C3.77931 4.8444 3.50929 4.79939 3.50929 4.79939L0.651577 4.8169C0.651577 4.8169 0.222796 4.8294 0.0652839 5.01566C-0.0747265 5.18192 0.0540331 5.52445 0.0540331 5.52445C0.0540331 5.52445 2.2917 10.7586 4.82439 13.3975C7.14831 15.8165 9.78601 15.6577 9.78601 15.6577Z"
            fill="#1E88E5" />
        </g>
        <defs>
          <clipPath id="clip0_309_579">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Button>
  </Col>
  <Col md={1}>
    <Button className="btn-square btn-md btn-dropbox d-flex justify-content-center align-items-center">
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg"
        width="20" height="20" viewBox="0 0 20 20"
        fill="none">
        <g clipPath="url(#clip0_309_464)">
          <path
            d="M9.78601 15.6577H10.9811C10.9811 15.6577 11.3424 15.6177 11.5261 15.4189C11.6961 15.2364 11.6899 14.8939 11.6899 14.8939C11.6899 14.8939 11.6661 13.29 12.4112 13.0538C13.145 12.8212 14.0876 14.6039 15.0864 15.2902C15.8415 15.809 16.4152 15.6952 16.4152 15.6952L19.0867 15.6577C19.0867 15.6577 20.4843 15.5714 19.8217 14.4726C19.768 14.3826 19.4355 13.6601 17.8354 12.1749C16.1602 10.6198 16.3852 10.8723 18.4029 8.1834C19.6317 6.54577 20.123 5.5457 19.9693 5.11817C19.823 4.71064 18.9192 4.81815 18.9192 4.81815L15.914 4.83565C15.914 4.83565 15.6914 4.80564 15.5252 4.9044C15.3639 5.00191 15.2602 5.22693 15.2602 5.22693C15.2602 5.22693 14.7839 6.49452 14.1488 7.5721C12.81 9.84602 12.2737 9.96603 12.0549 9.82477C11.5461 9.49599 11.6736 8.50217 11.6736 7.79712C11.6736 5.5932 12.0074 4.67438 11.0223 4.43687C10.6948 4.35811 10.4548 4.30561 9.61849 4.29686C8.54591 4.28561 7.6371 4.30061 7.12331 4.55188C6.78078 4.71939 6.51701 5.09317 6.67827 5.11442C6.87704 5.14067 7.32707 5.23568 7.56584 5.5607C7.87461 5.97948 7.86336 6.92205 7.86336 6.92205C7.86336 6.92205 8.04088 9.51599 7.44958 9.83852C7.0433 10.0598 6.48701 9.6085 5.29317 7.5446C4.68188 6.48827 4.21934 5.31943 4.21934 5.31943C4.21934 5.31943 4.13059 5.10192 3.97182 4.98566C3.77931 4.8444 3.50929 4.79939 3.50929 4.79939L0.651577 4.8169C0.651577 4.8169 0.222796 4.8294 0.0652839 5.01566C-0.0747265 5.18192 0.0540331 5.52445 0.0540331 5.52445C0.0540331 5.52445 2.2917 10.7586 4.82439 13.3975C7.14831 15.8165 9.78601 15.6577 9.78601 15.6577Z"
            fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_309_464">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Button>
  </Col> 
</Row>
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
              </Row>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UiButton;
