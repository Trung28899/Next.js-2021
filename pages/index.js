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

const HomePage = (props) => {
  // const [loadedMeetup, setloadedMeetup] = useState([]);

  /*
    code in useEffect will be used after the code is rendered

    therefore the list of meetups will not be there in the initial load 
    > not good for SEO, same as normal React.js applicatoin
    > So, we will need to do Pre-rendering 

    useEffect(() => {
    // send a http request and fetch data
    setloadedMeetup(DUMMY_MEETUPS);
  }, []);
  */

  // Component is accessing props from getStaticProps(): Static Generation
  return (
    <div>
      <MeetupList meetups={props.meetups} />
    </div>
  );
};

/*
  This is Static Generation
  See video 335 for this

  This code is run at build time to fetch the data
  browser won't be able to see this code. 
  
  This is not server-render
  this is data fetch at build time when you run npm run build
  so the page deployed to the server will have all the content ready

  => This is static Pre-Render. Data is not render on the fly but prerender when 
  the application is build (before being deployed)

  This function has to be getStaticProps()
  exact syntax is required here

  when we set revalidate: 10, this page is also rendered on the server
  every 10 second so that the data won't be outdated. The re-generated pages
  will then replace the old generated pages
*/
export async function getStaticProps() {
  // Fetching data from API
  const dataFetched = DUMMY_MEETUPS;
  return {
    props: {
      meetups: dataFetched,
    },
    revalidate: 10,
  };
}

export default HomePage;
