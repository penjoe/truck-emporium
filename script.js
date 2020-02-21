//this is my first js component - a prompt. Going to make it a survey button on the home page

function survey() {

    var transmissionType = prompt(" Do you drive an automatic or manual transmission? ");
    var response;

    if (transmissionType === "manual") {
        response = "Welcome truck driver!";
    } else if (transmissionType === "automatic") {
        response = "Your kind ain't welcome here";
    } else {
        response = "Now we'll never know!";
    }
    return response
}


// this is my second js component - an alert

function alerty() {
     alert("This page is brought to you by Code102!") 
}

// this is my third js component - a confirm

function greeting() {
    
    var welcome;
    var r = confirm("Have a wonderful day!");
    if (r == true) {
    welcome = "You pressed OK!";
    } else {
    welcome = "You pressed Cancel!";
    }
    return response
}