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
        name: 'credits',
        message: 'Who helped you with this project (list any collaborators)?',
        type: 'input'
    },
    {
        name: 'license',
        message: 'Choose a license for your project.',
        type: 'input'
    },

    {
        name: 'contributng',
        message: 'Do you want to add directions for others to contribute to your project too?',
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
}
);

let projectTitle = response.projectTitle;
let description = response.description;
let installation = response.installation;
let usage = response.usage;
let credits = response.credits;
let license = response.license;
let contributng = response.contributng;
let tests = response.tests;
let username = response.username;
let email = response.email;


// fs.writeFile('log.txt', process.argv[2], (err)
//     err ? console.error(err) : console.log('Success!')
// );