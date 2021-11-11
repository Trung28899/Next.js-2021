import React from "react";
import NewMeetUpForm from "../../components/meetups/NewMeetUpForm";

const newMeetup = () => {
  const addMeetupHandler = (enteredMeetupData) => {
    console.log(enteredMeetupData);
  };

  return <NewMeetUpForm onAddMeetup={addMeetupHandler} />;
};

export default newMeetup;
