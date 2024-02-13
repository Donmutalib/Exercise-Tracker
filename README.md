# node-exercise-tracker
node-exercise-tracker is a RESTful API for a workout and exercise tracker for any fitness routine. Built with Nodejs and Express

## Goal

The goal of `node_exercise_tracker` is to provide a simple and intuitive REST API for a workout and exercise tracker, designed to help you get better results from your workouts. node-exercise-tracker` provides everything you need to record your workouts effortlessly and quickly.

### features:

- Add your routines and easily choose between them
- You can add from, to and limit parameters to a GET /api/users/:_id/logs request to retrieve part of the log of any user. from and to are dates in yyyy-mm-dd format. limit is an integer of how many logs to send back.


## ⚙️ Installation

- Open CMD
  
- Change directory to desktop

  `cd desktop`
   
- Clone this repository

  `git clone git@github.com:backendkolawole/node-exercise-tracker.git`

- Change the current directory

  `cd node-exercise-tracker`
  
- Install packages
  
  `npm install`

- Create a .env file in the root directory
  - Set up the `PORT` variable
  - Set up the `MONGO_URI` connection string in the .env file

- Run the server

  `npm start`

> [!IMPORTANT]
> To avoid port collisions, in the source code, the port value is `3000`


## Endpoints

You can POST to `[project_url]/api/users` with form data username to create a new user.

**POST [project_url]/api/users**

```
201 (Created)

{
    "username": "first user",
    "_id": "65cb6c0365daaa3274b1b0ed",
    "log": [],
    "__v": 0
}

```

You can request GET to /api/users to get a list of all users.

**GET [project_url]/api/users**

```
200 (OK)

[
    {
        "_id": "65cb6c0365daaa3274b1b0ed",
        "username": "first user",
        "log": [],
        "__v": 0
    },
    {
        "_id": "65cb6c6565daaa3274b1b0f0",
        "username": "second user",
        "log": [],
        "__v": 0
    }
]

```

You can POST to /api/users/:_id/exercises with form data description, duration, and optionally date. If no date is supplied, the current date will be used.

**POST [project_url]/api/users/:_id/exercises**

The response will be the user object with the exercise fields added.

```
{
    "username": "first user",
    "description": "exercise description",
    "duration": "30",
    "date": "Tue Feb 13 2024",
    "_id": "65cb6c0365daaa3274b1b0ed"
}
```


You can make a GET request to `[project_url]/api/users/:_id/logs` to retrieve a full exercise log of any user.

**GET [project_url]/api/users/:_id/logs**

```
200 (OK)

{
    "username": "first user",
    "count": 1,
    "_id": "65cb6c0365daaa3274b1b0ed",
    "log": [
        {
            "description": "exercise description",
            "duration": 30,
            "date": "Tue Feb 13 2024"
        }
    ]
}
```

Should return a user object with a count property representing the number of exercises that belong to that user.

Each item in the log array that is returned should have a description, duration, and date properties.

The description property should be a string, the duration property should be a number and the date property should be a string. Use the dateString format of the Date API.
