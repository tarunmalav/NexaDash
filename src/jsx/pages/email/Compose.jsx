import { Fragment, useEffect, useState } from "react";
import DropFile from "../../element/DropFile";
import PageTitle from "../../layouts/PageTitle";
import InboxSidebar from "../../element/InboxSidebar";

const Compose = () => {
	useEffect(() => {
		const element = document.querySelector(".content-body");
		element.classList.add("inbox-height");
	})
	const [active, setActive] = useState(false);

	return (
		<Fragment>
			<PageTitle activeMenu="Email Compose" motherMenu="Home" pageContent={"Email Compose"} />
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="card">
							<div className="card-body p-0">
								<div className="row g-0">
									<div className="col-xl-3 col-xxl-3">
										<div className={`mail-left-body ${active ? 'active' : ''}`}>
											<InboxSidebar Height="height800"/>
										</div>
									</div>
									<div className="col-xl-9 col-xxl-9">
										<div className="px-3 py-4">
											<div className="d-flex align-items-center">
												<h4 className="card-title d-md-none d-block">Email</h4>
												<div className={`email-tools-box float-end mb-2 ${active ? 'active' : ''}`} onClick={() => setActive(!active)}>
													<i className="fa-solid fa-list-ul" />
												</div>
											</div>
											<div className="compose-content">
												<form action="#">
													<div className="mb-3">
														<input type="text" className="form-control bg-transparent"
															placeholder=" To:" />
													</div>
													<div className="mb-3">
														<input type="text" className="form-control bg-transparent"
															placeholder=" Subject:" />
													</div>
													<div className="mb-3">
														<textarea id="email-compose-editor"
															className="textarea_editor form-control bg-transparent" rows="8"
															placeholder="Enter text ..."></textarea>
													</div>
												</form>
												<h5 className="mb-4"><i className="fa fa-paperclip" /> Attatchment</h5>
												<DropFile />
											</div>
											<div className="text-start mt-4 mb-3">
												<button className="btn btn-primary btn-sl-sm me-2" type="button">
													<span className="me-2">
														<i className="fa fa-paper-plane" />
													</span>Send
												</button>
												<button className="btn btn-danger light btn-sl-sm" type="button">
													<span className="me-2">
														<i className="fa fa-times" />
													</span>Discard
												</button>
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
	);
};

export default Compose;
