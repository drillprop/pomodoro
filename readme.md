# Pomodoro

**Progressive Web Application** written in React with Typescript.

## Screenshot

![screenshot](https://user-images.githubusercontent.com/51168865/80403906-ae719880-88c0-11ea-9228-22340bf3d8ea.png)

## Motivation

The pomodoro application is created to fight with procrastination using **_pomodoro technique_**. If you don't know what is it and how it works, you can read about [this technique here](https://en.wikipedia.org/wiki/Pomodoro_Technique).

## Description

Application is using authentication system and realtime database based on **firebase**. Every signed user can track his statistics, manage tasks, configure duration of work intervals(known as _pomodoros_ or _tomatoes_) and breaks.

## Technologies

- [react](https://reactjs.org/)
- [webpack](https://webpack.js.org/)
- [redux](https://redux.js.org/)
- [redux-saga](https://redux-saga.js.org/)
- [firebase](https://firebase.google.com/)
- [styled-components](https://www.styled-components.com/)
- [react-spring](https://www.react-spring.io/)
- [chartjs](https://www.chartjs.org/)
- [dayjs](https://github.com/iamkun/dayjs#)

## Installation

1. Clone this repo

```sh
git clone https://github.com/drillprop/pomodoro.git
```

2. Install NPM packages

```sh
npm install
```

3. Start new project on [firebase](https://console.firebase.google.com/) with `Realtime Database`

4. In firebase console, configure authentication by turning on `Email/Password` and `Google` sign-in providers

5. Create `.env` file

6. In firebase project overview register new app by adding new `web app`, copy all `firebaseConfig` values and paste them in `.env`
   in a similar way like `.env.example` file.

7. To start the app in `dev mode` run

```sh
npm start
```

## Demo

[Pomodoro](https://drillprop.github.io/pomodoro/)
