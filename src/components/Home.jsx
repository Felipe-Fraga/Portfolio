import astronauta from '../Images/astronauta.png'
import { Contacto } from './Contacto'
import { FaSpaceAwesome } from 'react-icons/fa6'
import { Lang } from './Lang'
import { useEffect } from 'react'
import ScrollReveal from "scrollreveal";


export const Home = () => {

    useEffect(() => {
        ScrollReveal().reveal(".animate", {
          distance: "30px", // Distancia de animación
          origin: "left", // Dirección de origen (ajústala según tus necesidades)
          duration: 900, // Duración de la animación en milisegundos
          delay: 300, // Retraso antes de que comience la animación
          easing: "cubic-bezier(0.5, 0, 0, 1)", // Curva de aceleración
        });
      }, []);


    return (
        <div className="h-screen py-10 animate">
            <div className='flex justify-center text-details dark:text-white h-[100%]'>

                <div className='w-[80%] sm:text-right relative mx-10'>
                    <h1 className="text-4xl sm:text-7xl font-rosarivo">Fullstack <span className='text-detLight dark:text-details'> Frontend </span> <br></br> Developer<span className='text-twoLight dark:text-details'>.</span></h1>

                    <h2 className="text-2xl my-8 font-rosarivo text-details">Felipe Fraga</h2>

                    <div className='sm:absolute right-0'>
                        <Contacto />
                    </div>

                    <Lang />

                        <img src={astronauta} alt="Astronauta saludando" className='mt-[50px] sm:mt-0 h-[200px] sm:h-[240px] animate-wiggle-more animate-infinite animate-duration-[4111ms] ' />


                    
                </div>
            </div>
        </div>
    )
}

