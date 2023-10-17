const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?q=Dhaka&appid=a511af78f57a3b67a7818208ba4fa7d6&units=metric";

const fetchdata = async () => {
  const response = await fetch(apiurl);
  const data = await response.json();
  console.log(data);
  return fetchdata();
};
