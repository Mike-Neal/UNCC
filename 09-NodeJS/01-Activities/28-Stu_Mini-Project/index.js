
const inquirer = require('inquirer');
const fs = require('fs')

inquirer
    .createPromptModule([
        {
            type: 'input',
            message: 'what is your name?',
        }
    ])



const person = {
    firstName: "Arya",
    lastName: "Stark",
    location: "Winterfell",
    bio: "House Stark",
    LinkedIn: "arya@linkedin.com",
    gitHub: "arya@github.com",
  };
  
  const portfolio = 
  `My name is ${person.firstName, person.lastName}!
  I am from ${person.location}.
  I am a descendent of ${person.bio}`;
  
  console.log(portfolio);

  