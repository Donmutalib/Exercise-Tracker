# node_exercise_tracker
A REST API for a workout and exercise tracker for any fitness routine. Built with Nodejs and Express

## Motivation
The project has made an effort to build a very intuitive and easy-to-use REST API for a workout and exercise tracker.

## Goal

The goal of `node_exercise_tracker` is to provide a simple and intuitive REST API for a workout tracker, designed to help you get better results from your workouts. exercise_tracker provides everything you need to record your workouts effortlessly and quickly.

### features:
• Add your routines and easily choose between them


## ⚙️ Installation


- Clone the repo by running 

    ```git clone git@github.com:backendkolawole/Exercise-Tracker.git ``` 

- Create a .env file and set up the PORT variable
- Set up MONGO_URI connection string in the .env file
- run ```npm install ```
- run ``` npm start ```

## Documentation

You can POST to /api/users with form data username to create a new user.

You can request GET to /api/users to get a list of all users.

You can POST to /api/users/:_id/exercises with form data description, duration, and optionally date. If no date is supplied, the current date will be used.

The response returned from POST /api/users/:_id/exercises will be the user object with the exercise fields added.

You can make a GET request to /api/users/:_id/logs to retrieve a full exercise log of any user.

A request to a user's log GET /api/users/:_id/logs returns a user object with a count property representing the number of exercises that belong to that user.

Each item in the log array that is returned from GET /api/users/:_id/logs is an object that should have a description, duration, and date properties.

The description property of any object in the log array that is returned from GET /api/users/:_id/logs should be a string.

The duration property of any object in the log array that is returned from GET /api/users/:_id/logs should be a number.

The date property of any object in the log array that is returned from GET /api/users/:_id/logs should be a string. Use the dateString format of the Date API.

You can add from, to and limit parameters to a GET /api/users/:_id/logs request to retrieve part of the log of any user. from and to are dates in yyyy-mm-dd format. limit is an integer of how many logs to send back.


Example

The responses should have the following structures.

Exercise:
```
    {
    username: "fcc_test",
    description: "test",
    duration: 60,
    date: "Mon Jan 01 1990",
    _id: "5fb5853f734231456ccb3b05"
    }
```

User:
    ```
    {
    username: "fcc_test",
    _id: "5fb5853f734231456ccb3b05"
    }
    ```


Log:
```
    {
    username: "fcc_test",
    count: 1,
    _id: "5fb5853f734231456ccb3b05",
    log: [{
        description: "test",
        duration: 60,
        date: "Mon Jan 01 1990",
    }]
    }
```

## 💬 Contact



