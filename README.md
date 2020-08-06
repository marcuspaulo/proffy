<p align="center">
   <img src="https://github.com/marcuspaulo/proffy/blob/master/.github/logo.png?raw=true" alt="Proffy" width="280"/>
</p>

<hr>

> :rocket: Project made to connect `teachers` to `students`, made in `Next Level Week #2` by `@Rocketseat`

<p align="center">	
<a href="https://www.linkedin.com/in/marcuspaulo">
  <img alt="Marcus Paulo" src="https://img.shields.io/badge/-Marcus%20Paulo-8257E5?style=flat&logo=Linkedin&logoColor=white" />
  </a>

  <a href="https://github.com/marcuspaulo/proffy/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/marcuspaulo/proffy?color=774DD6">
  </a> 
   <a href="https://github.com/marcuspaulo/proffy/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/marcuspaulo/proffy?color=8257E5&logo=github">
  </a>
</p>

# :pushpin: Table of Contents

- [:pushpin: Table of Contents](#pushpin-table-of-contents)
    - [Web Screenshot](#web-screenshot)
    - [Mobile Screenshot](#mobile-screenshot)
- [:computer: Technologies](#computer-technologies)
- [📙 Insomnia (Rest Client)](#-insomnia-rest-client)
- [:rocket: Features](#rocket-features)
- [:construction_worker: How to run](#construction_worker-how-to-run)
    - [📦 Run API](#-run-api)
    - [💻 Run Web Project](#-run-web-project)
    - [📱 Run Mobile Project](#-run-mobile-project)
- [:bug: Issues](#bug-issues)
- [:tada: Contributing](#tada-contributing)
- [:closed_book: License](#closed_book-license)

<h2 align="left"> 📥 Figma layout available for download at: </h2>
<p align="left">
    <a title="Figma Web" alt="Figma Web" href="https://www.figma.com/file/mSpNIoBwe4s8E5iYIrvtBM/Proffy-Web">
        <svg width="200" height="64" viewBox="0 0 106 64" fill="none"><path d="M97 61V4.207a4.32 4.32 0 00-1.172-2.975A3.903 3.903 0 0093 0H13c-1.06 0-2.078.443-2.828 1.232A4.32 4.32 0 009 4.207V61h88z" fill="#8257E6"></path><path d="M0 61h106v1.5c0 .398-.385.78-1.071 1.06-.685.282-1.615.44-2.584.44H3.655c-.97 0-1.899-.158-2.584-.44C.385 63.28 0 62.899 0 62.5V61zM41.733 30.643l6.06 2.095v3.495L38 32.135v-3.029l9.793-4.098v3.483l-6.06 2.152zM51.383 39h-2.648l5.506-18H56.9l-5.517 18zM64.289 30.61l-6.027-2.107v-3.484L68 29.118v3.028l-9.738 4.099V32.76l6.027-2.152z" fill="#fff"></path></svg>
    </a>
   <a title="Figma Mobile" alt="Figma Mobile" href="https://www.figma.com/file/lByMrBUNRJMp9DUsRqeetR/Proffy-Mobile">
       <svg width="200" height="80" viewBox="0 0 43 80" fill="none"><path d="M38.384 80H3.838C1.718 80 0 78.115 0 75.79V4.21C0 1.886 1.718 0 3.838 0h34.546c2.12 0 3.838 1.885 3.838 4.21v71.58c0 2.325-1.718 4.21-3.838 4.21z" fill="#8257E6"></path><path d="M10 0h21.273v.273a3 3 0 01-3 3H13a3 3 0 01-3-3V0z" fill="#121214"></path><path d="M11.93 40.556l4.938 1.81v3.02l-7.98-3.541v-2.617l7.98-3.542v3.01l-4.937 1.86zM19.793 47.778h-2.157l4.486-15.556h2.166l-4.495 15.556zM30.31 40.526l-4.911-1.82v-3.01l7.934 3.541v2.618L25.4 45.397v-3.011l4.91-1.86z" fill="#fff"></path></svg>
    </a>
</p>
<p align="left">
    <a title="Download .fig Web" href="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/17c8198d-4e67-4838-b18b-440cd2fdf37e/Proffy_Web.fig?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200804T053236Z&X-Amz-Expires=86400&X-Amz-Signature=ba4ac9b73aca8c78671e5a872403d63b58e4ad69e3fd2d50b0ca57797173906d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Proffy_Web.fig%22">
        <img alt="Direct Download" src="https://img.shields.io/badge/Download Web-black?style=flat-square&logo=figma&logoColor=red" width="200px" />
    </a>
    <a title="Download .fig Mobile" href="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/736336db-c43b-4319-ab44-594da9fb6cd0/Proffy_Mobile.fig?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200804T053403Z&X-Amz-Expires=86400&X-Amz-Signature=01373fafe79f7e8ab5377c5f097e0268631e4a933cb1733dd8138e1bf66a8b09&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Proffy_Mobile.fig%22">
        <img alt="Direct Download" src="https://img.shields.io/badge/Download Mobile-black?style=flat-square&logo=figma&logoColor=red" width="215px"/>
    </a>
</p>

### Web Screenshot

<div style="display: flex; flex-direction: 'row'; align-items: 'center';">
   <img src="https://github.com/marcuspaulo/proffy/blob/master/.github/web-landing-page.png?raw=true" width="350px">
   <img src="https://github.com/marcuspaulo/proffy/blob/master/.github/web-list.png?raw=true" width="350px" style="margin-left:12px;">
</div>

### Mobile Screenshot

<div style="display: flex; flex-direction: 'row'; align-items: 'center';">
   <img src="https://github.com/marcuspaulo/proffy/blob/master/.github/mobile-home.png?raw=true" width="350px">
   <img src="https://github.com/marcuspaulo/proffy/blob/master/.github/mobile-favoritos.png?raw=true" width="350px" style="margin-left:12px;">
</div>

# :computer: Technologies

This project was made using the follow technologies:

<ul>
  <li><a href="https://nodejs.org/en/docs/">NodeJs</a></li>
  <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
  <li><a href="https://pt-br.reactjs.org/">React</a></li>
  <li><a href="https://reactnative.dev/">React Native</a></li>
  <li><a href="https://expo.io/">Expo</a></li>
</ul>

# 📙 Insomnia (Rest Client)

> backend>docs

# :rocket: Features

- Website to sign up teachers and students.
- App to connect teachers and students.

# :construction_worker: How to run

```bash
# Clone Repository
$ git clone https://github.com/marcuspaulo/proffy.git
```

### 📦 Run API

```bash
# Go to backend folder
$ cd backend/

# Install Dependencies
$ yarn install or npm install

# Run Aplication
$ yarn start or npm run start
```

Access API at http://localhost:3333/

### 💻 Run Web Project

```bash
# Go to web folder
$ cd web/

# Install Dependencies
$ yarn install or npm install

# Run Aplication
$ yarn start or npm run start
```

Go to http://localhost:3000/ to see the result.

### 📱 Run Mobile Project

To run the mobile project you need a cellphone with the app of [expo](https://play.google.com/store/apps/details?id=host.exp.exponent) instaled or a emulator android/ios.
<br />
After, fork this repository and clone to your machine. Inside of the project's folder run the following commands:

```bash
# Go to mobile folder
$ cd mobile/

# Install Dependencies
$ yarn install  or npm install

# Run Aplication
$ yarn start or npm run start
```

Aferter read the QRCode with the app of [expo](https://play.google.com/store/apps/details?id=host.exp.exponent) or run on emulator.

# :bug: Issues

Feel free to **file a new issue** with a respective title and description on the the [Proffy](https://github.com/marcuspaulo/Proffy/issues) repository. If you already found a solution to your problem, **I would love to review your pull request**!

# :tada: Contributing

Check out the [contributing](https://github.com/marcuspaulo/Proffy/blob/master/CONTRIBUTING.md) page to see the best places to file issues, start discussions and begin contributing.

# :closed_book: License

Released in 2020 :closed_book: License

Powered by [Rocketseat 🚀](http://github.com/rocketseat)

Made with ❤️ by [Marcus Paulo](https://github.com/marcuspaulo).
This project is under the [MIT license](https://github.com/marcuspaulo/Proffy/master/LICENSE).

Give a ⭐️ if this project helped you!
