import { Home } from "./components/Home";
import { Proyectos } from "./components/Proyectos";
import { SobreMi } from "./components/SobreMi";
import { NavBar } from './components/NavBar'

function App() {
  return (
    <div className="bg-black">
      <NavBar />
      <div id="home">
        <Home id="home"/>
      </div>
      <div id="proyectos">
        <Proyectos id="proyectos"/>
      </div>
      <div id="sobreMi">
        <SobreMi id="sobreMi"/>
      </div>
    </div>
  );
}

export default App;