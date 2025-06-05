import { Link } from "react-router-dom"
import { useState } from "react"
import Nouislider from "nouislider-react"; 

function ShopSidebar({ className }) {
    const [show, setShow] = useState(false);
    const [sliderValues, setSliderValues] = useState(["40", "386"]);  
    const handleUpdate = (values) => {
    setSliderValues([values[0], values[1]]);
  };
    return (
        <>
            <div className={`${className}  mail-left-body border-end-0 ${show ? "active" : ""}`}>
                <div className="filter-sidebar">
                    <div className="card">
                        <div className="card-header p-4 border-0 pb-0">
                            <h5 className="mb-0"><i className="fas fa-sort-amount-up-alt me-2" />Filters</h5>
                            <Link to={"#"} className="text-primary">Clear All</Link>
                        </div>
                        <div className="card-body p-0">
                            <div className="px-4 mb-3 pt-3">
                                <h6 className="ft-title">Categories</h6>
                                <div className="form-check  check-xs">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault"> Shop </label>
                                    <span className="badge badge-xs badge-light float-end">2,712</span>
                                </div>
                                <div className="form-check check-xs">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault-1" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault-1"> Watch </label>
                                    <span className="badge badge-xs  badge-light float-end">530</span>
                                </div>
                                <div className="form-check  check-xs">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault-3" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault-3"> Dresss </label>
                                    <span className="badge badge-xs  badge-light float-end">250</span>
                                </div>
                            </div>
                            <div className="px-4 mb-3">
                                <h6 className="ft-title">Price</h6>
                                <div className="form-check  check-xs">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault-4" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault-4"> $0 - $599 </label>
                                </div>
                                <div className="form-check check-xs">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault-5" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault-5"> $0 - $599 </label>
                                </div>
                                <div className="form-check check-xs">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault-6" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault-6"> $0 - $599 </label>
                                </div>
                            </div>
                            <div className="px-4 mb-3">
                                <h6 className="ft-title">Price Range</h6>
                                <div className="price-slide range-slider mt-3">
                                    <div className="price">  
                                        <div id="slider-tooltips-product" className="range-slider style-1 mb-3"> 
                                            <Nouislider 
                                               connect  
                                                start={[40, 386]}
                                                behaviour='tap'
                                                range={{
                                                    min: [0],
                                                    max: [400],
                                                }}
                                                onUpdate={handleUpdate} 
                                            />  
                                            <div>
                                                <span className="example-val" id="slider-margin-value-min"> ${sliderValues[0]}</span>
                                                <span className="example-val" id="slider-margin-value-max"> ${sliderValues[1]}</span>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 mb-3">
                                <h6 className="ft-title">Discount</h6>
                                <div className="form-check check-xs">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault-7" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault-7"> 0% - 20% </label>
                                </div>
                                <div className="form-check check-xs">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault-8" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault-8"> 40% - 60% </label>
                                </div>
                                <div className="form-check check-xs">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault-9" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault-9"> 0% - 20% </label>
                                </div>
                                <div className="form-check check-xs">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault-10" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault-10"> 40% - 60% </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-md-none d-flex align-items-center pb-2">
                <h4 className="card-title--medium mb-0">Filter</h4>
                <div className={`email-tools-box p-0 ${show ? "active" : ""}`} onClick={() => setShow(!show)}>
                    <i className="fas fa-sort-amount-up-alt" />
                </div>
            </div>
        </>
    )
}

export default ShopSidebar