import astronauta from '../Images/astronauta.png'
import { Contacto } from './Contacto'
import { FaSpaceAwesome } from 'react-icons/fa6'

export const Home = () => {
    return (
        <div className="h-screen  py-10 animate-fade-down ">
            <div className='flex justify-center text-details dark:text-white h-[100%]'>
    
                <div className='w-[80%] sm:text-right relative mx-10'>
                    <h1 className="text-4xl sm:text-7xl font-rosarivo">Fullstack <span className='text-detLight dark:text-details'> Frontend </span> <br></br> Developer<span className='text-twoLight dark:text-details'>.</span></h1>

                    <h2 className="text-2xl my-6 font-rosarivo">Felipe Fraga</h2>

                    <div className='sm:absolute right-0'>
                        <Contacto />
                    </div>

                    <img src={astronauta} alt="Astronauta saludando" className='mt-[50px] sm:mt-0 h-[200px] sm:h-[250px] animate-wiggle-more animate-infinite animate-duration-[4111ms] ' />

                    <a href="#proyectos" className='absolute bottom-2 md:right-0 flex   transform rotate-180'>
                        <FaSpaceAwesome className='text-detLight dark:text-details animate-bounce animate-infinite font-bold w-[35px] h-[35px]' />
                    </a>
                </div>
            </div>
        </div>
    )
}

