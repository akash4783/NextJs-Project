import Button from "../ui/button"
import classes from "./result-title.module.css"
function ResultTitle(props){

    const {date}=props

    const humanReadable = new Date(date).toLocaleDateString('en-Us',{
        month:"long",
        year:"numeric"
    })


    return (
       <section className={classes.title}>
           <h1>{humanReadable}</h1>
               <Button link="/events">
                   show all events
               </Button>
       
       </section>
    )
}
export default ResultTitle;
