import { Fragment, useReducer } from "react";
import { Button, Dropdown, Modal, Tab, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import LightGallery from 'lightgallery/react';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import { IMAGES } from "../../constant/Theme";
import PageTitle from "../../layouts/PageTitle";

const galleryBlog = [
	{ image: IMAGES.Profile3 }, { image: IMAGES.Profile4 },
	{ image: IMAGES.Profile2 }, { image: IMAGES.Profile4 },
	{ image: IMAGES.Profile3 }, { image: IMAGES.Profile2 },
];
const mediaBlog = [
	{ image: IMAGES.Profile5 },
	{ image: IMAGES.Profile6 },
	{ image: IMAGES.Profile7 },
];
const initialState = false;
const reducer = (state, action) => {
	switch (action.type) {
		case 'sendMessage':
			return { ...state, sendMessage: !state.sendMessage }
		case 'postModal':
			return { ...state, post: !state.post }
		case 'linkModal':
			return { ...state, link: !state.link }
		case 'cameraModal':
			return { ...state, camera: !state.camera }
		case 'replyModal':
			return { ...state, reply: !state.reply }
		default:
			return state
	}
}

const AppProfile = () => {
	const onInit = () => { };
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<Fragment>
			<PageTitle activeMenu="Profile Detail" motherMenu="App" pageContent="Profile Detail" />
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="profile card card-body px-3 pt-3 pb-0">
							<div className="profile-head">
								<div className="photo-content ">
									<div className="cover-photo rounded"></div>
								</div>
								<div className="profile-info">
									<div className="profile-photo">
										<img src={IMAGES.profile} className="img-fluid rounded-circle" alt="profile" />
									</div>
									<div className="profile-details">
										<div className="profile-name px-3 pt-2">
											<h4 className="text-primary mb-0">Mitchell C. Shay</h4>
											<p>UX / UI Designer</p>
										</div>
										<div className="profile-email px-2 pt-2">
											<h4 className="text-muted mb-0">info@example.com</h4>
											<p>Email</p>
										</div>
										<Dropdown className="dropdown ms-auto" align="end">
											<Dropdown.Toggle
												variant="primary"
												className="btn btn-primary light sharp i-false lh-1"
												data-toggle="dropdown"
												aria-expanded="true"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="18px"
													height="18px"
													viewBox="0 0 24 24"
													version="1.1"
												>
													<g
														stroke="none"
														strokeWidth="1"
														fill="none"
														fillRule="evenodd"
													>
														<rect x="0" y="0" width="24" height="24"></rect>
														<circle fill="#000000" cx="5" cy="12" r="2"></circle>
														<circle fill="#000000" cx="12" cy="12" r="2"></circle>
														<circle fill="#000000" cx="19" cy="12" r="2"></circle>
													</g>
												</svg>
											</Dropdown.Toggle>
											<Dropdown.Menu className="dropdown-menu dropdown-menu-right">
												<Dropdown.Item className="dropdown-item">
													<i className="fa fa-user-circle text-primary me-2" />
													View profile
												</Dropdown.Item>
												<Dropdown.Item className="dropdown-item">
													<i className="fa fa-users text-primary me-2" />
													Add to close friends
												</Dropdown.Item>
												<Dropdown.Item className="dropdown-item">
													<i className="fa fa-plus text-primary me-2" />
													Add to group
												</Dropdown.Item>
												<Dropdown.Item className="dropdown-item">
													<i className="fa fa-ban text-primary me-2" />
													Block
												</Dropdown.Item>
											</Dropdown.Menu>
										</Dropdown>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-4">
						<div className="row">
							<div className="col-xl-12">
								<div className="card">
									<div className="card-body">
										<div className="profile-statistics">
											<div className="text-center">
												<div className="row">
													<div className="col">
														<h3 className="m-b-0">150</h3><span>Follower</span>
													</div>
													<div className="col">
														<h3 className="m-b-0">140</h3> <span>Place Stay</span>
													</div>
													<div className="col">
														<h3 className="m-b-0">45</h3> <span>Reviews</span>
													</div>
												</div>
												<div className="mt-4">
													<Link to="/post-details" className="btn btn-primary mb-1 me-1">Follow</Link>
													<Link to={"#"} className="btn btn-primary mb-1 ms-1" onClick={() => dispatch({ type: 'sendMessage' })}>Send Message</Link>
												</div>
											</div>

										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-12">
								<div className="card">
									<div className="card-header border-0 pb-0">
										<h5 className="text-primary">Today Highlights</h5>
									</div>
									<div className="card-body pt-3"	>
										<div className="profile-blog ">
											<img src={IMAGES.Profile1} alt="profile" className="img-fluid  mb-4 w-100 " />
											<Link to="/post-details"> <h4 className="text-black">Darwin Creative Agency Theme</h4> </Link>
											<p className="mb-0">
												A small river named Duden flows by their place and supplies
												it with the necessary regelialia. It is a paradisematic
												country, in which roasted parts of sentences fly into your
												mouth.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-12">
								<div className="card">
									<div className="card-header border-0 pb-0">
										<h5 className="text-primary ">Interest</h5>
									</div>
									<div className="card-body pt-3">
										<div className="profile-interest">
											<LightGallery
												onInit={onInit}
												speed={500}
												plugins={[lgThumbnail, lgZoom]}
												elementClassNames="row sp4"
											>
												{galleryBlog.map((item, index) => (
													<div data-src={item.image} className="col-lg-4 col-xl-4 col-sm-4 col-6 int-col mb-1" key={index}>
														<img className="px-1 py-1 img-fluid rounded c-pointer" src={item.image} style={{ width: "100%" }} alt="gallery" />
													</div>
												))}
											</LightGallery>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-12">
								<div className="card">
									<div className="card-header border-0 pb-0">
										<h5 className="text-primary">Our Latest News</h5>
									</div>
									<div className="card-body pt-3">
										<div className="profile-news">
											{mediaBlog.map((item, index) => (
												<div className="media pt-3 pb-3" key={index}>
													<img src={item.image} alt="" className="me-3 rounded" width="75" />
													<div className="media-body">
														<h6 className="m-b-5"><Link to="/post-details" className="text-black">Collection of textile samples</Link></h6>
														<p className="mb-0">I shared this on my fb wall a few months back, and I thought.</p>
													</div>
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-8">
						<div className="card">
							<div className="card-body">
								<div className="profile-tab">
									<div className="custom-tab-1">
										<Tab.Container defaultActiveKey='Posts'>
											<Nav as='ul' className="nav nav-tabs">
												<Nav.Item as='li' className="nav-item">
													<Nav.Link to="#my-posts" eventKey='Posts'>Posts</Nav.Link>
												</Nav.Item>
												<Nav.Item as='li' className="nav-item">
													<Nav.Link to="#about-me" eventKey='About'>About Me</Nav.Link>
												</Nav.Item>
												<Nav.Item as='li' className="nav-item">
													<Nav.Link to="#profile-settings" eventKey='Setting'>Setting</Nav.Link>
												</Nav.Item>
											</Nav>
											<Tab.Content>
												<Tab.Pane id="my-posts" eventKey='Posts'>
													<div className="my-post-content pt-3">
														<div className="post-input">
															<textarea name="textarea" id="textarea" cols={30} rows={5} className="form-control bg-transparent" placeholder="Please type what you want...." defaultValue={""} />
															<Link to={"#"} className="btn btn-primary light px-3 me-2" onClick={() => dispatch({ type: 'linkModal' })}>
																<i className="fa fa-link m-0" />{" "}
															</Link>
															<Link to={"#"} className="btn btn-primary light px-3 me-1" data-target="#cameraModal" onClick={() => dispatch({ type: 'cameraModal' })}>
																<i className="fa fa-camera m-0" />{" "}
															</Link>
															<Link to={"#"} className="btn btn-primary ms-1" data-target="#postModal" onClick={() => dispatch({ type: 'postModal' })}>Post</Link>
														</div>

														<div className="profile-uoloaded-post border-bottom-1 pb-5">
															<img src={IMAGES.Profile8} alt="" className="img-fluid w-100 rounded" />
															<Link className="post-title" to="/post-details">
																<h3 className="text-black">Collection of textile samples lay spread</h3>
															</Link>
															<p>
																A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.A wonderful serenity has take
																possession of my entire soul like these sweet morning of spare which enjoy whole heart.
															</p>
															<button className="btn btn-primary me-2">
																<span className="me-2"> <i className="fa fa-heart" /> </span>Like
															</button>
															<button className="btn btn-secondary" onClick={() => dispatch({ type: 'replyModal' })}>
																<span className="me-2"> <i className="fa fa-reply" /></span>Reply
															</button>
														</div>
														<div className="profile-uoloaded-post border-bottom-1 pb-5">
															<img src={IMAGES.Profile9} alt="" className="img-fluid w-100 rounded" />
															<Link className="post-title" to="/post-details">
																<h3 className="text-black">Collection of textile samples lay spread</h3>
															</Link>
															<p>
																A wonderful serenity has take possession of my
																entire soul like these sweet morning of spare which
																enjoy whole heart.A wonderful serenity has take
																possession of my entire soul like these sweet
																morning of spare which enjoy whole heart.
															</p>
															<button className="btn btn-primary me-2">
																<span className="me-2"><i className="fa fa-heart" /> </span>Like
															</button>
															<button className="btn btn-secondary" onClick={() => dispatch({ type: 'replyModal' })}>
																<span className="me-2"><i className="fa fa-reply" /></span>Reply
															</button>
														</div>
														<div className="profile-uoloaded-post pb-3">
															<img src={IMAGES.Profile8} alt="" className="img-fluid  w-100 rounded" />
															<Link className="post-title" to="/post-details">
																<h3 className="text-black">Collection of textile samples lay spread</h3>
															</Link>
															<p>
																A wonderful serenity has take possession of my
																entire soul like these sweet morning of spare which
																enjoy whole heart.A wonderful serenity has take
																possession of my entire soul like these sweet
																morning of spare which enjoy whole heart.
															</p>
															<button className="btn btn-primary me-2">
																<span className="me-2"><i className="fa fa-heart" /></span>Like
															</button>
															<button className="btn btn-secondary" onClick={() => dispatch({ type: 'replyModal' })}>
																<span className="me-2"> <i className="fa fa-reply" /></span>Reply
															</button>
														</div>

													</div>
												</Tab.Pane>
												<Tab.Pane id="about-me" eventKey='About'>
													<div className="profile-about-me">
														<div className="pt-4 border-bottom-1 pb-3">
															<h4 className="text-primary">About Me</h4>
															<p className="mb-2">
																A wonderful serenity has taken possession of my
																entire soul, like these sweet mornings of spring
																which I enjoy with my whole heart. I am alone, and
																feel the charm of existence was created for the
																bliss of souls like mine.I am so happy, my dear
																friend, so absorbed in the exquisite sense of mere
																tranquil existence, that I neglect my talents.
															</p>
															<p>
																A collection of textile samples lay spread out on
																the table - Samsa was a travelling salesman - and
																above it there hung a picture that he had recently
																cut out of an illustrated magazine and housed in a
																nice, gilded frame.
															</p>
														</div>
													</div>
													<div className="profile-skills mb-5">
														<h4 className="text-primary mb-2">Skills</h4>
														<Link to="/app-profile-1" className="btn btn-primary light mb-1 me-1"> Admin</Link>
														<Link to="/app-profile-1" className="btn btn-primary light mb-1 me-1" > Dashboard</Link>
														<Link to="/app-profile-1" className="btn btn-primary light mb-1 me-1">Photoshop</Link>
														<Link to="/app-profile-1" className="btn btn-primary light mb-1 me-1">Bootstrap</Link>
														<Link to="/app-profile-1" className="btn btn-primary light mb-1 me-1">Responsive</Link>
														<Link to="/app-profile-1" className="btn btn-primary light mb-1 me-1">Crypto</Link>
													</div>
													<div className="profile-lang  mb-5">
														<h4 className="text-primary mb-2">Language</h4>
														<Link to="/app-profile-1" className="text-muted pe-3 f-s-16">
															<i className="flag-icon flag-icon-us" />English
														</Link>
														<Link to="/app-profile-1" className="text-muted pe-3 f-s-16">
															<i className="flag-icon flag-icon-fr" />French
														</Link>
														<Link to="/app-profile-1" className="text-muted pe-3 f-s-16">
															<i className="flag-icon flag-icon-bd" />Bangla
														</Link>
													</div>
													<div className="profile-personal-info">
														<h4 className="text-primary mb-4">
															Personal Information
														</h4>
														<div className="row mb-2">
															<div className="col-3">
																<h5 className="f-w-500"> Name<span className="pull-right">:</span></h5>
															</div>
															<div className="col-9">
																<span>Mitchell C.Shay</span>
															</div>
														</div>
														<div className="row mb-2">
															<div className="col-3">
																<h5 className="f-w-500">Email<span className="pull-right">:</span></h5>
															</div>
															<div className="col-9">
																<span>example@examplel.com</span>
															</div>
														</div>
														<div className="row mb-2">
															<div className="col-3">
																<h5 className="f-w-500">Availability<span className="pull-right">:</span></h5>
															</div>
															<div className="col-9">
																<span>Full Time (Free Lancer)</span>
															</div>
														</div>
														<div className="row mb-2">
															<div className="col-3">
																<h5 className="f-w-500">Age<span className="pull-right">:</span></h5>
															</div>
															<div className="col-9">
																<span>27</span>
															</div>
														</div>
														<div className="row mb-2">
															<div className="col-3">
																<h5 className="f-w-500">  Location<span className="pull-right">:</span></h5>
															</div>
															<div className="col-9">
																<span>Rosemont Avenue Melbourne, Florida</span>
															</div>
														</div>
														<div className="row mb-2">
															<div className="col-3">
																<h5 className="f-w-500">Year Experience<span className="pull-right">:</span></h5>
															</div>
															<div className="col-9">
																<span>07 Year Experiences</span>
															</div>
														</div>
													</div>
												</Tab.Pane>
												<Tab.Pane id="profile-settings" eventKey='Setting'>
													<div className="pt-3">
														<div className="settings-form">
															<h4 className="text-primary">Account Setting</h4>
															<form onSubmit={(e) => e.preventDefault()}>
																<div className="row">
																	<div className="form-group mb-3 col-md-6">
																		<label className="form-label" >Email</label>
																		<input type="email" placeholder="Email" className="form-control" />
																	</div>
																	<div className="form-group mb-3 col-md-6">
																		<label className="form-label">Password</label>
																		<input type="password" placeholder="Password" className="form-control" />
																	</div>
																</div>
																<div className="form-group mb-3">
																	<label className="form-label">Address</label>
																	<input type="text" placeholder="1234 Main St" className="form-control" />
																</div>
																<div className="form-group mb-3">
																	<label className="form-label">Address 2</label>
																	<input type="text" placeholder="Apartment, studio, or floor" className="form-control" />
																</div>
																<div className="row">
																	<div className="form-group mb-3 col-md-6">
																		<label className="form-label" >City</label>
																		<input type="text" className="form-control" />
																	</div>
																	<div className="form-group mb-3 col-md-4">
																		<label className="form-label">State</label>
																		<select
																			className="form-control"
																			id="inputState"
																			defaultValue="option-1"
																		>
																			<option value="option-1">Choose...</option>
																			<option value="option-2">Option 1</option>
																			<option value="option-3">Option 2</option>
																			<option value="option-4">Option 3</option>
																		</select>
																	</div>
																	<div className="form-group mb-3 col-md-2">
																		<label className="form-label">Zip</label>
																		<input type="text" className="form-control" />
																	</div>
																</div>
																<div className="form-group mb-3">
																	<div className="form-check custom-checkbox">
																		<input
																			type="checkbox"
																			className="form-check-input"
																			id="gridCheck"
																		/>
																		<label
																			className="form-check-label"
																			htmlFor="gridCheck"
																		>
																			Check me out
																		</label>
																	</div>
																</div>
																<button className="btn btn-primary" type="submit">Sign in</button>
															</form>
														</div>
													</div>
												</Tab.Pane>
											</Tab.Content>
										</Tab.Container>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* send Modal */}
			<Modal className="modal fade" show={state.sendMessage} onHide={() => dispatch({ type: 'sendMessage' })} centered>
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Send Message</h5>
						<Button variant="" type="button" className="btn-close" data-dismiss="modal" onClick={() => dispatch({ type: 'sendMessage' })}> </Button>
					</div>
					<div className="modal-body">
						<form className="comment-form" onSubmit={(e) => { e.preventDefault(); dispatch({ type: 'sendMessage' }); }}>
							<div className="row">
								<div className="col-lg-6">
									<div className="form-group mb-3">
										<label htmlFor="author" className="text-black font-w600">  Name <span className="required"></span> </label>
										<input type="text" className="form-control" defaultValue="Author" name="Author" placeholder="Author" />
									</div>
								</div>
								<div className="col-lg-6">
									<div className="form-group mb-3">
										<label htmlFor="email" className="text-black font-w600"> Email <span className="required"></span></label>
										<input type="text" className="form-control" defaultValue="Email" placeholder="Email" name="Email" />
									</div>
								</div>
								<div className="col-lg-12">
									<div className="form-group mb-3">
										<label htmlFor="comment" className="text-black font-w600">Comment</label>
										<textarea rows={4} className="form-control" name="comment" placeholder="Comment" defaultValue={""} />
									</div>
								</div>
								<div className="col-lg-12">
									<div className="form-group mb-3">
										<input type="submit" value="Post Comment" className="submit btn btn-primary" name="submit" />
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</Modal>
			{/* Post Modal */}
			<Modal show={state.post} className="modal fade" id="postModal" onHide={() => dispatch({ type: 'postModal' })} centered>
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Post</h5>
						<Button variant="" type="button" className="close" data-dismiss="modal" onClick={() => dispatch({ type: 'postModal' })} >
							<span>×</span>
						</Button>

					</div>
					<div className="modal-body">
						<textarea name="textarea" id="textarea" cols={30} rows={5} className="form-control mb-2 bg-transparent" placeholder="Please type what you want...." defaultValue={""} />
						<Link className="btn btn-primary btn-rounded mt-1" to="/app-profile-1">Post</Link>
					</div>
				</div>
			</Modal>
			{/* Link Modal */}
			<Modal show={state.link} className="modal fade post-input" id="linkModal" onHide={() => dispatch({ type: 'linkModal' })} centered>
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Social Links</h5>
						<button type="button" className="btn-close" data-dismiss="modal" onClick={() => dispatch({ type: 'linkModal' })}>
						</button>
					</div>
					<div className="modal-body">
						<Link className="btn-social me-1 facebook" to="/app-profile-1"><i className="fab fa-facebook-f" /></Link>
						<Link className="btn-social me-1 google-plus" to="/app-profile-1"> <i className="fab fa-google-plus-g" /></Link>
						<Link className="btn-social me-1 linkedin" to="/app-profile-1"><i className="fab fa-linkedin-in" /></Link>
						<Link className="btn-social me-1 instagram" to="/app-profile-1"> <i className="fab fa-instagram" /></Link>
						<Link className="btn-social me-1 twitter" to="/app-profile-1"><i className="fab fa-twitter" /></Link>
						<Link className="btn-social me-1 youtube" to="/app-profile-1"><i className="fab fa-youtube" /></Link>
						<Link className="btn-social whatsapp" to="/app-profile-1"><i className="fab fa-whatsapp" /></Link>
					</div>
				</div>
			</Modal>
			{/* Camera Modal */}
			<Modal show={state.camera} className="modal fade" id="cameraModal" onHide={() => dispatch({ type: 'cameraModal' })} centered>
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Upload images</h5>
						<button type="button" className="btn-close" data-dismiss="modal" onClick={() => dispatch({ type: 'cameraModal' })}>
						</button>
					</div>
					<div className="modal-body">
						<div className="input-group custom_file_input mb-3">
							<span className="input-group-text border-0">Upload</span>
							<div className="form-file">
								<input type="file" className="form-file-input form-control" />
							</div>
						</div>
					</div>
				</div>
			</Modal>
			{/* Reply Modal */}
			<Modal show={state.reply} className="modal fade" id="replyModal" onHide={() => dispatch({ type: 'replyModal' })} centered>
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Post Reply</h5>
						<button type="button" className="btn-close" onClick={() => dispatch({ type: 'replyModal' })}></button>
					</div>
					<div className="modal-body">
						<form>
							<textarea className="form-control" rows="4">Message</textarea>
						</form>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-danger light" onClick={() => dispatch({ type: 'replyModal' })}>Close</button>
						<button type="button" className="btn btn-primary">Reply</button>
					</div>
				</div>
			</Modal>
		</Fragment>
	);
};

export default AppProfile;
