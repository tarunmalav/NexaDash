import { useState } from "react"
import { Link } from "react-router-dom"
import { Modal } from "react-bootstrap"
import { IMAGES, SVGICON } from "../../constant/Theme"
import IncomeStatisticsChart from "../../components/dashboard/IncomeStatisticsChart"
import PieChart1 from "../../components/dashboard/PieChart1"
import EarningChart from "../../components/dashboard/EarningChart"
import ChartTimeline from "../../components/dashboard/ChartTimeline"
import NewExperience from "../../components/dashboard/NewExperience"
import NewCustomers from "../../components/dashboard/NewCustomers"
import InvoiceList from "../../components/dashboard/InvoiceList"
import Dropdowndata2 from "../../components/dashboard/DropdownData2"
import UpgradeModel from "../../components/dashboard/UpgradeModel"
import DonutChart from "../../components/WidgetBasic/DonutChart" 

function Sales() {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <div className="row">
                <div className="col-xl-6">
                    <div className="card">
                        <div className="card-body card-info">
                            <div className="card-data">
                                <h2> {SVGICON.Wavesvg} Hi Hanuman! </h2>
                                <span>it’s good to see you again.</span>
                                <h6>Clock your daily task & Schedules </h6>
                                <Link to={"#"} className="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setModalShow(true)}>
                                    <svg className="me-1" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.40761 14.1966H10.7174V10.7382H14.1966V9.42844H10.7174V5.80344H9.40761V9.42844H5.80344V10.7382H9.40761V14.1966ZM10.0062 18.4579C8.83676 18.4579 7.73925 18.2365 6.71371 17.7938C5.68817 17.351 4.79123 16.7454 4.0229 15.9771C3.25456 15.2088 2.64901 14.3115 2.20625 13.2854C1.7635 12.2593 1.54213 11.1609 1.54213 9.99027C1.54213 8.81962 1.7635 7.72101 2.20625 6.69444C2.64901 5.66785 3.2543 4.77378 4.02211 4.01221C4.78992 3.25065 5.68702 2.64775 6.71338 2.2035C7.73975 1.75925 8.8384 1.53712 10.0093 1.53712C11.1802 1.53712 12.2792 1.75913 13.3062 2.20313C14.3331 2.64711 15.2273 3.24967 15.9886 4.01079C16.7499 4.77192 17.3526 5.66694 17.7967 6.69585C18.2408 7.72479 18.4629 8.82432 18.4629 9.99446C18.4629 11.1644 18.2408 12.2621 17.7965 13.2876C17.3523 14.3131 16.7493 15.2085 15.9878 15.9739C15.2262 16.7393 14.3313 17.3446 13.3029 17.7899C12.2746 18.2352 11.1757 18.4579 10.0062 18.4579ZM10.0104 17.0385C11.9624 17.0385 13.6218 16.3527 14.9885 14.9812C16.3552 13.6096 17.0385 11.9458 17.0385 9.98958C17.0385 8.0376 16.3565 6.37825 14.9924 5.01154C13.6283 3.64485 11.9633 2.9615 9.9975 2.9615C8.05079 2.9615 6.39145 3.64355 5.01948 5.00765C3.64749 6.37174 2.9615 8.0367 2.9615 10.0025C2.9615 11.9492 3.64728 13.6086 5.01883 14.9805C6.39039 16.3525 8.05425 17.0385 10.0104 17.0385Z" fill="#6F767E" />
                                    </svg>
                                    Add Task</Link>
                            </div>
                            <img src={IMAGES.lightpic} className="light-pic" alt="" />
                            <img src={IMAGES.darkpic} className="dark-pic" alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                    <div className="card">
                        <div className="card-header border-0 statistics">
                            <h4 className="card-title">income statistics </h4>
                            <span className="badge">+10%</span>
                        </div>
                        <div className="card-body pb-0 custome-tooltip" style={{ position: "relative" }}>
                            <div id="chartBar" className="chartBar">
                                <IncomeStatisticsChart />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 custom-responsive">
                    <div className="card">
                        <div className="card-header border-0 pb-0 team-payment">
                            <h4 className="card-title">team <br />payments</h4>
                            <div className="icon-box box-hover">
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.5 22.5C13.6 22.5 14.5 21.6 14.5 20.5H10.5C10.5 21.6 11.39 22.5 12.5 22.5ZM18.5 16.5V11.5C18.5 8.43 16.86 5.86 14 5.18V4.5C14 3.67 13.33 3 12.5 3C11.67 3 11 3.67 11 4.5V5.18C8.13 5.86 6.5 8.42 6.5 11.5V16.5L4.5 18.5V19.5H20.5V18.5L18.5 16.5Z" fill="#111111" />
                                </svg>
                            </div>
                        </div>
                        <div className="card-body pt-3">
                            <span className="d-flex">
                                <svg className="me-1" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1903 13.875C10.6801 13.875 10.25 13.6989 9.90003 13.3466C9.55003 12.9943 9.37503 12.563 9.37503 12.0528C9.37503 11.5426 9.55117 11.1125 9.90346 10.7625C10.2557 10.4125 10.687 10.2375 11.1972 10.2375C11.7074 10.2375 12.1375 10.4136 12.4875 10.7659C12.8375 11.1182 13.0125 11.5495 13.0125 12.0597C13.0125 12.5699 12.8364 13 12.4841 13.35C12.1318 13.7 11.7006 13.875 11.1903 13.875ZM3.41538 16.6121C3.07039 16.6121 2.77123 16.4854 2.51791 16.2321C2.2646 15.9788 2.13794 15.6796 2.13794 15.3347V3.79035C2.13794 3.44414 2.2646 3.14393 2.51791 2.88973C2.77123 2.63552 3.07039 2.50842 3.41538 2.50842H4.59378V1.38342H5.88875V2.50842H12.1113V1.38342H13.4063V2.50842H14.5847C14.9309 2.50842 15.2311 2.63552 15.4853 2.88973C15.7395 3.14393 15.8666 3.44414 15.8666 3.79035V15.3347C15.8666 15.6796 15.7395 15.9788 15.4853 16.2321C15.2311 16.4854 14.9309 16.6121 14.5847 16.6121H3.41538ZM3.41538 15.3347H14.5847V7.3125H3.41538V15.3347ZM3.41538 6.1875H14.5847V3.79035H3.41538V6.1875Z" fill="var(--primary)" />
                                </svg>
                                14 July Approval
                            </span>
                            <div className="avatar-list avatar-list-stacked pa-top">
                                <img src={IMAGES.pic1} className="avatar avatar-md rounded-circle" alt="" />
                                <img src={IMAGES.pic2} className="avatar avatar-md rounded-circle" alt="" />
                                <img src={IMAGES.pic3} className="avatar avatar-md rounded-circle" alt="" />
                                <span className="avatar avatar-md rounded-circle bg-red">14+</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                    <div className="card bg-info">
                        <div className="card-header border-0 pb-0">
                            <div>
                                <h4 className="card-title text-white">Refferals</h4>
                                <span className="text-white">Last 30 days Refferals</span>
                            </div>
                        </div>
                        <div className="card-body pb-0" style={{ position: "relative" }}>
                            <div id="pieChart1">
                                <PieChart1 />
                            </div>
                            <div className="chart-amount">
                                <div className="d-flex align-items-center justify-content-between chart-data space-bottom">
                                    <h5>25%</h5>
                                    <h5>29%</h5>
                                </div>
                                <div className="d-flex align-items-center justify-content-between chart-data">
                                    <h5>33%</h5>
                                    <h5>13%</h5>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer border-0 pt-0">
                            <div className="d-flex justify-content-between mb-2">
                                <div className="chart-date">
                                    <svg className="me-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="16" height="16" rx="4" fill="#7BDFFF" />
                                    </svg>
                                    By Email
                                </div>
                                <div className="chart-date">
                                    <svg className="me-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="16" height="16" rx="4" fill="#FFFFFF" />
                                    </svg>
                                    By Phone
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="chart-date">
                                    <svg className="me-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="16" height="16" rx="4" fill="#B4EDFF" />
                                    </svg>
                                    On Site
                                </div>
                                <div className="chart-date">
                                    <svg className="me-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="16" height="16" rx="4" fill="#018DB9" />
                                    </svg>
                                    By Agent
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-md-6">
                    <div className="card overflow-hidden">
                        <div className="card-header border-0 pb-0">
                            <h4 className="card-title">Revenue Updates</h4>
                            <Dropdowndata2 />
                        </div>
                        <div className="card-body py-0  custome-tooltip">
                            <div id="earningChart">
                                <EarningChart />
                            </div>
                        </div>
                    </div>
                </div>
                <UpgradeModel />
                <div className="col-xl-3 col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-media d-flex align-items-center justify-content-between">
                                <div className="media-data">
                                    <span>Clients Added</span>
                                    <h4>137+</h4>
                                    <span className="text-nowrap fs-12">
                                        {SVGICON.Uptreding}
                                        <small className="text-success">15+</small>
                                        since last week
                                    </span>
                                </div>
                                <DonutChart value="62" backgroundColor="rgba(240, 151, 68, 1)" backgroundColor2="rgba(240, 151, 68, 0.20)" innerRadius="25" radius="6" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-media d-flex justify-content-between">
                                <div className="media-data">
                                    <span>Tasks Not Finished</span>
                                    <h4 className="mb-0">17</h4>
                                </div>
                                <div className="icon-box box-hover">
                                    <Link to={"#"} className="" onClick={() => setModalShow(true)} >
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.40759 14.1965H10.7174V10.7382H14.1966V9.42842H10.7174V5.80342H9.40759V9.42842H5.80343V10.7382H9.40759V14.1965ZM10.0062 18.4579C8.83675 18.4579 7.73924 18.2365 6.7137 17.7937C5.68816 17.351 4.79122 16.7454 4.02289 15.9771C3.25455 15.2088 2.649 14.3115 2.20624 13.2854C1.76349 12.2593 1.54211 11.1609 1.54211 9.99026C1.54211 8.8196 1.76349 7.72099 2.20624 6.69442C2.649 5.66784 3.25429 4.77376 4.02209 4.01219C4.78991 3.25064 5.687 2.64773 6.71336 2.20348C7.73974 1.75923 8.83839 1.53711 10.0093 1.53711C11.1802 1.53711 12.2792 1.75911 13.3062 2.20311C14.3331 2.6471 15.2273 3.24965 15.9886 4.01078C16.7499 4.7719 17.3526 5.66692 17.7967 6.69584C18.2408 7.72477 18.4629 8.8243 18.4629 9.99444C18.4629 11.1644 18.2407 12.2621 17.7965 13.2876C17.3522 14.3131 16.7493 15.2085 15.9878 15.9739C15.2262 16.7392 14.3313 17.3446 13.3029 17.7899C12.2746 18.2352 11.1757 18.4579 10.0062 18.4579ZM10.0104 17.0385C11.9624 17.0385 13.6217 16.3527 14.9884 14.9812C16.3551 13.6096 17.0385 11.9457 17.0385 9.98957C17.0385 8.03758 16.3564 6.37824 14.9923 5.01153C13.6282 3.64483 11.9633 2.96148 9.99749 2.96148C8.05078 2.96148 6.39144 3.64353 5.01947 5.00763C3.64748 6.37173 2.96149 8.03668 2.96149 10.0025C2.96149 11.9492 3.64727 13.6085 5.01882 14.9805C6.39038 16.3525 8.05424 17.0385 10.0104 17.0385Z" fill="#6F767E" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div className="progress-box">
                                <div className="d-flex justify-content-between">
                                    <p className="mb-0 fs-12">Complete Task</p>
                                    <p className="mb-0 fs-14 font-w600 text-black">60%</p>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-success" style={{ width: "50%", height: "5px", borderRadius: "4px" }} role="progressbar"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-media d-flex">
                                <div className="media-data">
                                    <span>Page views</span>
                                    <h4>37,543</h4>
                                    <span className="text-success fs-12"> {SVGICON.Uptreding} 09.52 </span>
                                </div>
                                <div id="NewCustomers">
                                    <NewCustomers />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                    <div className="card overflow-hidden">
                        <div className="card-body p-0">
                            <div className="card-media d-flex justify-content-between page-view">
                                <div className="media-data">
                                    <span>Page views</span>
                                    <h4 className="mb-0">37,543</h4>
                                </div>
                                <span className="text-danger fs-12"> {SVGICON.Downtrending} 09.52 </span>
                            </div>
                            <div id="NewExperience">
                                <NewExperience />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-9">
                    <InvoiceList />
                </div>
                <div className="col-xl-3">
                    <div className="card bg-secondary h-auto">
                        <div className="card-header border-0">
                            <div>
                                <h4 className="card-title text-white">Statistics</h4>
                                <span className="text-white op-1">Last 30 days Income</span>
                            </div>
                        </div>
                        <div className="card-body custome-tooltip pb-0">
                            <div id="chartTimeline">
                                <ChartTimeline />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={modalShow} className="modal fade" id="replyModal" centered onHide={() => setModalShow(false)}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel-2">Add new task</h5>
                        <button type="button" className="btn-close" onClick={() => setModalShow(false)} >
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <label className="form-label d-block mb-2">Summary:</label>
                            <input type="text" className="form-control w-100 mb-3" placeholder="As a user i need set m" />

                            <label className="form-label d-block mb-2">Assigned:</label>
                            <input type="text" className="form-control w-100 mb-3" placeholder="Only my task" />

                            <label className="form-label d-block mb-2">Tag:</label>
                            <input type="text" className="form-control w-100 mb-3" placeholder="Add tags" />

                            <label className="form-label d-block mb-2">Description:</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </form>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger light" onClick={() => setModalShow(false)}>Close</button>
                        <button type="button" className="btn btn-primary light">Save changes</button>
                    </div>
                </div>
            </Modal>
        </>
    )
}
export default Sales