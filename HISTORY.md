## CONTENT AND COMMIT HISTORY FOR NEXT.JS REPOSITORY

## 1. 1st Commit: Routing

    - How does routing works in Next.js:
    +, Files for routing is in ./pages

    +, Special case:
    => index.js route is /
    => \_app.js doesn't count for routing

    +, Otherwise, Filename and folder name is also the route name.
    No need for further setup
    => See code in .pages

    - Nested Routing
    => See code in ./pages/news/something.js
    => route will be /news/something

    - Dynamic Routing:
    +, Need to be [parameterName].js
    +, Any other routes that is not defined, will be directed to that page
    => see code: ./news/[newsId].js to see how to access parameters

## 2. 2nd Commit: Linking between pages:

    - See ./news/index.js
    - After this commit, the file structure is totally different
    - Syntax:
    import Link from "next/link";<Link href="/news/something">Something else bro</Link>

## 3. 3rd Commit: \_app.js explained & New project setup

    - \_app.js:
    +, Is a root component that Next.js Will render. Much like the index.js in React.js
    +, Any settings that applied to the whole app, you can put it here (like App.js or index.js in React)

    - See the Layout in this \_app.js file to understand further

## 4. 4th Commit: Redirect Pages Programatically, useRouter

    - Syntax:
        import { useRouter } from "next/router";
        router.push("/routeName");
    - Much like useHistory() in React
    - See ./components/meetups/MeetupItem.js

## 5. 5th Commit: (SSG) Static Site Generation & (ISR) Incremental Static Generation

    - See FUNDAMENTAL.md to understand what this is
    - Code in index.js to see how to do it

## 6. 6th Commit: (SSR) Server Side Rendering & Dynamic Route (SSG) Static Site Generation

    - SSR render page at server for any incoming request
        => See code in ./pages/index.js, see getServerSideProps(context)

    - Dynamic Route Static Site Generation:
        +, Code in [meetupId]/index.js
        +, see getStaticPaths()
        +, see getStaticProps(context)
        +, see how to get dynamic route in getStaticProps()

## 7. 7th Commit: api routes setup & send http request to api route

    - Knowledge & Set up Command:
        +, npm install --save mongodb
        +, To understand more, see FUNDAMENTAL.md

    - API routes setup:
        +, See ./pages/api/new-meetup.js
        +, Can see how to connect with Mongo DB and insert a document
        +, Any code in api route won't be reveal to the browser so it is safe

    - Sending request to api route:
        +, See ./pages/new-meetup/index.js

## 8. 8th Commit: Fetching Data From Database & Set All Routes For getStaticPath():

    - Fetching Data From Database:
        +, See ./pages/index.js in getStaticProps()

    - Set All Dynamic Routes Possible For getStaticPath():
        +, See ./pages/[meetupId]/index.js, under getStaticPath()
