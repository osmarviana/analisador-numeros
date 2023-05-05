const addBtn = document.getElementById("add");
const finishBtn = document.getElementById("finish");
const responseOption = document.getElementById("select");
const response = document.getElementById("response");

let inputValue = document.getElementById("number");

let valuesToAnalyze = [];

addBtn.addEventListener("click", () => {
  if (inputValue.value.length == "") {
    alert("Informe um número entre 1 e 100!");
  } else if (inputValue.value <= 0 || inputValue.value > 100) {
    alert("Valor inválido, informe um número entre 1 e 100!");
  } else if (valuesToAnalyze.includes(Number(inputValue.value))) {
    alert("Valor já consta na lista, tente outro.");
    valuesToAnalyze;
  } else {
    response.innerHTML = "";
    let value = Number(inputValue.value);
    responseOption.innerHTML += `<option value="${value}">Valor ${value} adicionado.</option>`;
    valuesToAnalyze.push(value);
  }
  inputValue.value = "";
  inputValue.focus();
});

finishBtn.addEventListener("click", () => {
  if (valuesToAnalyze.length == "") {
    alert("Preencha os dados antes de finalizar.");
  } else {
    let maxValue = valuesToAnalyze[0];
    let minValue = valuesToAnalyze[0];
    let sumValues = 0;
    for (let pos in valuesToAnalyze) {
      sumValues += valuesToAnalyze[pos];
      if (valuesToAnalyze[pos] > maxValue) maxValue = valuesToAnalyze[pos];
      if (valuesToAnalyze[pos] < minValue) minValue = valuesToAnalyze[pos];
    }

    let averageValues = Math.floor(sumValues / valuesToAnalyze.length);

    response.innerHTML = `
    <ul class="response-list">
    <li class="item">No total, temos ${valuesToAnalyze.length} números cadastrados.</li>
    <li class="item">O maior valor informado foi ${maxValue}.</li>
    <li class="item">O menor valor informado foi ${minValue}.</li>
    <li class="item">Somando todos os valores, temos ${sumValues}.</li>
    <li class="item">A média dos valores informados é ${averageValues}.</li>
  </ul>`;
  }
});
