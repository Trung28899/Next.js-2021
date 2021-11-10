//route: domain-name/news

import React, { Fragment } from "react";
import Link from "next/link";

const News = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-great">NextJS is pretty great</Link>
        </li>
        <li>
          <Link href="/news/something">Something else bro</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default News;
