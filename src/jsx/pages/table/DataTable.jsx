import { Fragment, useState } from "react";
import PageTitle from "../../layouts/PageTitle";
import BasicDatatable from "./BasicDatatable";
import SimpleDataTable from "./SimpleDataTable";
import ProfileDatatable from "./ProfileDatatable";
import FeesCollection from "./FeesCollection";
import PatientTable from "./PatientTable";
import { Link } from "react-scroll";
import Highlight from "react-highlight";
import { Col, Card, Tab, Nav, } from "react-bootstrap";

const sidebarLink = [
  { to: 'table1', title: 'Basic Datatable' },
  { to: 'table2', title: 'Datatable' },
  { to: 'table3', title: 'Profile Datatable' },
  { to: 'table4', title: 'Fees Collection' },
  { to: 'table5', title: 'Patient' },
];
const DataTable = () => {
  const [activeLink, setActiveLink] = useState(0);
  return (
    <Fragment>
      <PageTitle activeMenu="Basic DataTable" motherMenu="Home" pageContent="Basic DataTable" />
      <div className="container">
        <div className="element-wrapper">
          <div className="element-right">
            <div className="p-4 border-bottom">
              <h2>Datatabls Table.</h2>
              <p>Make use of Datatabls's unique Datatabls styles to enhance actions in forms, dialogs, and various other elements, featuring comprehensive support.</p>
              <Link to={"#"} className="btn btn-primary">Datatabls</Link>
            </div>  
            <div className="demo-right-inner" id="right-sidebar">
              <h4 className="title">Datatabls</h4>
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
              <div className="row">
                <Col xl={12}>
                  <Card className="dz-card" name="table1">
                    <Tab.Container defaultActiveKey="Preview">
                      <Card.Header className="card-header flex-wrap border-0">
                        <div>
                          <Card.Title>Basic Datatable</Card.Title>
                          <Card.Text className="m-0 subtitle"> Default datatables. Add <code>datatables</code> class in root</Card.Text>
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
                            <BasicDatatable />
                          </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0"><code className="language-html">
                              <Highlight>
                                {`
<table
  className="display w-100 dataTable "
  id="example5"
  role="grid"
  aria-describedby="example5_info"
>
  <thead>
    <tr role="row">
      <th className="sorting_asc" style={{ width: "177px" }}>
        Name
      </th>
      <th className="sorting" style={{ width: "278px" }}>
        Position
      </th>
      <th className="sorting" style={{ width: "128px" }}>
        Office
      </th>
      <th className="sorting" style={{ width: "46px" }}>
        Age
      </th>
      <th className="sorting" style={{ width: "114px" }}>
        Start date
      </th>
      <th className="sorting" style={{ width: "110px" }}>
        Salary
      </th>
    </tr>
  </thead>

  <tbody>
    <tr className="odd" role="row">
      <td className="sorting_1">Airi Satou</td>
      <td>Accountant</td>
      <td>Tokyo</td>
      <td>33</td>
      <td>2008/11/28</td>
      <td>$162,700</td>
    </tr>
    <tr className="even" role="row">
      <td className="sorting_1">Angelica Ramos</td>
      <td>Chief Executive Officer (CEO)</td>
      <td>London</td>
      <td>47</td>
      <td>2009/10/09</td>
      <td>$1,200,000</td>
    </tr>
    <tr className="odd" role="row">
      <td className="sorting_1">Ashton Cox</td>
      <td>Junior Technical Author</td>
      <td>San Francisco</td>
      <td>66</td>
      <td>2009/01/12</td>
      <td>$86,000</td>
    </tr>
    <tr className="even" role="row">
      <td className="sorting_1">Bradley Greer</td>
      <td>Software Engineer</td>
      <td>London</td>
      <td>41</td>
      <td>2012/10/13</td>
      <td>$132,000</td>
    </tr>
    <tr className="odd" role="row">
      <td className="sorting_1">Brenden Wagner</td>
      <td>Software Engineer</td>
      <td>San Francisco</td>
      <td>28</td>
      <td>2011/06/07</td>
      <td>$206,850</td>
    </tr>
    <tr className="even" role="row">
      <td className="sorting_1">Brielle Williamson</td>
      <td>Integration Specialist</td>
      <td>New York</td>
      <td>61</td>
      <td>2012/12/02</td>
      <td>$372,000</td>
    </tr>
    <tr className="odd" role="row">
      <td className="sorting_1">Bruno Nash</td>
      <td>Software Engineer</td>
      <td>London</td>
      <td>38</td>
      <td>2011/05/03</td>
      <td>$163,500</td>
    </tr>
    <tr className="even" role="row">
      <td className="sorting_1">Caesar Vance</td>
      <td>Pre-Sales Support</td>
      <td>New York</td>
      <td>21</td>
      <td>2011/12/12</td>
      <td>$106,450</td>
    </tr>
    <tr className="odd" role="row">
      <td className="sorting_1">Cara Stevens</td>
      <td>Sales Assistant</td>
      <td>New York</td>
      <td>46</td>
      <td>2011/12/06</td>
      <td>$145,600</td>
    </tr>
    <tr className="even" role="row">
      <td className="sorting_1">Cedric Kelly</td>
      <td>Senior Javascript Developer</td>
      <td>Edinburgh</td>
      <td>22</td>
      <td>2012/03/29</td>
      <td>$433,060</td>
    </tr>
  </tbody> 
</table> 
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
                  <Card className="dz-card" name="table2">
                    <Tab.Container defaultActiveKey="Preview">
                      <Card.Header className="card-header flex-wrap d-flex justify-content-between border-0">
                        <div>
                          <Card.Title>Datatable</Card.Title>
                          <Card.Text className="m-0 subtitle">datatables with border. Add class <code>datatables-bordered</code> with the class <code> datatables</code></Card.Text>
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
                            <SimpleDataTable />
                          </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0"><code className="language-html">
                              <Highlight>
                                {` 
<Table responsive className="w-100">
  <div id="example_wrapper" className="dataTables_wrapper">
    <table
      id="example"
      className="display w-100 dataTable"
      role="grid"
      aria-describedby="example_info"
    >
      <thead>
        {data.jobsTable.columns.map((d, i) => (
         <th key={i}>{d}</th>
        ))}
      </thead>
    <tbody>
      {data.jobsTable.data.map((d, i) => (
        <tr key={i}>
        {d.map((da, i) => (
          <td key={i}>{da}</td>
      ))}
      </tr>
      ))}
    </tbody> 
    </table>
  </div>
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
                  <Card className="dz-card" name="table3">
                    <Tab.Container defaultActiveKey="Preview">
                      <Card.Header className="card-header flex-wrap d-flex justify-content-between border-0">
                        <div>
                          <Card.Title>Profile Datatable</Card.Title>
                          <Card.Text className="m-0 subtitle"> Add <code>profile</code> class with <code>datatables</code></Card.Text>
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
                            <ProfileDatatable />
                          </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0"><code className="language-html">
                              <Highlight>
                                {`
<table id="example" className="display w-100 dataTable">
    <thead>
      <tr role="row">
        {data.profileTable.columns.map((d, i) => (
          <th key={i}>{d}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {jobData.current.map((d, i) => (
        <tr key={i}>
          {d.map((da, i) => (
            <Fragment key={i}>
              <td>
                {i === 0 ? (
                  <img
                    className="rounded-circle"
                    width="35"
                    src={da}
                    alt=""
                  />
                ) : (
                  <Fragment>
                    {da}
                    {i === 8 && (
                      <div className="d-flex">
                        <Link
                          to="#"
                          className="btn btn-primary shadow btn-xs sharp me-1"
                        >
                          <i className="fas fa-pencil-alt" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-danger shadow btn-xs sharp"
                        >
                          <i className="fa fa-trash" />
                        </Link>
                      </div>
                    )}
                  </Fragment>
                )}
              </td>
            </Fragment>
          ))}
        </tr>
      ))}
    </tbody>

  </table>
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
                  <Card className="dz-card" name="table4">
                    <Tab.Container defaultActiveKey="Preview">
                      <Card.Header className="card-header flex-wrap d-flex justify-content-between border-0">
                        <div>
                          <Card.Title>Fees Collection</Card.Title>
                          <Card.Text className="m-0 subtitle">Add <code>fees</code> class with <code>datatables</code></Card.Text>
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
                            <FeesCollection />
                          </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0"><code className="language-html">
                              <Highlight>
                                {`  
<table id="example" className="display w-100 dataTable">
  <thead>
    <tr role="row">
      {data.feeTable.columns.map((d, i) => (
        <th key={i}>{d}</th>
      ))}
    </tr>
  </thead>
  <tbody>
    {jobData.current.map((d, i) => (
      <tr key={i}>
        {d.map((da, ii) => (
          <td key={ii}>
            {da === "Paid" ? (
              <Badge variant="success light">Paid</Badge>
            ) : da === "Unpaid" ? (
              <Badge variant="danger light">Unpaid</Badge>
            ) : da === "Panding" ? (
              <Badge variant="warning light">Panding</Badge>
            ) : (
              da
            )}
          </td>
        ))}
      </tr>
    ))}
  </tbody> 
</table>
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
                  <Card className="dz-card" name="table5">
                    <Tab.Container defaultActiveKey="Preview">
                      <Card.Header className="card-header flex-wrap d-flex justify-content-between border-0">
                        <div>
                          <Card.Title>Patient</Card.Title>
                          <Card.Text className="m-0 subtitle">Add <code>Patient</code> class with <code>datatables</code></Card.Text>
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
                            <PatientTable />
                          </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Code">
                          <div className="card-body pt-0 p-0 code-area">
                            <pre className="mb-0"><code className="language-html">
                              <Highlight>
                                {` 
<table
  id="example5"
  className="display dataTable no-footer w-100"
  style={{ minWidth: 845 }}
  role="grid"
  aria-describedby="example5_info"
>
  <thead>
    <tr role="row">
      <th
        className="sorting_asc"
        tabIndex={0}
        aria-controls="example5"
        rowSpan={1}
        colSpan={1}
        aria-sort="ascending"
        aria-label=": activate to sort column descending"
        style={{ width: 32 }}
      >
        <div className="form-check custom-checkbox">
          <input
            type="checkbox"
            onClick={() => chackboxFun("all")}
            className="form-check-input"
            id="checkAll"
            required
          />
          <label
            className="form-check-label"
            htmlFor="checkAll"
          />
        </div>
      </th>
      <th
        className="sorting"
        tabIndex={0}
        aria-controls="example5"
        rowSpan={1}
        colSpan={1}
        aria-label="Patient ID: activate to sort column ascending"
        style={{ width: 73 }}
      >
        Patient ID
      </th>
      <th
        className="sorting"
        tabIndex={0}
        aria-controls="example5"
        rowSpan={1}
        colSpan={1}
        aria-label="Date Check in: activate to sort column ascending"
        style={{ width: 100 }}
      >
        Date Check in
      </th>
      <th
        className="sorting"
        tabIndex={0}
        aria-controls="example5"
        rowSpan={1}
        colSpan={1}
        aria-label="Patient Name: activate to sort column ascending"
        style={{ width: 100 }}
      >
        Patient Name
      </th>
      <th
        className="sorting"
        tabIndex={0}
        aria-controls="example5"
        rowSpan={1}
        colSpan={1}
        aria-label="Doctor Assgined: activate to sort column ascending"
        style={{ width: 120 }}
      >
        Doctor Assgined
      </th>
      <th
        className="sorting"
        tabIndex={0}
        aria-controls="example5"
        rowSpan={1}
        colSpan={1}
        aria-label="Disease: activate to sort column ascending"
        style={{ width: 62 }}
      >
        Disease
      </th>
      <th
        className="sorting"
        tabIndex={0}
        aria-controls="example5"
        rowSpan={1}
        colSpan={1}
        aria-label="Status: activate to sort column ascending"
        style={{ width: 106 }}
      >
        Status
      </th>
      <th
        className="sorting"
        tabIndex={0}
        aria-controls="example5"
        rowSpan={1}
        colSpan={1}
        aria-label="Room no: activate to sort column ascending"
        style={{ width: 66 }}
      >
        Room no
      </th>
      <th
        className="sorting"
        tabIndex={0}
        aria-controls="example5"
        rowSpan={1}
        colSpan={1}
        aria-label="Action: activate to sort column ascending"
        style={{ width: 47 }}
      >
        Action
      </th>
    </tr>
  </thead>
  <tbody>
    <tr role="row" className="odd">
      <td className="sorting_1">
        <div className="form-check custom-checkbox ">
          <input
            type="checkbox"
            onClick={() => chackboxFun()}
            className="form-check-input"
            id="customCheckBox2"
            required
          />
          <label
            className="form-check-label"
            htmlFor="customCheckBox2"
          />
        </div>
      </td>
      <td>#P-00001</td>
      <td>26/02/2022, 12:42 AM</td>
      <td>Tiger Nixon</td>
      <td>Dr. Cedric</td>
      <td>Cold &amp; Flu</td>
      <td>
        <span className="badge light badge-danger">
          <i className="fa fa-circle text-danger me-1" />
          New Patient
        </span>
      </td>
      <td>AB-001</td>
      <td>
        <Dropdown className="dropdown ms-auto text-right">
          <Dropdown.Toggle
            variant=""
            className="btn-link i-false"
            data-toggle="dropdown"
          >
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              version="1.1"
            >
              <g
                stroke="none"
                strokeWidth={1}
                fill="none"
                fillRule="evenodd"
              >
                <rect x={0} y={0} width={24} height={24} />
                <circle fill="#000000" cx={5} cy={12} r={2} />
                <circle fill="#000000" cx={12} cy={12} r={2} />
                <circle fill="#000000" cx={19} cy={12} r={2} />
              </g>
            </svg>
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
            <Dropdown.Item>Accept Patient</Dropdown.Item>
            <Dropdown.Item>Reject Order</Dropdown.Item>
            <Dropdown.Item>View Details</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </td>
    </tr>
    <tr role="row" className="even">
      <td className="sorting_1">
        <div className="form-check custom-checkbox ">
          <input
            type="checkbox"
            onClick={() => chackboxFun()}
            className="form-check-input"
            id="customCheckBox3"
            required
          />
          <label
            className="form-check-label"
            htmlFor="customCheckBox3"
          />
        </div>
      </td>
      <td>#P-00002</td>
      <td>28/02/2022, 12:42 AM</td>
      <td>Garrett Winters</td>
      <td>Dr. Cedric</td>
      <td>Sleep Problem</td>
      <td>
        <span className="badge light badge-warning">
          <i className="fa fa-circle text-warning me-1" />
          In Treatment
        </span>
      </td>
      <td>AB-002</td>
      <td>
        <Dropdown className="dropdown ms-auto text-right">
          <Dropdown.Toggle
            variant=""
            className="btn-link i-false"
            data-toggle="dropdown"
          >
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              version="1.1"
            >
              <g
                stroke="none"
                strokeWidth={1}
                fill="none"
                fillRule="evenodd"
              >
                <rect x={0} y={0} width={24} height={24} />
                <circle fill="#000000" cx={5} cy={12} r={2} />
                <circle fill="#000000" cx={12} cy={12} r={2} />
                <circle fill="#000000" cx={19} cy={12} r={2} />
              </g>
            </svg>
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
            <Dropdown.Item>Accept Patient</Dropdown.Item>
            <Dropdown.Item>Reject Order</Dropdown.Item>
            <Dropdown.Item>View Details</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </td>
    </tr>
    <tr role="row" className="odd">
      <td className="sorting_1">
        <div className="form-check custom-checkbox ">
          <input
            type="checkbox"
            onClick={() => chackboxFun()}
            className="form-check-input"
            id="customCheckBox4"
            required
          />
          <label
            className="form-check-label"
            htmlFor="customCheckBox4"
          />
        </div>
      </td>
      <td>#P-00003</td>
      <td>26/02/2022, 12:42 AM</td>
      <td>Ashton Cox</td>
      <td>Dr. Rhona</td>
      <td>Cold &amp; Flu</td>
      <td>
        <span className="badge light badge-success">
          <i className="fa fa-circle text-success me-1" />
          Recovered
        </span>
      </td>
      <td>AB-003</td>
      <td>
        <Dropdown className="dropdown ms-auto text-right">
          <Dropdown.Toggle
            variant=""
            className="btn-link i-false"
            data-toggle="dropdown"
          >
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              version="1.1"
            >
              <g
                stroke="none"
                strokeWidth={1}
                fill="none"
                fillRule="evenodd"
              >
                <rect x={0} y={0} width={24} height={24} />
                <circle fill="#000000" cx={5} cy={12} r={2} />
                <circle fill="#000000" cx={12} cy={12} r={2} />
                <circle fill="#000000" cx={19} cy={12} r={2} />
              </g>
            </svg>
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
            <Dropdown.Item>Accept Patient</Dropdown.Item>
            <Dropdown.Item>Reject Order</Dropdown.Item>
            <Dropdown.Item>View Details</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </td>
    </tr>
    <tr role="row" className="even">
      <td className="sorting_1">
        <div className="form-check custom-checkbox ">
          <input
            type="checkbox"
            onClick={() => chackboxFun()}
            className="form-check-input"
            id="customCheckBox5"
            required
          />
          <label
            className="form-check-label"
            htmlFor="customCheckBox5"
          />
        </div>
      </td>
      <td>#P-00004</td>
      <td>29/02/2022, 12:42 AM</td>
      <td>Ashton Cox</td>
      <td>Dr. Cedric</td>
      <td>Cold &amp; Flu</td>
      <td>
        <span className="badge light badge-warning">
          <i className="fa fa-circle text-warning me-1" />
          In Treatment
        </span>
      </td>
      <td>AB-004</td>
      <td>
        <Dropdown className="dropdown ms-auto text-right">
          <Dropdown.Toggle
            variant=""
            className="btn-link i-false"
            data-toggle="dropdown"
          >
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              version="1.1"
            >
              <g
                stroke="none"
                strokeWidth={1}
                fill="none"
                fillRule="evenodd"
              >
                <rect x={0} y={0} width={24} height={24} />
                <circle fill="#000000" cx={5} cy={12} r={2} />
                <circle fill="#000000" cx={12} cy={12} r={2} />
                <circle fill="#000000" cx={19} cy={12} r={2} />
              </g>
            </svg>
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
            <Dropdown.Item>Accept Patient</Dropdown.Item>
            <Dropdown.Item>Reject Order</Dropdown.Item>
            <Dropdown.Item>View Details</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </td>
    </tr>
    <tr role="row" className="odd">
      <td className="sorting_1">
        <div className="form-check custom-checkbox ">
          <input
            type="checkbox"
            onClick={() => chackboxFun()}
            className="form-check-input"
            id="customCheckBox6"
            required
          />
          <label
            className="form-check-label"
            htmlFor="customCheckBox6"
          />
        </div>
      </td>
      <td>#P-00005</td>
      <td>28/02/2022, 12:42 AM</td>
      <td>Ashton Cox</td>
      <td>Dr. Cedric</td>
      <td>Cold &amp; Flu</td>
      <td>
        <span className="badge light badge-warning">
          <i className="fa fa-circle text-warning me-1" />
          In Treatment
        </span>
      </td>
      <td>AB-005</td>
      <td>
        <Dropdown className="dropdown ms-auto text-right">
          <Dropdown.Toggle
            variant=""
            className="btn-link i-false"
            data-toggle="dropdown"
          >
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              version="1.1"
            >
              <g
                stroke="none"
                strokeWidth={1}
                fill="none"
                fillRule="evenodd"
              >
                <rect x={0} y={0} width={24} height={24} />
                <circle fill="#000000" cx={5} cy={12} r={2} />
                <circle fill="#000000" cx={12} cy={12} r={2} />
                <circle fill="#000000" cx={19} cy={12} r={2} />
              </g>
            </svg>
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
            <Dropdown.Item>Accept Patient</Dropdown.Item>
            <Dropdown.Item>Reject Order</Dropdown.Item>
            <Dropdown.Item>View Details</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </td>
    </tr>
    <tr role="row" className="even">
      <td className="sorting_1">
        <div className="form-check custom-checkbox ">
          <input
            type="checkbox"
            onClick={() => chackboxFun()}
            className="form-check-input"
            id="customCheckBox7"
            required
          />
          <label
            className="form-check-label"
            htmlFor="customCheckBox7"
          />
        </div>
      </td>
      <td>#P-00006</td>
      <td>28/02/2022, 12:42 AM</td>
      <td>Ashton Cox</td>
      <td>Dr. Rhona</td>
      <td>Sleep Problem</td>
      <td>
        <span className="badge light badge-warning">
          <i className="fa fa-circle text-warning me-1" />
          In Treatment
        </span>
      </td>
      <td>AB-006</td>
      <td>
        <Dropdown className="dropdown ms-auto text-right">
          <Dropdown.Toggle
            variant=""
            className="btn-link i-false"
            data-toggle="dropdown"
          >
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              version="1.1"
            >
              <g
                stroke="none"
                strokeWidth={1}
                fill="none"
                fillRule="evenodd"
              >
                <rect x={0} y={0} width={24} height={24} />
                <circle fill="#000000" cx={5} cy={12} r={2} />
                <circle fill="#000000" cx={12} cy={12} r={2} />
                <circle fill="#000000" cx={19} cy={12} r={2} />
              </g>
            </svg>
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
            <Dropdown.Item>Accept Patient</Dropdown.Item>
            <Dropdown.Item>Reject Order</Dropdown.Item>
            <Dropdown.Item>View Details</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </td>
    </tr>
    <tr role="row" className="odd">
      <td className="sorting_1">
        <div className="form-check custom-checkbox ">
          <input
            type="checkbox"
            onClick={() => chackboxFun()}
            className="form-check-input"
            id="customCheckBox8"
            required
          />
          <label
            className="form-check-label"
            htmlFor="customCheckBox8"
          />
        </div>
      </td>
      <td>#P-00007</td>
      <td>26/02/2022, 12:42 AM</td>
      <td>Airi Satou</td>
      <td>Dr. Rhona</td>
      <td>Cold &amp; Flu</td>
      <td>
        <span className="badge light badge-danger">
          <i className="fa fa-circle text-danger me-1" />
          New Patient
        </span>
      </td>
      <td>AB-007</td>
      <td>
        <Dropdown className="dropdown ms-auto text-right">
          <Dropdown.Toggle
            variant=""
            className="btn-link i-false"
            data-toggle="dropdown"
          >
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              version="1.1"
            >
              <g
                stroke="none"
                strokeWidth={1}
                fill="none"
                fillRule="evenodd"
              >
                <rect x={0} y={0} width={24} height={24} />
                <circle fill="#000000" cx={5} cy={12} r={2} />
                <circle fill="#000000" cx={12} cy={12} r={2} />
                <circle fill="#000000" cx={19} cy={12} r={2} />
              </g>
            </svg>
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
            <Dropdown.Item>Accept Patient</Dropdown.Item>
            <Dropdown.Item>Reject Order</Dropdown.Item>
            <Dropdown.Item>View Details</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </td>
    </tr>
    <tr role="row" className="even">
      <td className="sorting_1">
        <div className="form-check custom-checkbox ">
          <input
            type="checkbox"
            onClick={() => chackboxFun()}
            className="form-check-input"
            id="customCheckBox9"
            required
          />
          <label
            className="form-check-label"
            htmlFor="customCheckBox9"
          />
        </div>
      </td>
      <td>#P-00008</td>
      <td>29/02/2022, 12:42 AM</td>
      <td>Airi Satou</td>
      <td>Dr. Garrett </td>
      <td>Sleep Problem</td>
      <td>
        <span className="badge light badge-warning">
          <i className="fa fa-circle text-warning me-1" />
          In Treatment
        </span>
      </td>
      <td>AB-008</td>
      <td>
        <Dropdown className="dropdown ms-auto text-right">
          <Dropdown.Toggle
            variant=""
            className="btn-link i-false"
            data-toggle="dropdown"
          >
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              version="1.1"
            >
              <g
                stroke="none"
                strokeWidth={1}
                fill="none"
                fillRule="evenodd"
              >
                <rect x={0} y={0} width={24} height={24} />
                <circle fill="#000000" cx={5} cy={12} r={2} />
                <circle fill="#000000" cx={12} cy={12} r={2} />
                <circle fill="#000000" cx={19} cy={12} r={2} />
              </g>
            </svg>
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
            <Dropdown.Item>Accept Patient</Dropdown.Item>
            <Dropdown.Item>Reject Order</Dropdown.Item>
            <Dropdown.Item>View Details</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </td>
    </tr>
    <tr role="row" className="odd">
      <td className="sorting_1">
        <div className="form-check custom-checkbox ">
          <input
            type="checkbox"
            onClick={() => chackboxFun()}
            className="form-check-input"
            id="customCheckBox10"
            required
          />
          <label
            className="form-check-label"
            htmlFor="customCheckBox10"
          />
        </div>
      </td>
      <td>#P-00009</td>
      <td>25/02/2022, 12:42 AM</td>
      <td>Airi Satou</td>
      <td>Dr. Rhona</td>
      <td>Cold &amp; Flu</td>
      <td>
        <span className="badge light badge-danger">
          <i className="fa fa-circle text-danger me-1" />
          New Patient
        </span>
      </td>
      <td>AB-009</td>
      <td>
        <Dropdown className="dropdown ms-auto text-right">
          <Dropdown.Toggle
            variant=""
            className="btn-link i-false"
            data-toggle="dropdown"
          >
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              version="1.1"
            >
              <g
                stroke="none"
                strokeWidth={1}
                fill="none"
                fillRule="evenodd"
              >
                <rect x={0} y={0} width={24} height={24} />
                <circle fill="#000000" cx={5} cy={12} r={2} />
                <circle fill="#000000" cx={12} cy={12} r={2} />
                <circle fill="#000000" cx={19} cy={12} r={2} />
              </g>
            </svg>
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
            <Dropdown.Item>Accept Patient</Dropdown.Item>
            <Dropdown.Item>Reject Order</Dropdown.Item>
            <Dropdown.Item>View Details</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </td>
    </tr>
    <tr role="row" className="even">
      <td className="sorting_1">
        <div className="form-check custom-checkbox ">
          <input
            type="checkbox"
            onClick={() => chackboxFun()}
            className="form-check-input"
            id="customCheckBox11"
            required
          />
          <label
            className="form-check-label"
            htmlFor="customCheckBox11"
          />
        </div>
      </td>
      <td>#P-00010</td>
      <td>26/02/2022, 12:42 AM</td>
      <td>Airi Satou</td>
      <td>Dr. Rhona</td>
      <td>Sleep Problem</td>
      <td>
        <span className="badge light badge-danger">
          <i className="fa fa-circle text-danger me-1" />
          New Patient
        </span>
      </td>
      <td>AB-010</td>
      <td>
        <Dropdown className="dropdown ms-auto text-right">
          <Dropdown.Toggle
            variant=""
            className="btn-link i-false"
            data-toggle="dropdown"
          >
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              version="1.1"
            >
              <g
                stroke="none"
                strokeWidth={1}
                fill="none"
                fillRule="evenodd"
              >
                <rect x={0} y={0} width={24} height={24} />
                <circle fill="#000000" cx={5} cy={12} r={2} />
                <circle fill="#000000" cx={12} cy={12} r={2} />
                <circle fill="#000000" cx={19} cy={12} r={2} />
              </g>
            </svg>
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
            <Dropdown.Item>Accept Patient</Dropdown.Item>
            <Dropdown.Item>Reject Order</Dropdown.Item>
            <Dropdown.Item>View Details</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </td>
    </tr>
  </tbody>
</table>
                                `}
                              </Highlight>
                            </code></pre>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </Card>
                </Col>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DataTable;
