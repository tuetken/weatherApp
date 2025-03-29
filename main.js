function getWeather() {
  const apiKey = "9239eb24e55b1799337022483ed0efcc";
  const city = document.getElementById("city").value;

  if (!city) {
    alert("Please Enter a City");
    return;
  }

  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
}
