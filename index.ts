import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";


async function show_text() 

    { let rainbow_text=chalkAnimation.rainbow(`Lets start calculation!`)
 
    await new Promise((res)=>{
           setTimeout(res , 5000)
    })
    rainbow_text.stop()
}
  await show_text()


async function user_input() {
    let input= await inquirer.prompt([
    {
        name:"operation",
        type:"list",
        message: "which operation do you want to perform?",
        choices:["Addition","Subtraction","Multiplication","Division" ,"Modulus","Exponent"]
    },
    {
          name:"num1",
          type:"number",
          message:"Enter first number:"
    },
    {
          name:"num2",
          type:"number",
          message:"Enter second number:"
    }

    ])
    if(isNaN(input.num1) || isNaN(input.num2)){
        console.log(`invalid! please type number`)
        let attempts = 3;
        while(attempts >= 1){
            attempts--;
            console.log(` ${attempts} attempts left`) 
            if(attempts === 0 ){
                return attempts;
            }else return user_input();
        }
    }else{
    if(input.operation === "Addition"){
        console.log(`${input.num1} + ${input.num2} = ${input.num1 + input.num2}`)
    }
   else if(input.operation === "Subtraction"){
        console.log(`${input.num1} - ${input.num2} = ${input.num1 - input.num2}`)
    }
     else if(input.operation === "Multiplication"){
        console.log(`${input.num1} * ${input.num2} = ${input.num1 * input.num2}`)
    }
     else if(input.operation === "Division"){
        console.log(`${input.num1} / ${input.num2} = ${input.num1 / input.num2}`)
    }
     else if(input.operation === "Modulus"){
        console.log(`${input.num1} % ${input.num2} = ${input.num1 % input.num2}`)
    }
     else if(input.operation === "Exponent"){
        console.log(`${input.num1} ** ${input.num2} = ${input.num1 ** input.num2}`)
    }

    
}}


async function restart_button() {
    let again;
    do{
       await user_input();
       again= await inquirer.prompt([
        {
           name:"restart" ,
           type:"input",
           message:"Do you want to restart ?(yes/no)"
        }
       ])

    }while(again.restart === "yes" || again.restart ==="Yes" || again.restart === "YES")
}
restart_button();












