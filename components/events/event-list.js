import EventItem from "./event-item";
function EventList(props){
    const{items} =props
   


    return <ul>
        {items.map(event => <EventItem id={event.id} title={event.title} image={event.image} location={event.location} date={event.date} key={event.id}/>)}
    </ul>


}

export default EventList;
