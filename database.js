export class Database {
  constructor() {
    this.alunos = [
      { id: 1, nome: "Keven" },
      { id: 2, nome: "Victor" },
      { id: 3, nome: "Neto" },
      { id: 4, nome: "Yane" },
      { id: 5, nome: "Bia" },
    ];
    this.profs = [
      { id: 11, nome: "Girafales" },
      { id: 22, nome: "Helena Carrossel" },
      { id: 33, nome: "Valter White" },
    ];
    this.tecnicos = [
      { id: 111, nome: "Vitória" },
      { id: 222, nome: "Ximbinha" },
      { id: 333, nome: "Boyzinho" },
    ];
  }

  getAlunoById(id) {
    for (let aluno of this.alunos) {
      if (aluno.id == id) {
        return aluno;
      }
    }
    return "Aluno not found 404!";
  }

  getProfById(id) {
    for (let prof of this.profs) {
      if (prof.id == id) {
        return prof;
      }
    }
    return "Professor not found 404!";
  }

  cadastrarAluno(data) {
    for (let aluno of this.alunos) {
      if (aluno.id == data.id) {
        return 0;
      }
    }
    this.alunos.push(data);
    return 1;
  }

  atualizarAluno(data) {
    for (let aluno of this.alunos) {
      if (aluno.id == data.id) {
        aluno.nome = data.nome;
        return 1;
      }
    }
    return 0;
  }
}
