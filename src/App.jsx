import { Proyectos } from "./components/Proyectos";
import { Home } from "./components/Home";
import { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return 'dark'
    }
    return 'light'
  })

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }
  }, [theme])

  const handleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    console.log(theme);
  }

  return (
    <div className="bg-bgLight dark:bg-bg ">
      <button onClick={handleTheme} className='p-2'>
        {theme === 'dark' ? (
          <h1 className="text-white">Cambiar a claro</h1>
        ) : (
          <h1>Cambiar a oscuro</h1>
        )}
      </button>

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