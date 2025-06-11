import {useState} from 'react';
import { Link } from "react-scroll";

const alertSidebar = [
    {title:'Basic Alerts',to:'basic-alerts'},
    {title:'Solid color alerts',to:'color-alerts'},    
    {title:'Square Alerts',to:'square-alerts'},
    {title:'Rounded Alerts',to:'rounded-alerts'},
    {title:'Dismissable Alerts',to:'dismissable-alerts'},
    {title:'Alerts Alt',to:'alerts-alt'},
    {title:'Solid Alt',to:'solid-alt'},
    {title:'Dismissable with solid',to:'dismissable-solid'},
    {title:'Alert with Link', to:'alert-link-with'},
    {title:'Alert with Link and Solid Color',to:'alert-link-color'},
    {title:'Inline Notifications',to:'notifications'},
    {title:'Alert Icon Left',to:'alert-icon-left'},
    {title:'Alert outline',to:'alert-outline'},
    {title:'Alert Social',to:'alert-social'},
    {title:'Message Alert',to:'message-alert'},
    {title:'Message Alert Color',to:'message-alert-color'},
    {title:'Alert left icon big',to:'alert-icon-big'},
];
const AlertList = () =>{
    const [activeLink, setActiveLink] = useState(0);
    return(
        <>
           
                <h4 className="title">Alert</h4>
                <div className="demo-right-tabs" id="rightSidebarScroll">

                <ul className="navbar-nav" id="menu-bar">
                    {alertSidebar.map((item, ind)=>(
                        <li key={ind} className={ind === activeLink ? 'active' : ''}> <Link to={item.to} smooth={true}
                        className="scroll c-pointer"
                        activeclass="active"
                        spy={true}
                        onClick={()=>setActiveLink(ind)}
                        >{item.title}</Link></li> 
                    ))}
                </ul>	
                    </div>
           
        </>
    )
}
export default AlertList;