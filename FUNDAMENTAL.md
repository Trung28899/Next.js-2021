## 1. What is NextJS ?

        - NextJs is a Framework that is built upon React.js. Note that:
        +, React.js is an UI library
        +, Next.js solves common problems and makes bulding React apps easier
        +, Simply add a lot of features to make you build better production app

    => Next.Js is a React Framework for Production

## 2. Why do we use it ?

Key Features of Next.js:

        - KEY FEATURE 1: Built-in server side rendering (Improved SEO):

            +, Server-side rendering: means prepare the content in the server instead of the browser
            Explanation:

                    For React, the server will return a skeleton html file that has a javascript file attached,
                    then the javascript file will work on rendering the needed content to the browser. This is client side rendering

                    For Next.js, the server will return a full html file that contain all the information needed
                    for the request. This is server side rendering

                    => Good for initial UI load and SEO because the server is serving the full content of the site
                    visited. Comparing to client side rendering, the full content is loaded later in the browser

            +, Problem of client side rendering vs server side rendering:

                    because the html and css file is loaded
                    before the javascript file in the browser (because they are lighter).
                    Therefore there are some problems:

                    For client side rendering, you might need the page to load to display full content of the request

                    For server side rendering, you might have a problem of a component is rendered but not responding
                    for example you might see a button but when you click it, nothing happens because the HTML and CSS
                    is loaded before the JS file

            +, For Next.js Application, After initial load, user can interact with the page and it will be
            handled by React for client side requests and rendering

        - KEY FEATURE 2: Simplified Routing (File-based Routing)
            +, Don't need to setup routing like React. By default, every file is its own route
            +, you define pages and files with files and folders instead of code

        - KEY FEATURE 3: Fullstack Capabilities
            +, Easily add backend code to Next / React app
            +, Next.js can store data, get data, authentication, communicate with database in general

## 3. Page Pre-Rendering:

        - When a request is sent to a Next.js application:
            +, Server will return the pre-rendered page
                > Pre-rendered Page: page that has all the data rendered at build time or at server

                > comparing to normal React.js app:
                a skeleton html folder will be return and rendered first
                then the async data will be requested from the client

            +, After the initial load, React.js will takes over to make the page fully
                interactive and will be able to request data on the fly

        - Two Forms of Pre-Rendering
            +, Static Generation
            +, Server-Side Rendering

        => Demontration Picture: https://drive.google.com/file/d/1qb9NP0M8-tL8-BoYTJbXwhqkS90Tx1zP/view?usp=sharing
        => See video 335 - 336 for further explanation

        a. STATIC GENERATION:

            - Time of rendering:
                +, Your Page is not pre-rendered on the fly or on the server
                +, Your Page is Pre-rendered when you build your application, before you to deploy to server

                    => Good for static site that the page will not change at all after deployment
                    => Not Good for fetching data at a database (that will potentially change)

            - Incremental Static Generation:
                +, Same idea as Static Generation
                +, However, the page is re-render every (for example 10 second) on the server
                if we set the re-render time as 10
                    => syntax for this: set revalidate: 10 in getStaticProps
                    => See in ./pages/index.js, 5th Commit

            - Example: see 5th Commit, ./pages/index.js
            - When run npm run build, see the notes to see what pages is:
                +, (Static)  automatically rendered as static HTML (uses no initial props)
                +, (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)
                +, (Server)  server-side renders at runtime
                +, (ISR)     incremental Static generation

        b. SERVER-SIDE RENDERING


        => If your data doesn't change multiple time every seconds, Incremental Static Generation is actually
        a better option than Server-Side Rendering because you don't have to wait for the page to be render

## 4. API Routes:

        - API Routes is much like backend code:
            +, Receive HTTP Requests, interact with the database and send a response

        - API has to follow a convention:
            +, The api routes has to be within the pages folder
            +, Just like other pages, the route doesn't need to be setup
                because it is relies on the file name and folder structure
