
- #### caution !!!

    Make sure server is connected before testing from front-End



# Project Overview:

This whole project (Front-End & Back-End) follows the Model-View-Controller (MVC) architectural pattern. Project  aims to provide the result of addition between two numbers entered by the user. The front-end will check for the validity of the entered numbers, and in case the numbers are negative or not entered, it will throw an error without making an API call to improve user Experience. In case of two positive numbers, the front-end will display the result of the addition in the format described above.

The project will be developed using React for the front-end and the result of the addition will be computed on the back-end. The back-end will use an REST_API to receive the input numbers from the front-end and perform the necessary calculations. The result of the calculation will then be returned to the front-end in the desired format.

This project will improve the user experience by providing real-time error checking on the front-end and reducing the number of API calls, thus improving the overall performance of the application. The result of the calculation will be displayed in a clear and concise manner, making it easy for users to understand.

### API EndPoint:

```
http://localhost:5000/api/v1/response/addition

```


### Input: 
The user is required to input two numbers (NumberOne and NumberTwo) in the front end. The application will check if the input numbers are positive numbers or not. If the numbers are negative or not entered, the application will throw an error on the front-end itself , Backend also have ability to throw errror incase negative and empty inputs came in.

### Output:
The output of the application will be the sum of the two input numbers along with the carry string. The carry string represents the carry during the addition of two numbers.

For example, if the input from the front-end body is NumberOne: 1489 and NumberTwo: 714, the response from the backend should be:

```console
{
  "step1": {
    "carryString": "1",
    "sumString: "3"
  },
  "step2": {
    "carryString": "11",
    "sumString: "03"
  },
  "step3": {
    "carryString": "111",
    "sumString: "203"
  },
  "step4": {
    "carryString": "111",
    "sumString: "2203"
  }
}

```
## How to Run Locally:  
- Fork this repository (or clone directly ).

- Clone the repository (If forked use link from forked Repository  to clone).
```console
https://github.com/safil-badarudeen/Eqaim-Technology_assignment-Backend.git
```
- Navigate to folder
```console
cd Eqaim-Technology_assignment-Backend
```
```console
cd Backend
```
- Install  dependency packages
```console
npm install
```
- Start the server
```console
nodemon index.js
```
## Packages Used :

 - [express-async-erros](https://www.npmjs.com/package/express-async-errors) to handle async errors.
 - [cors](https://www.npmjs.com/package/cors) to protect from unauthorized requests
 - [npm](https://www.npmjs.com/) for packages.
 - [mongoose](https://mongoosejs.com/docs/queries.html) ODM for mongoDB (only needed when scaling application).
 - [morgan](https://www.npmjs.com/package/morgan) to Know which route req are hitting in console.
 - [nodemon](https://www.npmjs.com/package/nodemon) to restart server automatically after everychange


## Features

- ###  Input Validation: 
  This app will validate the input from the frontend, ensuring that the numbers are positive integers and not empty. If the input is not valid, the app will return an error response to the frontend.

- ### Sum Calculation:
   Able to perform the sum of the two numbers, breaking the sum down into smaller steps.

- ### Response Formatting:

  Backend will format the response in a consistent and easy-to-understand manner, as shown in your example.

- ### Error Handling: 

  The backend app is able to handle and respond to errors, such as when the input numbers are not valid.Extra custom Error handling to improve Scalability.

- ### API Endpoints:
  The backend app should provide one or more API endpoints that allow the frontend to send and receive data.

- ### Security: 
 
  Easy to implement security features (if user data needed) since everything is separated to one purpose according to MVC

- ### Performance Optimized:

 
   The backend app is  optimized for performance, with fast response times and efficient use of resources.

- ### Scalability:

  The app is easily  scalable because of Architecture , allowing it to handle increased load as the number of users and requests grows.


# Architecture & Data Flow : 

- This app has a modular design (MVC), with each component responsible for a specific aspect of handling incoming requests.

- Index Module: The entry point for all incoming requests. It contains the routing logic, which determines how incoming requests are handled.

- Routes: The routes module defines the URLs that the app can respond to, and maps each URL to a specific controller.

- Controller: The controller is responsible for processing incoming requests and returning an appropriate response. It retrieves data from the database or other sources, performs any necessary processing, and returns the result to the client.

- Not Found Middleware: If a request is made to a URL that is not defined in the routes, the not found middleware is triggered. It returns a "404 Not Found" response to the client.

### When a request is made to the app, the following sequence of events occurs:

- The request is received by the index module.

- The index module uses the routing logic to determine which route the request matches.

- If a match is found, the request is redirected to the appropriate controller.

- The controller processes the request, retrieves any necessary data, performs any necessary processing, and returns a response to the client.

- If no match is found, the not found middleware is triggered, and a "404 Not Found" response is returned to the client.

#### This architecture allows the app to be easily scaled and maintained, as each component can be modified and tested independently. It also promotes separation of concerns, as each component is responsible for a specific aspect of request handling.




### Front-End Repository Link

- Click here to  [visit Front-End Repository ](https://github.com/safil-badarudeen/Eqaim_Technology_assignment_Frontend) of this Project 