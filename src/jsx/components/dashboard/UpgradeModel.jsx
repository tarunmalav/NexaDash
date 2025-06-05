import { Modal, Nav, Tab } from "react-bootstrap"
import { SVGICON } from "../../constant/Theme"
import { useState } from "react";
import { Link } from "react-router-dom";
import { pricedata, pricedata2 } from "../../constant/Alldata";

const Rightsvg = <svg className="me-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="12" fill="#F0F5FF" />
    <path d="M16.8125 8.93774L10.6875 15.0625L7.625 12.0002" stroke="#0B63E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
</svg>

function UpgradeModel() {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <div className="col-xl-3 col-md-6">
                <div className="card upgrade-card">
                    <div className="card-body">
                        <div className="upgrade">
                            {SVGICON.PremiumBadge}
                            <h3>Upgrade your Account to premium</h3>
                            <span>To get premium feature</span>
                            <button type="button" className="btn btn-secondary" onClick={() => setModalShow(true)}>Upgrade Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={modalShow} onHide={() => setModalShow(false)} size="xl">
                <div className="modal-content">
                    <div className="modal-header border-0">
                        <button type="button" className="btn-close" onClick={() => setModalShow(false)}></button>
                    </div>
                    <div className="modal-body pt-0">
                        <div className="text-center">
                            <h2>Choose the plans that’s perfect for your business.</h2>
                            <p>Donec ligula ligula, porta at urna non, faucibus congue urna. Nullam nulla purus, facilisis vitae odio ac, tempus aliquet dolor.</p>
                        </div>
                        <Tab.Container defaultActiveKey={'Yearly'}>
                            <div className="d-flex justify-content-center mb-4">
                                <Nav as="ul" className="nav nav-pills">
                                    <Nav.Item as="li" className="nav-item">
                                        <Nav.Link className="nav-link" eventKey={'Yearly'}> Yearly</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="nav-item" >
                                        <Nav.Link className="nav-link" eventKey={'Monthly'}> Monthly</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <div className="row">
                                <Tab.Content>
                                    <Tab.Pane eventKey={'Yearly'}>
                                        <div className="row">
                                            {pricedata.map((plan, index) => (
                                                <div className={`col-xl-4 ${plan.className}`} key={index}>
                                                    <div className="card upgrad-plan">
                                                        <div className="card-body">
                                                            <div className="text-center">
                                                                <span className="badge badge-info light border-0">{plan.title}</span>
                                                                <div className="d-flex align-items-baseline m-prise">
                                                                    <h4>${plan.price}</h4><span>/{plan.period}</span>
                                                                </div>
                                                                <ul className="prise-list">
                                                                    {plan.features.map((feature, i) => (
                                                                        <li key={i}> {Rightsvg} {feature} </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="card-footer text-center border-0">
                                                            <Link to="#" className="btn btn-primary light btn-block"> Choose plans <i className="fa-solid fa-arrow-right ms-2" /> </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey={'Monthly'}>
                                        <div className="row">
                                            {pricedata2.map((plan, index) => (
                                                <div className={`col-xl-4 ${plan.className}`} key={index}>
                                                    <div className="card upgrad-plan">
                                                        <div className="card-body">
                                                            <div className="text-center">
                                                                <span className="badge badge-info light border-0">{plan.title}</span>
                                                                <div className="d-flex align-items-baseline m-prise">
                                                                    <h4>${(plan.price)}</h4><span>/{plan.period}</span>
                                                                </div>
                                                                <ul className="prise-list">
                                                                    {plan.features.map((feature, i) => (
                                                                        <li key={i}>{Rightsvg} {feature}</li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="card-footer text-center border-0">
                                                            <Link to="#" className="btn btn-primary light btn-block"> Choose plans <i className="fa-solid fa-arrow-right ms-2" /> </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </div>
                        </Tab.Container>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger light" onClick={() => setModalShow(false)} >Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div >
            </Modal >
        </>
    )
}

export default UpgradeModel
