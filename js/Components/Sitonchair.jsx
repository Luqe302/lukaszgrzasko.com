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
                                <span className="slider-description">Dynamiczny slider</span>
                                <div className="project-site-circle">
                                    <img className="sitShowImage-1" src="images/responsive-slider.jpg" alt="responsive-slider"/>
                                </div>
                            </div>
                            <div className="project-wrapper with-prizes">
                                <span className="mobile-description">Responsywny layout </span>
                                <div className="project-site-circle">
                                    <img className="sitShowImage-2" src="images/responsive-mobile-view.png" alt="mobile-view"/>
                                </div>
                            </div>
                            <div className="project-wrapper with-flex">
                                <span className="flex-description">Flexbox grid</span>
                                <div className="project-site-circle">
                                    <img className="sitShowImage-3" src="images/flexbox-layout.png" alt="flexbox-layout"/>
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
                            <a className="project-btn" href="#">Code preview</a>
                            <a className="project-btn" href="#">Live preview</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Sitonchair
