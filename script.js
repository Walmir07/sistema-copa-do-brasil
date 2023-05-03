let times = [];
class Time{
  constructor(id, nome, sigla, tecnico){
    this.id = id;
    this.nome = nome;
    this.sigla = sigla;
    this.tecnico = tecnico;
  }
}

function cadastrarTime(){
  let id = byId("idTime").value;
  let nome = byId("nomeTime").value;
  let sigla = byId("siglaTime").value;
  let tecnico = byId("tecnicoTime").value;
  let time = new Time(id, nome, sigla, tecnico);
  times.push(time);
  apresentarTime();
}
function apresentarTime(){
  let tabela = byId("times");
  let listar = "<ol>"
  for(let time of times){
    listar += `<li>${time.id}(${time.nome})(${time.sigla})(${time.tecnico})</li>`
  }
  listar += "</ol>"
      tabela.innerHTML = listar;
}

function byId(id){
  return document.getElementById(id)
}

let estadios = [];
class Estadio{
  constructor(jogo, nomeDoEstadio, localizacao, capacidade){
    this.jogo = jogo;
    this.nomeDoEstadio = nomeDoEstadio;
    this.localizacao = localizacao;
    this.capacidade = capacidade;
  
  }
}

function cadastrarEstadio(){
  let jogo = byId("jogoEstadio").value;
  let nomeDoEstadio = byId("nomeEstadio").value;
  let localizacao = byId("localizacaoEstadio").value;
  let capacidade = byId("capacidadeEstadio").value;
  let estadio = new Estadio(jogo, nomeDoEstadio, localizacao, capacidade);
  estadios.push(estadio);
  apresentarEstadio();
}
function apresentarEstadio(){
  let tabela = byId("estadios");
  let listar = "<ol>"
  for(let estadio of estadios){
    listar += `<li>${estadio.jogo}(${estadio.nomeDoEstadio})(${estadio.localizacao})(${estadio.capacidade})</li>`
  }
  listar += "</ol>"
      tabela.innerHTML = listar;
}
function byId(id){
  return document.getElementById(id)
}

let tecnicos = [];
class Tecnico{
  constructor(idDoTecnico, nomeDoTecnico, experiencia){
    this.idDoTecnico= idDoTecnico;
    this.nomeDoTecnico = nomeDoTecnico;
    this.experiencia = experiencia;
  }
}

function cadastrarTecnico(){
  let idDoTecnico = byId("idTecnico").value;
  let nomeDoTecnico = byId("nomeTecnico").value;
  let experiencia = byId("experienciaTecnico").value;
  let tecnico = new Tecnico(idDoTecnico, nomeDoTecnico, experiencia);
  tecnicos.push(tecnico);
  apresentarTecnico();
}
function apresentarTecnico(){
  let tabela = byId("tecnicos");
  let listar = "<ol>"
  for(let tecnico of tecnicos){
    listar += `<li>${tecnico.idDoTecnico}(${tecnico.nomeDoTecnico})(${tecnico.experiencia})</li>`
  }
  listar += "</ol>"
      tabela.innerHTML = listar;
}
function byId(id){
  return document.getElementById(id)
}

let arbitros = [];
class Arbitro{
  constructor(idDoArbitro, nomeDoArbitro, idadeDoArbitro, experienciaDoArbitro){
    this.idDoArbitro = idDoArbitro;
    this.nomeDoArbitro = nomeDoArbitro;
    this.idadeDoArbitro = idadeDoArbitro;
    this.experienciaDoArbitro = experienciaDoArbitro;
  
  }
}

function cadastrarArbitro(){
  let idDoArbitro = byId("idArbitro").value;
  let nomeDoArbitro = byId("nomeArbitro").value;
  let idadeDoArbitro = byId("idadeArbitro").value;
  let experienciaDoArbitro = byId("experienciaArbitro").value;
  let arbitro = new Arbitro(idDoArbitro, nomeDoArbitro, idadeDoArbitro, experienciaDoArbitro);
  arbitros.push(arbitro);
  apresentarArbitro();
}
function apresentarArbitro(){
  let tabela = byId("arbitros");
  let listar = "<ol>"
  for(let arbitro of arbitros){
    listar += `<li>${arbitro.idDoArbitro}(${arbitro.nomeDoArbitro})(${arbitro.idadeDoArbitro})(${arbitro.experienciaDoArbitro})</li>`
  }
  listar += "</ol>"
      tabela.innerHTML = listar;
}
function byId(id){
  return document.getElementById(id)
}

let jogos = [];
class Jogo{
  constructor(idDoJogo, timeMandante, timeVisitante, arbitroDoJogo){
    this.idDoJogo = idDoJogo;
    this.timeMandante = timeMandante;
    this.timeVisitante = timeVisitante;
    this.arbitroDoJogo = arbitroDoJogo;
  }
}

function cadastrarJogo(){
  let idDoJogo = byId("idJogo").value;
  let timeMandante = byId("mandanteJogo").value;
  let timeVisitante = byId("visitanteJogo").value;
  let arbitroDoJogo = byId("arbitroJogo").value;
  let jogo = new Jogo(idDoJogo, timeMandante, timeVisitante, arbitroDoJogo);
  jogos.push(jogo);
  apresentarJogo();
}
function apresentarJogo(){
  let tabela = byId("jogos");
  let listar = "<ol>"
  for(let jogo of jogos){
    listar += `<li>${jogo.idDoJogo}(${jogo.timeMandante})(${jogo.timeVisitante})(${jogo.arbitroDoJogo})</li>`
  }
  listar += "</ol>"
      tabela.innerHTML = listar;
}
function byId(id){
  return document.getElementById(id)
}

let confrontos = [];

function addTime() {
  let nomeT = document.getElementById("nomeConf").value;
  confrontos.push(nomeT);
  placares();
}

function montarOpcoesTimes() {
  let opcoes = "<select>";
  for(let i of confrontos) {
    opcoes += "<option>"+i+"</option>";
  }
  opcoes += "</select>";
  return opcoes;
}

function componenteJogo() {
  // select com times + input + X + input + times
  let jogo = montarOpcoesTimes();
  const input = '<input type="text">';
  jogo += input + '<strong>X</strong>' + input;
  jogo += montarOpcoesTimes();
  return jogo;
}

function placares() {
  const comJogo = componenteJogo();
  let placar = "";
  for(let i = 1; i <= 6; i++) {
    placar += comJogo + "<br>";
  }
  let div = document.getElementById("placar");
  div.innerHTML = placar;
}

placares();
