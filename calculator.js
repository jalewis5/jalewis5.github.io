var max = Number.MIN_SAFE_INTEGER;
var min = Number.MAX_SAFE_INTEGER;
var average = 0.0;
var numOperands = 0;
var total = 0.0;
var result = "";
var validOperator = false;

var leftOperand;
var operator;
var rightOperand;
var validOperands;

function Calculator(){
    document.write("<div style='background-color:grey; width: 250px'>");
    document.write("<table border='2px solid black'>");
    document.write("<tr><th>X-value</th><th>Operator</th><th>Y-Value</th><th>Result</th></tr>");
//Adjust spacing for table, add column and row lines
    var confirmLoop = confirm("Begin?");

//Data for second table, data is only contributed if all inputs work


    while (confirmLoop === true){
        leftOperand = prompt("Value of x (Integers and Decimals only, no fractions):");

        operator = prompt("Enter your operator ( +, -, /, *, % only):");
        validOperator = ValidOperator(operator);

        rightOperand = prompt("Value for y (Integers and Decimals only, no fractions):");


        if(validOperator){
            validOperands = ValidOperand(leftOperand,rightOperand);
            if (validOperands){
                result = eval(leftOperand + operator + rightOperand);
            }
        }

        document.write("<tr><td>" + leftOperand + "</td><td>" + operator + "</td><td>" + rightOperand + "</td><td>" + result + "</td></tr>");
        confirmLoop = confirm("Shall we continue?");
    }
//while popup answer is OK, not cancel
    document.write("</table>");

    //Table made from data (max, min, total, average
    document.write("<table border='2px solid black'>");
    document.write("<tr><th>Max</th><th>Min</th><th>Total</th><th>Average</th></tr>");
    average = total / numOperands;
    document.write("<tr><td>" + max + "</td><td>" + min + "</td><td>" + total + "</td><td>" + average + "</td></tr>");
    document.write("</table>")
    document.write("</div>");
    
}


function ValidOperand(left, right){
    if(isNaN(left)|| isNaN(right)){
        result = "Wrong Input Number";
        return false;
    }
    else{
        UpdateDataTableInfo(left);
        UpdateDataTableInfo(right);
        return true;
    }
}


function ValidOperator(operator){
    if ((operator !== "+")&&(operator !== "-")&&(operator !== "*")&&(operator !== "/")&&(operator !== "%")){
        result = "Computation Error";
        return false;
    }
    return true;
}

function UpdateDataTableInfo(operand){
    max = (Number(operand) > max) ? Number(operand) : max;
    min = (Number(operand) < min) ? Number(operand) : min;
    numOperands += 1;
    total += Number(operand);
}

Calculator();