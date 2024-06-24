import { useLoaderData,json } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [fetchedEvents, setFetchedEvents] = useState();
//   const [error, setError] = useState();

//   useEffect(() => {
//     async function fetchEvents() {
//       setIsLoading(true);

//       setIsLoading(false);
//     }

//     fetchEvents();
//   }, []);
const data = useLoaderData();
// if(data.isError)
//     {
//         return <p>{data.message}</p>
//     }
const events=data.events;
  return (
    <>
      {/* <div style={{ textAlign: "center" }}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div> */}
      {<EventsList events={events} />}
    </>
  );
}

export default EventsPage;

export async function loader(){
    const response = await fetch("http://localhost:8080/events");

    if (!response.ok) {
      //return {isError:true, message:'Could not fetch the data'};
      //throw new Response(JSON.stringify({message:'Could not fetch events.'}),{status:500});
      throw json({
        message:'Could not fetch events'
      },
    {status:500});
    } else {
      //const resData = await response.json();
      return response;
    }
}