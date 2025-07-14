import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import type { Cita } from "../types/Cita.ts";

function FormularioCita() {
    //Se crea un estado para manejar los datos del formulario (sin el campo Id)
    const [cita, setCita] = useState<Omit<Cita, "id">>({
        nombre: "",
        fecha: "",
        hora: "",
    });

    //Esta funcion se ejecuta cada vez que el usuario escribe en el formulario
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        //Se actualiza el estado del formulario según el campo modificado
        setCita({ ...cita, [name]: value });
    };

    //Está función se ejecuta cuando se envia el formulario (Submit)
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Evita que se recargue la página

        // Verifica que todos los campos tengan un valor 
        if (cita.nombre && cita.fecha && cita.hora) {
            //Se agrega la cita a la coleccion "citas" en Firestore
            await addDoc(collection(db, "citas"), cita);
            // Limpia el formulario despues de guardar 
            setCita({ nombre: "", fecha: "", hora: "" });
        }
    };

    // Se muestra el formulario con los tres campos y un botón para guardar 
    return (
        <form onSubmit={handleSubmit}>
            <h2>Registar cita médica</h2>
            {/*Campo para escribir el nombre del paciente*/}
            <input
                type="text"
                name="nombre"
                placeholder="Nombre completo"
                value={cita.nombre}
                onChange={handleChange}
                required
            />
            {/* Campo para escribir la fecha de la cita*/}
            <input
                type="date"
                name="fecha"
                value={cita.fecha}
                onChange={handleChange}
                required
            />
            {/* Campo para escribir la hora de la cita*/}
             <input
                type="time"
                name="hora"
                value={cita.hora}
                onChange={handleChange}
                required
            />
        {/* Botón para guardar la cita*/}
        <button type = "submit">Guardar Cita</button>
        </form> 
    );
}
export default FormularioCita;