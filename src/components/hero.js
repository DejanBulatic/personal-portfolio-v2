import React from 'react'
import WavingHand from '../images/waving-hand.png'
import DejanProfileImage from '../images/dejan-round.png'

const Hero = () => {
    return (
        <section className="heroSection">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-7 helloContent">
                        <div>
                            <h1 className="hello">Hello! <span className="waveHand"><img src={WavingHand} /></span></h1>
                            <h1 className="helloText">
                                I'm
                                Dejan Bulatic, a software engineer
                            who enjoys developing exeptional, high-quality websites &amp; applications.
                            </h1>
                        </div>
                    </div>
                    <div className="col-12 col-md-5 heroImage">
                        <figure>
                            <img src={DejanProfileImage} alt="Author" />
                        </figure>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Hero