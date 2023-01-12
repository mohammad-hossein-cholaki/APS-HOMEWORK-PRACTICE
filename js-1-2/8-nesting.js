//? password checker

// Password must be 6+ characters
// Password can not include space

let password = "1234567";

if(password.length > 6){
    if(password.indexOf("!") !== -1){
        console.log("eshtebah mizani");
    }else{
        if(password.indexOf(" ") !== -1){
            console.log("eshtebah mizani");
        }else{
            console.log("welcome");
        }
    }
}else{
    console.log("your pass in not 6 characters");
}

