import { FaGithub } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai'

export const Contacto = () => {
    return (
        <div className="p-4 bg-black text-white flex font-bold space-x-4">
            <a href='https://github.com/Felipe-Fraga' target='blank'>
                <FaGithub className="w-8 h-8" />
            </a>

            <a href='https://www.linkedin.com/in/felipefraga/' target='blank'>
                <AiFillLinkedin className="w-8 h-8" />
            </a>

            <button>Descargar CV</button>
        </div>
    )
}

