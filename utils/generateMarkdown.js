const generateMarkdown = (data) => {
    return `# readme-generator 
${data.title}   

## Description 
${data.description} 

## Table of Contents

* [Installations](#installations)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Dependencies](#dependencies)

* [Tests](#tests)

* [Questions](#questions)

## Installation
${data.installation} 

## Usage
${data.usage} 

## License
${data.license}

## Contributing
${data.contributing}

## Dependencies
${data.dependencies}

## Tests
${data.tests}

## Questions
${data.github_username}
${data.email_address}`;
}

export default generateMarkdown;