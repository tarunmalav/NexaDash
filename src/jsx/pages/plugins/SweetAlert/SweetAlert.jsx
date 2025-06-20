import { Fragment } from "react"; 
import Swal from "sweetalert2";
import PageTitle from "../../../layouts/PageTitle";
import hand from './../../../../assets/images/hand.png';

const customImageAlert = () => {
  Swal.fire({
    title: "Sweet !!",
    text: "Hey, Here's a custom image !!",
    imageUrl: hand
  });
}

function MainSweetAlert() {
  return (
    <Fragment>

      <PageTitle activeMenu="Sweet Alert" motherMenu="Home" pageContent={"Sweet Alert"} />
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-xxl-4 col-lg-4 col-md-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Sweet Wrong</h4>
                <div className="card-content">
                  <div className="sweetalert">
                    <button
                      onClick={() =>
                        Swal.fire("Oops", "Something went wrong!", "error")
                      }
                      className="btn btn-danger btn sweet-wrong"
                    >
                      Sweet Wrong
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-xxl-4 col-lg-4 col-md-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Sweet Message</h4>
                <div className="card-content">
                  <div className="sweetalert">

                    <button
                      onClick={() =>
                        Swal.fire("Hey, Here's a message !!", "")
                      }
                      className="btn btn-info btn sweet-message"
                    >
                      Sweet Message
                    </button>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-xxl-4 col-lg-4 col-md-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Sweet Text</h4>
                <div className="card-content">
                  <div className="sweetalert">
                    <button
                      onClick={() =>
                        Swal.fire("Hey, Here's a message !!", "It's pretty, isn't it?")
                      }
                      className="btn btn-primary btn sweet-text"
                    >
                      Sweet Text
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-xxl-4 col-lg-4 col-md-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Sweet Success</h4>
                <div className="card-content">
                  <div className="sweetalert">
                    <button
                      onClick={() =>
                        Swal.fire("Good job!", "You clicked the button!", "success")
                      }
                      className="btn btn-success btn sweet-success"
                    >
                      Sweet Success
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-xxl-4 col-lg-4 col-md-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Sweet Confirm</h4>
                <div className="card-content">
                  <div className="sweetalert">
                    <button
                      onClick={() =>
                        Swal.fire({
                          title: "Are you sure?",
                          text:
                            "Once deleted, you will not be able to recover this imaginary file!",
                          icon: "warning",
                          buttons: true,
                          dangerMode: true,
                        }).then((willDelete) => {
                          if (willDelete) {
                            Swal.fire("Poof! Your imaginary file has been deleted!", {
                              icon: "success",
                            });
                          } else {
                            Swal.fire("Your imaginary file is safe!");
                          }
                        })
                      }
                      className="btn btn-warning btn sweet-confirm"
                    >
                      Sweet Confirm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-xxl-4 col-lg-4 col-md-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Sweet Confirm Or Cancel</h4>
                <div className="card-content">
                  <div className="sweetalert">
                    <button
                      onClick={() =>
                        Swal.fire({
                          title: "Are you sure?",
                          text:
                            "Once deleted, you will not be able to recover this imaginary file!",
                          icon: "warning",
                          buttons: true,
                          dangerMode: true,
                        }).then((willDelete) => {
                          if (willDelete) {
                            Swal.fire("Poof! Your imaginary file has been deleted!", {
                              icon: "success",
                            });
                          } else {
                            Swal.fire("Your imaginary file is safe!");
                          }
                        })
                      }
                      className="btn btn-warning btn sweet-success-cancel"
                    >
                      Sweet Confirm Or Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-xxl-4 col-lg-4 col-md-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Sweet Image Message</h4>
                <div className="card-content">
                  <div className="sweetalert ">
                    <button
                      onClick={customImageAlert}
                      className="btn btn-info btn sweet-image-message  sweet-image-alert"
                    >
                      Sweet Image Message
                    </button>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-xxl-4 col-lg-4 col-md-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Sweet HTML</h4>
                <div className="card-content">
                  <div className="sweetalert">

                    <button
                      onClick={() =>
                        Swal.fire("Sweet !!", "true")
                      }
                      className="btn btn-primary btn sweet-html"
                    >
                      Sweet HTML
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Sweet Auto Close</h4>
                <div className="card-content">
                  <div className="sweetalert">
                    <button
                      onClick={() =>
                        Swal.fire(
                          "Click on either the button or outside the modal."
                        ).then((value) => {
                          Swal.fire(`The returned value is: ${value}`);
                        })
                      }
                      className="btn btn-danger btn sweet-auto"
                    >
                      Sweet Auto btn-close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Sweet Prompt</h4>
                <div className="card-content">
                  <div className="sweetalert">
                    <button
                      onClick={() =>
                        Swal.fire("Are you sure you want to do this?", {
                          buttons: ["Oh noez!", true],
                        })
                      }
                      className="btn btn-success btn sweet-prompt"
                    >
                      Sweet Prompt
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Sweet Ajax</h4>
                <div className="card-content"></div>
                <div className="sweetalert">
                  <button
                    onClick={() =>
                      Swal.fire({
                        title: "Are you sure?",
                        text:
                          "Once deleted, you will not be able to recover this imaginary file!",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                      }).then((willDelete) => {
                        if (willDelete) {
                          Swal.fire("Poof! Your imaginary file has been deleted!", {
                            icon: "success",
                          });
                        } else {
                          Swal.fire("Your imaginary file is safe!");
                        }
                      })
                    }
                    className="btn btn-info btn sweet-ajax"
                  >
                    Sweet Ajax
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MainSweetAlert;
