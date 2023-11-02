import { Proyectos } from "./components/Proyectos";
import { Home } from "./components/Home";
import { Theme } from "./components/Theme";
import { ChatBot } from "./components/ChatBot";
import { Footer } from "./components/Footer";
import { FaGithub } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai'

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
      <Footer />
    </div>
  );
}

export default App;