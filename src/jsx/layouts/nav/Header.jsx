import { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { IMAGES, SVGICON } from "../../constant/Theme";
import fscreen from "fscreen";
import FrontMenu from "../FrontMenu";
import SidebarToggle from "../SidebrToggle";

function Header({ onNote }) {
	const handleFullscreenToggle = () => {
		if (!fscreen.fullscreenElement) {
			fscreen.requestFullscreen(document.documentElement).catch(err => {
				console.error(`Error attempting to enable full-screen mode: ${err.message}`);
			});
		} else {
			fscreen.exitFullscreen();
		}
	};
	const toggleClass = () => {
		const element = document.getElementById('main-wrapper');
		if (element) {
			element.classList.toggle('active');
		}
	};
	const [selectedOption, setSelectedOption] = useState("English");

	return (
		<>
			<div className="header">
				<div className="header-content">
					<nav className="navbar navbar-expand">
						<div className="collapse navbar-collapse justify-content-between">
							<div className="header-left">
								<form>
									<div className="input-group search-area">
										<span className="input-group-text"><button>
											<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M9.25 14.25C12.5637 14.25 15.25 11.5637 15.25 8.25C15.25 4.93629 12.5637 2.25 9.25 2.25C5.93629 2.25 3.25 4.93629 3.25 8.25C3.25 11.5637 5.93629 14.25 9.25 14.25Z" stroke="#6F767E" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M16.75 15.75L13.4875 12.4875" stroke="#6F767E" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</button></span>
										<input type="text" className="form-control" placeholder="Search" />
									</div>
								</form>
								<FrontMenu />
							</div>
							<div className="select-country">
								{SVGICON.selectcountry}
								<Dropdown className="c-pointer">
									<Dropdown.Toggle as="div" className="nav-link"> {selectedOption} </Dropdown.Toggle>
									<Dropdown.Menu className="dropdown-menu dropdown-menu-end" align="end">
										<Dropdown.Item onClick={() => setSelectedOption("English")}>English</Dropdown.Item>
										<Dropdown.Item onClick={() => setSelectedOption("Finland")}>Finland</Dropdown.Item>
										<Dropdown.Item onClick={() => setSelectedOption("France")}>France</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</div>
							<ul className="navbar-nav header-right"> 
								<Dropdown
									as="li"
									className="nav-item dropdown notification_dropdown"
								>
									<Dropdown.Toggle
										variant=""
										as="a"
										className="nav-link i-false"
										to={"#"}
										role="button"
										data-toggle="dropdown"
									>
										<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
											<path d="M5.10317 19.6315C4.85704 19.6315 4.65213 19.5493 4.48844 19.3848C4.32476 19.2202 4.24292 19.0162 4.24292 18.7725C4.24292 18.5289 4.32476 18.3263 4.48844 18.1647C4.65213 18.0031 4.85616 17.9223 5.10055 17.9223H6.39672V10.4397C6.39672 9.03281 6.81719 7.75736 7.65814 6.61333C8.49908 5.4693 9.61249 4.7488 10.9984 4.45185V3.75925C10.9984 3.34602 11.1438 3.00394 11.4346 2.733C11.7255 2.46209 12.0786 2.32663 12.4941 2.32663C12.9096 2.32663 13.2647 2.46209 13.5595 2.733C13.8542 3.00394 14.0016 3.34602 14.0016 3.75925V4.45185C15.3915 4.7488 16.5111 5.4693 17.3603 6.61333C18.2096 7.75736 18.6342 9.03281 18.6342 10.4397V17.9223H19.9054C20.1453 17.9223 20.3483 18.0045 20.5142 18.1691C20.6801 18.3336 20.763 18.5377 20.763 18.7813C20.763 19.0249 20.6801 19.2276 20.5142 19.3891C20.3483 19.5507 20.1453 19.6315 19.9054 19.6315H5.10317ZM12.503 22.6495C11.9559 22.6495 11.4773 22.449 11.0673 22.0479C10.6572 21.6469 10.4522 21.1648 10.4522 20.6016H14.5538C14.5538 21.1676 14.3525 21.6504 13.95 22.05C13.5474 22.4496 13.0651 22.6495 12.503 22.6495V22.6495ZM8.09999 17.9223H16.925V10.4397C16.925 9.18966 16.5042 8.13549 15.6625 7.27716C14.8208 6.41882 13.7792 5.98966 12.5375 5.98966C11.2958 5.98966 10.2458 6.41882 9.38749 7.27716C8.52916 8.13549 8.09999 9.18966 8.09999 10.4397V17.9223Z" fill="black" />
										</svg>
									</Dropdown.Toggle>
									<Dropdown.Menu align="end" className="dropdown-menu dropdown-menu-end">
										<div id="DZ_W_TimeLine02" className="widget-timeline dz-scroll style-1 p-3 height370">
											<ul className="timeline">
												<li>
													<div className="timeline-badge primary"></div>
													<Link className="timeline-panel text-muted" to={"#"}>
														<span>10 minutes ago</span>
														<h6 className="mb-0">Youtube, a video-sharing website, goes live <strong
															className="text-primary">$500</strong>.</h6>
													</Link>
												</li>
												<li>
													<div className="timeline-badge info">
													</div>
													<Link className="timeline-panel text-muted" to={"#"}>
														<span>20 minutes ago</span>
														<h6 className="mb-0">New order placed <strong
															className="text-info">#XF-2356.</strong></h6>
														<p className="mb-0">Quisque a consequat ante Sit amet magna at
															volutapt...</p>
													</Link>
												</li>
												<li>
													<div className="timeline-badge danger">
													</div>
													<Link className="timeline-panel text-muted" to={"#"}>
														<span>30 minutes ago</span>
														<h6 className="mb-0">john just buy your product <strong
															className="text-warning">Sell $250</strong></h6>
													</Link>
												</li>
												<li>
													<div className="timeline-badge success">
													</div>
													<Link className="timeline-panel text-muted" to={"#"}>
														<span>15 minutes ago</span>
														<h6 className="mb-0">StumbleUpon is acquired by eBay. </h6>
													</Link>
												</li>
												<li>
													<div className="timeline-badge warning">
													</div>
													<Link className="timeline-panel text-muted" to={"#"}>
														<span>20 minutes ago</span>
														<h6 className="mb-0">Mashable, a news website and blog, goes live.</h6>
													</Link>
												</li>
												<li>
													<div className="timeline-badge dark">
													</div>
													<Link className="timeline-panel text-muted" to={"#"}>
														<span>20 minutes ago</span>
														<h6 className="mb-0">Mashable, a news website and blog, goes live.</h6>
													</Link>
												</li>
											</ul>
										</div>
									</Dropdown.Menu>
								</Dropdown>
								<Dropdown as="li" className="nav-item dropdown notification_dropdown c-pointer">
									<Dropdown.Toggle
										variant=""
										as="a"
										className="nav-link i-false"
										data-toggle="dropdown" aria-expanded="false"
									>
										<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
											<path d="M5.05384 11.75C4.58544 11.75 4.18446 11.5832 3.85091 11.2495C3.51736 10.9159 3.35059 10.5129 3.35059 10.0407V5.05379C3.35059 4.58376 3.51736 4.18138 3.85091 3.84664C4.18446 3.51191 4.58544 3.34454 5.05384 3.34454H10.0468C10.5152 3.34454 10.9161 3.51191 11.2497 3.84664C11.5833 4.18138 11.75 4.58376 11.75 5.05379V10.0407C11.75 10.5129 11.5833 10.9159 11.2497 11.2495C10.9161 11.5832 10.5152 11.75 10.0468 11.75H5.05384ZM5.05384 21.6494C4.58544 21.6494 4.18446 21.4827 3.85091 21.1491C3.51736 20.8156 3.35059 20.4146 3.35059 19.9462V14.9533C3.35059 14.4849 3.51736 14.0839 3.85091 13.7503C4.18446 13.4168 4.58544 13.25 5.05384 13.25H10.0468C10.5152 13.25 10.9161 13.4168 11.2497 13.7503C11.5833 14.0839 11.75 14.4849 11.75 14.9533V19.9462C11.75 20.4146 11.5833 20.8156 11.2497 21.1491C10.9161 21.4827 10.5152 21.6494 10.0468 21.6494H5.05384ZM14.9593 11.75C14.4871 11.75 14.0842 11.5832 13.7505 11.2495C13.4169 10.9159 13.25 10.5129 13.25 10.0407V5.05379C13.25 4.58376 13.4169 4.18138 13.7505 3.84664C14.0842 3.51191 14.4871 3.34454 14.9593 3.34454H19.9462C20.4163 3.34454 20.8186 3.51191 21.1534 3.84664C21.4881 4.18138 21.6555 4.58376 21.6555 5.05379V10.0407C21.6555 10.5129 21.4881 10.9159 21.1534 11.2495C20.8186 11.5832 20.4163 11.75 19.9462 11.75H14.9593ZM14.9593 21.6494C14.4871 21.6494 14.0842 21.4827 13.7505 21.1491C13.4169 20.8156 13.25 20.4146 13.25 19.9462V14.9533C13.25 14.4849 13.4169 14.0839 13.7505 13.7503C14.0842 13.4168 14.4871 13.25 14.9593 13.25H19.9462C20.4163 13.25 20.8186 13.4168 21.1534 13.7503C21.4881 14.0839 21.6555 14.4849 21.6555 14.9533V19.9462C21.6555 20.4146 21.4881 20.8156 21.1534 21.1491C20.8186 21.4827 20.4163 21.6494 19.9462 21.6494H14.9593ZM5.05384 10.0407H10.0468V5.05379H5.05384V10.0407ZM14.9593 10.0407H19.9462V5.05379H14.9593V10.0407ZM14.9593 19.9462H19.9462V14.9533H14.9593V19.9462ZM5.05384 19.9462H10.0468V14.9533H5.05384V19.9462Z" fill="black" />
										</svg>
									</Dropdown.Toggle>
									<Dropdown.Menu align="end" className="dropdown-menu dropdown-menu-end">
										<div id="DZ_W_Notification1" className="widget-media dz-scroll p-3"
											style={{ height: "380px" }}
										>
											<ul className="timeline">
												<li>
													<div className="timeline-panel">
														<div className="media me-2">
															<img alt="image" width="50" src={IMAGES.avtar1jpg} />
														</div>
														<div className="media-body">
															<h6 className="mb-1">Dr sultads Send you Photo</h6>
															<small className="d-block">29 July 2020 - 02:26 PM</small>
														</div>
													</div>
												</li>
												<li>
													<div className="timeline-panel">
														<div className="media me-2 media-info">
															KG
														</div>
														<div className="media-body">
															<h6 className="mb-1">Resport created successfully</h6>
															<small className="d-block">29 July 2020 - 02:26 PM</small>
														</div>
													</div>
												</li>
												<li>
													<div className="timeline-panel">
														<div className="media me-2 media-success">
															<i className="fa fa-home" />
														</div>
														<div className="media-body">
															<h6 className="mb-1">Reminder : Treatment Time!</h6>
															<small className="d-block">29 July 2020 - 02:26 PM</small>
														</div>
													</div>
												</li>
												<li>
													<div className="timeline-panel">
														<div className="media me-2">
															<img alt="image" width="50" src={IMAGES.avtar1jpg} />
														</div>
														<div className="media-body">
															<h6 className="mb-1">Dr sultads Send you Photo</h6>
															<small className="d-block">29 July 2020 - 02:26 PM</small>
														</div>
													</div>
												</li>
												<li>
													<div className="timeline-panel">
														<div className="media me-2 media-danger"> KG </div>
														<div className="media-body">
															<h6 className="mb-1">Resport created successfully</h6>
															<small className="d-block">29 July 2020 - 02:26 PM</small>
														</div>
													</div>
												</li>
												<li>
													<div className="timeline-panel">
														<div className="media me-2 media-primary">
															<i className="fa fa-home" />
														</div>
														<div className="media-body">
															<h6 className="mb-1">Reminder : Treatment Time!</h6>
															<small className="d-block">29 July 2020 - 02:26 PM</small>
														</div>
													</div>
												</li>
											</ul>
										</div>
										<Link className="all-notification" to={"#"}>See all notifications <i className="ti-arrow-end" /></Link>
									</Dropdown.Menu>
								</Dropdown>
								<Dropdown
									as="li"
									className="nav-item dropdown notification_dropdown "
								>
									<Dropdown.Toggle
										variant=""
										as="a"
										className="nav-link bell bell-link i-false c-pointer"
										onClick={() => onNote()}
									>
										<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
											<path d="M7.25004 14.525H13.575C13.7875 14.525 13.9657 14.4527 14.1094 14.3081C14.2532 14.1635 14.325 13.9844 14.325 13.7706C14.325 13.5569 14.2532 13.3792 14.1094 13.2375C13.9657 13.0958 13.7875 13.025 13.575 13.025H7.25004C7.03754 13.025 6.85941 13.0973 6.71566 13.2419C6.57191 13.3865 6.50004 13.5656 6.50004 13.7794C6.50004 13.9931 6.57191 14.1708 6.71566 14.3125C6.85941 14.4542 7.03754 14.525 7.25004 14.525ZM7.25004 11.275H17.75C17.9625 11.275 18.1407 11.2027 18.2844 11.0581C18.4282 10.9135 18.5 10.7344 18.5 10.5206C18.5 10.3069 18.4282 10.1292 18.2844 9.98749C18.1407 9.84583 17.9625 9.77499 17.75 9.77499H7.25004C7.03754 9.77499 6.85941 9.84729 6.71566 9.99187C6.57191 10.1365 6.50004 10.3156 6.50004 10.5294C6.50004 10.7431 6.57191 10.9208 6.71566 11.0625C6.85941 11.2042 7.03754 11.275 7.25004 11.275ZM7.25004 8.02499H17.75C17.9625 8.02499 18.1407 7.9527 18.2844 7.80812C18.4282 7.66352 18.5 7.48435 18.5 7.27062C18.5 7.05687 18.4282 6.87916 18.2844 6.73749C18.1407 6.59583 17.9625 6.52499 17.75 6.52499H7.25004C7.03754 6.52499 6.85941 6.59729 6.71566 6.74187C6.57191 6.88647 6.50004 7.06564 6.50004 7.27937C6.50004 7.49312 6.57191 7.67083 6.71566 7.81249C6.85941 7.95416 7.03754 8.02499 7.25004 8.02499ZM6.35059 18.6494L3.80494 21.1951C3.53572 21.4643 3.22603 21.5264 2.87586 21.3813C2.52568 21.2363 2.35059 20.9773 2.35059 20.6043V4.05379C2.35059 3.59218 2.51946 3.1919 2.85721 2.85297C3.19498 2.51402 3.59385 2.34454 4.05384 2.34454H20.9462C21.4079 2.34454 21.8081 2.51402 22.1471 2.85297C22.486 3.1919 22.6555 3.59218 22.6555 4.05379V16.9462C22.6555 17.4062 22.486 17.8051 22.1471 18.1428C21.8081 18.4806 21.4079 18.6494 20.9462 18.6494H6.35059ZM4.05384 16.9462H20.9462V4.05379H4.05384V16.9462Z" fill="black"></path>
										</svg>
									</Dropdown.Toggle>
								</Dropdown>
								<li className="nav-item dropdown notification_dropdown">
									<Link className="nav-link dz-fullscreen" to={"#"} onClick={handleFullscreenToggle}>
										<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M1.56896 18.5C1.26722 18.5 1.01362 18.3973 0.808174 18.1918C0.602725 17.9864 0.5 17.7328 0.5 17.431V13.1751C0.5 12.8734 0.603248 12.6198 0.809743 12.4143C1.01624 12.2089 1.27114 12.1062 1.57445 12.1062C1.87774 12.1062 2.1308 12.2089 2.33364 12.4143C2.53647 12.6198 2.63789 12.8734 2.63789 13.1751V16.3621H5.8249C6.12664 16.3621 6.38024 16.4654 6.58569 16.6719C6.79111 16.8784 6.89383 17.1333 6.89383 17.4366C6.89383 17.7399 6.79111 17.9929 6.58569 18.1957C6.38024 18.3986 6.12664 18.5 5.8249 18.5H1.56896ZM1.56344 6.90133C1.26015 6.90133 1.00709 6.79861 0.804251 6.59319C0.601417 6.38774 0.5 6.13414 0.5 5.8324V1.57646C0.5 1.27472 0.602725 1.01987 0.808174 0.811908C1.01362 0.603969 1.26722 0.5 1.56896 0.5H5.8249C6.12664 0.5 6.38024 0.604504 6.58569 0.813509C6.79111 1.02249 6.89383 1.27864 6.89383 1.58195C6.89383 1.88524 6.79111 2.1383 6.58569 2.34114C6.38024 2.54397 6.12664 2.64539 5.8249 2.64539H2.63789V5.8324C2.63789 6.13414 2.53464 6.38774 2.32814 6.59319C2.12165 6.79861 1.86675 6.90133 1.56344 6.90133ZM13.1676 18.5C12.8659 18.5 12.6123 18.3968 12.4068 18.1903C12.2014 17.9838 12.0987 17.7289 12.0987 17.4256C12.0987 17.1223 12.2014 16.8692 12.4068 16.6664C12.6123 16.4635 12.8659 16.3621 13.1676 16.3621H16.3546V13.1751C16.3546 12.8734 16.4579 12.6198 16.6644 12.4143C16.8709 12.2089 17.1258 12.1062 17.4291 12.1062C17.7324 12.1062 17.9867 12.2089 18.192 12.4143C18.3973 12.6198 18.5 12.8734 18.5 13.1751V17.431C18.5 17.7328 18.396 17.9864 18.1881 18.1918C17.9801 18.3973 17.7253 18.5 17.4235 18.5H13.1676ZM17.4181 6.90133C17.1148 6.90133 16.8617 6.79861 16.6589 6.59319C16.456 6.38774 16.3546 6.13414 16.3546 5.8324V2.64539H13.1676C12.8659 2.64539 12.6123 2.54214 12.4068 2.33564C12.2014 2.12915 12.0987 1.87424 12.0987 1.57093C12.0987 1.26765 12.2014 1.01333 12.4068 0.807986C12.6123 0.602662 12.8659 0.5 13.1676 0.5H17.4235C17.7253 0.5 17.9801 0.603969 18.1881 0.811908C18.396 1.01987 18.5 1.27472 18.5 1.57646V5.8324C18.5 6.13414 18.3955 6.38774 18.1865 6.59319C17.9775 6.79861 17.7214 6.90133 17.4181 6.90133Z" fill="black" />
										</svg>
									</Link>
								</li>
								<li className="nav-item ps-3">
									<Dropdown className="dropdown header-profile2">
										<Dropdown.Toggle as="a" className="nav-link p-0 i-false" href="javascript:void(0);" role="button"
											data-bs-toggle="dropdown" aria-expanded="false">
											<div className="header-info2 d-flex align-items-center">
												<div className="header-media">
													<img src={IMAGES.user} alt="" />
												</div>
											</div>
										</Dropdown.Toggle>
										<Dropdown.Menu className="dropdown-menu dropdown-menu-end">
											<div className="card border-0 mb-0">
												<div className="card-header py-2">
													<div className="products">
														<img src={IMAGES.user} className="avatar avatar-md" alt="" />
														<div>
															<h6>Thomas Fleming</h6>
															<span>Web Designer</span>
														</div>
													</div>
												</div>
												<div className="card-body px-0 py-2">
													<Link to="/app-profile-1" className="dropdown-item ai-icon ">
														<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path fillRule="evenodd" clipRule="evenodd" d="M11.9848 15.3462C8.11714 15.3462 4.81429 15.931 4.81429 18.2729C4.81429 20.6148 8.09619 21.2205 11.9848 21.2205C15.8524 21.2205 19.1543 20.6348 19.1543 18.2938C19.1543 15.9529 15.8733 15.3462 11.9848 15.3462Z" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															<path fillRule="evenodd" clipRule="evenodd" d="M11.9848 12.0059C14.5229 12.0059 16.58 9.94779 16.58 7.40969C16.58 4.8716 14.5229 2.81445 11.9848 2.81445C9.44667 2.81445 7.38857 4.8716 7.38857 7.40969C7.38 9.93922 9.42381 11.9973 11.9524 12.0059H11.9848Z" stroke="var(--primary)" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
														<span className="ms-2">Profile </span>
													</Link>
													<Link to="/app-profile-1" className="dropdown-item ai-icon ">
														<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19"
															viewBox="0 0 24 24" fill="none" stroke="currentColor"
															strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
															className="feather feather-pie-chart">
															<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
															<path d="M22 12A10 10 0 0 0 12 2v10z"></path>
														</svg>
														<span className="ms-2">My Project</span>
														<span className="badge badge-sm badge-secondary light rounded-circle text-white ms-2">4</span>
													</Link>
													<Link to={"#"} className="dropdown-item ai-icon ">
														<svg width="20" height="20" viewBox="0 0 24 24" fill="none"
															xmlns="http://www.w3.org/2000/svg">
															<path
																d="M17.9026 8.85114L13.4593 12.4642C12.6198 13.1302 11.4387 13.1302 10.5992 12.4642L6.11844 8.85114"
																stroke="var(--primary)" strokeWidth="1.5"
																strokeLinecap="round" strokeLinejoin="round" />
															<path fillRule="evenodd" clipRule="evenodd"
																d="M16.9089 21C19.9502 21.0084 22 18.5095 22 15.4384V8.57001C22 5.49883 19.9502 3 16.9089 3H7.09114C4.04979 3 2 5.49883 2 8.57001V15.4384C2 18.5095 4.04979 21.0084 7.09114 21H16.9089Z"
																stroke="var(--primary)" strokeWidth="1.5"
																strokeLinecap="round" strokeLinejoin="round" />
														</svg>

														<span className="ms-2">Message </span>
													</Link>
													<Link to="/email-inbox" className="dropdown-item ai-icon ">
														<svg width="20" height="20" viewBox="0 0 24 24" fill="none"
															xmlns="http://www.w3.org/2000/svg">
															<path fillRule="evenodd" clipRule="evenodd"
																d="M12 17.8476C17.6392 17.8476 20.2481 17.1242 20.5 14.2205C20.5 11.3188 18.6812 11.5054 18.6812 7.94511C18.6812 5.16414 16.0452 2 12 2C7.95477 2 5.31885 5.16414 5.31885 7.94511C5.31885 11.5054 3.5 11.3188 3.5 14.2205C3.75295 17.1352 6.36177 17.8476 12 17.8476Z"
																stroke="var(--primary)" strokeWidth="1.5"
																strokeLinecap="round" strokeLinejoin="round" />
															<path
																d="M14.3888 20.8572C13.0247 22.372 10.8967 22.3899 9.51947 20.8572"
																stroke="var(--primary)" strokeWidth="1.5"
																strokeLinecap="round" strokeLinejoin="round" />
														</svg>
														<span className="ms-2">Notification </span>
													</Link>
												</div>
												<div className="card-footer px-0 py-2">
													<Link to={"#"} className="dropdown-item ai-icon ">
														<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path fillRule="evenodd" clipRule="evenodd" d="M20.8066 7.62355L20.1842 6.54346C19.6576 5.62954 18.4907 5.31426 17.5755 5.83866V5.83866C17.1399 6.09528 16.6201 6.16809 16.1307 6.04103C15.6413 5.91396 15.2226 5.59746 14.9668 5.16131C14.8023 4.88409 14.7139 4.56833 14.7105 4.24598V4.24598C14.7254 3.72916 14.5304 3.22834 14.17 2.85761C13.8096 2.48688 13.3145 2.2778 12.7975 2.27802H11.5435C11.0369 2.27801 10.5513 2.47985 10.194 2.83888C9.83666 3.19791 9.63714 3.68453 9.63958 4.19106V4.19106C9.62457 5.23686 8.77245 6.07675 7.72654 6.07664C7.40418 6.07329 7.08843 5.98488 6.8112 5.82035V5.82035C5.89603 5.29595 4.72908 5.61123 4.20251 6.52516L3.53432 7.62355C3.00838 8.53633 3.31937 9.70255 4.22997 10.2322V10.2322C4.82187 10.574 5.1865 11.2055 5.1865 11.889C5.1865 12.5725 4.82187 13.204 4.22997 13.5457V13.5457C3.32053 14.0719 3.0092 15.2353 3.53432 16.1453V16.1453L4.16589 17.2345C4.41262 17.6797 4.82657 18.0082 5.31616 18.1474C5.80575 18.2865 6.33061 18.2248 6.77459 17.976V17.976C7.21105 17.7213 7.73116 17.6515 8.21931 17.7821C8.70746 17.9128 9.12321 18.233 9.37413 18.6716C9.53867 18.9488 9.62708 19.2646 9.63043 19.5869V19.5869C9.63043 20.6435 10.4869 21.5 11.5435 21.5H12.7975C13.8505 21.5 14.7055 20.6491 14.7105 19.5961V19.5961C14.7081 19.088 14.9088 18.6 15.2681 18.2407C15.6274 17.8814 16.1154 17.6806 16.6236 17.6831C16.9451 17.6917 17.2596 17.7797 17.5389 17.9393V17.9393C18.4517 18.4653 19.6179 18.1543 20.1476 17.2437V17.2437L20.8066 16.1453C21.0617 15.7074 21.1317 15.1859 21.0012 14.6963C20.8706 14.2067 20.5502 13.7893 20.111 13.5366V13.5366C19.6717 13.2839 19.3514 12.8665 19.2208 12.3769C19.0902 11.8872 19.1602 11.3658 19.4153 10.9279C19.5812 10.6383 19.8213 10.3981 20.111 10.2322V10.2322C21.0161 9.70283 21.3264 8.54343 20.8066 7.63271V7.63271V7.62355Z" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															<circle cx="12.175" cy="11.889" r="2.63616" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
														<span className="ms-2">Settings </span>
													</Link>
													<Link to={"/page-login"} className="dropdown-item ai-icon text-danger">
														<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E55555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
															<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
															<polyline points="16 17 21 12 16 7"></polyline>
															<line x1="21" y1="12" x2="9" y2="12"></line>
														</svg>
														<span className="ms-2">Logout </span>
													</Link>
												</div>
											</div>
										</Dropdown.Menu>
									</Dropdown>
								</li>
								<SidebarToggle toggleClass={toggleClass} />
							</ul>
						</div>
					</nav>
				</div>
			</div>
		</>
	);
};
export default Header;
