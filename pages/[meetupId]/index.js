import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";

const MeetUpID = (props) => {
  return (
    <MeetupDetail
      title={props.title}
      image={props.image}
      address={props.address}
      description={props.description}
    />
  );
};

/*
  With getStaticProps(), a page is generated during the build process

  This means, react will need to render all version of the dynamic page 
  in advance for all the supported Id's
  
  React should know for which id it should generate this page. Therefore, we 
  will need to have all the path that user might be enterting at runtime
  => that is the purpose of getStaticPaths()

  getStaticPaths() is needed when a dynamic page is using getStaticProps()
  if this dynamic page doesn't use getStaticProps(), we don't need to use 
  getStaticPaths()

  fallback tells next.js wether the path array contains all the path user might 
  be entering or just some of them

  fallback: false, => path array contains all the path user might be entering. 
    Other route won't be accepted => show 404 page

  fallback: true, => path array contains some of the path user might be entering
    Other route will be accepted

  try route /m3 with different fallback value to understand this
*/

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://trung:trungtrinh38@linkshortcluster.whf1t.mongodb.net/linkshort"
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  /*
    this query will get all the records but will only get the id of all the 
    records in the database

    This is so that we can have the routes setup for this dynamic page dynamically
  */
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: true,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // Fetching data from API
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://trung:trungtrinh38@linkshortcluster.whf1t.mongodb.net/linkshort"
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });

  client.close();

  return {
    props: {
      title: meetup.title,
      address: meetup.address,
      image: meetup.image,
      description: meetup.description,
    },
    revalidate: 10,
  };
}

export default MeetUpID;
