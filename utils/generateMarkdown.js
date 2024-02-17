const generateMarkdown = (data) => {

const { 
    title, 
    description, 
    installation, 
    usage, 
    license, 
    contributing, 
    dependencies, 
    tests, 
    github_username, 
    email_address } = data;

    return `# readme-generator 
${title}   

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
${license}

## Contributing
${contributing}

## Dependencies
${dependencies}

## Tests
${tests}

## Questions
${github_username}
${email_address}`;
}

export default generateMarkdown;

