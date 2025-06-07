import { Link } from "react-router-dom";
import { IMAGES, SVGICON } from "../../constant/Theme"; 
import Marqueedata from "../../components/dashboard/Marquee";
import RevenueUpdatechart from "../../components/dashboard/RevenueUpdatechart";
import SelectImg from "../../components/dashboard/SelectImg";
import SwiperHome from "../../components/dashboard/SwiperHome";
import { homecard, sellordertable } from "../../constant/Alldata";
import Eventsidebar from "../../layouts/EventSidebar";
import { Dropdown } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

function Home() {
    const { 
        changeBackground,
        // changeSideBarStyle,
        changeNavigationHader,        
        chnageSidebarColor,
        changePrimaryColor
    } = useContext(ThemeContext);
    useEffect(() => {        
        // changeBackground({ value: "light", label: "Light" });        
        // changeSideBarStyle({ value: "full", label: "Full" });        
        // changeNavigationHader("color_2")        
        // chnageSidebarColor("color_2");   
        // changePrimaryColor("color_2");
    }, []);
    const [selectedOption, setSelectedOption] = useState("English");
    
    return (
        <>
            <div className="row">
                <div className="col-xl-4">
                    <div className="card cridet-card">
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <span className="card-name">Credit Card</span>
                                {SVGICON.visa}
                            </div>
                            <h4 className="card-num"><span>**** &nbsp;****&nbsp;****&nbsp;7890</span></h4>
                            <div className="d-flex align-items-center card-details">
                                <div className="me-3">
                                    <small>Valid Date</small>
                                    <h4>08/27</h4>
                                </div>
                                <div className="ms-3">
                                    <small>Card Holder</small>
                                    <h4>Maqruezz Silalahi</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-8">
                    <div className="row">
                        {homecard.map((data, i) => (
                            <div className={`col-xl-4 col-sm-4 ${data.class}`} key={i}>
                                <div className="card text-center">
                                    <div className="card-body carning-card">
                                        <span className="text-primary font-w500">{data.title}</span>
                                        <h3>{data.price}</h3>
                                        <Link to={"#"} className="btn btn-primary btn-sm  w-75">{SVGICON.uparrow}
                                            {" "}{data.precent}</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-xl-12">
                    <div className="tickercontainer" style={{ overflow: "hidden", height: "auto" }}>
                        <div className="mask">
                            <ul className="crypto-list" id="crypto-webticker">
                                <Marqueedata />
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-xl-8 col-lg-12">
                    <RevenueUpdatechart />
                </div>
                <div className="col-xl-4 col-sm-6 quick-trade">
                    <div className="card bg-primary">
                        <div className="card-header border-0">
                            <h4 className="card-title text-white">Quick Trade</h4>
                            <div className="crypto-select d-flex align-items-center gap-2 p-2">
                                <img src={IMAGES.btc1svg} alt="" />
                                <Dropdown className="c-pointer">
									<Dropdown.Toggle as="div" className="nav-link text-white">
										{selectedOption}
									</Dropdown.Toggle>
									<Dropdown.Menu className="dropdown-menu dropdown-menu-end" align="end">
										<Dropdown.Item onClick={() => setSelectedOption("English")}>English</Dropdown.Item>
										<Dropdown.Item onClick={() => setSelectedOption("Finland")}>Finland</Dropdown.Item>
										<Dropdown.Item onClick={() => setSelectedOption("France")}>français</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
                            </div>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="trade-input mb-3">
                                    <label className="form-label">Amount</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="24,246" aria-label="Recipient's username" />
                                        <span className="input-group-text" id="basic-addon27">BTC</span>
                                    </div>
                                </div>
                                <div className="trade-input mb-3">
                                    <label className="form-label">Price BPL</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="0.00000" aria-label="Recipient's username" />
                                        <span className="input-group-text" id="basic-addon11">BPL</span>
                                    </div>
                                </div>
                                <div className="trade-input mb-3">
                                    <label className="form-label">Total BPL</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="24,246" aria-label="Recipient's username" />
                                        <span className="input-group-text" id="basic-addon2">BTL</span>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <button className="btn btn-success w-50 me-2">Buy</button>
                                    <button className="btn btn-danger w-50 ms-2">Sell</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-sm-6">
                    <div className="card bg-danger-light border-danger overflow-hidden">
                        <div className="card-header border-0 d-block">
                            <div className="d-flex justify-content-between mb-3">
                                <h4 className="card-title">Sell Order</h4>
                                {SVGICON.setting}
                            </div>
                            <div className="d-block">
                                <SelectImg />
                            </div>
                        </div>
                        <div className="card-body p-0">
                            <div className="table-responsive">
                                <table className="table text-center bg-white-hover order-tbl mb-0">
                                    <thead>
                                        <tr>
                                            <th className="text-start">Price</th>
                                            <th className="text-center">Amount</th>
                                            <th className="text-end">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {sellordertable.map((data, i) => (
                                            <tr key={i}>
                                                <td className="text-start">{data.price}</td>
                                                <td>0.15</td>
                                                <td className="text-end">{data.total}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-sm-6">
                    <div className="card bg-success-light border-success overflow-hidden">
                        <div className="card-header border-0 d-block">
                            <div className="d-flex justify-content-between mb-3">
                                <h4 className="card-title">Buy Order</h4>
                                {SVGICON.setting}
                            </div>
                            <div className="d-block">
                                <SelectImg />
                            </div>
                        </div>
                        <div className="card-body p-0">
                            <div className="table-responsive">
                                <table className="table text-center bg-white-hover order-tbl mb-0">
                                    <thead>
                                        <tr>
                                            <th className="text-start">Price</th>
                                            <th className="text-center">Amount</th>
                                            <th className="text-end">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {sellordertable.map((data, i) => (
                                            <tr key={i}>
                                                <td className="text-start">{data.price}</td>
                                                <td>0.15</td>
                                                <td className="text-end">{data.total}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-sm-6">
                    <div className="card">
                        <div className="card-header border-0 pb-2">
                            <h4 className="card-title">Quick Transfer</h4>
                        </div>
                        <div className="card-body pt-0">
                            <SelectImg />
                            <div className="trade-input my-3 style-1">
                                <label className="form-label">Total BPL</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="24,246" aria-label="Recipient's username" />
                                    <span className="input-group-text" id="basic-addon20">BTL</span>
                                </div>
                            </div>
                            <div className="recent-contacts d-flex justify-content-between">
                                <h4>Recent Contacts</h4>
                                <Link to={"#"} className="btn-link">View All</Link>
                            </div>
                            <div className="owl-carousel owl-carousel owl-loaded front-view-slider ">
                                <SwiperHome />
                            </div>
                        </div>
                        <div className="card-footer border-0 d-grid">
                            <button className="btn btn-primary">TRANSFER NOW</button>
                        </div>
                    </div>
                </div>
                <Eventsidebar/>
            </div>
        </>
    );
}
export default Home;
