const button = document.getElementById("search-button");
const input = document.getElementById("city-input");
const cityName = document.getElementById("city-name");
const cityTime = document.getElementById('city-time');
const cityTemp = document.getElementById('city-temp');
const datetime = document.getElementById('datetime');

async function getData(cityname) {
  const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=d2f34f983bbb4e9d81f130129231308&q=${cityname}&aqi=yes`);
  return await promise.json()
}


button.addEventListener("click", async() =>{
  try{
    const value = input.value;
    const result = await getData(value);
    console.log(result);
    cityName.innerText = `${result.location.name},${result.location.region} - ${result.location.country}`;
    datetime.innerText = "DATE & TIME";
    cityTime.innerText = result.location.localtime ;
    cityTemp.innerText = result.current.temp_c + "°C";
  }catch(error){
    cityName.innerText = "";
    datetime.innerText = "";
    cityTemp.innerText = "";
    cityTime.innerText = "Please Enter Correct Location!!";
  }
});