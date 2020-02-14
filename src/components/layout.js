import React from 'react'
import '../styles/main.scss'
import '../styles/bootstrap-grid.css'

import Header from './header'
import Hero from './hero'
import About from './about'
import Skills from './skills'
import Projects from './projects'
import Video from './videos'
import Footer from './footer'

const Layout = () => {
    return (
        <div>
            <Header />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Video />
            <Footer />
        </div>
    )
}

export default Layout