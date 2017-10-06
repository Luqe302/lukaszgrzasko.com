import React from 'react'


class Template extends React.Component {
    constructor(props){
        super(props);

        this.isActiveMenu = false;
    }

    toggleMenu = () => {

        var body = document.querySelector('body');
        body.className = this.isActiveMenu ? '' : 'active-menu';

        this.isActiveMenu = !this.isActiveMenu;

    };

    render() {

        return <div className="site">
            <nav id="mainNav" className="main-navigation-wrapper">
                <div className="menu-wrapper">
                    <ul>
                        <li onClick={this.toggleMenu}><a href="http://localhost:8080/#/">Strona Główna</a></li>
                        <li><a className="unclickable-link" href="#">Projekty</a>
                            <ul onClick={this.toggleMenu}>
                                <li>
                                    <a href="http://localhost:8080/#/furrygame">FurryGame</a>
                                </li>
                                <li>
                                    <a href="http://localhost:8080/#/sitonchair">SitOnChair</a>
                                </li>
                                <li>
                                    <a href="http://localhost:8080/#/nasaapichallange">NasaAPIChallenge</a>
                                </li>
                            </ul>
                        </li>
                        <li onClick={this.toggleMenu}><a href="#">Kontakt</a></li>
                    </ul>
                </div>
            </nav>
            <div className="main-content-wrapper">
                <div className="menu-toggler" onClick={this.toggleMenu}>
                    <span></span>
                </div>
                {
                    this.props.children
                }
                <footer>
                    <div className="footer-section-1">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                        <div className="contact-wrapper">
                                            <div className="social">
                                                <a href="https://www.linkedin.com/in/lukasz-grzasko/" target="_blank">
                                                    <img className="icon" src="images/icon-linkdin.svg" alt="Linkdin"/>
                                                </a>
                                                <a href="https://github.com/Luqe302" target="_blank">
                                                    <img className="icon" src="images/icon-github.svg" alt="Github"/>
                                                </a>
                                            </div>
                                            <div className="contact">
                                                <a href="mailto:lukasz.grzasko@hotmail.com">
                                                    <img className="icon" src="images/icon-message.svg" alt="e-mail"/>
                                                </a>
                                                <a href="tel:+48736901399">
                                                    <img className="icon" src="images/icon-phone.svg" alt="phone"/>
                                                </a>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-section-2">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="copyright-wrapper">
                                        <span>© 2017 Łukasz Grząśko</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    }
}

export default Template
