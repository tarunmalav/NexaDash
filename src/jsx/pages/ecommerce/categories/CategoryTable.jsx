import { Fragment, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../../../constant/Theme";
import { useState } from "react";
import PageTitle from "../../../layouts/PageTitle";

const CountryTable = [
    {
        products: 10,
        type: <span className="badge badge-sm badge-primary light">Automated</span>,
        category: <div className="d-flex align-items-center">
            <img src={IMAGES.category14} className="rounded-lg me-2" width="40" alt="" />
            <div>
                <h6 className="w-space-no mb-0 fs-14 font-w600">Air Conditioner </h6>
                <small>Our computers and tablets include all the big brands.</small>
            </div>
        </div>,
    },
    {
        products: 10,
        type: <span className="badge badge-sm badge-primary light">Automated</span>,
        category: <div className="d-flex align-items-center">
            <img src={IMAGES.category14} className="rounded-lg me-2" width="40" alt="" />
            <div>
                <h6 className="w-space-no mb-0 fs-14 font-w600">Air Conditioner </h6>
                <small>Our computers and tablets include all the big brands.</small>
            </div>
        </div>,
    },
    {
        products: 100,
        type: <span className="badge badge-sm badge-success light">Manual</span>,
        category: <div className="d-flex align-items-center">
            <img src={IMAGES.category8} className="rounded-lg me-2" width="40" alt="" />
            <div>
                <h6 className="w-space-no mb-0 fs-14 font-w600">laptop</h6>
                <small>Our computers and tablets include all the big brands.</small>
            </div>
        </div>,
    },
    {
        products: 10,
        type: <span className="badge badge-sm badge-primary light">Automated</span>,
        category: <div className="d-flex align-items-center">
            <img src={IMAGES.category14} className="rounded-lg me-2" width="40" alt="" />
            <div>
                <h6 className="w-space-no mb-0 fs-14 font-w600">Air Conditioner </h6>
                <small>Our computers and tablets include all the big brands.</small>
            </div>
        </div>,
    },
    {
        products: 100,
        type: <span className="badge badge-sm badge-success light">Manual</span>,
        category: <div className="d-flex align-items-center">
            <img src={IMAGES.category8} className="rounded-lg me-2" width="40" alt="" />
            <div>
                <h6 className="w-space-no mb-0 fs-14 font-w600">laptop</h6>
                <small>Our computers and tablets include all the big brands.</small>
            </div>
        </div>,
    },
    {
        products: 10,
        type: <span className="badge badge-sm badge-primary light">Automated</span>,
        category: <div className="d-flex align-items-center">
            <img src={IMAGES.category13} className="rounded-lg me-2" width="40" alt="" />
            <div>
                <h6 className="w-space-no mb-0 fs-14 font-w600">Fan</h6>
                <small>Our computers and tablets include all the big brands.</small>
            </div>
        </div>,
    },
    {
        products: 10,
        type: <span className="badge badge-sm badge-primary light">Automated</span>,
        category: <div className="d-flex align-items-center">
            <img src={IMAGES.category14} className="rounded-lg me-2" width="40" alt="" />
            <div>
                <h6 className="w-space-no mb-0 fs-14 font-w600">Air Conditioner </h6>
                <small>Our computers and tablets include all the big brands.</small>
            </div>
        </div>,
    },
    {
        products: 100,
        type: <span className="badge badge-sm badge-success light">Manual</span>,
        category: <div className="d-flex align-items-center">
            <img src={IMAGES.category8} className="rounded-lg me-2" width="40" alt="" />
            <div>
                <h6 className="w-space-no mb-0 fs-14 font-w600">laptop</h6>
                <small>Our computers and tablets include all the big brands.</small>
            </div>
        </div>,
    },
    {
        products: 10,
        type: <span className="badge badge-sm badge-primary light">Automated</span>,
        category: <div className="d-flex align-items-center">
            <img src={IMAGES.category13} className="rounded-lg me-2" width="40" alt="" />
            <div>
                <h6 className="w-space-no mb-0 fs-14 font-w600">Fan</h6>
                <small>Our computers and tablets include all the big brands.</small>
            </div>
        </div>,
    },
    {
        products: 10,
        type: <span className="badge badge-sm badge-primary light">Automated</span>,
        category: <div className="d-flex align-items-center">
            <img src={IMAGES.category14} className="rounded-lg me-2" width="40" alt="" />
            <div>
                <h6 className="w-space-no mb-0 fs-14 font-w600">Air Conditioner </h6>
                <small>Our computers and tablets include all the big brands.</small>
            </div>
        </div>,
    },
    {
        products: 100,
        type: <span className="badge badge-sm badge-success light">Manual</span>,
        category: <div className="d-flex align-items-center">
            <img src={IMAGES.category8} className="rounded-lg me-2" width="40" alt="" />
            <div>
                <h6 className="w-space-no mb-0 fs-14 font-w600">laptop</h6>
                <small>Our computers and tablets include all the big brands.</small>
            </div>
        </div>,
    },
    {
        products: 10,
        type: <span className="badge badge-sm badge-primary light">Automated</span>,
        category: <div className="d-flex align-items-center">
            <img src={IMAGES.category13} className="rounded-lg me-2" width="40" alt="" />
            <div>
                <h6 className="w-space-no mb-0 fs-14 font-w600">Fan</h6>
                <small>Our computers and tablets include all the big brands.</small>
            </div>
        </div>,
    },
]

function CategoryTable() {
    const sort = 10;
    const activePag = useRef(0);
    const [test, setTest] = useState(0);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
    const [tableData, setTableData] = useState([]);
    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const getSortedData = () => {
        let sorted = [...CountryTable];
        if (sortConfig.key) {
            sorted.sort((a, b) => {
                const aVal = a[sortConfig.key]?.toString().toLowerCase();
                const bVal = b[sortConfig.key]?.toString().toLowerCase();
                if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
                if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
                return 0;
            });
        }
        return sorted;
    };

    const updatePageData = () => {
        const sorted = getSortedData();
        const start = activePag.current * sort;
        const end = start + sort;
        setTableData(sorted.slice(start, end));
    };

    useEffect(() => {
        updatePageData();
    }, [sortConfig, test]);

    const totalPages = Math.ceil(CountryTable.length / sort);
    const paggination = Array.from({ length: totalPages }, (_, i) => i + 1);

    const onClick = (i) => {
        activePag.current = i;
        updatePageData();
        setTest(i);
    };
    const chackboxFun = (type) => {
        setTimeout(() => {
            const motherChackBox = document.querySelector(".product_order_single");
            const chackbox = document.querySelectorAll(".product_order");
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
    return (
        <Fragment>
            <PageTitle activeMenu="Ecommerce" motherMenu="Category" pageContent="Category Table" />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Category List</h4>
                                <Link to="/add-categary" className="btn btn-primary btn-sm">Add Category</Link>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <div className="dataTables_wrapper no-footer">
                                        <table id="projectlist" className="display dataTable no-footer">
                                            <thead>
                                                <tr style={{ borderBottom: "1px solid #e0e0e0" }}>
                                                    <th style={{ width: "50px" }} className="sorting">
                                                        <div className="form-check custom-checkbox checkbox-primary  me-3">
                                                            <input type="checkbox" className="form-check-input product_order_single" id="checkAll" required="" onClick={() => chackboxFun("all")} />
                                                            <label className="form-check-label" htmlFor="checkAll"></label>
                                                        </div>
                                                    </th>
                                                    <th className="sorting c-pointer" onClick={() => handleSort('products')} style={{ width: "460px" }}>Category</th>
                                                    <th className="sorting c-pointer" onClick={() => handleSort('type')}>Products</th>
                                                    <th className="sorting c-pointer" onClick={() => handleSort('category')}>Category Type</th>
                                                    <th className="sorting text-end c-pointer" >Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {tableData.map((item, index) => (
                                                    <tr key={index} style={{ borderBottom: "1px solid rgba(82, 79, 79, 0.3)" }}>
                                                        <td className="sorting_1">
                                                            <div className="form-check custom-checkbox checkbox-primary me-3">
                                                                <input type="checkbox" className="form-check-input product_order" id="customCheckBox2" required="" onClick={() => chackboxFun()} />
                                                                <label className="form-check-label" htmlFor="customCheckBox2"></label>
                                                            </div>
                                                        </td>
                                                        <td style={{ width: "30%" }}> {item.category}</td>
                                                        <td>{item.products}</td>
                                                        <td>{item.type}</td>
                                                        <td className="text-end">
                                                            <div>
                                                                <Link to="#" className="btn btn-primary shadow  sharp me-1"><i className="fa fa-pencil" /></Link>
                                                                <Link to="#" className="btn btn-danger shadow  sharp"><i className="fa fa-trash" /></Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        <div className="d-sm-flex text-center justify-content-between align-items-center">
                                            <div className="dataTables_info">
                                                Showing {activePag.current * sort + 1} to{" "}
                                                {Math.min((activePag.current + 1) * sort, CountryTable.length)} of {CountryTable.length} entries
                                            </div>
                                            <div className="dataTables_paginate paging_simple_numbers" id="example2_paginate">
                                                <Link
                                                    className={`paginate_button previous ${activePag.current === 0 ? 'disabled' : ''}`}
                                                    to="#"
                                                    onClick={() => activePag.current > 0 && onClick(activePag.current - 1)}
                                                >
                                                    <i className="fa-solid fa-angle-left" />
                                                </Link>
                                                <span>
                                                    {paggination.map((number, i) => (
                                                        <Link
                                                            key={i}
                                                            to="#"
                                                            className={`paginate_button ${activePag.current === i ? "current" : ""}`}
                                                            onClick={() => onClick(i)}
                                                        >
                                                            {number}
                                                        </Link>
                                                    ))}
                                                </span>
                                                <Link
                                                    className={`paginate_button next ${activePag.current === totalPages - 1 ? 'disabled' : ''}`}
                                                    to="#"
                                                    onClick={() => activePag.current + 1 < totalPages && onClick(activePag.current + 1)}
                                                >
                                                    <i className="fa-solid fa-angle-right" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default CategoryTable;
