import { useReducer } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Button, Modal } from "react-bootstrap"; 

import LightGallery from 'lightgallery/react'; 
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';  
import { IMAGES } from "../../constant/Theme";
import PageTitle from "../../layouts/PageTitle";

const galleryBlog = [
	{image: IMAGES.Profile3}, {image: IMAGES.Profile4},
	{image: IMAGES.Profile2}, {image: IMAGES.Profile4},
	{image: IMAGES.Profile3}, {image: IMAGES.Profile2},
];

const mediaBlog = [
	{image: IMAGES.Profile5},
	{image: IMAGES.Profile6},
	{image: IMAGES.Profile7},
];

const initialState = false;
const reducer = (state, action) =>{
	switch (action.type){
		case 'sendMessageOpen':
			return { ...state, sendMessage: true }
		case 'sendMessageClose':			
			return { ...state, sendMessage: false }		
			
		default:
        return state	
	}	
}

const PostDetails = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

  const onInit = () => {
      //console.log('lightGallery has been initialized');
  };
		
  return (
    <>
      
        <PageTitle activeMenu="Post Detail" motherMenu="Home"  pageContent="Post Detail"/>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="profile card card-body px-3 pt-3 pb-0">
                <div className="profile-head">
                  <div className="photo-content ">
                    <div className="cover-photo rounded"></div>
                  </div>
                  <div className="profile-info">
                    <div className="profile-photo">
                      <img
                        src={IMAGES.profile}
                        className="img-fluid rounded-circle"
                        alt="profile"
                      />
                    </div>
                    <div className="profile-details">
                      <div className="profile-name px-3 pt-2">
                        <h4 className="text-primary mb-0">Mitchell C. Shay</h4>
                        <p>UX / UI Designer</p>
                      </div>
                      <div className="profile-email px-2 pt-2">
                        <h4 className="text-muted mb-0">hello@email.com</h4>
                        <p>Email</p>
                      </div>
                      <Dropdown className="dropdown ms-auto" align="end"> 
                        <Dropdown.Toggle
                          variant="primary"
                          className="btn btn-primary light sharp i-false"
                          data-toggle="dropdown"
                          aria-expanded="true"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg" 
                            width="18px"
                            height="18px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x="0" y="0" width="24" height="24"></rect>
                              <circle
                                fill="#000000"
                                cx="5"
                                cy="12"
                                r="2"
                              ></circle>
                              <circle
                                fill="#000000"
                                cx="12"
                                cy="12"
                                r="2"
                              ></circle>
                              <circle
                                fill="#000000"
                                cx="19"
                                cy="12"
                                r="2"
                              ></circle>
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                          <Dropdown.Item className="dropdown-item">
                            <i className="fa fa-user-circle text-primary me-2" />
                            View profile
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item">
                            <i className="fa fa-users text-primary me-2" />
                            Add to close friends
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item">
                            <i className="fa fa-plus text-primary me-2" />
                            Add to group
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item">
                            <i className="fa fa-ban text-primary me-2" />
                            Block
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="row">
            <div className="col-xl-4">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="profile-statistics">
                        <div className="text-center">
                          <div className="row">
                            <div className="col">
                              <h3 className="m-b-0">150</h3><span>Follower</span>
                            </div>
                            <div className="col">
                              <h3 className="m-b-0">140</h3> <span>Place Stay</span>
                            </div>
                            <div className="col">
                              <h3 className="m-b-0">45</h3> <span>Reviews</span>
                            </div>
                          </div>
                          <div className="mt-4">
                            <Link	to="/post-details"	className="btn btn-primary mb-1 me-1" onClick={() => dispatch({type:'followOpen'})}>Follow</Link>     
                            <Link to={"#"} className="btn btn-primary mb-1 ms-1" onClick={() => dispatch({type:'sendMessageOpen'})}>Send Message</Link>
                          </div>
                        </div>
                        {/* send Modal */}
                        <Modal className="modal fade" show={state.sendMessage} centered onHide={() => dispatch({type:'sendMessageClose'})}>
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title">Send Message</h5>
                              <Button variant="" type="button" className="btn-close" data-dismiss="modal" onClick={() => dispatch({type:'sendMessageClose'})}> </Button>
                            </div>
                            <div className="modal-body">
                              <form className="comment-form" onSubmit={(e) => { e.preventDefault();  dispatch({type:'sendMessageClose'}); }}>
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="form-group mb-3">
                                    <label htmlFor="author" className="text-black font-w600">  Name <span className="required"></span> </label>
                                    <input type="text" className="form-control" defaultValue="Author" name="Author" placeholder="Author" />
                                    </div>
                                  </div>
                                <div className="col-lg-6">
                                  <div className="form-group mb-3">
                                    <label htmlFor="email" className="text-black font-w600"> Email <span className="required"></span></label>
                                    <input type="text" className="form-control" defaultValue="Email" placeholder="Email" name="Email"/>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="form-group mb-3">
                                    <label htmlFor="comment" className="text-black font-w600">Comment</label>
                                    <textarea rows={8} className="form-control" name="comment" placeholder="Comment" defaultValue={""}/>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="form-group mb-3">
                                     <input type="submit" value="Post Comment" className="submit btn btn-primary" name="submit"/>
                                  </div>
                                </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </Modal>	
                      </div>
                    </div>
                  </div>
                </div>	
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-header border-0 pb-0">
                      <h5 className="text-primary">Today Highlights</h5>
                    </div>	
                    <div className="card-body pt-3"	>	
                      <div className="profile-blog ">
                        <img  src={IMAGES.Profile1}  alt="profile" className="img-fluid  mb-4 w-100" />
                        <Link to="/post-details"> <h4>Darwin Creative Agency Theme</h4> </Link>
                        <p className="mb-0">
                          A small river named Duden flows by their place and supplies
                          it with the necessary regelialia. It is a paradisematic
                          country, in which roasted parts of sentences fly into your
                          mouth.
                        </p>
                      </div>
                    </div>	
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-header border-0 pb-0">
                      <h5 className="text-primary ">Interest</h5>
                    </div>
                    <div className="card-body pt-3">
                      <div className="profile-interest ">  
                          <LightGallery
                            onInit={onInit}
                            speed={500}
                            plugins={[lgThumbnail, lgZoom]}
                            elementClassNames="row sp4"
                          >
                            
                            {galleryBlog.map((item,index)=>(
                              <div data-src={item.image} className="col-lg-4 col-xl-4 col-sm-4 col-6 int-col mb-1" key={index}>
                                <img className="px-1 py-1 img-fluid rounded" src={item.image} style={{width:"100%"}} alt="gallery"/>
                              </div>
                            ))}
                          </LightGallery>	                          
                      </div>
                    </div>	
                  </div>
                </div>	
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-header border-0 pb-0">
                      <h5 className="text-primary">Our Latest News</h5>
                    </div>	
                    <div className="card-body pt-3">
                        <div className="profile-news">
                          {mediaBlog.map((item, index)=>(
                            <div className="media pt-3 pb-3" key={index}>
                              <img src={item.image} alt="" className="me-3 rounded" width="75" />
                              <div className="media-body">
                                <h5 className="m-b-5"><Link to="/post-details" className="text-black">Collection of textile samples</Link></h5>
                                <p className="mb-0">I shared this on my fb wall a few months back, and I thought.</p>
                              </div>
                            </div>
                          ))}	
                        </div>
                    </div>	
                  </div>
                </div>	
              </div>	
            </div>	
            <div className="col-xl-8">
              <div className="card">
                <div className="card-body">
                  <div className="post-details">
                    <h3 className="mb-2 text-black">
                      Collection of textile samples lay spread
                    </h3>

                    <ul className="mb-4 post-meta d-flex flex-wrap">
                      <li className="post-author me-3">By Admin</li>
                      <li className="post-date me-3">
                        <i className="far fa-calendar-plus me-2" />
                        18 May 2023
                      </li>
                      <li className="post-comment">
                        <i className="far fa-comment me-2" /> 28
                      </li>
                    </ul>

                    <img src={IMAGES.Profile8} alt="" className="img-fluid mb-3 w-100 rounded" />
                    <p>
                      A wonderful serenity has take possession of my entire soul
                      like these sweet morning of spare which enjoy whole heart.A
                      wonderful serenity has take possession of my entire soul
                      like these sweet morning of spare which enjoy whole heart.
                    </p>
                    <p>
                      A collection of textile samples lay spread out on the table
                      - Samsa was a travelling salesman - and above it there hung
                      a picture that he had recently cut out of an illustrated
                      magazine and housed in a nice, gilded frame.
                    </p>
                    <blockquote>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Has been the industry's standard text
                      ever since the 1500s, when an unknown printer took a galley
                      of type and scrambled it to make a type specimencenturies.
                    </blockquote>
                    <p>
                      A wonderful serenity has taken possession of my entire soul,
                      like these sweet mornings of spring which I enjoy with my
                      whole heart. I am alone, and feel the charm of existence was
                      created for the bliss of souls like mine.I am so happy, my
                      dear friend, so absorbed in the exquisite sense of mere
                      tranquil existence, that I neglect my talents.
                    </p>
                    <div className="profile-skills mt-5 mb-5">
                      <h4 className="text-primary mb-2">Skills</h4>
                      <Link
                        to="/post-details"
                        className="btn btn-primary light mb-1 me-1"
                      >
                        Admin
                      </Link>
                      <Link
                        to="/post-details"
                        className="btn btn-primary light mb-1 me-1"
                      >
                        Dashboard
                      </Link>
                      <Link
                        to="/post-details"
                        className="btn btn-primary light mb-1 me-1"
                      >
                        Photoshop
                      </Link>
                      <Link
                        to="/post-details"
                        className="btn btn-primary light mb-1 me-1"
                      >
                        Bootstrap
                      </Link>
                      <Link
                        to="/post-details"
                        className="btn btn-primary light mb-1 me-1"
                      >
                        Responsive
                      </Link>
                      <Link
                        to="/post-details"
                        className="btn btn-primary light mb-1 me-1"
                      >
                        Crypto
                      </Link>
                    </div>
                    <div className="comment-respond" id="respond">
                      <h4
                        className="comment-reply-title text-primary mb-3"
                        id="reply-title"
                      >
                        Leave a Reply{" "}
                      </h4>
                      <form
                        className="comment-form"
                        id="commentform"
                        onSubmit={(e) => e.preventDefault()}
                      >
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form-group mb-3">
                              <label
                                htmlFor="author"
                                className="text-black font-w600"
                              >
                                Name <span className="required"/> 
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                defaultValue="Author"
                                name="Author"
                                placeholder="Author"
                                id="author"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group mb-3">
                              <label
                                htmlFor="email"
                                className="text-black font-w600"
                              >
                                Email <span className="required"/> 
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                defaultValue="Email"
                                placeholder="Email"
                                name="Email"
                                id="email"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group mb-3">
                              <label
                                htmlFor="comment"
                                className="text-black font-w600"
                              >
                                Comment
                              </label>
                              <textarea
                                rows={8}
                                className="form-control h-100"
                                name="comment"
                                placeholder="Comment"
                                id="comment"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group">
                              <input
                                type="submit"
                                value="Post Comment"
                                className="submit btn btn-primary"
                                id="submit"
                                name="submit"
                              />
                            </div>
                          </div>
                        </div>
                      </form>
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

export default PostDetails;
