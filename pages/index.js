import {getFeaturedEvents} from '../dummy_data';
import EventList from '../components/events/event-list';

function HomePage(){
  const events = getFeaturedEvents();
  return(
    <div>
      <EventList items={events} />
    </div>
  )

}
export default HomePage;