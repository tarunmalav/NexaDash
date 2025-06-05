import { Nav, Tab } from "react-bootstrap"
import { SVGICON } from "../../constant/theme"
import { Link } from "react-router-dom"
import { useContext, useEffect } from "react";
import ProductOverviewChart from "../../components/dashboard/ProductOverviewChart";
import VisiterChart from "../../components/dashboard/VisiterChart";
import UpdatesChart from "../../components/dashboard/UpdatesChart";
import AnalyticsData from "../../components/dashboard/AnalyticsData";
import { productoverviewchartcard, supportcard } from "../../constant/alldata";
import Eventsidebar2 from "../../layouts/EventSidebar2";
import { ThemeContext } from "../../../context/ThemeContext";

function Analytics() {
    const { changeBackground,
        changeNavigationHader,
        changeSideBarStyle,
        chnageSidebarColor,
        changeSideBarLayout,
        chnageHaderColor
    } = useContext(ThemeContext);
    useEffect(() => {
        const element = document.querySelector(".content-body");
        element.classList.add("analytics-bg");  
        changeBackground({ value: "light", label: "Light" });        
        changeSideBarStyle({ value: "full", label: "Full" });        
        changeNavigationHader("color_4")        
        chnageHaderColor("color_1")
        changeSideBarLayout({ value: "vertical", label: "vertical"})
        chnageSidebarColor("color_4");
    },[])
    return (
        <>
            <div className="row">
                <AnalyticsData />
                <div className="col-lg-6">
                    <div className="card d-flex">
                        <div className="card-header d-flex gap-2">
                            <div className="d-flex gap-2">
                                <h4 className="card-title">Products Overview</h4>
                            </div>
                            <Link className="fs-13 text-primary" to={"#"}> Add Product {SVGICON.plus2} </Link>
                        </div>
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col-lg-7 col-md-6 col-sm-6">
                                    <div id="overview-chart">
                                        <ProductOverviewChart />
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-6 col-sm-6">
                                    <div className="title">
                                        <h5 className="mb-0 fs-15">Cloth Market Cap</h5>
                                        <h4 className=" text-primary fs-20">272.07M</h4>
                                    </div>
                                    <div>
                                        <p className="mb-2 font-w500">Overview</p>
                                        <ul>
                                            {productoverviewchartcard.map((item, i) => (
                                                <li key={i}>
                                                    <Link to={"#"} className="d-flex justify-content-between mb-2 fs-13">
                                                        <span className="d-flex align-items-center gap-2">
                                                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <rect y="0.257324" width="14" height="14" rx="4" fill={item.color} />
                                                            </svg>{item.title}
                                                        </span>
                                                        <span className="text-dark font-w600">{item.percent}</span></Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card" id="user-activity">
                        <VisiterChart />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card">
                        <UpdatesChart />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card">
                        <Tab.Container defaultActiveKey="common">
                            <div className="card-header gap-2 flex-wrap">
                                <h4 className="card-title">Support</h4>
                                <Nav className="nav nav-tabs d-flex align-items-center support-tab">
                                    <Nav.Item className="nav-item m-0">
                                        <Nav.Link className="nav-link fs-13 font-w500" eventKey="common"> Common Questions </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="nav-item m-0">
                                        <Nav.Link className="nav-link fs-13 font-w500" eventKey="ticket"> Ticket & Chat Support </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <div className="card-body">
                                <Tab.Content>
                                    <Tab.Pane eventKey="common">
                                        <div className="row gx-3">
                                            {supportcard.slice(0, 6).map((item, i) => (
                                                <div className="col-lg-6 col-6" key={i}>
                                                    <div className="support-list">
                                                        <p className="mb-0 text-primary fs-13 font-w500">{item.title}</p>
                                                        <Link className="fs-13 font-w500 text-dark" to={"#"}>{item.number}</Link>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </Tab.Pane> 
                                    <Tab.Pane eventKey="ticket">
                                        <div className="row gx-3">
                                            {supportcard.slice(-6).map((item, i) => (
                                                <div className="col-lg-6 col-6" key={i}>
                                                    <div className="support-list">
                                                        <p className="mb-0 text-primary fs-13 font-w500">{item.title}</p>
                                                        <Link className="fs-13 font-w500 text-dark" to={"#"}>{item.number}</Link>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </Tab.Pane> 
                                </Tab.Content>
                            </div>
                        </Tab.Container>
                    </div>
                </div>
                <Eventsidebar2 />
            </div>
        </>
    )
}
export default Analytics