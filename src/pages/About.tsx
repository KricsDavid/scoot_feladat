import './css/about.css'

import about_title_bg from '../assets/about_title_bg.jpg'

import about1 from '../assets/about1.jpg'

import about2 from '../assets/about2.jpg'

import value1 from '../assets/value1.jpg'

import value2 from '../assets/value2.jpg'

import value3 from '../assets/value3.jpg'


const About = () => {
    return (
        <div id="about">
            <div className='title' style={{ backgroundImage: `url(${about_title_bg})` }}>
                <h1>About</h1>
            </div>

            <section>
                <div>
                    <h2>Mobility for the digital era</h2>
                    <p>Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips.</p>
                </div>

                <div>
                    <div className='about-image' style={{ backgroundImage: `url(${about1})` }}></div>
                </div>
            </section>

            <section>
                <div>
                    <div className='about-image' style={{ backgroundImage: `url(${about2})` }}></div>
                </div>
                <div>
                    <h2>Better urban living</h2>
                    <p>We're helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride.</p>
                </div>
            </section>

            <section className='values-section'>
                <h2>Our values</h2>

<div>
<div className="value-card">
                    <div className="value-image" style={{ backgroundImage: `url(${value1})` }}>
                        <div className="value-number">01</div>
                    </div>
                    <div>
                    <h3>Our tech</h3>
                    <p>We're using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!</p>
                    </div>
                </div>

                <div className="value-card">
                    <div className="value-image" style={{ backgroundImage: `url(${value2})` }}>
                        <div className="value-number">02</div>
                    </div>
                    <div>
                    <h3>Our integrity</h3>
                    <p>We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.</p>
                    </div>
                </div>

                <div className="value-card">
                    <div className="value-image" style={{ backgroundImage: `url(${value3})` }}>
                        <div className="value-number">03</div>
                    </div>
                    <div>
                    <h3>Our community</h3>
                    <p>We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.</p>
                    </div>
                </div>
</div>
            </section>
        </div>
    )
}

export default About