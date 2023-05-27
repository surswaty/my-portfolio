
const Footer = () => {
    return(
        <div className="m-0 m-auto text-center px-4 md:px-16 py-16">
            <h2 className="text-3xl pb-8">Rahman Swati. · Developer</h2>
            <ul className="flex pb-8 justify-center space-x-8">
                <a href="https://linkedin.com/in/remanswati" >
                    <span className="fab fa-linkedin text-5xl"></span>
                    <span className="sr-only">linkedIn</span>
                </a>
                <a href="https://github.com/remanswaty/">
                    <span className="fab fa-github text-5xl "></span>
                    <span className="sr-only">Github</span>
                </a>
                <a href="mailto:yemshams@gmail.com">
                    <span className="fas fa-envelope text-5xl "></span>
                    <span className="sr-only">email</span>
                </a>
            </ul>
            <p><small>© 2022 Shams U. All rights reserved</small></p>
        </div>
    );
}

export default Footer;