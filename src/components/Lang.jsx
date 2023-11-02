import { useTranslation } from 'react-i18next'

export const Lang = () => {
    const [t, i18n] = useTranslation('global')
    return (
        <div className='pt-12'>
            <button onClick={() => i18n.changeLanguage('es')}
                className={`relative py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all  hover:transition-all after:transition-all  after:hover:transition-all overflow-hidden z-20 after:z-[-20] after:bg-details after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-details hover:text-bgLight hover:dark:text-bg ${i18n.language === 'es' ? 'bg-details text-bgLight dark:text-bg' : ''}`}>
                ES
            </button>

            <button onClick={() => document.getElementById('my_modal_5').showModal()}
                className={`relative py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all  hover:transition-all after:transition-all  after:hover:transition-all overflow-hidden z-20 after:z-[-20] after:bg-details after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-details hover:text-bgLight hover:dark:text-bg ${i18n.language === 'en' ? 'bg-details text-bgLight dark:text-bg' : ''}`}>
                EN
            </button>


            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle bg-details rounded w-[80%] md:w-[35%] p-4 text-white">
                <div className="modal-box">
                    <p >Ten en cuenta que por el momento el chatbot solo está preparado para responder preguntas en español</p>
                    <div className="modal-action flex justify-end p-4">
                        <form method="dialog">
                            <button className="hover:bg-detLight font-bold p-2 rounded">Seguir en español</button>
                            <button className="hover:bg-detLight font-bold p-2 ml-2 rounded" onClick={() => i18n.changeLanguage('en')}>Aceptar</button>
                        </form>
                    </div>
                </div>
            </dialog>

        </div>
    )
}