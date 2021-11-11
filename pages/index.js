import React from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meet Up",
    image:
      "https://firebasestorage.googleapis.com/v0/b/trung-portfolio.appspot.com/o/personal%2Favatar.jpg?alt=media&token=08f1bd82-670c-47a2-be43-e5acf92605df",
    address: "Some Address 5, 12345 Some City",
    description: "This is a First Meet up bro",
  },
  {
    id: "m2",
    title: "A Second Meet Up",
    image:
      "https://firebasestorage.googleapis.com/v0/b/trung-portfolio.appspot.com/o/personal%2Favatar.jpg?alt=media&token=08f1bd82-670c-47a2-be43-e5acf92605df",
    address: "Some Address 5, 12345 Some City",
    description: "This is a Second Meet up bro",
  },
  {
    id: "m3",
    title: "A Third Meet Up",
    image:
      "https://firebasestorage.googleapis.com/v0/b/trung-portfolio.appspot.com/o/personal%2Favatar.jpg?alt=media&token=08f1bd82-670c-47a2-be43-e5acf92605df",
    address: "Some Address 5, 12345 Some City",
    description: "This is a Third Meet up bro",
  },
];

const HomePage = () => {
  return (
    <div>
      <MeetupList meetups={DUMMY_MEETUPS} />
    </div>
  );
};

export default HomePage;
