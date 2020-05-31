function generateAnswers (userInput){
    return (`
# ${userInput.title}

## Contributing ${userInput.contributing}

### Description: ${userInput.description}

1. Installation: ${userInput.installation}
2.  Usage: ${userInput.usage}
    3. License: (https://img.shields.io/badge/license-${userInput.license}-blue.svg)
    4. Testing: ${userInput.testing}
    5. Questions: ${userInput.questions}
    

`);
};
module.exports = (generateAnswers)