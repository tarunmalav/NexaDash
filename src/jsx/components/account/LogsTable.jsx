import { Fragment, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const CountryTable = [
    {
        country: "China",
        status: "OK",
        statusClass: "success",
        platform: "Chrome - Windows",
        ip: "236.125.56.78",
        timeAgo: "2 mins ago"
    },
    {
        country: "India",
        status: "ERROR",
        statusClass: "danger",
        platform: "Firefox - Windows",
        ip: "236.125.56.54",
        timeAgo: "20 mins ago"
    },
    {
        country: "United States",
        status: "ERROR",
        statusClass: "danger",
        platform: "Safari - Mac",
        ip: "236.125.56.78",
        timeAgo: "27 mins ago"
    },
    {
        country: "Indonesia",
        status: "OK",
        statusClass: "success",
        platform: "iOS - iPhone Pro",
        ip: "236.100.56.50",
        timeAgo: "40 mins ago"
    },
    {
        country: "Pakistan",
        status: "OK",
        statusClass: "success",
        platform: "Firefox - Windows",
        ip: "236.125.56.54",
        timeAgo: "48 mins ago"
    },
    {
        country: "Brazil",
        status: "ERROR",
        statusClass: "danger",
        platform: "Safari - Mac",
        ip: "236.125.56.78",
        timeAgo: "54 mins ago"
    },
    {
        country: "China",
        status: "OK",
        statusClass: "success",
        platform: "Chrome - Windows",
        ip: "236.125.56.78",
        timeAgo: "2 mins ago"
    },
    {
        country: "India",
        status: "ERROR",
        statusClass: "danger",
        platform: "Firefox - Windows",
        ip: "236.125.56.54",
        timeAgo: "20 mins ago"
    },
    {
        country: "United States",
        status: "ERROR",
        statusClass: "danger",
        platform: "Safari - Mac",
        ip: "236.125.56.78",
        timeAgo: "27 mins ago"
    },
    {
        country: "United States",
        status: "ERROR",
        statusClass: "danger",
        platform: "Safari - Mac",
        ip: "236.125.56.78",
        timeAgo: "27 mins ago"
    },
    {
        country: "Indonesia",
        status: "OK",
        statusClass: "success",
        platform: "iOS - iPhone Pro",
        ip: "236.100.56.50",
        timeAgo: "40 mins ago"
    },
    {
        country: "Pakistan",
        status: "OK",
        statusClass: "success",
        platform: "Firefox - Windows",
        ip: "236.125.56.54",
        timeAgo: "48 mins ago"
    }
];

function LogsTable() {
    const sort = 10;
    const activePag = useRef(0);
    const [test, setTest] = useState(0);

    const [selectValue, setSelectValue] = useState('All Time');
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
    return (
        <Fragment>
            <div className="dataTables_wrapper no-footer" id="applications-data">
                
                    <table id="tableLogs" className="table mb-4 table-striped-thead table-wide table-sm dataTable no-footer text-nowrap">
                        <thead>
                            <tr>
                                <th className="sorting c-pointer" onClick={() => handleSort('location')}>Location</th>
                                <th className="sorting c-pointer" onClick={() => handleSort('status')}>Status</th>
                                <th className="sorting c-pointer" onClick={() => handleSort('device')}>Device</th>
                                <th className="sorting c-pointer" onClick={() => handleSort('ip')}>IP Address</th>
                                <th className="text-end sorting c-pointer" onClick={() => handleSort('timeAgo')}>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((item, ind) => (
                                <tr key={ind}>
                                    <td className="sorting_1">{item.country}</td>
                                    <td><span className={`badge badge-sm light border-0 badge-${item.statusClass}`}>{item.status}</span></td>
                                    <td><Link to={"#"} className="text-primary">{item.platform}</Link></td>
                                    <td>{item.ip}</td>
                                    <td className="text-end">{item.timeAgo}</td>
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
        </Fragment>
    )
}
export default LogsTable;
