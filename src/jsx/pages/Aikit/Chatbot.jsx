import { useReducer, useState } from 'react';
import Select from 'react-select';
import { IMAGES } from '../../constant/Theme.jsx';
import MainContent from '../../components/aikit/MainContent.jsx';
import TopMenus from '../../components/aikit/TopMenus.jsx';
import Nouislider from "nouislider-react";
import { Form } from 'react-bootstrap';
import PageTitle from '../../layouts/PageTitle.jsx';

const data = [
	{ icon: IMAGES.englandsvg, value: 1, label: 'England', },
	{ icon: IMAGES.indiasvg, value: 2, label: 'India', },
	{ icon: IMAGES.uaesvg, value: 3, label: 'UAE' },
]
const options = [
	{ value: '0', label: 'All' },
	{ value: '1', label: 'One' },
]
const initialState = {
	mainColor: "#0d99ff",
	titleColor: "#2c2c2c",
	aiBubbleColor: "#495A69",
	aiTextColor: "#9084B1",
	userBubbleColor: "#9084B1",
	userTextColor: "#0d99ff",
};
function reducer(state, action) {
	return {
		...state,
		[action.type]: action.payload,
	};
}
function Chatbot() {
	const [selectedOption, setSelectedOption] = useState(data[0]);
	const handleChange = e => {
		setSelectedOption(e);
	}
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<>
			<PageTitle activeMenu="Chatbot" motherMenu="Home" pageContent={"Scheduled"} />
			<div className="container">
				<div className="row">
					<div className="col-xl-12">
						<MainContent detail="This is a demo of AIKit plugin made for you to test the experience of using the plugin. "
							subtitle="AIKit Chatbot allows you to create a chatbot that can be used on your website. You, or your users can use it to answer questions and provide support about your products or services." />
						<TopMenus id={5} />
						<div className="card h-auto">
							<div className="card-header border-0 pb-0">
								<h4 className="heading mb-0">Auto Writer</h4>
								<Select
									className="custom-react-select img-select flagselect select2dark imageselect"
									isSearchable={false}
									value={selectedOption}
									options={data}
									onChange={handleChange}
									getOptionLabel={e => (
										<div style={{ display: 'flex', alignItems: 'center' }}>
											<img src={e.icon} alt="" style={{ width: 20, marginRight: 5 }} />
											<span style={{ marginLeft: 5 }}>{e.label}</span>
										</div>
									)}
								/>
							</div>
							<div className="card-body">
								<div className="row">
									<div className="col-xl-2">
										<p className="mb-2">Choose content type:</p>
										<div className="btn-group d-block" role="group">
											<input type="radio" className="btn-check" name="btnradio" id="btnradio1" defaultChecked />
											<label className="btn btn-outline-primary btn-sm rounded" htmlFor="btnradio1">Yes</label>
											<input type="radio" className="btn-check" name="btnradio" id="btnradio2" defaultChecked />
											<label className="btn btn-outline-primary btn-sm rounded ms-2" htmlFor="btnradio2">No</label>
										</div>
									</div>
									<div className="col-xl-3">
										<p className="mb-2">Default view:</p>
										<div className="btn-group d-block" role="group" >
											<input type="radio" className="btn-check" name="btnradio" id="btnradio3" defaultChecked />
											<label className="btn btn-outline-primary btn-sm rounded" htmlFor="btnradio3">Collapsed</label>
											<input type="radio" className="btn-check" name="btnradio" id="btnradio4" defaultChecked />
											<label className="btn btn-outline-primary btn-sm rounded ms-2" htmlFor="btnradio4">Expanded</label>

										</div>
									</div>

									<div className="col-xl-7"></div>
									<div className="col-xl-4">
										<label className="form-label">Chatbot model</label>
										<div className="mb-3">
											<Form.Select className="default-select form-control new-select">
												<option defaultValue>gpt-3.5-turbo</option>
												<option value="1">gpt-3.6-turbo</option>
											</Form.Select>
											<div id="emailHelp" className="form-text">For best results, please use chat models like gpt-3.5-turbo or gpt-4.</div>
										</div>
									</div>
									<div className="col-xl-4">
										<label className="form-label">Show Chatbot on</label>
										<div className="mb-3">
											<Form.Select className="default-select form-control new-select">
												<option defaultValue>Frontend Only</option>
												<option value="1">Backend Only</option>
											</Form.Select>
										</div>
									</div>
									<div className="col-xl-4">
										<div className="mb-3">
											<label htmlFor="exampleFormControlInput1" className="form-label">Max response tokens</label>
											<input type="number" className="form-control" id="exampleFormControlInput1" placeholder="150" />
										</div>
									</div>
									<div className="col-xl-6">
										<div className="mb-3">
											<textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
												defaultValue={"Prompt stop sequence"}
											/>
											<div id="emailHelp-1" className="form-text">Please set this only if you are using a fine-tuned model. Leave empty if you are using any of the built-in models. Completion stop sequence is used to mark the stop of the completion.</div>
										</div>
									</div>
									<div className="col-xl-6">
										<div className="mb-3">
											<textarea className="form-control" id="exampleFormControlTextarea2" rows="3"
												defaultValue={"Completion stop sequence"}
											/>

											<div id="emailHelp-2" className="form-text">Please set this only if you are using a fine-tuned model. Leave empty if you are using any of the built-in models. Completion stop sequence is used to mark the stop of the completion.</div>
										</div>
									</div>
									<div className="col-xl-12">
										<div className="mb-3">
											<textarea className="form-control" id="exampleFormControlTextarea3" rows="5"
												defaultValue={"Chatbot Context"}
											/>
											<div id="emailHelp-3" className="form-text">You can use this field to set the behaviour of the chatbot. For example, use something like "You are a helpful assistant." or "Answer in the style of Shakespeare."</div>
										</div>
										<label className="form-label">Show Chatbot only for user role</label>
										<div className="mb-3">
											<Select
												isSearchable={false}
												options={options} className="custom-react-select select2dark"
											/>
										</div>
										<div className="form-check">
											<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
											<label className="form-check-label" htmlFor="flexCheckDefault"> Page content aware?</label>
										</div>
										<div id="emailHelp-4" className="form-text">If enabled, the chatbot will be able to use the content of the current page to generate better responses. Important: it will increase your API costs!
										</div>
									</div>
								</div>
							</div>
							<div className="card-footer">
								<h4 className="heading">Create Repurpose Job</h4>
								<div className="row">
									<div className="col-xl-4">
										<div className="mb-3">
											<label htmlFor="exampleFormControlInput4" className="form-label">Title</label>
											<input type="text" className="form-control" id="exampleFormControlInput4" placeholder="Chat with us" />
										</div>
									</div>
									<div className="col-xl-4">
										<div className="mb-3">
											<label htmlFor="exampleFormControlInput2" className="form-label">Input text placeholder</label>
											<input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Input text placeholder" />
										</div>
									</div>
									<div className="col-xl-4">
										<div className="mb-3">
											<label htmlFor="exampleFormControlInput3" className="form-label">Start Message</label>
											<input type="text" className="form-control" id="exampleFormControlInput3" placeholder="Hi there! How can I help you?" />
										</div>
									</div>
									<div className="col-xl-12 mt-3">
										<div className="check-ai mb-3">
											<h4 className="heading mb-2">Width (px)</h4>
											<div id="slider" className=" ai-slider">
												<Nouislider
													connect={[true, false]}
													start={20}
													step={10}
													behaviour="snap"
													range={{
														min: 0,
														max: 100
													}}
												/>
											</div>
										</div>
									</div>
									<div className="col-xl-2 col-sm-4">
										<div className="example style-1">
											<p className="mb-1">Main Color</p>
											<input
												type="color"
												className="as_colorpicker asColorPicker-trigger"
												value={state.mainColor}
												onChange={(e) => dispatch({ type: "mainColor", payload: e.target.value })}
											/>
										</div>
									</div>

									<div className="col-xl-2 col-sm-4">
										<div className="example style-1">
											<p className="mb-1">Title Color</p>
											<input
												type="color"
												className="as_colorpicker asColorPicker-trigger"
												value={state.titleColor}
												onChange={(e) => dispatch({ type: "titleColor", payload: e.target.value })}
											/>
										</div>
									</div>

									<div className="col-xl-2 col-sm-4">
										<div className="example style-1">
											<p className="mb-1">AI Message Bubble Color</p>
											<input
												type="color"
												className="as_colorpicker asColorPicker-trigger"
												value={state.aiBubbleColor}
												onChange={(e) => dispatch({ type: "aiBubbleColor", payload: e.target.value })}
											/>
										</div>
									</div>

									<div className="col-xl-2 col-sm-4">
										<div className="example style-1">
											<p className="mb-1">AI Message Text Color</p>
											<input
												type="color"
												className="as_colorpicker asColorPicker-trigger"
												value={state.aiTextColor}
												onChange={(e) => dispatch({ type: "aiTextColor", payload: e.target.value })}
											/>
										</div>
									</div>

									<div className="col-xl-2 col-sm-4">
										<div className="example style-1">
											<p className="mb-1">User Bubble Color</p>
											<input
												type="color"
												className="as_colorpicker asColorPicker-trigger"
												value={state.userBubbleColor}
												onChange={(e) => dispatch({ type: "userBubbleColor", payload: e.target.value })}
											/>
										</div>
									</div>

									<div className="col-xl-2 col-sm-4">
										<div className="example style-1">
											<p className="mb-1">User Message Text Color</p>
											<input
												type="color"
												className="as_colorpicker asColorPicker-trigger"
												value={state.userTextColor}
												onChange={(e) => dispatch({ type: "userTextColor", payload: e.target.value })}
											/>
										</div>
									</div>

								</div>
								<button type="button" className="btn btn-primary float-end mt-3">Save Settings</button>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	);
};

export default Chatbot;