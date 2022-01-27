import { useNavigate } from "react-router-dom";

import NewMeetUpForm from "../components/meetups/NewMeetupForm";

function NewMeetup() {
  const navigate = useNavigate();

  function addMeetupHandler(meetupData) {
    // For this we use firebase realtime database

    // URL format - url/collectionName.json
    const URL = "";

    fetch(
      URL,
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }.then(() => {
        navigate("/", { replace: true });
      })
    );
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetUpForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetup;
