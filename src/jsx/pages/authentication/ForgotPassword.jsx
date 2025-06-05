import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo-full.png";
import { useEffect } from "react";
const ForgotPassword = () => {

  useEffect(() => {
    document.querySelector("html").setAttribute("class", "h-100");
    document.body.classList.add("vh-100");
  })
  const navigate = useNavigate();  
  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <>
      <div className="authincation h-100">
        <div className="container h-100">
          <div className="row justify-content-center h-100 align-items-center">
            <div className="col-md-6">
              <div className="authincation-content">
                <div className="row no-gutters">
                  <div className="col-xl-12">
                    <div className="auth-form">
                      <div className="text-center mb-3">
                        <Link to="/"><img src={logo} alt="" /></Link>
                      </div>
                      <h4 className="text-center mb-4">Forgot Password</h4>
                      <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                          <label><strong>Email</strong></label>
                          <input type="email" className="form-control" value="hello@example.com" />
                        </div>
                        <div className="text-center">
                          <button type="submit" className="btn btn-primary btn-block">SUBMIT</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
