Course Link: https://www.udemy.com/course/react-the-complete-guide-incl-redux

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
