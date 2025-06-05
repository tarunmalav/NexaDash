import { Fragment } from "react";
import EventCalendar from "../../element/EventCalendar";  
import PageTitle from "../../layouts/PageTitle";

function Calendar() {
    return (
        <Fragment>
           <PageTitle activeMenu="Calendar" motherMenu="Home" pageContent={"Calendar"}/>
           <div className="container">
                <EventCalendar /> 
           </div>
        </Fragment>

    );
};

export default Calendar;
