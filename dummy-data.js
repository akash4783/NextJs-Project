
    const DUMMY_EVENTS =  [
        {
            id: 'e1',
            title: "Programming for everyone",
            description:"everyone can learn to code",
            location:"SomeStreet 25, 12345 san SomeWhere",
            image:"images/coding-event.jpg",
            date:"2021-05-12",
            isFeatured:false,
        
        },
        {
            id: 'e2',
            title: "Networking for Introverts",
            description:"Introverts",
            location:"Douglas Extension,Suite 847",
            image:"images/introvert-event.jpg",
            date:"2021-05-30",
            isFeatured:true,
        
            
        },
        {    id: 'e3',
        title: "Networking for Extroverts",
        description:"Extroverts",
        location:"Kolhapur gangavesh",
        image:"images/extrovert-event.jpg",
        date:"2021-06-03",
        isFeatured:true,
    
        },
        
    ]

    export function getFeturedEvents(){
        return DUMMY_EVENTS.filter(event => event.isFeatured)
    }
    export function getAllEvents(){
        return DUMMY_EVENTS
    }
 
    export function getFilterdEvents(dateFilter){
        const{year,month}=dateFilter
        let filteredEvents = DUMMY_EVENTS.filter((event)=>{
            const eventDate = new Date(event.date)
            return eventDate.getFullYear()===year && eventDate.getMonth()=== month-1
        })

        return filteredEvents
    }
    export function getEventById(id){
        console.log();
        return DUMMY_EVENTS.find((event)=>event.id==id)
    }