import { getAllEvents } from "../../dummy-data"
import EventList from "../../components/events/event-list"
import EventSearch from "../../components/events/event-search"
import { useRouter } from "next/router"
function AllEventPage(){
    const router = useRouter()
    const events = getAllEvents()

    function findEventshandler(year,month){
        const fullPath = `/events/${year}/${month}`
        router.push(fullPath)
        console.log(fullPath);

    }

    return(
        <div>
            <EventSearch onSearch={findEventshandler}/>
            <EventList  items={events}/>

        </div>
    )
}

export default AllEventPage