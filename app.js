<select id="dados-dropdown" onchange="console.log(event.target.value)">
  <option value="">Selecione um nome</option>
</select>


<form onsubmit="handleSubmit(event)">
  <input type="text" value={nome} onchange="nome = event.target.value" />
  <button type="submit">Salvar</button>
</form>



let nome = '';

function handleSubmit(event) {
  event.preventDefault();
  const dados = JSON.parse(localStorage.getItem('dados')) || [];
  const novoDado = {
    nome: nome,
    valor: nome.toLowerCase().replace(/\s+/g, '-'), // opcional: transforma o nome em uma string URL-friendly
  };
  const novosDados = [...dados, novoDado];
  localStorage.setItem('dados', JSON.stringify(novosDados));
  nome = '';
  atualizarDropdown();
}

function atualizarDropdown() {
  const dados = JSON.parse(localStorage.getItem('dados')) || [];
  const dropdown = document.getElementById('dados-dropdown');
  dropdown.innerHTML = '';
  const defaultOption = document.createElement('option');
  defaultOption.text = 'Selecione um nome';
  defaultOption.value = '';
  dropdown.add(defaultOption);
  for (let i = 0; i < dados.length; i++) {
    const option = document.createElement('option');
    option.text = dados[i].nome;
    option.value = dados[i].valor;
    dropdown.add(option);
  }
}

