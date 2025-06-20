import { Fragment } from "react"; 
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import PageTItle from "../../../layouts/PageTitle"; 
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import SplitButton from 'react-bootstrap/SplitButton';
import DropdownButton from 'react-bootstrap/DropdownButton';

const option = [
  { value: 1, label: "One" },
  { value: 2, label: "Two" },
  { value: 3, label: "Three" },
]
const radiocheckBox = [
  { title: 'Checkbox 1', check: 'primary' }, { title: 'Checkbox 2', check: 'secondary' },
  { title: 'Checkbox 3', check: 'info' }, { title: 'Checkbox 4', check: 'success' },
  { title: 'Checkbox 5', check: 'warning' }, { title: 'Checkbox 6', check: 'danger' },
];
function Element() {
  return (
    <Fragment>
      <PageTItle activeMenu="Form Element" motherMenu="Home" pageContent="Form Element" />
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Input Style</h4>
              </div>
              <div className="card-body">
                <div className="basic-form">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        className="form-control input-default "
                        placeholder="input-default"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control input-rounded"
                        placeholder="input-rounded"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Checkbox</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-xl-4 col-xxl-6 col-6">
                    <div className="form-check custom-checkbox mb-3">
                      <input
                        type="checkbox"

                        className="form-check-input"
                        id="customCheckBox1"
                        required
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customCheckBox1"
                      >
                        Checkbox 1
                      </label>
                    </div>
                  </div>
                  <div className="col-xl-4 col-xxl-6 col-6">
                    <div className="form-check custom-checkbox mb-3 checkbox-info">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="form-check-input"
                        id="customCheckBox2"
                        required
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customCheckBox2"
                      >
                        Checkbox 2
                      </label>
                    </div>
                  </div>

                  <div className="col-xl-4 col-xxl-6 col-6">
                    <div className="form-check custom-checkbox mb-3 checkbox-success">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="form-check-input"
                        id="customCheckBox3"
                        required
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customCheckBox3"
                      >
                        Checkbox 3
                      </label>
                    </div>
                  </div>
                  <div className="col-xl-4 col-xxl-6 col-6">
                    <div className="form-check custom-checkbox mb-3 checkbox-warning">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="form-check-input"
                        id="customCheckBox4"
                        required
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customCheckBox4"
                      >
                        Checkbox 4
                      </label>
                    </div>
                  </div>
                  <div className="col-xl-4 col-xxl-6 col-6">
                    <div className="form-check custom-checkbox mb-3 checkbox-danger">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="form-check-input"
                        id="customCheckBox5"
                        required
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customCheckBox5"
                      >
                        Checkbox 5
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-check custom-checkbox mb-3 check-xs">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="form-check-input"
                        id="customCheckBox6"
                        required
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customCheckBox6"
                      ></label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-check custom-checkbox mb-3 checkbox-info">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="form-check-input"
                        id="customCheckBox7"
                        required
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customCheckBox7"
                      ></label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-check custom-checkbox mb-3 checkbox-success check-lg">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="form-check-input"
                        id="customCheckBox8"
                        required
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customCheckBox8"
                      ></label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-check custom-checkbox mb-3 checkbox-warning check-xl">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="form-check-input"
                        id="customCheckBox9"
                        required
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customCheckBox9"
                      ></label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Textarea</h4>
              </div>
              <div className="card-body">
                <div className="basic-form">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-3 ">
                      <textarea
                        className="form-txtarea form-control"
                        rows="8"
                        id="comment"
                      ></textarea>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Input Size</h4>
              </div>
              <div className="card-body">
                <div className="basic-form">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group mb-3">
                      <input
                        className="form-control form-control-lg"
                        type="text"
                        placeholder="form-control-lg"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Default input"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control form-control-sm"
                        type="text"
                        placeholder="form-control-sm"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Select Size</h4>
              </div>
              <div className="card-body">
                <div className="basic-form">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group mb-3">
                      <select
                        defaultValue={"option"}
                        className="form-control form-control-lg"
                      >
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                      </select>
                    </div>
                    <div className="form-group mb-3">
                      <select defaultValue={"option"} className="form-control">
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <select
                        defaultValue={"option"}
                        className="form-control form-control-sm"
                      >
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                      </select>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Select List</h4>
              </div>
              <div className="card-body">
                <div className="basic-form">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group mb-3">
                      <label>Select list (select one):</label>
                      <select
                        defaultValue={"option"}
                        className="form-control"
                        id="sel1"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </div>
                    <div className="form-group"> 
                      <div id="multiselect" className="elementmultiselect">
                        <DropdownMultiselect
                          options={["1", "2", "3", "4", "5", "6"]}
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Horizontal Form</h4>
              </div>
              <div className="card-body">
                <div className="basic-form">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="row">
                      <div className="form-group mb-3 col-md-6">
                        <label>First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="1234 Main St"
                        />
                      </div>
                      <div className="form-group mb-3 col-md-6">
                        <label>Email</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="1234 Main St"
                        />
                      </div>
                      <div className="form-group mb-3 col-md-6">
                        <label>Password</label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                        />
                      </div>
                      <div className="form-group mb-3 col-md-6">
                        <label>City</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group mb-3 col-md-4">
                        <label>State</label>
                        <select
                          defaultValue={"option"}
                          id="inputState"
                          className="form-control"
                        >
                          <option value="option" disabled>
                            Choose...
                          </option>
                          <option>Option 1</option>
                          <option>Option 2</option>
                          <option>Option 3</option>
                        </select>
                      </div>
                      <div className="form-group col-md-2">
                        <label>Zip</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">Check me out</label>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Sign in
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Vertical Form</h4>
              </div>
              <div className="card-body">
                <div className="basic-form">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-3 row">
                      <label className="col-sm-3 col-form-label">Email</label>
                      <div className="col-sm-9">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className="col-sm-3 col-form-label">Password</label>
                      <div className="col-sm-9">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                        />
                      </div>
                    </div>
                    <fieldset className="form-group">
                      <div className="row mb-3">
                        <label className="col-form-label col-sm-3 pt-0">
                          Radios
                        </label>
                        <div className="col-sm-9">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gridRadios"
                              value="option1"
                              defaultChecked
                            />
                            <label className="form-check-label">
                              First radio
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gridRadios"
                              value="option2"
                            />
                            <label className="form-check-label">
                              Second radio
                            </label>
                          </div>
                          <div className="form-check disabled">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gridRadios"
                              value="option3"
                              disabled
                            />
                            <label className="form-check-label">
                              Third disabled radio
                            </label>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                    <div className="mb-3 row">
                      <div className="col-sm-3">Checkbox</div>
                      <div className="col-sm-9">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" />
                          <label className="form-check-label">
                            Example checkbox
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary">
                          Sign in
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Checkboxes</h4>
              </div>
              <div className="card-body">
                <div className="basic-form">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                      <div className="form-check mb-2">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="check1"
                          value=""
                          defaultChecked
                        />
                        <label className="form-check-label" htmlFor="check1">
                          Option 1
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="check2"
                          value=""
                        />
                        <label className="form-check-label" htmlFor="check2">
                          Option 2
                        </label>
                      </div>
                      <div className="form-check disabled">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="check3"
                          value=""
                          disabled
                        />
                        <label className="form-check-label" htmlFor="check3">
                          Disabled
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Inline Checkboxes</h4>
              </div>
              <div className="card-body">
                <div className="basic-form">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                      <div className="form-check form-check-inline">
                        <label className="form-check-label">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            value=""
                            defaultChecked
                          />
                          Option 1
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <label className="form-check-label">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            value=""
                          />
                          Option 2
                        </label>
                      </div>
                      <div className="form-check form-check-inline disabled">
                        <label className="form-check-label">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            value=""
                            disabled
                          />
                          Disabled
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Radio Buttons</h4>
              </div>
              <div className="card-body">
                <div className="basic-form">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="row">
                      {radiocheckBox.map((item, ind) => (
                        <div className="col-xl-4 col-xxl-6 col-6" key={ind}>
                          <div className={`form-check custom-checkbox mb-3 checkbox-${item.check}`}>
                            <input type="radio" className="form-check-input" id={`customRadioBox${ind + 111}`} name="optradioCustom" />
                            <label className="form-check-label" htmlFor={`customRadioBox${ind + 111}`}>{item.title}</label>
                          </div>
                        </div>
                      ))}
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Inline Radio </h4>
              </div>
              <div className="card-body">
                <div className="basic-form">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-check custom-checkbox mb-2 form-check-inline">
                      <input type="radio" className="form-check-input" id="customRadioBox987" name="optradioCustom1" />
                      <label className="form-check-label" htmlFor="customRadioBox987">Checkbox 1</label>
                    </div>
                    <div className="form-check custom-checkbox mb-2 form-check-inline">
                      <input type="radio" className="form-check-input" id="customRadioBox988" name="optradioCustom1" />
                      <label className="form-check-label" htmlFor="customRadioBox988">Checkbox 1</label>
                    </div>
                    <div className="form-check custom-checkbox mb-2 form-check-inline" >
                      <input type="radio" className="form-check-input" id="customRadioBox989" name="optradioCustom1" />
                      <label className="form-check-label" htmlFor="customRadioBox989">Checkbox 1</label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">readOnly</h4>
              </div>
              <div className="card-body">
                <div className="basic-form">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-3">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="readOnly input here…"
                        readOnly
                      />
                    </div>
                    <div className="mb-3 row">
                      <label className="col-sm-3 col-form-label">Email</label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          readOnly
                          className="form-control-plaintext"
                          value="email@example.com"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">Password</label>
                      <div className="col-sm-9">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Inline Form</h4>
              </div>
              <div className="card-body">
                <div className="basic-form">
                  <form
                    className="d-flex align-items-center flex-wrap"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="mb-3 mb-2">
                      <label className="sr-only">Email</label>
                      <input type="text" readOnly className="form-control-plaintext" value="email@example.com" />
                    </div>
                    <div className="mb-2 mx-sm-3">
                      <label className="sr-only">Password</label>
                      <input type="password" className="form-control" placeholder="Password"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary mb-2">
                      Confirm identity
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Form grid</h4>
              </div>
              <div className="card-body">
                <div className="basic-form">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="row">
                      <div className="col-sm-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First name"
                        />
                      </div>
                      <div className="col-sm-6 mt-2 mt-sm-0">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last name"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Form Row</h4>
              </div>
              <div className="card-body">
                <div className="basic-form">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="row">
                      <div className="col-sm-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First name"
                        />
                      </div>
                      <div className="col-sm-6 mt-2 mt-sm-0">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last name"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Form Label Size</h4>
              </div>
              <div className="card-body">
                <div className="basic-form">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-3 row">
                      <label className="col-sm-2 col-form-label col-form-label-sm">
                        Email
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="email"
                          className="form-control form-control-sm"
                          placeholder="col-form-label-sm"
                        />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className="col-sm-2 col-form-label">Email</label>
                      <div className="col-sm-10">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="col-form-label"
                        />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className="col-sm-2 col-form-label col-form-label-lg">
                        Email
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          placeholder="col-form-label-lg"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Column size</h4>
              </div>
              <div className="card-body">
                <div className="basic-form">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="row">
                      <div className="col-sm-7">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="City"
                        />
                      </div>
                      <div className="col mt-2 mt-sm-0">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="State"
                        />
                      </div>
                      <div className="col mt-2 mt-sm-0">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Zip"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Auto-sizing</h4>
              </div>
              <div className="card-body">
                <div className="basic-form">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="row align-items-center">
                      <div className="col-auto">
                        <label className="sr-only">Name</label>
                        <input
                          type="text"
                          className="form-control mb-2"
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div className="col-auto">
                        <label className="sr-only">Username</label>
                        <div className="input-group mb-2">
                          <div className="input-group-text">@</div>

                          <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                          />
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="form-check mb-2">
                          <input className="form-check-input" type="checkbox" />
                          <label className="form-check-label">Remember me</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn btn-primary mb-2">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Custom Select</h4>
              </div>
              <div className="card-body">
                <div className="basic-form">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="row align-items-center">
                      <div className="col-auto my-1">
                          <label className="me-sm-2">Preference</label>
                          <select defaultValue={"option"} className="me-sm-2 default-select form-control wide" id="inlineFormCustomSelect" >
                            <option value="option" disabled> Choose... </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Disabled forms</h4>
              </div>
              <div className="card-body">
                <div className="basic-form">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <fieldset disabled>
                      <div className="mb-3">
                        <label>Disabled input</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Disabled input"
                        />
                      </div>
                      <div className="mb-3">
                        <label>Disabled select menu</label>
                        <select defaultValue={"option"} className="form-control">
                          <option>Disabled select</option>
                        </select>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          disabled
                        />
                        <label className="form-check-label">
                          Can't check this
                        </label>
                      </div>
                      <button type="submit" className="btn btn-primary mt-3">
                        Submit
                      </button>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Input Group</h4>
              </div>
              <div className="card-body">
                <div className="basic-form">
                  <form action="#">
                    <div className="input-group mb-3 input-warning-o">

                      <span className="input-group-text">@</span>

                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                      />
                    </div>
                    <div className="input-group mb-3 input-success-o">

                      <span className="input-group-text">@</span>

                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                      />
                    </div>
                    <div className="input-group mb-3 input-primary">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Recipient's username"
                      />

                      <span className="input-group-text">@example.com</span>

                    </div>

                    <label>Your vanity URL</label>
                    <div className="input-group mb-3  input-success">

                      <span className="input-group-text">
                        https://example.com
                      </span>

                      <input type="text" className="form-control" />
                    </div>

                    <div className="input-group mb-3  input-info">

                      <span className="input-group-text">$</span>

                      <input type="text" className="form-control" />

                      <span className="input-group-text">.00</span>

                    </div>

                    <div className="input-group   input-danger">

                      <span className="input-group-text">With textarea</span>

                      <textarea className="form-control"></textarea>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Input Group Size</h4>
              </div>
              <div className="card-body">
                <div className="basic-form">
                  <form action="#">
                    <div className="input-group input-group-sm mb-3">

                      <span className="input-group-text">Small</span>

                      <input type="text" className="form-control form-control-sm " />
                    </div>

                    <div className="input-group mb-3">

                      <span className="input-group-text">Default</span>

                      <input type="text" className="form-control" />
                    </div>

                    <div className="input-group input-group-lg">

                      <span className="input-group-text">Large</span>

                      <input type="text" className="form-control form-control-lg" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Checkboxes and radios</h4>
              </div>
              <div className="card-body">
                <div className="basic-form">
                  <form action="#">
                    <div className="input-group mb-3">

                      <div className="input-group-text">
                        <input type="checkbox" />
                      </div>

                      <input type="text" className="form-control" />
                    </div>

                    <div className="input-group">

                      <div className="input-group-text">
                        <input type="radio" />
                      </div>

                      <input type="text" className="form-control" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Multiple inputs</h4>
              </div>
              <div className="card-body">
                <div className="basic-form">
                  <form action="#">
                    <div className="input-group">

                      <span className="input-group-text">
                        First and last name
                      </span>

                      <input type="text" className="form-control" />
                      <input type="text" className="form-control" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Multiple addons</h4>
              </div>
              <div className="card-body">
                <div className="basic-form">
                  <form action="#">
                    <div className="input-group mb-3">

                      <span className="input-group-text">$</span>
                      <span className="input-group-text">0.00</span>

                      <input type="text" className="form-control" />
                    </div>

                    <div className="input-group">
                      <input type="text" className="form-control" />
                      <span className="input-group-text">$</span>
                      <span className="input-group-text">0.00</span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Button Addons</h4>
              </div>
              <div className="card-body">
                <div className="basic-form">
                  <form action="#">
                    <div className="input-group mb-3">
                      <button className="btn btn-primary" type="button">
                        Button
                      </button>

                      <input type="text" className="form-control" />
                    </div>

                    <div className="input-group mb-3">
                      <input type="text" className="form-control" />

                      <button className="btn btn-primary" type="button">
                        Button
                      </button>

                    </div>

                    <div className="input-group mb-3">
                      <button className="btn btn-primary" type="button">
                        Button
                      </button>
                      <button className="btn btn-primary" type="button">
                        Button
                      </button>

                      <input type="text" className="form-control" />
                    </div>

                    <div className="input-group">
                      <input type="text" className="form-control" />

                      <button className="btn btn-primary" type="button">
                        Button
                      </button>
                      <button className="btn btn-primary" type="button">
                        Button
                      </button>

                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Buttons with dropdowns</h4>
              </div>
              <div className="card-body">
                <div className="basic-form">
                  <InputGroup className="mb-3">
                    <DropdownButton
                      variant="primary"
                      title="Dropdown"
                      id="input-group-dropdown-1"
                    >
                      <Dropdown.Item href="#">Action</Dropdown.Item>
                      <Dropdown.Item href="#">Another action</Dropdown.Item>
                      <Dropdown.Item href="#">Something else here</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#">Separated link</Dropdown.Item>
                    </DropdownButton>
                    <Form.Control aria-label="Text input with dropdown button" />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control aria-label="Text input with dropdown button" />
                    <DropdownButton
                      variant="primary"
                      title="Dropdown"
                      id="input-group-dropdown-2"
                      align="end"
                    >
                      <Dropdown.Item href="#">Action</Dropdown.Item>
                      <Dropdown.Item href="#">Another action</Dropdown.Item>
                      <Dropdown.Item href="#">Something else here</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#">Separated link</Dropdown.Item>
                    </DropdownButton>
                  </InputGroup>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Segmented buttons</h4>
              </div>
              <div className="card-body">
                <div className="basic-form">
                  <InputGroup className="mb-3">
                    <SplitButton
                      variant="primary"
                      title="Action"
                      id="segmented-button-dropdown-1"
                    >
                      <Dropdown.Item href="#">Action</Dropdown.Item>
                      <Dropdown.Item href="#">Another action</Dropdown.Item>
                      <Dropdown.Item href="#">Something else here</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#">Separated link</Dropdown.Item>
                    </SplitButton>
                    <Form.Control aria-label="Text input with dropdown button" />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <Form.Control aria-label="Text input with dropdown button" />
                    <SplitButton
                      variant="primary"
                      title="Action"
                      id="segmented-button-dropdown-2"
                      alignRight
                    >
                      <Dropdown.Item href="#">Action</Dropdown.Item>
                      <Dropdown.Item href="#">Another action</Dropdown.Item>
                      <Dropdown.Item href="#">Something else here</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#">Separated link</Dropdown.Item>
                    </SplitButton>
                  </InputGroup>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Custom select</h4>
              </div>
              <div className="card-body">
                <div className="basic-form">
                  <form action="#">
                    <div className="input-group mb-3">
                      <label className="input-group-text mb-0">Options</label>
                      <select
                        defaultValue={"option"}
                        className="form-control wide"
                      >
                        <option value="option" disabled>
                          Choose...
                        </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>

                    <div className="input-group mb-3">
                      <select
                        defaultValue={"option"}
                        className="form-control form-control-lg"
                      >
                        <option value="option" disabled>
                          Choose...
                        </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>

                      <label className="input-group-text mb-0">Options</label>

                    </div>

                    <div className="input-group mb-3">

                      <button className="btn btn-primary" type="button">
                        Button
                      </button>

                      <select
                        defaultValue={"option"}
                        className="form-control form-control-lg"
                      >
                        <option value="option" disabled>
                          Choose...
                        </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>

                    <div className="input-group">
                      <select
                        defaultValue={"option"}
                        className="form-control form-control-lg"
                      >
                        <option value="option" disabled>
                          Choose...
                        </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>

                      <button className="btn btn-primary" type="button">
                        Button
                      </button>

                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Custom file input</h4>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <label htmlFor="formFile" className="form-label">Default file input example</label>
                  <input className="form-control" type="file" id="formFile" />
                </div>
                <div className="mb-3">
                  <label htmlFor="formFileMultiple" className="form-label">Multiple files input example</label>
                  <input className="form-control" type="file" id="formFileMultiple" multiple />
                </div>
                <div className="mb-3">
                  <label htmlFor="formFileDisabled" className="form-label">Disabled file input example</label>
                  <input className="form-control" type="file" id="formFileDisabled" disabled />
                </div>
                <div className="mb-3">
                  <label htmlFor="formFileSm" className="form-label">Small file input example</label>
                  <input className="form-control form-control-sm" id="formFileSm" type="file" />
                </div>
                <div className="mb-3">
                  <label htmlFor="formFileLg" className="form-label">Large file input example</label>
                  <input className="form-control form-control-lg" id="formFileLg" type="file" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Element;
