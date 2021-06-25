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
// let myG = new Galatic();
$(document).ready(function () {
  $("form#galatic").submit(function (event) {
    event.preventDefault();

    const dob = $("#born").val();
    let array = dob.split("-");
    for(let i=0; i<array.length; i++) {
      array[i]=parseInt(array[i]);
    }

    


    $("#result").text(`you are ${calculateAge(array)} years old in Earth year`);

  });
});