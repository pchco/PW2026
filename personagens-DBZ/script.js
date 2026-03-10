async function buscar() {
  let url = "https://dragonball-api.com/api/characters?limit=58";

  let gender = document.getElementsByTagName("input");
  let genderFilter = "";

  let race = document.querySelector("#race");
  let raceFilter = "";

  if (gender[1].checked) genderFilter = "gender=" + gender[1].value;
  if (gender[2].checked) genderFilter = "gender=" + gender[2].value;

  if (race.value != "") raceFilter = "race=" + race.value;

  console.log(gender[1].value, gender[2].value, raceFilter);

  url += `&${genderFilter}&${raceFilter}`;

  console.log(url);

  let resposta = await fetch(url);
  let dados = await resposta.json();
  let allCharacter = [];

  if (dados.items) allCharacter = dados.items;
  else allCharacter = dados;

  if (allCharacter.length != 0)
    document.querySelector(".allUsers").innerHTML = "";
  else
    document.querySelector(".allUsers").innerHTML =
      "<b> Nenhum resultado encontrado </b>";

  for (let user of allCharacter) {
    console.log(user);
    let divUser = document.createElement("div");
    divUser.classList.add("user");

    divUser.innerHTML = `
        <div class="data">
          <p>
            <span id="name">${user.name}</span> <br />
            <span id="race-gender">${user.race} - ${user.gender}</span>
          </p>
          <p>
            <span class="ki">Base KI:</span> <br />
            <span>${user.ki}</span>
          </p>
          <p>
            <span class="ki">Total KI:</span> <br />
            <span>${user.maxKi}</span>
          </p>
        </div>
        <div class="avatar">
          <img src="${user.image}" />
        </div>
    `;

    document.querySelector(".allUsers").appendChild(divUser);
  }
}
