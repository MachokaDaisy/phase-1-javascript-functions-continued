// code your solution here
function saturdayFun(activity = "roller-skate"){
    return "This Saturday, I want to " + activity + "!";
}

const mondayWork = function(item = "go to the office"){
    return "This Monday, I will " + item +".";
}

function wrapAdjective(flair = "*"){
    return function(prompt = "special"){
        return `You are ${flair}${prompt}${flair}!`;
    }
}