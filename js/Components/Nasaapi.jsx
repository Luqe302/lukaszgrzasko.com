import React from 'react'

class Nasaapi extends React.Component {
    render() {
        return <div className="project-page">
            <a className="return-arrow-container"  href="#">
                    <div className="return-arrow"></div>
            </a>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="project-title">
                            <h2>Nasa API Challange</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="first-picture-wrapper">
                            <div className="project-wrapper with-ajax">
                                <span className="slider-description">"Load more" z AJAX'em</span>
                                <div className="project-site-circle">
                                    <img className="nasaShowImage-1" src="images/nasa-load.png" alt="responsive-slider"/>
                                </div>
                            </div>
                            <div className="project-wrapper with-api">
                                <span className="mobile-description">Pobieranie zdjęć z API </span>
                                <div className="project-site-circle">
                                    <img className="nasaShowImage-2" src="images/nasa-code.png" alt="mobile-view"/>
                                </div>
                            </div>
                            <div className="project-wrapper with-popup">
                                <span className="flex-description">"Popup" przy podglądzie</span>
                                <div className="project-site-circle">
                                    <img className="nasaShowImage-3" src="images/nasa-popup.jpg" alt="flexbox-layout"/>
                                </div>
                            </div>
                            <div className="first-picture">
                                <img className="project-image" src="images/showcase-nasa.png" alt="sit-on-chair"/>
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

export default Nasaapi
