const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");
const datahide = document.querySelector('.middle_layer');

const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;

  if (cityVal === "") {
    city_name.innerHTML = " Please Write City's name before search!";
    datahide.classList.add('data_hide')

  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=f0f9c42986b2982069fbd38f9648e82b`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];

      city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
      temp.innerText = (`${arrData[0].main.temp} °C`);

      const tempMoad = arrData[0].weather[0].main;

      if (tempMoad == "Clear") {
        temp_status.innerHTML =
          "<i class='fas fa-sun' style='color : #eccc68'></>";
      } else if (tempMoad == "Clouds") {
        temp_status.innerHTML =
          "<i class='fas fa-cloud' style='color : #f1f2f6'></>";
      } else if (tempMoad == "Rain") {
        temp_status.innerHTML =
          "<i class='fas fa-cloud-rain' style='color : #a4b0be'></>";
      } else {
        temp_status.innerHTML =
          "<i class='fas fa-cloud' style='color : #f1f2f6'></>";
          
      }

      datahide.classList.remove('data_hide')
    } catch (error) {
      city_name.innerHTML = " Please Write correct City's name!";
      datahide.classList.add('data_hide')
    }
  }
};
submitBtn.addEventListener("click", getInfo);
