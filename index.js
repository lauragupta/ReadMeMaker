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
        name: 'questions1',
        message: 'What is your GitHub profile username?',
        type: 'input'
    },
    {
        name: 'questions2',
        message: 'What email would you like to use to answer questions from others?',
        type: 'input'
    },
])
.then((response) => {
    console.log(response);
}
);