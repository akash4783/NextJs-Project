import { useRouter } from "next/router"
import { Fragment } from "react"
import Button from "../../components/ui/button"
import { getFilterdEvents } from "../../dummy-data"
import EventList from "../../components/events/event-list"
import ResultTitle from "../../components/events/result-title"
import ErrorAlert from "../../components/ui/error-alert"
function FilteredPageEvents(){
    const router = useRouter()
    const filterData = router.query.slug

if(!filterData){
    return <p className="center">Loading...</p>
}
const filterdYear = filterData[0]
const filterdMonth = filterData[1]
const numYear = parseInt(filterdYear)
const numMonth = parseInt(filterdMonth)
if( isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numMonth <1 || numMonth > 12){
    return  ( <Fragment>
        <ErrorAlert> <p>Invalid filter... please adjust values</p>
        </ErrorAlert>
    <div className="center">
        <Button link={'/events'}>Show All Events</Button>
        </div>
    </Fragment>)
}
const filteredEvents= getFilterdEvents({
    year:numYear,
    month:numMonth,
})
if (!filteredEvents || filteredEvents.length === 0){
    return (
    <Fragment>
        <ErrorAlert>
        <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
        <Button link={'/events'}>Show All Events</Button>
        </div>
        </Fragment>
    )
}
const date = new Date(numYear,numMonth-1)
    return(
        <Fragment>
            <ResultTitle date={date}/>
         <EventList items={filteredEvents}/>
        </Fragment>
    )
}

export default FilteredPageEvents