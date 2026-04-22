import { Database } from "./database.js";

const database = new Database();

//Rota Padrão "/" que retorna informacoes do IFCE JGA
export function getPadrao(request, response) {
  const info = {
    college: "IFCE",
    state: "JGA",
  };
  response.json(info);
}

//Rota "/alunos" que retorna alunos
export function getAlunos(request, response) {
  response.json(database.alunos);
}

export function getAlunoById(request, response) {
  let id = request.query.id;

  response.json(database.getAlunoById(id));
}

export function getProfs(request, response) {
  response.json(database.profs);
}

export function getProfById(request, response) {
  let id = request.params.id;

  response.json(database.getProfById(id));
}

export function getTecnicos(request, response) {
  response.json(database.tecnicos);
}

export function cadastrarAluno(request, response) {
  const data = request.body;

  let result = database.cadastrarAluno(data);

  if (result == 1) {
    response.status(201).json({ mensagem: "Aluno cadastrado com sucesso!" });
  } else {
    response.status(400).json({ erro: "ID já existe!" });
  }
}

export function atualizarAluno(request, response) {
  const data = request.body;

  let result = database.atualizarAluno(data);

  if (result == 1) {
    response.status(200).json({ mensagem: "Aluno atualizado com sucesso!" });
  } else {
    response.status(404).json({ erro: "Aluno não encontrado!" });
  }
}
