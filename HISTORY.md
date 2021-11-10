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
