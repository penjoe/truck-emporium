// this is my first js component - a prompt. Going to make it a survey button on the home page

function survey() {

    var transmissionType = prompt(" Do you drive an automatic or manual transmission? ");
    var response;

    while ( transmissionType !== "manual" && transmissionType !== "automatic" ) {
        transmissionType = prompt( 'Please indicate a proper transmission type');
    }

    if (transmissionType === "manual") {
        response = "Welcome truck driver!";
    } else if (transmissionType === "automatic") {
        response = "Your kind ain't welcome here";
    }

    return response
}


// this is my second js component - an alert

function alerty() {
     alert("This page is brought to you by Code102!") 
}

// this is my third js component - changed from a confirm to a prompt to use with for loop

function purchase() {

  var truckCount = prompt("How many trucks are you looking to buy today");
  var amount;
  var tinyTruck = '';

  if (truckCount > 10) {
      amount = 'Unfortunately we don\'t have that many trucks in stock!';
  } else if (truckCount >= 5) {
      amount = 'You qualify for a bulk purchase discount!';
  } else if (truckCount < 5) {
      amount = 'Thank for for your business!';
  } else if (isNaN(truckCount)) {
      amount = 'Please enter a valid amount!';
  }

  for (var i = 1; i <= truckCount; i = i + 1) {
      tinyTruck = tinyTruck + '<p>' + 'Item #' + i + ' ' + '&#128666;' + '</p>';
  }

  return tinyTruck
}