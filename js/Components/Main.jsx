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
                                    <img src="images/lukasz-grzasko.jpg" alt="Łukasz Grząśko profile photo"/>
                                </div>
                                <div className="slogan muted-text">front-end developer that focuses on using HTML, CSS and Javascript to build beautiful websites and user-friendly environments for web applications</div>
                                <h1>I'm a <span>Junior Front End Developer</span></h1>
                                <div className="contact">
                                    <a className="muted-text" href='#'>lukasz.grzasko@hotmail.com</a>
                                    <a className="muted-text" href='#'>+48 736 901 399</a>
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
                                    <a href="http://localhost:8080/#/projects">
                                        <img src="images/project.png" alt="example-image"/>
                                        <h3>Project name</h3>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="project-wrapper">
                                <div className="each-project">
                                    <a href="http://localhost:8080/#/projects">
                                        <img src="images/project.png" alt="example-image"/>
                                        <h3>Project name</h3>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="project-wrapper">
                                <div className="each-project">
                                    <a href="http://localhost:8080/#/projects">
                                        <img src="images/project.png" alt="example-image"/>
                                        <h3>Project name</h3>
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
