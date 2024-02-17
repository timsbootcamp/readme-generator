const generateMarkdown = (badgeForLicense, data) => {

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



// Exports the generateMarkdown function from the current module as the default export.
export default generateMarkdown;

