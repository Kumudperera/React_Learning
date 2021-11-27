import { useHistory } from "react-router"; 
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetUpPage() {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-started-f739b-default-rtdb.firebaseio.com/meetups.json",
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
            'Content-Type': 'application/json'
        }
      }
    ).then(() => {
      history.replace('/');
    });
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetUpPage;
