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
  let data_name = "";
  let output_data = ``;
  data_name += data_type.substring(0, 4).toLowerCase();
  data_name += `-${date.substring(0,3).toLowerCase()}`;
  fetch(church).then(data => {
    const res_data = data.text();
    console.log(res_data)
    const tmp_res_container = document.createElement("div");
    tmp_res_container.innerHTML = res_data;
    output_data= tmp_res_container.getElementByID("data_name");
  }).catch((err) => console.log("Can’t access " + url + " response. Blocked by browser?" + err));
  return output_data;
}

window.onload = function testing () {
  let webpages_list = [];
  let current_iter = 0;
  const webpages_html = document.getElementsByClassName("church-link");
  for (const webpage_html of webpages_html) {
    const link = webpage_html.getAttribute("href");
    webpages_list.push("./"+link);
  };
  let current_date = get_day_value();
  let churches = []
  let type_iter  = 0;
  for (let webpage of webpages_list) {
    const church = find_relative_data(webpage, current_date, data_types[type_iter])
    churches.push();
  };
  let church_info = document.getElementsByClassName("main-text-container")
  for (let info of church_info) {
        type_iter += 1;
        info.innerHTML = "Happy Birthday!!!";
  };
}

  