import React, { useState } from "react";// importamos react y el hook de estado

//create your first component
// Inicializamos el estado para almacenar las tareas y la nueva tarea que se va a agregar
const Home = () => {
	const [tareas, setTareas]= useState([]);// 'tareas' es un array que contendrá la lista de tareas
	const [nuevaTarea, setNuevaTarea]= useState(''); //'nuevaTarea' es una cadena vacia que se almacenara en tareas
	// arrow funcion para manejar los cambios en el input cuando escribe el usuario
	const manejarEntrada = (event) => {
		setNuevaTarea(event.target.value);// actualizo el estado (valor) de 'nuevaTarea' con el evento que se dispara
	}
	//arrow funcion para añadir una nueva tarea a la lista de tareas
	const añadirTareas = () => {
		if (nuevaTarea.trim() !== ''){ // verifico que 'nuevaTarea' no este vacia y trim elimina los espacios vacios al principio y final
			setTareas([...tareas, nuevaTarea]);// añado la nueva tarea a 'tareas' al final del array, con el propagador (. . .), le añade 'nuevaTarea'
			setNuevaTarea('');// despues limpiamos en campo del input
		}
	}
	// arrow funcion para añadir tarea cuando el usuario pulsa 'enter'
	const manejarTecla = (event) =>{
		if (event.key === 'Enter'){/*verifico si la tecla presionada es enter */
			añadirTareas();/*llamo a la funcion para añadir la tarea si se presiona enter */
		}
	}
	// arrow funcion para eliminar una tarea especifica basandome en el indice
	const eliminarTarea = (index) => {/*tomamos index, que es el indice que queremos eliminar */
		const actualizarTareas = tareas.filter((_, i) => i !== index);// filtro la lista para eliminar la tarea elegida por indice y creo un nuevo array. _ representa cada tarea, como no se usan se pone guion bajo
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
					placeholder="What needs to be done?"
					className="input-tarea"/>	
			</div>
			<ul className="lista-tareas">
				{/*mapeo la lista para mostrar cada tarea en un '<li/>' */}
				{tareas.map((tarea, index) => (
				<li key={index} className={`tarea-item ${index > 0 ? 'tarea-apilada' : ''}`}>
					{tarea}{/*muestra el texto de la tarea dentro de cada '<li/>' */}
					{/*boton para eliminar la tarea */}
					<button onClick={() => eliminarTarea(index)} className="boton-eliminar oculto">
						<span class="material-symbols-outlined">{/*añado la x de closed con google fonts, para que tenga los angulos iguales */}
						close
						</span>
					</button>
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