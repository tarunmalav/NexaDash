import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Routes, Route, Outlet } from "react-router-dom";
import Nav from "../layouts/nav/Index";
import Setting2 from "../layouts/Setting";
import Footer from "../layouts/Footer";
// dashboard 
import Home from "../pages/dashboard/Home";
import Crm from "../pages/dashboard/Crm";
import Finance from "../pages/dashboard/Finance";
import Analytics from "../pages/dashboard/Analytics";
import Sales from "../pages/dashboard/Index-3";
import Ecommerce from "../pages/dashboard/Ecommerce";
import Course from "../pages/dashboard/Course";
import Medical from "../pages/dashboard/Medical";
import ProfileOverview from "../pages/profile/ProfileOverview";
import ProfileProjects from "../pages/profile/ProfileProjects";
import ProfileProjectsDetails from "../pages/profile/ProfileProjectsDetails";
import ProfileCampaigns from "../pages/profile/ProfileCampaigns";
import ProfileDocuments from "../pages/profile/ProfileDocuments";
import ProfileFollowers from "../pages/profile/Profilefollowers";
import ProfileActivity from "../pages/profile/ProfileActivity";
import AccountOverview from "../pages/account/AccountOverview";
import AccountSettings from "../pages/account/AccountSettings";
import AccountSecurity from "../pages/account/AccountSecurity";
import AccountActivity from "../pages/account/AccountActivity";
import AccountBilling from "../pages/account/AccountBilling";
import AccountStatements from "../pages/account/AccountStatements";
import AccountReferrals from "../pages/account/AccountReferrals";
import AccountLogs from "../pages/account/AccountLogs";
import AccountApiKeys from "../pages/account/AcountApikeys"; 
import Content from "../pages/cms/Content";
import ContentAdd from "../pages/cms/ContentAdd"; 
import EmailTemplate from "../pages/cms/EmailTemplate";
import AddEmail from "../pages/cms/AddEmail"; 
import AddBlog from "../pages/cms/AddBlog";
import BlogCategory from "../pages/cms/BlogCategory";
import AutoWrite from "../pages/Aikit/AutoWrite"; 
import FineTuneModels from "../pages/Aikit/FineTuneModels"; 
import Chat from "../pages/apps/Chat";
import AppProfile from "../pages/apps/AppProfile";
import AppProfile2 from "../pages/apps/AppProfile2";
import EditProfile from "../pages/apps/EditProfile";
import PostDetails from "../pages/apps/PostDetails";
import Compose from "../pages/email/Compose";
import Inbox from "../pages/email/Inbox";
import Read from "../pages/email/Read";
import Calendar from "../pages/apps/Calender";
import CategoryTable from "../pages/ecommerce/categories/CategoryTable";
import AddCategory from "../pages/ecommerce/categories/AddCategary";
import EditCategory from "../pages/ecommerce/categories/EditCategary";
import ProductTable from "../pages/ecommerce/products/ProductTable";
import EditProduct from "../pages/ecommerce/products/EditProduct";
import AddProduct from "../pages/ecommerce/products/AddProduct";
import ProductGrid from "../pages/ecommerce/shop/EcomProductGrid";
import ProductList from "../pages/ecommerce/shop/EcomProductList";
import ProductDetail from "../pages/ecommerce/shop/EcomProduct-detail";
import ProductOrder from "../pages/ecommerce/shop/EcomProductOrder";
import Checkout from "../pages/ecommerce/shop/EcomCheckout";
import Invoice from "../pages/ecommerce/shop/EcomInvoice";
import Customers from "../pages/ecommerce/shop/EcomCustomers";

//Bootstrap 
import UiAccordion from "../components/bootstrap/Accordion";
import UiAlert from "../components/bootstrap/Alert";
import UiBadge from "../components/bootstrap/Badge";
import UiButton from "../components/bootstrap/Button";
import UiModal from "../components/bootstrap/Modal";
import UiButtonGroup from "../components/bootstrap/ButtonGroup";
import UiListGroup from "../components/bootstrap/ListGroup";
import UiCards from "../components/bootstrap/Cards";
import UiCarousel from "../components/bootstrap/Carousel";
import UiDropDown from "../components/bootstrap/DropDown";
import UiPopOver from "../components/bootstrap/PopOver";
import UiProgressBar from "../components/bootstrap/ProgressBar";
import UiTab from "../components/bootstrap/Tab";
import UiTypography from "../components/bootstrap/Typography";
import UiPagination from "../components/bootstrap/Pagination";
import UiGrid from "../components/bootstrap/Grid";
import UiBreadCrumb from "../components/bootstrap/BreadCrumb";
import UiMediaObject from "../components/bootstrap/MediaObject";
import UiPlaceHolder from "../components/bootstrap/PlaceHolder";
import UiSpinner from "../components/bootstrap/Spinner";
import UiRangeSlider from "../components/bootstrap/RangeSlider";

//Plugins
import Select2 from "../pages/plugins/Select2/Select2";
import MainSweetAlert from "../pages/plugins/SweetAlert/SweetAlert";
import Toastr from "../pages/plugins/Toastr/Toastr";
import MainNouiSlider from "../pages/plugins/NouiSlider/MainNouiSlider";
import Lightgallery from "../pages/plugins/Lightgallery/Lightgallery";


import ApexChart from "../pages/charts/apexcharts/Index";
import ChartChartjs from "../pages/charts/Chartjs/Index";
import RechartJs from "../pages/charts/rechart/Index";
import ChartSparkline from "../pages/charts/Sparkline/Index"; 

//widgets
import Widget from "../pages/widget/Widget";
//Forms
import Element from "../pages/forms/Element/Element";
import Wizard from "../pages/forms/Wizard/Wizard";
import CkEditor from "../pages/forms/CkEditor/CkEditor";
import Pickers from "../pages/forms/Pickers/Pickers";

import FormValidation from "../pages/forms/FormValidation/FormValidation";
import BootstrapTable from "../pages/table/BootstrapTable";
import DataTable from "../pages/table/DataTable";
import LockScreen from "../pages/error/LockScreen";
import EmptyPage from "../pages/error/EmptyPage";
import Error400 from "../pages/error/Error400";
import Error403 from "../pages/error/Error403";
import Error404 from "../pages/error/Error404";
import Error500 from "../pages/error/Error500";
import Error503 from "../pages/error/Error503";
import Registration from "../pages/authentication/Registration";
import Login from "../pages/authentication/Login";
import ForgotPassword from "../pages/authentication/ForgotPassword";

import Menu from "../pages/cms/Menu";
import Blog from "../pages/cms/Blog";
import Scheduled from "../pages/Aikit/Scheduled";
import Repurpose from "../pages/Aikit/Repurpose";
import RSS from "../pages/Aikit/Rss";
import Chatbot from "../pages/Aikit/Chatbot";
import Prompt from "../pages/Aikit/Prompt";
import Setting from "../pages/Aikit/Setting";
import Import from "../pages/Aikit/Import";



const Markup = () => {
    return (
        <>
            <Routes>
                <Route path='page-lock-screen' element={<LockScreen />} />
                <Route path='page-error-400' element={<Error400 />} />
                <Route path='page-error-403' element={<Error403 />} />
                <Route path='page-error-404' element={<Error404 />} />
                <Route path='page-error-500' element={<Error500 />} />
                <Route path='page-error-503' element={<Error503 />} />
                <Route path='page-login' element={<Login />} />
                <Route path='page-register' element={<Registration />} />
                <Route path='page-forgot-password' element={<ForgotPassword />} />

                <Route element={<MainLayout />}>
                    <Route path='' element={<Home />} />
                    <Route path='dashboard' element={<Home />} />
                    <Route path='crypto' element={<Home />} />
                    <Route path='crm' element={<Crm />} />
                    <Route path='finance' element={<Finance />} />
                    <Route path='analytics' element={<Analytics />} />
                    <Route path='index-3' element={<Sales />} />
                    <Route path='ecommerce' element={<Ecommerce />} />
                    <Route path='course' element={<Course />} />
                    <Route path='medical' element={<Medical />} /> 
                    <Route path='content' element={<Content />} />
                    <Route path='content-add' element={<ContentAdd />} />
                    <Route path='menu' element={<Menu />} />
                    <Route path='email-template' element={<EmailTemplate />} />
                    <Route path='add-email' element={<AddEmail />} />
                    <Route path='blog' element={<Blog />} />
                    <Route path='add-blog' element={<AddBlog />} />
                    <Route path='blog-category' element={<BlogCategory />} /> 
                    <Route path='empty-page' element={<EmptyPage />} />
                    <Route path='ui-breadcrumb' element={<UiBreadCrumb />} />
                    <Route path='ui-media-object' element={<UiMediaObject />} />

                    
                </Route>
                <Route element={<MainLayout2 />}>
                    <Route path='profile-overview' element={<ProfileOverview />} />
                    <Route path='profile-projects' element={<ProfileProjects />} />
                    <Route path='profile-projects-details' element={<ProfileProjectsDetails />} />
                    <Route path='profile-campaigns' element={<ProfileCampaigns />} />
                    <Route path='profile-documents' element={<ProfileDocuments />} />
                    <Route path='profile-followers' element={<ProfileFollowers />} />
                    <Route path='profile-activity' element={<ProfileActivity />} /> 
                    <Route path='account-overview' element={<AccountOverview />} />
                    <Route path='account-settings' element={<AccountSettings />} />
                    <Route path='account-security' element={<AccountSecurity />} />
                    <Route path='account-activity' element={<AccountActivity />} />
                    <Route path='account-billing' element={<AccountBilling />} />
                    <Route path='account-statements' element={<AccountStatements />} />
                    <Route path='account-referrals' element={<AccountReferrals />} />
                    <Route path='account-apikeys' element={<AccountApiKeys />} />
                    <Route path='account-logs' element={<AccountLogs />} /> 
                    <Route path='auto-write' element={<AutoWrite />} />
                    <Route path='scheduled' element={<Scheduled />} />
                    <Route path='repurpose' element={<Repurpose />} />
                    <Route path='rss' element={<RSS />} />
                    <Route path='chatbot' element={<Chatbot />} />
                    <Route path='fine-tune-models' element={<FineTuneModels />} />
                    <Route path='prompt' element={<Prompt />} />
                    <Route path='setting' element={<Setting />} />
                    <Route path='import' element={<Import />} /> 
                    <Route path='chat' element={<Chat />} />
                    <Route path='app-profile-1' element={<AppProfile />} />
                    <Route path='app-profile-2' element={<AppProfile2 />} />
                    <Route path='edit-profile' element={<EditProfile />} />
                    <Route path='post-details' element={<PostDetails />} /> 
                    <Route path='email-compose' element={<Compose />} />
                    <Route path='email-inbox' element={<Inbox />} />
                    <Route path='email-read' element={<Read />} /> 
                    <Route path='app-calendar' element={<Calendar />} /> 
                    <Route path='category-table' element={<CategoryTable />} />
                    <Route path='add-categary' element={<AddCategory />} />
                    <Route path='edit-categary' element={<EditCategory />} /> 
                    <Route path='product-table' element={<ProductTable />} />
                    <Route path='edit-product' element={<EditProduct />} />
                    <Route path='add-product' element={<AddProduct />} /> 
                    <Route path='ecom-product-grid' element={<ProductGrid />} />
                    <Route path='ecom-product-list' element={<ProductList />} />
                    <Route path='ecom-product-detail' element={<ProductDetail />} />
                    <Route path='ecom-product-order' element={<ProductOrder />} />
                    <Route path='ecom-checkout' element={<Checkout />} />
                    <Route path='ecom-invoice' element={<Invoice />} />
                    <Route path='ecom-customers' element={<Customers />} /> 
                    <Route path='ui-accordion' element={<UiAccordion />} />
                    <Route path='ui-alert' element={<UiAlert />} />
                    <Route path='ui-badge' element={<UiBadge />} />
                    <Route path='ui-button' element={<UiButton />} />
                    <Route path='ui-modal' element={<UiModal />} />
                    <Route path='ui-button-group' element={<UiButtonGroup />} />
                    <Route path='ui-list-group' element={<UiListGroup />} />
                    <Route path='ui-card' element={<UiCards />} />
                    <Route path='ui-carousel' element={<UiCarousel />} />
                    <Route path='ui-dropdown' element={<UiDropDown />} />
                    <Route path='ui-popover' element={<UiPopOver />} />
                    <Route path='ui-progressbar' element={<UiProgressBar />} />
                    <Route path='ui-tab' element={<UiTab />} />
                    <Route path='ui-typography' element={<UiTypography />} />
                    <Route path='ui-pagination' element={<UiPagination />} />
                    <Route path='ui-grid' element={<UiGrid />} /> 
                    <Route path='uc-select2' element={<Select2 />} />
                    <Route path='uc-sweetalert' element={<MainSweetAlert />} />
                    <Route path='uc-toastr' element={<Toastr />} />
                    <Route path='uc-noui-slider' element={<MainNouiSlider />} />
                    <Route path='uc-lightgallery' element={<Lightgallery />} />
                    <Route path='chart-rechart' element={<RechartJs />} />
                    <Route path='chart-sparkline' element={<ChartSparkline />} />
                    <Route path='chart-apexchart' element={<ApexChart />} />
                    <Route path='chart-chartjs' element={<ChartChartjs />} />
                    <Route path='widget-basic' element={<Widget />} />
                    <Route path='form-element' element={<Element />} />
                    <Route path='form-wizard' element={<Wizard />} />
                    <Route path='form-ckeditor' element={<CkEditor />} />
                    <Route path='form-pickers' element={<Pickers />} />
                    <Route path='form-validation' element={<FormValidation />} />
                    <Route path='table-bootstrap-basic' element={<BootstrapTable />} />
                    <Route path='table-datatable-basic' element={<DataTable />} />
                    <Route path='ui-placeholder' element={<UiPlaceHolder />} />
                    <Route path='ui-spinners' element={<UiSpinner />} />
                    <Route path='ui-range-slider' element={<UiRangeSlider />} />

                </Route>
            </Routes>

        </>
    );
};

function MainLayout() {
    const { menuToggle, sidebariconHover } = useContext(ThemeContext);
    return (
        <>
            <div id="main-wrapper" className={`wallet-open show active ${sidebariconHover ? "iconhover-toggle" : ""} ${menuToggle ? "menu-toggle" : ""}`}>
                <Nav />
                <div className="content-body">
                    <div className="container">
                        <Outlet />
                    </div>
                </div>
                <Footer />
            </div>
            <Setting2 />
        </>
    );
}

function MainLayout2() {
    const { menuToggle, sidebariconHover } = useContext(ThemeContext);
    return (
        <>
            <div id="main-wrapper" className={`wallet-open show ${sidebariconHover ? "iconhover-toggle" : ""} ${menuToggle ? "menu-toggle" : ""}`}>
                <Nav />
                <div className="content-body">
                    <Outlet />
                </div>
                <Footer />
            </div>
            <Setting2 />
        </>
    );
}

export default Markup;