/** @format */

// if statement
/*
    if Shadan is a mentor print out "Hi Shadan, you are a mentor"
    if Shadan is a student print out "Hi Shadan, you are student"
    if Shadan is a teacher print out "Hi Shadan, you are a teacher"
    if she is none of above, print out "Hi Shadan, you should join IMD"
*/

let yourName = "Shadan";
let yourRole = "mentor";

if (yourRole = "mentor"){
    console.log("Hi Shadan,I'm Shadan, you are a mentor")
}else if (yourRole="student"){
    console.log("Hi Shadan,I'm Shadan, you are student")
}else if (yourRole="teacher"){
    console.log("Hi Shadan,I'm Shadan, you are a teacher")
}else {
    console.log("Hi Shadan, you should join IMD")
}

/* 
EXPECTED RESULT
---------------
Hi, I'm Shadan, you are a mentor.
*/
