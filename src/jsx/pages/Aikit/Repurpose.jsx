import { Link } from 'react-router-dom';
import { Tab, Nav } from 'react-bootstrap';
import MainContent from '../../components/aikit/MainContent';
import TopMenus from '../../components/aikit/TopMenus';
import FineTuneJob from '../../components/aikit/FineTuneJob';
import Prompts from '../../components/aikit/Prompts';
import { schedulerTable2 } from '../../constant/alldata';
import { SVGICON } from '../../constant/Theme';
import PageTitle from '../../layouts/PageTitle';
import { useEffect, useRef, useState } from 'react';

const numb = [2, 5, 7, 9, 11, 13, 15, 18, 19, 20, 23, 25];
function Repurpose() {
    const [data, setData] = useState(
		document.querySelectorAll("#projects-tbl_wrapper tbody tr")
	);
	const sort = 10;
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
    return (
        <>
            <PageTitle activeMenu="Repurpose" motherMenu="Home" pageContent={"Repurpose"}/>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <MainContent detail="This is a demo of AIKit plugin made for you to test the experience of using the plugin. "
                            subtitle="AIKit Auto Writer is a tool helps you write drafts quickly, but please review and edit before publishing for best results. This is not a substitute for human editing, but a drafting aid. Happy writing!"
                        />
                        <TopMenus id={3} />

                        <Tab.Container defaultActiveKey={'Create'}>
                            <div className="card h-auto">
                                <div className="card-body ai-tabs-1 py-2">
                                    <Nav as="ul" className="nav nav-tabs align-items-end">
                                        <Nav.Item as="li" >
                                            <Nav.Link className="nav-link" eventKey="Create" type="button">Create Fine-tune Job</Nav.Link >
                                        </Nav.Item>
                                        <Nav.Item as="li" >
                                            <Nav.Link eventKey="Job" type="button" >Jobs<span className="badge badge-circle badge-light light ms-2">5</span></Nav.Link >
                                        </Nav.Item>
                                    </Nav>
                                </div>
                            </div>
                            <Tab.Content>
                                <Tab.Pane eventKey={'Create'}>
                                    <div className="row">
                                        <div className="col-xl-4">
                                            <FineTuneJob />
                                        </div>
                                        <div className="col-xl-8">
                                            <Prompts />
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey={'Job'}>
                                    <div className="card">
                                        <div className="card-body">
                                            <div id="employee-tbl_wrapper" className="table-responsive dataTables_wrapper active-projects style-1">
                                                <table id="projects-tbl_wrapper" className="table dataTable dataTables_wrapper no-footer mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th>URL</th>
                                                            <th>Job Type</th>
                                                            <th>Keywords</th>
                                                            <th>Done</th>
                                                            <th>Had errors</th>
                                                            <th>Date created</th>
                                                            <th>Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {schedulerTable2.map((item, ind) => (
                                                            <tr key={ind}>
                                                                <td> <Link to={"#"}>www.wsj.com/articles/harvard-discriminates-against-middle-class-kids-legacy-admissions-court-85cf4503</Link></td>
                                                                <td> URL </td>
                                                                <td>-</td>
                                                                <td>
                                                                    {
                                                                        numb.includes(ind) ?
                                                                            <span className="badge badge-success">Yes</span>
                                                                            :
                                                                            <span className="badge badge-light">No</span>
                                                                    }
                                                                </td>
                                                                <td><span className="badge badge-light">No</span></td>
                                                                <td>5:50 am July 11, 2023</td>
                                                                <td className="text-nowrap">
                                                                    <Link to={"#"} className="btn btn-primary light btn-sharp">
                                                                        {SVGICON.blueeyebox}
                                                                    </Link>{" "}
                                                                    <Link to={"#"} className="btn btn-danger light btn-sharp">
                                                                        {SVGICON.reddelete}
                                                                    </Link>
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
                                id="example2_paginate"
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
                                        className={`paginate_button  ${
                                            activePag.current === i ? "current" : ""
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
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Repurpose;