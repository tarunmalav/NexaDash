import { Link } from "react-router-dom"
import RevenueBarChart from "../../components/dashboard/RevenueBarChart"
import { IMAGES, SVGICON } from "../../constant/Theme"
import ExpensesChart from "../../components/dashboard/ExpensesChart"
import DepositlineChart from "../../components/dashboard/DepositlineChart"
import ProgressBarChart from "../../components/dashboard/ProcessBarChart"
import ProjectOverviewChart from "../../components/dashboard/ProjectOverviewChart"
import DraggableBlog from "../../components/dashboard/DraggableBlog"
import ActiveProjects from "../../components/dashboard/ActiveProjects"
import { useContext, useEffect } from "react"
import { ThemeContext } from "../../../context/ThemeContext"

function Finance() {
    const { changeBackground,
        changeNavigationHader,
        changeSideBarStyle,
        chnageSidebarColor,
        changeSideBarLayout,
        chnageHaderColor
    } = useContext(ThemeContext);
    useEffect(() => {
        const element = document.querySelector(".content-body");
        element.classList.add("finance-bg");
        changeBackground({ value: "light", label: "Light" });
        changeSideBarStyle({ value: "full", label: "Full" });
        changeNavigationHader("color_4")
        chnageHaderColor("color_4")
        changeSideBarLayout({ value: "vertical", label: "vertical" })
        chnageSidebarColor("color_1");
    }, [])
    return (
        <>
            <div className="row">
                <div className="col-xl-12">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="row">
                                <div className="col-xl-6 col-sm-6">
                                    <div className="card border-0 revenue-card text-white">
                                        <div className="card-header border-0 flex-wrap pb-0">
                                            <div className="revenue-date">
                                                <span>Revenue</span>
                                                <h4 className="text-white">$920.035</h4>
                                            </div>
                                            <div className="avatar-list avatar-list-stacked me-2">
                                                <img src={IMAGES.contact5} className="avatar avatar-md rounded-circle" alt="" />
                                                <img src={IMAGES.contact6} className="avatar avatar-md rounded-circle" alt="" />
                                                <span className="avatar avatar-md rounded-circle">25+</span>
                                            </div>
                                        </div>
                                        <div className="card-body pb-0 custome-tooltip d-flex align-items-center">
                                            <div className="clearfix">
                                                <div id="chartBar" className="chartBar1">
                                                    <RevenueBarChart />
                                                </div>
                                            </div>
                                            <div>
                                                {SVGICON.uparrow2}
                                                <span className="d-block font-w600">45%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-sm-6">
                                    <div className="card border-0 bg-warning text-white">
                                        <div className="card-header border-0 pb-0">
                                            <div className="revenue-date">
                                                <span className="text-black">Expenses</span>
                                                <h4 className="text-black">$920.035</h4>
                                            </div>
                                            <div className="avatar-list avatar-list-stacked me-2">
                                                <span className="avatar avatar-md rounded-circle">
                                                    <Link to={"#"}>{SVGICON.plus}</Link>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="card-body pb-0 custome-tooltip d-flex align-items-center">
                                            <div id="expensesChart" className="chartBar1">
                                                <ExpensesChart />
                                            </div>
                                            <div>
                                                {SVGICON.uparrow3}
                                                <span className="d-block font-w600 text-black">45%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-sm-6">
                                    <div className="card border-0">
                                        <div className="card-body depostit-card">
                                            <div className="depostit-card-media d-flex justify-content-between style-1">
                                                <div>
                                                    <h6>Tasks Not Finisheds</h6>
                                                    <h3>20</h3>
                                                </div>
                                                <div className="icon-box bg-warning">
                                                    {SVGICON.CalendarList2}
                                                </div>
                                            </div>
                                            <div className="progress-box mt-0">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="mb-0">Complete Task</p>
                                                    <p className="mb-0">20/28</p>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar bg-warning" style={{ width: "50%", height: "10px", borderRadius: "4px" }} role="progressbar"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-sm-6">
                                    <div className="card border-0 same-card">
                                        <div className="card-body depostit-card p-0">
                                            <div className="depostit-card-media d-flex justify-content-between pb-0">
                                                <div>
                                                    <h6>Total Deposit</h6>
                                                    <h3>$1200.00</h3>
                                                </div>
                                                <div className="icon-box bg-primary">
                                                    {SVGICON.DollerPrimary2}
                                                </div>
                                            </div>
                                            <DepositlineChart chartcolor="var(--primary)" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="card border-0 bg-primary rainbow-box" style={{ backgroundImage: `url(${IMAGES.rainbow})`, backgroundSize: "cover", backgroundBlendMode: "luminosity" }} >
                                <div className="card-header border-0">
                                    {SVGICON.nexadashwhiteicon}
                                </div>
                                <div className="card-body pt-0">
                                    <div className="finance">
                                        <h4>Your Finances, safe and Secure</h4>
                                        <p>
                                            It is a long established fact that a reader will be distracted
                                            by the readable content of a page when looking at its layout.
                                        </p>
                                    </div>
                                    <div className="d-flex pt-3">
                                        <div className="avatar-list avatar-list-stacked">
                                            <img src={IMAGES.contact5} className="avatar avatar-md rounded-circle" alt="" />
                                            <img src={IMAGES.contact6} className="avatar avatar-md rounded-circle" alt="" />
                                            <img src={IMAGES.contact7} className="avatar avatar-md rounded-circle" alt="" />
                                        </div>
                                        <div className="ratting-data">
                                            <h4>15k+</h4>
                                            <span>Happy Clients</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="card border-0">
                                <div className="card-body">
                                    <div id="redial">
                                        <ProgressBarChart width={241} />
                                    </div>
                                    <span className="right-sign">
                                        {SVGICON.warningRight}
                                    </span>
                                    <div className="redia-date text-center">
                                        <h4>My Progress</h4>
                                        <p> Lorem ipsum dolor sit amet, consectetur </p>
                                        <Link to="/crm" className="btn btn-warning text-black">More Details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8">
                            <div className="card border-0 overflow-hidden">
                                <ProjectOverviewChart />
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="card border-0 overflow-hidden">
                                <div className="card-header border-0 flex-wrap pb-0">
                                    <h4 className="heading mb-0">My To Do Items</h4>
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
                        <div className="col-xl-12">
                            <ActiveProjects />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Finance