import { Link } from "react-router-dom"
import AllProjectDonutChart from "../../components/dashboard/AllProjectDonutChart"
import DepositlineChart from "../../components/dashboard/DepositlineChart"
import ProjectOverviewChart from "../../components/dashboard/ProjectOverviewChart"
import DraggableBlog from "../../components/dashboard/DraggableBlog"
import ActiveProjects from "../../components/dashboard/ActiveProjects" 
import { SVGICON } from "../../constant/Theme"
import { useContext, useEffect } from "react"
import ProjectStatusBlogDonutChart from "../../components/dashboard/ProjectStatusBlogDonutChart" 
import { mediaBlog2 } from "../../constant/Alldata"
import Dropdowndata from "../../components/dashboard/DropdownData"
import { ThemeContext } from "../../../context/ThemeContext"

function Crm() {
    const { changeBackground,
        changeNavigationHader,
        changeSideBarStyle,
        chnageSidebarColor,
        changeSideBarLayout,
        chnageHaderColor
    } = useContext(ThemeContext);
    useEffect(() => {
        const element = document.querySelector(".content-body");
        element.classList.add("crm-main");
        changeBackground({ value: "light", label: "Light" });        
        changeSideBarStyle({ value: "full", label: "Full" });        
        changeNavigationHader("color_4")        
        chnageHaderColor("color_4")
        changeSideBarLayout({ value: "horizontal", label: "horizontal"})
        chnageSidebarColor("color_3");
    }, [])
    return (
        <>
            <div className="row">
                <div className="col-xl-3 col-sm-6">
                    <div className="card chart-grd same-card">
                        <div className="card-body depostit-card p-0">
                            <div className="depostit-card-media d-flex justify-content-between pb-0">
                                <div>
                                    <h6>Total Deposit</h6>
                                    <h3>$1200.00</h3>
                                </div>
                                <div className="icon-box bg-primary-light">
                                    {SVGICON.DollerPrimary}
                                </div>
                            </div>
                            <DepositlineChart chartcolor="var(--primary)" />
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                    <div className="card">
                        <div className="card-body d-flex align-items-center  py-2"> 
                            <AllProjectDonutChart /> 
                            <ul className="project-list">
                                <li>
                                    <h6>All Projects</h6>
                                </li>
                                <li>
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="10" height="10" rx="3" fill="#3AC977" />
                                    </svg>  Complete
                                </li>
                                <li>
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="10" height="10" rx="3" fill="var(--primary)" />
                                    </svg> Pending
                                </li>
                                <li>
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="10" height="10" rx="3" fill="var(--secondary)" />
                                    </svg> Not Start
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                    <div className="card chart-grd same-card">
                        <div className="card-body depostit-card p-0">
                            <div className="depostit-card-media d-flex justify-content-between pb-0">
                                <div>
                                    <h6>Total Expenses</h6>
                                    <h3>$1200.00</h3>
                                </div>
                                <div className="icon-box bg-danger-light">
                                    {SVGICON.DollerRed}
                                </div>
                            </div>
                            <DepositlineChart chartcolor="#FF5E5E" />
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                    <div className="card">
                        <div className="card-body depostit-card">
                            <div className="depostit-card-media d-flex justify-content-between style-1">
                                <div>
                                    <h6>Total Deposit</h6>
                                    <h3>20</h3>
                                </div>
                                <div className="icon-box bg-primary-light">
                                    {SVGICON.CalendarList}
                                </div>
                            </div>
                            <div className="progress-box mt-0">
                                <div className="d-flex justify-content-between">
                                    <p className="mb-0">Tasks Not Finished</p>
                                    <p className="mb-0">20/28</p>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-primary" style={{ width: "50%", height: "10px", borderRadius: "4px" }} role="progressbar" ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-8">
                    <div className="card overflow-hidden">
                        <ProjectOverviewChart />
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 same-card">
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
                <div className="col-xl-8 active-p">
                    <ActiveProjects />
                </div>
                <div className="col-xl-4 col-lg-6">
                    <div className="card">
                        <div className="card-header pb-0 border-0">
                            <h4 className="card-title">Projects Status</h4>
                            <Dropdowndata />
                        </div>
                        <div className="card-body">
                            <ProjectStatusBlogDonutChart />
                            <div className="project-date">
                                {mediaBlog2.map((data, ind) => (
                                    <div className="project-media" key={ind}>
                                        <p className="mb-0">
                                            <svg className="me-2" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect y="0.5" width="12" height="12" rx="3" fill={data.color} />
                                            </svg>{" "}
                                            {data.title}
                                        </p>
                                        <span>{`${124 + ind}`} Projects</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Crm