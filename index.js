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
        message: 'Would you like to add images/screenshots of your program (if so, put the image in your assets folder)?',
        type: 'confirm',
        default: false
    },  
    {
        name: 'usageImg',
        message: 'What is your photo title and type of photo (example - screenshot.png)?',
        type: 'input',
        when(response) {
            return response.usage === true;
        }
    },
    {
        name: 'usageAlt',
        message: 'What is the description of the photo?',
        type: 'input',
        when(response) {
            return response.usage === true;
        }
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
        type: 'list',
        choices: ['MIT', 'ISC', 'unlicense']
    },
    {
        name: 'year',
        message: 'What year is it (in YYYY form, example 2022)?',
        type: 'input',
        default: 2022
    },
    {
        name: 'fullName',
        message: 'What is your full name?',
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
    let usageImg = response.usageImg;
    let usageAlt = response.usageAlt;
    let creditPeople = response.creditPeople;
    let collaboratorName = response.collaboratorName;
    let collaboratorGitHub = response.collaboratorGitHub;
    let license = response.license;
    let year = response.year;
    let fullName = response.fullName;
    let contributing = response.contributng;
    let tests = response.tests;
    let username = response.username;
    let email = response.email;

    
    if(creditPeople === true) {
        creditPeople =`## Credits
[${collaboratorName}](https://github.com/${collaboratorGitHub})`
        credits = `* [Credits](#credits)`
    }else {
        creditPeople = ``
        credits = ``
    }
    if(usage === true) {
        usage =`## Usage 

![${usageAlt}](assets/${usageImg})`
        use = `* [Usage](#usage)`
    }else {
        usage = ``
        use = ``
    }

    if(license === 'MIT') {
        badge = `[![GitHub MIT License](https://img.shields.io/github/license/lauragupta/ReadMeMaker)]`;
        license = 
`MIT License

Copyright (c) ${year} ${fullName}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`
    }else if(license === 'ISC') {
        license = 
`ISC License

Copyright (c) ${year} ${fullName}

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.`
    }else if(license === 'unlicense') {
        license = 
`This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <https://unlicense.org>`
    }

    let body = 
`# ${projectTitle}  

${badge}

## Description  

${description}  

## Table of Contents   

* [Installation](#installation)
${use}
${credits}
* [License](#license)

## Installation

${installation}

${usage}

${creditPeople}

## License
${license}
https://img.shields.io/github/license/lauragupta/ReadMeMaker

## Contributing
${contributing}

[Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own.

## Tests

${tests}

## Questions 
For questions, contact me at [GitHub](https://github.com/${username}) or email me at <${email}>
Thanks for reading!`


    fs.writeFile("README.md", body, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
});