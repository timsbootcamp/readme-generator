// imports the inquirer module from the 'inquirer' package. Allows user command prompts.
import inquirer from 'inquirer';

// imports the fs module from the 'fs' package
import fs from 'fs';

// imports a default export named generateMarkdown from the './utils/generateMarkdown.js' file.
import generateMarkdown from "./utils/generateMarkdown.js";


function badgeForLicense(license) {

    const badgesArray = {
        'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
        'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
        'GPLv3': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
        'BSD 3-Clause': '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
        'ISC': '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
        'Mozilla Public License 2.0': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    };
    
    // Lookup license in array, if found then return url otherwise return empty string
    return badgesArray[license] || ''; 
}


// Declare array of questions for user
const questions = () => {

    return inquirer.prompt([
        {
            // Prompt Title for input
            name: 'title',
            type: 'input',
            message: 'What is your title of your project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('FAILED VALIDATION!: title of your project is a mandatory field.');
                    return false;
                }
            }
        },

        // Prompt Description for input
        {
            name: 'description',
            type: 'input',
            message: 'Provide a description of your project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('FAILED VALIDATION!: description of your project is a mandatory field.');
                    return false;
                }
            }
        },

        // Prompt Installation for input
        {
            name: 'installation',
            type: 'input',
            message: 'Provide Installation Installations?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log('FAILED VALIDATION!: Installation Instructions is a mandatory field.');
                    return false;
                }
            }
        },

        // Prompt Usage for input
        {
            name: 'usage',
            type: 'input',
            message: 'Could you describe the usefulness of the application?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('FAILED VALIDATION!: Usefulness of the application is a mandatory field.');
                    return false;
                }
            }
        },

        // Prompt License for input       
        {
            name: 'license',
            type: 'list',
            message: 'Select the License the application is covered under?',
            choices: [
                "MIT",
                "Apache 2.0",
                "GPLv3",
                "BSD 3-Clause",
                "ISC",
                "Mozilla Public License 2.0",
            ],
            default: 'MIT',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('FAILED VALIDATION!: License type is a mandatory field.');
                    return false;
                }
            }
        },

        // Prompt Contributing for input       
        {
            name: 'contributing',
            type: 'input',
            message: 'Provide a list of contributors for their input in the project?'
        },

        // Prompt Dependencies for input       
        {
            name: 'dependencies',
            type: 'input',
            message: 'What command should be run to install dependencies?',
            default: 'npm i'
        },

        // Prompt Tests for input       
        {
            name: 'tests',
            type: 'input',
            message: 'What command should be run to run tests?',
            default: 'npm test'
        },

        // Prompt Username for input       
        {
            name: 'github_username',
            type: 'input',
            message: 'What is your GitHub Username?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('FAILED VALIDATION!: GitHub Username is a mandatory field.');
                    return false;
                }
            }
        },

        // Prompt Email Address for input       
        {
            name: 'email_address',
            type: 'input',
            message: 'What is your email address?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('FAILED VALIDATION!: Email Address is a mandatory field.');
                    return false;
                }
            }

        },
    ]);
};


// function to write README file
function writeToFile(fileName, data) {

    // Output file
    fs.writeFile(fileName, data, err => {

        // log any errors
        if (err) {
            console.error(err);
        } else {
            console.log(`'${fileName}' has been created successfully`)
        }
    });
}


// entry function that will be called first. See below call.
function main() {
    questions()
        .then(answer => {
            let markDownData = generateMarkdown(badgeForLicense, answer);
            console.log("Generating ..");
            writeToFile('test.md', markDownData);
        })
}




// entry function call.
main();
