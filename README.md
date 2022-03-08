# GraphQL Apollo-Client

   - The Apollo platform is an implementation of GraphQL that transfers data between the cloud (the server) to the UI of your app. When you use Apollo Client, all of the logic for retrieving data, tracking, loading, and updating the UI is encapsulated by the useQuery hook (as in the case of React). Hence, data fetching is declarative. It also has zero-configuration caching. Just by setting up Apollo Client in your app, you get an intelligent cache out of the box, with no additional configuration required.
   - When a front-end engineer builds UI components using any framework, like Vue.js or (in our case) React, those components are modeled and designed from a certain pattern on the client to suit the data that will be fetched from the server.
   - One of the most common problems with RESTful APIs is overfetching and underfetching. This happens because the only way for a client to download data is by hitting endpoints that return fixed data structures. Overfetching in this context means that a client downloads more information than is required by the app.


# WHAT IS APOLLO CLIENT?

   - Apollo Client is an interoperable, ultra-flexible, community-driven GraphQL client for JavaScript and native platforms. Its impressive features include a robust state-management tool (Apollo Link), a zero-config caching system, a declarative approach to fetching data, easy-to-implement pagination, and the Optimistic UI for your client-side application.
   - Apollo Client stores not only the state from the data fetched from the server, but also the state that it has created locally on your client; hence, it manages state for both API data and local data. 
