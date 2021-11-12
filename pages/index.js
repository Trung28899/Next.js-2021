import React from "react";
import MeetupList from "../components/meetups/MeetupList";
/*  
    If we import this and we don't use this code in this file, 
    we will get an error at compile time
*/
import { MongoClient } from "mongodb";

const HomePage = (props) => {
  // Component is accessing props from getStaticProps() or getServerSideProps()
  return (
    <div>
      <MeetupList meetups={props.meetups} />
    </div>
  );
};

/*
  This is Static Generation
  See video 335 for this

  Remember, this code is run in the server
  so browser client won't be able to see this code
  All the database keys are safe here
*/

export async function getStaticProps() {
  // Fetching data from API
  const client = await MongoClient.connect(
    "mongodb+srv://trung:trungtrinh38@linkshortcluster.whf1t.mongodb.net/linkshort"
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
}

export default HomePage;
