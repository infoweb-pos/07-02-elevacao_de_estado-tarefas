import "./App.css";

const AppNavBar = () => {
	return (
		<div className="card">
			<h1>Lista de tarefas</h1>
		</div>
	);
};

const AppTarefaEditar = () => {
	return (
		<div className="card">
			<label>Tarefa: </label>
			<input type="text" />
			<button>Adicionar</button>
		</div>
	);
};

const AppTarefaLista = () => {
	const tarefas = [
		"Prototipar interface do usuário",
		"Implementar com HTML a interface com o usário em React",
		"Extrair componentes React da implementação HTML",
		"Transferir os dados do HTML dos componentes React para variáveis",
		"Modificar os dados de variáveis para estado ou propriedades de componentes",
		"Elevar os estados dos componentes quando tiver dados compartilhados",
		"Programar a modificação dos estados",
	];
	return (
		<div className="card">
			<ul>
				{tarefas.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	);
};

const App = () => {
	return (
		<>
			<AppNavBar />
			<AppTarefaEditar />
			<AppTarefaLista />
		</>
	);
};

export default App;
