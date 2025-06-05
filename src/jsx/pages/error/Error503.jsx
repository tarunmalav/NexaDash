import { useEffect } from "react";
import { Link } from "react-router-dom";
 

function Error503() {
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
                                      <div className="dz-error" data-text="503">503</div>
                                      <h4 className="error-head"><i className="fa fa-times-circle text-danger"/> {" "} Service Unavailable </h4>
                                      <Link to="/" className="btn btn-secondary">BACK TO HOMEPAGE</Link>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          );
};

export default Error503;
