import classes from './event-list.module.css'
import EventItem from '../event-item';

function EventList(props){
    const {items} = props;
    return(
    <ul className={classes.list}>
    {items.map(event => <EventItem key={event.id}
        location={event.location}
        date={event.date}
        id={event.id}
        title={event.title}
        image={event.image} />)
    }
        </ul>
    );
}
export default EventList;