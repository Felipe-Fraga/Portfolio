import { FaGithub } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai'

export const Contacto = () => {
    return (
        <div className="flex space-x-4 text-details dark:text-white">
            <a href='https://github.com/Felipe-Fraga' target='blank'>
                <FaGithub className="w-8 h-8" />
            </a>

            <a href='https://www.linkedin.com/in/felipefraga/' target='blank'>
                <AiFillLinkedin className="w-8 h-8" />
            </a>

            <button className='bg-detLight dark:bg-details p-2 rounded font-bold text-white '>Descargar CV</button>
        </div>
    )
}

