import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IMAGES, SVGICON } from '../../constant/Theme';
import { Dropdown } from 'react-bootstrap';
import Dropdowndata2 from './DropdownData2';

const tableData = [
    { name: "#592270", name2: 'William Risher', city: "In SA", profile: IMAGES.contact1, progresStyle: "danger", status: 'cancel', },
    { name: "#592269", name2: 'Oliver Noah', city: "In UK", profile: IMAGES.contact2, progresStyle: "warning", status: 'Inprogress', },
    { name: "#592271", name2: 'James', city: "In AU", profile: IMAGES.contact1, progresStyle: "info", status: 'Pending', },
    { name: "#592273", name2: 'Lucas', city: "In UA", profile: IMAGES.contact8, progresStyle: "success", status: 'success', },
    { name: "#592271", name2: 'Elijah James', city: "In AU", profile: IMAGES.contact2, progresStyle: "success", status: 'success', },
    { name: "#592268", name2: 'Donald Risher', city: "In USA", profile: IMAGES.contact2, progresStyle: "success", status: 'success', },
];

const InvoiceList = () => {
    const [data, setData] = useState(
        document.querySelectorAll("#projects-tbl_wrapper tbody tr")
    );
    const sort = 5;
    const activePag = useRef(0);
    const [test, settest] = useState(0);
    const chageData = (frist, sec) => {
        for (var i = 0; i < data.length; ++i) {
            if (i >= frist && i < sec) {
                data[i].classList.remove("d-none");
            } else {
                data[i].classList.add("d-none");
            }
        }
    };

    useEffect(() => {
        setData(document.querySelectorAll("#projects-tbl_wrapper tbody tr"));
    }, [test]);

    activePag.current === 0 && chageData(0, sort);
    let paggination = Array(Math.ceil(data.length / sort))
        .fill()
        .map((_, i) => i + 1);
    const onClick = (i) => {
        activePag.current = i;
        chageData(activePag.current * sort, (activePag.current + 1) * sort);
        settest(i);
    };

    const chackboxFun = (type) => {
        setTimeout(() => {

            const chackbox = document.querySelectorAll(".sorting_1 input");
            const motherChackBox = document.querySelector(".sorting_asc input");
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
        }, 100)
    };
    return (
        <>
            <div className="card">
                <div className="card-header border-0 pb-0">
                    <h4 className="card-title">Invoice List</h4>
                    <div className="d-flex align-items-center gap-2">
                        <span className="fs-12 font-w600">SHORT BY</span>
                        <Dropdowndata2 />
                    </div>
                </div>
                <div className="card-body py-0">
                    <div className="table-responsive invoice-list shorting">
                        <div id="projects-tbl_wrapper" className='dataTables_wrapper no-footer'>
                            <table id="projects-tbl" className="table ItemsCheckboxSec dataTable no-footer mb-0 ">
                                <thead>
                                    <tr>
                                        <th className="sorting_asc" >
                                            <div className="form-check custom-checkbox ms-0">
                                                <input type="checkbox" className="form-check-input checkAllInput" required=""
                                                    onClick={() => chackboxFun("all")}
                                                />
                                                <label className="form-check-label" htmlFor="checkAll"></label>
                                            </div>
                                        </th>
                                        <th className='c-pointer'>INVOICE ID</th>
                                        <th className='c-pointer'>CLIENT</th>
                                        <th className='c-pointer'>CONTACT</th>
                                        <th className='c-pointer'>DATE</th>
                                        <th className='c-pointer'>STATUS</th>
                                        <th className='c-pointer'>ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData.map((item, index) => (
                                        <tr key={index}>
                                            <td className="sorting_1">
                                                <div className="form-check custom-checkbox">
                                                    <input type="checkbox" onClick={() => chackboxFun()}
                                                        className="form-check-input" id={`projectBox${index + 1}`} required=""
                                                    />
                                                    <label className="form-check-label" htmlFor={`projectBox${index + 1}`}></label>
                                                </div>
                                            </td>
                                            <td><span className="font-w500 fs-12 text-secondary">{item.name}</span></td>
                                            <td>
                                                <div className="d-flex align-items-center table-user">
                                                    <img src={item.profile} className="avatar avatar-sm rounded-circle" alt="" />
                                                    <div className="ms-2 text-start">
                                                        <p className="mb-0">{item.name2}</p>
                                                        <small>{item.city}</small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>+00 123 456 7890</td>
                                            <td>20 March 2025</td>
                                            <td><span className={`badge badge-${item.progresStyle} light border-0`}>{item.status}</span></td>
                                            <td>
                                                <Dropdown className="dropdown c-pointer">
                                                    <Dropdown.Toggle as="div" className="nav-link i-false">
                                                        {SVGICON.dropdownthreedots}
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="dropdown-menu dropdown-menu-end" align="start">
                                                        <Dropdown.Item>Edit</Dropdown.Item>
                                                        <Dropdown.Item>Delete</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                            <div className="d-sm-flex text-center justify-content-between align-items-center">
                                <div className="dataTables_info">
                                    Showing {activePag.current * sort + 1} to{" "}
                                    {data.length > (activePag.current + 1) * sort
                                        ? (activePag.current + 1) * sort
                                        : data.length}{" "}
                                    of {data.length} entries
                                </div>
                                <div
                                    className="dataTables_paginate paging_simple_numbers"
                                    id="projects-tbl_paginate"
                                >
                                    <Link
                                        className="paginate_button previous disabled"
                                        to="#"
                                        onClick={() =>
                                            activePag.current > 0 &&
                                            onClick(activePag.current - 1)
                                        }
                                    >
                                        <i className="fa-solid fa-angle-left" />
                                    </Link>
                                    <span>
                                        {paggination.map((number, i) => (
                                            <Link
                                                key={i}
                                                to="#"
                                                className={`paginate_button  ${activePag.current === i ? "current" : ""
                                                    } `}
                                                onClick={() => onClick(i)}
                                            >
                                                {number}
                                            </Link>
                                        ))}
                                    </span>
                                    <Link
                                        className="paginate_button next"
                                        to="#"
                                        onClick={() =>
                                            activePag.current + 1 < paggination.length &&
                                            onClick(activePag.current + 1)
                                        }
                                    >
                                        <i className="fa-solid fa-angle-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default InvoiceList;