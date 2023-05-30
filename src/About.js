
const About = () => {
    return(
        <div className="bg-dkblue px-4 py-16 md:px-10 lg:p-16">
            <h2 className="pb-10 text-4xl font-bold">About Rahman Swati</h2>
            <article className="py-16">
                <div className="lg:flex lg:relative max-w-[1100px]">
                    <div className="lg:z-10 lg:w-2/5 lg:absolute lg:top-[40px] lg:right-60">
                        <p className="bg-black p-3 rounded-2xl text-l mb-4">Description of the project. This should be fairly concise while also describing the key components that you developed or worked on. It can be as long as you need it to be but should at least be a few sentences long. Be sure to include specific links anywhere in the description. A link looks like <a>this</a>, and multiple links look like <a>this</a> and <a>like this</a>.</p>
                        <h4 className="font-bold leading-0 lg:text-right">My favorite Technologies include</h4>
                        <ul className="flex space-x-3 pb-4 lg:justify-end lg:text-right">
                            <li className="">Solidity</li>
                            <li>JavaScript</li>
                            <li>ReactJs</li>
                        </ul>
                    </div>
                    <div className="lg:w-3/5 lg:z-0">
                        <img className="border-t-2 border-l-2 rounded-2xl p-4" src="https://avatars.githubusercontent.com/u/55982732?v=4" alt="profile picture"></img>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default About;