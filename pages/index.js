import EventList from "../components/events/event-list"
import {getFeturedEvents} from "../dummy-data"
import EventSearch from "../components/events/event-search"
import { Fragment } from "react"
function HomePage(){
    const featuredEvents = getFeturedEvents()


    return(
        <Fragment>
            <EventSearch/>
            <EventList items={featuredEvents}/>
        </Fragment>
    )
}

export default HomePage