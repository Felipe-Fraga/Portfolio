import React from 'react';
import canva from '../Images/canva.jpg';
import canvaMobile from '../Images/canvamobile.jpg';
import { Contacto } from './Contacto';

export const Home = () => {
    return (
        <div className="relative text-center w-screen">
            {/* Imagen de Canva para pantallas grandes (lg y xl) */}
            <img src={canva} className="hidden sm:inline md:inline lg:inline xl:inline max-w-full h-auto object-fit-cover" alt="Imagen Canva" />

            {/* Imagen de Canva Mobile para pantallas pequeñas (sm y md) */}
            <img src={canvaMobile} className="inline sm:hidden max-w-full h-auto object-fit-cover" alt="Imagen Canva Mobile" />

            <div className="absolute inset-x-0 bottom-0 mb-20 lg:bottom-20 text-center">
                <a href="#proyectos" className="font-bold bg-orange-500 rounded p-2">
                    <span>Ver proyectos</span>
                </a>
            </div>
            <div className="absolute top-0">
                <Contacto />
            </div>
        </div>
    );
};
