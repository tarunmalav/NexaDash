import { useContext, useEffect } from "react";
import { IMAGES, SVGICON } from "../../constant/Theme";
import WeeklySalesBarChart from "../../components/dashboard/WeeklySalesBarChart";
import HandleOrderChart from "../../components/dashboard/handleordrchar";
import HandleMarketShare from "../../components/dashboard/handlemarketshare";
import ChartBarRunning from "../../components/dashboard/ChartBarRunning";
import Contactdata from "../../components/dashboard/contactdata";
import ProgressBarChart from "../../components/dashboard/ProcessBarChart";
import { Link } from "react-router-dom";
import TransactionsDetails from "../../components/dashboard/TransactionDetails"; 
import DraggableBlog from "../../components/dashboard/DraggableBlog"; 
import ProjectStatusBlogDonutChart from "../../components/dashboard/ProjectStatusBlogDonutChart";
import { mediaBlog3 } from "../../constant/Alldata";
import SwiperHome2 from "../../components/dashboard/SwiperHome2";
import Dropdowndata from "../../components/dashboard/DropdownData";
import { ThemeContext } from "../../../context/ThemeContext";

function Ecommerce() { 
    const { changeBackground,
        changeNavigationHader,
        changeSideBarStyle,
        chnageSidebarColor,
        changeSideBarLayout,
        chnageHaderColor
    } = useContext(ThemeContext);
    useEffect(() => {
        const element = document.querySelector(".content-body");
        element.classList.add("crm-main", "style-1");
        changeBackground({ value: "light", label: "Light" });        
        // changeSideBarStyle({ value: "full", label: "Full" });        
        changeNavigationHader("color_4")        
        chnageHaderColor("color_4")
        changeSideBarLayout({ value: "horizontal", label: "horizontal"})
        chnageSidebarColor("color_1");
    }, [])
    return (
        <>
            <div className="row">
                <div className="col-xl-3 col-md-6">
                    <div className="card ic-chart-card">
                        <div className="card-header d-block border-0 pb-0">
                            <div className="d-flex justify-content-between">
                                <h6 className="mb-0">Weekly Sales</h6>
                                <span className="badge badge-sm badge-success light">+2.7%</span>
                            </div>
                            <span className="data-value">$92k</span>
                        </div>
                        <div className="card-body p-0">
                            <div id="handleWeeklySales" className="chart-offset">
                                <WeeklySalesBarChart />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="card ic-chart-card">
                        <div className="card-header d-block border-0">
                            <div className="d-flex justify-content-between">
                                <h6 className="mb-0">Total Order</h6>
                                <span className="badge badge-sm badge-info light">+7.2%</span>
                            </div>
                            <span className="data-value">$34.2k</span>
                        </div>
                        <div className="card-body p-0 pb-3">
                            <div id="handleOrderChart">
                                <HandleOrderChart />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="card ic-chart-card">
                        <div className="card-header d-block border-0 pb-0">
                            <div className="d-flex justify-content-between">
                                <h6 className="mb-0">Market Share</h6>
                                <span className="badge badge-sm badge-success light">80%</span>
                            </div>
                            <span className="data-value">20M</span>
                        </div>
                        <div className="card-body d-flex align-items-center justify-content-between py-2 pe-1">
                            <div className="clearfix">
                                <div className="d-flex align-items-center mb-2">
                                    {SVGICON.starblue}
                                    <span className="text-dark fs-13">Mobile</span>
                                </div>
                                <div className="d-flex align-items-center mb-2">
                                    {SVGICON.stargreen}
                                    <span className="text-dark fs-13">Laptop</span>
                                </div>
                                <div className="d-flex align-items-center mb-2">
                                    {SVGICON.stargrey}
                                    <span className="text-dark fs-13">Cloths</span>
                                </div>
                            </div>
                            <div id="handleMarketShare">
                                <HandleMarketShare />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="card ic-chart-card">
                        <div className="card-header d-block border-0 pb-0">
                            <div className="d-flex justify-content-between">
                                <h6 className="mb-0">New Customer This Month</h6>
                                <span className="badge badge-sm badge-success light">15%</span>
                            </div>
                            <span className="data-value">1.2K</span>
                        </div>
                        <div className="card-footer border-0 mt-auto">
                            <h6>Today Customer</h6>
                            <ul className="avtar-list">
                                <li><img className="avatar avatar-md avatar-circle borderd" src={IMAGES.avtar1} /></li>
                                <li><img className="avatar avatar-md avatar-circle borderd" src={IMAGES.avtar2} /></li>
                                <li><img className="avatar avatar-md avatar-circle borderd" src={IMAGES.avtar3} /></li>
                                <li><img className="avatar avatar-md avatar-circle borderd" src={IMAGES.avtar4} /></li>
                                <li><img className="avatar avatar-md avatar-circle borderd" src={IMAGES.avtar5} /></li>
                                <li><img className="avatar avatar-md avatar-circle borderd" src={IMAGES.avtar6} /></li>
                                <li> <div className="avatar-label avatar-light avatar-circle">+4K</div> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row e-c-sapace">
                <div className="col-xl-8">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card overflow-hidden">
                                <ChartBarRunning />
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="card">
                                <div className="card-header border-0 pb-0">
                                    <h5>People Contact</h5>
                                </div>
                                <Contactdata gap="g-2" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-body mb-0">
                                    <div id="redial">
                                        <ProgressBarChart width={205} />
                                    </div>
                                    <div className="redia-date text-center">
                                        <h4>My Progress</h4>
                                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur</p>
                                    </div>
                                </div>
                                <div className="card-footer text-center border-0 pt-0">
                                    <Link to={"#"} className="btn btn-primary">More Details</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12">
                            <TransactionsDetails />
                        </div>
                    </div>
                </div>
                <div className="col-xl-4">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card saller">
                                <div className="card-header border-0 d-block text-white pb-0">
                                    <h4 className="text-white mb-0">Top Sellers</h4>
                                    <span>Users from all channels</span>
                                </div>
                                <div className="card-body overflow-hidden">
                                    <div className="seller-slider">
                                         <SwiperHome2 />
                                    </div>
                                    <div className="product-details">
                                        <h4>Your Finances, safe and Secure</h4>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                        <div className="d-flex align-items-center">
                                            <ul className="avtar-list">
                                                <li><img className="avatar avatar-circle borderd" src={IMAGES.avtar1} alt="" /></li>
                                                <li><img className="avatar avatar-circle borderd" src={IMAGES.avtar2} alt="" /></li>
                                                <li><img className="avatar avatar-circle borderd" src={IMAGES.avtar3} alt="" /></li>
                                                <li><img className="avatar avatar-circle borderd" src={IMAGES.avtar4} alt="" /></li>
                                                <li><img className="avatar avatar-circle borderd" src={IMAGES.avtar5} alt="" /></li>
                                                <li><img className="avatar avatar-circle borderd" src={IMAGES.avtar6} alt="" /></li>
                                                <li> <div className="avatar-label avatar-light avatar-circle">+4K</div> </li>
                                            </ul>
                                            <div className="ms-3">
                                                <h4 className="mb-0 ">15k+</h4>
                                                <span>Happy Clients</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-6">
                            <div className="card">
                                <div className="card-header border-0">
                                    <h4 className="card-title mb-0">My To Do Items</h4>
                                    <div>
                                        <Link to={"#"} className="text-primary me-2">View All</Link>
                                        <Link to={"#"} className="text-black"> + Add To Do</Link>
                                    </div>
                                </div>
                                <div className="card-body p-0">
                                    <div className="dt-do-bx">
                                        <div className="draggable-zone dropzoneContainer to-dodroup dz-scroll">
                                            <DraggableBlog />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-6">
                            <div className="card">
                                <div className="card-header pb-0 border-0">
                                    <h4 className="card-title">Sales by traffic source</h4>
                                    <Dropdowndata />
                                </div>
                                <div className="card-body pb-3">
                                    <ProjectStatusBlogDonutChart />
                                    <div className="project-date">
                                        {mediaBlog3.map((data, ind) => (
                                            <div className="project-media" key={ind}>
                                                <p className="mb-0">
                                                    <svg className="me-2" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect y="0.5" width="12" height="12" rx="3" fill={data.color} />
                                                    </svg>{" "}
                                                    {data.title}
                                                </p>
                                                <span>{data.price}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Ecommerce;