import aboutMe from '../Images/aboutMe.png'
import { useTranslation } from 'react-i18next'


export const AboutMe = () => {
    const [t, i18n] = useTranslation('global')

    return (
        <div className="mb-40 py-10 w-[80%] mx-auto ">
            <div className='text-white relative  text-xl'>
                <h1 className="text-5xl text-details font-rosarivo"><span className='text-detLight dark:text-white'>{t('about-title')} </span>{t('me-title')}</h1>
                <img src={aboutMe} alt="" className='h-[100px] sm:h-[150px] lg:h-[250px] absolute z-10 top-12 right-0 animate-wiggle-more animate-infinite animate-duration-[9111ms]' />
                <div className='text-details dark:text-white'>
                    <p className='w-[70%] my-3'>{t('am-text')}</p>
                    <p className='my-3 sm:w-[70%]'>{t('am-2text')}</p>

                    <p className='my-3 lg:w-[70%]'>{t('am-study')}</p>
                    <p className='lg:w-[70%]'>{t('am-soft')}</p>

                </div>
            </div>
        </div>
    )
}