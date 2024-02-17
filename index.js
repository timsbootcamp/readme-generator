import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from "./utils/generateMarkdown.js";

console.log("Hello");

// array of questions for user
const questions = () => {

    return inquirer.prompt([
        {
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
    
        {
            name: 'contributing',
            type: 'input',
            message: 'Provide a list of contributors for their input in the project?'
        },

        {
            name: 'dependencies', 
            type: 'input',
            message: 'What command should be run to install dependencies?',
            default: 'npm i'
        },        

        {
            name: 'tests', 
            type: 'input',
            message: 'What command should be run to run tests?',
            default: 'npm test'
        },
 
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

    fs.writeFile(fileName, data, err => {
    
    // log any errors
    if (err) { 
        console.error(err);
    } else {
        console.log(`'${fileName}' has been created successfully`)
    }
    });
}


// function to initialize program
function main() {
    questions()
    .then(answer => {
        let markDownData = generateMarkdown(answer);
        console.log("Generating ..");
        writeToFile('test.md', markDownData);
    })
}




// function call to initialize program
main();
