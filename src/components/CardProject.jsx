import React, { useState } from 'react';

export const CardProject = ({ img, title, text, deploy, github, bg }) => {
    const card = { backgroundColor: bg };
    const [isInfoVisible, setIsInfoVisible] = useState(false);

    const toggleInfo = () => {
        setIsInfoVisible(!isInfoVisible);
    };

    return (
        <div className="md:max-w-xs">
            <div className={`rounded-lg overflow-hidden shadow-lg w-[100%] ${isInfoVisible ? 'h-auto' : ''}`} style={card}>
                <img src={img} alt="Proyecto" className="w-full h-[250px] object-fit" />
                <div className="p-6 text-white">
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-2xl font-semibold">{title}</h2>
                        <button onClick={toggleInfo} className="text-blue-500 hover:underline">
                            <i className={`fas ${isInfoVisible ? 'fa-eye-slash' : 'fa-eye'} mr-2`}></i>
                            {isInfoVisible ? 'Ocultar' : 'Ver más'}
                        </button>
                    </div>
                    {isInfoVisible && (
                        <div className="max-h-36 overflow-y-auto">
                            <p>{text}</p>
                            <div className="flex justify-between">
                                <a href={deploy} target='blank' className="hover:underline">Ver en Deploy</a>
                                {github && <a href={github} target='blank' className="hover:underline">Repositorio en GitHub</a>}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

