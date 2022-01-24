import AddressIcon from '../icon/address-icon';
import DateIcon from '../icon/date-icon';
import LogisticsItem from './logistics-item';
import classes from './event-logistic.module.css';
import moment from 'moment';


function EventLogistics(props) {
    const { date, address, image, imageAlt } = props;
    console.log("date", date);

    var dates = new Date(date);
    const newDates = moment(dates).format(' MMMM D Y')
    console.log(newDates);
    const addressText = address.replace(', ', '\n');

    return (
        <section className={classes.logistics}>
            <div className={classes.image}>
                <img src={`/${image}`} alt={imageAlt} />
            </div>
            <ul className={classes.list}>
                <LogisticsItem icon={DateIcon}>
                    <time>{newDates}</time>
                </LogisticsItem>
                <LogisticsItem icon={AddressIcon}>
                    <address>{addressText}</address>
                </LogisticsItem>
            </ul>
        </section>
    );
}

export default EventLogistics;