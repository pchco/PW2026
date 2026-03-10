var allCountries = [];

async function searchCountry(param) {
  let url = "https://restcountries.com/v3.1/" + param;
  // let url = "https://restcountries.com/v3.1/all?fields=name,flags,translations"
  // let url = "https://restcountries.com/v3.1/region/oceania"

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

//Buscando o país digitado pelo usuário
function searchCountryByUser(input){
  let countrySearched = input.value.toLowerCase()
  let countriesFound = []

  console.log(countrySearched)

  //Procurando o país de acordo com as letras digitadas
  for(let pais of allCountries){
    let name = pais.translations.por.common.toLowerCase()
    if(name.startsWith(countrySearched)){
      countriesFound.push(pais)
    }
  }
  document.querySelector(".allCountries").innerHTML = ""

  // Criando card do País
  for (let country of countriesFound) {
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

searchCountry("all?fields=name,flags,translations");
