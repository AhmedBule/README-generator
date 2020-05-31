function generateAnswers (userInput){
    return (`
# ${userInput.title}

### Description: 
${userInput.description}

## Installation: 
${userInput.installation}

## Usage: 
${userInput.usage}

## License: 
(https://img.shields.io/badge/license-${userInput.license}-blue.svg)

## Contributing 
${userInput.contributing}

## Questions: 
${userInput.questions}


`);
};
module.exports = (generateAnswers)