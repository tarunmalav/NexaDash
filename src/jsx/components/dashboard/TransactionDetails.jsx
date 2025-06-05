import { Dropdown } from "react-bootstrap";
import { SVGICON } from "../../constant/theme"
import { useState } from "react";
import { Link } from "react-router-dom";
export const hometabledata = [
    { id: 129361171, client: 'Rolex leo', payment: <span className="text-success">$376.24</span>, status: <span className="badge badge-primary light border-0">Completed</span>, },
    { id: 129361171, client: 'Rolex leo', payment: <span className="text-success">$376.24</span>, status: <span className="badge badge-primary light border-0">Completed</span>, },
    { id: 129361178, client: 'Jaction leo', payment: <span className="text-success">$376.24</span>, status: <span className="badge badge-primary light border-0">Completed</span>, },
    { id: 129361178, client: 'Jaction leo', payment: <span className="text-success">$376.24</span>, status: <span className="badge badge-primary light border-0">Completed</span>, },
    { id: 129361179, client: 'Rolex leo', payment: <span className="text-warning">$254.24</span>, status: <span className="badge badge-warning light border-0">Inprogress</span>, },
    { id: 129361179, client: 'Rolex leo', payment: <span className="text-warning">$254.24</span>, status: <span className="badge badge-warning light border-0">Inprogress</span>, },
    { id: 129361179, client: 'Meview Otis', payment: <span className="text-danger">$254.24</span>, status: <span className="badge badge-danger light border-0">Pending</span>, },
    { id: 129361171, client: 'Rolex leo', payment: <span className="text-success">$376.24</span>, status: <span className="badge badge-primary light border-0">Completed</span>, },
    { id: 129361178, client: 'Jaction leo', payment: <span className="text-success">$376.24</span>, status: <span className="badge badge-primary light border-0">Completed</span>, },
]
function TransactionsDetails() {
    const chackboxFun = (type) => {
        setTimeout(() => {
            const motherChackBox = document.querySelector(".home-check");
            const chackbox = document.querySelectorAll(".home-check1");
            for (let i = 0; i < chackbox.length; i++) {
                const element = chackbox[i];
                if (type === "all") {
                    if (motherChackBox.checked) {
                        element.checked = true;
                    } else {
                        element.checked = false;
                    }
                } else {
                    if (!element.checked) {
                        motherChackBox.checked = false;
                        break;
                    } else {
                        motherChackBox.checked = true;
                    }
                }
            }
        }, 100);
    };
    const [data, setData] = useState([...hometabledata]);
    const [sortConfig, setSortConfig] = useState({ key: 'workstation', direction: 'ascending' });

    const sortData = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        const sortedData = [...data].sort((a, b) => {
            if (a[key] < b[key]) {
                return direction === 'ascending' ? -1 : 1;
            }
            if (a[key] > b[key]) {
                return direction === 'ascending' ? 1 : -1;
            }
            return 0;
        });
        setData(sortedData);
        setSortConfig({ key, direction });
    };
    return (
        <>
            <div className="card">
                <div className="card-header gap-2 flex-wrap">
                    <h5 className="mb-0">Transaction Details</h5>
                    <div className="d-flex align-items-center justify-content-between transaction flex-wrap">
                        <div className="input-group search-area style-1">
                            <span className="input-group-text"> <Link to={"#"}> 
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="6.6665" cy="6.66675" r="4" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.6665 9.66675L12.6665 12.6667" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link></span>
                            <input type="text" className="form-control" placeholder="Search" />
                        </div>
                        <Link to={"#"} className="btn"> {SVGICON.tablesort} Sort By </Link>
                        <Link to={"#"} className="btn"> {SVGICON.tablefilter} Filter </Link>
                    </div>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <div id="transaction-tbl_wrapper" className="dataTables_wrapper no-footer">
                            <table id="transaction-tbl" className="table ItemsCheckboxSec dataTable no-footer">
                                <thead className="border-self">
                                    <tr>
                                        <th className=" c-pointer " onClick={() => sortData('id')}>
                                            <div className="form-check custom-checkbox">
                                                <input type="checkbox" className="form-check-input home-check" id="checkAll" onClick={() => chackboxFun("all")} />
                                                <label className="form-check-label" htmlFor="checkAll"></label>
                                            </div>
                                            {" "}<span>ID</span>
                                        </th>
                                        <th className=" c-pointer" onClick={() => sortData('date')}>Date</th>
                                        <th className=" c-pointer" onClick={() => sortData('client')}>Client</th>
                                        <th className=" c-pointer" onClick={() => sortData('payment')}>Payment</th>
                                        <th className=" c-pointer" onClick={() => sortData('status')}>Status</th>
                                        <th className=" c-pointer" onClick={() => sortData('action')}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((data, index) => (
                                        <tr key={index}>
                                            <td className=" d-flex">
                                                <div className="form-check custom-checkbox">
                                                    <input type="checkbox" className="form-check-input home-check1" required onClick={() => chackboxFun()} />
                                                    <label className="form-check-label" htmlFor="customCheckBox3"></label>
                                                </div>
                                                {" "}<span>{data.id}</span>
                                            </td>
                                            <td> <p className="mb-0 ms-2">18 Feb 2025</p> </td>
                                            <td> <span>{data.client}</span> </td>
                                            <td> {data.payment} </td>
                                            <td className="pe-0"> {data.status} </td>
                                            <td>
                                                <Dropdown className="dropdown c-pointer ms-2" align="end">
                                                    <Dropdown.Toggle as="div" className="btn-link i-false custome-d">
                                                        {SVGICON.tableaction}
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="dropdown-menu dropdown-menu-end">
                                                        <Dropdown.Item href="#" className="dropdown-item">Delete</Dropdown.Item>
                                                        <Dropdown.Item href="#" className="dropdown-item">Edit</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TransactionsDetails