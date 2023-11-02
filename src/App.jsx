import { Proyectos } from "./components/Proyectos";
import { Home } from "./components/Home";
import { Theme } from "./components/Theme";
import { ChatBot } from "./components/ChatBot";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className=" animate-fade-down animate-duration-[2500ms]">
      <Theme className='fixed'/>
      <div id="home">
        <Home id="home" />
      </div>
      <div id="proyectos">
        <Proyectos id="proyectos" />
      </div>
      <ChatBot />
      <Footer />
    </div>
  );
}

export default App;