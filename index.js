const axios = require('axios')
const inquirer = require('inquirer')
const markdown = require ('markdown')

const questions= [
{
  type: 'input'  
  name: 'title'
  message: 'What is the title of your README?'
},
{
  type: 'input'
  name: 'description'
  message: 'Describe your README file'
},
{
  type: 'input'
  name: 'installation'
  message: 'What programs did you install?'
},
{
  type: 'input'
  name: 'Usage'
  message: 'What programs did you use?'
},
{
  type: 'input'
  name: 'license'
  message: 'What licensing do you have?'
},
{
  type: 'input'
  name: 'contributing'
  message: 'Who contributed to this project?'
},
{
  type: 'input'
  name: 'test'
  message: 'What tests were used for validation?'
},
{
  type: 'input'
  name: 'questions'
  message: 'What questions were answered?'
}
]

function writeToFile(fileName, data){
  fs.writeToFile(fileName, data, (err) =>{
    if (err){
       throw err
    }
    console.log("ReadMe created")
  })
}

function init(){
  inquirer.prompt(questions).then((answers)=>{
    const response=markdown(answers)
    console.log(answers)
    writeFile("README.md", response)
  })
}

init ()