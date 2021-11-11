## CONTENT AND COMMIT HISTORY FOR NEXT.JS REPOSITORY

1. 1st Commit: Routing

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

2. 2nd Commit: Linking between pages:

- See ./news/index.js
- After this commit, the file structure is totally different
- Syntax:
  import Link from "next/link";<Link href="/news/something">Something else bro</Link>

3. 3rd Commit: \_app.js explained & New project setup

- \_app.js:
  +, Is a root component that Next.js Will render. Much like the index.js in React.js
  +, Any settings that applied to the whole app, you can put it here (like App.js or index.js in React)

- See the Layout in this \_app.js file to understand further
