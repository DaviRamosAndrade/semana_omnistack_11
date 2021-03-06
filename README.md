<h1 align="center"> 
	Semana OmniStack 11.0
</h1>
<div align="center">
    <img alt="BeTheHero" title="#BeTheHero" src="./githubimg/index.svg" width="200px" />
</div>

<div align="center">
	<a href="https://insomnia.rest/run/?label=SemanaOmnistack11&uri=https%3A%2F%2Fraw.githubusercontent.com%2FDanielObara%2FSemanaOmnistack11%2Fmaster%2FInsomnia_2020-03-24.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</div>

<p align="center">
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

<p align="center">
  <a href="#project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#how-to-use">How to use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#license">License</a>
</p>

## Project

Be The Hero is a project that aims to connect people who are willing to help ONGs.

<h1 align="center">
    <img alt="Login-Page" title="Login-Page" src="./githubimg/preview.jpg" width="500px" />
</h1>


## Technologies

This project was developed with the following technologies:

- [Node.js](https://nodejs.org/en/) 
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)

## Layout

 Check it out [Figma](https://www.figma.com/file/2C2yvw7jsCOGmaNUDftX9n/Be-The-Hero---OmniStack-11?node-id=0%3A1).

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js][nodejs] + [Yarn][yarn] installed on your computer.

### Install API
```bash
# Clone this repository
$ git clone https://github.com/DaviRamosAndrade/semana_omnistack_11/

# Go into the repository
$ cd semana_omnistack_11/backend

# Install dependencies
$ yarn install

# Run Migrates
$ yarn knex migrate:latest 

# Run Seeds
$ yarn seed

# Run the API
$ yarn dev
```

## How to contribute

- Make a fork;
- Create a branch with your feature: `git checkout -b <my-feature> `;
- Commit changes: `git commit -m 'feat: My new feature'`;
- Make a push to your branch: `git push origin <my-feature>`.

After merging your receipt request to done, you can delete a branch from yours.

## License

This project is under the MIT license. See the [LICENSE](LICENSE.md) for details.
Made by Davi Ramos [Get in touch!](https://www.linkedin.com/in/daviramosandrade)

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
