import { IoMdContact } from 'react-icons/io'
import { Contacto } from './Contacto'
import { useTranslation } from 'react-i18next';

export const Footer = () => {
    const [t, i18n] = useTranslation('global')

    return (
        <footer className="text-details body-font w-[80%] m-auto mb-6">
            <div className="flex items-center sm:flex-row flex-col md:justify-between">
                <p className="flex title-font font-medium items-center md:justify-start justify-center hidden md:inline">
                    <IoMdContact size={32} className='hidden md:inline'/>
                    <span className="ml-3 md:text-xl">{t("contact")}</span>
                </p>
                <div>
                    <Contacto />
                </div>
            </div>
        </footer>

    )
}
