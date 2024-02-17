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



export default generateMarkdown;

