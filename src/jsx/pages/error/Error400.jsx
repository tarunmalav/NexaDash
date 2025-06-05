import { useEffect } from "react";
import { Link } from "react-router-dom";

function Error400() { 
    useEffect(() => {
        document.body.classList.add('vh-100');
    }, [])
    return (
        <div className="authincation h-100">
            <div className="container ">
                <div className="row justify-content-center h-100 align-items-center">
                    <div className="col-md-6">
                        <div className="error-page">
                            <div className="error-inner text-center">
                                <div className="dz-error" data-text="400">400</div>
                                <h2 className="error-head">We are sorry. But the page you are looking for cannot be found.</h2>
                                <Link to="/" className="btn btn-secondary">BACK TO HOMEPAGE</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error400;
