import astronauta from '../Images/astronauta.png'
import portada from '../Images/portada.png'

import { Contacto } from './Contacto'
import { StackUno, StackDos, StackTres, StackCuatro } from './Stack'

export const Home = () => {
    return (
        <div className="h-screen py-16 animate-fade-down ">
            <div className='mx-6 flex justify-between dark:text-white'>
                <div className='hidden sm:block'>
                    <StackUno />
                    <StackTres />
                </div>
                <div className='w-[70%] sm:text-right relative mx-10 '>
                    <h1 className="text-4xl sm:text-7xl font-rosarivo">Fullstack <span className='text-detLight dark:text-details'> Frontend </span> <br></br> Developer<span className='text-detLight dark:text-details'>.</span></h1>

                    <div className='sm:absolute right-0 mt-10'>
                        <Contacto />
                    </div>

                        <img src={astronauta} alt="Astronauta saludando" className='h-[320px] hidden sm:block animate-wiggle-more animate-infinite animate-duration-[4111ms]' />

                    <div className='block sm:hidden flex my-10'>
                        <StackUno />
                        <StackDos />
                        <StackTres />
                        <StackCuatro />
                    </div>

                    <div className='sm:absolute bottom-0 right-0'>
                        <h2 className="text-2xl mb-4 font-rosarivo">Felipe Fraga</h2>
                        <a href="#proyectos" >
                            <span className="font-bold bg-detLight dark:bg-details rounded p-4 text-white">Ver proyectos</span>
                        </a>
                    </div>
                </div>

                <div className='hidden sm:block'>
                    <StackDos />
                    <StackCuatro />
                </div>
            </div>


        </div>
    )
}

