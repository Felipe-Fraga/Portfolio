import { Proyectos } from "./components/Proyectos";
import { Home } from "./components/Home";
import { Theme } from "./components/Theme";
import { ChatBot } from "./components/ChatBot";

function App() {


  return (
    <div>
      <Theme className='fixed'/>

      <div id="home">
        <Home id="home" />
      </div>
      <div id="proyectos">
        <Proyectos id="proyectos" />
      </div>
      <ChatBot />
    </div>
  );
}

export default App;