// Make a GET request to the Rest Countries API
fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(data => {
    // Iterate through the response data and print country information
    data.forEach(country => {
      const name = country.name.common;
      const region = country.region;
      const subregion = country.subregion;
      const population = country.population;
      
      console.log(`Country: ${name}`);
      console.log(`Region: ${region}`);
      console.log(`Subregion: ${subregion}`);
      console.log(`Population: ${population}`);
      console.log("--------------"); // Separator between countries
    });
  })
  .catch(error => {
    console.error("Error fetching data from the API:", error);
  });
