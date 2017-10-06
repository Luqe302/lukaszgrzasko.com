import React from 'react'

class Main extends React.Component {
    render() {
        return <main>

            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="lead-presentation">
                                <div className="profile-photo">
                                    <img src="images/lukasz-grzasko.png" alt="Łukasz Grząśko profile photo"/>
                                </div>
                                <div className="slogan muted-text">front-end developer that focuses on using HTML, CSS and Javascript to build beautiful websites and user-friendly environments for web applications</div>
                                <h1>I'm a <span>Junior Front End Developer</span></h1>
                                <div className="contact">
                                    <a className="muted-text" href='mailto:lukasz.grzasko@hotmail.com'>lukasz.grzasko@hotmail.com</a>
                                    <a className="muted-text" href='tel:+48736901399'>+48 736 901 399</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="project-title">
                                <h2>Wybrane projekty</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-4">
                            <div className="project-wrapper">
                                <div className="each-project">
                                    <a href="http://localhost:8080/#/furrygame">
                                        <img src="images/showcase-furry.png" alt="example-image"/>
                                        <h3>Furry Game</h3>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="project-wrapper">
                                <div className="each-project">
                                    <a href="http://localhost:8080/#/sitonchair">
                                        <img src="images/showcase-top-sit.png" alt="example-image"/>
                                        <h3>Sit On Chair</h3>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="project-wrapper">
                                <div className="each-project">
                                    <a href="http://localhost:8080/#/nasaapichallange">
                                        <img src="images/showcase-nasa.png" alt="example-image"/>
                                        <h3>Nasa API Challange</h3>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    }
}

export default Main
