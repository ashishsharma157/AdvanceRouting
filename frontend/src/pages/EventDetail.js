import { useParams } from "react-router-dom";
function EventDetailPage() {
  var parms = useParams();
  return (
    <>
      <h1>Event details</h1>
      <p>{parms.eventId}</p>
    </>
  );
}

export default EventDetailPage;
