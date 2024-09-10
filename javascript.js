let timer;

function turnRedLightOn() {
  turnOffTrafficlight();
  document.getElementById("redLight").style.backgroundColor = "red";
  timer = setTimeout(turnYellowLightOn, 2000);
}

function turnYellowLightOn() {
  turnOffTrafficlight();
  document.getElementById("yellowLight").style.backgroundColor = "yellow";
  timer = setTimeout(turnGreenLightOn, 2000);
}

function turnGreenLightOn() {
  turnOffTrafficlight();
  document.getElementById("greenLight").style.backgroundColor = "green";
  timer = setTimeout(turnYellowLightOn, 2000);
}

function turnOnTrafficlight() {
  timer = setTimeout(turnRedLightOn, 2000);
}

function turnOffTrafficlight() {
  document.getElementById("redLight").style.backgroundColor = "";
  document.getElementById("yellowLight").style.backgroundColor = "";
  document.getElementById("greenLight").style.backgroundColor = "";
}

function turnOffTrafficlightParty() {
  location.reload();
}
