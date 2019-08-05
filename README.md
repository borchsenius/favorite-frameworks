# Favorite Frameworks web app [![Build Status](https://travis-ci.org/borchsenius/favorite-frameworks.svg?branch=master)](https://travis-ci.org/borchsenius/favorite-frameworks)
This is a demonstration web app that use angular 4, bootstrap 4 and font awesome 4.7. The hero management from [Tour of Heroes](https://angular.io/tutorial) is implemented.
Prerequisites npm, typescript and git.

 `$ npm install -g @angular/cli`
  
 `$ git clone git@github.com:borchsenius/favorite-frameworks.git`

 `$ cd demonstration`

 `$ npm install`
  
 `$ ng serve -open`

# Build a docker container with the favorite-frameworks and nginx

`$ docker build -t favorite-frameworks . 
 $ docker run -d -p 8080:80 favorite-frameworks
`
