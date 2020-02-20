var transmissionType = prompt(" Do you drive an automatic or manual transmission? ");
var response;

if (transmissionType == "manual") {
    response = "Welcome truck driver!";
} else if (transmissionType == "automatic") {
    response = "Your kind ain't welcome here";
} else {
    response = "Now we'll never know!";
}

var caution = alert("This page is brought to you by Code102!")

var welcome;
var r = confirm("Have a wonderful day!");
if (r == true) {
  welcome = "You pressed OK!";
} else {
  welcome = "You pressed Cancel!";
}
