import { Proyectos } from "./components/Proyectos";
import { Home } from "./components/Home";
import { Theme } from "./components/Theme";
import { ChatBot } from "./components/ChatBot";
import { Footer } from "./components/Footer";
import { AboutMe } from "./components/AboutMe";

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
      <div id="aboutMe">
        <AboutMe id="aboutMe"/>
      </div>
      <ChatBot />
      <Footer />
    </div>
  );
}

export default App;