import { FaJs, FaReact, FaCss3, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiSequelize, SiExpress, SiWebpack, SiPostman } from 'react-icons/si';
import { BiLogoPostgresql, BiLogoSass } from 'react-icons/bi';
import { TbBrandRedux } from 'react-icons/tb';
import { BsGit } from 'react-icons/bs';
import { FaBootstrap } from 'react-icons/fa6';
import { FiFigma } from 'react-icons/fi'
import { AiFillHtml5 } from 'react-icons/ai'

export const StackUno = () => {
    return (
        <div>
            <FaJs size={48} className='animate-wiggle-more animate-infinite animate-duration-[8000ms] m-3' color="#FFFF00" />
            <FaReact size={48} className=' animate-wiggle-more animate-infinite animate-duration-[8000ms] m-3' color="#61dafb" />
            <FaCss3 size={48} className=' animate-wiggle-more animate-infinite animate-duration-[8000ms] m-3' color="#336791" />
            <TbBrandRedux size={48} className=' animate-wiggle-more animate-infinite animate-duration-[8000ms] m-3' color="#563d7c" />
        </div>
    )
}

export const StackDos = () => {
    return (
        <div>
            <SiExpress size={48} className=' animate-wiggle-more animate-infinite animate-duration-[8000ms] m-3' color="#333" />
            <SiTailwindcss size={48} className=' animate-wiggle-more animate-infinite animate-duration-[8000ms] m-3' color="#61dafb" />
            <BiLogoPostgresql size={48} className=' animate-wiggle-more animate-infinite animate-duration-[8000ms] m-3' color="#336791" />
            <FaBootstrap size={48} className=' animate-wiggle-more animate-infinite animate-duration-[8000ms] m-3' color="#563d7c" />            
        </div>
    )
}

export const StackTres = () => {
    return (
        <div>
            <BiLogoSass size={48} className=' animate-wiggle-more animate-infinite animate-duration-[8000ms] m-3' color="#FECDA6" />
            <BsGit size={48} className=' animate-wiggle-more animate-infinite animate-duration-[8000ms] m-3' color="#FF5733" />
            <FaNodeJs size={48} className=' animate-wiggle-more animate-infinite animate-duration-[8000ms] m-3' color="#8cc84b" />
        </div>
    )
}

export const StackCuatro = () => {
    return (
        <div>
            <AiFillHtml5 size={48} className=' animate-wiggle-more animate-infinite animate-duration-[8000ms] m-3' color="#FECDA6" />
            <SiPostman size={48} className=' animate-wiggle-more animate-infinite animate-duration-[8000ms] m-3' color="#FF5733" />
            <SiSequelize size={48} className=' animate-wiggle-more animate-infinite animate-duration-[8000ms] m-3' color="#8cc84b" />
        </div>
    )
}