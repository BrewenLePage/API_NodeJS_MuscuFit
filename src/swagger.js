const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const apiEndpointsFiles = ['src/api-endpoints.js']

const doc = {
    info: {
        version: "3.0.0",
        title: "Muscufit API documentation",
        description: "Documentation of Muscufit API",
        termsOfService: "http://swagger.io/terms/",
        contact: {
            email: "brewenlpg@gmail.com"
        },
        license: {
            name: "Apache 2.0",
            url: "http://www.apache.org/licenses/LICENSE-2.0.html"
        },
    },
    servers: [
        {
            //local
            url: "localhost:8181/Muscufit/api/v1",
            //production
            // url: "muscufitapi.onrender.com/api/v1/",
        }
    ],
    //local
    // host: "localhost:8181/Muscufit/api/v1",
    //production
    host: "muscufitapi.onrender.com",
    basePath: "/",
    schemes: ["http", "https"],
    consumes: ['application/json'],
    produces: ['application/json'],
    securityDefinitions: {
        bearerAuth: {
            type: 'apiKey',
            name: "authorization",
            scheme: 'bearer',
            bearerFormat: 'JWT',
            in: 'header'
        }
    },
    tags: [
        {
            "name": "User",
            "description": "Endpoints"
        },
        {
            "name": "Susbcribe",
            "description": "Endpoints"
        }
    ],
    definitions: {
        User: {
            firstName: "Jhon",
            lastName: "Doe",
            email: "anpch@example.com",
            password: "password",
            adress: "50 rue des mouettes"
        },
        Subscription: {
            uid: "uid",
            typeSubscription: "premium",
        }
    }
}

swaggerAutogen(outputFile, apiEndpointsFiles, doc).then(() => {
    // -- For auto generating swagger_output.json file
    require('./app.js')
});