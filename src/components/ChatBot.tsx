import { useEffect, useRef, useState } from "react";
import { createPortal } from 'react-dom';
import { GiAstronautHelmet } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { FaSpaceAwesome } from 'react-icons/fa6'

type Message = {
    id: string;
    type: 'bot' | 'user';
    text: React.ReactNode;
};

const ANSWERS = {
    default: ( <p>No puedo responder en este momento, intenta hacer una pregunta más específica</p> ),
    intro: ( <p>Hazme preguntas acerca de Felipe y con gusto responderé</p> ),
    stack: ( <p> Ya que su preferencia es trabajar como fullstack enfocado en frontend suele usar javascript, react, vite, tailwindcss, express, node.js y postgreSQL, aunque lo que más le gusta es explorar nuevas tecnologías. <a href="#proyectos">Aquí su stack</a> </p> ),
    ingles: ( <p>Cuenta con un nivel de inglés claro y capacidad para entenderlo, trabajando en mejorarlo aún más para mejorar su comunicación</p> ),
    estudio: ( <p>
            Es estudiante de la Tecnicatura Universitaria en Programación y graduado full stack en Henry,
            además de formarse de manera autodidacta con proyectos propios y cursos en línea </p> ),
    trabajo: ( <p>Está trabajando en proyectos de manera autónoma y en búsqueda de su primer puesto junior</p> ),
    contacto: (<> <p> Puede seguir viendo su portafolio o ver sus redes. </p> <a className='text-detLight' href="https://www.linkedin.com/in/felipefraga/" target="blank">LinkedIn </a> <a className='text-detLight' href="https://github.com/Felipe-Fraga" target="blank"> GitHub</a> </> )
};


const EXAMPLES = [
    /* INTRO   */
    { "text": "hola", "label": "intro" },

    { "text": "asdasfrgeg", "label": "intro" },
    { "text": "wefgthj78jhr", "label": "intro" },
    { "text": "aasdasdasdasdck", "label": "intro" },



    /* STACK */
    { "text": "stack", "label": "stack" },
    { "text": "Cual es tu stack?", "label": "stack" },
    { "text": "Con que tecnologías trabajas?", "label": "stack" },
    { "text": "Con que tecnologías programa?", "label": "stack" },
    { "text": "En que lenguaje trabaja?", "label": "stack" },
    { "text": "En que lenguaje programa?", "label": "stack" },
    { "text": "Usa typescript?", "label": "stack" },
    { "text": "Usa javascript?", "label": "stack" },
    { "text": "Usa react?", "label": "stack" },
    { "text": "Usa angular?", "label": "stack" },
    { "text": "Usa bootstrap?", "label": "stack" },
    { "text": "Usa tailwind?", "label": "stack" },
    { "text": "sabe usar typescript?", "label": "stack" },


    /* INGLES */
    { "text": "ingles", "label": "ingles" },
    { "text": "Sabes inglés?", "label": "ingles" },
    { "text": "Hablas en inglés?", "label": "ingles" },
    { "text": "Cual es tu nivel de inglés?", "label": "ingles" },

    /* ESTUDIO */
    { "text": "estudios", "label": "estudio" },
    { "text": "Donde estudio?", "label": "estudio" },
    { "text": "que estudia?", "label": "estudio" },

    /* TRABAJO */
    { "text": "Donde trabajas?", "label": "trabajo" },
    { "text": "Tuvo algun trabajo?", "label": "trabajo" },
    { "text": "Ya trabajó?", "label": "trabajo" },
    { "text": "Ya trabajó alguna vez?", "label": "trabajo" },
    { "text": "Tiene experiencia trabajando?", "label": "trabajo" },
    { "text": "trabajo", "label": "trabajo" },
    { "text": "Cual es tu experiencia?", "label": "trabajo" },
    { "text": "Tenes experiencia?", "label": "trabajo" },

    /* CONTACTO */
    { "text": "Estas buscando trabajo?", "label": "contacto" },
    { "text": "Te interesa trabajar con nosotros?", "label": "contacto" },
    { "text": "Como es tu LinkedIn?", "label": "contacto" },
    { "text": "Como es tu github?", "label": "contacto" },
    { "text": "Como te puedo contactar?", "label": "contacto" },
    { "text": "Tenes curriculum?", "label": "contacto" },
    { "text": "Cual es tu curriculum?", "label": "contacto" },
    { "text": "Como me contacto?", "label": "contacto" },
    { "text": "Quiero contactarme?", "label": "contacto" },

]

const API_KEY = 'nygU1MQAwCjGe0KBKFQPzOu7RLVUv7AKJ74R8Pl9'

export function ChatBot() {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            type: 'bot',
            text: 'Buenas! Soy un bot para responder preguntas de Felipe, ¡preguntame lo que necesites saber acerca de su perfil!'
        },
    ]);
    const [question, setQuestion] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const container = useRef<HTMLDivElement>(null)
    const [isCollapsed, toggle] = useState<boolean>(true)

    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault()
        if (!question.trim() || loading) return;
        setLoading(true);
        setQuestion('')
        setMessages((messages) => messages.concat({ id: String(Date.now()), type: 'user', text: question }))
        const { classifications } = await fetch('https://api.cohere.ai/v1/classify', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'embed-english-v2.0',
                inputs: [question],
                examples: EXAMPLES
            })
        }).then(res => res.json())

        console.log(classifications);

        setMessages((messages) => messages.concat({ id: String(Date.now()), type: 'bot', text: ANSWERS[classifications[0].prediction as keyof typeof ANSWERS] || ANSWERS['default'] }))
        setLoading(false)
    }

    useEffect(() => {
        container.current?.scrollTo(0, container.current.scrollHeight)
    }, [messages, isCollapsed])

    return createPortal(
        <div className={`bg-bgLight dark:bg-bg fixed bottom-0 right-0 ${!isCollapsed ? 'border border-details ' : 'bg-opacity-0 dark:bg-opacity-0'} m-2 bg-bg w-auto flex flex-col`}>
            {isCollapsed ? (
                <button onClick={() => toggle(false)} className='w-13 md:w-16 p-4 bg-details m-2 rounded-full'> <GiAstronautHelmet className="w-[24px] h-[24px] md:w-[32px] md:h-[32px]"/> </button>
            ) : (
                <div>
                    <button onClick={() => toggle(true)} className="absolute rounded-full p-2  bg-details -left-3 -top-4"> <AiOutlineClose /> </button>
                    <div className="flex flex-col gap-4  p-4 rounded-md max-w-sm m-auto">
                        <div className="flex flex-col gap-4 h-[300px] overflow-y-auto" ref={container}>
                            {messages.map((message) => (
                                <div key={message.id} className={`p-4 max-w-[80%] rounded-3xl ${message.type === 'bot' ? 'bg-details text-left self-start rounded-bl-none' : 'bg-detLight text-right self-end rounded-br-none'}`}>{message.text}</div>
                            ))}
                        </div>
                        <form className="flex items-center" onSubmit={handleSubmit}>
                            <input type="text" name='question' value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Con que tecnologías trabaja?" className="bg-bgLight dark:bg-bg  rounded rounded-full flex-1 border border-details p-2 text-details" />
                            <button disabled={loading} type="submit" className={`p-2 rounded-full ${loading ? 'text-detLight' : 'text-details'}`}> <FaSpaceAwesome /> </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
        ,
        document.getElementById('chatbot') as HTMLDivElement
    );
};

