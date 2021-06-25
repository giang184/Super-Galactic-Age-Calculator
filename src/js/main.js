import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './../css/styles.css'
import {Galatic} from './galatic.js'

// let myG = new Galatic();
$(document).ready(function () {
  $("form#galatic").submit(function (event) {
    event.preventDefault();

    const dob = $("#born").val();
    console.log(typeof(dob));
    $("#result").text(dob);

  });
});