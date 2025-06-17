import { Link } from 'react-router-dom';

const MenuAccordBlog1 = () =>{
    return(
        <div className="row">
            <div className="col-xl-12">
                <form>
                    <div className="mb-3">
                        <label  className="form-label">URL</label>
                        <input type="text" className="form-control" placeholder="https://nexadash.dexignzone.com" />
                    </div>
                </form>													
            </div>
            <div className="col-xl-6">
                <form>
                    <div className="mb-3">
                        <label  className="form-label">Navigation Label</label>
                        <input type="text" className="form-control" placeholder="Contact Us" />
                    </div>
                </form>
            </div>
            <div className="col-xl-6">
                <form>
                    <div className="mb-3">
                        <label  className="form-label">Title Attribute</label>
                        <input type="text" className="form-control" placeholder="Contact Us" />
                    </div>
                </form>
            </div>
            <div className="d-flex align-items-center">
                <Link to={"#"} className="remove">Remove</Link><span className="mx-2 ps-0">|</span>
                <Link to={"#"} className='text-hover cancel'>Cancel</Link>
            </div>
        </div>	
    )
}

const MenuAccordBlog2 = () =>{
    return(
        <div className="row">
            <div className="col-xl-6">
                <form>
                    <div className="mb-3">
                        <label  className="form-label">Navigation Label</label>
                        <input type="text" className="form-control" placeholder="Terms and Conditions" />
                    </div>
                </form>
            </div>
            <div className="col-xl-6">
                <form>
                    <div className="mb-3">
                        <label  className="form-label">Title Attribute</label>
                        <input type="text" className="form-control" placeholder="Terms and Conditions" />
                    </div>
                </form>
            </div>
            <div className="col-xl-12">
                <p className="dlab-terms">Original: <Link to={"#"}>Terms and Conditions</Link></p>
            </div>
            <div className="d-flex align-items-center">
                <Link to={"#"} className="remove">Remove</Link><span className="mx-2 ps-0">|</span>
                <Link to={"#"} className='text-hover cancel'>Cancel</Link>
            </div>
        </div>	
    )
}

export {MenuAccordBlog1, MenuAccordBlog2};