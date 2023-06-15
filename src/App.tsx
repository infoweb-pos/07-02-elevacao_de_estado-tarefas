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
	return (
		<div className="card">
			<ul>
				<li>Prototipar interface do usuário</li>
				<li>Implementar com HTML a interface com o usário em React</li>
				<li>Extrair componentes React da implementação HTML</li>
				<li>
					Transferir os dados do HTML dos componentes React para
					variáveis
				</li>
				<li>
					Modificar os dados de variáveis para estado ou propriedades
					de componentes
				</li>
				<li>
					Elevar os estados dos componentes quando tiver dados
					compartilhados
				</li>
				<li>Programar a modificação dos estados</li>
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
