import { Fragment } from "react";
import { SVGICON } from "../../constant/Theme";
import { Link } from "react-router-dom";
import ProfileOverviewCard from "../../components/profile/ProfileOverviewCard";
import { adsCradBlog } from "../../constant/alldata";
import PageTitle from "../../layouts/PageTitle";

function ProfileCampaigns() {
    return (
        <Fragment>
            <PageTitle activeMenu="Campaigns" motherMenu="Home" pageContent="Campaigns"/>
            <div className="container">
                <div className="card profile-overview profile-overview-wide">
                    <ProfileOverviewCard activePage="campaigns" />
                </div>
                <div className="tab-content" id="tabContentMyProfileBottom">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h5 className="mb-0">My Campaigns</h5>
                                <div className="d-flex align-items-center">
                                    <Link to={"#"} className="btn btn-primary btn-sm ms-2">+ Add Campaign</Link>
                                </div>
                            </div>
                        </div>
                        {adsCradBlog.map((elem, ind) => (
                            <div className="col-xl-4 col-sm-6" key={ind}>
                                <div className="card overflow-hidden">
                                    <div className="card-body">
                                        <div className="p-2">
                                            <div className="d-flex justify-content-between mb-4">
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar avatar-md d-flex align-items-center justify-content-center">
                                                        <img src={elem.logo} width="35" alt="" />
                                                    </div>
                                                    <h3 className="ms-3 fs-16 text-dark">{elem.title}</h3>
                                                </div>
                                                <button type="button" className="btn btn-light btn-icon-xxs tp-btn fs-18 align-self-start"><i className="bi bi-grid" /></button>
                                            </div>
                                            <h2 className="fw-semibold pt-1">{elem.digit}</h2>
                                            <p className="mb-0">
                                                {elem.status === "success" ?
                                                    SVGICON.arrowupgreen
                                                    :
                                                    SVGICON.arrowdownred
                                                }
                                                <span className={`me-1 text-${elem.status}`}> {elem.percent} </span>
                                                {elem.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default ProfileCampaigns;