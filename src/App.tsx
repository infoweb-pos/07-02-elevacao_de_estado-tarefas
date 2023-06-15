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

const App = () => {
	return (
		<>
			<AppNavBar />
			<AppTarefaEditar />
		</>
	);
};

export default App;
