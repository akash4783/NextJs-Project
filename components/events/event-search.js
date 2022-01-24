import Button from "../ui/button";
import { useRef } from "react";
import classes from "./event-search.module.css"
function EventSearch({onSearch}){
    const  yearInputRef = useRef()
     const monthinputRef =useRef()
     function SubmitHandler(e){
     e.preventDefault()
         
         const selectedyear = yearInputRef.current.value
         const selectedmonth = monthinputRef.current.value
         if(onSearch){

             onSearch(selectedyear, selectedmonth)
         }
     
         
    }
    

    return(<form className={classes.form} onSubmit={SubmitHandler}>
        <div className={classes.controls}>
            <div className={classes.control }>
            <label htmlFor="year">
                Year
            </label>
            <select id="year" ref={yearInputRef}>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
            </select>
        </div>
        <div className={classes.control}>
            <label htmlFor="month">
                Month
            </label>
            <select id="month" ref={monthinputRef}>
                <option value="1">january</option>
                <option value="2">february</option>
                <option value="3">march</option>
                <option value="4">april</option>
                <option value="5">may</option>
                <option value="6">june</option>
                <option value="7">july</option>
                <option value="8">august</option>
                <option value="9">september</option>
                <option value="10">october</option>
                <option value="11">november</option>
                <option value="12">December</option>



            </select>
        </div>
        </div>
        <Button type="submit">Find Event</Button>
    </form>)
}
export default EventSearch;
