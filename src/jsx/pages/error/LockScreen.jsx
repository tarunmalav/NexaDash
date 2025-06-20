import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo-full.png";
import login from "../../../assets/images/login.png";

const LockScreen = () => {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/");
  };
  const [openEyes, setOpenEyes] = useState(true);
  useEffect(() => {
    document.querySelector("html").setAttribute("class", "h-100");
    document.body.classList.add("vh-100");
  }, []);

  return (
    <>
      <div className="authincation h-100 d-flex align-items-center justify-content-center bg-white">
        <div className="container-fluid h-100 ">
          <div className="row h-100">
            <div className="col-lg-6 col-md-7 col-sm-12 mx-auto align-self-center">
              <div className="login-form">
                <div className="text-center pages-logo">
                  <Link to="/"><img src={logo} className="mb-3" alt="" /></Link>
                  <h3 className="title">Account Locked</h3>
                  <p>Sign in to your account to start using W3CRM</p>
                </div>
                <form onSubmit={(e) => submitHandler(e)}> 
                  
                  <div className="mb-4 position-relative">
                    <label className="form-label">Password<span className="text-danger"> *</span></label>
                    <input type={openEyes ? "password" : "value"} className="form-control" defaultValue="123456" />
                    <span className={`show-pass eye ${openEyes ? '' : 'active'}`} onClick={() => setOpenEyes(!openEyes)}>
                      <i className="fa fa-eye-slash" />
                      <i className="fa fa-eye" />
                    </span>
                  </div>
                  <div className="form-row d-flex justify-content-between mt-4 mb-2">
                    <div className="mb-4">
                      <div className="form-check custom-checkbox mb-3">
                        <input type="checkbox" className="form-check-input" id="customCheckBox1" />
                        <label className="form-check-label" htmlFor="customCheckBox1">Remember my preference</label>
                      </div>
                    </div>
                    <div className="mb-4">
                      <Link to="/page-forgot-password" className="btn-link text-primary">Forgot Password?</Link>
                    </div>
                  </div>
                  <div className="text-center mb-4 d-grid">
                    <button type="submit" className="btn btn-primary btn-block">Unlock</button>
                  </div>
                  <h6 className="login-title"><span className="mx-3">Or continue with</span></h6>

                  <div className="mb-3">
                    <ul className="d-flex align-self-center justify-content-center">
                      <li><Link target="_blank" to="https://www.facebook.com/" className="fab fa-facebook-f btn-facebook"></Link></li>
                      <li><Link target="_blank" to="https://www.google.com/" className="fab fa-google-plus-g btn-google-plus mx-2"></Link></li>
                      <li><Link target="_blank" to="https://www.linkedin.com/" className="fab fa-linkedin-in btn-linkedin me-2"></Link></li>
                      <li><Link target="_blank" to="https://twitter.com/" className="fab fa-twitter btn-twitter"></Link></li>
                    </ul>
                  </div>
                  <p className="text-center">Not registered?
                    <Link className="btn-link text-primary" to="/page-register">Register</Link>
                  </p>
                </form>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="pages-left h-100">
                <div className="login-content">
                  <Link to="/"><img src={logo} className="mb-3 logo-dark" alt="" /></Link> 
                  <p>CRM dashboard uses line charts to visualize customer-related metrics and trends over time.</p>
                </div>
                <div className="login-media text-center">
                  <img src={login} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LockScreen;
