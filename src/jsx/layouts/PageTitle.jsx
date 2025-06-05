import { Link } from "react-router-dom";

function PageTitle({ motherMenu, activeMenu,pageContent }) {
    return (
        <>
           <div className="page-titles">
				<h5 className="dashboard_bar">{activeMenu}</h5>
				<ul className="breadcrumb">
					<li className="breadcrumb-item"><Link to={"#"}>{motherMenu}</Link></li>
                    <li className="breadcrumb-item active"><Link to={"#"}>{pageContent}</Link></li>
				</ul>
			</div>
        </>
    );
};

export default PageTitle;

