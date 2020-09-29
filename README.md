# Project Title

This is a project to my undergraduate final project, this project has the objective to simulate a system to call ambulances from individual health plan,
to realize attendance to their costumers.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- You need to have NodeJS, JDK and React Natice CLI installed on your machine

If you don't have any of them run the commands below on Installing step:

### Installing

A step by step series of examples that tell you how to get a development env running

** My OS distro is Ubuntu (deb) based **

Installing cURL

Make sure you have cURL installed by running the following command at the terminal

```
$ sudo apt-get install curl
```

Installing NodeJS

Now with cURL installed, we will install on NodeJS using the following commands:

```
$ curl -sL https://deb.nodesource.com/setup_12.x | sudo bash -
$ sudo apt install nodejs
```

Installing Yarn 1

``` 
$ curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

$ sudo apt update && sudo apt install --no-install-recommends yarn
```

Installing React Native CLI

``` 
$ sudo npm install -g react-native-cli

// or yarn global add react-native-cli
```

Installing JDK (Java Development Kit)

``` 
$ sudo add-apt-repository ppa:openjdk-r/ppa
$ sudo apt-get update
$ sudo apt-get install openjdk-8-jdk
```

* Note: Version 8 of the JDK is mandatory, do not use newer versions.

We can test the JDK installation with the following command:

``` 
$ java -version
```
If you have other versions of java, you can select version 8 as the default using the command:

``` 
$ sudo update-alternatives --config java
```
Installing graphical libs

``` 
$ sudo apt-get install gcc-multilib lib32z1 lib32stdc++6
```

If you are not on Debian / Ubuntu distributions, follow the installation steps for your system:
https://nodejs.org/en/download/package-manager

Emulator and Env Configs

https://reactnative.dev/docs/environment-setup

## Built With

* [React Native](https://reactnative.dev/docs/getting-started) - The web framework used

## Authors

* **Gabriel Lucas** - *Initial work* - [Gabriel-dev2](https://github.com/Gabriel-dev2)

## Acknowledgments

* Inspiration
* My teacher that is my tutor in this university final side project for my course conclusion
