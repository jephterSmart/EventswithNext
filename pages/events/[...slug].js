import {useRouter} from 'next/router';


import {getFilteredEvents} from '../../dummy_data';
import EventList from '../../components/events/event-list';
import ResultTitle from '../../components/events/results-title';
import ErrorAlert from '../../components/ui/error-alert';
import Button from '../../components/ui/button';


function Filtered(props){
    const router = useRouter();
    const filteredData = router.query.slug;
    if(!filteredData){
        return <ErrorAlert><p className='center'>Loading</p> </ErrorAlert>
    }
    const numYear = +filteredData[0];
    const numMonth = +filteredData[1];
    if(isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021)
        return (<>
        <ErrorAlert><p className='center'>Not a valid Search</p>
        </ErrorAlert>
        <div className='center'>
            <Button link='/events'>Show All Events</Button>
            </div></>)
    const filteredEvents =getFilteredEvents({
        year: numYear,
        month: numMonth
    })
    if(!filteredEvents || filteredEvents.length=== 0)
     return (<>
        <ErrorAlert><p className='center'> Event not available</p></ErrorAlert>
        <div className='center'>
        <Button link='/events'>Show All Events</Button>
        </div></>)
     const date = new Date(numYear,numMonth - 1);
    return(
        <>
        <ResultTitle date={date} />
        <EventList items={filteredEvents} />
        </>
    );

}
export default Filtered;