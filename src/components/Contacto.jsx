import { AiOutlineMail, AiOutlineLinkedin } from 'react-icons/ai'
import { LiaNewspaper } from 'react-icons/lia'
import { FiGithub } from 'react-icons/fi'

export const Contacto = () => {
    return (
        <div className="flex space-x-4 text-details">
            <a href='https://github.com/Felipe-Fraga' target='blank'>
                <FiGithub className="w-8 h-8" />
            </a>

            <a href='https://www.linkedin.com/in/felipefraga/' target='blank'>
                <AiOutlineLinkedin className="w-8 h-8" />
            </a>

            <a href='https://mail.google.com/mail/u/0/?hl=es#inbox?compose=CllgCJqVwLvdQkRWpcfclXJRrDcCMBjnLgChdWdxqNvGzlDNZmDcRlZXPCbWdfBNBpRkvcJQZkL' target='blank'>
                <AiOutlineMail className="w-8 h-8" />
            </a>

            <a href='https://docs.google.com/document/d/1hWIm0BhlkGDjETVYOfEAML94BxMgs3kQvgYBq1H2IY4/edit#heading=h.uhqjkfyivtwf' target='blank'>
                <LiaNewspaper className="w-8 h-8" />
            </a>
        </div>
    )
}

