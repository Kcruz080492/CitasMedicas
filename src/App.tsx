import './App.css'
import FormularioCita from "./components/formulario.tsx";
import ListaCitas from "./components/ListaCitas.tsx";

function App() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Agenda de Citas Médicas</h1>
      <FormularioCita />
      <ListaCitas />
    </main>
  );
}

export default App;