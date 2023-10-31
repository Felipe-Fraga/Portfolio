import todo from '../Images/todo.png'
import { CardProject } from './CardProject'

const projects = [
    {
        img: todo,
        title: 'To Do List',
        text: 'Página para crear, editar, marcar como realizadas y eliminar tareas. Con modos claro y oscuro, proporcionando una experiencia visual personalizada. Además, integra el almacenamiento local (localStorage) para garantizar que las tareas pendientes persistan entre sesiones, mejorando la continuidad de la gestión de tareas.',
        deploy: 'https://to-do-list-nu-lake.vercel.app/',
        github: 'https://github.com/Felipe-Fraga/toDo-vite',
        bg: '#312E81',
        tamIm: '300px',
    },
    {
        img: todo,
        title: 'To Do List',
        text: 'Descripción del proyecto 2',
        deploy: 'URL de implementación 2',
        github: 'URL de GitHub 2',
        bg: '#AA5733',
        tamIm: '300px',
    },
    // Agrega más proyectos según sea necesario
];

export const Proyectos = () => {

    return (
        <div className="min-h-screen pt-[30px]">
            <h1 className="text-5xl text-center text-white ">Proyectos</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                {projects.map((project, index) => (
                    <CardProject key={index} {...project} />
                ))}
            </div>
        </div>
    )
}

