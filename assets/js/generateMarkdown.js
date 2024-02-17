// Generates markdown and returns to calling ready for it to be output to file
const generateMarkdown = (badgeForLicense, data) => {

const { 
    title, 
    description, 
    installation, 
    usage, 
    license, 
    contributing, 
    tests, 
    github_username, 
    email_address } = data;

   return `# readme-generator 
${title}   
${badgeForLicense(license)}

## Description 
${description} 

## Table of Contents

* [Installations](#installations)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Dependencies](#dependencies)

* [Tests](#tests)

* [Questions](#questions)

## Installation
${installation} 

## Usage
${usage} 

## License
This repository is distributed under ${license} license.

## Contributing
${contributing}

## Tests
${tests}

## Questions

If you have any questions or feedback, feel free to contact me via email.

- GitHub Username: ${github_username}
- Email Address: ${email_address}`
}



// Exports the generateMarkdown function from the current module as the default export.
export default generateMarkdown;
