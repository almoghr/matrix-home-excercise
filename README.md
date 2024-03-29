# Swagger generated server

## Overview
This server was generated by the [swagger-codegen](https://github.com/swagger-api/swagger-codegen) project.  By using the [OpenAPI-Spec](https://github.com/OAI/OpenAPI-Specification) from a remote server, you can easily generate a server stub.

### Running the server
To run the server, run:

```
    make sure you initialize the ENV variables before building the docker image
    npm run docker-build
    npm run docker-run

```

To view the Swagger UI interface:

```
open http://localhost:8080/docs
```

This project leverages the mega-awesome [swagger-tools](https://github.com/apigee-127/swagger-tools) middleware which does most all the work.

#### enpoints
this server provides two major endpoints:

login
http://localhost:8080/login <!--POST request-->
requirements:
    enter username and password through the swagger or through a plain postman request
    username: string
    password: string
proccessing:
    the service will check the credentials you provided and return result.
result:
    the result will end in a specified error as you can see in the docs or else it will return {status: ok}.
    the result will plant inside your browser an http only cookie.
    the cookie will be your provider for the next request.

calculate
http://localhost:8080/calculate <!--POST request-->
requirements:
    enter first_num and second_num through the swagger or through a plain postman request.
    first_num: integer
    second_num: integer

    in addition, you must enter a specific header: 
    X-Calculation-Method: string [*,/,+,-]
proccessing:
    the service will check if you have a http only cookie set in your client side. if so, continues to the mathematical phase.
    the service will check the numbers you've provided and return result based on the X-Calculation-Method which was provided.
result:
    the result will end in a specified error as you can see in the docs or else it will return {result: <someNumber>}.
    
##### unit testing, integration testing, e2e testing. 
to run the tests, all you need to do is run the following command:
    npm run test
<!-- you must have installed the dependencies first offcourse -->
