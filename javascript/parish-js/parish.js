const WEEK = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const data_types = ["Mass", "Confession", "Adoration", "Rosary", "Office Hours"]

highlight_current_elements()

function highlight_current_elements(inputed_date = "") {
  const DAY = get_day_value(inputed_date);
  let current_element;
  for (const DATA of data_types) {
    try {
      current_element = `${DATA.toLowerCase().substring(0,4)}-${DAY.toLowerCase().substring(0,3)}`
      let class_list = document.getElementsByClassName(current_element)
      class_list[0].classList.add("highlight")
    } catch (error) {
      try {
        current_element = `${DATA.toLowerCase().substring(0,4)}-per`
        let class_list = document.getElementsByClassName(current_element)
        class_list[0].classList.add("highlight")
      } catch (error) {
        console.log(`There is no ${DATA} on ${DAY}.`)
      }
    }  
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
}