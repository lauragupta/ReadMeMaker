const fs = require("fs");
const inquirer = require("inquirer");

inquirer.prompt([
    {
      name: 'projectTitle',
      message: 'What is the Title of your Project?',
      type: 'input'
    },
    {
        name: 'description',
        message: 'How would you describe what your project does?',
        type: 'input'
    },
    {
        name: 'installation',
        message: 'Step by step, what is needed to install your project?',
        type: 'input'
    },
    {
        name: 'usage',
        message: 'Would you like to add images/screenshots of your program?',
        type: 'input'
    },
    {
        name: 'creditPeople',
        message: 'Did you have any collaborators on this project?',
        type: 'confirm',
        default: false
    },
    {
        name: 'collaboratorName',
        message: 'Who helped you with this project (collaborator)?',
        type: 'input',
        when(response) {
            return response.creditPeople === true;
        }
    },
    {
        name: 'collaboratorGitHub',
        message: 'What is the collaborators GitHub account link?',
        type: 'input',
        when(response) {
            return response.creditPeople === true;
        }
    },
    {
        name: 'creditSites',
        message: 'Did you use any websites you need to credit?',
        type: 'confirm',
        default: false
    },
    {
        name: 'creditWebsiteName',
        message: 'What is the full website address?',
        type: 'input',
        when(response) {
            return response.creditSites === true;
        }
    },
    {
        name: 'license',
        message: 'Choose a license for your project.',
        type: 'input'
    },
    {
        name: 'contributng',
        message: 'What directions do you have for others to contribute to your project?',
        type: 'input'
    },
    {
        name: 'tests',
        message: 'What tests do you run on your project?',
        type: 'input'
    },
    {
        name: 'username',
        message: 'What is your GitHub profile username?',
        type: 'input'
    },
    {
        name: 'email',
        message: 'What email would you like to use to answer questions from others?',
        type: 'input'
    },
])
.then((response) => {
    console.log(response);

    let projectTitle = response.projectTitle;
    let description = response.description;
    let installation = response.installation;
    let usage = response.usage;
    let creditPeople = response.creditPeople;
    let collaboratorName = response.collaboratorName;
    let collaboratorGitHub = response.collaboratorGitHub;
    let license = response.license;
    let contributing = response.contributng;
    let tests = response.tests;
    let username = response.username;
    let email = response.email;
    
    if(creditPeople === true) {
        creditPeople =`    ## Credits
        [${collaboratorName}](${collaboratorGitHub})`
    }else {
        creditPeople = ``
    }

    let body = 
`# ${projectTitle}  

## Description  

${description}  

## Table of Contents   

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation

${installation}

## Usage 

![alt text](assets/images/${usage}.png)

${creditPeople}

## License
${license}
[https://choosealicense.com/](https://choosealicense.com/)
https://img.shields.io/github/license/lauragupta/ReadMeMaker

## Contributing
${contributing}

[Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own.

## Tests

${tests}

## Questions 
For questions, contact me at [GitHub](https://github.com/${username} or email me at ${email}
Thanks for reading!`


    fs.writeFile("README.md", body, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
});