import React from 'react'

class Sitonchair extends React.Component {
    render() {
        return <div className="project-page">
            <a className="return-arrow-container"  href="#">
                    <div className="return-arrow"></div>
            </a>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="project-title">
                            <h2>Sit on chair</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="first-picture-wrapper">
                            <div className="project-wrapper with-slider">
                                <span className="slider-description">Dynamic slider</span>
                                <div className="project-site-circle">
                                    <img className="sitShowImage-1" src="images/responsive-slider.jpg" alt="responsive-slider"/>
                                </div>
                            </div>
                            <div className="project-wrapper with-prizes">
                                <span className="mobile-description">Responsive layout </span>
                                <div className="project-site-circle">
                                    <img className="sitShowImage-2" src="images/responsive-mobile-view.jpg" alt="mobile-view"/>
                                </div>
                            </div>
                            <div className="project-wrapper with-flex">
                                <span className="flex-description">Flexbox grid</span>
                                <div className="project-site-circle">
                                    <img className="sitShowImage-3" src="images/flexbox-layout.jpg" alt="flexbox-layout"/>
                                </div>
                            </div>
                            <div className="first-picture">
                                <img className="project-image" src="images/showcase-top-sit.png" alt="sit-on-chair"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="btn-wrapper">
                            <a className="project-btn" href="https://github.com/Luqe302/Sit-on-chair-CodersLab" target="_blank">GitHub</a>
                            <a className="project-btn" href="https://luqe302.github.io/Sit-on-chair-CodersLab/" target="_blank">Demo</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Sitonchair
