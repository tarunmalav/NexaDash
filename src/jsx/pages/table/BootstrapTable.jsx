import { Fragment, useState } from "react";
import {
  Row,
  Col,
  Card,
  Table,
  Badge,
  Dropdown,
  ProgressBar,
  Tab,
  Nav,
} from "react-bootstrap";
import avatar1 from "../../../assets/images/avatar/1.jpg";
import avatar2 from "../../../assets/images/avatar/2.jpg";
import avatar3 from "../../../assets/images/avatar/3.jpg"; 
import PageTitle from "../../layouts/PageTitle";
import Highlight from "react-highlight";
import { Link } from "react-scroll";

const sidebarLink = [
  { to: 'bootstrap-table1', title: 'Recent Payments Queue' },
  { to: 'bootstrap-table2', title: 'Exam Toppers' },
  { to: 'bootstrap-table3', title: 'Basic' },
  { to: 'bootstrap-table4', title: 'Table Striped' },
  { to: 'bootstrap-table5', title: 'Table Bordered' },
  { to: 'bootstrap-table6', title: 'Table Hover' },
  { to: 'bootstrap-table7', title: 'Hover Table' },
  { to: 'bootstrap-table8', title: 'Table Bordered' },
  { to: 'bootstrap-table9', title: 'Bordered Table' },
  { to: 'bootstrap-table10', title: 'Table Stripped' },
  { to: 'bootstrap-table11', title: 'Responsive Table' },
  { to: 'bootstrap-table12', title: 'Heading With Background' },
  { to: 'bootstrap-table13', title: 'Primary Table' },
  { to: 'bootstrap-table14', title: 'Primary Table Hover' },
  { to: 'bootstrap-table15', title: 'Contextual Table' },
];

const BootstrapTable = () => {
  const [activeLink, setActiveLink] = useState(0);
  const chackboxFun = (type) => {
    setTimeout(() => {
      const chackbox = document.querySelectorAll(".bs_exam_topper input");
      const motherChackBox = document.querySelector(".bs_exam_topper_all input");
      for (let i = 0; i < chackbox.length; i++) {
        const element = chackbox[i];
        if (type === "all") {
          if (motherChackBox.checked) {
            element.checked = true;
          } else {
            element.checked = false;
          }
        } else {
          if (!element.checked) {
            motherChackBox.checked = false;
            break;
          } else {
            motherChackBox.checked = true;
          }
        }
      }
    }, 100)
  };
  const svg1 = (
    <svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <rect x="0" y="0" width="24" height="24"></rect>
        <circle fill="#000000" cx="5" cy="12" r="2"></circle>
        <circle fill="#000000" cx="12" cy="12" r="2"></circle>
        <circle fill="#000000" cx="19" cy="12" r="2"></circle>
      </g>
    </svg>
  );

  return (
    <Fragment>
      <PageTitle activeMenu="Basic Bootstrap Table" motherMenu="Home" pageContent={"Basic Bootstrap Table"} />
      <div className="container">
        <div className="element-wrapper">
          <div className="element-right">
            <div className="p-4 border-bottom">
              <h2>Bootstrap Table.</h2>
              <p>Make use of Bootstrap's unique Bootstrap Table styles to enhance actions in forms, dialogs, and various other elements, featuring comprehensive support for multiple sizes, states, and additional functionalities.</p>
              <Link to={"#"} className="btn btn-primary">Bootstrap Table</Link>
            </div>

            <div className="demo-right-inner" id="right-sidebar">
              <h4 className="title">Bootstrap Table</h4>
              <div className="demo-right-tabs" id="rightSidebarScroll">
                <ul className="navbar-nav" id="menu-bar">
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
                <Col xl={12}>
                  <Card className="dz-card" name="bootstrap-table1">
                    <Tab.Container defaultActiveKey="Preview">
                      <Card.Header className="card-header flex-wrap border-0">
                        <div>
                          <Card.Title>Recent Payments Queue</Card.Title>
                          <Card.Text className="m-0 subtitle"> Recent Payments Queue. Add <code>table boootrstap</code> class in root </Card.Text>
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
                            <Table responsive>
                              <thead>
                                <tr>
                                  <th className="width80">
                                    <strong>#</strong>
                                  </th>
                                  <th>
                                    <strong>PATIENT</strong>
                                  </th>
                                  <th>
                                    <strong>DR NAME</strong>
                                  </th>
                                  <th>
                                    <strong>DATE</strong>
                                  </th>
                                  <th>
                                    <strong>STATUS</strong>
                                  </th>
                                  <th>
                                    <strong>PRICE</strong>
                                  </th>
                                  <th>
                                    <strong>ACTION</strong>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <strong>01</strong>
                                  </td>
                                  <td>Mr. Bobby</td>
                                  <td>Dr. Jackson</td>
                                  <td>01 August 2022</td>
                                  <td>
                                    <span className="badge light badge-success">Successful</span>
                                  </td>
                                  <td>$21.56</td>
                                  <td>
                                    <Dropdown>
                                      <Dropdown.Toggle
                                        variant="success"
                                        className="light sharp i-false"
                                      >
                                        {svg1}
                                      </Dropdown.Toggle>
                                      <Dropdown.Menu>
                                        <Dropdown.Item>Edit</Dropdown.Item>
                                        <Dropdown.Item>Delete</Dropdown.Item>
                                      </Dropdown.Menu>
                                    </Dropdown>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <strong>02</strong>
                                  </td>
                                  <td>Mr. Bobby</td>
                                  <td>Dr. Jackson</td>
                                  <td>01 August 2022</td>
                                  <td>
                                    <Badge bg="" className="light badge-danger">Canceled</Badge>
                                  </td>
                                  <td>$21.56</td>
                                  <td>
                                    <Dropdown>
                                      <Dropdown.Toggle
                                        variant="danger"
                                        className="light sharp i-false"
                                      >
                                        {svg1}
                                      </Dropdown.Toggle>
                                      <Dropdown.Menu>
                                        <Dropdown.Item>Edit</Dropdown.Item>
                                        <Dropdown.Item>Delete</Dropdown.Item>
                                      </Dropdown.Menu>
                                    </Dropdown>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <strong>03</strong>
                                  </td>
                                  <td>Mr. Bobby</td>
                                  <td>Dr. Jackson</td>
                                  <td>01 August 2022</td>
                                  <td>
                                    <Badge bg="" className="badge-warning light">Pending</Badge>
                                  </td>
                                  <td>$21.56</td>
                                  <td>
                                    <Dropdown>
                                      <Dropdown.Toggle
                                        variant="warning"
                                        className="light sharp i-false"
                                      >
                                        {svg1}
                                      </Dropdown.Toggle>
                                      <Dropdown.Menu>
                                        <Dropdown.Item>Edit</Dropdown.Item>
                                        <Dropdown.Item>Delete</Dropdown.Item>
                                      </Dropdown.Menu>
                                    </Dropdown>
                                  </td>
                                </tr>
                              </tbody>
                            </Table>
                          </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0"><code className="language-html">
                              <Highlight>
                                {`
    <Table responsive>
    <thead>
      <tr>
        <th className="width80">
          <strong>#</strong>
        </th>
        <th>
          <strong>PATIENT</strong>
        </th>
        <th>
          <strong>DR NAME</strong>
        </th>
        <th>
          <strong>DATE</strong>
        </th>
        <th>
          <strong>STATUS</strong>
        </th>
        <th>
          <strong>PRICE</strong>
        </th>
        <th>
          <strong>ACTION</strong>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <strong>01</strong>
        </td>
        <td>Mr. Bobby</td>
        <td>Dr. Jackson</td>
        <td>01 August 2022</td>
        <td>
          <span className="badge light badge-success">Successful</span>
        </td>
        <td>$21.56</td>
        <td>
          <Dropdown>
            <Dropdown.Toggle
              variant="success"
              className="light sharp i-false"
            >
              {svg1}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Edit</Dropdown.Item>
              <Dropdown.Item>Delete</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
      <tr>
        <td>
          <strong>02</strong>
        </td>
        <td>Mr. Bobby</td>
        <td>Dr. Jackson</td>
        <td>01 August 2022</td>
        <td>
          <Badge bg="" className="light badge-danger">Canceled</Badge>
        </td>
        <td>$21.56</td>
        <td>
          <Dropdown>
            <Dropdown.Toggle
              variant="danger"
              className="light sharp i-false"
            >
              {svg1}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Edit</Dropdown.Item>
              <Dropdown.Item>Delete</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
      <tr>
        <td>
          <strong>03</strong>
        </td>
        <td>Mr. Bobby</td>
        <td>Dr. Jackson</td>
        <td>01 August 2022</td>
        <td>
          <Badge bg="" className="badge-warning light">Pending</Badge>
        </td>
        <td>$21.56</td>
        <td>
          <Dropdown>
            <Dropdown.Toggle
              variant="warning"
              className="light sharp i-false"
            >
              {svg1}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Edit</Dropdown.Item>
              <Dropdown.Item>Delete</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
    </tbody>
  </Table>
    `}
                              </Highlight>
                            </code></pre>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </Card>
                </Col>
                <Col xl={12}>
                  <Card className="dz-card" name="bootstrap-table2">
                    <Tab.Container defaultActiveKey="Preview">
                      <Card.Header className="card-header flex-wrap border-0">
                        <div>
                          <Card.Title> Exam Toppers</Card.Title>
                          <Card.Text className="m-0 subtitle"> Exam Toppers. Add class <code>exam</code> with the class <code> bootstrap-table</code></Card.Text>
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
                            <Table responsive>
                              <thead>
                                <tr>
                                  <th className="width50 ">
                                    <div className="form-check custom-checkbox checkbox-success check-lg me-3 bs_exam_topper_all">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="checkAll"
                                        required=""
                                        onClick={() => chackboxFun("all")}
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="checkAll"
                                      ></label>
                                    </div>
                                  </th>
                                  <th>
                                    <strong>ROLL NO.</strong>
                                  </th>
                                  <th>
                                    <strong>NAME</strong>
                                  </th>
                                  <th>
                                    <strong>Email</strong>
                                  </th>
                                  <th>
                                    <strong>Date</strong>
                                  </th>
                                  <th>
                                    <strong>Status</strong>
                                  </th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <div className="form-check custom-checkbox checkbox-success check-lg me-3 bs_exam_topper">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="customCheckBox2"
                                        required=""
                                        onClick={() => chackboxFun()}
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="customCheckBox2"
                                      ></label>
                                    </div>
                                  </td>
                                  <td>
                                    <strong>542</strong>
                                  </td>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <img
                                        src={avatar1}
                                        className="rounded-lg me-2"
                                        width="24"
                                        alt=""
                                      />{" "}
                                      <span className="w-space-no">Dr. Jackson</span>
                                    </div>
                                  </td>
                                  <td>example@example.com </td>
                                  <td>01 August 2022</td>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <i className="fa fa-circle text-success me-1" />{" "}
                                      Successful
                                    </div>
                                  </td>
                                  <td>
                                    <div className="d-flex">
                                      <Link
                                        href="#"
                                        className="btn btn-primary shadow btn-xs sharp me-1"
                                      >
                                        <i className="fas fa-pencil-alt" />
                                      </Link>
                                      <Link
                                        href="#"
                                        className="btn btn-danger shadow btn-xs sharp"
                                      >
                                        <i className="fa fa-trash" />
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="form-check custom-checkbox checkbox-success check-lg me-3 bs_exam_topper">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="customCheckBox3"
                                        required=""
                                        onClick={() => chackboxFun()}
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="customCheckBox3"
                                      ></label>
                                    </div>
                                  </td>
                                  <td>
                                    <strong>542</strong>
                                  </td>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <img
                                        src={avatar2}
                                        className="rounded-lg me-2"
                                        width="24"
                                        alt=""
                                      />{" "}
                                      <span className="w-space-no">Dr. Jackson</span>
                                    </div>
                                  </td>
                                  <td>example@example.com </td>
                                  <td>01 August 2022</td>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <i className="fa fa-circle text-danger me-1" />{" "}
                                      Canceled
                                    </div>
                                  </td>
                                  <td>
                                    <div className="d-flex">
                                      <Link
                                        href="#"
                                        className="btn btn-primary shadow btn-xs sharp me-1"
                                      >
                                        <i className="fas fa-pencil-alt" />
                                      </Link>
                                      <Link
                                        href="#"
                                        className="btn btn-danger shadow btn-xs sharp"
                                      >
                                        <i className="fa fa-trash" />
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="form-check custom-checkbox checkbox-success check-lg me-3 bs_exam_topper">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="customCheckBox4"
                                        required=""
                                        onClick={() => chackboxFun()}
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="customCheckBox4"
                                      ></label>
                                    </div>
                                  </td>
                                  <td>
                                    <strong>542</strong>
                                  </td>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <img
                                        src={avatar3}
                                        className="rounded-lg me-2"
                                        width="24"
                                        alt=""
                                      />{" "}
                                      <span className="w-space-no">Dr. Jackson</span>
                                    </div>
                                  </td>
                                  <td>example@example.com </td>
                                  <td>01 August 2022</td>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <i className="fa fa-circle text-warning me-1" />{" "}
                                      Pending
                                    </div>
                                  </td>
                                  <td>
                                    <div className="d-flex">
                                      <Link
                                        href="#"
                                        className="btn btn-primary shadow btn-xs sharp me-1"
                                      >
                                        <i className="fas fa-pencil-alt" />
                                      </Link>
                                      <Link
                                        href="#"
                                        className="btn btn-danger shadow btn-xs sharp"
                                      >
                                        <i className="fa fa-trash" />
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </Table>
                          </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0"><code className="language-html">
                              <Highlight>
                                {`
  <Table responsive>
  <thead>
    <tr>
      <th className="width50 ">
        <div className="form-check custom-checkbox checkbox-success check-lg me-3 bs_exam_topper_all">
          <input
            type="checkbox"
            className="form-check-input"
            id="checkAll"
            required=""
            onClick={() => chackboxFun("all")}
          />
          <label
            className="form-check-label"
            htmlFor="checkAll"
          ></label>
        </div>
      </th>
      <th>
        <strong>ROLL NO.</strong>
      </th>
      <th>
        <strong>NAME</strong>
      </th>
      <th>
        <strong>Email</strong>
      </th>
      <th>
        <strong>Date</strong>
      </th>
      <th>
        <strong>Status</strong>
      </th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div className="form-check custom-checkbox checkbox-success check-lg me-3 bs_exam_topper">
          <input
            type="checkbox"
            className="form-check-input"
            id="customCheckBox2"
            required=""
            onClick={() => chackboxFun()}
          />
          <label
            className="form-check-label"
            htmlFor="customCheckBox2"
          ></label>
        </div>
      </td>
      <td>
        <strong>542</strong>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <img
            src={avatar1}
            className="rounded-lg me-2"
            width="24"
            alt=""
          />{" "}
          <span className="w-space-no">Dr. Jackson</span>
        </div>
      </td>
      <td>example@example.com </td>
      <td>01 August 2022</td>
      <td>
        <div className="d-flex align-items-center">
          <i className="fa fa-circle text-success me-1" />{" "}
          Successful
        </div>
      </td>
      <td>
        <div className="d-flex">
          <Link
            href="#"
            className="btn btn-primary shadow btn-xs sharp me-1"
          >
            <i className="fas fa-pencil-alt" />
          </Link>
          <Link
            href="#"
            className="btn btn-danger shadow btn-xs sharp"
          >
            <i className="fa fa-trash" />
          </Link>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div className="form-check custom-checkbox checkbox-success check-lg me-3 bs_exam_topper">
          <input
            type="checkbox"
            className="form-check-input"
            id="customCheckBox3"
            required=""
            onClick={() => chackboxFun()}
          />
          <label
            className="form-check-label"
            htmlFor="customCheckBox3"
          ></label>
        </div>
      </td>
      <td>
        <strong>542</strong>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <img
            src={avatar2}
            className="rounded-lg me-2"
            width="24"
            alt=""
          />{" "}
          <span className="w-space-no">Dr. Jackson</span>
        </div>
      </td>
      <td>example@example.com </td>
      <td>01 August 2022</td>
      <td>
        <div className="d-flex align-items-center">
          <i className="fa fa-circle text-danger me-1" />{" "}
          Canceled
        </div>
      </td>
      <td>
        <div className="d-flex">
          <Link
            href="#"
            className="btn btn-primary shadow btn-xs sharp me-1"
          >
            <i className="fas fa-pencil-alt" />
          </Link>
          <Link
            href="#"
            className="btn btn-danger shadow btn-xs sharp"
          >
            <i className="fa fa-trash" />
          </Link>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div className="form-check custom-checkbox checkbox-success check-lg me-3 bs_exam_topper">
          <input
            type="checkbox"
            className="form-check-input"
            id="customCheckBox4"
            required=""
            onClick={() => chackboxFun()}
          />
          <label
            className="form-check-label"
            htmlFor="customCheckBox4"
          ></label>
        </div>
      </td>
      <td>
        <strong>542</strong>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <img
            src={avatar3}
            className="rounded-lg me-2"
            width="24"
            alt=""
          />{" "}
          <span className="w-space-no">Dr. Jackson</span>
        </div>
      </td>
      <td>example@example.com </td>
      <td>01 August 2022</td>
      <td>
        <div className="d-flex align-items-center">
          <i className="fa fa-circle text-warning me-1" />{" "}
          Pending
        </div>
      </td>
      <td>
        <div className="d-flex">
          <Link
            href="#"
            className="btn btn-primary shadow btn-xs sharp me-1"
          >
            <i className="fas fa-pencil-alt" />
          </Link>
          <Link
            href="#"
            className="btn btn-danger shadow btn-xs sharp"
          >
            <i className="fa fa-trash" />
          </Link>
        </div>
      </td>
    </tr>
  </tbody>
</Table>
    `}
                              </Highlight>
                            </code></pre>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </Card>
                </Col>
                <Col xl={12}>
                  <Card className="dz-card" name="bootstrap-table3">
                    <Tab.Container defaultActiveKey="Preview">
                      <Card.Header className="card-header flex-wrap border-0">
                        <div>
                          <Card.Title>Basic </Card.Title>
                          <Card.Text className="m-0 subtitle"> Add <code>basic</code> class with <code>bootsrtap-table</code></Card.Text>
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
                            <Table responsive>
                              <thead>
                                <tr>
                                  <th>#</th>
                                  <th>Name</th>
                                  <th>Status</th>
                                  <th>Date</th>
                                  <th>Price</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th>1</th>
                                  <td>Kolor Tea Shirt For Man</td>
                                  <td>
                                    <Badge bg="" className="badge-primary light">Sale</Badge>
                                  </td>
                                  <td>January 22</td>
                                  <td className="color-primary">$21.56</td>
                                </tr>
                                <tr>
                                  <th>2</th>
                                  <td>Kolor Tea Shirt For Women</td>
                                  <td>
                                    <Badge bg="success">Tax</Badge>
                                  </td>
                                  <td>January 30</td>
                                  <td className="color-success">$55.32</td>
                                </tr>
                                <tr>
                                  <th>3</th>
                                  <td>Blue Backpack For Baby</td>
                                  <td>
                                    <Badge bg="danger">Extended</Badge>
                                  </td>
                                  <td>January 25</td>
                                  <td className="color-danger">$14.85</td>
                                </tr>
                              </tbody>
                            </Table>
                          </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0"><code className="language-html">
                              <Highlight>
                                {`
  <Table responsive>
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Status</th>
        <th>Date</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td>Kolor Tea Shirt For Man</td>
        <td>
          <Badge bg="" className="badge-primary light">Sale</Badge>
        </td>
        <td>January 22</td>
        <td className="color-primary">$21.56</td>
      </tr>
      <tr>
        <th>2</th>
        <td>Kolor Tea Shirt For Women</td>
        <td>
          <Badge bg="success">Tax</Badge>
        </td>
        <td>January 30</td>
        <td className="color-success">$55.32</td>
      </tr>
      <tr>
        <th>3</th>
        <td>Blue Backpack For Baby</td>
        <td>
          <Badge bg="danger">Extended</Badge>
        </td>
        <td>January 25</td>
        <td className="color-danger">$14.85</td>
      </tr>
    </tbody>
  </Table>
    `}
                              </Highlight>
                            </code></pre>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </Card>
                </Col>
                <Col xl={12}>
                  <Card className="dz-card" name="bootstrap-table4">
                    <Tab.Container defaultActiveKey="Preview">
                      <Card.Header className="card-header flex-wrap border-0">
                        <div>
                          <Card.Title> Table Striped</Card.Title>
                          <Card.Text className="m-0 subtitle">Add <code>table striped</code> class with <code>bootsrtap-table</code> </Card.Text>
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
                            <Table responsive striped>
                              <thead>
                                <tr>
                                  <th>#</th>
                                  <th>Name</th>
                                  <th>Status</th>
                                  <th>Date</th>
                                  <th>Price</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th>1</th>
                                  <td>Color Tea Shirt For Man</td>
                                  <td>
                                    <Badge bg="primary">Sale</Badge>
                                  </td>
                                  <td>January 22</td>
                                  <td className="color-primary">$21.56</td>
                                </tr>
                                <tr>
                                  <th>2</th>
                                  <td>Color Tea Shirt For Women</td>
                                  <td>
                                    <Badge bg="" className="badge-success light">Tax</Badge>
                                  </td>
                                  <td>January 30</td>
                                  <td className="color-success">$55.32</td>
                                </tr>
                                <tr>
                                  <th>3</th>
                                  <td>Blue Backpack For Baby</td>
                                  <td>
                                    <Badge bg="danger">Extended</Badge>
                                  </td>
                                  <td>January 25</td>
                                  <td className="color-danger">$14.85</td>
                                </tr>
                              </tbody>
                            </Table>
                          </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0"><code className="language-html">
                              <Highlight>
                                {`
  <Table responsive striped>
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Status</th>
        <th>Date</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td>Color Tea Shirt For Man</td>
        <td>
          <Badge bg="primary">Sale</Badge>
        </td>
        <td>January 22</td>
        <td className="color-primary">$21.56</td>
      </tr>
      <tr>
        <th>2</th>
        <td>Color Tea Shirt For Women</td>
        <td>
          <Badge bg="" className="badge-success light">Tax</Badge>
        </td>
        <td>January 30</td>
        <td className="color-success">$55.32</td>
      </tr>
      <tr>
        <th>3</th>
        <td>Blue Backpack For Baby</td>
        <td>
          <Badge bg="danger">Extended</Badge>
        </td>
        <td>January 25</td>
        <td className="color-danger">$14.85</td>
      </tr>
    </tbody>
  </Table>
    `}
                              </Highlight>
                            </code></pre>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </Card>
                </Col>
                <Col xl={12}>
                  <Card className="dz-card" name="bootstrap-table5">
                    <Tab.Container defaultActiveKey="Preview">
                      <Card.Header className="card-header flex-wrap border-0">
                        <div>
                          <Card.Title> Table Bordered</Card.Title>
                          <Card.Text className="m-0 subtitle">Add <code>table bordered</code> class with <code>bootsrap-table</code> </Card.Text>
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
                            <Table responsive bordered>
                              <thead>
                                <tr>
                                  <th>#</th>
                                  <th>Name</th>
                                  <th>Status</th>
                                  <th>Date</th>
                                  <th>Price</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th>1</th>
                                  <td>Kolor Tea Shirt For Man</td>
                                  <td>
                                    <Badge bg="primary">Sale</Badge>
                                  </td>
                                  <td>January 22</td>
                                  <td className="color-primary">$21.56</td>
                                </tr>
                                <tr>
                                  <th>2</th>
                                  <td>Kolor Tea Shirt For Women</td>
                                  <td>
                                    <Badge bg="success">Tax</Badge>
                                  </td>
                                  <td>January 30</td>
                                  <td className="color-success">$55.32</td>
                                </tr>
                                <tr>
                                  <th>3</th>
                                  <td>Blue Backpack For Baby</td>
                                  <td>
                                    <Badge bg="danger">Extended</Badge>
                                  </td>
                                  <td>January 25</td>
                                  <td className="color-danger">$14.85</td>
                                </tr>
                              </tbody>
                            </Table>
                          </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0"><code className="language-html">
                              <Highlight>
                                {`
  <Table responsive bordered>
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Status</th>
        <th>Date</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td>Kolor Tea Shirt For Man</td>
        <td>
          <Badge bg="primary">Sale</Badge>
        </td>
        <td>January 22</td>
        <td className="color-primary">$21.56</td>
      </tr>
      <tr>
        <th>2</th>
        <td>Kolor Tea Shirt For Women</td>
        <td>
          <Badge bg="success">Tax</Badge>
        </td>
        <td>January 30</td>
        <td className="color-success">$55.32</td>
      </tr>
      <tr>
        <th>3</th>
        <td>Blue Backpack For Baby</td>
        <td>
          <Badge bg="danger">Extended</Badge>
        </td>
        <td>January 25</td>
        <td className="color-danger">$14.85</td>
      </tr>
    </tbody>
  </Table>
    `}
                              </Highlight>
                            </code></pre>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </Card>
                </Col>
                <Col xl={12}>
                  <Card className="dz-card" name="bootstrap-table6">
                    <Tab.Container defaultActiveKey="Preview">
                      <Card.Header className="card-header flex-wrap border-0">
                        <div>
                          <Card.Title> Table Hover</Card.Title>
                          <Card.Text className="m-0 subtitle"> Add <code>table hover</code> class with <code>bootsrap-table</code></Card.Text>
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
                            <Table responsive hover>
                              <thead>
                                <tr>
                                  <th>#</th>
                                  <th>Name</th>
                                  <th>Status</th>
                                  <th>Date</th>
                                  <th>Price</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th>1</th>
                                  <td>Kolor Tea Shirt For Man</td>
                                  <td>
                                    <Badge bg="" className="badge-primary light">Sale</Badge>
                                  </td>
                                  <td>January 22</td>
                                  <td className="color-primary">$21.56</td>
                                </tr>
                                <tr>
                                  <th>2</th>
                                  <td>Kolor Tea Shirt For Women</td>
                                  <td>
                                    <Badge bg="success">Tax</Badge>
                                  </td>
                                  <td>January 30</td>
                                  <td className="color-success">$55.32</td>
                                </tr>
                                <tr>
                                  <th>3</th>
                                  <td>Blue Backpack For Baby</td>
                                  <td>
                                    <Badge bg="" className="badge-danger light">Extended</Badge>
                                  </td>
                                  <td>January 25</td>
                                  <td className="color-danger">$14.85</td>
                                </tr>
                              </tbody>
                            </Table>
                          </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0"><code className="language-html">
                              <Highlight>
                                {`
  <Table responsive hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Status</th>
      <th>Date</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>Kolor Tea Shirt For Man</td>
      <td>
        <Badge bg="" className="badge-primary light">Sale</Badge>
      </td>
      <td>January 22</td>
      <td className="color-primary">$21.56</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Kolor Tea Shirt For Women</td>
      <td>
        <Badge bg="success">Tax</Badge>
      </td>
      <td>January 30</td>
      <td className="color-success">$55.32</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Blue Backpack For Baby</td>
      <td>
        <Badge bg="" className="badge-danger light">Extended</Badge>
      </td>
      <td>January 25</td>
      <td className="color-danger">$14.85</td>
    </tr>
  </tbody>
  </Table>
    `}
                              </Highlight>
                            </code></pre>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </Card>
                </Col>
                <Col xl={12}>
                  <Card className="dz-card" name="bootstrap-table7">
                    <Tab.Container defaultActiveKey="Preview">
                      <Card.Header className="card-header flex-wrap border-0">
                        <div>
                          <Card.Title> Hover Table</Card.Title>
                          <Card.Text className="m-0 subtitle"> Add <code>hover table</code> class with <code>bootsrtap-table</code></Card.Text>
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
                            <Table responsive hover className="header-border verticle-middle">
                              <thead>
                                <tr>
                                  <th scope="col">#</th>
                                  <th scope="col">Product</th>
                                  <th scope="col">Popularity</th>
                                  <th scope="col">Sales</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th>1</th>
                                  <td>Air Conditioner</td>
                                  <td>
                                    <ProgressBar now={70} variant="primary" />
                                  </td>
                                  <td>
                                    <Badge bg="" className="badge-primary light">70%</Badge>
                                  </td>
                                </tr>
                                <tr>
                                  <th>2</th>
                                  <td>Textiles</td>
                                  <td>
                                    <ProgressBar variant="success" now="70" />
                                  </td>
                                  <td>
                                    <Badge bg="success">70%</Badge>
                                  </td>
                                </tr>
                                <tr>
                                  <th>3</th>
                                  <td>Milk Powder</td>
                                  <td>
                                    <ProgressBar variant="dark" now="70" />
                                  </td>
                                  <td>
                                    <Badge bg="" className="badge badge-dark light">70%</Badge>
                                  </td>
                                </tr>
                                <tr>
                                  <th>4</th>
                                  <td>Vehicles</td>
                                  <td>
                                    <ProgressBar variant="danger" now="70" />
                                  </td>
                                  <td>
                                    <Badge bg="danger">70%</Badge>
                                  </td>
                                </tr>
                                <tr>
                                  <th>5</th>
                                  <td>Boats</td>
                                  <td>
                                    <ProgressBar variant="warning" now="70" />
                                  </td>
                                  <td>
                                    <Badge bg="warning">70%</Badge>
                                  </td>
                                </tr>
                              </tbody>
                            </Table>
                          </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0"><code className="language-html">
                              <Highlight>
                                {`
  <Table responsive hover className="header-border verticle-middle">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Product</th>
        <th scope="col">Popularity</th>
        <th scope="col">Sales</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td>Air Conditioner</td>
        <td>
          <ProgressBar now={70} variant="primary" />
        </td>
        <td>
          <Badge bg="" className="badge-primary light">70%</Badge>
        </td>
      </tr>
      <tr>
        <th>2</th>
        <td>Textiles</td>
        <td>
          <ProgressBar variant="success" now="70" />
        </td>
        <td>
          <Badge bg="success">70%</Badge>
        </td>
      </tr>
      <tr>
        <th>3</th>
        <td>Milk Powder</td>
        <td>
          <ProgressBar variant="dark" now="70" />
        </td>
        <td>
          <Badge bg="" className="badge badge-dark light">70%</Badge>
        </td>
      </tr>
      <tr>
        <th>4</th>
        <td>Vehicles</td>
        <td>
          <ProgressBar variant="danger" now="70" />
        </td>
        <td>
          <Badge bg="danger">70%</Badge>
        </td>
      </tr>
      <tr>
        <th>5</th>
        <td>Boats</td>
        <td>
          <ProgressBar variant="warning" now="70" />
        </td>
        <td>
          <Badge bg="warning">70%</Badge>
        </td>
      </tr>
    </tbody>
  </Table>
    `}
                              </Highlight>
                            </code></pre>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </Card>
                </Col>
                <Col xl={12}>
                  <Card className="dz-card" name="bootstrap-table8">
                    <Tab.Container defaultActiveKey="Preview">
                      <Card.Header className="card-header flex-wrap border-0">
                        <div>
                          <Card.Title> Table Bordered</Card.Title>
                          <Card.Text className="m-0 subtitle"> Add <code>table bordered</code> class with <code>bootsrtap-table</code></Card.Text>
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
                            <Table responsive bordered className="verticle-middle">
                              <thead>
                                <tr>
                                  <th scope="col">Task</th>
                                  <th scope="col">Progress</th>
                                  <th scope="col">Deadline</th>
                                  <th scope="col">Label</th>
                                  <th scope="col">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Air Conditioner</td>
                                  <td>
                                    <ProgressBar now={70} variant="primary" />
                                  </td>
                                  <td>Apr 20,2018</td>
                                  <td>
                                    <Badge bg="" className="badge-primary light">70%</Badge>
                                  </td>
                                  <td>
                                    <span>
                                      <Link
                                        to="/table-bootstrap-basic"
                                        className="me-4"
                                        title="Edit"
                                      >
                                        <i className="fas fa-pencil-alt color-muted" />{" "}
                                      </Link>
                                      <Link to="/table-bootstrap-basic" title="Close">
                                        <i className="fa fa-close text-danger" />
                                      </Link>
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Textiles</td>
                                  <td>
                                    <ProgressBar now={70} variant="success" />
                                  </td>
                                  <td>May 27,2018</td>
                                  <td>
                                    <Badge bg="success">70%</Badge>
                                  </td>
                                  <td>
                                    <span>
                                      <Link
                                        to="/table-bootstrap-basic"
                                        className="me-4"
                                        title="Edit"
                                      >
                                        <i className="fas fa-pencil-alt color-muted" />{" "}
                                      </Link>
                                      <Link to="/table-bootstrap-basic" title="Close">
                                        <i className="fa fa-close text-danger" />
                                      </Link>
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Milk Powder</td>
                                  <td>
                                    <ProgressBar now={70} variant="dark" />
                                  </td>
                                  <td>May 18,2018</td>
                                  <td>
                                    <Badge bg="" className="badge badge-dark light">70%</Badge>
                                  </td>
                                  <td>
                                    <span>
                                      <Link
                                        to="/table-bootstrap-basic"
                                        className="me-4"
                                        title="Edit"
                                      >
                                        <i className="fas fa-pencil-alt color-muted" />{" "}
                                      </Link>
                                      <Link to="/table-bootstrap-basic" title="Close">
                                        <i className="fa fa-close text-danger" />
                                      </Link>
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Vehicles</td>
                                  <td>
                                    <ProgressBar now={70} variant="danger" />
                                  </td>
                                  <td>Mar 27,2018</td>
                                  <td>
                                    <Badge bg="danger">70%</Badge>
                                  </td>
                                  <td>
                                    <span>
                                      <Link
                                        to="/table-bootstrap-basic"
                                        className="me-4"
                                        title="Edit"
                                      >
                                        <i className="fas fa-pencil-alt color-muted" />{" "}
                                      </Link>
                                      <Link to="/table-bootstrap-basic" title="Close">
                                        <i className="fa fa-close text-danger" />
                                      </Link>
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Boats</td>
                                  <td>
                                    <ProgressBar now={70} variant="warning" />
                                  </td>
                                  <td>Jun 28,2018</td>
                                  <td>
                                    <Badge bg="warning">70%</Badge>
                                  </td>
                                  <td>
                                    <span>
                                      <Link
                                        to="/table-bootstrap-basic"
                                        className="me-4"
                                        title="Edit"
                                      >
                                        <i className="fas fa-pencil-alt color-muted" />{" "}
                                      </Link>
                                      <Link to="/table-bootstrap-basic" title="Close">
                                        <i className="fa fa-close text-danger" />
                                      </Link>
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            </Table>
                          </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0"><code className="language-html">
                              <Highlight>
                                {`
  <Table responsive bordered className="verticle-middle">
    <thead>
      <tr>
        <th scope="col">Task</th>
        <th scope="col">Progress</th>
        <th scope="col">Deadline</th>
        <th scope="col">Label</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Air Conditioner</td>
        <td>
          <ProgressBar now={70} variant="primary" />
        </td>
        <td>Apr 20,2018</td>
        <td>
          <Badge bg="" className="badge-primary light">70%</Badge>
        </td>
        <td>
          <span>
            <Link
              to="/table-bootstrap-basic"
              className="me-4"
              title="Edit"
            >
              <i className="fas fa-pencil-alt color-muted" />{" "}
            </Link>
            <Link to="/table-bootstrap-basic" title="Close">
              <i className="fa fa-close text-danger" />
            </Link>
          </span>
        </td>
      </tr>
      <tr>
        <td>Textiles</td>
        <td>
          <ProgressBar now={70} variant="success" />
        </td>
        <td>May 27,2018</td>
        <td>
          <Badge bg="success">70%</Badge>
        </td>
        <td>
          <span>
            <Link
              to="/table-bootstrap-basic"
              className="me-4"
              title="Edit"
            >
              <i className="fas fa-pencil-alt color-muted" />{" "}
            </Link>
            <Link to="/table-bootstrap-basic" title="Close">
              <i className="fa fa-close text-danger" />
            </Link>
          </span>
        </td>
      </tr>
      <tr>
        <td>Milk Powder</td>
        <td>
          <ProgressBar now={70} variant="dark" />
        </td>
        <td>May 18,2018</td>
        <td>
          <Badge bg="" className="badge badge-dark light">70%</Badge> 
        </td>
        <td>
          <span>
            <Link
              to="/table-bootstrap-basic"
              className="me-4"
              title="Edit"
            >
              <i className="fas fa-pencil-alt color-muted" />{" "}
            </Link>
            <Link to="/table-bootstrap-basic" title="Close">
              <i className="fa fa-close text-danger" />
            </Link>
          </span>
        </td>
      </tr>
      <tr>
        <td>Vehicles</td>
        <td>
          <ProgressBar now={70} variant="danger" />
        </td>
        <td>Mar 27,2018</td>
        <td>
          <Badge bg="danger">70%</Badge>
        </td>
        <td>
          <span>
            <Link
              to="/table-bootstrap-basic"
              className="me-4"
              title="Edit"
            >
              <i className="fas fa-pencil-alt color-muted" />{" "}
            </Link>
            <Link to="/table-bootstrap-basic" title="Close">
              <i className="fa fa-close text-danger" />
            </Link>
          </span>
        </td>
      </tr>
      <tr>
        <td>Boats</td>
        <td>
          <ProgressBar now={70} variant="warning" />
        </td>
        <td>Jun 28,2018</td>
        <td>
          <Badge bg="warning">70%</Badge>
        </td>
        <td>
          <span>
            <Link
              to="/table-bootstrap-basic"
              className="me-4"
              title="Edit"
            >
              <i className="fas fa-pencil-alt color-muted" />{" "}
            </Link>
            <Link to="/table-bootstrap-basic" title="Close">
              <i className="fa fa-close text-danger" />
            </Link>
          </span>
        </td>
      </tr>
    </tbody>
  </Table>
    `}
                              </Highlight>
                            </code></pre>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </Card>
                </Col>
                <Col xl={12}>
                  <Card className="dz-card" name="bootstrap-table9">
                    <Tab.Container defaultActiveKey="Preview">
                      <Card.Header className="card-header flex-wrap border-0">
                        <div>
                          <Card.Title> Bordered Table</Card.Title>
                          <Card.Text className="m-0 subtitle"> Add <code>bordered table</code> class with <code>bootsrap-table</code></Card.Text>
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
                            <Table responsive bordered className="verticle-middle">
                              <thead>
                                <tr>
                                  <th scope="col">Task</th>
                                  <th scope="col">Progress</th>
                                  <th scope="col">Deadline</th>
                                  <th scope="col">Label</th>
                                  <th scope="col">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Air Conditioner</td>
                                  <td>
                                    <ProgressBar now={70} variant="primary" />
                                  </td>
                                  <td>Apr 20,2018</td>
                                  <td>
                                    <Badge bg="" className="badge-primary light">70%</Badge>
                                  </td>
                                  <td>
                                    <span>
                                      <Link
                                        to="/table-bootstrap-basic"
                                        className="me-4"
                                        title="Edit"
                                      >
                                        <i className="fas fa-pencil-alt color-muted" />{" "}
                                      </Link>
                                      <Link to="/table-bootstrap-basic" title="Close">
                                        <i className="fa fa-close text-danger" />
                                      </Link>
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Textiles</td>
                                  <td>
                                    <ProgressBar now={70} variant="success" />
                                  </td>
                                  <td>May 27,2018</td>
                                  <td>
                                    <Badge bg="success">70%</Badge>
                                  </td>
                                  <td>
                                    <span>
                                      <Link
                                        to="/table-bootstrap-basic"
                                        className="me-4"
                                        title="Edit"
                                      >
                                        <i className="fas fa-pencil-alt color-muted" />{" "}
                                      </Link>
                                      <Link to="/table-bootstrap-basic" title="Close">
                                        <i className="fa fa-close text-danger" />
                                      </Link>
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Milk Powder</td>
                                  <td>
                                    <ProgressBar now={70} variant="dark" />
                                  </td>
                                  <td>May 18,2018</td>
                                  <td>
                                    <Badge bg="" className="badge badge-dark light">70%</Badge>
                                  </td>
                                  <td>
                                    <span>
                                      <Link
                                        to="/table-bootstrap-basic"
                                        className="me-4"
                                        title="Edit"
                                      >
                                        <i className="fas fa-pencil-alt color-muted" />{" "}
                                      </Link>
                                      <Link to="/table-bootstrap-basic" title="Close">
                                        <i className="fa fa-close text-danger" />
                                      </Link>
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Vehicles</td>
                                  <td>
                                    <ProgressBar now={70} variant="danger" />
                                  </td>
                                  <td>Mar 27,2018</td>
                                  <td>
                                    <Badge bg="danger">70%</Badge>
                                  </td>
                                  <td>
                                    <span>
                                      <Link
                                        to="/table-bootstrap-basic"
                                        className="me-4"
                                        title="Edit"
                                      >
                                        <i className="fas fa-pencil-alt color-muted" />{" "}
                                      </Link>
                                      <Link to="/table-bootstrap-basic" title="Close">
                                        <i className="fa fa-close text-danger" />
                                      </Link>
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Boats</td>
                                  <td>
                                    <ProgressBar now={70} variant="warning" />
                                  </td>
                                  <td>Jun 28,2018</td>
                                  <td>
                                    <Badge bg="warning">70%</Badge>
                                  </td>
                                  <td>
                                    <span>
                                      <Link
                                        to="/table-bootstrap-basic"
                                        className="me-4"
                                        title="Edit"
                                      >
                                        <i className="fas fa-pencil-alt color-muted" />{" "}
                                      </Link>
                                      <Link to="/table-bootstrap-basic" title="Close">
                                        <i className="fa fa-close text-danger" />
                                      </Link>
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            </Table>
                          </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0"><code className="language-html">
                              <Highlight>
                                {`
  <Table responsive bordered className="verticle-middle">
    <thead>
      <tr>
        <th scope="col">Task</th>
        <th scope="col">Progress</th>
        <th scope="col">Deadline</th>
        <th scope="col">Label</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Air Conditioner</td>
        <td>
          <ProgressBar now={70} variant="primary" />
        </td>
        <td>Apr 20,2018</td>
        <td>
          <Badge bg="" className="badge-primary light">70%</Badge>
        </td>
        <td>
          <span>
            <Link
              to="/table-bootstrap-basic"
              className="me-4"
              title="Edit"
            >
              <i className="fas fa-pencil-alt color-muted" />{" "}
            </Link>
            <Link to="/table-bootstrap-basic" title="Close">
              <i className="fa fa-close text-danger" />
            </Link>
          </span>
        </td>
      </tr>
      <tr>
        <td>Textiles</td>
        <td>
          <ProgressBar now={70} variant="success" />
        </td>
        <td>May 27,2018</td>
        <td>
          <Badge bg="success">70%</Badge>
        </td>
        <td>
          <span>
            <Link
              to="/table-bootstrap-basic"
              className="me-4"
              title="Edit"
            >
              <i className="fas fa-pencil-alt color-muted" />{" "}
            </Link>
            <Link to="/table-bootstrap-basic" title="Close">
              <i className="fa fa-close text-danger" />
            </Link>
          </span>
        </td>
      </tr>
      <tr>
        <td>Milk Powder</td>
        <td>
          <ProgressBar now={70} variant="dark" />
        </td>
        <td>May 18,2018</td>
        <td>
          <Badge bg="" className="badge badge-dark light">70%</Badge> 
        </td>
        <td>
          <span>
            <Link
              to="/table-bootstrap-basic"
              className="me-4"
              title="Edit"
            >
              <i className="fas fa-pencil-alt color-muted" />{" "}
            </Link>
            <Link to="/table-bootstrap-basic" title="Close">
              <i className="fa fa-close text-danger" />
            </Link>
          </span>
        </td>
      </tr>
      <tr>
        <td>Vehicles</td>
        <td>
          <ProgressBar now={70} variant="danger" />
        </td>
        <td>Mar 27,2018</td>
        <td>
          <Badge bg="danger">70%</Badge>
        </td>
        <td>
          <span>
            <Link
              to="/table-bootstrap-basic"
              className="me-4"
              title="Edit"
            >
              <i className="fas fa-pencil-alt color-muted" />{" "}
            </Link>
            <Link to="/table-bootstrap-basic" title="Close">
              <i className="fa fa-close text-danger" />
            </Link>
          </span>
        </td>
      </tr>
      <tr>
        <td>Boats</td>
        <td>
          <ProgressBar now={70} variant="warning" />
        </td>
        <td>Jun 28,2018</td>
        <td>
          <Badge bg="warning">70%</Badge>
        </td>
        <td>
          <span>
            <Link
              to="/table-bootstrap-basic"
              className="me-4"
              title="Edit"
            >
              <i className="fas fa-pencil-alt color-muted" />{" "}
            </Link>
            <Link to="/table-bootstrap-basic" title="Close">
              <i className="fa fa-close text-danger" />
            </Link>
          </span>
        </td>
      </tr>
    </tbody>
  </Table>
    `}
                              </Highlight>
                            </code></pre>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </Card>
                </Col>
                <Col xl={12}>
                  <Card className="dz-card" name="bootstrap-table10">
                    <Tab.Container defaultActiveKey="Preview">
                      <Card.Header className="card-header flex-wrap border-0">
                        <div>
                          <Card.Title>Table Stripped </Card.Title>
                          <Card.Text className="m-0 subtitle"> Add class <code>table stripeed</code> with <code>bootsrap-table</code></Card.Text>
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
                            <Table responsive striped bordered className="verticle-middle">
                              <thead>
                                <tr>
                                  <th scope="col">Task</th>
                                  <th scope="col">Progress</th>
                                  <th scope="col">Deadline</th>
                                  <th scope="col">Label</th>
                                  <th scope="col">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Air Conditioner</td>
                                  <td>
                                    <ProgressBar now={70} variant="primary" />
                                  </td>
                                  <td>Apr 20,2018</td>
                                  <td>
                                    <Badge bg="primary light">70%</Badge>
                                  </td>
                                  <td>
                                    <span>
                                      <Link
                                        to="/table-bootstrap-basic"
                                        className="me-4"
                                        title="Edit"
                                      >
                                        <i className="fas fa-pencil-alt color-muted" />{" "}
                                      </Link>
                                      <Link to="/table-bootstrap-basic" title="Close">
                                        <i className="fa fa-close text-danger" />
                                      </Link>
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Textiles</td>
                                  <td>
                                    <ProgressBar now={70} variant="success" />
                                  </td>
                                  <td>May 27,2018</td>
                                  <td>
                                    <Badge bg="success">70%</Badge>
                                  </td>
                                  <td>
                                    <span>
                                      <Link
                                        to="/table-bootstrap-basic"
                                        className="me-4"
                                        title="Edit"
                                      >
                                        <i className="fas fa-pencil-alt color-muted" />{" "}
                                      </Link>
                                      <Link to="/table-bootstrap-basic" title="Close">
                                        <i className="fa fa-close text-danger" />
                                      </Link>
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Milk Powder</td>
                                  <td>
                                    <ProgressBar now={70} variant="dark" />
                                  </td>
                                  <td>May 18,2018</td>
                                  <td>
                                    <Badge bg="dark light">70%</Badge>
                                  </td>
                                  <td>
                                    <span>
                                      <Link
                                        to="/table-bootstrap-basic"
                                        className="me-4"
                                        title="Edit"
                                      >
                                        <i className="fas fa-pencil-alt color-muted" />{" "}
                                      </Link>
                                      <Link to="/table-bootstrap-basic" title="Close">
                                        <i className="fa fa-close text-danger" />
                                      </Link>
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Vehicles</td>
                                  <td>
                                    <ProgressBar now={70} variant="danger" />
                                  </td>
                                  <td>Mar 27,2018</td>
                                  <td>
                                    <Badge bg="danger">70%</Badge>
                                  </td>
                                  <td>
                                    <span>
                                      <Link
                                        to="/table-bootstrap-basic"
                                        className="me-4"
                                        title="Edit"
                                      >
                                        <i className="fas fa-pencil-alt color-muted" />{" "}
                                      </Link>
                                      <Link to="/table-bootstrap-basic" title="Close">
                                        <i className="fa fa-close text-danger" />
                                      </Link>
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Boats</td>
                                  <td>
                                    <ProgressBar now={70} variant="warning" />
                                  </td>
                                  <td>Jun 28,2018</td>
                                  <td>
                                    <Badge bg="warning">70%</Badge>
                                  </td>
                                  <td>
                                    <span>
                                      <Link
                                        to="/table-bootstrap-basic"
                                        className="me-4"
                                        title="Edit"
                                      >
                                        <i className="fas fa-pencil-alt color-muted" />{" "}
                                      </Link>
                                      <Link to="/table-bootstrap-basic" title="Close">
                                        <i className="fa fa-close text-danger" />
                                      </Link>
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            </Table>
                          </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0"><code className="language-html">
                              <Highlight>
                                {`
  <Table responsive striped bordered className="verticle-middle">
    <thead>
      <tr>
        <th scope="col">Task</th>
        <th scope="col">Progress</th>
        <th scope="col">Deadline</th>
        <th scope="col">Label</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Air Conditioner</td>
        <td>
          <ProgressBar now={70} variant="primary" />
        </td>
        <td>Apr 20,2018</td>
        <td>
          <Badge bg="primary light">70%</Badge>
        </td>
        <td>
          <span>
            <Link
              to="/table-bootstrap-basic"
              className="me-4"
              title="Edit"
            >
              <i className="fas fa-pencil-alt color-muted" />{" "}
            </Link>
            <Link to="/table-bootstrap-basic" title="Close">
              <i className="fa fa-close text-danger" />
            </Link>
          </span>
        </td>
      </tr>
      <tr>
        <td>Textiles</td>
        <td>
          <ProgressBar now={70} variant="success" />
        </td>
        <td>May 27,2018</td>
        <td>
          <Badge bg="success">70%</Badge>
        </td>
        <td>
          <span>
            <Link
              to="/table-bootstrap-basic"
              className="me-4"
              title="Edit"
            >
              <i className="fas fa-pencil-alt color-muted" />{" "}
            </Link>
            <Link to="/table-bootstrap-basic" title="Close">
              <i className="fa fa-close text-danger" />
            </Link>
          </span>
        </td>
      </tr>
      <tr>
        <td>Milk Powder</td>
        <td>
          <ProgressBar now={70} variant="dark" />
        </td>
        <td>May 18,2018</td>
        <td>
          <Badge bg="dark light">70%</Badge>
        </td>
        <td>
          <span>
            <Link
              to="/table-bootstrap-basic"
              className="me-4"
              title="Edit"
            >
              <i className="fas fa-pencil-alt color-muted" />{" "}
            </Link>
            <Link to="/table-bootstrap-basic" title="Close">
              <i className="fa fa-close text-danger" />
            </Link>
          </span>
        </td>
      </tr>
      <tr>
        <td>Vehicles</td>
        <td>
          <ProgressBar now={70} variant="danger" />
        </td>
        <td>Mar 27,2018</td>
        <td>
          <Badge bg="danger">70%</Badge>
        </td>
        <td>
          <span>
            <Link
              to="/table-bootstrap-basic"
              className="me-4"
              title="Edit"
            >
              <i className="fas fa-pencil-alt color-muted" />{" "}
            </Link>
            <Link to="/table-bootstrap-basic" title="Close">
              <i className="fa fa-close text-danger" />
            </Link>
          </span>
        </td>
      </tr>
      <tr>
        <td>Boats</td>
        <td>
          <ProgressBar now={70} variant="warning" />
        </td>
        <td>Jun 28,2018</td>
        <td>
          <Badge bg="warning">70%</Badge>
        </td>
        <td>
          <span>
            <Link
              to="/table-bootstrap-basic"
              className="me-4"
              title="Edit"
            >
              <i className="fas fa-pencil-alt color-muted" />{" "}
            </Link>
            <Link to="/table-bootstrap-basic" title="Close">
              <i className="fa fa-close text-danger" />
            </Link>
          </span>
        </td>
      </tr>
    </tbody>
  </Table>
    `}
                              </Highlight>
                            </code></pre>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </Card>
                </Col>
                <Col xl={12}>
                  <Card className="dz-card" name="bootstrap-table11">
                    <Tab.Container defaultActiveKey="Preview">
                      <Card.Header className="card-header flex-wrap border-0">
                        <div>
                          <Card.Title> Responsive Table</Card.Title>
                          <Card.Text className="m-0 subtitle">Add class <code>responsive table</code> with <code>bootstrap-table</code> </Card.Text>
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
                            <Table responsive className="header-border ">
                              <thead>
                                <tr>
                                  <th>Invoice</th>
                                  <th>User</th>
                                  <th>Date</th>
                                  <th>Amount</th>
                                  <th>Status</th>
                                  <th>Country</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <Link to="/table-bootstrap-basic">Order #26589</Link>
                                  </td>
                                  <td>Herman Beck</td>
                                  <td>
                                    <span className="text-muted">Oct 16, 2017</span>
                                  </td>
                                  <td>$45.00</td>
                                  <td>
                                    <Badge bg="success">Paid</Badge>
                                  </td>
                                  <td>EN</td>
                                </tr>
                                <tr>
                                  <td>
                                    <Link to="/table-bootstrap-basic">Order #58746</Link>
                                  </td>
                                  <td>Mary Adams</td>
                                  <td>
                                    <span className="text-muted">Oct 12, 2017</span>
                                  </td>
                                  <td>$245.30</td>
                                  <td>
                                    <Badge bg="" className="badge badge-info light">Shipped</Badge>
                                  </td>
                                  <td>CN</td>
                                </tr>
                                <tr>
                                  <td>
                                    <Link to="/table-bootstrap-basic">Order #98458</Link>
                                  </td>
                                  <td>Caleb Richards</td>
                                  <td>
                                    <span className="text-muted">May 18, 2017</span>
                                  </td>
                                  <td>$38.00</td>
                                  <td>
                                    <Badge bg="danger">Shipped</Badge>
                                  </td>
                                  <td>AU</td>
                                </tr>
                                <tr>
                                  <td>
                                    <Link to="/table-bootstrap-basic">Order #32658</Link>
                                  </td>
                                  <td>June Lane</td>
                                  <td>
                                    <span className="text-muted">Apr 28, 2017</span>
                                  </td>
                                  <td>$77.99</td>
                                  <td>
                                    <Badge bg="success">Paid</Badge>
                                  </td>
                                  <td>FR</td>
                                </tr>
                              </tbody>
                            </Table>
                          </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0"><code className="language-html">
                              <Highlight>
                                {`
  <Table responsive className="header-border ">
    <thead>
      <tr>
        <th>Invoice</th>
        <th>User</th>
        <th>Date</th>
        <th>Amount</th>
        <th>Status</th>
        <th>Country</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <Link to="/table-bootstrap-basic">Order #26589</Link>
        </td>
        <td>Herman Beck</td>
        <td>
          <span className="text-muted">Oct 16, 2017</span>
        </td>
        <td>$45.00</td>
        <td>
          <Badge bg="success">Paid</Badge>
        </td>
        <td>EN</td>
      </tr>
      <tr>
        <td>
          <Link to="/table-bootstrap-basic">Order #58746</Link>
        </td>
        <td>Mary Adams</td>
        <td>
          <span className="text-muted">Oct 12, 2017</span>
        </td>
        <td>$245.30</td>
        <td>
          <Badge bg="" className="badge badge-info light">Shipped</Badge>
        </td>
        <td>CN</td>
      </tr>
      <tr>
        <td>
          <Link to="/table-bootstrap-basic">Order #98458</Link>
        </td>
        <td>Caleb Richards</td>
        <td>
          <span className="text-muted">May 18, 2017</span>
        </td>
        <td>$38.00</td>
        <td>
          <Badge bg="danger">Shipped</Badge>
        </td>
        <td>AU</td>
      </tr>
      <tr>
        <td>
          <Link to="/table-bootstrap-basic">Order #32658</Link>
        </td>
        <td>June Lane</td>
        <td>
          <span className="text-muted">Apr 28, 2017</span>
        </td>
        <td>$77.99</td>
        <td>
          <Badge bg="success">Paid</Badge>
        </td>
        <td>FR</td>
      </tr>
    </tbody>
  </Table>
    `}
                              </Highlight>
                            </code></pre>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </Card>
                </Col>
                <Col xl={12}>
                  <Card className="dz-card" name="bootstrap-table12">
                    <Tab.Container defaultActiveKey="Preview">
                      <Card.Header className="card-header flex-wrap d-flex justify-content-between  border-0">
                        <div>
                          <Card.Title> Heading With Background</Card.Title>
                          <Card.Text className="m-0 subtitle"> Add <code>heading with background</code> and <code>heading</code> class with <code>bootsrtap-table</code></Card.Text>
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
                            <Table responsive>
                              <thead className="thead-info">
                                <tr>
                                  <th scope="col">#</th>
                                  <th scope="col">First</th>
                                  <th scope="col">Last</th>
                                  <th scope="col">Handle</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th>1</th>
                                  <td>Mark</td>
                                  <td>Otto</td>
                                  <td>@mdo</td>
                                </tr>
                                <tr>
                                  <th>2</th>
                                  <td>Jacob</td>
                                  <td>Thornton</td>
                                  <td>@fat</td>
                                </tr>
                                <tr>
                                  <th>3</th>
                                  <td>Larry</td>
                                  <td>the Bird</td>
                                  <td>@twitter</td>
                                </tr>
                              </tbody>
                            </Table>
                          </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0"><code className="language-html">
                              <Highlight>
                                {`
  <Table responsive>
    <thead className="thead-info">
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th>2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th>3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </Table>
    `}
                              </Highlight>
                            </code></pre>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </Card>
                </Col>
                <Col xl={12}>
                  <Card className="dz-card" name="bootstrap-table13">
                    <Tab.Container defaultActiveKey="Preview">
                      <Card.Header className="card-header flex-wrap d-flex justify-content-between  border-0">
                        <div>
                          <Card.Title>Primary Table </Card.Title>
                          <Card.Text className="m-0 subtitle"> Add <code>primary table</code> class with <code>bootsrap-table</code></Card.Text>
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
                            <Table responsive className="primary-table-bordered">
                              <thead className="thead-primary">
                                <tr>
                                  <th scope="col">#</th>
                                  <th scope="col">First</th>
                                  <th scope="col">Last</th>
                                  <th scope="col">Handle</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th>1</th>
                                  <td>Mark</td>
                                  <td>Otto</td>
                                  <td>@mdo</td>
                                </tr>
                                <tr>
                                  <th>2</th>
                                  <td>Jacob</td>
                                  <td>Thornton</td>
                                  <td>@fat</td>
                                </tr>
                                <tr>
                                  <th>3</th>
                                  <td>Larry</td>
                                  <td>the Bird</td>
                                  <td>@twitter</td>
                                </tr>
                              </tbody>
                            </Table>
                          </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0"><code className="language-html">
                              <Highlight>
                                {`
  <Table responsive className="primary-table-bordered">
      <thead className="thead-primary">
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th>2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th>3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    `}
                              </Highlight>
                            </code></pre>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </Card>
                </Col>
                <Col xl={12}>
                  <Card className="dz-card" name="bootstrap-table14">
                    <Tab.Container defaultActiveKey="Preview">
                      <Card.Header className="card-header flex-wrap d-flex justify-content-between  border-0">
                        <div>
                          <Card.Title>Primary Table Hover </Card.Title>
                          <Card.Text className="m-0 subtitle"> Add <code>primary table hover</code> class with <code>bootsrap-table</code></Card.Text>
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
                            <Table responsive className="primary-table-bg-hover">
                              <thead>
                                <tr>
                                  <th scope="col">#</th>
                                  <th scope="col">First</th>
                                  <th scope="col">Last</th>
                                  <th scope="col">Handle</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th>1</th>
                                  <td>Mark</td>
                                  <td>Otto</td>
                                  <td>@mdo</td>
                                </tr>
                                <tr>
                                  <th>2</th>
                                  <td>Jacob</td>
                                  <td>Thornton</td>
                                  <td>@fat</td>
                                </tr>
                                <tr>
                                  <th>3</th>
                                  <td>Larry</td>
                                  <td>the Bird</td>
                                  <td>@twitter</td>
                                </tr>
                                <tr>
                                  <th>4</th>
                                  <td>Larry</td>
                                  <td>the Bird</td>
                                  <td>@twitter</td>
                                </tr>
                                <tr>
                                  <th>5</th>
                                  <td>Larry</td>
                                  <td>the Bird</td>
                                  <td>@twitter</td>
                                </tr>
                                <tr>
                                  <th>5</th>
                                  <td>Larry</td>
                                  <td>the Bird</td>
                                  <td>@twitter</td>
                                </tr>
                              </tbody>
                            </Table>
                          </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0"><code className="language-html">
                              <Highlight>
                                {`
  <Table responsive className="primary-table-bg-hover">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th>2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th>3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>
      <tr>
        <th>4</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>
      <tr>
        <th>5</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>
      <tr>
        <th>5</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </Table>
    `}
                              </Highlight>
                            </code></pre>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </Card>
                </Col>
                <Col xl={12}>
                  <Card className="dz-card" name="bootstrap-table15">
                    <Tab.Container defaultActiveKey="Preview">
                      <Card.Header className="card-header flex-wrap d-flex justify-content-between  border-0">
                        <div>
                          <Card.Title>Contextual Table </Card.Title>
                          <Card.Text className="m-0 subtitle"> Add <code>contextual table</code> class with <code>bootsrap-table</code></Card.Text>
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
                            <Table responsive className="header-border">
                              <thead>
                                <tr>
                                  <th>#</th>
                                  <th>Column heading</th>
                                  <th>Column heading</th>
                                  <th>Column heading</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="table-active">
                                  <td>1</td>
                                  <td>Column content</td>
                                  <td>Column content</td>
                                  <td>Column content</td>
                                </tr>
                                <tr className="table-primary">
                                  <td>1</td>
                                  <td>Column content</td>
                                  <td>Column content</td>
                                  <td>Column content</td>
                                </tr>
                                <tr className="table-success">
                                  <td>2</td>
                                  <td>Column content</td>
                                  <td>Column content</td>
                                  <td>Column content</td>
                                </tr>
                                <tr className="table-info">
                                  <td>3</td>
                                  <td>Column content</td>
                                  <td>Column content</td>
                                  <td>Column content</td>
                                </tr>
                                <tr className="table-warning">
                                  <td>4</td>
                                  <td>Column content</td>
                                  <td>Column content</td>
                                  <td>Column content</td>
                                </tr>
                                <tr className="table-danger">
                                  <td>5</td>
                                  <td>Column content</td>
                                  <td>Column content</td>
                                  <td>Column content</td>
                                </tr>
                              </tbody>
                            </Table>
                          </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0"><code className="language-html">
                              <Highlight>
                                {`
  <Table responsive className="header-border">
    <thead>
      <tr>
        <th>#</th>
        <th>Column heading</th>
        <th>Column heading</th>
        <th>Column heading</th>
      </tr>
    </thead>
    <tbody>
      <tr className="table-active">
        <td>1</td>
        <td>Column content</td>
        <td>Column content</td>
        <td>Column content</td>
      </tr>
      <tr className="table-primary">
        <td>1</td>
        <td>Column content</td>
        <td>Column content</td>
        <td>Column content</td>
      </tr>
      <tr className="table-success">
        <td>2</td>
        <td>Column content</td>
        <td>Column content</td>
        <td>Column content</td>
      </tr>
      <tr className="table-info">
        <td>3</td>
        <td>Column content</td>
        <td>Column content</td>
        <td>Column content</td>
      </tr>
      <tr className="table-warning">
        <td>4</td>
        <td>Column content</td>
        <td>Column content</td>
        <td>Column content</td>
      </tr>
      <tr className="table-danger">
        <td>5</td>
        <td>Column content</td>
        <td>Column content</td>
        <td>Column content</td>
      </tr>
    </tbody>
  </Table>
    `}
                              </Highlight>
                            </code></pre>
                          </div>
                        </Tab.Pane>
                      </Tab.Content> 
                    </Tab.Container>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </div>

      </div>
    </Fragment>
  );
};

export default BootstrapTable;
