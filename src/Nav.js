import {Link} from 'react-router-dom';
    
const Nav = () => {
    return(
        <nav className="font-mono max-w-7xl p-16">
            <ul className="flex flex-wrap md:justify-end justify-center  space-x-8 space-y-8 m-0 p-0 list-none">
                <li className="lg:w-full text-2xl font-bold w-full ">
                    <h1>
                        <a href="index.html" className="font-sans">
                            <span className="fas fa-code text-aqua hover:text-hotmag mr-2"></span>
                            <span className="text-white hover:text-hotmag">Rahman Swati.</span>
                        </a>
                    </h1>
                </li>
                <li className=""><a className="text-white" href="#projects">Projects</a></li>
                <li><a><Link className='text-white' to={'about'}>About</Link></a></li>
                <li><a className="text-white" href="#contacts">Contacts</a></li>
                <li>
                    <a href="https://linkedin.com/in/remanswati" >
                        <span className="fab fa-linkedin text-aqua hover:text-hotmag text-2xl"></span>
                        <span className="sr-only">linkedIn</span>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/remanswaty/">
                        <span className="fab fa-github text-aqua hover:text-hotmag text-2xl "></span>
                        <span className="sr-only">Github</span>
                    </a>
                </li>
                <li className=""><a href="" target="blank" className="button bg-magenta text-white p-2 rounded hover:text-white hover:bg-hotmag">Resume</a></li>
                
            </ul>
        </nav>
    );
}

export default Nav;