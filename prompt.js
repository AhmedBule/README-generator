const prompt = 
[
    {
        type: "input",
        message: "Enter your project title:",
        name: "title",
      },
      {
        type: "input",
        message: "Enter the project description:",
        name: "description",
      },
      {
        type: "input",
        message: "Enter installation notes:",
        name: "installation",
      },
      {
        type: "input",
        message: "Enter usage notes:",
        name: "usage",
      },
      {
        type: "list",
        choices:["MIT","ISC","APACHE 2.0"],
        message: "Enter the License info:",
        name: "license",
      },
      {
        type: "input",
        message: "Enter the names or number of contributers:",
        name: "contributing",
      },
      {
        type: "input",
        message: "Enter the testing info:",
        name: "testing",
        default:"npm run test"
      },
      {
        type: "input",
        message: "Enter the  questions:",
        name: "questions",
      },

  ];
  
module.exports = prompt;
  