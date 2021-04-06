

import Button from '../../ui/button';
import AddressIcon  from '../../icons/address-icon';
import ArrowRightIcon  from '../../icons/arrow-right-icon';
import DateIcon  from '../../icons/date-icon';
import classes from './event-item.module.css';

function EventItem(props){
    const{id,image,location,date,title} =props;
    const humanReadableDate = new Date(date).toLocaleDateString('en-US',{
        year:'numeric',
        day:'numeric',
        month:'long'
    });
    const newLocation = location.replace(', ', '\n');

    return(
        <li className={classes.item}>
            <img src={'/'+image} alt={title} />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{title}</h2>
                
                <div className={classes.date}>
                    <time><DateIcon />{humanReadableDate}</time>
                </div>
                <div className={classes.address}>
                    <address><AddressIcon />{newLocation}</address>
                </div>
            </div>
            <div className={classes.actions}>
                <Button link={`/events/${id}`}>
                    <span>Explore Event</span>
                    <span className={classes.icon}><ArrowRightIcon /></span></Button> 
                </div>
            </div>
        </li>
    )
}
export default EventItem;