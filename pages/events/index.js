import {useRouter} from 'next/router';

import {getAllEvents} from '../../dummy_data';
import EventList from '../../components/events/event-list';
import SearchEvents from '../../components/events/search-events';

function AllEvents(props){
   const events = getAllEvents();
   const router = useRouter(); 

   function findEventHandler(year,month){
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
   }
    return(
        <>
            <SearchEvents onSearch={findEventHandler}/>
            <EventList items={events} />
        </>
    )
}
export default AllEvents;