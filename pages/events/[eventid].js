import {useRouter} from 'next/router'
import { Fragment } from 'react'
import EventContent from '../../components/event-detail/event-content'
import EventLogistics from '../../components/event-detail/event-logistics'
// import EventLogistics from '../../components/event-detail/event-logistic'
import EventSummary from '../../components/event-detail/event-summary'
import { getEventById } from '../../dummy-data'

function EventDetailsPage(){
    const router = useRouter()

    const eventId = router.query.eventid
   const event =  getEventById(eventId)

   if(!event){
       return <p>NO event Data</p>
   }
    return(
      <Fragment>
          <EventSummary title={event.title}/>
          <EventLogistics  date={event.date} address={event.location} image={event.image} imageAlt={event.title}/>
          {/* <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title}/> */}
          <EventContent>
              <p>{event.description}</p>
          </EventContent>
      </Fragment>
    )
}

export default EventDetailsPage