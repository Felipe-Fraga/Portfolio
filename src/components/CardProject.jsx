
export const CardProject = ({ img, title, text, deploy, github, bg, tamIm}) => {
    const card = { backgroundColor: bg };
    const imgstyle = { height: tamIm, minWidth: tamIm }

    return (
        <article className="flex text-white mt-10 w-[90%] p-2 bg-white m-auto rounded" style={card}>
            <div>
                <img src={img} alt="Imágen demostrativa de To Do List" className="rounded" style={imgstyle}/>
            </div>
            <div className="ml-10">
                <h1 className="text-3xl">  <span> <a href={github} target="_blank" rel="noopener noreferrer">  </a> </span> {title} </h1>
                <p className="w-[80%] mt-8"> {text} </p>
            </div>
        </article>
    )
}