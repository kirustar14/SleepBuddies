# SleepBuddies <img src="client/public/logo2048.png" alt="logo" width="20"/>

[![CodeQL](https://github.com/CSE-110-FA24-Team-17/SleepBuddies/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/CSE-110-FA24-Team-17/SleepBuddies/actions/workflows/github-code-scanning/codeql)
![UnitTestsBadge](https://github.com/CSE-110-FA24-Team-17/SleepBuddies/actions/workflows/build_test_react.yml/badge.svg)

The Sleep Buddies webapp

Project for Team 17, UC San Diego CSE 110 Fall 2024

## Introduction

College students often have difficulty falling and getting good quality sleep. Our app allows our users to monitor 
their sleep schedule with weekly reports based on their sleep. The app also includes a white noise and meditation feature
to help users relax before bedtime. This will reduce the stress college students face because of lack of sleep / poor 
sleep.


## Requirements

This project uses React in Typescript, and requires `Node.js` and `npm`

Refer to [npm documentations](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) for installation 
instructions

## Running Locally

To run the project locally, please install dependencies and start both the server and the client with two terminal
instances

To run the server:

```angular2html
cd server
npm install
npm start
```

To run the client:

```angular2html
cd client
npm install
npm start
```

By default, the client should be at `http://localhost:3000`, and the server should be at `http://localhost:8080`, please
ensure that both the server and the client are running for the program to function
