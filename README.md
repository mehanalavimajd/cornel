<div id="top"></div>

<!-- PROJECT SHIELDS -->
![GitHub contributors](https://img.shields.io/github/contributors/mehanalavimajd/cornel?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/mehanalavimajd/cornel?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues-raw/mehanalavimajd/cornel?style=for-the-badge)
[![MIT License][license-shield]][license-url]
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/mehanalavimajd/cornel?style=for-the-badge)



<!-- PROJECT LOGO -->
<br />
  <h3 align="center">Cornel</h3>

  <p align="center">
    A minimalist logging middleware 
    <a href="https://github.com/mehanalavimajd/Best-README-Template/issues">Report Bug</a>
    ·
    <a href="https://github.com/mehanalavimajd/Best-README-Template/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Morgan is one of the best logging middlewares for Express.js but, It's a little bit tough to work with it. It's also heavy (about 30kb).
Cornel is a middleware which more focuses on being easy to use. It's also light (> 5kb)

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)

<p align="right">(<a href="#top">back to top</a>)</p>



### Prerequisites
* npm
  ```sh
  npm install npm@latest -g
  ```
* Node js
* Express.js
  ```sh
  npm i express
  ```

### Installation

```
npm i cornel
```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Frist require express:
```js
const express = require("express")
const app = express()
```
then require cornel:
```js
const cornel = require("cornel")
```
Use it
```js
app.use(cornel("Things to log")
```

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Project Link: [https://github.com/mehanalavimajd/cornel](https://github.com/mehanalavimajd/cornel)
Email: mehan.alavi.88.majd@gmail.com

<p align="right">(<a href="#top">back to top</a>)</p>

