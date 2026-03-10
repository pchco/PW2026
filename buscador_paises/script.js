async function searchCountry(param) {
  let url = "https://restcountries.com/v3.1/" + param;
  // let url = "https://restcountries.com/v3.1/all?fields=name,flags,translations"
  // let url = "https://restcountries.com/v3.1/region/oceania"
  let allCountries = [];

  // Comunicação com API
  let response = await fetch(url);
  let data = await response.json();

  console.log(data);
  allCountries = data;

  document.querySelector(".allCountries").innerHTML = ""

  // Criando card do País
  for (let country of allCountries) {
    let cardCountry = document.createElement("div");
    cardCountry.classList.add("country");
    cardCountry.innerHTML = `
        <img
          width="200px"
          src="${country.flags.png}"
        />
        <p>${country.name.common}</p>`;
    document.querySelector(".allCountries").append(cardCountry);
  }
}

function searchCountryByRegion(input){
  console.log(input.value)
  url = "all?fields=name,flags,translations"

  if(input.value != "")
    url = "region/" + input.value

  searchCountry(url)
}

searchCountry("all?fields=name,flags,translations");
