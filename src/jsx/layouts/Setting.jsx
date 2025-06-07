import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import demo1 from '../../assets/images/demo/pic1.jpg';
import demo2 from '../../assets/images/demo/pic2.jpg';
import demo3 from '../../assets/images/demo/pic3.jpg';
import demo4 from '../../assets/images/demo/pic4.jpg';
import demo5 from '../../assets/images/demo/pic5.jpg';
import demo6 from '../../assets/images/demo/pic6.jpg';
import demo7 from '../../assets/images/demo/pic7.jpg';
import demo8 from '../../assets/images/demo/pic8.jpg';

const Setting2 = () => {
    const [selectedSidebar, setSelectedSidebar] = useState('full');
    const [settingToggle, setSettingToggle] = useState(false);
    const [demoToggle, setDemoToggle] = useState(false);
    const {
        sidebarposition,
        changePrimaryColor,
        changeNavigationHader,
        changeSideBarPostion,
        changeHeaderPostion,
        headerposition,
        changeSideBarLayout,
        sidebarLayout,
        colors,
        chnageHaderColor,
        chnageSidebarColor,
        changeBackground,
        background,
        setDemoTheme,
        sideBarOption,
        sideBarStyle,
    } = useContext(ThemeContext);
    const handleThemeMode = () => {
        if (background.value === 'dark') {
            changeBackground({ value: "light", label: "Light" });
        } else {
            changeBackground({ value: "dark", label: "Dark" });
        }
    }
    const handleSideBarPosition = () => {
        if (sidebarposition.value === 'static') {
            changeSideBarPostion({ value: "fixed", label: "Fixed" });
        } else {
            changeSideBarPostion({ value: "static", label: "static" })
        }
    }
    const handleheaderPositionn = () => {
        if (headerposition.value === 'static') {
            changeHeaderPostion({ value: "fixed", label: "Fixed" });
        } else {
            changeHeaderPostion({ value: "static", label: "static" })
        }
    }
    const handleSiderbarlayout = () => {
        if (sidebarLayout.value === 'vertical') {
            changeSideBarLayout({ value: "horizontal", label: "horizontal" });
        } else {
            changeSideBarLayout({ value: "vertical", label: "vertical" })
        }
    }
    const handleSidebarChange = (data) => {
        setSelectedSidebar(data.value); // update local state
        changeSideBarLayout({ value: data.value, label: data.label }); // call context method
        document.body.setAttribute("data-sidebar-style", data.value); // apply actual effect
    };

    return (
        <>
            <div className={`sidebar-right ${settingToggle ? "show" : ""}`}>
                <div className="bg-overlay" onClick={() => setSettingToggle(!settingToggle)}></div>
                <Link to="#" className="sidebar-right-trigger wave-effect wave-effect-x" onClick={() => setSettingToggle(!settingToggle)} >
                    <span><i className="fa fa-cog fa-spin" /></span>
                </Link>
                <Link to="#" className="sidebar-close-trigger" onClick={() => setSettingToggle(!settingToggle)} >
                    <span><i className="la-times las" /> </span>
                </Link>
                <div className="sidebar-right-inner">
                    <div className="customiz">
                        <h4>Customize</h4>
                        <span>Customize Your Style And Preferences</span>
                    </div>
                    <div className="dz-scroll switcher-scroll">
                        <div>
                            <span>THEME</span>
                        </div>
                        <div className="admin-settings">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="align-items-center d-flex justify-content-between select-thems">
                                        <div className="d-mode">
                                            <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_4_82)">
                                                    <path d="M12.025 23.3407L8.62955 20.0479H3.95118V15.3728L0.584229 12L3.95208 8.62704V3.94519H8.6272L12.025 0.572266L15.3731 3.94497H20.055V8.62694L23.4277 12L20.0549 15.3704V20.0488H15.3728L12.025 23.3407ZM12.025 18.3445C13.7812 18.3445 15.2745 17.7251 16.5049 16.4863C17.7353 15.2474 18.3506 13.7439 18.3506 11.9757C18.3506 10.2214 17.7348 8.72844 16.5034 7.49684C15.2719 6.26524 13.7791 5.64944 12.025 5.64944V18.3445ZM12.025 20.9538L14.6609 18.347H18.3513V14.6568L21.0098 12L18.3493 9.33697V5.64874H14.6645L12.025 2.99022L9.34323 5.64874H5.65298V9.33547L2.9962 12L5.65545 14.6592V18.3445H9.31575L12.025 20.9538Z" fill="#6F767E"></path></g><defs><clipPath id="clip0_4_82"><rect height="24" width="24" fill="white"></rect></clipPath></defs>
                                            </svg>
                                            <span className="ms-2">Dark Mode</span>
                                        </div>
                                        <div className="form-check form-switch me-4 text-end toggle-switch" >
                                            <input className="form-check-input" id="flexSwitchCheckDefault" type="checkbox" onClick={handleThemeMode} />
                                            <label htmlFor="flexSwitchCheckDefault" className="form-check-label"></label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="align-items-center d-flex justify-content-between select-thems">
                                        <div>
                                            <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                                <rect height="20" width="20" rx="3" x="2" y="2" stroke="#6F767E" strokeWidth="2"></rect>
                                                <path d="M1 5C1 2.79086 2.79086 1 5 1H9V23H5C2.79086 23 1 21.2091 1 19V5Z" fill="#6F767E"></path>
                                            </svg>
                                            <span className="ms-2">Sidebar Position Fixed</span>
                                        </div>
                                        <div className="form-check form-switch me-4 text-end toggle-switch">
                                            <input className="form-check-input" id="sidebar_position" type="checkbox" onClick={handleSideBarPosition} />
                                            <label htmlFor="sidebar_position" className="form-check-label"></label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="align-items-center d-flex justify-content-between select-thems">
                                        <div>
                                            <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                                <rect height="20" width="20" rx="3" x="2" y="2" stroke="#6F767E" strokeWidth="2"></rect>
                                                <path d="M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V8H1V5Z" fill="#6F767E"></path>
                                            </svg>
                                            <span className="ms-2">Header Static</span>
                                        </div>
                                        <div className="form-check form-switch me-4 text-end toggle-switch">
                                            <input className="form-check-input" id="header_position" type="checkbox" onClick={handleheaderPositionn} />
                                            <label htmlFor="header_position" className="form-check-label"></label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="align-items-center d-flex justify-content-between select-thems">
                                        <div>
                                            <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                                <rect height="20" width="20" rx="3" x="2" y="2" stroke="#6F767E" strokeWidth="2"></rect>
                                                <path d="M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V8H1V5Z" fill="#6F767E"></path>
                                            </svg>
                                            <span className="ms-2">Header Horizontal</span>
                                        </div>
                                        <div className="form-check form-switch me-4 text-end toggle-switch">
                                            <input className="form-check-input" id="theme_layout" type="checkbox" onClick={handleSiderbarlayout} />
                                            <label htmlFor="theme_layout" className="form-check-label"></label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 sidebar-btn">
                                    <p>Sidebar Style</p>
                                    <div className="btn-group" aria-label="Basic radio toggle button group" id="sidebar_style" role="group">
                                        <div className="row">
                                            {sideBarOption.map((data, i) => (
                                                <div className="col-md-6 col-xl-4 p-0" key={i}>
                                                    <input
                                                        className="btn-check"
                                                        id={`btnradio-${i}`}
                                                        type="radio"
                                                        name="btnradio"
                                                        value={data.value}
                                                        autoComplete="off"
                                                        checked={selectedSidebar === data.value}
                                                        onChange={() => handleSidebarChange(data)}
                                                    />
                                                    <label htmlFor={`btnradio-${i}`} className="btn btn-outline-primary w-100">
                                                        {data.svg} <span>{data.label}</span>
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 main-color">
                                    <p>Primary Color</p>
                                    <div>
                                        {colors.map((color, i) => (
                                            <span key={i}>
                                                <input type="radio" name="primary_color" defaultValue={color} className="filled-in chk-col-primary"
                                                    id={`primary_${color}`}
                                                    onClick={() => changePrimaryColor(color)}
                                                />
                                                <label htmlFor={`primary_${color}`} />
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="col-sm-12 main-color">
                                    <p>Navigation Header</p>
                                    <div>
                                        {colors.map((color, i) => (
                                            <span key={i}>
                                                <input
                                                    type="radio"
                                                    name="navigation_header"
                                                    defaultValue={color}
                                                    className="filled-in chk-col-primary"
                                                    id={`nav_header_${color}`}
                                                    onClick={() => changeNavigationHader(color)}
                                                />
                                                <label htmlFor={`nav_header_${color}`} />
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="col-sm-12 main-color">
                                    <p>Header Color</p>
                                    <div>
                                        {colors.map((color, i) => (
                                            <span key={i}>
                                                <input type="radio" name="header_bg" defaultValue={color} className="filled-in chk-col-primary"
                                                    id={`header_${color}`}
                                                    onClick={() => chnageHaderColor(color)}
                                                />
                                                <label htmlFor={`header_${color}`} />
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="col-sm-12 main-color">
                                    <p>Sidebar Color</p>
                                    <div>
                                        {colors.map((color, i) => (
                                            <span key={i}>
                                                <input type="radio" name="navigation_header" defaultValue={color} className="filled-in chk-col-primary"
                                                    id={`sidebar_${color}`}
                                                    onClick={() => chnageSidebarColor(color)}
                                                />
                                                <label htmlFor={`sidebar_${color}`} />
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="align-items-center d-flex justify-content-between my-4">
                            <Link className="btn pull-right w-50 btn-danger me-2" to={"#"} onClick={() => deleteAllCookie()}>Reset</Link>
                            <Link className="btn pull-right w-50 btn-primary ms-2" to={"#"}>Preview</Link>
                        </div>
                    </div>
                    <div className="note-text">
                        <span className="text-danger">*Note :</span>
                        This theme switcher is not part of product. It is only for demo. you will get all guideline in documentation. please check
                        <Link className="text-primary" to="https://nexadash.dexignzone.com/doc" target="_blank">documentation.</Link>
                    </div>
                </div>
            </div>

            <div className={`dz-demo-panel ${demoToggle ? "show" : ""}`}>
                <div className="bg-close" onClick={() => setDemoToggle(!demoToggle)} ></div>
                <Link to="#" className="dz-demo-trigger" onClick={() => setDemoToggle(!demoToggle)}>
                    <span><i className="las la-tint" /></span>
                </Link>
                <div className="dz-demo-inner" onClick={() => setDemoToggle(!demoToggle)}>
                    <Link to={"#"} className="btn btn-sm btn-primary mb-3 px-2 py-1" onClick={() => deleteAllCookie()}>Delete All Cookie</Link>
                    <div className="dz-demo-header">
                        <h4>Select A Demo</h4>
                        <Link to={"#"} className="dz-demo-close" onClick={() => setDemoToggle(!demoToggle)}>
                            <span><i className="las la-times" /></span>
                        </Link>
                    </div>
                    <div className="dz-demo-content ps ps--active-y">
                        <div className="dz-wrapper row">
                            <div className="col-md-6 col-xl-3 mb-4">
                                <div className="dz-demo-bx overlay-bx demo-active">
                                    <div className="overlay-wrapper"><img src={demo1} alt="" className="w-100" /></div>
                                    <div className="overlay-layer">
                                        <Link to={"/dashboard"} onClick={() => setDemoTheme(1, 'ltr')} data-theme="1" className="btn btn-sm btn-secondary dz_theme_demo mr-2">Demo 1</Link>
                                    </div>
                                </div>
                                <h5 className="text-white mb-3">Demo 1</h5>
                            </div>
                            <div className="col-md-6 col-xl-3 mb-4">
                                <div className="dz-demo-bx overlay-bx">
                                    <div className="overlay-wrapper"><img src={demo2} alt="" className="w-100" /></div>
                                    <div className="overlay-layer">
                                        <Link to={"/crm"} onClick={() => setDemoTheme(2, 'ltr')} data-theme="2" className="btn btn-sm btn-secondary dz_theme_demo mr-2">Demo 2</Link>
                                    </div>
                                </div>
                                <h5 className="text-white mb-3">Demo 2</h5>
                            </div>
                            <div className="col-md-6 col-xl-3 mb-4">
                                <div className="dz-demo-bx overlay-bx">
                                    <div className="overlay-wrapper"><img src={demo3} alt="" className="w-100" /></div>
                                    <div className="overlay-layer">
                                        <Link to={"/finance"} onClick={() => setDemoTheme(3, 'ltr')} data-theme="3" className="btn btn-sm btn-secondary dz_theme_demo mr-2">Demo 3</Link>
                                    </div>
                                </div>
                                <h5 className="text-white mb-3">Demo 3</h5>
                            </div>
                            <div className="col-md-6 col-xl-3 mb-4">
                                <div className="dz-demo-bx overlay-bx">
                                    <div className="overlay-wrapper"><img src={demo4} alt="" className="w-100" /></div>
                                    <div className="overlay-layer">
                                        <Link to={"/analytics"} onClick={() => setDemoTheme(4, 'ltr')} data-theme="4" className="btn btn-sm btn-secondary dz_theme_demo mr-2">Demo 4</Link>
                                    </div>
                                </div>
                                <h5 className="text-white mb-3">Demo 4</h5>
                            </div>
                            <div className="col-md-6 col-xl-3 mb-4">
                                <div className="dz-demo-bx overlay-bx">
                                    <div className="overlay-wrapper"><img src={demo5} alt="" className="w-100" /></div>
                                    <div className="overlay-layer">
                                        <Link to={"/index-3"} onClick={() => setDemoTheme(5, 'ltr')} data-theme="5" className="btn btn-sm btn-secondary dz_theme_demo mr-2">Demo 5</Link>
                                    </div>
                                </div>
                                <h5 className="text-white mb-3">Demo 5</h5>
                            </div>
                            <div className="col-md-6 col-xl-3 mb-4">
                                <div className="dz-demo-bx overlay-bx">
                                    <div className="overlay-wrapper"><img src={demo6} alt="" className="w-100" /></div>
                                    <div className="overlay-layer">
                                        <Link to={"/ecommerce"} onClick={() => setDemoTheme(6, 'ltr')} data-theme="6" className="btn btn-sm btn-secondary dz_theme_demo mr-2">Demo 6</Link>
                                    </div>
                                </div>
                                <h5 className="text-white mb-3">Demo 6</h5>
                            </div>
                            <div className="col-md-6 col-xl-3 mb-4">
                                <div className="dz-demo-bx overlay-bx">
                                    <div className="overlay-wrapper"><img src={demo7} alt="" className="w-100" /></div>
                                    <div className="overlay-layer">
                                        <Link to={"/course"} onClick={() => setDemoTheme(7, 'ltr')} data-theme="6" className="btn btn-sm btn-secondary dz_theme_demo mr-2">Demo 7</Link>
                                    </div>
                                </div>
                                <h5 className="text-white mb-3">Demo 7</h5>
                            </div>
                            <div className="col-md-6 col-xl-3 mb-4">
                                <div className="dz-demo-bx overlay-bx">
                                    <div className="overlay-wrapper"><img src={demo8} alt="" className="w-100" /></div>
                                    <div className="overlay-layer">
                                        <Link to={"/medical"} onClick={() => setDemoTheme(8, 'ltr')} data-theme="6" className="btn btn-sm btn-secondary dz_theme_demo mr-2">Demo 8</Link>
                                    </div>
                                </div>
                                <h5 className="text-white mb-3">Demo 8</h5>
                            </div>
                        </div>
                    </div>

                    <div className="note-text">
                        <span className="text-danger">*Note :</span>
                        This theme switcher is not part of product. It is only for demo. you will get all guideline in documentation. please check
                        <Link className="text-primary" href="https://nexadash.dexignzone.com/doc" target="_blank">documentation. </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Setting2;


