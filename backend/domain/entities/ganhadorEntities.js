export class GanhadorEntities {
  constructor({ nome, estado, cidade, premio, data = new Date() }) {
    this.nome = nome;
    this.estado = estado;
    this.cidade = cidade;
    this.premio = premio;
    this.data = data;
  }
}
