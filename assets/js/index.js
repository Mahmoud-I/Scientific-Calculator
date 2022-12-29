// Initial Values
let buttons = document.querySelectorAll(".bt");
let currentDisplay = document.querySelector(".current");
let previousDisplay = document.querySelector(".previous");
let clearAllButton = document.querySelector(".clearAll")
let deleteButton = document.querySelector(".delete")
let scientificButtons = document.querySelectorAll(".sci");
let equalsButton = document.querySelector(".ans");
let previousDisplayText = previousDisplay.textContent;
let alertContainer = document.querySelector(".alert-container")
let calcContainer = document.querySelector(".container")
let startButton = document.querySelector(".start")

//alert-container-popUp
setTimeout(function(){
    alertContainer.classList.add("alert-container-display")
    calcContainer.classList.add("blur-container")
   
},1000)

startButton.addEventListener("click", function(){
    alertContainer.classList.remove("alert-container-display")
    calcContainer.classList.remove("blur-container")
})
// All calc functions 
// Clear All 
let clearAll = () => {
    currentDisplay.innerHTML = 0
    previousDisplay.innerHTML = " "
}
// Delete 
let deleteCharacter = () => {
    previousDisplay.innerHTML = previousDisplay.innerHTML.toString().slice(0, -1) 
}


//equalKey
let equalsKey = () => {
    if(previousDisplayText !== " "){
   
    //Scientific-Functions
    if(previousDisplay.innerHTML.includes("√")){
        let squaredRootDisplay = previousDisplay.innerHTML.split("√")
        let squaredRoot = Math.sqrt(Number(squaredRootDisplay[1]))
        previousDisplay.innerHTML = squaredRoot;
        currentDisplay.innerHTML = previousDisplay.innerHTML;

    } 
    
    else if (previousDisplayText.includes("%")){
        if(previousDisplay.innerHTML.charAt[0] === "%"){
            previousDisplay.innerHTML = "Error"
        } else {
        let modolorDisplay = previousDisplayText.split("%") 
        let modulo = eval(modolorDisplay[0] % modolorDisplay[1])
        previousDisplayText = modulo.innerHTML;
        }
    } 
 
     else if (previousDisplayText.includes("E")){
        let exponentiatDisplay = previousDisplayText.split("%")
        let exponentiat = eval(exponentiatDisplay[0] ** exponentiatDisplay[1])
        previousDisplayText = exponentiat.innerHTML;

    } else if (previousDisplay.innerHTML.includes("Sin")){
        let sinDisplay = previousDisplay.innerHTML.split("Sin")
        let sin = eval(Math.sin(Number(sinDisplay[1])))
        previousDisplay.innerHTML = sin;
        currentDisplay.innerHTML = sin;
    } 
    
    else if (previousDisplay.innerHTML.includes("Tan")){
        let tanDisplay = previousDisplay.innerHTML.split("Tan")
        let tan = eval(Math.tan(Number(tanDisplay[1])))
        previousDisplay.innerHTML = tan;
        currentDisplay.innerHTML = tan;

    }
    
    else if (previousDisplay.innerHTML.includes("Cos")){
        let cosDisplay = previousDisplay.innerHTML.split("Cos")
        let cos = eval(Math.cos(Number(cosDisplay[1])))
        previousDisplay.innerHTML = cos;
        currentDisplay.innerHTML = cos;

    }
    
    else if (previousDisplay.innerHTML.includes("X²")){
        let squaredDisplay = previousDisplay.innerHTML.split("X²")
        let squared = eval(Number(squaredDisplay[0] ** 2))
        previousDisplay.innerHTML = squared
        currentDisplay.innerHTML = squared

    }
    
    else if (previousDisplay.innerHTML.includes("Log")){
        let logDisplay = previousDisplay.innerHTML.split("Log")
        let log = eval(Math.log(Number(logDisplay[1])))
        previousDisplay.innerHTML = log;
        currentDisplay.innerHTML = log;

    }
    
    else if (previousDisplay.innerHTML.includes("x!")){
        let factorialDisplay = previousDisplay.innerHTML.split("x!")
        let factorials = factorial(Number(factorialDisplay[1]))
        previousDisplay.innerHTML = factorials
        currentDisplay.innerHTML = factorials

    }
    
    else if(previousDisplay.innerHTML.includes("^")){
        let powerDisplay = previousDisplay.innerHTML.split("^")
        let power = eval(Number(powerDisplay[0] ** powerDisplay[1]))
        previousDisplay.innerHTML = power;
        currentDisplay.innerHTML = previousDisplay.innerHTML;
    } 

    else if (previousDisplay.innerHTML.includes("CM")){
        let combinationDisplay = previousDisplay.innerHTML.split("CM")
        let combinationValue = combination(combinationDisplay[0], combinationDisplay[1]) 
        previousDisplay.innerHTML = combinationValue;
        currentDisplay.innerHTML = combinationValue;
    } 
    
    else if (previousDisplay.innerHTML.includes("P")){
        let permutationDisplay = previousDisplay.innerHTML.split("P")
        let permutationValue = permutation(permutationDisplay[0], permutationDisplay[1]) 
        previousDisplay.innerHTML = permutationValue;
        currentDisplay.innerHTML = permutationValue;
    } 
    
    else if (previousDisplay.innerHTML.includes("Inv")){
        let inverseDisplay = previousDisplay.innerHTML.split("Inv")
        let inverse = eval(1/inverseDisplay[1])
        previousDisplay.innerHTML = inverse
        currentDisplay.innerHTML = inverse
    }
    //Normal Arithmetic
    else {
        
        currentDisplay.innerHTML = eval(previousDisplay.innerHTML)
        previousDisplay.innerHTML = currentDisplay.innerHTML;
}}
else {
    currentDisplay.innerHTML = 0;
    previousDisplay.innerHTML = " "
}
}

//Factorial, Combination and Permutation functions

let factorial = (n) => {
    let result = 1;
    for(let i = 2; i <= n; i++){
        result *= i;
    }
    return result
}

let combination = (n,r) => {
    return (factorial(n)/(factorial(n-r)*factorial(r))) 
}

let permutation = (n,r) => {
    return factorial(n)/factorial(n-r)   
}

//All CalcEventListeners
//Equal Event Listener
equalsButton.addEventListener("click", function(){
    equalsKey()
})


// Looping All Buttons and Added Event Listener
for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        if(previousDisplay.textContent.includes("X²")){
            previousDisplay.innerHTML.split("X")
            previousDisplay.innerHTML += "²"
        } else {
        previousDisplay.textContent += this.textContent;
        }
    })
}

//Clear All Event Listener
clearAllButton.addEventListener("click", function(){
    clearAll()
})


// Delete Event Listener
deleteButton.addEventListener("click", function(){
    deleteCharacter()
    console.log(deleteCharacter())
})












