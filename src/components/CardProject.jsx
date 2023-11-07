import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi'
import { TbWorldWww } from 'react-icons/tb'
import { FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiSequelize, SiExpress, SiAuth0, SiVite } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';
import { TbBrandRedux } from 'react-icons/tb';

export const CardProject = ({ img, title, text, deploy, github, bg, stack }) => {
    const card = { backgroundColor: bg };
    const [isInfoVisible, setIsInfoVisible] = useState(false);

    const toggleInfo = () => {
        setIsInfoVisible(!isInfoVisible);
    };

    return (
        <div className="md:max-w-xs">
            <div className={`rounded overflow-hidden shadow-lg shadow-detLight dark:shadow-black w-[100%] ${isInfoVisible ? 'h-auto' : ''}`} style={card}>
                <img src={img} alt="Proyecto" className="w-full h-[250px] object-fit" />
                <div className="p-6 text-white">
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-1xl sm:text-2xl font-semibold">{title}</h2>
                        <div className='flex justify-between w-[25%]'>
                            <button onClick={toggleInfo}> {isInfoVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />} </button>
                            <a href={deploy} target='blank'> <TbWorldWww /> </a>
                            {github && <a href={github} target='blank'> <FiGithub /> </a>}
                        </div>
                    </div>
                    {isInfoVisible && (
                        <div>
                            <div className='flex justify-around w-[70%] mx-auto my-3'>
                                {stack.includes('FaJs') && <FaJs />}
                                {stack.includes('FaReact') && <FaReact />}
                                {stack.includes('SiVite') && <SiVite />}
                                {stack.includes('SiTailwindcss') && <SiTailwindcss />}
                                {stack.includes('TbBrandRedux') && <TbBrandRedux />}
                                {stack.includes('SiAuth0') && <SiAuth0 />}
                                {stack.includes('FaNodeJs') && <FaNodeJs />}
                                {stack.includes('FiSequelize') && <SiSequelize />}
                                {stack.includes('SiExpress') && <SiExpress />}
                                {stack.includes('BiLogoPostgresql') && <BiLogoPostgresql />}
                            </div>
                            <p className="max-h-36 overflow-y-auto">{text}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

