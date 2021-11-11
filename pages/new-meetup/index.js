import React from "react";
import NewMeetUpForm from "../../components/meetups/NewMeetUpForm";
import { useRouter } from "next/router";

const newMeetup = () => {
  const router = useRouter();

  const addMeetupHandler = async (enteredMeetupData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    router.push("/");
  };

  return <NewMeetUpForm onAddMeetup={addMeetupHandler} />;
};

export default newMeetup;
