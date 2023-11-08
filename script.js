//Scroll top button functionality for mobile
let mybutton = document.getElementById("myBtn");

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Add shadow to card associated with nav button
function monthglowNov() {
    var November = document.getElementById("Nov");
    var December = document.getElementById("Dec");
    var January = document.getElementById("Jan");
    var February = document.getElementById("Feb");
    var March = document.getElementById("Mar");
    var April = document.getElementById("Apr");
    var May = document.getElementById("May");
    var June = document.getElementById("Jun");

    November.style.boxShadow = "2px 2px 2px 2px black";
    December.style.boxShadow = "none";
    January.style.boxShadow = "none";
    February.style.boxShadow = "none";
    March.style.boxShadow = "none";
    April.style.boxShadow = "none";
    May.style.boxShadow = "none";
    June.style.boxShadow = "none";
}

function monthglowDec() {
    var November = document.getElementById("Nov");
    var December = document.getElementById("Dec");
    var January = document.getElementById("Jan");
    var February = document.getElementById("Feb");
    var March = document.getElementById("Mar");
    var April = document.getElementById("Apr");
    var May = document.getElementById("May");
    var June = document.getElementById("Jun");

    November.style.boxShadow = "none";
    December.style.boxShadow = "2px 2px 2px 2px black";
    January.style.boxShadow = "none";
    February.style.boxShadow = "none";
    March.style.boxShadow = "none";
    April.style.boxShadow = "none";
    May.style.boxShadow = "none";
    June.style.boxShadow = "none";
}

function monthglowJan() {
    var November = document.getElementById("Nov");
    var December = document.getElementById("Dec");
    var January = document.getElementById("Jan");
    var February = document.getElementById("Feb");
    var March = document.getElementById("Mar");
    var April = document.getElementById("Apr");
    var May = document.getElementById("May");
    var June = document.getElementById("Jun");

    November.style.boxShadow = "none";
    December.style.boxShadow = "none";
    January.style.boxShadow = "2px 2px 2px 2px black";
    February.style.boxShadow = "none";
    March.style.boxShadow = "none";
    April.style.boxShadow = "none";
    May.style.boxShadow = "none";
    June.style.boxShadow = "none";
}

function monthglowFeb() {
    var November = document.getElementById("Nov");
    var December = document.getElementById("Dec");
    var January = document.getElementById("Jan");
    var February = document.getElementById("Feb");
    var March = document.getElementById("Mar");
    var April = document.getElementById("Apr");
    var May = document.getElementById("May");
    var June = document.getElementById("Jun");

    November.style.boxShadow = "none";
    December.style.boxShadow = "none";
    January.style.boxShadow = "none";
    February.style.boxShadow = "2px 2px 2px 2px black";
    March.style.boxShadow = "none";
    April.style.boxShadow = "none";
    May.style.boxShadow = "none";
    June.style.boxShadow = "none";
}

function monthglowMar() {
    var November = document.getElementById("Nov");
    var December = document.getElementById("Dec");
    var January = document.getElementById("Jan");
    var February = document.getElementById("Feb");
    var March = document.getElementById("Mar");
    var April = document.getElementById("Apr");
    var May = document.getElementById("May");
    var June = document.getElementById("Jun");

    November.style.boxShadow = "none";
    December.style.boxShadow = "none";
    January.style.boxShadow = "none";
    February.style.boxShadow = "none";
    March.style.boxShadow = "2px 2px 2px 2px black";
    April.style.boxShadow = "none";
    May.style.boxShadow = "none";
    June.style.boxShadow = "none";
}

function monthglowApr() {
    var November = document.getElementById("Nov");
    var December = document.getElementById("Dec");
    var January = document.getElementById("Jan");
    var February = document.getElementById("Feb");
    var March = document.getElementById("Mar");
    var April = document.getElementById("Apr");
    var May = document.getElementById("May");
    var June = document.getElementById("Jun");

    November.style.boxShadow = "none";
    December.style.boxShadow = "none";
    January.style.boxShadow = "none";
    February.style.boxShadow = "none";
    March.style.boxShadow = "none";
    April.style.boxShadow = "2px 2px 2px 2px black";
    May.style.boxShadow = "none";
    June.style.boxShadow = "none";
}

function monthglowMay() {
    var November = document.getElementById("Nov");
    var December = document.getElementById("Dec");
    var January = document.getElementById("Jan");
    var February = document.getElementById("Feb");
    var March = document.getElementById("Mar");
    var April = document.getElementById("Apr");
    var May = document.getElementById("May");
    var June = document.getElementById("Jun");

    November.style.boxShadow = "none";
    December.style.boxShadow = "none";
    January.style.boxShadow = "none";
    February.style.boxShadow = "none";
    March.style.boxShadow = "none";
    April.style.boxShadow = "none";
    May.style.boxShadow = "2px 2px 2px 2px black";
    June.style.boxShadow = "none";
}

function monthglowJun() {
    var November = document.getElementById("Nov");
    var December = document.getElementById("Dec");
    var January = document.getElementById("Jan");
    var February = document.getElementById("Feb");
    var March = document.getElementById("Mar");
    var April = document.getElementById("Apr");
    var May = document.getElementById("May");
    var June = document.getElementById("Jun");

    November.style.boxShadow = "none";
    December.style.boxShadow = "none";
    January.style.boxShadow = "none";
    February.style.boxShadow = "none";
    March.style.boxShadow = "none";
    April.style.boxShadow = "none";
    May.style.boxShadow = "none";
    June.style.boxShadow = "2px 2px 2px 2px black";
}