function generateAnswers (userInput){
    return (`
# ${userInput.title}

## Contributing ${userInput.contributing}

### Description: ${userInput.description}

1. Installation: ${userInput.installation}
1.  Usage: ${userInput.usage}
    1. License: (https://img.shields.io/badge/license-${userInput.license}-blue.svg)
    1. Testing: ${userInput.testing}
    1. Questions: ${userInput.questions}
    

`);
};
module.exports = (generateAnswers)