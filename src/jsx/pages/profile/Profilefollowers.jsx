import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import ProfileOverviewCard from "../../components/profile/ProfileOverviewCard";
import { artCardData } from "../../constant/Alldata";
import PageTitle from "../../layouts/PageTitle";

function ProfileFollowers() {
    const [active, setActive] = useState(new Array(artCardData.length).fill(false));
    const handleclick = (index) => {
        setActive(prev => {
            const news = [...prev];
            news[index] = !news[index];
            return news;
        });
    }

    return (
        <Fragment>
            <PageTitle activeMenu="Followers" motherMenu="Home" pageContent={"Followers"} />
            <div className="container">
                <div className="card profile-overview profile-overview-wide">
                    <ProfileOverviewCard activePage="followers" />
                </div>
                <div className="tab-content">
                    <div className="row">
                        {artCardData.map((item, ind) => (
                            <div className="col-xl-4 col-sm-6" key={ind}>
                                <div className="card">
                                    <div className="card-body text-center p-4 followdeal">
                                        <div className="mx-auto d-inline-block position-relative mb-3">
                                            {item.text ?
                                                <div className={` avatar avatar-lg  text-${item.textbg} rounded-circle mx-auto d-flex align-items-center justify-content-center bg-${item.textbg}-light`}>{item.textalpha}</div>
                                                :
                                                <img src={item.image} alt="avat" className="rounded-circle avatar avatar-lg style-1" />
                                            }
                                            <span className="fa fa-circle bored border-light text-success position-absolute bottom-0 end-0 mb-0 me-1 fs-12"></span>
                                        </div>
                                        <div className="media-body mb-4">
                                            <h4 className="mb-0">
                                                <Link to="#" className="text-black">{item.name}</Link>
                                            </h4>
                                            <p className="mb-0 fs-15">Art Director at DexignLab.</p>
                                        </div>
                                        <div className="d-flex justify-content-center px-3">
                                            <div className="bg-light rounded px-3 py-2 text-start mx-2 flex-grow-1 followdealin">
                                                <h6 className="mb-0 text-black">$12,500.00</h6>
                                                <span className="fs-13">Avg. Deal</span>
                                            </div>
                                            <div className="bg-light rounded px-3 py-2 text-start mx-2 flex-grow-1 followdealin">
                                                <h6 className="mb-0 text-black">$150,500.00</h6>
                                                <span className="fs-13">Deals</span>
                                            </div>
                                        </div>
                                        { }
                                        <button type="button" onClick={() => handleclick(ind)} className={`btn btn-info btn-follow me-1 mt-4 ${active[ind] ? 'active' : ''}`} >
                                            <i className={`la me-1 fs-14 ${active[ind] ? 'la-check' : 'la-user'}`} />
                                            {`${active[ind] ? 'Following' : 'Follow'}`}
                                        </button>
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
export default ProfileFollowers;