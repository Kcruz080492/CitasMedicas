//Se importan los hooks de react
import { useEffect, useState } from "react";
//Se importa las funciones necesarias para leer datos desde Firestore
import { collection, onSnapshot } from "firebase/firestore";
//Importamos la conexion a la base de datos
import { db } from "../firebase/config";
//Se importa la interfaz Cita 
import type { Cita } from "../types/Cita.ts";

function ListaCitas() {
    //Creamos un estado para guardar el arreglo de citas. 
    //Iniciamos con un array vacio, y lo llenaremos con los datos de Firebase. 
    const [citas, setCita] = useState<Cita[]>([]);
    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "citas"), (snapshot) => {
            const lista = snapshot.docs.map((doc) => ({
                id: doc.id, //agregamos el ID del cocumento 
                ...doc.data(), //se copian el resto de los datos: nombre, fecha, hora   
            })) as Cita[];
            //Se guarda el arreglo de citas en el estado del componente
            setCita(lista);
        });
        //Esta funcion sirve para cancelar la suscripcion a firebase y evitar fugas de memoria
        return () => unsubscribe();
    }, []);
    // se renderiza el contenido en pantalla 
    return (
        <div>
            <h2>Lista de Citas</h2>
            {/* Si hay citas, se mostran una por una en una lista. */}
            <ul>
                {citas.map((cita) => (
                    <li key={cita.id}>
                        {/*Se muestra el nombre del paciente, la fecha y la hora de la cita*/}
                        {cita.nombre} - {cita.fecha} - {cita.hora}
                    </li>
                ))};
            </ul>
        </div>
    );
}
//Se exporta el componente para que pueda ser usado en App.Tsx
export default ListaCitas;