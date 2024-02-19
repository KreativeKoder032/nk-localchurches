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
}

function find_relative_data (church, date, data_type) {
  let data = "";
  const webpage = fetch(church).
  data += data_type.substring(0, 4).toLowerCase();
  data += `-${date.substring(0,3).toLowerCase()}`;
  const elements = webpage.getElementsByID(data);
  return elements.text;
}

