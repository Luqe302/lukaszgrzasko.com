import React from 'react'

class Template extends React.Component {
    render() {
        return <div classNameName="site">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="menu-toggler">
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
            <nav></nav>
            {
                this.props.children
            }
            <footer>
                <div className="footer-section-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                    <div className="contact-wrapper">
                                        <span>GH</span>
                                        <span>LIN</span>
                                        <span>email</span>
                                        <span>phone</span>
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
    }
}

export default Template
