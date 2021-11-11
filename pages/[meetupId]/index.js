import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

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
  return {
    fallback: true,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // Fetching data from API
  const meetupId = context.params.meetupId;
  console.log(meetupId);

  return {
    props: {
      title: "A Third Meet Up",
      image:
        "https://firebasestorage.googleapis.com/v0/b/trung-portfolio.appspot.com/o/personal%2Favatar.jpg?alt=media&token=08f1bd82-670c-47a2-be43-e5acf92605df",
      address: "Some Address 5, 12345 Some City",
      description: "This is a Third Meet up bro",
    },
    revalidate: 10,
  };
}

export default MeetUpID;
