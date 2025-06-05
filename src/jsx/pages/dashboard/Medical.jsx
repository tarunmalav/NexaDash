import { useContext, useEffect } from "react"
import { IMAGES, SVGICON } from "../../constant/Theme";
import DraggableBlog from "../../components/dashboard/DraggableBlog";
import { Link } from "react-router-dom";
import ProgressBarChart from "../../components/dashboard/ProcessBarChart";
import ProductOverviewChart2 from "../../components/dashboard/ProductOverviewChart2";
import ProjectOverviewChart2 from "../../components/dashboard/ProjectOverviewChart2";
import { ThemeContext } from "../../../context/ThemeContext";
import { medicalcarddata, productoverviewchartcard2 } from "../../constant/alldata";

function Medical() {
    const { changeBackground,
        changeNavigationHader,
        changeSideBarStyle,
        chnageSidebarColor,
        changeSideBarLayout,
        chnageHaderColor
    } = useContext(ThemeContext);
    useEffect(() => {
        const element = document.querySelector(".content-body");
        element.classList.add("bg-medical");
         changeBackground({ value: "light", label: "Light" });        
        changeSideBarStyle({ value: "mini", label: "mini" });        
        changeNavigationHader("color_3")        
        chnageHaderColor("color_1")
        changeSideBarLayout({ value: "vertical", label: "vertical"})
        chnageSidebarColor("color_3");
    }, [ ])
 
    return (
        <>
            <div className="card bg-primary">
                <div className="card-body">
                    <div className="row">
                        {medicalcarddata.map((data, i) => (
                            <div className="col-md-3 col-6" key={i}>
                                <div className="dlab-cource style-1">
                                    <div className="d-flex align-items-center">
                                        <span className={`course-icon ${data.class}`}>
                                            {data.svg}
                                        </span>
                                        <div className="ms-2">
                                            <h4 className="mb-0">{data.span}</h4>
                                            <span>{data.title}</span>
                                        </div>
                                    </div>
                                    <img src={data.image} alt="" className={data.imgclass} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-8 col-md-12">
                    <div className="card overflow-hidden">
                        <ProjectOverviewChart2 />
                    </div>
                </div>
                <div className="col-xl-4 col-md-12">
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
                <div className="col-xl-3">
                    <div className="card bg-primary rainbow-box" style={{ backgroundImage: `url(${IMAGES.rainbow})`, backgroundSize: "cover", backgroundBlendMode: "luminosity" }} >
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
                <div className="col-xl-3 col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <div id="redial" className="d-flex justify-content-center">
                                <ProgressBarChart width={241} />
                            </div>
                            <span className="right-sign">
                                {SVGICON.warningRight}
                            </span>
                            <div className="redia-date text-center">
                                <h4>Appointments</h4>
                                <p> Lorem ipsum dolor sit amet, consectetur </p>
                                <Link to="/crm" className="btn btn-warning text-black">More Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="card d-flex">
                        <div className="card-header d-flex">
                            <div className="d-flex gap-2">
                                <h4 className="card-title">Top Departments</h4>
                            </div>
                            <Link className="fs-13 text-primary" to={"#"}> Add Departments {SVGICON.plus2} </Link>
                        </div>
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col-lg-7 col-md-6 col-sm-6">
                                    <div id="overview-chart">
                                        <ProductOverviewChart2 />
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-6 col-sm-6">
                                    <div className="title">
                                        <h5 className="mb-0 fs-15">Total Departments</h5>
                                        <h4 className=" text-primary fs-20">27</h4>
                                    </div>
                                    <div>
                                        <p className="mb-2 font-w500">Overview</p>
                                        <ul>
                                            {productoverviewchartcard2.map((item, i) => (
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
            </div>
        </>
    )
}
export default Medical