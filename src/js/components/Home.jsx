import React, { useState } from "react";// importamos react y el hook de estado

//create your first component
// Inicializamos el estado para almacenar las tareas y la nueva tarea que se va a agregar
const Home = () => {
	const [tareas, setTareas]= useState([]);// 'tareas' es un arreglo que contendra la lista de tareas
	const [nuevaTarea, setNuevaTarea]= useState(''); //'nuevaTarea' es una cadena vacia que se almacenara
	// funcion para manejar los cambios en el input
	const manejarEntrada = (e) => {
		setNuevaTarea(e.target.value);// actualizo el estado de 'nuevaTarea?
	}
	// funcion para añadir una nueva tarea a la lista de tareas
	const añadirTareas = () => {
		if (nuevaTarea.trim() !== ''){ // verifico que 'nuevaTarea' no este vacia
			setTareas([...tareas, nuevaTarea]);// añado la nueva tarea a 'tareas'
			setNuevaTarea('');// despues limpiamos en campo del input
		}
	}
	// funcion para añadir tarea cuando el usuario pulsa 'enter'
	const manejarTecla = (event) =>{
		if (event.key === 'Enter'){
			añadirTareas();
		}
	}
	// funcion para eliminar una tarea especifica
	const eliminarTarea = (index) => {
		const actualizarTareas = tareas.filter((_, i) => i !== index);// filtro la lista para eliminar la tarea por indice
		setTareas(actualizarTareas);// actualizo el estado de 'tareas' con la lista filtrada
		
	}
	return (
		<>
			<h1 className="titulo">todos</h1>
			<div className="entrada-tarea">
				{/*añado un input para que el usuario añada sus tareas */}
				<input type="text"
					value={nuevaTarea}
					onChange={manejarEntrada}
					onKeyDown={manejarTecla}
					placeholder="Escribe una nueva tarea" className="input-tarea"/>	
			</div>
			<ul className="lista-tareas">
				{/*mapeo la lista para mostrar cada tarea en un '<li/>' */}
				{tareas.map((tarea, index) => (
				<li key={index} className={`tarea-item ${index > 0 ? 'tarea-apilada' : ''}`}>
					{tarea}{/*muestra el texto de la tarea dentro de cada '<li/>' */}
					{/*boton para eliminar la tarea */}
					<button onClick={() => eliminarTarea(index)} className="boton-eliminar oculto">X</button>
				</li>	
				))}
				<p className="items-restantes">{tareas.length} item(s) left</p>
			</ul>
			<div className="folio"></div>
			<div className="folio-2"></div>
		</>
	);
};
/*exporto el componente Home para poder usarlo */
export default Home;