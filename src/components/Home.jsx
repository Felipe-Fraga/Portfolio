import astronauta from '../Images/astronauta.png'

import { Contacto } from './Contacto'
import { StackUno, StackDos, StackTres, StackCuatro } from './Stack'

export const Home = () => {
    return (
        <div className="h-screen py-16 animate-fade-down ">
            <div className='mx-6 flex justify-between text-details dark:text-white h-[100%]'>
                <div className='hidden sm:block'>
{/*                     <StackUno />
                    <StackTres /> */}
                </div>
                <div className='w-[80%] sm:text-right relative mx-10'>
                    <h1 className="text-4xl sm:text-7xl font-rosarivo">Fullstack <span className='text-detLight dark:text-details'> Frontend </span> <br></br> Developer<span className='text-twoLight dark:text-details'>.</span></h1>

                    <div className='sm:absolute right-0 mt-10'>
                        <Contacto />
                    </div>

                    <img src={astronauta} alt="Astronauta saludando" className='mt-[50px] sm:mt-0 h-[200px] sm:h-[320px] animate-wiggle-more animate-infinite animate-duration-[4111ms]' />

                    {/* <div className='block sm:hidden flex my-10'>
                        <StackUno />
                        <StackDos />
                        <StackTres />
                        <StackCuatro />
                    </div> */}

                    <div className='absolute bottom-0 right-0'>
                        <h2 className="text-2xl mb-4 font-rosarivo">Felipe Fraga</h2>
                        <a href="#proyectos" >
                            <span className="font-bold text-white bg-detLight dark:bg-details rounded p-4">Ver proyectos</span>
                        </a>
                    </div>
                </div>

                <div className='hidden sm:block'>
                    {/* <StackDos />
                    <StackCuatro /> */}
                </div>
            </div>


        </div>
    )
}

