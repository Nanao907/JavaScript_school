if (confirm("Do you wanna know your future?")) {
  qustions = prompt("Here you can ask your question");
  let random = Math.floor(Math.random() * 8);

  if (random === 1) {
    alert("Yes");
  } else if (random === 2) {
    alert("No");
  } else if (random === 3) {
    alert("Maybe");
  } else if (random === 4) {
    alert("I'm not sure");
  } else if (random === 5) {
    alert("Certanly");
  } else if (random === 6) {
    alert("Try again");
  } else if (random === 7) {
    alert("Outlook not so good");
  } else if (random === 8) {
    alert("My sorces say no");
  }
}
