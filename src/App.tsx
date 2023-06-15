import { useState } from "react";
import "./App.css";

const AppNavBar = () => {
	return (
		<div className="card">
			<h1>Lista de tarefas</h1>
		</div>
	);
};

const AppTarefaEditar = () => {
	const [tarefa, setTarefa] = useState("");

	return (
		<div className="card">
			<label>Tarefa: </label>
			<input
				type="text"
				value={tarefa}
				onChange={(e: any) => setTarefa(e.target.value)}
			/>
			<button>Adicionar</button>
		</div>
	);
};

const AppTarefaLista = (props: any) => {
	return (
		<div className="card">
			<ul>
				{props.data.map((item: string, indice: number) => (
					<li key={indice}>{item}</li>
				))}
			</ul>
		</div>
	);
};

const App = () => {
	const [tarefas, setTarefas] = useState([
		"Prototipar interface do usuário",
		"Implementar com HTML a interface com o usário em React",
		"Extrair componentes React da implementação HTML",
		"Transferir os dados do HTML dos componentes React para variáveis",
		"Modificar os dados de variáveis para estado ou propriedades de componentes",
		"Elevar os estados dos componentes quando tiver dados compartilhados",
		"Programar a modificação dos estados",
	]);

	return (
		<>
			<AppNavBar />
			<AppTarefaEditar />
			<AppTarefaLista data={tarefas} />
		</>
	);
};

export default App;
