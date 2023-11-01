import { Proyectos } from "./components/Proyectos";
import { Home } from "./components/Home";
import { Theme } from "./components/Theme";

function App() {


  return (
    <div className="bg-bgLight dark:bg-bg">
      <Theme className='fixed'/>

      <div id="home">
        <Home id="home" />
      </div>
      <div id="proyectos">
        <Proyectos id="proyectos" />
      </div>
    </div>
  );
}

export default App;