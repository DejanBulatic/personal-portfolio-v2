import React from 'react'

const Skills = () => {
    return (
        <section className="section-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <aside className="header-wraper">
                            <h4 className="section-header">Skills</h4>
                        </aside>
                    </div>
                    <div className="col-12 col-md-8">
                        <div className="row">
                            <div className="col-6 col-lg-3">
                                <ul>
                                    <li><h4 className="skills-header">Languages</h4></li>
                                    <li>JavaScript</li>
                                    <li>HTML</li>
                                    <li>CSS/Sass</li>
                                    <li>GraphQl</li>
                                </ul>
                            </div>
                            <div className="col-6 col-lg-3">
                                <ul>
                                    <li><h4 className="skills-header">Frameworks</h4></li>
                                    <li>React.js</li>
                                    <li>Gatsbt.js</li>
                                    <li>jQuery</li>
                                    <li>Bootstrap</li>
                                    <li>Bulma</li>
                                </ul>
                            </div>
                            <div className="col-6 col-lg-3">
                                <ul>
                                    <li><h4 className="skills-header">Tools</h4></li>
                                    <li>Git</li>
                                    <li>Github</li>
                                    <li>Webpack</li>
                                    <li>NPM</li>
                                    <li>Chrome devtools</li>
                                    <li>Google Analytics</li>
                                </ul>
                            </div>
                            <div className="col-6 col-lg-3">
                                <ul>
                                    <li><h4 className="skills-header">Design</h4></li>
                                    <li>inVision</li>
                                    <li>Photoshop</li>
                                    <li>Figma</li>
                                    <li>Corel Draw</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills