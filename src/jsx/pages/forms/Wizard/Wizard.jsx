import React, { Fragment, useState } from "react";
import { Stepper, Step } from 'react-form-stepper';
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import PageTitle from "../../../layouts/PageTitle";

function Wizard() {
	const [goSteps, setGoSteps] = useState(0);
	return (
		<Fragment>
			<PageTitle activeMenu="Form Wizard" motherMenu="Home" pageContent={"Form Wizard"} />
			<div className="container">
				<div className="row">
					<div className="col-xl-12 col-xxl-12">
						<div className="card">
							<div className="card-header">
								<h4 className="card-title">Form step</h4>
							</div>
							<div className="card-body">
								<div className="form-wizard">
									<Stepper as="ul" className="nav nav-wizard " activeStep={goSteps} label={false}>
										<Step as="li" className="nav-link" onClick={() => setGoSteps(0)} />
										<Step as="li" className="nav-link" onClick={() => setGoSteps(1)} />
										<Step as="li" className="nav-link" onClick={() => setGoSteps(2)} />
										<Step as="li" className="nav-link" onClick={() => setGoSteps(3)} />
									</Stepper>
									{goSteps === 0 && (
										<>
											<StepOne />
											<div className="text-end toolbar toolbar-bottom p-2">
												<button className="btn btn-primary sw-btn-next" onClick={() => setGoSteps(1)}>Next</button>
											</div>
										</>
									)}
									{goSteps === 1 && (
										<>
											<StepTwo />
											<div className="text-end toolbar toolbar-bottom p-2">
												<button className="btn btn-secondary sw-btn-prev me-1" onClick={() => setGoSteps(0)}>Previous</button>
												<button className="btn btn-primary sw-btn-next ms-1" onClick={() => setGoSteps(2)}>Next</button>
											</div>
										</>
									)}
									{goSteps === 2 && (
										<>
											<StepThree />
											<div className="text-end toolbar toolbar-bottom p-2">
												<button className="btn btn-secondary sw-btn-prev me-1" onClick={() => setGoSteps(1)}>Previous</button>
												<button className="btn btn-primary sw-btn-next ms-1" onClick={() => setGoSteps(3)}>Next</button>
											</div>
										</>
									)}
									{goSteps === 3 && (
										<>
											<StepFour />
											<div className="text-end toolbar toolbar-bottom p-2">
												<button className="btn btn-secondary sw-btn-prev me-1" onClick={() => setGoSteps(2)}>Previous</button>
												<button className="btn btn-primary sw-btn-next ms-1" onClick={() => setGoSteps(4)}>Submit</button>
											</div>
										</>
									)}

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Wizard;
