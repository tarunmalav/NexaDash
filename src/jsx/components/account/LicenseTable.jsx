import { Fragment, useEffect, useRef, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const licensesData = [
    { addclass: 'odd', status: "License", statusClass: "success", workstation: "DSI: Workstation 2", ip: "236.125.56.78", timeAgo: "2 mins ago", key: "fftt456765gjkkjhi83093985" },
    { addclass: 'even', status: "Unknown", statusClass: "danger", workstation: "ReXe: Workstation 29", ip: "236.125.56.78", timeAgo: "2 mins ago", key: "none" },
    { addclass: 'odd', status: "License", statusClass: "success", workstation: "RamenLC: Workstation 2", ip: "236.125.56.78", timeAgo: "2 mins ago", key: "none" },
    { addclass: 'even', status: "License", statusClass: "success", workstation: "Nest Five: Workstation 86", ip: "236.125.56.78", timeAgo: "2 mins ago", key: "fftt456765gjkkjhi83093985" },
    { addclass: 'odd', status: "Unknown", statusClass: "danger", workstation: "DSI: Workstation 3", ip: "236.125.56.78", timeAgo: "2 mins ago", key: "none" },
    { addclass: 'even', status: "License", statusClass: "success", workstation: "ReXe: Workstation 7", ip: "236.125.56.78", timeAgo: "2 mins ago", key: "fftt456765gjkkjhi83093985" },
    { addclass: 'odd', status: "To be Paid", statusClass: "warning", workstation: "Swedline: Workstation 54", ip: "236.125.56.78", timeAgo: "2 mins ago", key: "fftt456765gjkkjhi83093985" },
    { addclass: 'even', status: "License", statusClass: "success", workstation: "Swedline: Workstation 21", ip: "236.125.56.78", timeAgo: "2 mins ago", key: "fftt456765gjkkjhi83093985" },
    { addclass: 'odd', status: "License", statusClass: "success", workstation: "DSI: Workstation 320", ip: "236.125.56.78", timeAgo: "2 mins ago", key: "fftt456765gjkkjhi83093985" },
    { addclass: 'odd', status: "License", statusClass: "success", workstation: "Samsung LDE : Workstation 45", ip: "236.125.56.78", timeAgo: "2 mins ago", key: "fftt456765gjkkjhi83093985" },
    { addclass: 'odd', status: "License", statusClass: "success", workstation: "DSI: Workstation 320", ip: "236.125.56.78", timeAgo: "2 mins ago", key: "fftt456765gjkkjhi83093985" },
];

function LicenseTable() {
    const sort = 10;
    const activePag = useRef(0);
    const [test, setTest] = useState(0);
    const [copyText, setCopyText] = useState('');
    const [selectValue, setSelectValue] = useState('All Time');
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
    const [tableData, setTableData] = useState([]);

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        setCopyText(text);
    };

    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const getSortedData = () => {
        let sorted = [...licensesData];
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

    const totalPages = Math.ceil(licensesData.length / sort);
    const paggination = Array.from({ length: totalPages }, (_, i) => i + 1);

    const onClick = (i) => {
        activePag.current = i;
        updatePageData();
        setTest(i);
    };

    return (
        <Fragment>
            <div className="card">
                <div className="card-header border-0 py-3">
                    <h4 className="heading mb-0">License Usage</h4>
                    <div className="clearfix d-flex align-items-center">
                        <Dropdown>
                            <Dropdown.Toggle as="button" className="p-2 rounded d-flex align-items-center i-false">
                                {selectValue} <i className="fas fa-angle-down text-primary ms-1" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu align="end">
                                <Dropdown.Item onClick={() => setSelectValue("All Time")}> All Time </Dropdown.Item>
                                <Dropdown.Item onClick={() => setSelectValue("Week")}> Week </Dropdown.Item>
                                <Dropdown.Item onClick={() => setSelectValue("Month")}> Month </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <div className="card-body py-0">
                    <div className="table-responsive active-projects">
                        <div className="dataTables_wrapper no-footer" id="license_table">
                            <table className="table mb-4 table-striped-thead table-wide table-sm dataTable no-footer" id="tableLicenseUsage">
                                <thead>
                                    <tr>
                                        <th className="sorting c-pointer" onClick={() => handleSort("status")}>Status</th>
                                        <th className="sorting c-pointer" onClick={() => handleSort("workstation")}>Operator</th>
                                        <th className="sorting c-pointer" onClick={() => handleSort("ip")}>IP Address</th>
                                        <th className="sorting c-pointer" onClick={() => handleSort("timeAgo")}>Created</th>
                                        <th className="sorting c-pointer">API Keys</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData.map((item, index) => (
                                        <tr key={index} className={item.addclass}>
                                            <td><span className={`badge badge-sm light border-0 badge-${item.statusClass}`}>{item.status}</span></td>
                                            <td>{item.workstation}</td>
                                            <td>{item.ip}</td>
                                            <td>{item.timeAgo}</td>
                                            <td>
                                                <div className="select-text-wrap d-flex justify-content-between">
                                                    <div className="text-select-copy">{item.key}</div>
                                                    <button className="btn-select-text btn p-0 border-0 ms-4" onClick={() => handleCopy(item.key)}>
                                                        <i className="las la-copy fs-4" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="d-sm-flex text-center justify-content-between align-items-center">
                                <div className="dataTables_info">
                                    Showing {activePag.current * sort + 1} to{" "}
                                    {Math.min((activePag.current + 1) * sort, licensesData.length)} of {licensesData.length} entries
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
        </Fragment>
    );
}

export default LicenseTable;
