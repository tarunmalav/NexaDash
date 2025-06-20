import { createContext, useEffect, useReducer } from "react";
import { dezThemeSet } from './ThemeDemo';
import { SVGICON } from "../jsx/constant/Theme";
import { useLocation } from "react-router-dom";

export const ThemeContext = createContext();
const reducer = (previousState, updatedState) => ({
  ...previousState,
  ...updatedState,
});

const initialState = {
  sideBarStyle: { value: "full", label: "Full" },
  sidebarposition: { value: "fixed", label: "Fixed" },
  headerposition: { value: "fixed", label: "Fixed" },
  sidebarLayout: { value: "vertical", label: "Vertical" },
  direction: { value: "ltr", label: "LTR" },
  primaryColor: "color_1",
  secondaryColor: "color_1",
  navigationHader: "color_1",
  haderColor: "color_1",
  sidebarColor: "color_1",
  background: { value: "light", label: "Light" },
  containerPositionSize: { value: "wide-boxed", label: "Wide Boxed" },
  iconHover: false,
  menuToggle: false,
  windowWidth: 0,
  windowHeight: 0,
};

const ThemeContextProvider = (props) => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    sideBarStyle,
    sidebarposition,
    headerposition,
    sidebarLayout,
    direction,
    primaryColor,
    secondaryColor,
    navigationHader,
    haderColor,
    sidebarColor,
    background,
    containerPositionSize,
    iconHover,
    menuToggle,
    windowWidth,
    windowHeight,
  } = state;

  const body = document.querySelector("body");
  // layout
  const layoutOption = [
    { value: "vertical", label: "Vertical" },
    { value: "horizontal", label: "Horizontal" },
  ];

  const sideBarOption = [
    { svg: SVGICON.sidebarfull, label: "Full", value: "full", },
    { svg: SVGICON.sidebarmini, label: "Mini", value: "mini", },
    { svg: SVGICON.Sidebarcompact, label: "Compact", value: "compact", },
    { svg: SVGICON.sidebarmodern, label: "Modern", value: "modern", },
    { svg: SVGICON.sidebaroverlay, label: "Overlay", value: "overlay", },
    { svg: SVGICON.SidebarIconhover, label: "Icon Hover", value: "icon-hover", },
  ];

  const backgroundOption = [
    { value: "light", label: "Light" },
    { value: "dark", label: "Dark" },
  ];
  const sidebarpositions = [
    { value: "fixed", label: "Fixed" },
    { value: "static", label: "Static" },
  ];
  const headerPositions = [
    { value: "fixed", label: "Fixed" },
    { value: "static", label: "Static" },
  ];
  const containerPosition = [
    { value: "wide-boxed", label: "Wide Boxed" },
    { value: "boxed", label: "Boxed" },
    { value: "wide", label: "Wide" },
  ];
  const colors = [
    "color_1",
    "color_2",
    "color_3",
    "color_4",
    "color_5",
    "color_6",
    "color_7",
    "color_8",
    "color_9",
    "color_10",
  ];
  const directionPosition = [
    { value: "ltr", label: "LTR" },
    { value: "rtl", label: "RTL" },
  ];
  const fontFamily = [
    { value: "poppins", label: "Poppins" },
    { value: "roboto", label: "Roboto" },
    { value: "nunito", label: "Nunito" },
    { value: "opensans", label: "Open Sans" },
    { value: "HelveticaNeue", label: "HelveticaNeue" },
  ];
  const changePrimaryColor = (name) => {
    dispatch({ primaryColor: name });
    body.setAttribute("data-primary", name);
  };
  const changeSecondaryColor = (name) => {
    dispatch({ secondaryColor: name });
    body.setAttribute("data-secondary", name);
  };
  const changeNavigationHader = (name) => {
    dispatch({ navigationHader: name });
    body.setAttribute("data-nav-headerbg", name);
  };
  const chnageHaderColor = (name) => {
    dispatch({ haderColor: name });
    body.setAttribute("data-headerbg", name);
  };
  const chnageSidebarColor = (name) => {
    dispatch({ sidebarColor: name });
    body.setAttribute("data-sidebarbg", name);
  };
  const changeSideBarPostion = (name) => {
    dispatch({ sidebarposition: name });
    body.setAttribute("data-sidebar-position", name.value);
  };
  const changeDirectionLayout = (name) => {
    dispatch({ direction: name });
    body.setAttribute("direction", name.value);
    let html = document.querySelector("html");
    html.setAttribute("dir", name.value);
    html.className = name.value;
  };
  const changeSideBarLayout = (name) => {
    if (name.value === "horizontal") {
      if (sideBarStyle.value === "overlay") {
        dispatch({ sidebarLayout: name });
        body.setAttribute("data-layout", name.value);
        dispatch({ sideBarStyle: { value: 'full', label: 'Full' } });
        body.setAttribute("data-sidebar-style", "full");
      } else {
        dispatch({ sidebarLayout: name });
        body.setAttribute("data-layout", name.value);
      }
    } else {
      dispatch({ sidebarLayout: name });
      body.setAttribute("data-layout", name.value);
    }

  };
  const changeSideBarStyle = (name) => {
    if (sidebarLayout.value === "horizontal") {
      if (name.value === "overlay") {
        alert("Sorry! Overlay is not possible in Horizontal layout.");
      } else {
        dispatch({ sideBarStyle: name });
        dispatch({ iconHover: name.value === "icon-hover" ? "_i-hover" : "" });
        body.setAttribute("data-sidebar-style", name.value);
      }
    } else {
      dispatch({ sideBarStyle: name });
      dispatch({ iconHover: name.value === "icon-hover" ? "_i-hover" : "" });
      body.setAttribute("data-sidebar-style", name.value);
    }
  };

  const changeHeaderPostion = (name) => {
    dispatch({ headerposition: name });
    body.setAttribute("data-header-position", name.value);
  };

  const openMenuToggle = () => {

    sideBarStyle.value === "overly"
      ? dispatch({ menuToggle: true })
      : dispatch({ menuToggle: false })
  };

  const changeBackground = (name) => {
    body.setAttribute("data-theme-version", name.value);
    dispatch({ background: name });
  };

  const changeContainerPosition = (name) => {
    dispatch({ containerPositionSize: name });
    body.setAttribute("data-container", name.value);
    name.value === "boxed" &&
      changeSideBarStyle({ value: "overlay", label: "Overlay" });
  };

  const setDemoTheme = (theme, direction) => {

    var setAttr = {};


    var themeSettings = dezThemeSet[theme];

    body.setAttribute("data-typography", themeSettings.typography);

    setAttr.value = themeSettings.version;
    changeBackground(setAttr);

    setAttr.value = themeSettings.layout;
    changeSideBarLayout(setAttr);

    changePrimaryColor(themeSettings.primary);
    changeSecondaryColor(themeSettings.secondary);

    changeNavigationHader(themeSettings.navheaderBg);

    chnageHaderColor(themeSettings.headerBg);

    setAttr.value = themeSettings.sidebarStyle;
    changeSideBarStyle(setAttr);

    chnageSidebarColor(themeSettings.sidebarBg);

    setAttr.value = themeSettings.sidebarPosition;
    changeSideBarPostion(setAttr);

    setAttr.value = themeSettings.headerPosition;
    changeHeaderPostion(setAttr);

    setAttr.value = themeSettings.containerLayout;
    changeContainerPosition(setAttr);

    setAttr.value = direction;
    changeDirectionLayout(setAttr);

  };
  const locat = useLocation().pathname;

  useEffect(() => {
    const body = document.querySelector("body");
    body.setAttribute("data-typography", "inter");
    body.setAttribute("data-theme-version", "light");
    body.setAttribute("data-layout", "vertical");
    body.setAttribute("data-primary", "color_1");
    body.setAttribute("data-nav-headerbg", "color_1");
    body.setAttribute("data-headerbg", "color_1");
    body.setAttribute("data-sidebar-style", "overlay");
    body.setAttribute("data-sidebarbg", "color_1");
    body.setAttribute("data-secondary", "color_1");
    body.setAttribute("data-sidebar-position", "fixed");
    body.setAttribute("data-header-position", "fixed");
    body.setAttribute("data-container", "wide");
    body.setAttribute("direction", "ltr");
    let resizeWindow = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      dispatch({ windowWidth: width });
      dispatch({ windowHeight: height });
      switch (locat) {
        case '/':
          if (window.matchMedia("(max-width:767px)").matches) {
            body.setAttribute("data-sidebar-style", "overlay")
          } else {
            if (window.matchMedia("(max-width:1024px)").matches) {
              body.setAttribute("data-sidebar-style", "mini")
            }
            else {
              body.setAttribute("data-sidebar-style", "full")
            }
          }
          changeNavigationHader("color_2")
          chnageSidebarColor("color_2");
          changePrimaryColor("color_2");
          break;
        case '/dashboard':
          if (window.matchMedia("(max-width:767px)").matches) {
            body.setAttribute("data-sidebar-style", "overlay")
          } else {
            if (window.matchMedia("(max-width:1024px)").matches) {
              body.setAttribute("data-sidebar-style", "mini")
            }
            else {
              body.setAttribute("data-sidebar-style", "full")
            }
          }
          changeNavigationHader("color_2")
          chnageSidebarColor("color_2");
          changePrimaryColor("color_2");
          break;
        case '/crm':
          if (window.matchMedia("(max-width:767px)").matches) {
            body.setAttribute("data-sidebar-style", "overlay",)
          } else {
            if (window.matchMedia("(max-width:1024px)").matches) {
              body.setAttribute("data-sidebar-style", "mini")
            }
            else {
              body.setAttribute("data-sidebar-style", "full")
            }
          }
          changeNavigationHader("color_4");
          chnageHaderColor("color_4");
          chnageSidebarColor("color_3");
          if (width > 1024) {
            changeSideBarLayout({ value: "horizontal", label: "Horizontal" });
          } else {
            changeSideBarLayout({ value: "vertical", label: "Vertical" });
          }
          break;
        case '/finance':
          if (window.matchMedia("(max-width:767px)").matches) {
            body.setAttribute("data-sidebar-style", "overlay")
          } else {
            if (window.matchMedia("(max-width:1024px)").matches) {
              body.setAttribute("data-sidebar-style", "mini")
            }
            else {
              body.setAttribute("data-sidebar-style", "full")
            }
          }
          changeNavigationHader("color_4")
          chnageHaderColor("color_4")
          changeSideBarLayout({ value: "vertical", label: "vertical" })
          chnageSidebarColor("color_1");
          break;
        case '/analytics':
          if (window.matchMedia("(max-width:767px)").matches) {
            body.setAttribute("data-sidebar-style", "overlay")
          } else {
            if (window.matchMedia("(max-width:1024px)").matches) {
              body.setAttribute("data-sidebar-style", "mini")
            }
            else {
              body.setAttribute("data-sidebar-style", "full")
            }
          }
          changeNavigationHader("color_4")
          chnageHaderColor("color_1")
          changeSideBarLayout({ value: "vertical", label: "vertical" })
          chnageSidebarColor("color_4");
          break;
        case '/index-3':
          if (window.matchMedia("(max-width:767px)").matches) {
            body.setAttribute("data-sidebar-style", "overlay")
          } else {
            if (window.matchMedia("(max-width:1024px)").matches) {
              body.setAttribute("data-sidebar-style", "mini")
            }
            else {
              body.setAttribute("data-sidebar-style", "full")
            }
          }
          break;
        case '/ecommerce':
          if (window.matchMedia("(max-width:767px)").matches) {
            body.setAttribute("data-sidebar-style", "overlay")
          } else {
            if (window.matchMedia("(max-width:1024px)").matches) {
              body.setAttribute("data-sidebar-style", "mini")
            }
            else {
              body.setAttribute("data-sidebar-style", "full")
            }
          }
          changeBackground({ value: "light", label: "Light" });
          changeNavigationHader("color_4")
          chnageHaderColor("color_4")
          chnageSidebarColor("color_1");
          if (width > 1024) {
            changeSideBarLayout({ value: "horizontal", label: "Horizontal" });
          } else {
            changeSideBarLayout({ value: "vertical", label: "Vertical" });
          }
          break;
        case '/course':
          if (window.matchMedia("(max-width:767px)").matches) {
            body.setAttribute("data-sidebar-style", "overlay")
          } else {
            if (window.matchMedia("(max-width:1024px)").matches) {
              body.setAttribute("data-sidebar-style", "mini")
            }
            else {
              body.setAttribute("data-sidebar-style", "mini")
            }
          }
          changeNavigationHader("color_5")
          chnageHaderColor("color_4")
          changeSideBarLayout({ value: "vertical", label: "vertical" })
          chnageSidebarColor("color_5");
          changePrimaryColor("color_10");
          break;
        case '/medical':
          if (window.matchMedia("(max-width:767px)").matches) {
            body.setAttribute("data-sidebar-style", "overlay")
          } else {
            if (window.matchMedia("(max-width:1024px)").matches) {
              body.setAttribute("data-sidebar-style", "mini")
            }
            else {
              body.setAttribute("data-sidebar-style", "mini")
            }
          }
          changeNavigationHader("color_3")
          chnageHaderColor("color_1")
          changeSideBarLayout({ value: "vertical", label: "vertical" })
          chnageSidebarColor("color_3");
          changePrimaryColor("color_1");
          break;
        default:
          if (window.matchMedia("(max-width:767px)").matches) {
            body.setAttribute("data-sidebar-style", "overlay")
          } else {
            if (window.matchMedia("(max-width:1024px)").matches) {
              body.setAttribute("data-sidebar-style", "mini")
            }
            else {
              body.setAttribute("data-sidebar-style", "full")
            }
          }
          break;
      }

    };
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, [locat]);
  return (
    <ThemeContext.Provider
      value={{
        body,
        sideBarOption,
        layoutOption,
        backgroundOption,
        sidebarposition,
        headerPositions,
        containerPosition,
        directionPosition,
        fontFamily,
        primaryColor,
        secondaryColor,
        navigationHader,
        windowWidth,
        windowHeight,
        changePrimaryColor,
        changeSecondaryColor,
        changeNavigationHader,
        changeSideBarStyle,
        sideBarStyle,
        changeSideBarPostion,
        sidebarpositions,
        changeHeaderPostion,
        headerposition,
        changeSideBarLayout,
        sidebarLayout,
        changeDirectionLayout,
        changeContainerPosition,
        direction,
        colors,
        haderColor,
        chnageHaderColor,
        chnageSidebarColor,
        sidebarColor,
        iconHover,
        menuToggle,
        openMenuToggle,
        changeBackground,
        background,
        //containerPosition_,
        containerPositionSize,
        setDemoTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;


