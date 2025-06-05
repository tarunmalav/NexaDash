import { Dropdown } from "react-bootstrap";
import Contactdata from "../components/dashboard/contactdata";
import { SVGICON } from "../constant/Theme";
import { Link } from "react-router-dom";
import { countrylistprogressbar } from "../constant/Alldata";  

function Eventsidebar2() {
    return (
        <>
            <div className="card sidebar-profile dz-scroll">
                <div className="card-header border-0 pt-4">
                    <h4 className="card-title">Recent Contact</h4>
                </div>
                <Contactdata gap="g-2" />
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h4 className="card-title">Active Users</h4>
                            <span>Last activity at 08 August 2025</span>
                        </div>
                        <Dropdown>
                            <Dropdown.Toggle as="a" className="nav-link i-false" role="button" data-bs-toggle="dropdown">
                                <div className="icon-box"> {SVGICON.setting2}</div>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                                <Link className="dropdown-item" to={"#"}>Delete</Link>
                                <Link className="dropdown-item" to={"#"}>Edit</Link>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div id="world-map" className="active-map">{SVGICON.worldmap}</div>
                    <div className="active-country dz-scroll">
                        <div>
                            {countrylistprogressbar.map((data, index) => (
                                <div className="country-list" key={index}>
                                    <img src={data.img} alt="" />
                                    <div className="progress-box mt-0">
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-0 c-name">{data.name}</p>
                                            <p className="mb-0">{data.width}</p>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar bg-primary" style={{ width: data.width, height: '5px', borderRadius: '4px' }} ></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Eventsidebar2;