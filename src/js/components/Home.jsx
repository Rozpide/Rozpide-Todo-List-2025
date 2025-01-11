import React, { useState } from "react";

//create your first component
const Home = () => {
	const [tareas, setTareas]= useState([])
	const [nuevaTarea, setNuevaTarea]= useState('')
	const manejarEntrada = (e) => {
		setNuevaTarea(e.target.value);
	}
	const añadirTareas = () => {
		if (nuevaTarea.trim() !== ''){
			setTareas([...tareas, nuevaTarea]);
			setNuevaTarea('');
		}
	}
	const eliminarTarea = (index) => {
		const modificarTareas = tareas.filter(())

	}
	return (
		<>
		<input type="text" onChange={añadirTarea}/>
		<button onClick={guardarTarea}>añade la tarea</button>
		</>
	);
};

export default Home;