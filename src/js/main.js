import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './../css/styles.css'
import {Galatic} from './galatic.js'

const calculateAge = (date) => {
  const today = new Date();
  let yearDifference = today.getFullYear() - date[0];
  let monthDifference = today.getMonth() + 1 - date[1];
  let dayDifference = today.getDate() - date[2];
  return (yearDifference + monthDifference/12 + dayDifference/365).toFixed(2);
}



$(document).ready(function () {
  $("form#galatic").submit(function (event) {
    event.preventDefault();

    const dob = $("#born").val();
    let array = dob.split("-");
    for(let i=0; i<array.length; i++) {
      array[i]=parseInt(array[i]);
    }

    let myG = new Galatic(calculateAge(array));


    $("#result").html(`
    you are ${myG.age} years old in Earth years.<br>
    ${myG.yearsLeft("Earth")}<br>
    <br>
    you are ${myG.mercury()} years old in Mercury years.<br>
    ${myG.yearsLeft("Mercury")}<br>
    <br>
    you are ${myG.venus()} years old in Venus years.<br>
    ${myG.yearsLeft("Venus")}<br>
    <br>
    you are ${myG.mars()} years old in Mars years.<br>
    ${myG.yearsLeft("Mars")}<br>
    <br>
    you are ${myG.jupiter()} years old in Jupiter years.<br>
    ${myG.yearsLeft("Jupiter")}<br>
    `);
    $("#bottom").show();
  });
});
