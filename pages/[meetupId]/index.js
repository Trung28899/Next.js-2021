import React, { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetUpID = () => {
  return (
    <MeetupDetail
      title="A Third Meet Up"
      image="https://firebasestorage.googleapis.com/v0/b/trung-portfolio.appspot.com/o/personal%2Favatar.jpg?alt=media&token=08f1bd82-670c-47a2-be43-e5acf92605df"
      address="Some Address 5, 12345 Some City"
      description="This is a Third Meet up bro"
    />
  );
};

export default MeetUpID;
