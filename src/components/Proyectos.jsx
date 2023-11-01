import todo from '../Images/todo.png'
import earth from '../Images/earth.png'
import moru from '../Images/moru.png'
import { CardProject } from './CardProject'

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
        <div className="min-h-screen py-5 w-[80%]  m-auto">
            <h1 className="text-5xl text-details dark:text-white font-rosarivo"><span className='text-detLight dark:text-details'>Pro</span>yectos</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                {projects.map((project, index) => (
                    <CardProject key={index} {...project} />
                ))}
            </div>

        </div>
    )
}

