import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Nav, Collapse } from 'react-bootstrap';

const formDataLabel = [
    { title: 'Privacy Policy', id: '12' },
    { title: 'Contact Us', id: '13' },
    { title: 'Important Information', id: '14' },
    { title: 'About Us', id: '15' },
    { title: 'Dummy Co', id: '16' },
];

const MenusBlog = () => {
    const [open, setOpen] = useState(true);
    const [open2, setOpen2] = useState(true);
    const [checked, setChecked] = useState(false);
    const [openFirst, setOpenFirst] = useState(true);
    return (
        <>
            <div className="filter cm-content-box box-primary">
                <div className="content-title SlideToolHeader" onClick={() => setOpenFirst(!openFirst)}>
                    <div className="cpa"> Menus </div>
                    <div className="tools">
                        <Link to={"#"} className={`SlideToolHeader ${openFirst ? 'collapse' : 'expand'}`}  >
                            <i className="fas fa-angle-up" />
                        </Link>
                    </div>
                </div>
                <Collapse in={openFirst}>
                    <div className="cm-content-body form excerpt">
                        <div className="card-body">
                            <div className="filter cm-content-box box-primary border">
                                <div className="content-title border-0 SlideToolHeader" onClick={() => setOpen(!open)}>
                                    <div className="cpa"> Page </div>
                                    <div className="tools">
                                        <Link to={"#"} className={`SlideToolHeader ${open ? 'collapse' : 'expand'}`} >
                                            <i className="fas fa-angle-up" />
                                        </Link>
                                    </div>
                                </div>
                                <Collapse in={open}>
                                    <div className="cm-content-body form excerpt border-top">
                                        <div className="card-body ItemsCheckboxSec p-sm-4">
                                            <Tab.Container defaultActiveKey="View">
                                                <Nav as="ul" className=" tab-my nav nav-tabs" id="myTab" >
                                                    <Nav.Item as="li" className="nav-item me-1" role="presentation">
                                                        <Nav.Link as="button" eventKey="View" type="button">View All</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item as="li" className="nav-item">
                                                        <Nav.Link as="button" eventKey="Search" type="button">Search</Nav.Link>
                                                    </Nav.Item>
                                                </Nav>
                                                <Tab.Content className="tab-content" id="myTabContent">
                                                    <Tab.Pane eventKey="View">
                                                        <div className="menu-tabs">
                                                            {formDataLabel.map((item, ind) => (
                                                                <div className="form-check" key={ind}>
                                                                    <input className="form-check-input" type="checkbox" onChange={(e) => e.target.value} id={`flexlabel-${item.id}`} checked={checked} />
                                                                    <label className="form-check-label" htmlFor={`flexlabel-${item.id}`}>{item.title}</label>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="Search">
                                                        <div className="menu-tabs">
                                                            <label htmlFor="exampleFormControlInput1" className="form-label">Search</label>
                                                            <input type="text" className="form-control solid" id="exampleFormControlInput1" placeholder="Enter Page Name" />
                                                        </div>
                                                    </Tab.Pane>
                                                    <div className="d-flex align-items-center flex-wrap mb-2">
                                                        <Link to={"#"} className="checkAllInput text-hover" onClick={() => { setChecked(true) }} >Select All</Link><span className="mx-2">|</span>
                                                        <Link to={"#"} className="unCheckAllInput text-hover" onClick={() => { setChecked(false) }} >Deselect All</Link>
                                                    </div>
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <button type="submit" className="btn btn-primary btn-sm dz-menu-btn">Add to Menu</button>
                                                    </div>
                                                </Tab.Content>
                                            </Tab.Container>
                                        </div>
                                    </div>
                                </Collapse>
                            </div>
                            <div className="filter cm-content box-primary border">
                                <div className="content-title border-0 SlideToolHeader" onClick={() => setOpen2(!open2)}>
                                    <div className="cpa"> Links </div>
                                    <div className="tools">
                                        <Link to={"#"} className={`SlideToolHeader ${open2 ? 'collapse' : 'expand'}`}  >
                                            <i className="fas fa-angle-up" />
                                        </Link>
                                    </div>
                                </div>
                                <Collapse in={open2}>
                                    <div className="cm-content-body form excerpt border-top">
                                        <div className="card-body">
                                            <div className="row align-items-center">
                                                <div className="col-4 mb-3">
                                                    <label className="form-label mb-0">URL :</label>
                                                </div>
                                                <div className="col-8 mb-3">
                                                    <input type="text" className="form-control solid" placeholder="" />
                                                </div>
                                                <div className="col-4">
                                                    <label className="form-label mb-0">Link Text :</label>
                                                </div>
                                                <div className="col-8">
                                                    <input type="text" className="form-control solid" placeholder="Menu items" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Collapse>
                            </div>
                        </div>
                    </div>
                </Collapse>
            </div>
        </>
    )
}

export default MenusBlog