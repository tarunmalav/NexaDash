import { Dropdown } from "react-bootstrap"
import { SVGICON } from "../../constant/Theme"
import { useState } from "react";
import { Link } from "react-router-dom"; 
const analyticscard = [
    { title: "Sales", price: "$420", paragraph: "Total Sales", },
    { title: "Invoice", price: "$1200", paragraph: "Send Invoices Total", },
    { title: "Quotes", price: "20", paragraph: "Quotes Send", },
    { title: "Contacts", price: "40k", paragraph: "Total Contacts", },
    { title: "New Lead", price: "1.2k", paragraph: "Total New Lead", },
    { title: "New Clients", price: "227", paragraph: "Total New Clients", },
    { title: "Repeat Clients", price: "750", paragraph: "Total Repeat Clients", },
    { title: "Order", price: "$420", paragraph: "Total Order", },
]
const  AnalyticsDropdown = () => {
     const [selectedOption, setSelectedOption] = useState("30 Days");
    return(
        <>
        <Dropdown className="c-pointer default-select style-2 fs-13 font-w500">
            <Dropdown.Toggle as="div" className="nav-link">
                {selectedOption}
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu dropdown-menu-end" align="end">
                <Dropdown.Item onClick={() => setSelectedOption("30 Days")}>30 Days</Dropdown.Item>
                <Dropdown.Item onClick={() => setSelectedOption("20 Days")}>20 Days</Dropdown.Item>
                <Dropdown.Item onClick={() => setSelectedOption("15 Days")}>15 Days</Dropdown.Item>
                <Dropdown.Item onClick={() => setSelectedOption("10 Days")}>10 Days</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </>
    )
} 

function AnalyticsData() { 
    return (
        <>
            {analyticscard.map((item, i) => (
                <div className="col-lg-3 col-sm-4 col-6" key={i}>
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                                <div>
                                    <h6 className="mb-0 fs-15">{item.title}</h6>
                                </div>
                                <div>
                                    <Dropdown className="dropdown c-pointer" align="end">
                                        <Dropdown.Toggle as="div" className="nav-link i-false">
                                            {SVGICON.dropdownthreedots}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="dropdown-menu dropdown-menu-end" >
                                            <Dropdown.Item>Delete</Dropdown.Item>
                                            <Dropdown.Item>Edit</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div>
                                <h2 className="mb-0">{item.price}</h2>
                                <p className="fs-13 font-w500 mb-0">{item.paragraph}</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-5">
                                <p className="mb-0 me-1 fs-13 font-w500">Last</p> 
                                <AnalyticsDropdown />
                                <Link to={"#"}>
                                    {SVGICON.rightarrow}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default AnalyticsData

