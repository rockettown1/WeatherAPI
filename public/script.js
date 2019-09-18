const button = document.getElementById("subButton");
const loc = document.getElementById("location");
const temp = document.getElementById("temp");
const summary = document.getElementById("sum");

//event listener fires on click, sets textContent before fetch, then displays data once fetch has completed.
button.addEventListener("click", async () => {
  const input = document.getElementById("place");
  loc.textContent = "Loading...";
  temp.textContent = "";
  summary.textContent = "";

  // the fetch method hits an endpoint and returns a promise. When the promise is resolved if returns json data (a string)
  let response = await fetch(
    `http://localhost:3002/weather?location=${input.value}`
  );

  // use the json() method to take the response stream (string) and parse it into a javascript opject. This also returns a promise which is why we can use await.
  let data = await response.json();

  //set the text for different elements of the html once the data has returned.
  loc.textContent = data.place;
  temp.textContent = `${Math.floor(((data.temp - 32) * 5) / 9)}°C`;
  summary.textContent = data.summary;
});
