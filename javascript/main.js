/**
 * This is the JavaScript file for the main index page for the localchurches website.
 * The primary focus of this file is to pull in the data for the current day.
 */

const days_of_the_week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const data_types = ["mass", "confession", "adoration", "rosary"]

function get_day_value(inputed_date = "") {
  let current_date;
  if (inputed_date == "") {
    current_date = new Date();
  } else {
    current_date = new Date(inputed_date);
  }
  const current_day_value = current_date.getDay();
  return days_of_the_week[current_day_value];
};

let div = document.getElementById("contentDiv");
div.addEventListener('click', (event) => {clicked(event);})

function clicked(event) {
  console.log(event)
  const url_id = button_type + "-url"
  let new_url = document.getElementById(url_id).getAttribute("href")
  window.location.href = new_url
};