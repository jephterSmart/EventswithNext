import {useRouter} from 'next/router';

import {getEventById} from '../../../dummy_data';
import EventSummary from '../../../components/event-detail/event-summary'
import EventLogistics from '../../../components/event-detail/event-logistics'
import EventContent from '../../../components/event-detail/event-content';
import ErrorAlert from '../../../components/ui/error-alert';

function EventDetails(props){
    const route = useRouter();
    const id = route.query.someId;
    
    const event= getEventById(id);
    if(!event) return <ErrorAlert><p>404 | page not found</p></ErrorAlert>

    return(
        <>
        <EventSummary title={event.title} />
        <EventLogistics address={event.location} image={event.image} 
        imageAlt={event.title} date={event.date}/>
        <EventContent>
            <p>{event.description}</p>
        </EventContent>
            
        </>
    )
}
export default EventDetails;