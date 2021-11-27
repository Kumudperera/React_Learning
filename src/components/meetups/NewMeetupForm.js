import { useRef } from "react";
import classes from "./NewMeetupForm.module.css";
import Card from "../ui/Card";

function NewMeetupForm(props) {
  const inputRef = {
    title: useRef(),
    image: useRef(),
    address: useRef(),
    description: useRef(),
  };
  function submitHandler(event) {
    event.preventDefault();
  
    const meetupData = {
      title : inputRef.title.current.value,
      image : inputRef.image.current.value,
      address : inputRef.address.current.value,
      description : inputRef.description.current.value,
    }

    props.onAddMeetup(meetupData);
    // console.log(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup title</label>
          <input type="text" required id="title" ref={inputRef.title} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={inputRef.image} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={inputRef.address} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" required rows="5" ref={inputRef.description} />
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
