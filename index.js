// imports the inquirer module from the 'inquirer' package. Allows user command prompts.
import inquirer from 'inquirer';

// imports the fs module from the 'fs' package
import fs from 'fs';

// imports a default export named generateMarkdown from the './utils/generateMarkdown.js' file.
import generateMarkdown from "./utils/generateMarkdown.js";


// Declaration of badgesArray for license details - this will be used for look up of url
const badgesArray = {
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'GPLv3': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'BSD 3-Clause': '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    'ISC': '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    'Mozilla Public License 2.0': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
};


// Extracting keys from badgesArray
const licenseChoices = Object.keys(badgesArray);



// Declare array of questions for user
const questions = () => {

    return inquirer.prompt([
        {
            // Prompt Title for input
            name: 'title',
            type: 'input',
            message: 'What is your Title of your Project?',
            validate: inputTitle => { return validateMandatoryDataInput(inputTitle, "Title") }
        },

        // Prompt Description for input
        {
            name: 'description',
            type: 'input',
            message: 'Provide a Description of your Project?',
            validate: inputDescription => { return validateMandatoryDataInput(inputDescription, "Description") }
        },

        // Prompt Installation for input
        {
            name: 'installation',
            type: 'input',
            message: 'Provide Installation Instructions?',
            validate: inputInstallation => { return validateMandatoryDataInput(inputInstallation, "Installation Instructions") }
        },

        // Prompt Usage for input
        {
            name: 'usage',
            type: 'input',
            message: 'Could you describe the Usefulness of the Application?',
            validate: inputUsage => { return validateMandatoryDataInput(inputUsage, "Usefulness of the application") }
        },

        // Prompt License for input       
        {
            name: 'license',
            type: 'list',
            message: 'Select the License the Application is covered under?',
            choices: licenseChoices,
            default: 'MIT',
            validate: inputLicense => { return validateMandatoryDataInput(inputLicense, "License Type") }
        },

        // Prompt Contributing for input       
        {
            name: 'contributing',
            type: 'input',
            message: 'Provide a list of Contributors for their input in the project?'
        },

        // Prompt Dependencies for input       
        {
            name: 'dependencies',
            type: 'input',
            message: 'What command should be run to install Dependencies?',
            default: 'npm i'
        },

        // Prompt Tests for input       
        {
            name: 'tests',
            type: 'input',
            message: 'What command should be run to run Tests?',
            default: 'npm test'
        },

        // Prompt Username for input       
        {
            name: 'github_username',
            type: 'input',
            message: 'What is your GitHub Username?',
            validate: inputGitHubUserName => { return validateMandatoryDataInput(inputGitHubUserName, "GitHub Username") }
        },

        // Prompt Email Address for input       
        {
            name: 'email_address',
            type: 'input',
            message: 'What is your Email Address?',
            validate: inputEmailAddress => { return validateMandatoryDataInput(inputEmailAddress, "Email Address") }
        },
    ]);
};


function validateMandatoryDataInput(inputData, fieldName) {
    if (inputData) {
        return true;
    } else {
        console.log(`FAILED VALIDATION! - ${fieldName} is a mandatory field.`);
        return false;
    }
}



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



// Lookup license in array, if found then return url otherwise return empty string
function badgeForLicense(license) {
    return badgesArray[license] || ''; 
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
