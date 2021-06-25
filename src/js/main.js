import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './../css/styles.css'
import {Galactic} from './galactic.js'

const calculateAge = (date) => {
  const today = new Date();
  let yearDifference = today.getFullYear() - date[0];
  let monthDifference = today.getMonth() + 1 - date[1];
  let dayDifference = today.getDate() - date[2];
  return (yearDifference + monthDifference/12 + dayDifference/365);
}
const nextBirthday = (age, planet) => {

  let days = age * 365; 
  let leftOver = 0;
  let someDate = new Date();
  if(planet === "Mercury") {
    leftOver = parseInt(days)%88;
    someDate.setDate(someDate.getDate() + (88-leftOver));
  }
  else {
    leftOver = parseInt(days)%365;
    someDate.setDate(someDate.getDate() + (365-leftOver));
  }

  
  

  return `${someDate.getMonth() + 1}-${someDate.getDate()}-${someDate.getFullYear()}`;
}

$(document).ready(function () {
  $("form#galactic").submit(function (event) {
    event.preventDefault();

    const dob = $("#born").val();
    let array = dob.split("-");
    for(let i=0; i<array.length; i++) {
      array[i]=parseInt(array[i]);
    }

    let myG = new Galactic(calculateAge(array));

    $("#result").html(`
    you are ${myG.age.toFixed(2)} years old in Earth years.<br>
    ${myG.yearsLeft("Earth")}<br>
    Due to the weird leap year system, your next Earth Birthday is approximately: ${nextBirthday(myG.age, "Earth")}<br>
    <br><br>
    you are ${myG.mercury()} years old in Mercury years.<br>
    ${myG.yearsLeft("Mercury")}<br>
    Your next Mercurian Birthday is: ${nextBirthday(myG.age, "Mercury")}<br>
    <br><br>
    you are ${myG.venus()} years old in Venus years.<br>
    ${myG.yearsLeft("Venus")}<br>
    <br><br>
    you are ${myG.mars()} years old in Mars years.<br>
    ${myG.yearsLeft("Mars")}<br>
    <br><br>
    you are ${myG.jupiter()} years old in Jupiter years.<br>
    ${myG.yearsLeft("Jupiter")}<br>
    `);
    $("#bottom").show();
  });
});
