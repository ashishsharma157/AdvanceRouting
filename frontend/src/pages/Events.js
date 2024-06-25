import { useLoaderData,json, defer, Await } from "react-router-dom";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

function EventsPage() {

const {events} = useLoaderData();
// if(data.isError)
//     {
//         return <p>{data.message}</p>
//     }
//const events=data.events;
  return (
    // <>
    //   {/* <div style={{ textAlign: "center" }}>
    //     {isLoading && <p>Loading...</p>}
    //     {error && <p>{error}</p>}
    //   </div> */}
    //   {<EventsList events={events} />}
    // </>
    <Suspense fallback={<p style={{'textAlign':'center'}}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents)=><EventsList events={loadedEvents}/>}
      </Await>
    </Suspense>
  );
}

export default EventsPage;
async function loadEvent()
{
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {

    throw json({
      message:'Could not fetch events'
    },
  {status:500});
  } else {
    const resData = await response.json();
    return resData.events;
    //return response;
  }
}

export function loader(){
   return defer({
    events: loadEvent()
   })
}