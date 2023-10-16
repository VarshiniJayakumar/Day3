// Make a GET request to the Rest Countries API
fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(data => {
    // Iterate through the response data and display flags
    data.forEach(country => {
      const flag = country.flags[0]; // Get the first flag URL
      console.log(`Country: ${country.name.common}, Flag: ${flag}`);
    });
  })
  .catch(error => {
    console.error("Error fetching data from the API:", error);
  });
