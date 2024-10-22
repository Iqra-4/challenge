let city = "Sydney";
let apiKey = "25003fb5bf42fe9747o6t953e32a77ae";

let apiUrl =
  `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;

function displayTemperature (response) {
  console.log(response.data.temperature.current);
  let temperatureElement = document.querySelector('#temperature');
  temperatureElement.innerHTML = response.data.temperature.current;
}

axios.get(apiUrl).then(displayTemperature);