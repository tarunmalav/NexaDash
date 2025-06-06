import { useState } from "react";
import { IMAGES, SVGICON } from "../constant/Theme";
import { Dropdown, Nav, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
const transactions = [
	{ icon: IMAGES.bitcoinsvg, name: "Bitcoin", symbol: "BTC", time: "06:24:45 AM", amount: "+ $5,221", status: "Completed", statusClass: "success", },
	{ icon: IMAGES.ethereumsvg, name: "Ethereum", symbol: "ETH", time: "06:24:45 AM", amount: "+ $6,321", status: "Cancel", statusClass: "danger", },
	{ icon: IMAGES.bnpsvg, name: "BNB", symbol: "bnb", time: "07:25:45 AM", amount: "+ $8,221", status: "Cancel", statusClass: "danger", },
	{ icon: IMAGES.bitcoinsvg, name: "Bitcoin", symbol: "BTC", time: "06:24:45 AM", amount: "+ $4,321", status: "Completed", statusClass: "success", },
	{ icon: IMAGES.bitcoinsvg, name: "Bitcoin", symbol: "BTC", time: "06:24:45 AM", amount: "+ $3,123", status: "IN progress", statusClass: "warning", },
	{ icon: IMAGES.ethereumsvg, name: "Ethereum", symbol: "ETH", time: "06:24:45 AM", amount: "+ $5,381", status: "Cancel", statusClass: "danger", },
]; 

function Eventsidebar() {
	const [file, setFile] = useState(null)
	const fileHandler = (e) => {
		setFile(e.target.files[0]);
	}
	return (
		<>
			<div className="card sidebar-profile dz-scroll">
				<div className="card-header border-0 pt-4">
					<div>
						<h4 className="card-title">Latest Transactions</h4>
						<span>Last activity at 08 August 2025</span>
					</div>
					<div>
						<Dropdown>
							<Dropdown.Toggle as="a" className="nav-link i-false" >
								<div className="icon-box"> {SVGICON.setting2}</div>
							</Dropdown.Toggle>
							<Dropdown.Menu className="dropdown-menu dropdown-menu-right">
								<Link className="dropdown-item" to={"#"}>Delete</Link>
								<Link className="dropdown-item" to={"#"}>Edit</Link>
							</Dropdown.Menu>
						</Dropdown> 
					</div> 
				</div>
				<div className="card-body text-center">
					<div className="blance-profile">
						<div id="imagePreview" className="avatar avatar-xl rounded-circle" style={{ backgroundImage: file ? "url(" + URL.createObjectURL(file) + ")" : "url(" + IMAGES.user + ")" }}></div>
						<div className="icon-box icon-box-md rounded-circle bg-primary">
							<div className="upload-link" title="" data-toggle="tooltip" data-placement="right" data-original-title="update">
								<input type="file" className="update-file" id="imageUpload" onChange={fileHandler} />
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g clipPath="url(#clip0_239_653)">
										<path d="M11.333 2.00004C11.5081 1.82494 11.716 1.68605 11.9447 1.59129C12.1735 1.49653 12.4187 1.44775 12.6663 1.44775C12.914 1.44775 13.1592 1.49653 13.3879 1.59129C13.6167 1.68605 13.8246 1.82494 13.9997 2.00004C14.1748 2.17513 14.3137 2.383 14.4084 2.61178C14.5032 2.84055 14.552 3.08575 14.552 3.33337C14.552 3.58099 14.5032 3.82619 14.4084 4.05497C14.3137 4.28374 14.1748 4.49161 13.9997 4.66671L4.99967 13.6667L1.33301 14.6667L2.33301 11L11.333 2.00004Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</g>
									<defs>
										<clipPath id="clip0_239_653">
											<rect width="16" height="16" fill="white" />
										</clipPath>
									</defs>
								</svg>
							</div>
						</div>

					</div>
					<div className="mt-4 b-profile-data">
						<span className="font-w500">Available balance in USD</span>
						<h2>673,412.66</h2>
					</div>
				</div>
				<div className="card-footer text-center border-0 pt-0">
					<Link to={"#"} className="btn btn-primary me-2 btn-lg">
						<svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
							<path d="M15.75 11.25V14.25C15.75 14.6478 15.592 15.0294 15.3107 15.3107C15.0294 15.592 14.6478 15.75 14.25 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V11.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							<path d="M5.25 7.5L9 11.25L12.75 7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							<path d="M9 11.25V2.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
						Deposit
					</Link>
					<Link to={"#"} className="btn btn-primary ms-2 btn-lg">
						<svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
							<path d="M17.5 7.5V4.16667C17.5 3.72464 17.3244 3.30072 17.0118 2.98816C16.6993 2.6756 16.2754 2.5 15.8333 2.5H4.16667C3.72464 2.5 3.30072 2.6756 2.98816 2.98816C2.67559 3.30072 2.5 3.72464 2.5 4.16667V7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							<path d="M5.83301 11.6667L9.99967 7.50008L14.1663 11.6667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							<path d="M10 7.5V17.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
						withdrawal
					</Link>
				</div>
				<div className="card-header border-0 pb-0">
					<div>
						<h4 className="card-title">Total Balance</h4>
						<span>Last activity at 02:00 PM</span>
					</div>
					<div>
						<Dropdown>
							<Dropdown.Toggle as="a" className="nav-link i-false">
								<div className="icon-box"> {SVGICON.setting2}</div>
							</Dropdown.Toggle>
							<Dropdown.Menu className="dropdown-menu dropdown-menu-right">
								<Link className="dropdown-item" to={"#"}>Delete</Link>
								<Link className="dropdown-item" to={"#"}>Edit</Link>
							</Dropdown.Menu>
						</Dropdown>
					</div>
				</div>
				<div className="card-body">
					<Tab.Container defaultActiveKey="1H" >
						<div className="latest-transactions">
							<div className="d-flex">
								<div className="text-center me-3">
									<p className="text-primary mb-0 fs-16 font-w600">60 </p>
									<span>Done</span>
								</div>
								<div className="text-center ms-3">
									<p className="mb-0 fs-16 font-w600 text-secondary">20</p>
									<span>In Progress</span>
								</div>
							</div>
							<div>
								<Nav as="ul" className="nav nav-pills  balance-tabs">
									<Nav.Item as="li" className="nav-item">
										<Nav.Link as="button" className="nav-item" eventKey={"1H"}>1H</Nav.Link>
									</Nav.Item >
									<Nav.Item as="li"  className="nav-item">
										<Nav.Link as="button" className="nav-item" eventKey={"1D"}>1D</Nav.Link>
									</Nav.Item>
									<Nav.Item as="li" className="nav-item">
										<Nav.Link as="button" className="nav-item" eventKey={"1M"}>1M</Nav.Link>
									</Nav.Item>
									<Nav.Item as="li" className="nav-item">
										<Nav.Link as="button" className="nav-item" eventKey={"1Y"}>1Y</Nav.Link>
									</Nav.Item>
								</Nav>
							</div>
						</div>
						<Tab.Content>
							<Tab.Pane eventKey={"1H"} >
								<div className="table-responsive">
									<table className="table text-center transactions-tbl">
										<tbody>
											{transactions.map((tx, index) => (
												<tr key={index}>
													<td className="text-start">
														<div className="transactions-details">
															<img src={tx.icon} alt="" />
															<div>
																<h4 className="mb-0">
																	{tx.name} <span>({tx.symbol})</span>
																</h4>
																<small>{tx.time}</small>
															</div>
														</div>
													</td>
													<td>
														<h5 className="mb-0 font-w600">{tx.amount}</h5>
													</td>
													<td className="text-end">
														<span className={`badge badge-${tx.statusClass} light border-0`}>
															{tx.status}
														</span>
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</Tab.Pane>
							<Tab.Pane eventKey={"1D"} >
								<div className="table-responsive">
									<table className="table text-center transactions-tbl">
										<tbody>
											{transactions.map((tx, index) => (
												<tr key={index}>
													<td className="text-start">
														<div className="transactions-details">
															<img src={tx.icon} alt="" />
															<div>
																<h4 className="mb-0">
																	{tx.name} <span>({tx.symbol})</span>
																</h4>
																<small>{tx.time}</small>
															</div>
														</div>
													</td>
													<td>
														<h5 className="mb-0 font-w600">{tx.amount}</h5>
													</td>
													<td className="text-end">
														<span className={`badge badge-${tx.statusClass} light border-0`}>
															{tx.status}
														</span>
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</Tab.Pane>
							<Tab.Pane eventKey={"1M"} >
								<div className="table-responsive">
									<table className="table text-center transactions-tbl">
										<tbody>
											{transactions.map((tx, index) => (
												<tr key={index}>
													<td className="text-start">
														<div className="transactions-details">
															<img src={tx.icon} alt="" />
															<div>
																<h4 className="mb-0">
																	{tx.name} <span>({tx.symbol})</span>
																</h4>
																<small>{tx.time}</small>
															</div>
														</div>
													</td>
													<td>
														<h5 className="mb-0 font-w600">{tx.amount}</h5>
													</td>
													<td className="text-end">
														<span className={`badge badge-${tx.statusClass} light border-0`}>
															{tx.status}
														</span>
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</Tab.Pane>
							<Tab.Pane eventKey={"1Y"} >
								<div className="table-responsive">
									<table className="table text-center transactions-tbl">
										<tbody>
											{transactions.map((tx, index) => (
												<tr key={index}>
													<td className="text-start">
														<div className="transactions-details">
															<img src={tx.icon} alt="" />
															<div>
																<h4 className="mb-0">
																	{tx.name} <span>({tx.symbol})</span>
																</h4>
																<small>{tx.time}</small>
															</div>
														</div>
													</td>
													<td>
														<h5 className="mb-0 font-w600">{tx.amount}</h5>
													</td>
													<td className="text-end">
														<span className={`badge badge-${tx.statusClass} light border-0`}>
															{tx.status}
														</span>
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</Tab.Pane>
						</Tab.Content>
					</Tab.Container>
				</div>
			</div>
		</>
	)
}
export default Eventsidebar;