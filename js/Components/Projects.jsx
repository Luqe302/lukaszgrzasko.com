import React from 'react'

class Projects extends React.Component {
    render() {
        return <div className="project-page">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="project-title">
                            <h2>Wybrane projekty</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="first-picture-wrapper">
                            <div className="first-picture">
                                <img className="project-image" src="../images/example-mockup.png" alt="nazwa projektu"/>
                                <div className="project-wrapper">
                                    <div className="each-project">
                                        <img className="showImage-1" src="images/project.png" alt="example-image"/>
                                        <span>Zobacz</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Projects
