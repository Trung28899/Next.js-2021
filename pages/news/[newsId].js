// Dynamic Route: /news/anyParams

import React from "react";
// getting dynamic route
import { useRouter } from "next/router";

const NewsID = () => {
  const router = useRouter();

  // Getting route
  /*
    Will show undefined at first log then the correct route at the 2nd log
    See video 325 starting minute: 2:00

    This is because the initial load it doesn't fully load the JS yet, so it couldn't 
    get the javascript to get the route correctly
  */
  const newsId = router.query.newsId;
  console.log(newsId);

  // Can then send a request to backend API to fetch
  // news item with the newsId

  return <div>News Dynamic Route Page. Route: {newsId}</div>;
};

export default NewsID;
