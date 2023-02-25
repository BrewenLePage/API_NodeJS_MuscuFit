# API_NodeJS_MuscuFit

## Intro

Welcome to this NODEJS API for managing the users of a gym. This is a course project.
You can find a swagger to test all the methods in the project.

## The project now

A this point, the project work in local with the configuration for it 
In swagger.js just put
```
    //local
    // host: "localhost:8181/Muscufit/api/v1",
    //production
    host: "muscufitapi.onrender.com",
```
at the line 25 to 28.

But it's not work remotely
After some hours of research i find this topic, that said that the problem come from Render and their servers.
[https://community.render.com/t/404-error-while-deploying-a-node-web-service/814]
