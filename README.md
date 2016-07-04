# game-editor-web-app
[![Build Status](https://travis-ci.org/chriskevin/game-editor-web-app.svg?branch=master)](https://travis-ci.org/chriskevin/game-editor-web-app)
[![Code Climate](https://codeclimate.com/github/chriskevin/game-editor-web-app/badges/gpa.svg)](https://codeclimate.com/github/chriskevin/game-editor-web-app)
[![Test Coverage](https://codeclimate.com/github/chriskevin/game-editor-web-app/badges/coverage.svg)](https://codeclimate.com/github/chriskevin/game-editor-web-app/coverage)
[![Issue Count](https://codeclimate.com/github/chriskevin/game-editor-web-app/badges/issue_count.svg)](https://codeclimate.com/github/chriskevin/game-editor-web-app)
[![dependency Status](https://david-dm.org/chriskevin/game-editor-web-app.svg)](https://david-dm.org/chriskevin/game-editor-web-app)
[![devDependency Status](https://david-dm.org/chriskevin/game-editor-web-app/dev-status.svg)](https://david-dm.org/chriskevin/game-editor-web-app#info=devDependencies)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/hyperium/hyper/master/LICENSE)

## Prerequisites
The project assumes that you have [Node.js](https://nodejs.org/en/) installed and use npm.
Before attempting to run any tests make sure to run `npm install`. This will install all the required modules, plugins and vendor libraries.
[Jasmine](http://jasmine.github.io/) is the chosen testing framework and is run using [Karma](http://karma-runner.github.io/).

## Running Tests
To run the tests enter `npm test`, this will trigger a single run of Karma using the config file `config/karma.config.js`.
Karma will also produce code coverage which will be located in `coverage/`.

## License
[MIT License](https://github.com/chriskevin/game-editor-web-app/blob/master/LICENSE)
