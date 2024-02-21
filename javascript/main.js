/**
 * This is the JavaScript file for the main index page for the localchurches website.
 * The primary focus of this file is to pull in the data for the current day.
 */

const WEEK = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let ccc_slides = ["rosary", "mass", "confession", "adoration"]
const CCC_TIME = 10000;
let ccc_current = 0;
let ccc_stopped = false;

window.onload = ccc_quote_slideshow;

function ccc_pause_play() {
  if (document.getElementById("pause-play-button").getAttribute("value") == "Pause Slideshow") {
    ccc_stopped = true;
    document.getElementById("pause-play-button").setAttribute("value", "Play Slideshow");
  }
  else {
    document.getElementById("pause-play-button").setAttribute("value", "Play Slideshow");
    ccc_stopped = false;
    ccc_quote_slideshow();
  }
}

function get_day_value(inputed_date = "") {
  let current_date;
  if (inputed_date == "") {
    current_date = new Date();
  } else {
    current_date = new Date(inputed_date);
  }
  const current_day_value = current_date.getDay();
  return WEEK[current_day_value];
};

function ccc_quote_slideshow() {
  if (ccc_stopped == false) {
    next_ccc_quote()
    window.setTimeout(ccc_quote_slideshow, CCC_TIME);
  }
}

function previous_ccc_quote() {
  const old_quote = "desc-"+ccc_slides[ccc_current];
  if (ccc_current == 0) {
    ccc_current = ccc_slides.length-1;
  }
  else {
    ccc_current -= 1;
  }
  const new_quote = "desc-"+ccc_slides[ccc_current];
  document.getElementById(old_quote).classList.remove("active");
  document.getElementById(old_quote).classList.add("inactive");
  document.getElementById(new_quote).classList.remove("inactive");
  document.getElementById(new_quote).classList.add("active");
  return ccc_current;
}


function next_ccc_quote() {
  try {
    const old_quote = "desc-"+ccc_slides[ccc_current];
    ccc_current += 1;
    const new_quote = "desc-"+ccc_slides[ccc_current];
    document.getElementById(old_quote).classList.remove("active");
    document.getElementById(old_quote).classList.add("inactive");
    document.getElementById(new_quote).classList.remove("inactive");
    document.getElementById(new_quote).classList.add("active");
  } catch (error) {
    ccc_current -= 1;
    const old_quote = "desc-"+ccc_slides[ccc_current];
    ccc_current = 0;
    const new_quote = "desc-"+ccc_slides[ccc_current];
    document.getElementById(old_quote).classList.remove("active");
    document.getElementById(old_quote).classList.add("inactive");
    document.getElementById(new_quote).classList.remove("inactive");
    document.getElementById(new_quote).classList.add("active");
  }
}