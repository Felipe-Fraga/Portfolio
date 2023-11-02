import todo from '../Images/todo.png'
import earth from '../Images/earth.png'
import moru from '../Images/moru.png'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { CardProject } from './CardProject'
import { FaSpaceAwesome } from 'react-icons/fa6'
import { FullStack } from './Stack'

const projects = [
    {
        img: moru,
        title: 'Moru APP',
        text: 'Pasantía realizada para la empresa colombiana MORU',
        deploy: 'https://moru-app-front.vercel.app/',
        bg: '#280a50',
    },
    {
        img: todo,
        title: 'To Do List',
        text: 'Página para crear, editar, marcar como realizadas y eliminar tareas.',
        /*  Con modos claro y oscuro, proporcionando una experiencia visual personalizada. Además, integra el almacenamiento local (localStorage) para garantizar que las tareas pendientes persistan entre sesiones, mejorando la continuidad de la gestión de tareas. */
        deploy: 'https://to-do-list-nu-lake.vercel.app/',
        github: 'https://github.com/Felipe-Fraga/toDo-vite',
        bg: '#312E81',
    },
    {
        img: earth,
        title: 'Earth Echoes',
        text: 'Página para conocer más sobre el planeta tierra',
        deploy: 'https://earth-echoes.vercel.app/',
        github: 'https://github.com/Felipe-Fraga/EarthEchoes',
        bg: '#001C30',
    },
];

export const Proyectos = () => {

    return (
        <div className="min-h-screen py-10 w-[80%] mx-auto animate-fade-down">
            <FullStack/>

            <div className='flex justify-between mt-10'>
            <h1 className="text-5xl text-detLight dark:text-white font-rosarivo"><span className='text-details'>Pro</span>yectos</h1>
            <a href="#home">
                <FaSpaceAwesome className='text-detLight dark:text-details animate-bounce animate-infinite font-bold w-[35px] h-[35px] mt-1' />
            </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                {projects.map((project, index) => (
                    <CardProject key={index} {...project} />
                ))}
            </div>

        </div>
    )
}

