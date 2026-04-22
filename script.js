async function getAlunos() {
  let url = "http://localhost:8080/alunos";

  const response = await fetch(url);
  const data = await response.json();

  console.log(data);

  for (let aluno of data) {
    let cardAluno = document.createElement("div");
    cardAluno.classList.add("aluno");

    cardAluno.innerHTML = `
            <p>Id: ${aluno.id}</p>
            <p>Nome: ${aluno.nome}</p>
        `;
    document.querySelector(".todosAlunos").appendChild(cardAluno);
  }
}

async function cadastrarAluno() {
  let id = document.querySelector("#idAluno").value;
  let nome = document.querySelector("#nomeAluno").value;

  if (!id || !nome) {
    alert("Preencha todos os campos!");
    return;
  }

  let dados = {
    id,
    nome,
  };

  let url = "http://localhost:8080/cadastro";

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(dados),
  });

  const data = await response.json();

  if (!response.ok) {
    alert(data.erro || "Erro ao cadastrar aluno!");
  } else {
    alert(data.mensagem || "Aluno cadastrado com sucesso!");
    window.location.reload();
  }

  console.log(data);
}

async function atualizarAluno() {
  let id = document.querySelector("#idAluno").value;
  let nome = document.querySelector("#nomeAluno").value;

  let dados = {
    id,
    nome,
  };

  let url = "http://localhost:8080/atualizar";

  const response = await fetch(url, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(dados),
  });

  const data = await response.json();

  if (response.status == 404) {
    alert(data.erro);
  } else {
    alert(data.mensagem);
    window.location.reload();
  }

  console.log(data);
}

getAlunos();
