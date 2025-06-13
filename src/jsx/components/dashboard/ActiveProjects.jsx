import   {useState, useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { IMAGES } from '../../constant/Theme';


const CountryTable = [
    {name: "Batman", name2 :'Liam Risher',profile: IMAGES.contact1, progresStyle: "primary", progresValue: "53%", assigne: '3', status: 'Inprogress',  duedate: '01 May 2025'},
    {name: "Mivy App", name2 :'Honey Risher', profile: IMAGES.contact2, progresStyle: "primary", progresValue: "50%", assigne: '3', status: 'Inprogress',  duedate: '08 June 2025'},
    {name: "Crypto App", name2 :'Ankites Risher', profile: IMAGES.contact1, progresStyle: "danger", progresValue: "45%", assigne: '2', status: 'Pending',  duedate: '14 Sep 2025'},
    {name: "Bender Project", name2 :'Oliver Noah', profile: IMAGES.contact8, progresStyle: "danger", progresValue: "30%", assigne: '3', status: 'Pending',  duedate: '22 Oct 2025'},
    {name: "Canary", name2 :'Elijah James', profile: IMAGES.contact2, progresStyle: "success", progresValue: "40%", assigne: '4', status: 'Completed',  duedate: '16 Nov 2025'},

    {name: "Canary", name2 :'Elijah James', profile: IMAGES.contact2, progresStyle: "success", progresValue: "40%", assigne: '4', status: 'Completed',  duedate: '16 Nov 2025'},
    {name: "Mivy App", name2 :'Honey Risher', profile: IMAGES.contact2, progresStyle: "primary", progresValue: "50%", assigne: '3', status: 'Inprogress',  duedate: '08 June 2025'},
    {name: "Batman", name2 :'Liam Risher',profile: IMAGES.contact1, progresStyle: "primary", progresValue: "53%", assigne: '3', status: 'Inprogress',  duedate: '01 May 2025'},
    {name: "Bender Project", name2 :'Oliver Noah', profile: IMAGES.contact8, progresStyle: "danger", progresValue: "30%", assigne: '3', status: 'Pending',  duedate: '22 Oct 2025'},
    {name: "Crypto App", name2 :'Ankites Risher', profile: IMAGES.contact1, progresStyle: "danger", progresValue: "45%", assigne: '2', status: 'Pending',  duedate: '14 Sep 2025'},

    {name: "Mivy App", name2 :'Honey Risher', profile: IMAGES.contact2, progresStyle: "primary", progresValue: "50%", assigne: '3', status: 'Inprogress',  duedate: '08 June 2025'},
    {name: "Batman", name2 :'Liam Risher',profile: IMAGES.contact1, progresStyle: "primary", progresValue: "53%", assigne: '3', status: 'Inprogress',  duedate: '01 May 2025'},
    {name: "Bender Project", name2 :'Oliver Noah', profile: IMAGES.contact8, progresStyle: "danger", progresValue: "30%", assigne: '3', status: 'Pending',  duedate: '22 Oct 2025'},
    {name: "Canary", name2 :'Elijah James', profile: IMAGES.contact2, progresStyle: "success", progresValue: "40%", assigne: '4', status: 'Completed',  duedate: '16 Nov 2025'},
    {name: "Crypto App", name2 :'Ankites Risher', profile: IMAGES.contact1, progresStyle: "danger", progresValue: "45%", assigne: '2', status: 'Pending',  duedate: '14 Sep 2025'},
];

const ActiveProjects = () => {
const sort = 5;
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
        setTimeout(()=>{

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
        },100)
    };
    return (
        <>
          <div className="card">
            <div className="card-body p-0">
                <div className="table-responsive active-projects shorting">
                
                    <div className="tbl-caption d-flex justify-content-between flex-wrap align-items-center">
                        <h4 className="heading mb-0">Active Projects</h4> 
                    </div>
                    <div id="projects-tbl_wrapper" className="dataTables_wrapper no-footer">
                        <table id="projects-tbl" className="table ItemsCheckboxSec dataTable no-footer mb-0">
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
                                    <th className="sorting c-pointer" onClick={() => handleSort('name')}>Project Name</th>
                                    <th className="sorting c-pointer" onClick={() => handleSort('name2')}>Project Lead</th>
                                    <th className="sorting c-pointer" onClick={() => handleSort('profile')}>Progress</th>
                                    <th className="sorting c-pointer" onClick={() => handleSort('progresStyle')}>Assignee</th>
                                    <th className="sorting c-pointer" onClick={() => handleSort('status')}>Status</th>
                                    <th className="sorting c-pointer" onClick={() => handleSort('duedate')}>Due Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((item, index)=>(
                                    <tr key={index}>
                                        <td className="sorting_1">
                                            <div className="form-check custom-checkbox">
                                                <input type="checkbox" onClick={() => chackboxFun()}
                                                    className="form-check-input" id={`projectBox${index+1}`} required="" 
                                                />
                                                <label className="form-check-label" htmlFor={`projectBox${index+1}`}></label>
                                            </div>
                                        </td>
                                        <td>{item.name}</td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <img src={item.profile} className="avatar rounded-circle" alt="" />
                                                <p className="mb-0 ms-2">{item.name2}</p>	
                                            </div>
                                        </td>
                                        <td className="pe-0">
                                            <div className="tbl-progress-box">
                                                <div className="progress">
                                                    <div 
                                                        className={`progress-bar bg-${item.progresStyle}`} 
                                                        style={{width: item.progresValue , height:"5px", borderRadius:"4px"}} >
                                                    </div>
                                                </div>
                                                <span className="text-primary">{item.progresValue}</span>
                                            </div>
                                        </td>
                                        <td className="pe-0">
                                            <div className="avatar-list avatar-list-stacked">
                                                {
                                                    item.assigne === '2' ?
                                                        <>
                                                            <img src={IMAGES.contact9} className="avatar rounded-circle" alt="" />
                                                            <img src={IMAGES.contact2} className="avatar rounded-circle" alt="" />                                                        
                                                        </>
                                                    
                                                    :

                                                    item.assigne === '3' ?
                                                        <>
                                                            <img src={IMAGES.contact5} className="avatar rounded-circle" alt="" />
                                                            <img src={IMAGES.contact6} className="avatar rounded-circle" alt="" />
                                                            <img src={IMAGES.contact7} className="avatar rounded-circle" alt="" />
                                                        </>
                                                    
                                                    :
                                                    item.assigne === '4' ?
                                                        <>
                                                            <img src={IMAGES.contact9}className="avatar rounded-circle" alt="" />
                                                            <img src={IMAGES.contact8} className="avatar rounded-circle" alt="" />
                                                            <img src={IMAGES.contact7} className="avatar rounded-circle" alt="" />
                                                            <img src={IMAGES.contact6} className="avatar rounded-circle" alt="" />
                                                        </>
                                                    :

                                                    <img src={IMAGES.contact1} className="avatar rounded-circle" alt="" />
                                                    
                                                }
                                            </div>
                                        </td>
                                        <td className="pe-0">
                                            <span className={`badge light border-0 badge-${item.progresStyle}`}>{item.status}</span>
                                        </td>
                                        <td>
                                            <span>{item.duedate}</span>
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
        
        </>
    );
};

export default ActiveProjects;