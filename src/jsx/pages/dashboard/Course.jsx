import { useContext, useEffect, useState } from "react"
import { IMAGES } from "../../constant/Theme"
import ScoreActivityChart from "../../components/dashboard/ScoreActivityChart"
import LearningActivityChart from "../../components/dashboard/LearningActivityChart"
import ProjectStatusBlogDonutChart from "../../components/dashboard/ProjectStatusBlogDonutChart" 
import DatePicker from "react-datepicker";
import { coursecarddata, mediaBlog } from "../../constant/Alldata"
import Dropdowndata from "../../components/dashboard/DropdownData"
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines'; 

function Course({ data = [4,7,4,9,5,6,8,3,1,3,5,6] }) {  
    useEffect(() => {
        const element = document.querySelector('.content-body')
        element.classList.add('finance-bg') 
    },[])
    const [startDate, setStartDate] = useState(new Date());

    return (
        <>
            <div className="row">
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card border-0 dlab-join-card h-auto">
                                <div className="card-body">
                                    <div className="dlab-media d-flex justify-content-between">
                                        <div className="dlab-content">
                                            <h4>Join Now and Get Discount Voucher Up To 20%</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt. </p>
                                        </div>
                                        <div className="dlab-img">
                                            <img src={IMAGES.egucationgirl} alt="" />
                                        </div>
                                        <div className="dlab-icon">
                                            <img src={IMAGES.calpng} alt="" className="cal-img" />
                                            <img src={IMAGES.bookpng} alt="" className="book-img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12 bt-order">
                            <div className="row">
                                {coursecarddata.map((data, i) => (
                                    <div className="col-xl-4 col-sm-6" key={i}>
                                        <div className={`dlab-cource ${data.class}`}>
                                            <div className="d-flex align-items-center">
                                                <span className="course-icon"> {data.svg}</span>
                                                <div className="ms-2">
                                                    <h4 className="mb-0">{data.span}</h4>
                                                    <span>{data.title}</span>
                                                </div>
                                            </div>
                                            <img src={data.image} alt="" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-xl-12">
                            <div className="card border-0 score-active">
                                <div className="card-header border-0 pb-2 flex-wrap">
                                    <h4 className="card-title">Score Activity</h4>
                                    <ul className="d-flex">
                                        <li>
                                            <svg className="me-2" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="1.5" y="1.5" width="9" height="9" rx="4.5" fill="white" stroke="var(--primary)" strokeWidth="3" />
                                            </svg> Last Month
                                        </li>
                                        <li>
                                            <svg className="me-2" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="1.5" y="1.5" width="9" height="9" rx="4.5" fill="white" stroke="#01bd9b" strokeWidth="3" />
                                            </svg> Last Month
                                        </li>
                                    </ul>
                                    <div className="d-flex align-items-center">
                                     <Dropdowndata />
                                    </div>
                                </div>
                                <div className="card-body pb-1 custome-tooltip pt-0">
                                    <div id="chartBar" className="chartBar">
                                        <ScoreActivityChart />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12">
                            <div className="card border-0 score-active">
                                <div className="card-header border-0 flex-wrap">
                                    <h4 className="card-title">Learning Activity</h4>
                                    <ul className="d-flex">
                                        <li>
                                            <svg className="me-2" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="1.5" y="1.5" width="9" height="9" rx="4.5" fill="white" stroke="var(--primary)" strokeWidth="3" />
                                            </svg> Last Month
                                        </li>
                                        <li>
                                            <svg className="me-2" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="1.5" y="1.5" width="9" height="9" rx="4.5" fill="white" stroke="var(--secondary)" strokeWidth="3" />
                                            </svg> Last Month
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-body pb-1 custome-tooltip style-1 py-0 ">
                                    <div id="activity">
                                        <LearningActivityChart />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card border-0">
                                <div className="card-header pb-0 border-0">
                                    <h4 className="card-title mb-0">Course Details</h4>
                                    <Dropdowndata />
                                </div>
                                <div className="card-body">
                                    <ProjectStatusBlogDonutChart />
                                    <div className="project-date">
                                        {mediaBlog.map((data, ind) => (
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
                        <div className="col-lg-12">
                            <div className="card border-0">
                                <div className="card-body card-calendar custom-datepicker p-0" style={{ display: "flex", justifyContent: "center" }}> 
                                    <DatePicker
                                        calendarClassName=" w-100"
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        inline
                                    /> 
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="card border-0">
                                <div className="card-header border-0 pb-0">
                                    <h4 className="card-title">Courses</h4>
                                </div>
                                <div className="card-body pt-0">
                                    <div className="d-flex align-items-center courses-chart flex-wrap">
                                        <span className="icon-box me-2 bg-success">
                                            <svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.00001 6.86665C9.09359 6.86611 9.18637 6.88405 9.27301 6.91944C9.35965 6.95483 9.43845 7.00697 9.5049 7.07288L12.3493 9.91732C12.4832 10.0512 12.5585 10.2328 12.5585 10.4222C12.5585 10.6116 12.4832 10.7932 12.3493 10.9271C12.2154 11.061 12.0338 11.1362 11.8445 11.1362C11.6551 11.1362 11.4735 11.061 11.3396 10.9271L9.00001 8.58043L6.66045 10.92C6.52441 11.0365 6.34943 11.0974 6.17046 11.0904C5.99149 11.0835 5.82172 11.0093 5.69507 10.8827C5.56843 10.7561 5.49424 10.5863 5.48732 10.4073C5.48041 10.2283 5.54129 10.0534 5.65778 9.91732L8.50223 7.07288C8.63468 6.9415 8.81345 6.86744 9.00001 6.86665Z"
                                                    fill="white" />
                                            </svg>
                                        </span>
                                        <h4 className="mb-0 me-auto">100</h4>
                                        <span><small className="text-secondary">+15% </small>than last year</span>
                                    </div>
                                    <div className="pt-line">
                                        <Sparklines data={data} height={130} width={300} className="peity-line">
                                            <SparklinesLine
                                            style={{
                                                stroke: "#18A594",
                                                strokeWidth: 4,
                                                fill: " rgba(1, 189, 155, 1)",
                                            }}
                                            />
                                            <SparklinesSpots />
                                        </Sparklines>
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

export default Course
