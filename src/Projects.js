
const Projects = () => {
    return(
        <div id="projects" className="bg-dkblue px-4 py-16 md:px-10 lg:p-16">
            <h2 className="pb-10 text-4xl font-bold">Projects I'm proud of</h2>
            <article className="py-16">
                <div className="lg:flex lg:relative">
                    <div className="lg:z-10 lg:w-2/5 lg:absolute lg:top-[-40px] lg:right-60">
                        <h4 className="font-bold lg:text-right">Latest Project</h4>
                        <h3 className="text-2xl pb-4 text-aqua lg:text-right">Wall Of Wonder</h3>
                        <p className="bg-black p-3 rounded-2xl text-l mb-4">Description of the project. This should be fairly concise while also describing the key components that you developed or worked on. It can be as long as you need it to be but should at least be a few sentences long. Be sure to include specific links anywhere in the description. A link looks like <a>this</a>, and multiple links look like <a>this</a> and <a>like this</a>.</p>
                        <h4 className="font-bold leading-0 lg:text-right">Technologies used include</h4>
                        <ul className="flex space-x-3 pb-4 lg:justify-end lg:text-right">
                            <li className="">HTML</li>
                            <li>CSS</li>
                            <li>SVG</li>
                        </ul>
                    </div>
                    <div className="lg:w-3/5 lg:z-0">
                        <img className="border-t-2 border-l-2 rounded-2xl p-4" src="https://assets.codepen.io/296057/fem-gettingstartedcss-ch5-1.png" alt="Screenshot of the Wall of Wonder."></img>
                    </div>
                </div>
            </article>

            <article className="lg:pb-[10rem]">
                <div className="lg:flex lg:relative">
                    <div className=" lg:z-10 lg:w-2/5 ">
                        <h4 className="font-bold">Bootcamp Project</h4>
                        <h3 className="text-2xl pb-4 text-aqua">Feed-A-Star-Mole Game</h3>
                        <p className="bg-black p-3 rounded-2xl text-l mb-4">Description of the project. This should be fairly concise while also describing the key components that you developed or worked on. It can be as long as you need it to be but should at least be a few sentences long. Be sure to include specific links anywhere in the description. A link looks like <a>this</a>, and multiple links look like <a>this</a> and <a>like this</a>.</p>
                        <h4 className="font-bold leading-0 ">Technologies used include</h4>
                        <ul className="flex space-x-3 pb-4 lg:text-right">
                            <li className="">HTML</li>
                            <li>CSS</li>
                            <li>SVG</li>
                        </ul>
                    </div>
                    <div className="lg:w-3/5 lg:z-0 lg:absolute lg:top-[40px] lg:left-60">
                        <img className="border-t-2 border-l-2 rounded-2xl p-4" src="https://assets.codepen.io/296057/fem-gettingstartedcss-ch5-5.png" alt="Screenshot of the Frontend Masters Bootcamp." ></img>
                    </div>
                </div>
            </article>

            <article className="py-16">
                <div className="lg:flex lg:relative">
                    <div className="lg:order-2 lg:z-10 lg:w-2/5 lg:absolute lg:top-[-40px] lg:right-60">
                        <h4 className="font-bold lg:text-right">Photography Project</h4>
                        <h3 className="text-2xl pb-4 text-aqua lg:text-right">Wall of Wonder Collection</h3>
                        <p className="bg-black p-3 rounded-2xl text-l mb-4">Description of the project. This should be fairly concise while also describing the key components that you developed or worked on. It can be as long as you need it to be but should at least be a few sentences long. Be sure to include specific links anywhere in the description. A link looks like <a>this</a>, and multiple links look like <a>this</a> and <a>like this</a>.</p>
                        <h4 className="font-bold leading-0 lg:text-right">Technologies used include</h4>
                        <ul className="flex space-x-3 pb-4 lg:justify-end lg:text-right">
                            <li >HTML</li>
                            <li>Flex</li>
                            <li>Tailwind</li>
                        </ul>
                    </div>
                    <div className=" lg:order-1 lg:w-3/5 lg:z-0">
                        <img className="border-t-2 border-l-2 rounded-2xl p-4" src="https://assets.codepen.io/296057/fem-gettingstartedcss-ch5-4.png" alt="Screenshot of the Wall of Wonder Collections."   ></img>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default Projects;