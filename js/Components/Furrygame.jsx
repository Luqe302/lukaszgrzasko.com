import React from 'react'

class Furrygame extends React.Component {
    render() {
        return <div className="project-page">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="project-title">
                            <h2>Furry game</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="first-picture-wrapper">
                            <div className="project-wrapper with-score">
                                <span className="slider-description">Dynamiczny slider</span>
                                <div className="each-project">
                                    <img className="furryShowImage-1" src="images/furry-score.jpg" alt="responsive-slider"/>
                                </div>
                            </div>
                            <div className="project-wrapper with-flash">
                                <span className="mobile-description">Responsywny layout </span>
                                <div className="each-project">
                                    <img className="furryShowImage-2" src="images/furry-flash.jpg" alt="mobile-view"/>
                                </div>
                            </div>
                            <div className="project-wrapper with-code">
                                <span className="flex-description">Flexbox layout</span>
                                <div className="each-project">
                                    <img className="furryShowImage-3" src="images/furry-code.jpg" alt="flexbox-layout"/>
                                </div>
                            </div>
                            <div className="first-picture">
                                <img className="project-image" src="images/showcase-furry.png" alt="sit-on-chair"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="btn-wrapper">
                            <a className="project-btn" href="#">Live preview</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Furrygame
