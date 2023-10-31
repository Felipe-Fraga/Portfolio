import astronauta from '../Images/astronauta.png'
import { Contacto } from './Contacto'
import { FaJs, FaReact, FaCss3, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiSequelize, SiExpress, SiWebpack, SiPostman } from 'react-icons/si';
import { BiLogoPostgresql, BiLogoSass } from 'react-icons/bi';
import { TbBrandRedux } from 'react-icons/tb';
import { BsGit } from 'react-icons/bs';
import { FaBootstrap } from 'react-icons/fa6';
import { FiFigma } from 'react-icons/fi'
import { AiFillHtml5 } from 'react-icons/ai'
import { CardProject } from './CardProject';
import caece from '../Images/caece.jpg'
import henry from '../Images/henry.jpg'

export const SobreMi = () => {
    return (
        <div className="h-screen py-16 ">
            <h1 className="text-5xl text-center text-white">Aptitudes</h1>
            <div className='m-10 flex text-white'>
                <img src={astronauta} alt="" className='w-[300px]' />

                <div className="grid grid-cols-4 gap-4 mx-10">
                    <FaJs size={64} color="#f0db4f" />
                    <FaReact size={64} color="#61dafb" />
                    <SiTailwindcss size={64} color="#1572b6" />
                    <TbBrandRedux size={64} color="#336791" />
                    <FaCss3 size={64} color="#1572b6" />
                    <FaNodeJs size={64} color="#8cc84b" />
                    <BiLogoPostgresql size={64} color="#336791" />
                    <SiSequelize size={64} color="#4caf50" />
                    <SiExpress size={64} color="#333" />
                    <BsGit size={64} color="#f34f29" />
                    <FaBootstrap size={64} color="#563d7c" />
                    <SiWebpack size={64} color="#1572b6" />
                    <FiFigma size={64} color="#f39f99" />
                    <AiFillHtml5 size={64} color="#f34f29" />
                    <SiPostman size={64} color="#f34f29" />
                    <BiLogoSass size={64} color="#f34f29" />
                </div>

                <div>
                    <CardProject img={caece} title={'Universidad CAECE'} text={'Estudiante de la Tecnicatura Universitaria en Programación'} bg={'#000'} tamIm={'150px'} />
                    <CardProject img={henry} title={'Soy Henry'} text={'Graduado del bootcamp Soy Henry'} bg={'#000'} tamIm={'150px'} />
                </div>
            </div>
            <div className=" flex justify-center bg-black pb-4">
                <Contacto />
            </div>
        </div>
    )
}

